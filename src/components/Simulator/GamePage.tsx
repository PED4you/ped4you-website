"use client"
import ReferendumLanding from "@/components/Simulator/Scenes/19-Referendum-Landing"

import ProgressBar from "./components/ProgressBar"
import { getProgressState } from "./components/progressConfig"
import { usePage } from "./PageProvider"

// General (ทั่วไป) Scenes
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

// Referendum (ประชาธิ) Scenes
import ReferendumYourNumber from "./Scenes/20-Referendum-YourNumber"
import ReferendumShowID from "./Scenes/21-Referendum-ShowID"
import ReferendumSignature from "./Scenes/22-Referendum-Signature"
import ReferendumReceiveCard from "./Scenes/23-Referendum-ReceiveCard"
import ReferendumCubicle from "./Scenes/24-Referendum-Cubicle"
import ReferendumMarkBallots from "./Scenes/25-Referendum-MarkBallots"
import ReferendumFolding from "./Scenes/26-Referendum-Folding"
import ReferendumDropBallots from "./Scenes/27-Referendum-DropBallots"
import ReferendumResult from "./Scenes/28-Referendum-Result"
import ReferendumRecap from "./Scenes/29-Referendum-Recap"
import Summary from "./Scenes/30-Summary"

function PageContent({ page }: { page: string }) {
  switch (page) {
    // General (ทั่วไป) Pages
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
    // Referendum (ประชามติ) Pages
    case "19":
      return <ReferendumLanding />
    case "20":
      return <ReferendumYourNumber />
    case "21":
      return <ReferendumShowID />
    case "22":
      return <ReferendumSignature />
    case "23":
      return <ReferendumReceiveCard />
    case "24":
      return <ReferendumCubicle />
    case "25":
      return <ReferendumMarkBallots />
    case "26":
      return <ReferendumFolding />
    case "27":
      return <ReferendumDropBallots />
    case "28":
      return <ReferendumResult />
    case "29":
      return <ReferendumRecap />
    case "30":
      return <Summary />
    default:
      return <div />
  }
}

export default function PageRenderer() {
  const { page } = usePage()
  const progressState = getProgressState(page)

  // Don't show progress bar on landing pages and summary page
  const showProgressBar = page !== "0" && page !== "19" && page !== "30"

  return (
    <div className="flex min-h-screen flex-col">
      {showProgressBar && <ProgressBar processes={progressState} className="mx-4 mt-4" />}
      <PageContent page={page} />
    </div>
  )
}
