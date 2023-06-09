"use client"
import { ReactNode, createContext, useContext, useState } from "react"

import { DEBUG, DEBUG_PAGE } from "./constants"
import { BaseUser, MockUser } from "./mock"
import { UserData } from "./types"

interface PageContextType {
  page: string
  setPage: (page: string) => void
  userData: UserData
  setUserData: (userData: UserData) => void
}

const PageContext = createContext<PageContextType | undefined>(undefined)

export const usePage = (): PageContextType => {
  const context = useContext(PageContext)

  if (!context) {
    throw new Error("usePage must be used within a PageProvider")
  }

  return context
}

export function PageProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState(DEBUG ? DEBUG_PAGE : "0")
  const [userData, setUserData] = useState<UserData>(DEBUG ? MockUser : BaseUser)

  return <PageContext.Provider value={{ userData, setUserData, page, setPage }}>{children}</PageContext.Provider>
}
