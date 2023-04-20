import { LinkButton } from "@/components/common/Home/Button"
import { ArticleCard } from "@/components/Home/MiscData/ArticleCard"
import { MiscHeader } from "@/components/Home/MiscData/MiscHeader"

export const MiscData = () => {
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
          />
          <ArticleCard title={<span>ความสำคัญของ ส.ว.</span>} date="24 เม.ย. 66" />
          <ArticleCard
            title={
              <span>
                ส.ส. เขต vs
                <br />
                ส.ส. บัญชีรายชื่อ
              </span>
            }
            date="24 เม.ย. 66"
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
          />
          <ArticleCard
            title={
              <span>
                รวมโพล
                <br />
                จากทุกสำนัก
              </span>
            }
            date="24 เม.ย. 66"
          />
        </div>
        <LinkButton link="/data" text={"ดูข้อมูลทั้งหมด"} />
      </div>
    </section>
  )
}
