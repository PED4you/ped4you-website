import { InfoTemplate } from "@/components/Info/InfoTemplate"

const Page = () => {
  const { Bold, Link, Highlight } = InfoTemplate
  return (
    <InfoTemplate namespace={"voting"} title={"การลงคะแนน ?"} primeImgDescription={"วิธีการลงคะแนน"}>
      1. ให้ทำเครื่องหมาย <Bold>กากบาท</Bold> ลงในช่องที่กำหนด เพียง <Bold>1 ช่อง</Bold>เท่านั้น <br />
      2. ห้ามทำเครื่องหมายอื่นหรือเขียนข้อความอื่นนอกจาก กากบาท ลงบนบัตรเลือกตั้ง
      <br />
      <br />
      <Bold>ปากกาที่ใช้</Bold>
      <br />
      ใช้ปากกา<Highlight>สีใดก็ได้</Highlight> ไม่นับว่าเป็นบัตรเสีย (ที่หน่วยเลือกตั้งส่วนมากจะมีปากกาให้
      แต่พกไปเองดีที่สุด)
    </InfoTemplate>
  )
}

export default Page
