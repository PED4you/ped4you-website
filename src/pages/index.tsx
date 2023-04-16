import Link from "next/link"

import DescribeRoute from "@/components/common/DescribeRoute"

export default function HomePage() {
  return (
    <DescribeRoute title="PED4YOU —​ เป็ดฟอร์ยู" description="ช่วยทุกคนกาบัตรเลือกตั้งของตัวเองได้อย่างมั่นใจ !">
      <main className="bg-PED-yellow p-6 text-black">
        <div className="flex min-h-screen flex-col gap-4">
          <h1 className="text-xl font-medium sm:text-6xl">เป็ดฟอร์ยูก๊าบ</h1>
          <p className="text-lg font-light text-PED-orange">
            Generated using{" "}
            <Link href="https://github.com/betich/next-boilerplate">
              <a target="_blank" rel="noreferrer" className="underline hover:no-underline">
                {"betich's"}
              </a>
            </Link>{" "}
            Next.js boilerplate template
          </p>
        </div>
      </main>
    </DescribeRoute>
  )
}
