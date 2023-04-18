import {Button} from "@/components/common/Home/Button"
import {SectionWithDivider} from "@/components/common/Home/SectionWithDivider"
import {DuckSimulator} from "@/components/Home/Simulator/DuckSimulator"
import {SimulatorHeading} from "@/components/Home/Simulator/SimulatorHeading"

export const Simulator = () => {
  return <SectionWithDivider>
    <div className="relative mt-20 flex items-center justify-center py-20 md:mt-0 md:space-x-16">
      <div>
        <div className="-ml-4 md:ml-0">
          <SimulatorHeading/>
        </div>
        <p className="text-sub-heading mt-8">
          ลองเลือกตั้งตามกติกาใหม่<br/>
          ก่อนไปกาจริง
        </p>
        <p className="text-tagline mt-4 md:mt-2">
          จำลองขั้นตอนการเลือกตั้งตามกติกาใหม่ทุกขั้นตอน<br/>
          ตั้งแต่ตรวจสอบรายชื่อ กาบัตร<br/>
          จนถึงหย่อนบัตรลงกล่อง<br/>
          แถมรู้ผลด้วยว่ากาให้ใครไปบ้าง<br/>
        </p>
        <Button text={"ลองเลือกตั้ง"}/>
      </div>
      <div className="absolute -top-14 ml-32 w-[210px] md:relative md:top-[unset] md:w-[378px]">
        <DuckSimulator/>
      </div>
    </div>
  </SectionWithDivider>
}
