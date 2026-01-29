import { useState } from "react"

import Image from "next/image"

import { StarIcon } from "@heroicons/react/24/solid"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

export default function ReferendumFolding() {
  const [step, setStep] = useState<number>(1)
  const { setPage } = usePage()

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-medium text-PED-orange">ขั้นที่ 9</span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">พับบัตรเพื่อหย่อนลงหีบใส่บัตร</h1>
        <p className="text-lg font-light text-PED-green">
          การพับบัตรที่ดี คือ การพับให้มิดชิดและไม่มีการทำรอยหรือสัญลักษณ์พิเศษที่บ่งบอกถึงบัตรใบนั้น ๆ
        </p>
      </div>

      <div className="mt-4 flex flex-col items-center gap-6">
        <div className="flex w-full items-center justify-between">
          <p className="rounded-full bg-PED-purple px-6 py-2 text-center text-lg font-semibold text-white">
            แนะนำวิธีการพับ
          </p>

          <div className="flex gap-2">
            <Button
              onClick={() => {
                if (step !== 1) setStep(step - 1)
              }}
              disabled={step === 1}
              text={<span>&#8592;</span>}
              className="mt-0 px-3 py-1"
            />
            <Button
              onClick={() => {
                if (step !== 3) setStep(step + 1)
              }}
              disabled={step === 3}
              text={<span>&#8594;</span>}
              className="mt-0 px-3 py-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          <AnimatePresence key={step}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              {step === 1 && <Image src="/images/simulator/folding/step-1.png" alt="step-1" width={300} height={300} />}
              {step === 2 && <Image src="/images/simulator/folding/step-2.png" alt="step-2" width={300} height={300} />}
              {step === 3 && <Image src="/images/simulator/folding/step-3.png" alt="step-3" width={300} height={200} />}
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col gap-4">
            <AnimatePresence>
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.15,
                    ease: "easeOut",
                  }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-PED-orange">
                    <p className="text-lg font-semibold text-white">1</p>
                  </div>
                  <p className="font-light">
                    พับครึ่งแนวตั้ง
                    <br />
                    ไม่ให้เห็นด้านช่องลงคะแนนเสียง
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-PED-orange">
                    <p className="text-lg font-semibold text-white">2</p>
                  </div>
                  <p className="font-light">
                    แบ่งพับจากล่างขึ้นบน
                    <br />
                    ให้เป็น 3 ส่วน
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {step >= 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-PED-orange">
                      <p className="text-lg font-semibold text-white">3</p>
                    </div>
                    <p className="font-light">
                      เรียบร้อย !
                      <br />
                      จะเห็นแค่หน้าบัตรเท่านั้น
                    </p>
                  </div>

                  <Button text="ต่อไป" onClick={() => setPage("27")} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
