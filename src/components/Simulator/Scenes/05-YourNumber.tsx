import { useState } from "react"

import { StarIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

export default function YourNumber() {
  const [numberInput, setNumberInput] = useState("")
  const [error, setError] = useState(false)
  const { setPage } = usePage()

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-medium text-PED-orange">ขั้นที่ 4</span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">แจ้งเลขลำดับของตนเองกับเจ้าหน้าที่</h1>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
        <div
          className={classNames(
            "py-6 text-center text-2xl font-medium text-white",
            error ? "bg-PED-orange" : "bg-PED-purple"
          )}
        >
          <p className="">เลขลำดับของคุณคือ...</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 bg-white py-12 px-6">
          <input
            type="text"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
            placeholder="กรอกเลขลำดับของคุณ"
            className="w-3/4 rounded-md bg-PED-yellow px-4 py-3 text-base font-normal text-PED-purple-secondary ring-2 ring-PED-purple/10 transition-all duration-500 ease-out placeholder:text-PED-purple-secondary/50 focus:outline-none focus:ring-8"
          />

          {error && <span className="text-center text-PED-orange">ไม่ถูกต้อง เลขลำดับที่ถูกต้องคือ 145</span>}

          <Button
            text="ตกลง"
            onClick={() => {
              // validate
              if (numberInput !== "145") {
                setError(true)
              } else {
                setPage("6")
              }
            }}
          />
        </div>
      </div>
    </section>
  )
}
