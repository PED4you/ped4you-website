import Link from "next/link"

import {Bars3Icon} from "@heroicons/react/24/solid"

import {Logo} from "@/components/common/Navigation/Logo"

export const Navigation = () => {
  return <nav className="w-full bg-PED-purple py-2 px-6">
    <div className="max-w-desktop mx-auto flex w-full items-center justify-between">
      <Link href={"/"}>
        <div className="w-[256px] sm:w-[446px]">
          <Logo/>
        </div>
      </Link>
      <div className="hidden items-center space-x-8 text-lg text-white lg:flex">
        <a>ลองเลือกตั้ง</a>
        <a>สิ่งที่ควรรู้</a>
        <a>เกี่ยวกับการเลือกตั้ง</a>
        <a>About us</a>
      </div>
      <div className="lg:hidden">
        <Bars3Icon strokeWidth={0.6} stroke={"currentColor"} className="h-8 w-8 text-white"/>
      </div>
    </div>
  </nav>
}