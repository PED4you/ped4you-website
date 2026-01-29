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
        return "ไม่แสดงความคิดเห็น"
      default:
        return "-"
    }
  }

  const getChoiceColor = (choice: string | null) => {
    switch (choice) {
      case "approve":
        return "text-[#D6A55C]"
      case "disapprove":
        return "text-[#D6A55C]"
      case "abstain":
        return "text-[#D6A55C]"
      default:
        return "text-gray-400"
    }
  }

  const getDistrictText = (votingDistrict: any) => {
    if (!votingDistrict) return ""
    const districtNames = votingDistrict.districts.map((d: any) => d.name)
    if (districtNames.length === 0) return ""
    return `(เขต${districtNames.join(" เขต")})`
  }

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col items-center p-4 px-6">
      <h1 className="text-center text-3xl font-medium text-PED-orange">สรุปการออกเสียงประชามติ</h1>

      <div className="mt-2 flex flex-col items-center gap-3">
        <p className="text-center text-2xl text-[#4438CA]">
          {userData.title} {userData.name}
        </p>
        <span className="rounded-full bg-PED-green px-8 py-1.5 text-center text-2xl font-medium text-white">
          {userData.votingDistrict.province} เขต {userData.votingDistrict.code}
        </span>
        <p className="text-center text-sm text-PED-green">
          {getDistrictText(userData.votingDistrict)}
        </p>
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-sm flex-col gap-4 rounded-[2rem] bg-[#F4F4F4] p-10 shadow-xl ring-1 ring-black/5">
         <span className="rounded-full bg-PED-yellow px-10 py-2 text-center text-xl  text-white">
            การออกเสียงประชามติ
          </span>
        <div className="mt-4 flex flex-col gap-1">
          <p className={`text-xl font-medium ${getChoiceColor(userData.referendumVote?.choice)}`}>
            {getChoiceText(userData.referendumVote?.choice)}
          </p>
          <p className="text-xl leading-tight text-black">
            ในประเด็น &ldquo;ท่านเห็นชอบว่าสมควรมี รัฐธรรมนูญฉบับใหม่หรือไม่&rdquo;
          </p>
        </div>

        <hr className="my-2 border-gray-300" />

        <div className="flex flex-col gap-4 text-lg  text-black">
          <div className="flex items-center justify-between gap-2">
            <span>เวลาที่ใช้สิทธิ์จำลอง</span>
            <span>
              {formatDate(userData.startDate)["hh-mm"]}-{formatDate(new Date())["hh-mm"]} น.
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>วันที่ใช้สิทธิ์จำลอง</span>
            <span>
              {formatDate(userData.startDate).date} {formatDate(userData.startDate).thMonth}{" "}
              {formatDate(userData.startDate).year + 543}
            </span>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2 text-lg font-medium text-PED-orange">
          <StarIcon className="size-6" /> 8 ก.พ. 2569 ออกเสียงประชามติ
        </div>
      </div>

      <div className="mt-8">
        <Button
          text="เสร็จสิ้น"
          className="!mt-0 rounded-[2rem] px-16 py-4 text-2xl font-bold"
          onClick={() => setPage("29")}
        />
      </div>
    </section>
  )
}
