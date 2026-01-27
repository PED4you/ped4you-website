import { useEffect, useRef, useState } from "react"

import { CanvasPath, ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas"

import { Button } from "@/components/common/Home/Button"
import {useOnnxInference} from "@/utils/useOnnx"

import FYIMarking from "./FYIMarking"


export default function RegionMark({ nextPage }: { nextPage: () => void }) {
  const canvasRef = useRef<ReactSketchCanvasRef | null>(null)

  // add cooldown timeout
  const [isCoolingDown, setIsCoolingDown] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const timerIdRef = useRef<any>(null)

  const [pathInput, setPathInput] = useState<CanvasPath | null>(null)

  const [count, setCount] = useState(0)
  const [isGood, setIsGood] = useState(false)
  const [empty, setEmpty] = useState(true)

  const { predict, sessionReady } = useOnnxInference('onnx_model.onnx');

  useEffect(() => {
    fetch("https://api.ped4you.com/", {
      method: "GET",
    }) // warm start
  }, [])

  useEffect(() => {
    if (isCoolingDown && !empty) {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current)
      }
      setSubmitting(true);

      timerIdRef.current = setTimeout(() => {
        canvasRef.current?.exportImage("png").then(async (data: string) => {

          try {
            const result = await predict(data);

            if (result) {
              // Map prediction to your 'isGood' state
              setIsGood(result.prediction === "positive");
            }
          } catch (e) {
            console.error("Inference Error:", e);
          } finally {
            setSubmitting(false);
            setIsCoolingDown(false);
          }
        });
      }, 1500);
    }

    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current)
      }
    }
  }, [isCoolingDown, pathInput, empty])

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#CD82F0] to-[#70268A] text-white">
      <div className="mx-auto flex w-full flex-col gap-4 px-4 py-12 md:px-10">
        <div className="flex flex-col items-center gap-4">
          <div className="mb-4 flex flex-col items-center justify-center">
            <p className="text-lg font-light">กากบาทลงใน</p>
            <h2 className="text-4xl font-semibold">“ช่องลงคะแนนเสียง”</h2>
            {/* <p>fetch: {count}</p> */}
            {submitting && <p className="mt-4 animate-pulse">กำลังประมวลผล...</p>}
            {!submitting && (
              <div className="mt-4 rounded-full bg-white px-6 py-2 text-center shadow-lg">
                {isGood ? (
                  <p className="text-PED-green">AI คิดว่าเป็นบัตรดี</p>
                ) : (
                  <p className="text-PED-orange">AI คิดว่าเป็นบัตรเสีย</p>
                )}
              </div>
            )}
          </div>

          <div className="">
            <ReactSketchCanvas
              onChange={(updatedPaths: CanvasPath[]) => {
                if (updatedPaths.length === 0) setEmpty(true)
                else setEmpty(false)

                setPathInput(updatedPaths[0])
                setIsCoolingDown(true)
              }}
              style={{
                borderRadius: "0.75rem",
                overflow: "hidden",
              }}
              width="480"
              height="270"
              strokeColor="#000"
              ref={canvasRef}
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            {/* <Button text="ต่อไป" onClick={() => nextPage()} /> */}
            <div className="flex items-center gap-4">
              <Button
                text="ล้าง"
                onClick={() => {
                  canvasRef.current?.clearCanvas()
                  setSubmitting(true)
                }}
                secondary
              />

              <Button
                text="ต่อไป"
                disabled={!isGood}
                onClick={() => {
                }}
              />
            </div>

            <p className="my-2 text-sm font-light">
              หมายเหตุ : เป็นการประเมินโดย AI เท่านั้น
              <br />
              การตัดสินจริง ๆ อยู่ที่กรรมการประจำหน่วยเลือกตั้ง
            </p>
            <div className="mx-auto w-full max-w-sm">
              <FYIMarking />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
