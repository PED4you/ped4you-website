import { BlogHeading } from "@/components/Blog/BlogHeading"
import { BlogImage } from "@/components/Blog/BlogImage"
import { generateMetaData } from "@/utils/generateMetaData"

const metadata = generateMetaData("ประชามติ?", "วันที่อำนาจการตัดสินใจสูงสุดกลับมาอยู่ในมือประชาชน", "/blog/referendum")
export { metadata }

const Page = () => {
  return (
    <div className="mx-auto w-full max-w-[752px] py-16">
      <BlogHeading namespace={"referendum"} title={"ประชามติ?"} />
      <BlogImage namespace={"referendum"} index={1} description={"ประชามติ"} />
      <p className="mb-4 mt-8 px-4 font-light">
        <span className="font-medium">วันที่อำนาจการตัดสินใจสูงสุดกลับมาอยู่ในมือประชาชนอย่างแท้จริง</span>
        <br />
        <br />
        นอกจากการเลือกตั้ง สส. แบ่งเขต และ สส. บัญชีรายชื่อ แล้ว การเลือกตั้งปี 2569
        ยังเปิดโอกาสให้ประชาชนมีส่วนร่วมทางการเมืองเพิ่มขึ้นอีกหนึ่งรูปแบบ คือ การลงคะแนนเสียงใน
        &ldquo;ประชามติ&rdquo; ซึ่งเป็นกลไกสำคัญในการสะท้อนเจตจำนงของประชาชนต่อประเด็นเชิงนโยบายและโครงสร้างทางการเมืองของประเทศโดยตรง
        <br />
        <br />
        <span className="font-medium text-lg">ประชา + มติ</span>
        <br />
        <br />
        ประชา → ประชาชน
        <br />
        มติ → ความคิดเห็น
        <br />
        <br />
        (น.) การขอความเห็นชอบจากประชาชนผู้มีสิทธิเลือกตั้ง ในเรื่องที่อาจกระทบถึงประโยชน์ของประเทศ หรือประชาชน
        โดยวิธีการให้ออกเสียงลงมติโดยตรง ไม่ต้องผ่าน สส. หรือ สว.
        <br />
        <br />
        <span className="font-medium">คำถามประชามติ:</span>
        <br />
        &ldquo;ท่านเห็นชอบว่าสมควรมีรัฐธรรมนูญฉบับใหม่หรือไม่&rdquo;
        <br />
        <br />
        <span className="font-medium">หากเลือก &ldquo;เห็นชอบ&rdquo;</span>
        <br />
        → เพิ่มบทบัญญัติว่าด้วยการจัดทำรัฐธรรมนูญใหม่ (หมวด 15/1)
        <br />
        → ลงประชามติครั้งที่ 2
        <br />
        → จัดทำรัฐธรรมนูญฉบับใหม่
        <br />
        → ลงประชามติครั้งที่ 3 เพื่อให้ความเห็นชอบขั้นสุดท้าย
        <br />
        <br />
        <span className="font-medium">หากเลือก &ldquo;ไม่เห็นชอบ&rdquo;</span>
        <br />
        → ใช้รัฐธรรมนูญ พ.ศ. 2560 ต่อไป
        <br />
        <br />
        <span className="font-medium">หากเลือก &ldquo;ไม่แสดงความเห็น&rdquo;</span>
        <br />
        → มาใช้สิทธิ แต่ไม่แสดงความเห็นต่อข้อเสนอใด
        <br />
        <br />
        <span className="font-medium text-lg">ทำไมถึงประชามติรัฐธรรมนูญฉบับใหม่ ?</span>
        <br />
        <br />
        รัฐธรรมนูญ 2560 ที่ใช้กันอยู่ มีบทบัญญัติหลายข้อที่ถูกวิจารณ์อย่างกว้างขวาง เช่น
        <br />
        - ประเด็นหน้าที่และอำนาจของวุฒิสภา (สว.) ซึ่งไม่ได้มาจากการเลือกโดยตรงของประชาชน
        แต่กลับมีบทบาทและอำนาจในการกำหนดทิศทางการเมืองไทย
        <br />
        - ประเด็นที่รัฐธรรมนูญฉบับนี้ร่างขึ้นภายใต้อิทธิพล คสช.
        <br />
        <br />
        <span className="rounded bg-PED-yellow px-2 py-1 font-medium text-PED-purple">Fun Fact:</span> มีการเสนอให้แก้รัฐธรรมนูญรายมาตรามาแล้วถึง 26 ครั้ง แต่ในจำนวนนั้น 25 ครั้งถูกปัดตก
        <br />
        <br />
        การลงประชามติในครั้งนี้ จึงเป็น <span className="font-medium">โอกาส</span>{" "}
        สำคัญในการสร้างความเปลี่ยนแปลงอย่างแท้จริง
        <br />
        <br />
        <span className="text-sm text-gray-500">
          ที่มา: iLaw Handbook หน้า 14 (2026-GElection-Handbook-content.pdf)
        </span>
      </p>
    </div>
  )
}

export default Page
