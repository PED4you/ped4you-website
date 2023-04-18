
import {FC, ReactNode} from "react"

export const SectionWithDivider: FC<{children: ReactNode}> = ({children}) => {
  return <section className="max-w-desktop mx-auto">
    {children}
    <div className="w-full px-10 md:px-64">
      <div className="border-b-[2px]  border-PED-green"/>
    </div>
  </section>
}