import { BlogHeading } from "@/components/Blog/BlogHeading"
import { BlogImage } from "@/components/Blog/BlogImage"
import { generateMetaData } from "@/utils/generateMetaData"

const metadata = generateMetaData("สส.เขต vs สส.บัญชีรายชื่อ", "สส.เขต vs สส.บัญชีรายชื่อ", "/blog/mps")
export { metadata }

const Page = () => {
  return (
    <div className="mx-auto w-full max-w-[752px] py-16">
      <BlogHeading namespace={"mps"} title={"สส.เขต vs สส.บัญชีรายชื่อ"} />
      <BlogImage namespace={"mps"} index={1} description={"สส.เขต vs สส.บัญชีรายชื่อ"} />
      <p className="mb-4 mt-8 px-4 font-light">
        รัฐธรรมนูญ 2560 กำหนดให้ สส. ในสภามีทั้งหมด 500 คน แบ่งเป็น สส. แบบแบ่งเขตเลือกตั้งทั่วประเทศ 400 คน และ สส.
        บัญชีรายชื่อ 100 คน
        <br />
        <br />
        <span className="font-medium">สส. แบบแบ่งเขตเลือกตั้ง</span> คือ
        มาจากการเลือกของประชาชนในพื้นที่หรือท้องถิ่นนั้นๆ จำนวน 400 เขต
        แบบแบ่งเขตต้องได้รับคะแนนจากบัตรเลือกตั้งสีเขียวสูงสุดในเขตนั้น และสูงกว่าคะแนนที่ไม่เลือกผู้ใดเลย
        <br />
        <br />
        <span className="font-medium">สส. แบบบัญชีรายชื่อ</span> คือ มาจากรายชื่อที่พรรคการเมืองกำหนด
        โดยแต่ละพรรคจะได้จำนวน สส. แบบบัญชีรายชื่อ ตามสัดส่วนที่แต่ละพรรคได้รับจากบัตรเลือกตั้งสีชมพู นั่นคือ
        ตามเปอร์เซ็นต์ของคะแนนที่ได้
        <br />
        <br />
        <span className="text-sm text-gray-500">
          อ้างอิง:{" "}
          <a
            href="https://www.senate.go.th/assets/portals/186/fileups/336/files/สรุปหน้าที่และอำนาจ%20สว.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            senate.go.th
          </a>
        </span>
      </p>
      <BlogImage namespace={"mps"} index={2} description={"สัดส่วนจำนวน สส.เขต vs สส.บัญชีรายชื่อ"} />
    </div>
  )
}

export default Page
