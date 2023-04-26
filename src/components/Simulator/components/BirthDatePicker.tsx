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
    <div className="relative w-1/2">
      <Datepicker
        options={{
          title: "เลือกวันเกิด",
          autoHide: true,
          todayBtn: false,
          clearBtn: false,
          maxDate: new Date("2030-01-01"),
          minDate: new Date("1950-01-01"),
          theme: {
            // background: "bg-PED-purple dark:bg-PED-purple",
            background: "",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            // text: "text-white",
            text: "",
            disabledText: "",
            // disabledText: "text-PED-yellow-secondary",
            input: "",
            inputIcon: "",
            selected: "",
            // selected: "bg-white text-PED-purple-secondary dark:text-PED-purple-secondary",
          },
          icons: {
            // () => ReactElement | JSX.Element
            prev: () => (
              <span className="">
                <ChevronLeftIcon className="h-5 w-5 text-white" />
              </span>
            ),
            next: () => (
              <span className="">
                <ChevronRightIcon className="h-5 w-5 text-white" />
              </span>
            ),
          },
          datepickerClassNames: "text-white dark:text-white",
          defaultDate: new Date("2005-01-01"),
          language: "th",
        }}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  )
}
