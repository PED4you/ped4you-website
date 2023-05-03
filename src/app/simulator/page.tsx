import type { Metadata } from "next"

import GamePage from "@/components/Simulator/GamePage"
import { PageProvider } from "@/components/Simulator/PageProvider"

export const metadata: Metadata = {
  title: "เลือกตั้ง Simulator : เลือกตั้ง Simulator : PED4YOU —​ เป็ดฟอร์ยู",
  description:
    "ลองเลือกตั้งตามกติกาใหม่ก่อนไปกาจริง - จำลองขั้นตอนการเลือกตั้งตามกติกาใหม่ทุกขั้นตอน ตั้งแต่ตรวจสอบรายชื่อ กาบัตร จนถึงหย่อนบัตรลงกล่อง แถมรู้ผลด้วยว่ากาให้ใครไปบ้าง",
  openGraph: {
    title: "เลือกตั้ง Simulator : PED4YOU —​ เป็ดฟอร์ยู",
    description:
      "ลองเลือกตั้งตามกติกาใหม่ก่อนไปกาจริง - จำลองขั้นตอนการเลือกตั้งตามกติกาใหม่ทุกขั้นตอน ตั้งแต่ตรวจสอบรายชื่อ กาบัตร จนถึงหย่อนบัตรลงกล่อง แถมรู้ผลด้วยว่ากาให้ใครไปบ้าง",
    type: "website",
    url: "https://ped4you.com/simulator",
    images: [
      {
        url: "https://ped4you.com/meta/ped4you-banner.png",
        width: 1200,
        height: 630,
        alt: "เลือกตั้ง Simulator : PED4YOU —​ เป็ดฟอร์ยู",
      },
    ],
  },
  twitter: {
    site: "https://ped4you.com/simulator",
    card: "summary_large_image",
    images: [
      {
        url: "https://ped4you.com/meta/ped4you-banner.png",
        width: 1200,
        height: 630,
        alt: "เลือกตั้ง Simulator : PED4YOU —​ เป็ดฟอร์ยู",
      },
    ],
    title: "เลือกตั้ง Simulator : PED4YOU —​ เป็ดฟอร์ยู",
    description:
      "ลองเลือกตั้งตามกติกาใหม่ก่อนไปกาจริง - จำลองขั้นตอนการเลือกตั้งตามกติกาใหม่ทุกขั้นตอน ตั้งแต่ตรวจสอบรายชื่อ กาบัตร จนถึงหย่อนบัตรลงกล่อง แถมรู้ผลด้วยว่ากาให้ใครไปบ้าง",
  },
  authors: [
    {
      name: "PED4YOU",
      url: "https://ped4you.com",
    },
  ],
}

export default function SimulatorPage() {
  return (
    <PageProvider>
      <GamePage />
    </PageProvider>
  )
}
