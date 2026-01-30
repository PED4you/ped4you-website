import { InfoTemplate } from "@/components/Info/InfoTemplate"
import { generateMetaData } from "@/utils/generateMetaData"

const metadata = generateMetaData("ใบลงคะแนนเสียง?", "ใบลงคะแนนเสียงในคูหา วันที่ 8 กุมภาพันธ์ 2569", "/info/ballot")
export { metadata }

const BallotInfoPage = () => {
  const { Bold, Highlight } = InfoTemplate
  return (
    <InfoTemplate namespace={"ballot"} title={"ใบลงคะแนนเสียง?"} primeImgDescription={"ใบลงคะแนนเสียงในคูหา"}>
      ใบลงคะแนนเสียงในคูหา วันที่ 8 กุมภาพันธ์ 2569 มีทั้งหมด 2 ส่วน
      <br />
      <br />
      <Bold>ส่วนที่ 1: การเลือกตั้งทั่วไป</Bold>
      <br />
      บัตรเลือกตั้งมีทั้งหมด 2 ใบ ดังนี้
      <br />
      <br />
      <Bold>1. บัตรเลือกตั้ง สส. แบบแบ่งเขตเลือกตั้ง (ตามเขต)</Bold>
      <br />
      บนบัตรจะมีแค่หมายเลขเท่านั้น
      <br />
      <br />
      <Highlight>ข้อควรระวัง:</Highlight>
      <br />
      ไม่มีชื่อพรรค ไม่มีชื่อผู้สมัคร เพราะฉะนั้นก่อนเข้าคูหาต้องตรวจสอบและจำหมายเลขให้ดี
      <br />
      ดูดี ๆ หมายเลขผู้สมัครของพรรคเดียวกันแตกต่างกันไปตามเขตนะ !
      <br />
      <br />
      <Bold>2. บัตรเลือกตั้ง สส. แบบบัญชีรายชื่อ (ตามพรรค)</Bold>
      <br />
      บนบัตรจะมีหมายเลข สัญลักษณ์ประจำพรรค และชื่อพรรคการเมือง
      <br />
      ตรวจสอบรายชื่อพรรคการเมืองและหมายเลข:{" "}
      <a
        href="https://www.ect.go.th/web-upload/1xff0d34e409a13ef56eea54c52a291126/202601/m_laws/2054/9457/file_download/d50c8fd41334d8ff9f17c57f790c919f.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-PED-purple underline"
      >
        คลิกที่นี่
      </a>
      <br />
      <br />
      <Bold>ส่วนที่ 2: การลงประชามติ</Bold>
      <br />
      ถามคำถามเกี่ยวกับการแก้ไขรัฐธรรมนูญ
      <br />
      โดยคำถามมีอยู่ว่า &ldquo;ท่านเห็นชอบว่าสมควรมีรัฐธรรมนูญฉบับใหม่หรือไม่&rdquo;
      <br />
      <br />
      หาก อยากให้มีการจัดทำรัฐธรรมนูญใหม่ : ทำเครื่องหมายกากบาทในช่อง &ldquo;เห็นชอบ&rdquo;
      <br />
      หาก ไม่อยากให้มีการจัดทำรัฐธรรมนูญใหม่ : ทำเครื่องหมายกากบาทในช่อง &ldquo;ไม่เห็นชอบ&rdquo;
      <br />
      หาก ไม่ต้องการแสดงความคิดเห็น : ทำเครื่องหมายกากบาทในช่อง &ldquo;ไม่แสดงความคิดเห็น&rdquo;
      <br />
      <br />
      <span className="text-sm text-gray-500">
        อ้างอิง:{" "}
        <a
          href="https://www.ect.go.th/ect_th/th/db_119_ect_th_6/7656"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          ect.go.th
        </a>
      </span>
    </InfoTemplate>
  )
}

export default BallotInfoPage
