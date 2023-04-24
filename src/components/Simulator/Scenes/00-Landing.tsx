import Image from "next/image"

import { Navigation } from "@/components/common/Navigation/Navigation"

import { Button } from "../../common/Home/Button"
import SimulatorHeading from "../Heading/SimulatorHeading"
import { usePage } from "../PageProvider"

export default function Landing() {
  const { setPage } = usePage()

  return (
    <>
      <Navigation />
      <section className="flex flex-col-reverse sm:flex-col">
        <div className="relative grid h-full w-full grid-cols-1 justify-center overflow-hidden sm:max-h-56 sm:grid-cols-3">
          <Image
            className="w-full object-cover object-center"
            width={480}
            height={285}
            src="/images/simulator/heading/1-green.png"
            alt="PED4YOU"
          />
          <Image
            className="w-full object-cover object-center"
            width={480}
            height={285}
            src="/images/simulator/heading/2-red.png"
            alt="PED4YOU"
          />
          <Image
            className="w-full object-cover object-center"
            width={480}
            height={285}
            src="/images/simulator/heading/3-yellow.png"
            alt="PED4YOU"
          />
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden p-10 sm:mt-4">
          <SimulatorHeading className="h-32 sm:h-36" />

          <p className="mt-4 text-center text-lg font-light text-PED-purple-secondary">
            ถ้าคุณสงสัยว่าขั้นตอนการเลือกตั้งเป็นอย่างไร มาลองเลือกตั้งกับพวกเราสิ !
          </p>

          <Button text={"เริ่มจำลองเลือกตั้ง"} onClick={() => setPage("1")} />
        </div>
      </section>
    </>
  )
}
