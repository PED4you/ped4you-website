import Image from "next/image"


import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

export default function ReferendumShowID() {
  const { setPage } = usePage()

  return (
    <section className="mx-auto flex h-screen w-full max-w-xl flex-col gap-4 p-4 px-6">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-4xl font-semibold text-PED-green-secondary">ยื่นหลักฐานแสดงตัวตน<br/>ให้กับเจ้าหน้าที่</h1>
        <p className="text-lg font-light text-PED-green">
          สามารถใช้บัตรประจำตัวประชาชน ใบขับขี่ พาสปอร์ต หรือบัตรจากแอป ThaID ในการแสดงตัวตนก็ได้
        </p>
      </div>

      <div className="mt-20 flex items-center">
        <Image
          src="/images/simulator/id-card.png"
          width={500}
          height={300}
          alt="ยื่นบัตรประชาชน"
          className="mx-auto w-full max-w-xs"
        />
      </div>

      <div className="mt-10 flex justify-center sm:relative">
        <Button text="ต่อไป" onClick={() => setPage("22")} />
      </div>
    </section>
  )
}
