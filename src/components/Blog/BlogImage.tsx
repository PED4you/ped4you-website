import {FC} from "react"

import Image from "next/image"

interface BlogImageProps {
  namespace: string
  index: number
  description: string
}

export const BlogImage: FC<BlogImageProps> = (props) => {

  return (
    <div className="mt-4">
    <Image className="mx-auto rounded-xl" placeholder={"blur"} blurDataURL={`/images/blog/${props.namespace}/content-${props.index.toString()}.jpg`} src={`/images/blog/${props.namespace}/content-${props.index.toString()}.jpg`} alt={"image-content"} width={560} height={560}/>
  <h1 className="mt-2 text-center font-light text-black text-opacity-50">{props.description}</h1>
    </div>
)
}