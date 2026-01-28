import Image from "next/image"
import Link from "next/link"

import { FooterHeading } from "@/components/common/Footer/FooterHeading"
import { FacebookIcon, GitHubIcon, InstagramIcon, TwitterIcon } from "@/components/common/Footer/SocialIcons"
import { DuckSplash } from "@/components/Home/Landing/DuckSplash"

export const Footer = () => {
  return (
    <footer id="about-us" className="bg-PED-yellow py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-8">
        <FooterHeading />
        <p className="mt-8 text-center font-light">
          ped4you คือ
          แพลตฟอร์มที่ช่วยให้ผู้มีสิทธิ์เลือกตั้งครั้งแรกได้เข้าใจระบบการเลือกตั้งผ่านประสบการณ์เลือกตั้งเสมือนจริง
          และเป็นแหล่งรวบรวมข้อมูลเกี่ยวกับการเลือกตั้งที่ย่อยง่าย อ่านสบาย และมีประโยชน์ต่อการเลือกตั้งครั้งแรกของทุกคน
        </p>
        <p className="mt-8 break-words border-b-[3px] border-b-PED-purple pb-14 text-center font-light">
          Ped4you is an internet-based platform that facilitates the comprehension of the election process for novice
          voters, by offering them a virtual election experience. It is an accessible, comprehensible, and beneficial
          resource to aid first-time voters in making informed decisions during their initial election participation.
        </p>
        {/*<div className="mt-14 w-[100px]">
          <DuckSplash />
        </div>*/}
        <Image src="/images/all_logos.svg" height={72} width={1080} className="h-28 w-full object-contain px-8 pt-12" />
        <div className="mt-8 flex flex-wrap items-center justify-center space-x-8">
          {/*<Link href="https://www.facebook.com/profile.php?id=100091240677745&mibextid=LQQJ4d">
            <div className="m-1 flex items-center space-x-2">
              <FacebookIcon />
              <span className="text-lg font-light">PED4you</span>
            </div>
          </Link>
          <Link href="https://twitter.com/ped4you">
            <div className="m-1 flex items-center space-x-2">
              <TwitterIcon />
              <span className="text-lg font-light">@PED4you</span>
            </div>
          </Link>*/}
          <Link href="https://www.instagram.com/ped4you.ig/">
            <div className="m-1 flex items-center space-x-2">
              <InstagramIcon />
              <span className="text-lg font-light">@PED4you</span>
            </div>
          </Link>
          <Link href="https://github.com/PED4you">
            <div className="m-1 flex items-center space-x-2">
              <GitHubIcon />
              <span className="text-lg font-light">PED4you</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  )
}
