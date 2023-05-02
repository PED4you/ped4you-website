import { MiscData } from "@/components/Home/MiscData/MiscData"
import { generateMetaData } from "@/utils/generateMetaData"

const metaData = generateMetaData("สิ่งที่ควรรู้ก่อนเลือกตั้ง", "รู้ไว้ก่อนเข้าคูหา กาได้อย่างสบายใจ", "/blog")
export { metaData }

const Page = () => {
  return (
    <div>
      <MiscData hideButton={true} />
    </div>
  )
}

export default Page
