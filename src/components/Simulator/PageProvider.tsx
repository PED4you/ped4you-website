"use client"
import { ReactNode, createContext, useContext, useState } from "react"

import { BaseUser, MockUser } from "./mock"
import { VotingDistrict } from "./types"

export interface UserData {
  name: string
  title: string
  birthdate: string
  province: string
  district: string
  subdistrict: string
  votingDistrict: VotingDistrict
}

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

const DEBUG = false
const DEBUG_PAGE = "10"

export function PageProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState(DEBUG ? DEBUG_PAGE : "0")
  const [userData, setUserData] = useState<UserData>(DEBUG ? MockUser : BaseUser)

  return <PageContext.Provider value={{ userData, setUserData, page, setPage }}>{children}</PageContext.Provider>
}
