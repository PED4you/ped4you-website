"use client"
import { ReactNode, createContext, useContext, useState } from "react"

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

export function PageProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState("0")
  const [userData, setUserData] = useState<UserData>({
    name: "",
    title: "",
    birthdate: "",
    province: "",
    district: "",
    subdistrict: "",
    votingDistrict: {
      id: "",
      code: "",
      province: "",
      candidates: [],
      districts: [],
    },
  })

  return <PageContext.Provider value={{ userData, setUserData, page, setPage }}>{children}</PageContext.Provider>
}
