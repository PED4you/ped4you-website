import {FC, ReactElement} from "react"

import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  title: ReactElement<HTMLSpanElement>,
  date: string,
  url: string,
  thumbnail: string
}
export const ArticleCard:FC<ArticleCardProps> = (props) => {

  const {title, date} = props

  return <div className="p-2 md:p-4">
    <Link href={props.url}>
      <div className="w-[166px] rounded-2xl border-[3px] border-black pl-2 pt-2 pb-1 text-PED-orange md:w-[252px] md:p-2 md:px-3 md:pt-3">
        {
          // TODO Image handler
        }
        <Image src={`/images/blog/${props.thumbnail}`} alt={"thumbnail"} width={222} height={222} className="h-[144px] w-[144px] rounded-xl bg-PED-orange md:h-[222px] md:w-[222px]"/>
        <div className="mt-2 px-1 md:mt-4 md:px-2">
          <div className="h-[72px] text-base font-medium leading-5 md:text-xl md:leading-6">
            {title}
          </div>
          <h3 className="-mt-1 text-sm font-light md:mt-3">
            {date}
          </h3>
        </div>
      </div>
    </Link>
  </div>
}