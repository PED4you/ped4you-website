import classNames from "classnames"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"
import { isAbleToVote } from "../utils"

export default function Elgibility() {
  const { userData, setPage } = usePage()
  const canVote = isAbleToVote(userData.birthdate)

  return (
    <div className="relative -top-6 flex min-h-screen flex-col items-center justify-center gap-12">
      <div className="flex flex-col gap-6">
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
            "text-center text-lg font-light",
            canVote ? "text-PED-green" : "text-PED-orange-secondary"
          )}
        >
          {canVote ? (
            <>
              เขตการเลือกตั้งของคุณคือ
              <br />
              กทม. เขต 2 (เขตสาทร เขตปทุมวัน เขตราชเทวี)
            </>
          ) : (
            <>แต่คุณยังสามารถลองเลือกตั้งกับพวกเราได้นะ !</>
          )}
        </p>
      </div>

      <Button text="ไปดูบอร์ดกัน !" onClick={() => setPage("3")} />

      <div className="rounded-xl bg-PED-yellow px-10 py-6 text-center text-lg font-light text-PED-purple-secondary">
        <p>
          สามารถตรวจสอบข้อมูลผู้มีสิทธิ์เลือกตั้งได้ที่เว็บไซต์ของกรมการปกครอง
          <br />
          <a
            className="underline hover:no-underline"
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
