import { StarIcon } from "@heroicons/react/24/solid"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"
import { formatDate } from "../utils"

export default function Result() {
  const { userData, setPage } = usePage()

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col p-4 px-6">
      <h1 className="text-center text-4xl font-medium text-PED-orange">สรุปการลงคะแนนเสียง</h1>

      <div className="mt-2 flex flex-col items-center gap-2">
        <p className="text-center text-2xl text-PED-purple">
          {userData.title}
          {userData.name}
        </p>
        <div className="flex flex-col items-center">
          <span className="mb-4 rounded-full bg-PED-green px-4 pb-1.5 pt-1 text-2xl text-white">
            {userData.votingDistrict.province} เขต {userData.votingDistrict.code}
          </span>
          <span className="text-center text-sm font-light text-PED-green">
            ({userData.votingDistrict.districts.map((d) => `${d.name}`).join(" ")})
          </span>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-sm flex-col gap-4 rounded-3xl bg-gradient-to-b from-white to-[#F2F6FF] px-12 py-10 shadow-2xl ring-1 ring-PED-purple-secondary/5 transition-all duration-500 ease-out hover:scale-[101%] hover:ring-8">
        <span className="w-full rounded-full bg-PED-green px-6 py-2 text-center text-xl text-white">
          แบบแบ่งเขตเลือกตั้ง
        </span>

        <div className="flex flex-col">
          <p className="font-medium text-PED-green-secondary">หมายเลข {userData.regionVote.no}</p>
          <p className="font-light">{userData.regionVote.candidate}</p>
          <p className="font-light">พรรค{userData.regionVote.party}</p>
        </div>
        <span className="w-full rounded-full bg-[#FC60A8] px-6 py-2 text-center text-xl text-white">
          แบบบัญชีรายชื่อ
        </span>

        <div className="flex flex-col">
          <p className="font-medium text-[#FC60A8]">หมายเลข {userData.partylistVote.no}</p>
          <p className="font-light">พรรค{userData.partylistVote.party}</p>
        </div>

        <hr className="my-2 border-black" />

        <div className="flex flex-col gap-2 font-light">
          <div className="flex items-center gap-2">
            เวลาที่ใช้สิทธิ์ {formatDate(userData.startDate)["hh-mm"]}-{formatDate(new Date())["hh-mm"]} น.
          </div>
          <div className="flex items-center gap-2">
            วันที่ใช้สิทธิ์ {formatDate(userData.startDate).date} {formatDate(userData.startDate).thMonth}{" "}
            {formatDate(userData.startDate).year + 543}
          </div>

          <div className="mt-2 space-y-2 text-center text-sm">
            <div className="flex items-center gap-2 text-PED-orange">
              <StarIcon className="size-5" /> 1 ก.พ. 2569 เลือกตั้งนอกเขต
            </div>
            <div className="flex items-center gap-2 text-PED-orange">
              <StarIcon className="size-5" /> 8 ก.พ. 2569 เลือกตั้งใหญ่
            </div>
          </div>
        </div>

        <Button text="ต่อไป (ไปกาประชามติ)" onClick={() => setPage("19")} />
      </div>
    </section>
  )
}
