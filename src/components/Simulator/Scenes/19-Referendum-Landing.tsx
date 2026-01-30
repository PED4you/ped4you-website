
import { Button } from "../../common/Home/Button"
import SimulatorHeading from "../Heading/SimulatorHeading"
import { usePage } from "../PageProvider"

export default function ReferendumLanding() {
  const { setPage } = usePage()

  return (
    <section className="flex flex-col">
      <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden p-10 sm:mt-4">
        <SimulatorHeading className="h-32 sm:h-36" />

        <h2 className="mt-4 text-center text-2xl font-medium text-PED-purple">
          ขั้นตอนที่ 2: ประชามติ
        </h2>

        <p className="text-center text-lg font-light text-PED-purple-secondary">
          ต่อไปเราจะมาลองจำลองการลงประชามติกัน !
        </p>

        <p className="text-center text-sm font-light text-PED-orange">
          *ข้อมูลที่กรอกทั้งหมดจะใช้เพื่อการจำลองเท่านั้น จะไม่มีการเก็บข้อมูลส่วนตัวใด ๆ
        </p>

        <Button text={"เริ่มจำลองประชามติ"} onClick={() => setPage("20")} />
      </div>
    </section>
  )
}
