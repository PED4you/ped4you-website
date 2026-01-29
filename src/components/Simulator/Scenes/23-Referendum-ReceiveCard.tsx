import { StarIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

export default function ReferendumReceiveCard() {
  const { setPage } = usePage()

  return (
    <section className="relative mx-auto flex w-full max-w-xl flex-col items-center justify-center gap-4 overflow-hidden px-4 py-10">
      <div className="relative -top-24 sm:-top-48">
        <motion.svg
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="w-[20rem] sm:w-[32rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="500"
          fill="none"
          viewBox="0 0 400 500"
        >
          <g filter="url(#filter0_d_referendum)">
            <rect x="50" y="50" width="300" height="400" rx="8" fill="url(#paint0_linear_referendum)" />
            <rect x="50" y="50" width="300" height="100" rx="8" fill="url(#paint1_linear_referendum)" />
            <rect x="50" y="380" width="300" height="50" fill="#D4A516" />
          </g>
          <defs>
            <filter id="filter0_d_referendum" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <linearGradient
              id="paint0_linear_referendum"
              x1="50"
              y1="150"
              x2="350"
              y2="450"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.247" stopColor="#F2DC5D" />
              <stop offset="1" stopColor="#F5C076" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_referendum"
              x1="50"
              y1="50"
              x2="350"
              y2="150"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#EDF1FF" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="relative -top-72 sm:-top-72">
        <div className="flex items-center gap-2">
          <StarIcon className="h-6 w-6 text-PED-orange" />
          <span className="text-xl font-medium text-PED-orange">ขั้นที่ 7</span>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-medium text-PED-green-secondary sm:text-2xl">คุณจะได้รับบัตรลงประชามติ 1 ใบ</h1>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 text-lg text-PED-yellow-secondary sm:flex-row sm:text-base">
              <p className="font-medium sm:w-24">ใบสีเหลือง</p>
              <p className="font-light">บัตรลงประชามติ</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button text="ต่อไป" onClick={() => setPage("24")} />
        </div>
      </div>
    </section>
  )
}
