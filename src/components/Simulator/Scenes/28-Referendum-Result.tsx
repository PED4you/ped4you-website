import { StarIcon } from "@heroicons/react/24/solid"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"
import { formatDate } from "../utils"

export default function ReferendumResult() {
  const { userData, setPage } = usePage()

  const getChoiceText = (choice: string | null) => {
    switch (choice) {
      case "approve":
        return "เห็นชอบ"
      case "disapprove":
        return "ไม่เห็นชอบ"
      case "abstain":
        return "งดออกเสียง"
      default:
        return "-"
    }
  }

  const getChoiceColor = (choice: string | null) => {
    switch (choice) {
      case "approve":
        return "text-PED-green"
      case "disapprove":
        return "text-PED-orange"
      case "abstain":
        return "text-gray-500"
      default:
        return "text-gray-400"
    }
  }

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <h1 className="text-center text-2xl font-medium text-PED-yellow-secondary">สรุปการลงประชามติ</h1>

      <div className="mt-4 flex flex-col gap-2">
        <p className="text-center text-lg font-medium text-PED-purple">
          {userData.title}
          {userData.name}
        </p>
        <p className="text-center text-lg text-PED-purple">
          เขตลงประชามติ {userData.votingDistrict.province} เขต {userData.votingDistrict.code}
        </p>
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-sm flex-col gap-4 rounded-lg bg-gradient-to-b from-white to-yellow-50 px-12 py-10 shadow-2xl ring-1 ring-PED-yellow/5 transition-all duration-500 ease-out hover:scale-[101%] hover:ring-8">
        <div className="mb-2">
          <span className="rounded-full bg-PED-yellow px-6 py-2 text-center font-medium text-PED-purple">
            บัตรลงประชามติ
          </span>
        </div>

        <div className="flex flex-col">
          <p className="font-medium">คำถาม:</p>
          <p className="text-sm font-light text-PED-purple-secondary">
            ท่านเห็นชอบหรือไม่ที่จะให้มีการจัดทำรัฐธรรมนูญฉบับใหม่?
          </p>
        </div>

        <div className="mt-2 flex flex-col">
          <p className="font-medium">คำตอบของคุณ:</p>
          <p className={`text-2xl font-medium ${getChoiceColor(userData.referendumVote?.choice)}`}>
            {getChoiceText(userData.referendumVote?.choice)}
          </p>
        </div>

        <hr className="my-2 border-black" />

        <div className="flex flex-col gap-2 font-light">
          <div className="flex items-center gap-2">
            <StarIcon className="h-5 w-5 text-PED-yellow" /> เวลาที่ใช้สิทธิ์ {formatDate(userData.startDate)["hh-mm"]}-
            {formatDate(new Date())["hh-mm"]} น.
          </div>
          <div className="flex items-center gap-2">
            <StarIcon className="h-5 w-5 text-PED-yellow" /> วันที่ใช้สิทธิ์ {formatDate(userData.startDate).date}{" "}
            {formatDate(userData.startDate).thMonth} {formatDate(userData.startDate).year + 543}
          </div>
        </div>

        <Button text="ต่อไป" onClick={() => setPage("29")} />
      </div>
    </section>
  )
}
