import { useState, useEffect, useCallback } from "react"

interface InferenceResult {
  prediction: "positive" | "negative"
  probability: number
  allProbabilities: number[]
}

const CACHE_NAME = "onnx-model-cache"

// Global map to track loading promises to avoid redundant fetches
const loadingPromises: Record<string, Promise<ArrayBuffer>> = {}

async function fetchWithProgress(
  url: string,
  onProgress: (progress: number) => void
): Promise<ArrayBuffer> {
  // Check if we already have a loading promise for this URL
  if (await loadingPromises[url]) {
    return loadingPromises[url]
  }

  const fetchPromise = (async () => {
    // 1. Try Cache API first
    const cache = await caches.open(CACHE_NAME)
    const cachedResponse = await cache.match(url)

    if (cachedResponse) {
      onProgress(100)
      return await cachedResponse.arrayBuffer()
    }

    // 2. Fetch with progress
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Failed to fetch model: ${response.statusText}`)

    const contentLength = response.headers.get("content-length")
    const total = contentLength ? parseInt(contentLength, 10) : 0
    let loaded = 0

    const reader = response.body?.getReader()
    if (!reader) throw new Error("ReadableStream not supported")

    const chunks: Uint8Array[] = []
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      chunks.push(value)
      loaded += value.length
      if (total) {
        onProgress(Math.round((loaded / total) * 100))
      }
    }

    const blob = new Blob(chunks)
    const buffer = await blob.arrayBuffer()

    // 3. Store in cache for next time
    // We clone the response-like object to store it
    await cache.put(url, new Response(blob))

    return buffer
  })()

  loadingPromises[url] = fetchPromise

  try {
    return await fetchPromise
  } finally {
    // We keep the promise in the map so subsequent calls get the same result immediately
    // but you might want to clear it on error if you want to retry
  }
}

export const useOnnxInference = (modelPath: string) => {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [loadingProgress, setLoadingProgress] = useState<number>(0)

  useEffect(() => {
    async function initSession() {
      try {
        setLoading(true)
        // eslint-disable-next-line import/namespace
        const ort = await import("onnxruntime-web")

        const modelBuffer = await fetchWithProgress(modelPath, (p) => {
          setLoadingProgress(p)
        })

        const sess = await ort.InferenceSession.create(modelBuffer)
        setSession(sess)
      } catch (e) {
        console.error("Failed to load ONNX model:", e)
      } finally {
        setLoading(false)
      }
    }
    initSession()
  }, [modelPath])

  const predict = useCallback(
    async (imageSrc: string): Promise<InferenceResult | null> => {
      if (!session) return null

      return new Promise((resolve) => {
        const img = new Image()
        img.src = imageSrc
        img.onload = async () => {
          const canvas = document.createElement("canvas")
          const ctx = canvas.getContext("2d")
          if (!ctx) return resolve(null)

          // FastAI standard dimensions
          const targetSize = 224
          canvas.width = targetSize
          canvas.height = targetSize

          // Fill with white background (for letterboxing)
          ctx.fillStyle = "#FFFFFF"
          ctx.fillRect(0, 0, targetSize, targetSize)

          // Calculate scaling to fit image while preserving aspect ratio (object-contain)
          const scale = Math.min(targetSize / img.width, targetSize / img.height)
          const scaledWidth = img.width * scale
          const scaledHeight = img.height * scale

          // Center the image
          const offsetX = (targetSize - scaledWidth) / 2
          const offsetY = (targetSize - scaledHeight) / 2

          ctx.drawImage(img, offsetX, offsetY, scaledWidth, scaledHeight)

          const width = targetSize
          const height = targetSize

          const imageData = ctx.getImageData(0, 0, width, height).data
          const red: number[] = []
          const green: number[] = []
          const blue: number[] = []

          // ImageNet Normalization used by FastAI
          for (let i = 0; i < imageData.length; i += 4) {
            red.push((imageData[i] / 255 - 0.485) / 0.229)
            green.push((imageData[i + 1] / 255 - 0.456) / 0.224)
            blue.push((imageData[i + 2] / 255 - 0.406) / 0.225)
          }

          const float32Data = new Float32Array([...red, ...green, ...blue])
          // eslint-disable-next-line import/namespace
          const ort = await import("onnxruntime-web")
          const inputTensor = new ort.Tensor("float32", float32Data, [1, 3, width, height])

          // Run inference
          const inputName = session.inputNames[0]
          const outputName = session.outputNames[0]
          const feeds = { [inputName]: inputTensor }

          const results = await session.run(feeds)
          const logits = results[outputName].data as Float32Array

          // Softmax implementation
          const maxLogit = Math.max(...Array.from(logits))
          const scores = Array.from(logits).map((l) => Math.exp(l - maxLogit))
          const totalScore = scores.reduce((a, b) => a + b, 0)
          const probabilities = scores.map((s) => s / totalScore)

          // Index 1 is usually 'positive' in FastAI binary classification
          const predictionIdx = probabilities.indexOf(Math.max(...probabilities))

          resolve({
            prediction: predictionIdx === 1 ? "positive" : "negative",
            probability: probabilities[predictionIdx],
            allProbabilities: probabilities,
          })
        }
      })
    },
    [session]
  )

  return { predict, loading, loadingProgress, sessionReady: !!session }
}
