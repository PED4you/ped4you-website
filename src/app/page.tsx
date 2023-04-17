import type { Metadata } from "next"

import Link from "next/link"

export const metadata: Metadata = {
  title: "PED4YOU —​ เป็ดฟอร์ยู",
  description: "ช่วยทุกคนกาบัตรเลือกตั้งของตัวเองได้อย่างมั่นใจ !",
}

export default function HomePage() {
  return (
    <main className="bg-PED-yellow p-6 text-black">
      <div className="flex min-h-screen flex-col gap-4">
        <h1 className="text-xl font-medium sm:text-6xl">เป็ดฟอร์ยูก๊าบ</h1>
        <p className="text-lg font-light text-PED-orange">
          Generated using{" "}
          <Link href="https://github.com/betich/next-boilerplate" className="underline hover:no-underline">
            betich&apos;s
          </Link>{" "}
          Next.js boilerplate template
        </p>
      </div>
    </main>
  )
}
