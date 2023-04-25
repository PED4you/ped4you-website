"use client"
import { usePage } from "./PageProvider"
import Landing from "./Scenes/00-Landing"
import FillName from "./Scenes/01-FillName"
import Elgibility from "./Scenes/02-Elgibility"
import ViewBoard from "./Scenes/03-ViewBoard"
import ViewYourNumber from "./Scenes/04-VIewYourNumber"
import YourNumber from "./Scenes/05-YourNumber"
import ShowID from "./Scenes/06-ShowID"

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
      return <ViewBoard />
    case "4":
      return <ViewYourNumber />
    case "5":
      return <YourNumber />
    case "6":
      return <ShowID />
    default:
      return <div />
  }
}
