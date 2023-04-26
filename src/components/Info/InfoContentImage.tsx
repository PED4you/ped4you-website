import {FC} from "react"

import Image from "next/image"

interface InfoContentImageProps {
  namespace: string
  description: string
}

export const InfoContentImage: FC<InfoContentImageProps> = (props) => {

  return (
    <div className="mt-4">
      <Image className="mx-auto rounded-xl" placeholder={"blur"} blurDataURL={`/info/${props.namespace}/content.jpg`} src={`/info/${props.namespace}/content.jpg`} alt={"image-content"} width={560} height={560}/>
      <h1 className="mt-2 text-center font-light text-black text-opacity-50">{props.description}</h1>
    </div>
  )
}