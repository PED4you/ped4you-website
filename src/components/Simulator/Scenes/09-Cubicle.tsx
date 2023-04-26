import { useEffect, useState } from "react"

import Image from "next/image"

import { StarIcon } from "@heroicons/react/24/solid"
import { AnimatePresence, motion } from "framer-motion"

import { usePage } from "../PageProvider"
import { Button } from "@/components/common/Home/Button"

function Heading() {
  return (
    <div className="flex flex-col gap-4 px-8 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-medium text-PED-orange">ขั้นที่ 8</span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">
          เซ็นชื่อและลงลายมือชื่อหรือลายพิมพ์นิ้วมือที่ต้นขั้ว
        </h1>
        <p className="text-lg font-light text-PED-green">และฉีกต้นขั้วออกให้กับกรรมการประจำหน่วยเลือกตั้ง</p>
      </div>
    </div>
  )
}

export default function Cubible() {
  const [signed, setSigned] = useState(false)
  const [type, setType] = useState<"green" | "purple" | "ballot">("green")
  const { setPage } = usePage()

  useEffect(() => {
    if (signed) {
      if (type === "green") {
        setTimeout(() => {
          setSigned(false)
          setType("purple")
        }, 1000)
      } else if (type === "purple") {
        setTimeout(() => {
          setType("ballot")
        }, 1000)
      }
    }
  }, [signed, setPage, type])

  return (
    <section className="relative mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center overflow-hidden">
      <Heading />

      <div className="relative">
        <AnimatePresence>
          {type === "green" && (
            <motion.div initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }}>
              <Image
                src="/images/simulator/ballot/green-desktop.png"
                width={800}
                height={600}
                alt="Green Ballot"
                className="mx-auto hidden sm:block"
              />
              <Image
                src="/images/simulator/ballot/green-mobile.png"
                width={400}
                height={600}
                alt="Green Ballot"
                className="mx-auto block sm:hidden"
              />
              <div className="absolute top-[16rem] left-1/2 -translate-x-1/2">
                <AnimatePresence>
                  {!signed ? (
                    <button
                      onClick={() => setSigned(true)}
                      className="relative top-4 animate-pulse text-center font-light text-PED-orange"
                    >
                      แตะเพื่อลงลายมือชื่อ
                    </button>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <svg
                        className="mx-auto"
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
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {type === "purple" && (
            <motion.div initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }}>
              <Image
                src="/images/simulator/ballot/purple-desktop.png"
                width={800}
                height={600}
                alt="Purple Ballot"
                className="mx-auto hidden sm:block"
              />
              <Image
                src="/images/simulator/ballot/purple-mobile.png"
                width={400}
                height={600}
                alt="Purple Ballot"
                className="mx-auto block sm:hidden"
              />
              <div className="absolute top-[16rem] left-1/2 -translate-x-1/2">
                <AnimatePresence>
                  {!signed ? (
                    <button
                      onClick={() => setSigned(true)}
                      className="relative top-4 animate-pulse text-center font-light text-PED-orange"
                    >
                      แตะเพื่อลงลายมือชื่อ
                    </button>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <svg
                        className="mx-auto"
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
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {type === "ballot" && (
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{
                // delay: 0.5,
                duration: 0.5,
                staggerChildren: 0.5,
              }}
              className="relative pt-6"
            >
              <Button
                className="absolute -top-12 left-1/2 -translate-x-1/2"
                text="ต่อไป"
                onClick={() => setPage("10")}
              />
              <Image
                src="/images/simulator/ballot/cubicle.png"
                width={800}
                height={600}
                alt="Cubicle"
                className="relative -top-8 mx-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
