import { Fragment, useState } from "react"

import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"

import { mitr, sarabun } from "@/app/fonts"
import {Button} from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

export default function Signature() {
  const [signed, setSigned] = useState(false)
  const { userData, setPage } = usePage()

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 p-4 px-6">

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">ลงลายมือชื่อหรือพิมพ์ลายนิ้วหัวแม่มือ</h1>
        <p className="text-lg font-light text-PED-green">เพื่อเป็นการยืนยันตัวตน</p>
      </div>
      

      <div
        className={classNames(
          sarabun.className,
          "relative flex flex-col mt-6 gap-2 overflow-hidden rounded-md bg-gradient-to-b from-[#FCFCFC] to-[#F3F1FF] p-4 text-center shadow-lg"
        )}
      >
        <div className="relative grid grid-cols-5 items-center">
          <div className="col-span-2 size-full p-2 ">
            <p className="text-center font-semibold">ชื่อตัว-ชื่อสกุล</p>
          </div>

          <div className="relative col-span-1 size-full p-2">
            <p className="text-center font-semibold">ลำดับที่</p>
          </div>

          <div className="col-span-2 size-full p-2">
            <p className="text-center font-semibold">
              ลายมือชื่อหรือ
              <br />
              ลายพิมพ์นิ้วมือ
            </p>
          </div>

          <hr className="relative col-span-5 my-4 border border-slate-200" />

          <div className="col-span-2 size-full p-2 py-4">
            <p className="text-left font-medium">
              {userData.title}
              {userData.name}
            </p>
          </div>

          <div className="relative col-span-1 size-full p-2 py-4">
            <p className="text-center font-medium">145</p>
          </div>

          <div className="col-span-2 size-full p-2 py-4">
            <AnimatePresence>
              {!signed ? (
                <button
                  onClick={() => setSigned(true)}
                  className={classNames(
                    mitr.className,
                    "animate-pulse text-center font-light text-PED-orange transition-colors hover:text-slate-500"
                  )}
                >
                  แตะเพื่อลงลายมือชื่อ
                </button>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <svg
                    className="mx-auto -mt-2"
                    width="89"
                    height="40"
                    viewBox="0 0 89 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.18312 38.1711C4.66117 34.9772 8.03062 31.6213 11.0071 28.8221C12.8204 27.1168 17.4249 22.0386 20.6793 23.6782C23.1597 24.9278 20.4174 31.368 19.9524 33.0192C19.9061 33.1836 19.1729 36.9541 18.6405 37.2154C18.044 37.5082 18.7774 35.8545 19.0784 35.2588C19.9892 33.4568 21.0036 31.6676 22.3593 30.1652C24.2924 28.0229 26.5418 25.4358 28.9745 23.823C30.8194 22.5999 35.2084 21.8017 36.6714 24.3045C38.0837 27.5878 37.4703 31.1604 37.077 34.6502C37.0034 34.9963 37.033 36.8953 36.6581 37.1493C35.5607 37.893 37.0905 36.071 37.2864 35.8063C38.7746 33.7957 39.8382 31.3833 41.5467 29.4505C43.1725 27.6112 44.9253 26.0713 46.8642 24.5612C47.0633 24.4061 47.4668 24.0621 47.9509 23.7133C49.4676 22.6204 51.6123 23.366 51.7458 25.2306C51.7728 25.6078 51.7603 25.999 51.733 26.4006C51.5688 28.8247 50.9987 31.1538 50.4474 33.5025C50.2567 34.3149 49.8527 36.2729 50.4 37.1039C50.9222 37.8968 58.9921 26.8084 59.1004 26.6344C59.8121 25.4907 63.1734 20.733 64.8238 23.7045C66.2971 26.3571 64.526 30.0584 64.2911 32.8639C64.1932 33.4342 64.2298 36.3139 64.3609 36.0802C65.9402 33.266 67.3924 30.9004 68.5327 27.8463C70.2156 23.3386 72.8715 16.9138 68.5562 13.16C67.4974 12.2389 66.4784 11.6522 65.3876 10.7697C64.8255 10.315 63.058 9.36411 63.6549 8.89642C64.3715 8.33493 66.3596 8.6391 67.2836 8.54667C71.1623 8.34593 75.2093 6.85091 78.8064 5.42166C81.4208 4.38286 89.1236 0.210122 86.8665 2.92708"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {Array(4)
            .fill("")
            .map((_, i) => (
              <Fragment key={i}>
                <div className="col-span-2 flex size-full items-center justify-center p-2 py-4 blur-sm">
                  <p className="text-left  font-medium">นายเลือกตั้ง จำลอง</p>
                </div>

                <div className="col-span-1 flex size-full items-center justify-center p-2 py-4 blur-sm">
                  <p className="text-center font-medium">{146 + i}</p>
                </div>

                <div className="col-span-2 size-full p-2 py-4"></div>
              </Fragment>
            ))}
        </div>
      </div>
      <div className="flex justify-center">
        <AnimatePresence>
          {signed && (
            <motion.div
              className=""
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Button text="ต่อไป" onClick={() => setPage("8")} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
