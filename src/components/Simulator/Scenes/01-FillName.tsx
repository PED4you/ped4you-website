import { StarIcon } from "@heroicons/react/24/solid"
import { Field, Form, Formik } from "formik"

import { Button } from "@/components/common/Home/Button"

import AddressSelect from "../components/AddressSelect"
import BirthDatePicker from "../components/BirthDatePicker"
import { usePage } from "../PageProvider"

export default function FillName() {
  const { setUserData, setPage } = usePage()

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-10">
      <div className="flex items-center gap-2">
        <StarIcon className="h-6 w-6 text-PED-orange" />
        <span className="text-xl font-medium text-PED-orange">ขั้นที่ 1</span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-PED-green-secondary">ตรวจสอบสิทธิ์เลือกตั้ง</h1>
        <p className="text-lg font-light text-PED-green">
          ข้อมูลที่กรอกไปจะใช้เพื่อการจำลองเลือกตั้งเท่านั้น จะไม่มีการเก็บข้อมูลส่วนตัวใด ๆ
        </p>
      </div>

      <Formik
        validate={(values) => {
          const errors: { name?: string } = {}

          if (values.name === "") {
            errors.name = "Required"
          }

          return errors
        }}
        initialValues={{
          name: "",
          title: "",
          birthdate: "",
          province: "กรุงเทพมหานคร",
          district: "คลองเตย",
          subdistrict: "คลองตัน",
        }}
        onSubmit={(values) => {
          setUserData(values)
          setPage("2")
        }}
      >
        {({
          values,
          errors,
          setFieldValue,
          /* and other goodies */
        }) => (
          <Form className="flex min-h-screen flex-col gap-4">
            {/* name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-lg font-medium text-PED-purple">
                ชื่อ-นามสกุล
              </label>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1">
                  <Field
                    component="select"
                    placeholder="คำนำหน้าชืื่อ"
                    id="title"
                    name="title"
                    className="w-full rounded-md border border-r-[0.75rem] border-PED-yellow bg-PED-yellow px-6 py-3 text-base font-normal text-PED-purple-secondary placeholder:text-PED-purple-secondary/50 focus:outline-none focus:ring-2 focus:ring-PED-green"
                  >
                    <option value="นาย">นาย</option>
                    <option value="นางสาว">นางสาว</option>
                    <option value="นาง">นาง</option>
                  </Field>
                </div>
                <div className="col-span-2">
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="จำลอง เลือกตั้ง"
                    className="w-full rounded-md bg-PED-yellow px-4 py-3 text-base font-normal text-PED-purple-secondary placeholder:text-PED-purple-secondary/50 focus:outline-none focus:ring-2 focus:ring-PED-green"
                  />
                </div>
              </div>

              {errors.name && <span className="text-PED-orange">*จำเป็นต้องกรอกชื่อ</span>}
            </div>

            {/* birthdate */}
            <div className="flex flex-col gap-2">
              <label htmlFor="bd_day" className="text-lg font-medium text-PED-purple">
                วันเกิด
              </label>

              <BirthDatePicker
                onChange={(newDate) => {
                  setFieldValue("birthdate", newDate)
                }}
              />
            </div>

            {/* address */}
            <AddressSelect
              selectedDistrict={values.district}
              selectedProvince={values.province}
              selectedSubdistrict={values.subdistrict}
            />

            <Button text="ตรวจสอบสิทธิ์" type="submit" />
          </Form>
        )}
      </Formik>
    </section>
  )
}
