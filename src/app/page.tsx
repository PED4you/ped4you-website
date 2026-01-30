import type { Metadata } from "next"

// import { ComingSoon } from "@/components/ComingSoon/ComingSoon"
//
//
import { Footer } from "@/components/common/Footer/Footer"
import { Navigation } from "@/components/common/Navigation/Navigation"
import { FYI } from "@/components/Home/FYI/FYI"
import { Landing } from "@/components/Home/Landing/Landing"
import { MiscData } from "@/components/Home/MiscData/MiscData"
import { Simulator } from "@/components/Home/Simulator/Simulator"

export const metadata: Metadata = {
  title: "PED4YOU —​ เป็ดฟอร์ยู",
  description: "ช่วยทุกคนกาบัตรเลือกตั้งของตัวเองได้อย่างมั่นใจ !",
  openGraph: {
    title: "PED4YOU —​ เป็ดฟอร์ยู",
    description: "ช่วยทุกคนกาบัตรเลือกตั้งของตัวเองได้อย่างมั่นใจ !",
    type: "website",
    url: "https://ped4you.com",
    images: [
      {
        url: "https://ped4you.com/meta/ped4you-banner.png",
        width: 1200,
        height: 630,
        alt: "PED4YOU —​ เป็ดฟอร์ยู",
      },
    ],
  },
  twitter: {
    site: "https://ped4you.com",
    card: "summary_large_image",
    images: [
      {
        url: "https://ped4you.com/meta/ped4you-banner.png",
        width: 1200,
        height: 630,
        alt: "PED4YOU —​ เป็ดฟอร์ยู",
      },
    ],
    title: "PED4YOU —​ เป็ดฟอร์ยู",
    description: "ช่วยทุกคนกาบัตรเลือกตั้งของตัวเองได้อย่างมั่นใจ !",
  },
  authors: [
    {
      name: "PED4YOU",
      url: "https://ped4you.com",
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Landing />
      <Simulator />
      <FYI />
      <MiscData />
      <Footer />
    </>
  )
}
