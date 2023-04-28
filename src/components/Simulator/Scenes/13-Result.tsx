import { StarIcon } from "@heroicons/react/24/solid"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"
import { formatDate } from "../utils"

export default function Result() {
  const { userData, setPage } = usePage()

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <h1 className="text-center text-2xl font-medium text-PED-orange">สรุปการลงคะแนนเสียง</h1>

      <div className="mt-4 flex flex-col gap-2">
        <p className="text-center text-lg font-medium text-PED-purple">
          {userData.title}
          {userData.name}
        </p>
        <p className="text-center text-lg text-PED-purple">
          เขตการเลือกตั้ง{userData.votingDistrict.province} เขต {userData.votingDistrict.code}
          <br />
          <span className="text-sm font-light">
            ({userData.votingDistrict.districts.map((d) => `${d.name}`).join(" ")})
          </span>
        </p>
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-sm flex-col gap-4 rounded-lg bg-gradient-to-b from-white to-[#F2F6FF] py-10 px-12 shadow-2xl ring-1 ring-PED-purple-secondary/5 transition-all duration-500 ease-out hover:scale-[101%] hover:ring-8">
        <div className="mb-2">
          <span className="rounded-full bg-PED-purple px-6 py-2 text-center font-medium text-white">
            แบบแบ่งเขตเลือกตั้ง
          </span>
        </div>

        <div className="flex flex-col">
          <p className="font-medium">หมายเลข {userData.regionVote.no}</p>
          <p className="font-light">{userData.regionVote.candidate}</p>
          <p className="font-light">พรรค{userData.regionVote.party}</p>
        </div>

        <div className="mt-4">
          <span className="rounded-full bg-PED-green-secondary px-6 py-2 text-center font-medium text-white">
            แบบบัญชีรายชื่อ
          </span>
        </div>

        <div className="flex flex-col">
          <p className="font-medium">หมายเลข {userData.partylistVote.no}</p>
          <p className="font-light">พรรค{userData.partylistVote.party}</p>
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

          <p className="mt-2 text-sm">
            อย่าลืมไปใช้สิทธิ์เลือกตั้งในวันที่ 14 พฤษภาคม 2566 (หรือวันที่ 7 พฤษภาคมสำหรับผู้ที่เลือกตั้งล่วงหน้า)
          </p>
        </div>

        <Button text="ต่อไป" onClick={() => setPage("14")} />
      </div>
    </section>
  )
}
