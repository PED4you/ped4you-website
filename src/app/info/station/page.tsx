import { InfoTemplate } from "@/components/Info/InfoTemplate"
import { generateMetaData } from "@/utils/generateMetaData"

const metaData = generateMetaData("หน่วยเลือกตั้ง ?", "หน่วยเลือกตั้ง ?", "/info/station")
export { metaData }

const Page = () => {
  const { Link } = InfoTemplate
  return (
    <InfoTemplate namespace={"station"} title={"หน่วยเลือกตั้ง ?"} primeImgDescription={"หน่วยเลือกตั้ง ?"}>
      สามารคเช็กหน่วยเลือกตั้งของคุณ (รวมถึงลำดับที่ในบัญชีผู้มีสิทธิ์เลือกตั้ง) ได้ที่{" "}
      <Link>https://boraservices.bora.dopa.go.th/election/enqelection/</Link>
    </InfoTemplate>
  )
}

export default Page
