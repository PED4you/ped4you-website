import { InfoTemplate } from "@/components/Info/InfoTemplate"
import { generateMetaData } from "@/utils/generateMetaData"

const metadata = generateMetaData("บัตรเลือกตั้ง ?", "บัตรเลือกตั้ง 2 ใบ", "/info/ballot")
export { metadata }

const BallotInfoPage = () => {
  const { Bold, Highlight } = InfoTemplate
  return (
    <InfoTemplate namespace={"ballot"} title={"บัตรเลือกตั้ง ?"} primeImgDescription={"บัตรเลือกตั้ง 2 ใบ"}>
      บัตรเลือกตั้งมีทั้งหมด 2 ใบ ดังนี้
      <br />
      <br />
      <Bold>1. บัตรเลือกตั้ง ส.ส. แบบแบ่งเขตเลือกตั้ง (ตามเขต)</Bold>
      บนบัตรจะมีแค่หมายเลขเท่านั้น ไม่มีชื่อพรรค ไม่มีชื่อผู้สมัครเพราะฉะนั้นก่อนเข้าคูหาต้องตรวจสอบและจำหมายเลขให้ดี
      <br />
      <br />
      <Bold>2. บัตรเลือกตั้ง ส.ส. แบบบัญชีรายชื่อ (ตามพรรค)</Bold>
      <br />
      บนบัตรจะมีหมายเลข สัญลักษณ์ประจำพรรค และชื่อพรรคการเมือง
      <br />
      <br />
      <Highlight>ดูดี ๆ หมายเลขผู้สมัครของพรรคเดียวกันแตกต่างกันไปตามเขตนะ !</Highlight>
    </InfoTemplate>
  )
}

export default BallotInfoPage
