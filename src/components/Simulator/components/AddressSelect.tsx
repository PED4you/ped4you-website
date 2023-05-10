import { useEffect, useMemo, useState } from "react"

import { Field } from "formik"

import ElectionData from "@/data/data_new.json"

const ProvinceData = ElectionData.provinces

export default function AddressSelect({
  selectedProvince,
  selectedDistrict,
  selectedSubdistrict,
  setFieldValue,
}: {
  selectedProvince: string
  selectedDistrict: string
  selectedSubdistrict: string
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
}) {
  const provinces = useMemo(() => ProvinceData, [])
  const districts = useMemo(
    () => ProvinceData.find((province) => province.name === selectedProvince)?.districts || [],
    [selectedProvince]
  )
  const subdistricts = useMemo(() => {
    const newDistricts = ProvinceData.find((province) => province.name === selectedProvince)?.districts
    if (newDistricts)
      return (
        newDistricts?.find((district) => district.name === selectedDistrict)?.subdistricts ||
        newDistricts[0].subdistricts
      )
    else return []
  }, [selectedDistrict, selectedProvince])

  useEffect(() => {
    if (!districts.find((d) => d.name === selectedDistrict)) setFieldValue("district", districts?.[0].name)
    if (!subdistricts.find((s) => s.name === selectedSubdistrict)) setFieldValue("subdistrict", subdistricts?.[0].name)
  }, [selectedDistrict, selectedProvince, selectedSubdistrict, districts, subdistricts, setFieldValue])

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="address" className="text-lg font-medium text-PED-purple">
        ที่อยู่ทะเบียนบ้าน
      </label>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <Field
            component="select"
            placeholder="เลือกจังหวัด"
            id="province"
            name="province"
            className="w-full rounded-md border border-r-[0.75rem] border-PED-yellow bg-PED-yellow px-6 py-3 text-base font-normal text-PED-purple-secondary placeholder:text-PED-purple-secondary/50 focus:outline-none focus:ring-2 focus:ring-PED-green"
          >
            {provinces.map((province) => (
              <option key={province.name} value={province.name}>
                {province.name}
              </option>
            ))}
          </Field>
        </div>

        <div>
          <Field
            component="select"
            placeholder="เลือกเขต / อำเภอ"
            id="district"
            name="district"
            className="w-full rounded-md border border-r-[0.75rem] border-PED-yellow bg-PED-yellow px-6 py-3 text-base font-normal text-PED-purple-secondary placeholder:text-PED-purple-secondary/50 focus:outline-none focus:ring-2 focus:ring-PED-green"
          >
            {districts?.map((district) => (
              <option key={district.name} value={district.name}>
                {district.name}
              </option>
            ))}
          </Field>
        </div>

        <div>
          <Field
            component="select"
            placeholder="เลือกแขวง / ตำบล"
            id="subdistrict"
            name="subdistrict"
            className="w-full rounded-md border border-r-[0.75rem] border-PED-yellow bg-PED-yellow px-6 py-3 text-base font-normal text-PED-purple-secondary placeholder:text-PED-purple-secondary/50 focus:outline-none focus:ring-2 focus:ring-PED-green"
          >
            {subdistricts?.map((subdistrict) => (
              <option key={subdistrict.name} value={subdistrict.name}>
                {subdistrict.name}
              </option>
            ))}
          </Field>
        </div>
      </div>
    </div>
  )
}
