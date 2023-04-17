import {Button} from "@/components/common/Home/Button"
import {SectionWithDivider} from "@/components/common/Home/SectionWithDivider"
import {DuckSimulator} from "@/components/Home/Simulator/DuckSimulator"
import {SimulatorHeading} from "@/components/Home/Simulator/SimulatorHeading"

export const Simulator = () => {
  return <SectionWithDivider>
    <div className="flex items-center justify-center space-x-16 py-20">
      <div>
        <SimulatorHeading/>
        <p className="text-sub-heading mt-8">
          ลองเลือกตั้งตามกติกาใหม่<br/>
          ก่อนไปกาจริง
        </p>
        <p className="text-tagline mt-2">
          จำลองขั้นตอนการเลือกตั้งตามกติกาใหม่ทุกขั้นตอน<br/>
          ตั้งแต่ตรวจสอบรายชื่อ กาบัตร<br/>
          จนถึงหย่อนบัตรลงกล่อง<br/>
          แถมรู้ผลด้วยว่ากาให้ใครไปบ้าง<br/>
        </p>
        <Button text={"ลองเลือกตั้ง"}/>
      </div>
      <DuckSimulator/>
    </div>
  </SectionWithDivider>
}
