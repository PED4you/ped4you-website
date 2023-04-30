import { BlogHeading } from "@/components/Blog/BlogHeading"
import { BlogImage } from "@/components/Blog/BlogImage"

const Page = () => {
  return (
    <div className="mx-auto w-full max-w-[752px] py-16">
      <BlogHeading namespace={"mps"} title={"ส.ส. แบ่งเขต vs ส.ส. บัญชีรายชื่อ"} />
      <BlogImage namespace={"mps"} index={1} description={"ส.ส. แบ่งเขต vs ส.ส. บัญชีรายชื่อ"} />
      <p className="mt-8 mb-4 px-4 font-light">
        ส.ส. ทั้งหมดมีจำนวน 500 คน แบ่งเป็น ส.ส. แบบแบ่งเขตเลือกตั้งจากทั่วประเทศ 400 คน และ ส.ส. แบบบัญชีรายชื่อ 100 คน
        <br />
        <br />
        <span className="font-medium">ส.ส. แบบแบ่งเขตเลือกตั้ง</span> มาจากการแบ่งพื้นที่ทั่วประเทศเป็น 400 เขต ส.ส.
        แบบแบ่งเขตต้องได้รับคะแนนจากบัตรเลือกตั้งสีม่วงสูงสุดในเขตนั้น และสูงกว่าคะแนนที่ไม่เลือกผู้ใด
        <br />
        <br />
        <span className="font-medium">ส.ส. แบบบัญชีรายชื่อ</span> มาจากรายชื่อที่พรรคการเมืองกำหนด
        โดยแต่ละพรรคจะได้จำนวน ส.ส. แบบบัญชีรายชื่อ ตามสัดส่วนที่แต่ละพรรคได้รับจากบัตรเลือกตั้งสีเขียว นั่นคือ
        ตามเปอร์เซ็นต์ของคะแนนที่ได้
      </p>
    </div>
  )
}

export default Page
