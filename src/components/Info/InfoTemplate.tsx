import {FC, ReactNode} from "react"


import {InfoContentImage} from "@/components/Info/InfoContentImage"
import {InfoContentText} from "@/components/Info/InfoContentText"
import {InfoCover} from "@/components/Info/InfoCover"

interface InfoTemplateProps {
  namespace: string
  title: string
  primeImgDescription: string
  children: ReactNode
}
export const InfoTemplate = (props: InfoTemplateProps) => {

  const {namespace, title, primeImgDescription, children} = props

  return (
    <div className="mx-auto w-full max-w-[752px] py-16">
      <InfoCover namespace={namespace}/>
      <div className="px-4">
        <h1 className="mt-16 text-3xl font-medium text-PED-purple-secondary">{title}</h1>
        <InfoContentImage namespace={namespace} description={primeImgDescription}/>
        <InfoContentText>
          {children}
        </InfoContentText>
      </div>
    </div>
  )
}

const Bold: FC<{children: ReactNode}> = ({children}) => {
  return <span className="font-medium">{children}</span>
}

const Highlight: FC<{children: ReactNode}> = ({children}) => {
  return <span className="font-medium text-PED-orange">{children}</span>
}

const Link: FC<{children: string, url?: string}> = ({children, url}) => {
  return <a href={url || children as string} className={"break-all underline"} target={"_blank"}>{children}</a>
}

InfoTemplate.Link = Link
InfoTemplate.Bold = Bold
InfoTemplate.Highlight = Highlight