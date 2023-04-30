import {BlogHeading} from "@/components/Blog/BlogHeading"
import {BlogImage} from "@/components/Blog/BlogImage"

const Page = () => {
  return <div className="mx-auto w-full max-w-[752px] py-16">
    <BlogHeading namespace={"role"} title={"บทบาทนอกคูหาของประชาชนในการเลือกตั้ง"}/>
    <BlogImage namespace={"role"} index={1} description={"บทบาทนอกคูหาของประชาชนในการเลือกตั้ง"}/>
    <p className="mt-8 mb-4 px-4 font-light">
      <span className="font-medium">ก่อนเลือกตั้ง</span><br/>
      ควรศึกษานโยบาย และเจตนารมณ์ของแต่ละพรรค ผ่านการฟังปราศรัย หรือโต้วาที ร่วมรณรงค์ให้คนไปเลือกตั้ง และติดตามข่าวสารอย่างต่อเนื่อง
      <br/><br/>
      <span className="font-medium">ระหว่างเลือกตั้ง</span><br/>
      ควรจับตาดูการทำงานของทั้งข้าราชการและนักการเมือง เพื่อให้การเลือกตั้งโปร่งใส
      <br/><br/>
      <span className="font-medium">หลังการเลือกตั้ง</span><br/>
      ควรติดตามการทำงานของรัฐบาล ว่าสามารถส่งมอบนโยบายตามที่สัญญาได้หรือเปล่า</p>
  </div>
}

export default Page