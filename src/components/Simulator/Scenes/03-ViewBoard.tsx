import { useMemo, useState } from "react"

import Image from "next/image"

import classNames from "classnames"


import {Button} from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"
import { getPartyList } from "../utils"

export default function ViewBoard() {
  const [type, setType] = useState<"region" | "partylist">("region")
  const { userData, setPage } = usePage()

  const partyListMembers = useMemo(() => getPartyList(), [])

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl text-PED-green-secondary">จดจำหมายเลขผู้สมัคร<br/>และพรรคที่เราจะเลือก</h1>
        <p className="text-lg font-light text-PED-green">เพื่อใช้ในการลงคะแนนเสียง</p>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex justify-center rounded-full bg-gray-200">
          <button
            className={classNames(
              "rounded-full px-6 py-3 text-lg text-gray-400 ring-2 ring-slate-100/25 transition-all duration-500 ease-out hover:ring-8",
              type === "region"? "text-white bg-PED-green" : ""
            )}
            onClick={() => setType("region")}
          >
            แบ่งเขต
          </button>
          <button
            className={classNames(
              "rounded-full px-6 py-3 text-lg text-gray-400 ring-2 ring-slate-100/25 transition-all duration-500 ease-out hover:ring-8",
              type === "partylist" ? "text-white bg-[#FC60A8]" : ""
            )}
            onClick={() => setType("partylist")}
          >
            บัญชีรายชื่อ
          </button>
        </div>
      </div>

      <div
        className={classNames(
          "flex flex-col gap-2 rounded-2xl mx-auto p-4 max-w-sm text-center",
          type === "partylist" ? "bg-[#FC60A8]" : "bg-PED-green"
        )}
      >

        <div className="grid max-h-[400px] grid-cols-2 gap-4 overflow-y-auto py-2 pr-4 ">
          {type === "region" &&
            userData.votingDistrict.candidates.map((candidate, index) => (
              <div key={index} className="flex flex-col items-center gap-2 rounded-2xl bg-white py-2">
                <div className="flex w-full items-center justify-start space-x-4 px-4">
                  <span className="text-4xl text-PED-green">{candidate.no}</span>
                  <div className="relative size-[60px] shrink-0">
                    <Image
                      src={`/images/simulator/party/${candidate.party}.png`}
                      alt={candidate.party}
                      fill={true}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4">
                  <div className="flex flex-col items-start">
                    <h2 className="text-left text-lg font-light leading-[24px]">{candidate.candidate}</h2>
                    <p className="mt-1 text-sm font-light text-gray-500">{candidate.party}</p>
                  </div>
                </div>
              </div>
            ))}

          {type === "partylist" &&
            partyListMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 pb-2">
                <p className="text-left text-4xl font-medium text-[#FC60A8]">{member.no}</p>
                <Image src={`/images/simulator/party/${member.party}.png`} alt={member.party} width={75} height={75} />
                <div className="flex items-center">
                  <p className="text-left font-light text-[#FC60A8]">พรรค{member.party}</p>
                </div>
              </div>
            ))}
        </div>

      </div>
      <div className="relative flex justify-center">
        <Button text="ต่อไป" onClick={() => setPage("4")} />
      </div>
    </section>
  )
}
