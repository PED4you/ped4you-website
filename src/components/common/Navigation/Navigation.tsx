"use client"
import {useState} from "react"

import Link from "next/link"
import {usePathname} from "next/navigation"

import { Bars3Icon } from "@heroicons/react/24/solid"
import classnames from "classnames"
import {motion} from "framer-motion"

import { Logo } from "@/components/common/Navigation/Logo"

export const Navigation = () => {

  const [show, setNav] = useState(false)

  const pathname = usePathname()

  return <nav className="w-full bg-PED-purple py-2 px-6">
    <motion.div initial={{x: -300}} animate={{x: show ?0 : -300}} transition={{type: "tween"}} className="fixed top-0 left-0 z-[99] min-h-screen bg-PED-purple">
      <div className="bg-PED-yellow py-[10px] px-5">
        <div className="w-[256px] sm:w-[446px]">
          <Logo/>
        </div>
      </div>
      <div className="text-lg text-white">
        <Link href={"/"}>
          <div className={classnames("py-3 px-5", pathname === "/" && "bg-PED-purple-secondary")}>
            หน้าแรก
          </div>
        </Link>
        <Link href={"/simulator"}>
          <div className={classnames("py-3 px-5", pathname === "/simulator" && "bg-PED-purple-secondary")}>
            ลองเลือกตั้ง
          </div>
        </Link>
        <Link onClick={() => {setNav(false)}} href={"/#infos"}>
          <div className="py-3 px-5">
            สิ่งที่ควรรู้
          </div>
        </Link>
        <Link href={"/blog"}>
          <div className={classnames("py-3 px-5", pathname === "/blog" && "bg-PED-purple-secondary")}>
            เกี่ยวกับการเลือกตั้ง
          </div>
        </Link>
        <Link onClick={() => {setNav(false)}} href={"/#about-us"}>
          <div className="py-3 px-5">
            About Us
          </div>
        </Link>
      </div>
    </motion.div>
    {show && <div onClick={() => {setNav(false)}} className="fixed top-0 left-0 z-[98] min-h-screen w-full"/>}
    <div className="max-w-desktop mx-auto flex w-full items-center justify-between">
      <Link href={"/"}>
        <div className="w-[256px] text-white sm:w-[446px]">
          <Logo/>
        </div>
      </Link>
      <div className="hidden items-center space-x-8 text-lg text-white lg:flex">
        <Link href="/simulator">
          ลองเลือกตั้ง
        </Link>
        <a href="/#infos">สิ่งที่ควรรู้</a>
        <Link href="/blog">
          เกี่ยวกับการเลือกตั้ง
        </Link>
        <a href="#about-us">About Us</a>
      </div>
      <div onClick={() => {setNav(true)}} className="lg:hidden">
        <Bars3Icon strokeWidth={0.6} stroke={"currentColor"} className="h-8 w-8 text-white"/>
      </div>
    </div>
  </nav>
}