import { useState } from "react"

import { StarIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

type ReferendumChoice = "approve" | "disapprove" | "abstain" | null

export default function ReferendumMarkBallots() {
  const [selected, setSelected] = useState<ReferendumChoice>(null)
  const { userData, setUserData, setPage } = usePage()

  const handleVote = () => {
    if (selected) {
      setUserData({
        ...userData,
        referendumVote: { choice: selected },
      })
      setPage("26")
    }
  }

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-medium text-PED-orange">ขั้นที่ 8</span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">ลงคะแนนประชามติ</h1>
        <p className="text-lg font-light text-PED-green">เลือกกาช่องที่ต้องการ</p>
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-xl bg-gradient-to-b from-yellow-100 to-yellow-200 p-6 shadow-lg"
        >
          <div className="mb-6 rounded-lg bg-white p-4">
            <h3 className="text-center text-lg font-medium text-PED-purple">คำถามประชามติ</h3>
            <p className="mt-2 text-center text-base text-PED-purple-secondary">
              ท่านเห็นชอบหรือไม่ที่จะให้มีการจัดทำรัฐธรรมนูญฉบับใหม่?
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => setSelected("approve")}
              className={classNames(
                "rounded-lg border-4 p-4 text-center transition-all duration-300",
                selected === "approve"
                  ? "border-PED-green bg-PED-green text-white"
                  : "border-gray-300 bg-white text-PED-purple hover:border-PED-green"
              )}
            >
              <p className="text-xl font-medium">เห็นชอบ</p>
              {selected === "approve" && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-2 text-4xl">
                  ✗
                </motion.div>
              )}
            </button>

            <button
              onClick={() => setSelected("disapprove")}
              className={classNames(
                "rounded-lg border-4 p-4 text-center transition-all duration-300",
                selected === "disapprove"
                  ? "border-PED-orange bg-PED-orange text-white"
                  : "border-gray-300 bg-white text-PED-purple hover:border-PED-orange"
              )}
            >
              <p className="text-xl font-medium">ไม่เห็นชอบ</p>
              {selected === "disapprove" && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-2 text-4xl">
                  ✗
                </motion.div>
              )}
            </button>

            <button
              onClick={() => setSelected("abstain")}
              className={classNames(
                "rounded-lg border-4 p-4 text-center transition-all duration-300",
                selected === "abstain"
                  ? "border-gray-500 bg-gray-500 text-white"
                  : "border-gray-300 bg-white text-PED-purple hover:border-gray-500"
              )}
            >
              <p className="text-xl font-medium">งดออกเสียง</p>
              {selected === "abstain" && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-2 text-4xl">
                  ✗
                </motion.div>
              )}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex justify-center"
          >
            <Button text="ยืนยันและต่อไป" onClick={handleVote} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
