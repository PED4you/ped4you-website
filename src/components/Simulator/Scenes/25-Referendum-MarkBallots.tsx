import { useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

import ReferendumBallot from "../components/MarkBallots/ReferendumBallot"
import ReferendumMark from "../components/MarkBallots/ReferendumMark"
import { usePage } from "../PageProvider"

export default function ReferendumMarkBallots() {
  const [step, setStep] = useState<"select" | "mark">("select")
  const { setPage } = usePage()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ x: step === "select" ? -300 : 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: step === "select" ? 300 : -300, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {step === "select" && <ReferendumBallot onNext={() => setStep("mark")} />}
        {step === "mark" && <ReferendumMark nextPage={() => setPage("26")} />}
      </motion.div>
    </AnimatePresence>
  )
}
