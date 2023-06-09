import { BlogHeading } from "@/components/Blog/BlogHeading"
import { BlogImage } from "@/components/Blog/BlogImage"
import { generateMetaData } from "@/utils/generateMetaData"

const metadata = generateMetaData("สูตรคำนวณ ส.ส. บัญชีรายชื่อ", "สูตรคำนวณ ส.ส. บัญชีรายชื่อ", "/blog/calculate")
export { metadata }

const Page = () => {
  return (
    <div className="mx-auto w-full max-w-[752px] py-16">
      <BlogHeading namespace={"calculate"} title={"สูตรคำนวณ ส.ส. บัญชีรายชื่อ"} />
      <BlogImage namespace={"calculate"} index={1} description={"สูตรคำนวณ ส.ส. บัญชีรายชื่อ"} />
      <p className="mt-8 mb-4 px-4 font-light">
        1. คะแนนรวมทุกพรรค / 100 = คะแนนเฉลี่ยต่อ ส.ส. 1 คน
        <br />
        2. คะแนนแต่ละพรรค / คะแนนเฉลี่ยต่อ ส.ส. 1 คน = จำนวน ส.ส. บัญชีรายชื่อ (จำนวนเต็ม)
        <br />
        3. ถ้าพรรคการเมืองได้ ส.ส. รวมกันไม่ครบ 100 คน ให้เรียงเศษคะแนนของทุกพรรค พรรคที่มีเศษมากที่สุดได้เพิ่ม 1 คน
        เรียงลำดับจนครบ 100 คน
        <br />
        <br />
        <span className="font-medium">กล่าวโดยง่าย คือ ได้จำนวน ส.ส. ตามเปอร์เซ็นต์ของพรรคที่ได้</span>
        <br />
        <br />
        นั่นคือ นำคะแนนรวมทุกพรรคมาหาร 100 ตัวเลขที่ได้นั้น คือจำนวนเสียงที่ต้องได้ ต่อ ส.ส. บัญชีรายชื่อ 1 คน
        <br />
        จากนั้น นำคะแนนจากบัตรเขียวของแต่ละพรรค มาหารด้วยตัวเลขนั้น แต่ละพรรคจะได้ ส.ส. ตามจำนวนเต็ม
        โดยไม่สนใจหลักทศนิยม
        <br />
        <br />
        หากมี ส.ส. ที่ได้จากการคำนวณยังไม่ครบ 100 คน ให้นำทศนิยมมาเรียงจากมากไปน้อย จากนั้นเพิ่ม ส.ส. ให้ครบ 100 คน
        โดยให้พรรคที่มีทศนิยมสูงได้ ส.ส. เพิ่มก่อน เช่น ถ้าขาด ส.ส. ไป 9 คน ให้พรรคที่หลักทศนิยมสูงสุด 9 พรรค ได้ ส.ส.
        เพิ่มไปอีกพรรคละคน
      </p>
      <BlogImage namespace={"calculate"} index={2} description={"ตัวอย่างการคำนวณ"} />
      <p className="mt-8 mb-4 px-4 font-light">
        <span className="font-medium">ตัวอย่างสถานการณ์</span>
        <br />
        <br />
        มีผู้มาใช้สิทธิเลือกตั้ง 15,000,000 คน
        <br />
        คะแนนเฉลี่ยต่อ ส.ส. 1 คน = 15,000,000 / 100 = 150,000 เสียง (หมายความว่าทุก 150,000 เสียงจะได้ ส.ส. บัญชีรายชื่อ
        1 คน)
        <br />
        <br />
        พรรค A ได้ ส.ส. 43 คน
        <br />
        พรรค B ได้ ส.ส. 27 คน
        <br />
        พรรค C ได้ ส.ส. 19 คน
        <br />
        พรรค D ได้ ส.ส. 6 คน
        <br />
        พรรค E ได้ ส.ส. 1 คน
        <br />
        พรรค F ได้ ส.ส. 1 คน
        <br />
        พรรค G ได้ ส.ส. 0 คน
        <br />
        <br />
        *หลังจากคำนวณตามสูตรแล้ว ได้ ส.ส. บัญชีรายชื่อ 97 คน ยังเหลือที่นั่งว่างอีก 3 ที่ ซึ่งจะนำคิดตามข้อ 3
        โดยการเรียงเลขทศนิยมของทุกพรรคจากมากไปน้อย
        <br />
        <br />
        <span className="font-medium">พรรค A xx.7333 ได้ ส.ส. เพิ่ม รวมเป็น 44 คน</span>
        <br />
        พรรค B xx.3333
        <br />
        <span className="font-medium">พรรค C xx.6000 ได้ ส.ส. เพิ่ม รวมเป็น 20 คน</span>
        <br />
        <span className="font-medium">
          พรรค D xx.6667 ได้ ส.ส. เพิ่ม รวมเป็น 7 คน
          <br />
        </span>
        พรรค E xx.2000
        <br />
        พรรค F xx.0667
        <br />
        พรรค G xx.4000
        <br />
        <br />
        พรรคที่ได้คะแนนมากสุดตามลำดับจะได้ ส.ส. เพิ่มพรรคละ 1 คนจนกว่าที่นั่งจะครบ 100 ที่นั่ง
        <br />
        <br />
        <span className="font-medium">สรุปจำนวน ส.ส.</span>
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
