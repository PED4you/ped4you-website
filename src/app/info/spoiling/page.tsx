import {InfoTemplate} from "@/components/Info/InfoTemplate"

const Page = () => {
  const {Bold, Highlight} = InfoTemplate
  return <InfoTemplate namespace={"spoiling"} title={"บัตรดี / บัตรเสีย ?"} primeImgDescription={"บัตรดี / บัตรเสีย ?"}>
    <Bold>กายังไงไม่ให้บัตรเสีย</Bold>
    <br/><br/>
    (อ้างอิงตาม พรบ.ประกอบรัฐธรรมนูญว่าด้วยการเลือกตั้งสมาชิก
    ผู้แทนราษฏร พ.ศ. 2561 และ กกต. กำหนด)
    <br/><br/>
    สรุปได้คร่าว ๆ ว่า กากบาทที่ถูกต้อง ต้องเป็นเส้นสองเส้นที่ทับกัน <Highlight>ถ้าตั้งใจเขียนอะไรเพิ่ม
    นอกจากนั้น จะนับว่าเป็นบัตรเสีย</Highlight>
  </InfoTemplate>
}

export default Page