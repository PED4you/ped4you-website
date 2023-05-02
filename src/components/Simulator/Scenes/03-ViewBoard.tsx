import { useMemo, useState } from "react"

import Image from "next/image"

import { StarIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"
import { getPartyList } from "../utils"

export default function ViewBoard() {
  const [type, setType] = useState<"region" | "partylist">("region")
  const { userData, setPage } = usePage()

  const partyListMembers = useMemo(() => getPartyList(), [])

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-medium text-PED-orange">ขั้นที่ 2</span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">จดจำหมายเลขผู้สมัครและพรรคที่เราจะเลือก</h1>
        <p className="text-lg font-light text-PED-green">เพื่อใช้ในการลงคะแนนเสียง</p>
      </div>

      <div className="relative -top-6 flex justify-end">
        <Button text="ต่อไป" onClick={() => setPage("4")} />
      </div>

      <div
        className={classNames(
          "flex flex-col gap-2 rounded-md bg-gradient-to-b p-4 text-center",
          type === "partylist" ? "from-PED-green to-PED-green-secondary" : "from-PED-purple-secondary to-PED-purple"
        )}
      >
        <div className="flex justify-center pt-6 pb-3 gap-4">
          <button
            className={classNames(
              "rounded-lg px-6 py-3 text-lg font-medium text-PED-purple-secondary shadow-md ring-2 ring-slate-100/25 transition-all duration-500 ease-out hover:ring-8",
              type === "region" ? "bg-white" : " bg-slate-200"
            )}
            onClick={() => setType("region")}
          >
            แบ่งเขต
          </button>
          <button
            className={classNames(
              "rounded-lg px-6 py-3 text-lg font-medium text-PED-green shadow-md ring-2 ring-slate-100/25 transition-all duration-500 ease-out hover:ring-8",
              type === "partylist" ? "bg-white" : " bg-slate-200"
            )}
            onClick={() => setType("partylist")}
          >
            บัญชีรายชื่อ
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {type === "region" &&
            userData.votingDistrict.candidates.map((candidate, index) => (
              <div key={index} className="flex flex-col items-center gap-2 rounded-lg bg-white py-2">
                <Image
                  src={`/images/simulator/party/${candidate.party}.png`}
                  alt={candidate.party}
                  width={75}
                  height={75}
                />

                <div className="flex items-center gap-2 px-4">
                  <p className="text-4xl font-medium">{candidate.no}</p>

                  <div className="flex flex-col">
                    <p className="text-left text-[0.85rem] font-light">{candidate.candidate}</p>
                    <p className="text-left text-[0.65rem] font-light">{candidate.party}</p>
                  </div>
                </div>
              </div>
            ))}

          {type === "partylist" &&
            partyListMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-2 rounded-lg bg-white px-4 pb-2 pt-8">
                <Image src={`/images/simulator/party/${member.party}.png`} alt={member.party} width={75} height={75} />

                <div className="flex items-center gap-2">
                  <p className="text-left text-[1.5rem] font-medium">{member.no}</p>

                  <p className="text-left text-[0.85rem] font-light">พรรค{member.party}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
