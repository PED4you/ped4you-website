import { useState } from "react"

import { motion } from "framer-motion"

import { usePage } from "../../PageProvider"

export type ReferendumChoice = "approve" | "disapprove" | "abstain" | null

export default function ReferendumBallot({ onNext }: { onNext: (choice: ReferendumChoice) => void }) {
  const [selected, setSelected] = useState<ReferendumChoice>(null)
  const { userData, setUserData } = usePage()

  const handleVote = (choice: ReferendumChoice) => {
    setSelected(choice)
    setUserData({
      ...userData,
      referendumVote: { choice },
    })
    // Give a small delay to show the "selection" if needed, but the user wants to go to mark page
    setTimeout(() => {
      onNext(choice)
    }, 300)
  }

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 p-4 px-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold text-PED-green-secondary">ลงคะแนนประชามติ</h1>
        <p className="mt-1 text-center text-lg font-light text-slate-500">
          คลิกช่องที่คุณ
          <br />
          ต้องการออกเสียง
        </p>
      </div>

      <div className="relative mt-1 flex flex-col overflow-hidden bg-[#F0D65D] shadow-lg">
        {/* Decorative Dashed Line */}
        <div className="absolute inset-x-0 -top-0 border-t-2 border-dashed border-black/20" />

        <div className="flex flex-col items-center px-8 pb-10 pt-16">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-medium text-black">บัตรออกเสียงประชามติ</h2>
            <p className="text-xl font-medium text-black">
              ประเด็น “ท่านเห็นชอบว่าสมควรมี
              <br />
              รัฐธรรมนูญฉบับใหม่หรือไม่”
            </p>
            <p className="mt-2 text-sm text-black">โปรดทำเครื่องหมายกากบาท X</p>
            <p className="text-sm text-black">ในช่องทำเครื่องหมายเพียงเครื่องหมายเดียว</p>
          </div>

          {/* Approve Choice */}
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-48 items-center justify-center bg-[#D6A55C] text-lg  text-black shadow-sm">
              เห็นชอบ
            </div>
            <button
              onClick={() => handleVote("approve")}
              className="mt-1 flex h-28 w-44 items-center justify-center border border-black bg-white transition-colors hover:bg-slate-50"
            >
              {selected === "approve" && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-7xl font-light text-black"
                >
                  ✕
                </motion.span>
              )}
            </button>
          </div>

          {/* Middle Indicator */}
          <div className="my-4 flex flex-col items-center text-[#D6A55C]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            <span className="text-xs text-black">ช่องทำเครื่องหมาย</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>

          {/* Disapprove Choice */}
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-48 items-center justify-center bg-[#D6A55C] text-lg  text-black shadow-sm">
              ไม่เห็นชอบ
            </div>
            <button
              onClick={() => handleVote("disapprove")}
              className="mt-1 flex h-28 w-44 items-center justify-center border border-black bg-white transition-colors hover:bg-slate-50"
            >
              {selected === "disapprove" && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-7xl font-light text-black"
                >
                  ✕
                </motion.span>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Section (Abstain) */}
        <div className="flex items-center justify-between bg-[#D6A55C] px-8 py-6">
          <div className="max-w-[180px] text-sm text-white">
            ถ้าไม่ประสงค์จะแสดง ความคิดเห็น ให้ทำเครื่องหมาย กากบาท “X” ในช่อง
          </div>

          <div className="flex items-center gap-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>

            <div className="flex flex-col items-center">
              <span className="mb-1 text-[10px] text-white">ไม่แสดงความคิดเห็น</span>
              <button
                onClick={() => handleVote("abstain")}
                className="flex h-20 w-24 items-center justify-center border-2 border-white bg-white transition-colors hover:bg-slate-50"
              >
                {selected === "abstain" && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-6xl font-light text-black"
                  >
                    ✕
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
