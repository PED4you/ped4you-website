import {ReactNode} from "react"

import {PageProvider} from "@/components/Simulator/PageProvider"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <PageProvider>
      {children}
    </PageProvider>
  )
}

export default Layout