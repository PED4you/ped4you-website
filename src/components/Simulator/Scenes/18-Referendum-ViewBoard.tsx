import { StarIcon } from "@heroicons/react/24/solid"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

export default function ReferendumViewBoard() {
  const { setPage } = usePage()

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-medium text-PED-orange">ขั้นที่ 2</span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">ทำความเข้าใจคำถามประชามติ</h1>
        <p className="text-lg font-light text-PED-green">เพื่อใช้ในการลงคะแนนเสียง</p>
      </div>

      <div className="relative -top-6 flex justify-end">
        <Button text="ต่อไป" onClick={() => setPage("19")} />
      </div>

      <div className="flex flex-col gap-4 rounded-md bg-gradient-to-b from-PED-purple-secondary to-PED-purple p-6 text-center">
        <h2 className="text-xl font-medium text-white">คำถามประชามติ</h2>

        <div className="rounded-lg bg-white p-6">
          <p className="text-lg font-medium text-PED-purple">ท่านเห็นชอบหรือไม่ที่จะให้มีการจัดทำรัฐธรรมนูญฉบับใหม่?</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-PED-green p-4 text-white">
            <p className="text-lg font-medium">เห็นชอบ</p>
            <p className="text-sm font-light">กาช่องเห็นชอบ</p>
          </div>
          <div className="rounded-lg bg-PED-orange p-4 text-white">
            <p className="text-lg font-medium">ไม่เห็นชอบ</p>
            <p className="text-sm font-light">กาช่องไม่เห็นชอบ</p>
          </div>
        </div>

        <p className="mt-2 text-sm font-light text-white">
          หรือหากไม่ต้องการลงคะแนน สามารถกาช่อง &quot;งดออกเสียง&quot; ได้
        </p>
      </div>
    </section>
  )
}
