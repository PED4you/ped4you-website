import { useState, useEffect, useCallback, useRef } from "react"

// eslint-disable-next-line import/namespace
import * as ort from "onnxruntime-web"

interface InferenceResult {
  prediction: "positive" | "negative"
  probability: number
  allProbabilities: number[]
}

export const useOnnxInference = (modelPath: string) => {
  const [session, setSession] = useState<ort.InferenceSession | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    async function initSession() {
      try {
        // Configure WASM paths for onnxruntime-web
        ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.2/dist/"

        // Create absolute URL for the model
        const absoluteModelPath = modelPath.startsWith("http") ? modelPath : `${window.location.origin}/${modelPath}`

        // eslint-disable-next-line import/namespace
        const sess = await ort.InferenceSession.create(absoluteModelPath)
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
          const width = 224
          const height = 224
          canvas.width = width
          canvas.height = height
          ctx.drawImage(img, 0, 0, width, height)

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

  return { predict, loading, sessionReady: !!session }
}
