import { UserData } from "./PageProvider"

export const MockUser: UserData = {
  name: "จำลอง เลือกตั้ง",
  title: "นาย",
  birthdate: "2548-05-14",
  province: "กรุงเทพมหานคร",
  district: "คลองเตย",
  subdistrict: "คลองตัน",
  votingDistrict: {
    id: "กรุงเทพมหานคร.04",
    province: "กรุงเทพมหานคร",
    code: "4",
    districts: [
      {
        name: "คลองตัน",
        votingDistrict: "กรุงเทพมหานคร.04",
      },
      {
        name: "คลองเตย",
        votingDistrict: "กรุงเทพมหานคร.04",
      },
      {
        name: "พระโขนง",
        votingDistrict: "กรุงเทพมหานคร.04",
      },
      {
        name: "คลองตันเหนือ",
        votingDistrict: "กรุงเทพมหานคร.04",
      },
      {
        name: "คลองเตยเหนือ",
        votingDistrict: "กรุงเทพมหานคร.04",
      },
      {
        name: "พระโขนงเหนือ",
        votingDistrict: "กรุงเทพมหานคร.04",
      },
    ],
    candidates: [
      {
        no: "1",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นางกรณิศ งามสุคนธ์รัตนา",
        party: "ภูมิใจไทย",
      },
      {
        no: "2",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นายภัณฑิล น่วมเจิม",
        party: "ก้าวไกล",
      },
      {
        no: "3",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นางสาวณัฐรมณ์ ลิ้นลา",
        party: "ไทยภักดี",
      },
      {
        no: "4",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นางสาวศรัณยภัคร สุนทรปิยะกุลพัศ",
        party: "ไทยสร้างไทย",
      },
      {
        no: "5",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นายพงศกร ขวัญเมือง",
        party: "ประชาธิปัตย์",
      },
      {
        no: "6",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นายเอกราช หวังนุช",
        party: "เพื่อชาติไทย",
      },
      {
        no: "7",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นายกษิติ กมลนาวิน",
        party: "เสรีรวมไทย",
      },
      {
        no: "8",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นายภูวกร ปรางภรพิทักษ์",
        party: "พลังประชารัฐ",
      },
      {
        no: "9",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นางสาวศณิศา จิรเสวีนุประพันธ์",
        party: "เพื่อชาติ",
      },
      {
        no: "10",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นายเขตรัฐ เหล่าธรรมทัศน์",
        party: "รวมไทยสร้างชาติ",
      },
      {
        no: "11",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นายนวธันย์ ธวัชวงศ์เดชากุล",
        party: "เพื่อไทย",
      },
      {
        no: "12",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นายปรินต์ ทองปุสสะ",
        party: "ชาติพัฒนากล้า",
      },
      {
        no: "13",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นายสัญชัย สไพพงศ์",
        party: "ประชากรไทย",
      },
      {
        no: "14",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นายกาศประกาศสิริ เจริญพระสิริ",
        party: "ประชาไทย",
      },
      {
        no: "15",
        electionType: "ส.ส.เขต",
        voteingDistrict: "กรุงเทพมหานคร.04",
        candidate: "นายอิ่มหรอน ทิ้งผอม",
        party: "คลองไทย",
      },
    ],
  },
}

export const BaseUser: UserData = {
  name: "",
  title: "",
  birthdate: "",
  province: "",
  district: "",
  subdistrict: "",
  votingDistrict: {
    id: "",
    code: "",
    province: "",
    candidates: [],
    districts: [],
  },
}
