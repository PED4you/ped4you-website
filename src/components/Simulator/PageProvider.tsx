"use client"
import React, { ReactNode, createContext, useContext, useState } from "react"

export interface UserData {
  name: string
  title: string
  birthdate: string
  province: string
  district: string
  subdistrict: string
}

interface PageContextType {
  page: number
  setPage: (page: number) => void
  increment: () => void
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
  const [page, setPage] = useState(0)
  const [userData, setUserData] = useState<UserData>({
    name: "",
    title: "",
    birthdate: "",
    province: "",
    district: "",
    subdistrict: "",
  })

  const increment = () => setPage(page + 1)

  return (
    <PageContext.Provider value={{ userData, setUserData, page, setPage, increment }}>{children}</PageContext.Provider>
  )
}
