
import {FC, ReactNode} from "react"

export const SectionWithDivider: FC<{children: ReactNode}> = ({children}) => {
  return <section className="max-w-desktop mx-auto">
    {children}
    <div className="w-full px-10 sm:px-[10vw]">
      <div className="border-b-[2px] border-PED-green sm:mx-auto sm:max-w-[640px]"/>
    </div>
  </section>
}