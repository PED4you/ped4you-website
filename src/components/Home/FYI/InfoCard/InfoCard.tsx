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

  return <div className="p-2 md:p-4">
    <div className={classnames("w-[171px] rounded-2xl border-[3px] border-black px-2 pt-[0.7rem] pb-4 md:w-[259px] md:px-6 md:pt-3 md:pb-5", isInverted ? "bg-PED-purple text-white" : "bg-white text-PED-purple")}>
      {typeof title === "string" ? <h1 className="text-center text-[17px] md:text-2xl">{title}</h1> : title}
      <div className="relative mt-2 flex justify-center md:mt-4">
        <div className={classnames("w-[80px] md:w-[96px]",!isInverted ? "text-black" : "text-white")}>
          <DashedPillBox/>
        </div>
        {isChecked && <div className="absolute -top-2.5 left-0 flex w-full justify-center md:-top-4">
            <div className="relative">
                <div className={classnames("h-[48px] w-[6px] rotate-45 md:h-[65px] md:w-[8px]", isInverted ? "bg-white" : "bg-PED-purple")}/>
                <div
                    className={classnames("absolute top-0 h-[48px] w-[6px] -rotate-45 md:h-[65px] md:w-[8px]", isInverted ? "bg-white" : "bg-PED-purple")}/>
            </div>
        </div>}
      </div>
    </div>
  </div>
}