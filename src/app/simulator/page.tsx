import type { Metadata } from "next"

import GamePage from "@/components/Simulator/GamePage"
import { PageProvider } from "@/components/Simulator/PageProvider"

export const metadata: Metadata = {
  title: "เลือกตั้ง Simulator : PED4YOU —​ เป็ดฟอร์ยู",
  description:
    "ลองเลือกตั้งตามกติกาใหม่ก่อนไปกาจริง - จำลองขั้นตอนการเลือกตั้งตามกติกาใหม่ทุกขั้นตอน ตั้งแต่ตรวจสอบรายชื่อ กาบัตร จนถึงหย่อนบัตรลงกล่อง แถมรู้ผลด้วยว่ากาให้ใครไปบ้าง",
}

export default function SimulatorPage() {
  return (
    <PageProvider>
      <GamePage />
    </PageProvider>
  )
}
