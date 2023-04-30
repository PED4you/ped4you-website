import {BlogHeading} from "@/components/Blog/BlogHeading"
import {BlogImage} from "@/components/Blog/BlogImage"

const Page = () => {
  return <div className="mx-auto w-full max-w-[752px] py-16">
    <BlogHeading namespace={"senator"} title={"ความสำคัญของ ส.ว."}/>
    <BlogImage namespace={"senator"} index={1} description={"ความสำคัญของ ส.ว."}/>
    <p className="mt-8 mb-4 font-light">
      หน้าที่ของวุฒิสภา ในทางหลักการ คือ การตรวจสอบและกลั่นกรองกฎหมายให้รอบด้านขึ้น เพราะวุฒิสภากำหนดให้มีตัวแทนจากกลุ่มผู้มีส่วนได้เสียจากภาคส่วนต่าง ๆ ของสังคม เช่น เกษตร วิทยาศาสตร์ ชาติพันธุ์ ในขณะที่การเลือก ส.ส. ไม่ได้มีข้อกำหนดดังกล่าว
      <br/><br/>
      อย่างไรก็ตาม บทเฉพาะกาลกำหนดให้ ส.ว. ซึ่งไม่ได้มาจากการเลือกตั้งสามารถเลือกนายกได้ด้วย ดังนั้น หน้าที่ของ ส.ว. ในปัจจุบัน คือ การสืบทอดอำนาจเผด็จการ โดยการให้อำนาจต่อรองกับพรรคฝั่งเผด็จการมากขึ้น</p>
  </div>
}

export default Page