import { InfoTemplate } from "@/components/Info/InfoTemplate"
import { generateMetaData } from "@/utils/generateMetaData"

const metadata = generateMetaData(
  "สำหรับผู้สูงอายุ ทุพพลภาพ พิการ",
  "สำหรับผู้สูงอายุ ทุพพลภาพ พิการ",
  "/info/services"
)
export { metadata }

const Page = () => {
  const [B, H] = [InfoTemplate.Bold, InfoTemplate.Highlight]

  return (
    <InfoTemplate
      namespace={"services"}
      title={"สำหรับผู้สูงอายุ ทุพพลภาพ พิการ"}
      primeImgDescription={"สำหรับผู้สูงอายุ ทุพพลภาพ พิการ"}
    >
      ผู้มีสิทธิเลือกตั้งที่เป็นคนพิการหรือทุพพลภาพหรือผู้สูงอายุ และต้องการใช้สิทธิเลือกตั้ง ณ ที่เลือกตั้งกลาง
      จะต้องมีคุณสมบัติ ดังนี้
      <br />
      <ul className="list-inside list-disc pl-2">
        <li>เป็นผู้มีสิทธิเลือกตั้ง</li>
        <li>มีสัญชาติไทย (ถ้าแปลงสัญชาติ ต้องได้สัญชาติไทยมาแล้วไม่น้อยกว่า 5 ปี)</li>
        <li>อายุไม่ต่ำกว่า 18 ปีในวันเลือกตั้ง</li>
        <li>
          เป็นคนพิการหรือทุพพลภาพ หรือผู้สูงอายุ หรือเป็นผู้ดูแลคนพิการหรือทุพพลภาพหรือผู้สูงอายุ
          ที่ต้องการใช้สิทธิเลือกตั้ง ณ ที่เลือกตั้งกลางสำหรับคนพิการหรือทุพพลภาพ หรือผู้สูงอายุ
        </li>
      </ul>
      <br />
      <B>กกต. อำนวยความสะดวกแก่คนพิการหรือทุพพลภาพ หรือผู้สูงอายุอย่างไรบ้าง?</B>
      <br />
      มีการจัดให้มีการช่วยเหลือในการลงคะแนน และความช่วยเหลือนั้นอยู่ภายใต้การกำกับดูแลของกรรมการประจำหน่วยเลือกตั้ง
      โดยผ่านการยินยอมและต้องเป็นไปตามเจตนาของผู้ลงคะแนนเสียง ซึ่ง
      <H>ผู้ที่ช่วยทำเครื่องหมายจะเป็นญาติ บุคคลที่ไว้วางใจ หรือกรรมการประจำหน่วยเลือกตั้งก็ได้</H>{" "}
      และจะต้องบันทึกลงในรายงานเหตุการณ์ประจำที่เลือกตั้ง
      <br />
      <br />
      มีการจัดวางคูหาห่างจากคูหาอื่นอย่างน้อย 1.50 เมตร โต๊ะวางคูหาลงคะแนนมีความสูงไม่เกิน 0.75 เมตร
      และจัดเก้าอี้ไว้ด้วย
      <br />
      <br />
      มีการจัดการเพื่ออำนวยความสะดวกให้แก่ผู้มาใช้สิทธิ์ ณ สถานที่เลือกตั้งกลาง ดังนี้
      <ol className="list-inside list-decimal pl-2">
        <li>มีการกำหนดสีหรือเครื่องหมายแสดงหีบบัตรเลือกตั้งแต่ละใบให้แตกต่างกัน</li>
        <li>มีการจัดให้มีการสื่อสารและอธิบายขั้นตอนการเลือกตั้งที่ชัดเจน</li>
      </ol>
    </InfoTemplate>
  )
}

export default Page
