import {FC, ReactNode} from "react"

import classnames from "classnames"

import {DashedPillBox} from "@/components/Home/FYI/InfoCard/DashedPillBox"

interface InfoCardProps {
  title: string | ReactNode
  isInverted?: boolean
  isChecked?: boolean
}

export const InfoCard: FC<InfoCardProps> = (props) => {

  const {title, isInverted = false, isChecked = false} = props

  return <div className="p-4">
    <div className={classnames("w-[259px] rounded-xl border-[3px] border-black px-6 pt-3 pb-5", isInverted ? "bg-PED-purple text-white" : "bg-white text-PED-purple")}>
      {typeof title === "string" ? <h1 className="text-center text-2xl">{title}</h1> : title}
      <div className="relative mt-4 flex justify-center">
        <div className={classnames(!isInverted ? "text-black" : "text-white")}>
          <DashedPillBox/>
        </div>
        {isChecked && <div className="absolute -top-4 left-0 flex w-full justify-center">
            <div className="relative">
                <div className={classnames("h-[65px] w-[8px] rotate-45", isInverted ? "bg-white" : "bg-PED-purple")}/>
                <div
                    className={classnames("absolute top-0 h-[65px] w-[8px] -rotate-45", isInverted ? "bg-white" : "bg-PED-purple")}/>
            </div>
        </div>}
      </div>
    </div>
  </div>
}