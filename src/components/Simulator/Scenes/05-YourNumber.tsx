import { useState } from "react"

import classNames from "classnames"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

export default function YourNumber() {
  const [numberInput, setNumberInput] = useState("")
  const [error, setError] = useState(false)
  const { setPage } = usePage()

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 p-4 px-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold text-PED-green-secondary">
          แจ้งเลขลำดับของ
          <br />
          ตนเองกับเจ้าหน้าที่
        </h1>
      </div>

      <div
        className={classNames(
          "mx-auto mt-6 max-w-md rounded-3xl p-6 px-10 text-left text-2xl font-semibold text-white",
          error ? "bg-PED-orange" : "bg-gradient-to-b from-PED-purple to-PED-purple-secondary"
        )}
      >
        <p className="">เลขลำดับของคุณคือ...</p>
        <input
          type="text"
          value={numberInput}
          onChange={(e) => setNumberInput(e.target.value)}
          className="my-10 w-full appearance-none border-b border-white bg-transparent text-[100px] font-medium"
        />
      </div>
      {error && <span className="text-center text-PED-orange">ไม่ถูกต้อง เลขลำดับที่ถูกต้องคือ 145</span>}
      <Button
        text="ต่อไป"
        className="mx-auto max-w-md "
        onClick={() => {
          // validate
          if (numberInput !== "145") {
            setError(true)
          } else {
            setPage("6")
          }
        }}
      />
    </section>
  )
}
