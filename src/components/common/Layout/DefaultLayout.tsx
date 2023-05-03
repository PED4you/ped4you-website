import { FC, ReactNode } from "react"

import { Footer } from "@/components/common/Footer/Footer"
import { Navigation } from "@/components/common/Navigation/Navigation"

export const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
