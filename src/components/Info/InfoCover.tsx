import {FC} from "react"

import Image from "next/image"

interface InfoCoverProps {
  namespace: string
}

export const InfoCover: FC<InfoCoverProps> = (props) => {
  const {namespace} = props
  return  <Image blurDataURL={`/info/${namespace}/cover.jpg`} placeholder={"blur"} className="mx-auto" src={`/info/${namespace}/cover.jpg`} alt={"image-cover"} width={752} height={272}/>
}