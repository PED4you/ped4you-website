import { useCallback, useEffect, useRef, useState } from "react"

import { ReactSketchCanvasRef } from "react-sketch-canvas"

import { useOnnxInference } from "@/utils/useOnnx"

interface UseBallotInferenceOptions {
  debounceMs?: number
  modelPath?: string
}

interface UseBallotInferenceReturn {
  canvasRef: React.RefObject<ReactSketchCanvasRef>
  isGood: boolean
  submitting: boolean
  hasDrawn: boolean
  clearCanvas: () => void
  onCanvasChange: () => void
}

export const useBallotInference = (options: UseBallotInferenceOptions = {}): UseBallotInferenceReturn => {
  const { debounceMs = 1500, modelPath = "onnx_model.onnx" } = options

  const canvasRef = useRef<ReactSketchCanvasRef>(null!)
  const timerIdRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [submitting, setSubmitting] = useState(false)
  const [isGood, setIsGood] = useState(false)
  const [hasDrawn, setHasDrawn] = useState(false)
  const [pendingInference, setPendingInference] = useState(false)

  const { predict, sessionReady } = useOnnxInference(modelPath)

  const runInference = useCallback(async () => {
    if (!canvasRef.current || !sessionReady) return

    try {
      const data = await canvasRef.current.exportImage("png")
      const result = await predict(data)

      if (result) {
        setIsGood(result.prediction === "positive")
      }
    } catch (e) {
      console.error("Inference Error:", e)
    } finally {
      setSubmitting(false)
    }
  }, [predict, sessionReady])

  useEffect(() => {
    if (pendingInference && hasDrawn) {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current)
      }

      setSubmitting(true)

      timerIdRef.current = setTimeout(() => {
        runInference()
        setPendingInference(false)
      }, debounceMs)
    }

    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current)
      }
    }
  }, [pendingInference, hasDrawn, debounceMs, runInference])

  const onCanvasChange = useCallback(() => {
    setHasDrawn(true)
    setPendingInference(true)
  }, [])

  const clearCanvas = useCallback(() => {
    canvasRef.current?.clearCanvas()
    setHasDrawn(false)
    setIsGood(false)
    setPendingInference(false)
    setSubmitting(false)
  }, [])

  return {
    canvasRef,
    isGood,
    submitting,
    hasDrawn,
    clearCanvas,
    onCanvasChange,
  }
}
