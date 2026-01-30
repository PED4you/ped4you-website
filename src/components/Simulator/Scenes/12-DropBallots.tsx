import { useEffect, useState } from "react"

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
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 p-4 py-6">

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-medium text-PED-green-secondary">หย่อนบัตรลงหีบใส่บัตรด้วยตนเอง</h1>
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
                className="absolute left-1/2 top-0 -translate-x-1/2 animate-pulse text-center font-light text-black"
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
                ? "from-[#31b16c] to-[#1f7957]"
                : "from-[#FFD5FF] to-[#FC60A8]",
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
            className="relative z-20 h-64 w-72 bg-gradient-to-b from-[#59CD90] to-[#2D936C] sm:w-[32rem]"
          />
        </div>
      </div>
    </section>
  )
}
