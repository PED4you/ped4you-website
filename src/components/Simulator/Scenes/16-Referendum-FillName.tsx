import { StarIcon } from "@heroicons/react/24/solid"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

export default function ReferendumFillName() {
  const { userData, setPage } = usePage()

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-medium text-PED-orange">ขั้นที่ 1</span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">ตรวจสอบสิทธิ์ลงประชามติ</h1>
        <p className="text-lg font-light text-PED-orange">
          ใช้ข้อมูลเดิมจากการเลือกตั้งทั่วไป
        </p>
      </div>

      <div className="mt-4 rounded-lg bg-PED-yellow/20 p-6">
        <p className="text-lg font-medium text-PED-purple">
          {userData.title}{userData.name}
        </p>
        <p className="mt-2 text-base text-PED-purple-secondary">
          {userData.province} {userData.district} {userData.subdistrict}
        </p>
      </div>

      <Button text="ตรวจสอบสิทธิ์" onClick={() => setPage("17")} />
    </section>
  )
}
