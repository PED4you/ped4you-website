"use client"
import { usePage } from "./PageProvider"
import Landing from "./Scenes/00-Landing"
import FillName from "./Scenes/01-FillName"
import Elgibility from "./Scenes/02-Elgibility"
import ViewBoard from "./Scenes/03-ViewBoard"
import ViewYourNumber from "./Scenes/04-VIewYourNumber"
import YourNumber from "./Scenes/05-YourNumber"
import ShowID from "./Scenes/06-ShowID"
import Signature from "./Scenes/07-Signature"
import ReceiveCard from "./Scenes/08-ReceiveCard"
import Cubible from "./Scenes/09-Cubicle"
import MarkBallots from "./Scenes/10-MarkBallots"
import Folding from "./Scenes/11-Folding"
import DropBallots from "./Scenes/12-DropBallots"
import Result from "./Scenes/13-Result"
import Recap from "./Scenes/14-Recap"

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
    case "7":
      return <Signature />
    case "8":
      return <ReceiveCard />
    case "9":
      return <Cubible />
    case "10":
      return <MarkBallots />
    case "11":
      return <Folding />
    case "12":
      return <DropBallots />
    case "13":
      return <Result />
    case "14":
      return <Recap />
    default:
      return <div />
  }
}
