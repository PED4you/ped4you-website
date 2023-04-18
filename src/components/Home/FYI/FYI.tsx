import {SectionWithDivider} from "@/components/common/Home/SectionWithDivider"
import {FYIHeading} from "@/components/Home/FYI/FYIHeading"
import {InfoCard} from "@/components/Home/FYI/InfoCard/InfoCard"

export const FYI = () => {
  return <SectionWithDivider>
    <div className="flex flex-col items-center py-20">
      <div className="-ml-8 flex flex-col items-start md:ml-0 md:items-center">
        <FYIHeading/>
        <h2 className="text-tagline mt-6 text-xl md:mt-2">รู้ไว้ก่อนเข้าคูหา กาได้อย่างสบายใจ</h2>
      </div>

      <div className="mt-12 flex max-w-4xl flex-wrap items-center justify-center">
        <InfoCard title="ใครเลือกตั้งได้บ้าง ?" isInverted isChecked/>
        <InfoCard title="หน่วยเลือกตั้ง ?" isChecked/>
        <InfoCard title="เซ็นชื่อ ?"/>
        <InfoCard title="บัตรเลือกตั้ง ?"/>
        <InfoCard title="การลงคะแนน ?"/>
        <InfoCard title="บัตรดี / บัตรเสีย ?"/>
        <InfoCard title="การนับคะแนน"/>
        <InfoCard title="ข้อห้ามที่ควรรู้"/>
        <InfoCard title={
          <div className="-mt-2 pb-1 text-center text-[13px] md:-mt-1 md:pb-0 md:text-lg">
            <h2>สำหรับผู้สูงอายุ</h2>
            <h2 className="leading-[6px] md:leading-[8px]">ทุพพลภาพ พิการ</h2>
          </div>
        }/>
      </div>
    </div>
  </SectionWithDivider>
}