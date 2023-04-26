import type { Metadata } from "next"

import {Footer} from "@/components/common/Footer/Footer"
import {Navigation} from "@/components/common/Navigation/Navigation"
import {FYI} from "@/components/Home/FYI/FYI"
import {Landing} from "@/components/Home/Landing/Landing"
import {MiscData} from "@/components/Home/MiscData/MiscData"
import {Simulator} from "@/components/Home/Simulator/Simulator"

export const metadata: Metadata = {
  title: "PED4YOU —​ เป็ดฟอร์ยู",
  description: "ช่วยทุกคนกาบัตรเลือกตั้งของตัวเองได้อย่างมั่นใจ !"
}

export default function HomePage() {
  return (
    <>
      <Navigation/>
      <Landing/>
      <Simulator/>
      <FYI/>
      <MiscData/>
      <Footer/>
    </>
  )
}
