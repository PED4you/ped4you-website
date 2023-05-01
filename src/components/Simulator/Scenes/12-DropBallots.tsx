import { useEffect, useState } from "react"

import { StarIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"

import { usePage } from "../PageProvider"

export default function DropBallots() {
  const [type, setType] = useState<"purple" | "purple-fall" | "intermission" | "green" | "green-fall">("purple")
  const { setPage } = usePage()

  useEffect(() => {
    if (type === "purple-fall") setTimeout(() => setType("intermission"), 500)
    if (type === "intermission") setTimeout(() => setType("green"), 500)
    if (type === "green-fall") setTimeout(() => setPage("13"), 1000)
  }, [type, setPage])

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-medium text-PED-orange">ขั้นที่ 10</span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">หย่อนบัตรลงหีบใส่บัตรด้วยตนเอง</h1>
        <p className="text-lg font-light text-PED-green">โดยแยกหย่อนบัตรตามประเภทของบัตร</p>
      </div>

      <div className="relative mt-16 flex flex-col">
        <AnimatePresence>
          {type === "green-fall" ||
            ("purple-fall" && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  if (type === "purple") setType("purple-fall")
                  else if (type === "green") setType("green-fall")
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 animate-pulse text-center font-light text-black"
              >
                แตะเพื่อหย่อนบัตร
              </motion.button>
            ))}
        </AnimatePresence>

        <div className="relative mx-auto mt-32">
          <motion.div
            variants={{
              purple: { x: "-50%", rotate: 12, opacity: 1, y: "-1rem" },
              "purple-fall": { x: "-50%", rotate: 12, opacity: 0, y: "8rem" },
              intermission: { x: -200, rotate: 12, opacity: 0, y: "-1rem" },
              green: { x: "-50%", rotate: 12, opacity: 1, y: "-1rem" },
              "green-fall": { x: "-50%", rotate: 12, opacity: 1, y: "8rem" },
            }}
            initial={{ x: -200, rotate: 0, opacity: 0, y: "-1rem" }}
            animate={type}
            transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
            className={classNames(
              type === "purple" || type === "purple-fall"
                ? "from-[#CD82F0] to-[#70268A]"
                : "from-[#31b16c] to-[#1f7957]",
              "absolute -top-16 left-1/2 h-[10rem] w-[4rem] -translate-x-1/2 -rotate-12 bg-gradient-to-b"
            )}
            onClick={() => {
              if (type === "purple") setType("purple-fall")
              else if (type === "green") setType("green-fall")
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
