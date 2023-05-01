import { Button } from "@/components/common/Home/Button"
import { useRef, useState } from "react"
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas"

import { usePage } from "../../PageProvider"
import FYIMarking from "./FYIMarking"

export default function PartyListMark({ nextPage }: { nextPage: () => void }) {
  const { userData } = usePage()
  const canvasRef = useRef<ReactSketchCanvasRef | null>(null)

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#59CD90] to-[#2D936C] text-white">
      <div className="mx-auto flex w-full flex-col gap-4 px-4 py-12 md:px-10">
        <div className="flex flex-col items-center gap-4">
          <div className="mb-4 flex flex-col items-center justify-center">
            <p className="text-lg font-light">กากบาทลงใน</p>
            <h2 className="text-4xl font-semibold">“ช่องลงคะแนนเสียง”</h2>
          </div>

          <div className="">
            <ReactSketchCanvas
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
            {/* <div className="mt-4 flex flex-col">
              <p className="text-lg font-normal">คุณกำลังลงคะแนนเสียงให้</p>

              <h2 className="text-2xl font-medium">หมายเลข{userData.regionVote.no}</h2>
              <p className="text-lg font-medium">{userData.regionVote.candidate}</p>
              <p className="text-lg font-medium">พรรค{userData.regionVote.party}</p>
            </div> */}

            {/* <Button text="ต่อไป" onClick={() => nextPage()} /> */}
            <div className="flex items-center gap-4">
              <Button
                text="ยกเลิก"
                onClick={() => {
                  canvasRef.current?.clearCanvas()
                }}
                secondary
              />

              <Button
                text="ต่อไป"
                onClick={() => {
                  nextPage()
                  // canvasRef?.current
                  //   ?.exportImage("png")
                  //   .then((data) => {
                  //     // do something with data
                  //   })
                  //   .catch((e) => {
                  //     console.log(e)
                  //   })
                }}
              />
            </div>

            {/* <p className="mt-8 text-sm font-light">
              หมายเหตุ : เป็นการประเมินโดย AI เท่านั้น
              <br />
              การตัดสินจริง ๆ อยู่ที่กรรมการประจำหน่วยเลือกตั้ง
            </p> */}
            <div className="mx-auto mt-4 w-full max-w-sm sm:mt-10">
              <FYIMarking />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
