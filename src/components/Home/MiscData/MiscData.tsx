import {FC} from "react"

import { LinkButton } from "@/components/common/Home/Button"
import { ArticleCard } from "@/components/Home/MiscData/ArticleCard"
import { MiscHeader } from "@/components/Home/MiscData/MiscHeader"

interface MiscDataProps {
  hideButton?: boolean
}

export const MiscData: FC<MiscDataProps> = ({hideButton}) => {
  return (
    <section>
      <div className="flex flex-col items-center py-20">
        <div className="-ml-4 flex flex-col items-start md:ml-0 md:items-center">
          <MiscHeader />
          <h2 className="text-tagline mt-6 text-xl md:mt-2">อ่านง่าย ย่อยง่าย สำหรับทุกคน</h2>
        </div>

        <div className="my-12 flex w-full max-w-4xl flex-wrap items-center justify-center sm:px-4">
          <ArticleCard
            title={
              <span>
                การเลือก
                <br />
                นายกรัฐมนตรี
              </span>
            }
            date="24 เม.ย. 66"
            thumbnail={"thumb-6.jpg"}
            url={"/blog/priminister"}
          />
          <ArticleCard title={<span>ความสำคัญของ ส.ว.</span>} date="24 เม.ย. 66" thumbnail={"thumb-2.jpg"} url={"/blog/senator"}/>
          <ArticleCard
            title={
              <span>
                ส.ส. เขต vs
                <br />
                ส.ส. บัญชีรายชื่อ
              </span>
            }
            date="24 เม.ย. 66"
            thumbnail={"thumb-3.jpg"}
            url={"/blog/mps"}
          />
          <ArticleCard
            title={
              <span>
                คำศัพท์ที่น่าสนใจ
                <br />
                เลือกตั้ง 66
              </span>
            }
            date="24 เม.ย. 66"
            url={"/blog/words"}
            thumbnail={"thumb-1.jpg"}
          />
          <ArticleCard
            title={
              <span>
                บทบาทนอกคูหา
                <br />
                ของประชาชน
                <br />
                ในการเลือกตั้ง
              </span>
            }
            date="24 เม.ย. 66"
            url={"/blog/role"}
            thumbnail={"thumb-4.jpg"}
          />
          <ArticleCard
            title={
              <span>
                สูตรคำนวณ
                <br />
                ส.ส. บัญชีรายชื่อ
              </span>
            }
            date="24 เม.ย. 66"
            url={"/blog/calculate"}
            thumbnail={"thumb-5.jpg"}
          />
        </div>
        {!hideButton && <LinkButton link="/blog" text={"ดูข้อมูลทั้งหมด"}/>}
      </div>
    </section>
  )
}
