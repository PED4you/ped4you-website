import { StarIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

import { Button } from "@/components/common/Home/Button"

import { usePage } from "../PageProvider"

export default function ReceiveCard() {
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
          width="817"
          height="628"
          fill="none"
          viewBox="0 0 817 628"
        >
          <g filter="url(#filter0_d_505_208)">
            <path
              fill="url(#paint0_linear_505_208)"
              d="M122.019 33.741H511.65500000000003V543.08H122.019z"
              transform="rotate(13.398 122.019 33.741)"
            ></path>
            <path
              fill="url(#paint1_linear_505_208)"
              d="M122.019 33.741H511.65500000000003V147.017H122.019z"
              transform="rotate(13.398 122.019 33.741)"
            ></path>
            <path stroke="#8D8D8D" strokeDasharray="14 15" d="M95.958 143.152l379.033 90.283"></path>
            <path
              fill="#70268A"
              d="M16.658 476.076H406.29400000000004V530.705H16.658z"
              transform="rotate(13.398 16.658 476.076)"
            ></path>
          </g>
          <g filter="url(#filter1_d_505_208)">
            <path
              fill="url(#paint2_linear_505_208)"
              d="M329.367 77.929H719.003V587.268H329.367z"
              transform="rotate(-11.537 329.367 77.929)"
            ></path>
            <path
              fill="url(#paint3_linear_505_208)"
              d="M329.367 77.929H719.003V191.20499999999998H329.367z"
              transform="rotate(-11.537 329.367 77.929)"
            ></path>
            <path stroke="#8D8D8D" strokeDasharray="14 15" d="M351.862 188.128l381.763-77.929"></path>
            <path
              fill="#2D936C"
              d="M420.31 523.451H809.946V578.08H420.31z"
              transform="rotate(-11.537 420.31 523.451)"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_d_505_208"
              width="505.051"
              height="593.76"
              x="0"
              y="33.741"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_505_208"></feBlend>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_505_208" result="shape"></feBlend>
            </filter>
            <filter
              id="filter1_d_505_208"
              width="491.634"
              height="584.977"
              x="325.367"
              y="0"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_505_208"></feBlend>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_505_208" result="shape"></feBlend>
            </filter>
            <linearGradient
              id="paint0_linear_505_208"
              x1="122.019"
              x2="499.827"
              y1="158.167"
              y2="570.652"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.247" stopColor="#CD82F0"></stop>
              <stop offset="1" stopColor="#70268A"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_505_208"
              x1="122.019"
              x2="436.767"
              y1="25.306"
              y2="383.847"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset="1" stopColor="#EDF1FF"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_505_208"
              x1="329.367"
              x2="707.175"
              y1="202.354"
              y2="614.84"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.247" stopColor="#59CD90"></stop>
              <stop offset="1" stopColor="#2D936C"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_505_208"
              x1="329.367"
              x2="644.115"
              y1="69.493"
              y2="428.035"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset="1" stopColor="#EDF1FF"></stop>
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
          <h1 className="text-3xl font-medium text-PED-green-secondary sm:text-2xl">
            คุณจะได้รับบัตรลงคะแนนเสียงทั้งหมด 2 ใบ
          </h1>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 text-lg text-PED-purple sm:flex-row sm:text-base">
              <p className="w-16 font-medium">ใบสีม่วง</p>
              <p className="font-light">
                บัตรเลือกตั้ง ส.ส. แบบ <span className="font-medium">แบ่งเขตการเลือกตั้ง</span>
              </p>
            </div>

            <div className="flex flex-col gap-2 text-lg text-PED-green sm:flex-row sm:text-base">
              <p className="w-16 font-medium">ใบสีเขียว</p>
              <p className="font-light">
                บัตรเลือกตั้ง ส.ส. แบบ <span className="font-medium">บัญชีรายชื่อ</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button text="ต่อไป" onClick={() => setPage("9")} />
        </div>
      </div>
    </section>
  )
}
