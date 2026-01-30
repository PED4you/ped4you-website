import { InfoTemplate } from "@/components/Info/InfoTemplate"
import { generateMetaData } from "@/utils/generateMetaData"

const metadata = generateMetaData("การลงคะแนน?", "ข้อควรรู้ก่อนลงคะแนน", "/info/voting")
export { metadata }

const Page = () => {
  const { Bold, Highlight } = InfoTemplate
  return (
    <InfoTemplate namespace={"voting"} title={"การลงคะแนน?"} primeImgDescription={"ข้อควรรู้ก่อนลงคะแนน"}>
      <Bold>ข้อควรรู้ก่อนลงคะแนน</Bold>
      <br />
      <br />
      1. ให้ทำเครื่องหมาย <Bold>กากบาท</Bold> ลงในช่องที่กำหนด เพียง <Bold>1 ช่อง</Bold>เท่านั้น
      <br />
      กากบาทวัดจากอะไร: ต้องเป็นเครื่องขีดสองเส้น และมี 1 จุดตัด
      <br />
      <br />
      2. ห้ามทำเครื่องหมายอื่นหรือเขียนข้อความอื่นนอกจาก <Bold>กากบาท</Bold> ลงบนบัตรเลือกตั้ง
      <br />
      <br />
      <Bold>ปากกาที่สามารถใช้ได้</Bold>
      <br />
      ใช้ปากกา<Highlight>สีใดก็ได้</Highlight> ไม่นับว่าเป็นบัตรเสีย (ที่หน่วยเลือกตั้งส่วนมากจะมีปากกาให้
      แต่พกไปเองดีที่สุด)
    </InfoTemplate>
  )
}

export default Page
