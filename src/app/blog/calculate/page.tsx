import { BlogHeading } from "@/components/Blog/BlogHeading"
import { BlogImage } from "@/components/Blog/BlogImage"
import { generateMetaData } from "@/utils/generateMetaData"

const metadata = generateMetaData("สูตรคำนวณ สส. บัญชีรายชื่อ", "สูตรคำนวณ สส. บัญชีรายชื่อ", "/blog/calculate")
export { metadata }

const Page = () => {
  return (
    <div className="mx-auto w-full max-w-[752px] py-16">
      <BlogHeading namespace={"calculate"} title={"สูตรคำนวณ สส. บัญชีรายชื่อ"} />
      <BlogImage namespace={"calculate"} index={1} description={"สูตรคำนวณ สส. บัญชีรายชื่อ"} />
      <p className="mb-4 mt-8 px-4 font-light">
        1. จำนวนคะแนนเสียงทั้งหมดที่ทุกพรรคได้รับ / 100 = คะแนนเฉลี่ยต่อ สส. บัญชีรายชื่อ 1 คน
        <br />
        <br />
        2. คะแนนที่แต่ละพรรคได้ / คะแนนเฉลี่ยต่อ สส. 1 คน = จำนวน สส. บัญชีรายชื่อที่พรรคการเมืองได้รับ (จำนวนเต็ม)
        <br />
        <br />
        3. ถ้ารวมทุกพรรคแล้วได้จำนวน สส. ไม่ครบ 100 คน ให้นำเศษคะแนนที่เหลือมาเรียง พรรคที่มีเศษมากที่สุด ได้เพิ่มก่อน 1
        คน เรียงลำดับจนครบ 100 คน
        <br />
        <br />
        4. กรณีเศษเท่ากัน ให้ กกต. จัดการจับสลากตามวันเวลาที่กำหนด
        <br />
        <br />
        <span className="font-medium">กล่าวโดยง่าย คือ ได้จำนวน สส. ตามเปอร์เซ็นต์ของพรรคที่ได้</span>
        <br />
        <br />
        นั่นคือ นำคะแนนรวมทุกพรรคมาหาร 100 ตัวเลขที่ได้นั้น คือจำนวนเสียงที่ต้องได้ ต่อ สส. บัญชีรายชื่อ 1 คน
        <br />
        จากนั้น นำคะแนนจากบัตรชมพูของแต่ละพรรค มาหารด้วยตัวเลขนั้น แต่ละพรรคจะได้ สส. ตามจำนวนเต็ม โดยไม่สนใจหลักทศนิยม
        <br />
        <br />
        หากมี สส. ที่ได้จากการคำนวณยังไม่ครบ 100 คน ให้นำทศนิยมมาเรียงจากมากไปน้อย จากนั้นเพิ่ม สส. ให้ครบ 100 คน
        โดยให้พรรคที่มีทศนิยมสูงได้ สส. เพิ่มก่อน เช่น ถ้าขาด สส. ไป 9 คน ให้พรรคที่หลักทศนิยมสูงสุด 9 พรรค ได้ สส.
        เพิ่มไปอีกพรรคละคน
        <br />
        <br />
        <span className="text-sm text-gray-500">
          อ้างอิง:{" "}
          <a
            href="https://www.thaipbs.or.th/news/content/501355?utm_source=election69_website&utm_medium=website&utm_campaign=election69"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            thaipbs.or.th
          </a>
        </span>
      </p>
      <BlogImage namespace={"calculate"} index={2} description={"ตัวอย่างการคำนวณ"} />
      <p className="mb-4 mt-8 px-4 font-light">
        <span className="font-medium">ตัวอย่างสถานการณ์</span>
        <br />
        <br />
        มีผู้มาใช้สิทธิเลือกตั้ง 15,000,000 คน
        <br />
        คะแนนเฉลี่ยต่อ สส. 1 คน = 15,000,000 / 100 = 150,000 เสียง (หมายความว่าทุก 150,000 เสียงจะได้ สส. บัญชีรายชื่อ 1
        คน)
        <br />
        <br />
        พรรค A ได้ สส. 43 คน
        <br />
        พรรค B ได้ สส. 27 คน
        <br />
        พรรค C ได้ สส. 19 คน
        <br />
        พรรค D ได้ สส. 6 คน
        <br />
        พรรค E ได้ สส. 1 คน
        <br />
        พรรค F ได้ สส. 1 คน
        <br />
        พรรค G ได้ สส. 0 คน
        <br />
        <br />
        *หลังจากคำนวณตามสูตรแล้ว ได้ สส. บัญชีรายชื่อ 97 คน ยังเหลือที่นั่งว่างอีก 3 ที่ ซึ่งจะนำคิดตามข้อ 3
        โดยการเรียงเลขทศนิยมของทุกพรรคจากมากไปน้อย
        <br />
        <br />
        <span className="font-medium">พรรค A xx.7333 ได้ สส. เพิ่ม รวมเป็น 44 คน</span>
        <br />
        พรรค B xx.3333
        <br />
        <span className="font-medium">พรรค C xx.6000 ได้ สส. เพิ่ม รวมเป็น 20 คน</span>
        <br />
        <span className="font-medium">พรรค D xx.6667 ได้ สส. เพิ่ม รวมเป็น 7 คน</span>
        <br />
        พรรค E xx.2000
        <br />
        พรรค F xx.0667
        <br />
        พรรค G xx.4000
        <br />
        <br />
        พรรคที่ได้คะแนนมากสุดตามลำดับจะได้ สส. เพิ่มพรรคละ 1 คนจนกว่าที่นั่งจะครบ 100 ที่นั่ง
        <br />
        <br />
        <span className="font-medium">สรุปจำนวน สส.</span>
        <br />
        พรรค A 44 คน
        <br />
        พรรค B 27 คน
        <br />
        พรรค C 20 คน
        <br />
        พรรค D 7 คน
        <br />
        พรรค E 1 คน
        <br />
        พรรค F 1 คน
        <br />
        พรรค G 0 คน
        <br />
        รวม 100 คน
      </p>
    </div>
  )
}

export default Page
