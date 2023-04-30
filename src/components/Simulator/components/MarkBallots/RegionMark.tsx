import { Button } from "@/components/common/Home/Button"
import { useRef, useState } from "react"
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas"

import { usePage } from "../../PageProvider"

export default function RegionMark({ nextPage }: { nextPage: () => void }) {
  const { userData } = usePage()
  const canvasRef = useRef<ReactSketchCanvasRef | null>(null)

  return (
    <div>
      {userData.regionVote.no} {userData.regionVote.candidate}
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-semibold">รูปภาพที่มีอยู่</h2>
        </div>

        <ReactSketchCanvas
          style={{
            border: "0.5rem solid #000",
            borderRadius: "0.25rem",
          }}
          width="480"
          height="270"
          strokeWidth={4}
          strokeColor="black"
          ref={canvasRef}
        />

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold">Tools</h2>
          <Button text="ต่อไป" onClick={() => nextPage()} />
          <div className="flex items-center gap-4">
            <Button
              text="Clear"
              onClick={() => {
                canvasRef.current?.clearCanvas()
              }}
              secondary
            />

            <Button
              text="Submit"
              onClick={() => {
                canvasRef?.current
                  ?.exportImage("png")
                  .then((data) => {
                    // setSubmitting(true)
                    // post to api route /upload
                    // fetch("/api/upload", {
                    //   method: "POST",
                    //   body: JSON.stringify({
                    //     good: isGood,
                    //     data,
                    //   }),
                    // })
                    //   .then((res) => {
                    //     if (res.status === 200) {
                    //       console.log("Success")
                    //       refetch()
                    //     }
                    //   })
                    //   .catch((e) => {
                    //     console.error("Error", e)
                    //   })
                    //   .finally(() => {
                    //     canvasRef?.current?.clearCanvas()
                    //     setSubmitting(false)
                    //   })
                  })
                  .catch((e) => {
                    console.log(e)
                  })
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
