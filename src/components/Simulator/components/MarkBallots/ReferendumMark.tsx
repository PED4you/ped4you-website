import classNames from "classnames"
import { ReactSketchCanvas } from "react-sketch-canvas"

import { Button } from "@/components/common/Home/Button"
import { useBallotInference } from "@/utils/useBallotInference"

import AILoading from "./AILoading"
import FYIMarking from "./FYIMarking"

export default function ReferendumMark({ nextPage }: { nextPage: () => void }) {
  const { canvasRef, isGood, submitting, hasDrawn, clearCanvas, onCanvasChange, loading, loadingProgress } =
    useBallotInference()

  return (
    <section className="min-h-screen w-full bg-[#F0D65D] text-black">
      <AILoading loading={loading} loadingProgress={loadingProgress} />
      <div className="mx-auto flex w-full flex-col gap-4 px-4 py-12 md:px-10">
        <div className="flex flex-col items-center gap-4">
          <div className="mb-4 flex flex-col items-center justify-center">
            <p className="text-lg font-light">กากบาทลงใน</p>
            <h2 className="text-4xl font-semibold">&ldquo;ช่องทำเครื่องหมาย&rdquo;</h2>
            {submitting && <p className="mt-4 animate-pulse">กำลังประมวลผล...</p>}
            {hasDrawn && !submitting && (
              <div className={classNames(
                "mt-4 rounded-full px-6 py-2 text-center shadow-lg bg-white",
                isGood ? "text-PED-green" : "text-PED-orange"
              )}>
                {isGood ? (
                  <p>AI คิดว่าเป็นบัตรดี</p>
                ) : (
                  <p>AI คิดว่าเป็นบัตรเสีย</p>
                )}
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-2xl border border-black shadow-2xl">
            <ReactSketchCanvas
              onChange={onCanvasChange}
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
            <div className="flex items-center gap-4">
              <Button text="ล้าง" onClick={clearCanvas} secondary />

              <Button
                text="ต่อไป"
                disabled={!isGood}
                onClick={() => {
                  if (isGood) nextPage()
                }}
              />
            </div>

            <p className="my-2 text-center text-sm font-light">
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
