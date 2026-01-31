import { useEffect, useState } from "react"

import { StarIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"

import { usePage } from "../PageProvider"

export default function ReferendumDropBallots() {
  const [type, setType] = useState<"ballot" | "ballot-fall">("ballot")
  const { setPage } = usePage()

  useEffect(() => {
    if (type === "ballot-fall") setTimeout(() => setPage("28"), 1000)
  }, [type, setPage])

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-semibold text-PED-orange">ขั้นที่ 10</span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-PED-green-secondary">หย่อนบัตรลงหีบใส่บัตรด้วยตนเอง</h1>
        <p className="text-lg font-medium text-PED-green">หย่อนบัตรประชามติลงในหีบ</p>
      </div>

      <div className="relative mt-16 flex flex-col">
        <AnimatePresence>
          {type === "ballot" && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setType("ballot-fall")}
              className="absolute left-1/2 top-0 -translate-x-1/2 animate-pulse text-center font-medium text-black"
            >
              แตะเพื่อหย่อนบัตร
            </motion.button>
          )}
        </AnimatePresence>

        <div className="relative mx-auto mt-32">
          <motion.div
            variants={{
              ballot: { x: "-50%", rotate: 12, opacity: 1, y: "-1rem" },
              "ballot-fall": { x: "-50%", rotate: 12, opacity: 0, y: "8rem" },
            }}
            initial={{ x: -200, rotate: 0, opacity: 0, y: "-1rem" }}
            animate={type}
            transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
            className={classNames(
              "from-yellow-300 to-yellow-500",
              "absolute -top-16 left-1/2 h-[10rem] w-[4rem] -translate-x-1/2 -rotate-12 bg-gradient-to-b"
            )}
            onClick={() => {
              if (type === "ballot") setType("ballot-fall")
            }}
          />

          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-20 h-[16rem] w-[18rem] bg-gradient-to-b from-[#59CD90] to-[#2D936C] sm:w-[32rem]"
          />
        </div>
      </div>
    </section>
  )
}
