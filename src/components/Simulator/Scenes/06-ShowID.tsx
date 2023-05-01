import Image from "next/image"

import { StarIcon } from "@heroicons/react/24/solid"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

export default function ShowID() {
  const { setPage } = usePage()

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-medium text-PED-orange">ขั้นที่ 5</span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">ยื่นหลักฐานแสดงตัวตนให้กับเจ้าหน้าที่</h1>
        <p className="text-lg font-light text-PED-green">
          สามารถใช้บัตรประจำตัวประชาชน ใบขับขี่ พาสปอร์ต หรือบัตรจากแอป ThaID ในการแสดงตัวตนก็ได้
        </p>
      </div>

      <Image
        src="/images/simulator/id-card.png"
        width={500}
        height={300}
        alt="ยื่นบัตรประชาชน"
        className="mx-auto w-full max-w-xs"
      />

      <div className="absolute right-4 bottom-10 flex justify-end sm:relative">
        <Button text="ต่อไป" onClick={() => setPage("7")} />
      </div>
    </section>
  )
}
