import {FC} from "react"

import Image from "next/image"


export const BlogHeading: FC<{namespace: string, title: string}> = ({namespace, title}) => {
  return <>
    <Image blurDataURL={`/images/blog/${namespace}/cover.jpg`} placeholder={"blur"} className="mx-auto" src={`/images/blog/${namespace}/cover.jpg`} alt={"image-cover"} width={752} height={272}/>
    <h1 className="mt-16 px-4 text-3xl font-medium text-PED-orange">{title}</h1>
  </>
}