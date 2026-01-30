import { Mitr, Sarabun, IBM_Plex_Sans_Thai } from "next/font/google"

export const mitr = Mitr({
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin", "latin-ext", "thai"],
  display: "swap",
  fallback: ["system-ui", "Sukhumvit Set", "arial"],
})

export const sarabun = Sarabun({
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin", "latin-ext", "thai"],
  display: "swap",
  fallback: ["system-ui", "Sukhumvit Set", "arial"],
})

export const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin", "latin-ext", "thai"],
  display: "swap",
  fallback: ["system-ui", "Sukhumvit Set", "arial"],
})
