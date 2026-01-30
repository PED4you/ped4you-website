import { useState } from "react"

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import Datepicker from "tailwind-datepicker-react"

export default function BirthDatePicker({ onChange }: { onChange: (newDate: string) => void }) {
  const [show, setShow] = useState<boolean>(false)
  const handleChange = (selectedDate: Date) => {
    onChange(
      `${selectedDate.getFullYear() + 543}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(
        selectedDate.getDate()
      ).padStart(2, "0")}`
    )
  }
  const handleClose = (state: boolean) => {
    setShow(state)
  }

  return (
    <div className="relative w-full">
      <Datepicker
        options={{
          title: "เลือกวันเกิด",
          autoHide: true,
          todayBtn: false,
          clearBtn: false,
          maxDate: new Date("2030-01-01"),
          minDate: new Date("1950-01-01"),
          theme: {
            background: "bg-white",
            todayBtn: "",
            clearBtn: "",
            icons: "bg-PED-purple hover:bg-PED-purple-secondary",
            text: "text-PED-purple-secondary",
            disabledText: "text-gray-400",
            input:
              "bg-PED-yellow text-PED-purple-secondary placeholder:text-PED-purple-secondary/50 focus:ring-2 focus:ring-PED-green border-0",
            inputIcon: "text-PED-purple-secondary",
            selected: "bg-PED-purple text-white",
          },
          icons: {
            prev: () => (
              <span>
                <ChevronLeftIcon className="h-5 w-5 text-white" />
              </span>
            ),
            next: () => (
              <span>
                <ChevronRightIcon className="h-5 w-5 text-white" />
              </span>
            ),
          },
          datepickerClassNames: "",
          defaultDate: new Date("2008-02-08"),
          language: "th",
        }}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  )
}
