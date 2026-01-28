"use client"

import { useEffect, useState } from "react"

import { DuckSplash } from "@/components/Home/Landing/DuckSplash"

// Target: January 30, 2026, 1:00 PM Thailand time (UTC+7)
const TARGET_DATE = new Date("2026-01-30T13:00:00+07:00").getTime()

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const calculateTimeLeft = (): TimeLeft => {
  const now = new Date().getTime()
  const difference = TARGET_DATE - now

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  }
}

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="flex size-16 items-center justify-center rounded-xl bg-PED-purple text-3xl font-bold text-white md:size-24 md:text-5xl">
      {String(value).padStart(2, "0")}
    </div>
    <span className="mt-2 text-sm font-medium md:text-base">{label}</span>
  </div>
)

export const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-PED-yellow">
        <div className="w-[200px] md:w-[280px]">
          <DuckSplash />
        </div>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-PED-yellow px-4">
      <div className="flex flex-col items-center">
        <div className="w-[200px] md:w-[280px]">
          <DuckSplash />
        </div>

        <h1 className="mt-8 text-3xl font-bold text-PED-purple md:text-5xl">กำลังจะกลับมาเร็ว ๆ นี้</h1>

        <p className="mt-4 text-center text-lg text-gray-700 md:text-xl">โปรดรอสักครู่...</p>

        <div className="mt-8 flex space-x-3 md:space-x-6">
          <TimeBox value={timeLeft.days} label="วัน" />
          <TimeBox value={timeLeft.hours} label="ชั่วโมง" />
          <TimeBox value={timeLeft.minutes} label="นาที" />
          <TimeBox value={timeLeft.seconds} label="วินาที" />
        </div>
      </div>
    </main>
  )
}
