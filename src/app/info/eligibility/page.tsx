import { InfoTemplate } from "@/components/Info/InfoTemplate"
import { generateMetaData } from "@/utils/generateMetaData"

const metadata = generateMetaData("ใครเลือกตั้งได้บ้าง ?", "ใครเลือกตั้งได้บ้าง ?", "/info/eligibility")
export { metadata }

const Eligibility = () => {
  return (
    <InfoTemplate
      namespace={"eligibility"}
      title={"ใครเลือกตั้งได้บ้าง ?"}
      primeImgDescription={"ใครเลือกตั้งได้บ้าง ?"}
    >
      <InfoTemplate.Bold>คุณสมบัติผู้มีสิทธิ์เลือกตั้ง</InfoTemplate.Bold>
      <br />
      <ol>
        <li>
          1. <InfoTemplate.Highlight>อายุไม่ต่ำกว่า 18 ปีในวันเลือกตั้ง</InfoTemplate.Highlight> (คนที่เกิดวันที่ 14
          พฤษภาคม 2548 และก่อนหน้านั้น มีสิทธิ์เลือกตั้ง)
        </li>
        <li>2. สัญชาติไทย หรือถ้าแปลงสัญชาติ ต้องได้สัญชาติไทยมาแล้วไม่ต่ำกว่า 5 ปี</li>
        <li>3. มีชื่ออยู่ในทะเบียนบ้านในเขตเลือกตั้งมาไม่น้อยกว่า 90 วัน นับถึงวันเลือกตั้ง</li>
      </ol>
      <br />
      <InfoTemplate.Bold>กกต. จะมีจดหมายส่งไปยังบ้านที่มีผู้มีสิทธิ์เลือกตั้ง</InfoTemplate.Bold>
      <br />
      ผู้มีสิทธิ์เลือกตั้ง สามารถตรวจสอบชื่อ และหน่วยออกเสียงที่ตัวเองต้องไปลงคะแนนได้ จากจดหมายที่จะส่งไปยังเจ้าบ้าน
      ซึ่งจะส่งไปถึงไม่เกิน 20 วัน ก่อนวันเลือกตั้ง หรือสามารถตรวจสอบรายชื่อได้ในเว็บไซต์{" "}
      <InfoTemplate.Link>https://boraservices.bora.dopa.go.th/election/enqelection/</InfoTemplate.Link>
    </InfoTemplate>
  )
}

export default Eligibility
