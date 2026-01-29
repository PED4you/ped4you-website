import { Fragment } from "react"

import { StarIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"

import { sarabun } from "@/app/fonts"
import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

export default function ReferendumViewYourNumber() {
  const { userData, setPage } = usePage()

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-medium text-PED-orange">ขั้นที่ 3</span>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">ตรวจสอบชื่อ-สกุลและจดจำลำดับของตนเอง</h1>
        <p className="text-lg font-light text-PED-green">เพื่อนำเลขลำดับของตนเองไปแจ้งกับเจ้าหน้าที่</p>
      </div>

      <div className="mb-4 grid w-full grid-cols-5 items-center justify-between sm:flex">
        <div className="relative col-span-3 text-left text-base font-medium text-PED-orange sm:w-64 ">
          <p>
            หมายเหตุ : เลขนี้เป็นเพียงเลขสมมติ
            <br />
            ในวันจริงจะต้องดูที่บอร์ดของหน่วยลงประชามติ
          </p>
        </div>

        <div className="relative col-span-2 mb-4 flex justify-end">
          <Button className="" text="ต่อไป" onClick={() => setPage("20")} />
        </div>
      </div>

      <div
        className={classNames(
          sarabun.className,
          "relative flex flex-col gap-2 overflow-hidden rounded-md bg-gradient-to-b from-[#FCFCFC] to-[#F3F1FF] p-4 text-center shadow-lg"
        )}
      >
        <div className="relative grid grid-cols-5 items-center">
          <div className="col-span-2 h-full w-full p-6">
            <p className="text-center text-lg font-semibold">ชื่อตัว-ชื่อสกุล</p>
          </div>

          <div className="relative col-span-1 h-full w-full p-6">
            <p className="text-center text-lg font-semibold">ลำดับที่</p>
          </div>

          <div className="col-span-2 h-full w-full p-6">
            <p className="text-center text-lg font-semibold">
              ลายมือชื่อหรือ
              <br />
              ลายพิมพ์นิ้วมือ
            </p>
          </div>

          <hr className="relative col-span-5 my-4 border border-slate-200" />

          <div className="col-span-2 h-full w-full p-6">
            <p className="text-left text-lg font-medium">
              {userData.title}
              {userData.name}
            </p>
          </div>

          <div className="relative col-span-1 flex h-full w-full items-center justify-center p-6">
            <p className="text-center text-lg font-semibold">145</p>

            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              width="107"
              height="60"
              viewBox="0 0 107 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M84.307 51.7554C62.1224 56.2249 34.9882 55.3892 14.3207 45.598C10.0327 43.5666 2.97177 39.4285 3.06873 33.4767C3.15107 28.422 8.7361 22.7938 12.2278 19.8517C24.7663 9.28697 50.578 -0.102639 70.6527 2.15886C79.7408 2.97443 109.589 10.7803 104.761 26.5228C103.433 30.8501 99.8074 35.5064 96.641 38.7884C85.8911 49.9308 62.8592 54.0408 48.4566 52.8239C31.0522 51.3533 12.9349 46.8061 3.55048 30.7241C-4.68615 16.609 18.1151 9.41581 27.4923 6.71004C44.8449 1.70298 58.5992 3.33298 75.3934 6.27222C86.0366 8.13493 101.73 14.4839 103.405 27.0371C105.359 41.6874 91.7761 50.9956 80.9714 57.8024"
                stroke="#FF521B"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="col-span-2 h-full w-full p-6"></div>

          {Array(5)
            .fill("")
            .map((_, i) => (
              <Fragment key={i}>
                <div className="col-span-2 flex h-full w-full items-center justify-center p-6 blur-sm">
                  <p className="text-left text-lg font-medium">นายเลือกตั้ง จำลอง</p>
                </div>

                <div className="col-span-1 flex h-full w-full items-center justify-center p-6 blur-sm">
                  <p className="text-center text-lg font-medium">{146 + i}</p>
                </div>

                <div className="col-span-2 h-full w-full p-6"></div>
              </Fragment>
            ))}
        </div>
      </div>
    </section>
  )
}
