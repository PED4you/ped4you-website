"use client"
import { usePage } from "./PageProvider"
import Landing from "./Scenes/00-Landing"
import FillName from "./Scenes/01-FillName"
import Elgibility from "./Scenes/02-Elgibility"

export default function PageRenderer() {
  const { page } = usePage()

  switch (page) {
    case "0":
      return <Landing />
    case "1":
      return <FillName />
    case "2":
      return <Elgibility />
    case "3":
      return <div></div>
    default:
      return <div />
  }
}
