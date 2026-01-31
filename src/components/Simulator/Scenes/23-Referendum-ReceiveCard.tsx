import Image from "next/image"

import { motion } from "framer-motion"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

export default function ReferendumReceiveCard() {
  const { setPage } = usePage()

  return (
    <section className="relative mx-auto flex w-full max-w-xl flex-col items-center gap-6 p-4 px-6">
      <div className="flex w-full flex-col items-center gap-8">
        <h1 className="w-full text-left text-4xl font-semibold leading-tight text-PED-green-secondary">
          คุณจะได้รับบัตร
          <br />
          ออกเสียงประชามติ
        </h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Image
            src="/images/simulator/ballot/yellow-new.png"
            alt="Referendum Ballot"
            width={300}
            height={400}
            className="h-auto w-[220px] drop-shadow-2xl sm:w-[280px]"
          />
        </motion.div>
      </div>

      <div className="mt-4 flex w-full max-w-md flex-col items-center gap-4 rounded-[2rem] bg-[#F2DC5D] p-4 text-center text-white shadow-lg">
        <p className="text-2xl leading-[38px] text-black">
          บัตรออกเสียงประชามติ
          <br />
          ในประเด็นคำถามที่ว่า
          <br />
          <span className="text-yellow-700">
            “ท่านเห็นชอบว่าสมควรมี
            <br />
            รัฐธรรมนูญฉบับใหม่หรือไม่”
          </span>
        </p>
      </div>

      <div className="mt-2">
        <Button text="ต่อไป" className="rounded-full px-16 py-3 text-2xl font-semibold" onClick={() => setPage("24")} />
      </div>
    </section>
  )
}
