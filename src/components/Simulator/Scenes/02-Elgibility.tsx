import classNames from "classnames"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"
import { isAbleToVote } from "../utils"

export default function Elgibility() {
  const { userData, setPage } = usePage()
  const canVote = isAbleToVote(userData.birthdate)

  return (
    <div className="relative mx-auto flex h-full max-w-xl grow flex-col items-center justify-between">
      <div className="flex grow flex-col justify-center gap-6">
        <h1
          className={classNames(
            "text-center text-4xl font-medium",
            canVote ? "text-PED-green-secondary" : "text-PED-orange"
          )}
        >
          คุณ{!canVote && "ยังไม่"}มีสิทธิ์เลือกตั้ง !
        </h1>

        <p
          className={classNames(
            "px-6 text-center text-base font-normal",
            canVote ? "text-PED-green" : "text-PED-orange"
          )}
        >
          {canVote ? (
            <div className="flex flex-col items-center">
              <h3>เขตการเลือกตั้งของคุณคือ</h3>

              <span className="my-4 rounded-full bg-PED-green px-4 pb-1.5 pt-1 text-2xl text-white">{userData.votingDistrict.province} เขต {userData.votingDistrict.code}</span>
              <span className="text-sm font-light">
                ({userData.votingDistrict.districts.map((d) => `${d.name}`).join(" ")})
              </span>
            </div>
          ) : (
            <>แต่คุณยังสามารถลองเลือกตั้งกับพวกเราได้นะ !</>
          )}
        </p>

        <div className="flex justify-center">
          <Button className="mx-auto" text="ไปดูบอร์ดกัน !" onClick={() => setPage("3")} />
        </div>
      </div>

      <div className="mx-auto w-full rounded-t-2xl bg-PED-yellow px-10 py-6 text-center text-base font-light text-PED-purple-secondary">
        <p className="">
          สามารถตรวจสอบข้อมูลผู้มีสิทธิ์เลือกตั้งได้ที่เว็บไซต์ของกรมการปกครอง
          <br />
          <a
            className="break-words underline hover:no-underline"
            href="https://boraservices.bora.dopa.go.th/election/enqelection/"
            target="_blank"
          >
            https://boraservices.bora.dopa.go.th/election/enqelection/
          </a>
        </p>
      </div>
    </div>
  )
}
