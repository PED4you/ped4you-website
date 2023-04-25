import { StarIcon } from "@heroicons/react/24/solid"

export default function ViewBoard() {
  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-medium text-PED-orange">ขั้นที่ 2</span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">จดจำหมายเลขผู้สมัครและพรรคที่เราจะเลือก</h1>
        <p className="text-lg font-light text-PED-green">เพื่อใช้ในการลงคะแนนเสียง</p>
      </div>
    </section>
  )
}
