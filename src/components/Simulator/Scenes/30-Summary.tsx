import Image from "next/image"

import { LinkButton } from "@/components/common/Home/Button"
import { ibmPlexSansThai } from "@/app/fonts"

const ElectionSteps = [
  { no: 1, title: "ตรวจสอบสิทธิ์เลือกตั้ง" },
  { no: 2, title: "จดจำหมายเลขของผู้สมัครรับเลือกตั้ง" },
  { no: 3, title: "ตรวจชื่อ-สกุลและจดจำเลขลำดับของตน" },
  { no: 4, title: "แจ้งเลขลำดับของตนให้กับเจ้าหน้าที่" },
  {
    no: 5,
    title: "ยื่นหลักฐานแสดงตัวคนให้เจ้าหน้าที่",
    description: "(บัตรประชาชน/ใบขับขี่/พาสปอร์ต/บัตรจากแอป ThaiID)",
  },
  { no: 6, title: "ลงลายมือชื่อหรือพิมพ์ลายนิ้วหัวแม่มือ" },
  { no: 7, title: "คุณได้รับบัตรลงคะแนนเสียง 2 ใบ จากนั้นเข้าคูหาเพื่อกา" },
  { no: 8, title: "ลงลายมือชื่อหรือพิมพ์ลายนิ้วหัวแม่มือที่ต้นขั้ว" },
  { no: 9, title: "พับบัตรเพื่อหย่อนลงหีบใส่บัตร" },
  { no: 10, title: "นำบัตรที่พับหย่อนลงในหีบใส่บัตร" },
]

const ReferendumSteps = [
  { no: 1, title: "แจ้งลำดับของตนให้กับเจ้าหน้าที่" },
  {
    no: 2,
    title: "ยื่นหลักฐานแสดงตัวคนให้เจ้าหน้าที่",
    description: "(บัตรประชาชน/ใบขับขี่/พาสปอร์ต/บัตรจากแอป ThaiID)",
  },
  { no: 3, title: "ลงลายมือชื่อหรือพิมพ์ลายนิ้วหัวแม่มือ" },
  { no: 4, title: "คุณได้รับบัตรลงคะแนนเสียง 2 ใบ จากนั้นเข้าคูหาเพื่อกา" },
  { no: 5, title: "ลงลายมือชื่อหรือพิมพ์ลายนิ้วหัวแม่มือที่ต้นขั้ว" },
  { no: 6, title: "พับบัตรเพื่อหย่อนลงหีบใส่บัตร" },
  { no: 7, title: "นำบัตรที่พับหย่อนลงในหีบใส่บัตร" },
]

type StepItemVariant = "election" | "referendum"

const stepItemVariants: Record<StepItemVariant, { numberBg: string; titleColor: string; descriptionColor: string }> = {
  election: {
    numberBg: "bg-PED-green",
    titleColor: "text-PED-green-secondary",
    descriptionColor: "text-PED-green",
  },
  referendum: {
    numberBg: "bg-[#D99F50]",
    titleColor: "text-[#D99F50]",
    descriptionColor: "text-[#D99F50]/80",
  },
}

function StepItem({
  no,
  title,
  description,
  variant = "election",
}: {
  no: number
  title: string
  description?: string
  variant?: StepItemVariant
}) {
  const styles = stepItemVariants[variant]

  return (
    <div className="flex items-start gap-3">
      <div
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white ${styles.numberBg}`}
      >
        {no}
      </div>
      <div className="flex flex-col">
        <p className={`text-sm font-medium ${styles.titleColor}`}>{title}</p>
        {description && <p className={`text-xs font-medium ${styles.descriptionColor}`}>{description}</p>}
      </div>
    </div>
  )
}

function SectionHeader({ number, bgColor }: { number: number; bgColor: string }) {
  return (
    <div className="flex justify-center">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-white ${bgColor}`}
      >
        {number}
      </div>
    </div>
  )
}

export default function Summary() {
  return (
    <section className={`min-h-screen w-full bg-white ${ibmPlexSansThai.className}`}>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-8">
        {/* Header */}
        <div className="mb-2 text-center">
          <h1 className="text-2xl font-bold text-PED-green-secondary md:text-4xl">สรุปขั้นตอน</h1>
          <h2 className="text-2xl font-bold text-PED-green-secondary md:text-4xl">การลงคะแนนเสียง</h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Section 1: General Election */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-4">
            <SectionHeader number={1} bgColor="bg-PED-green" />
            <h3 className="bg-[#AAECC9] py-2 text-center text-lg font-medium text-[#2D936C]">เลือกตั้งทั่วไป</h3>

            <div className="flex flex-col gap-3">
              {ElectionSteps.map((step) => (
                <StepItem
                  key={step.no}
                  no={step.no}
                  title={step.title}
                  description={step.description}
                  variant="election"
                />
              ))}
            </div>
          </div>

          {/* Section 2: Referendum */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-4">
            <SectionHeader number={2} bgColor="bg-[#D99F50]" />
            <h3 className="bg-[#F2DC5D] py-2 text-center text-lg font-semibold text-[#D99F50]">ออกเสียงประชามติ</h3>

            <div className="flex flex-col gap-3">
              {ReferendumSteps.map((step) => (
                <StepItem
                  key={step.no}
                  no={step.no}
                  title={step.title}
                  description={step.description}
                  variant="referendum"
                />
              ))}
            </div>
          </div>

          {/* Section 3: How to mark correctly */}
          <div className="flex flex-col gap-4 rounded-2xl bg-PED-yellow p-4 md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-PED-orange text-2xl font-bold text-white">
                ?
              </div>
              <h3 className="text-2xl font-bold text-PED-orange">กายังไงไม่ให้บัตรเสีย</h3>
            </div>

            <div className="flex flex-col gap-2 text-center text-sm font-medium text-black">
              <p>
                1. ให้ทำเครื่องหมาย <span className="font-bold">กากบาท</span>
                <br />
                ลงในช่องที่กำหนด เพียง 1 ช่องเท่านั้น
              </p>
              <p>
                2. ห้ามทำเครื่องหมายหรือเขียนข้อความอื่น
                <br />
                นอกจาก <span className="font-bold">กากบาท</span> ลงบนบัตรเลือกตั้ง
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="rounded-full bg-[#5FCFA4] px-3 py-1.5 text-center text-sm font-medium text-white">
                ตัวอย่างการกากบาทที่ถูกต้อง
              </span>
              <Image src="/images/simulator/marking/good.png" width={600} height={200} alt="good marking" />
            </div>

            <div className="flex flex-col gap-2">
              <span className="rounded-full bg-PED-orange px-3 py-1.5 text-center text-sm font-medium text-white">
                ตัวอย่างการกากบาทที่ผิด
              </span>
              <Image src="/images/simulator/marking/bad.png" width={600} height={200} alt="bad marking" />
            </div>

            {/* Back to Home Button */}
            <div className="flex justify-center pt-4">
              <LinkButton
                className="w-full bg-PED-orange px-8 py-3 text-center text-lg text-white ring-PED-orange/25"
                link="/"
                text="กลับหน้าหลัก"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
