import {Button} from "@/components/common/Home/Button"
import {ArticleCard} from "@/components/Home/MiscData/ArticleCard"
import {MiscHeader} from "@/components/Home/MiscData/MiscHeader"

export const MiscData = () => {
  return <section>
    <div className="flex flex-col items-center py-20">
      <MiscHeader/>
      <h2 className="text-tagline mt-2 text-xl">อ่านง่าย ย่อยง่าย สำหรับทุกคน</h2>

      <div className="my-12 flex w-full max-w-4xl flex-wrap items-center justify-center">
        <ArticleCard title={<span>การเลือก<br/>นายกรัฐมนตรี</span>} date="24 เม.ย. 66"/>
        <ArticleCard title={<span>ความสำคัญของ ส.ว.</span>} date="24 เม.ย. 66"/>
        <ArticleCard title={<span>ส.ส. เขต vs<br/>ส.ส. บัญชีรายชื่อ</span>} date="24 เม.ย. 66"/>
        <ArticleCard title={<span>คำศัพท์ที่น่าสนใจ<br/>เลือกตั้ง 66</span>} date="24 เม.ย. 66"/>
        <ArticleCard title={<span>บทบาทนอกคูหา<br/>ของประชาชน<br/>ในการเลือกตั้ง</span>} date="24 เม.ย. 66"/>
        <ArticleCard title={<span>รวมโพล<br/>จากทุกสำนัก</span>} date="24 เม.ย. 66"/>
      </div>
      <Button text={"ดูข้อมูลทั้งหมด"}/>
    </div>
  </section>
}