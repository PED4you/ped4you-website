import Image from "next/image"

export default function FYIMarking() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-2 rounded-xl bg-PED-yellow p-6 text-white shadow-2xl ring-1 ring-PED-purple-secondary/10 transition-all duration-500 ease-out hover:scale-[101%] hover:ring-8 md:max-w-full">
      <div className="flex items-center justify-center gap-2 font-medium text-PED-orange">
        <div className="flex size-8 items-center justify-center rounded-full bg-PED-orange text-lg font-medium text-white">
          ?
        </div>

        <p className="text-base">กายังไงไม่ให้บัตรเสีย</p>
      </div>

      <div className="mt-3 flex flex-col gap-3 text-sm font-light text-black">
        <p className="font-normal">หลักการทำเครื่องหมายลงบนบัตรเลือกตั้ง</p>

        <ol className="list-decimal px-4">
          <li>
            ให้ทำเครื่องหมาย <span className="font-medium">กากบาท</span> ลงในช่องที่กำหนดเพียง 1 ช่องเท่านั้น
          </li>
          <li>
            ห้ามทำเครื่องหมายอื่นหรือเขียนข้อความอื่นนอกจาก <span className="font-medium">กากบาท</span>{" "}
            ลงบนบัตรเลือกตั้ง
          </li>
        </ol>
      </div>

      <div className="my-4 flex flex-col gap-2">
        <span className="rounded-full bg-PED-green px-1 py-2 text-center text-sm font-normal text-white">
          ตัวอย่างการกากบาทที่ถูกต้อง
        </span>

        <Image className="mt-2" src="/images/simulator/marking/good.png" width={600} height={200} alt="good marking" />
      </div>

      <div className="my-2 flex flex-col gap-2">
        <span className="rounded-full bg-PED-orange px-3 py-2 text-center text-sm font-normal text-white">
          ตัวอย่างการกากบาทที่ผิด
        </span>

        <Image className="mt-2" src="/images/simulator/marking/bad.png" width={600} height={200} alt="bad marking" />
      </div>
    </div>
  )
}
