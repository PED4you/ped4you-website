import { useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

import PartyListBallot from "../components/MarkBallots/PartyList"
import PartyListMark from "../components/MarkBallots/PartyListMark"
import RegionBallot from "../components/MarkBallots/Region"
import RegionMark from "../components/MarkBallots/RegionMark"
import { usePage } from "../PageProvider"

export default function MarkBallots() {
  const [type, setType] = useState<"green" | "green-mark" | "purple" | "purple-mark">("green")
  const { setPage } = usePage()

  return (
    <AnimatePresence>
      <motion.div
        key={type}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
      >
        {type === "green" && <RegionBallot nextPage={() => setType("green-mark")} />}
        {type === "green-mark" && <RegionMark nextPage={() => setType("purple")} />}
        {type === "purple" && <PartyListBallot nextPage={() => setType("purple-mark")} />}
        {type === "purple-mark" && <PartyListMark nextPage={() => setPage("11")} />}
      </motion.div>
    </AnimatePresence>
  )
}
