import {FC, ReactElement} from "react"

interface ArticleCardProps {
  title: ReactElement<HTMLSpanElement>,
  date: string
}
export const ArticleCard:FC<ArticleCardProps> = (props) => {

  const {title, date} = props

  return <div className="p-4">
    <div className="w-[252px] rounded-xl border-[3px] border-black px-3 pt-3 pb-2 text-PED-orange">
      {
        // TODO Image handler
      }
      <div className="h-[222px] w-[222px] rounded-xl bg-PED-orange"/>
      <div className="mt-4 px-2">
        <div className="h-[72px] text-xl font-medium leading-6">
          {title}
        </div>
        <h3 className="mt-3 text-sm font-light">
          {date}
        </h3>
      </div>
    </div>
  </div>
}