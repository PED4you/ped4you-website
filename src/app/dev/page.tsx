"use client"
import {useEffect} from "react"

import ProgressBar from "../../components/Simulator/components/ProgressBar"
import { getProgressState } from "../../components/Simulator/components/progressConfig"
import { usePage} from "../../components/Simulator/PageProvider"

// General (ทั่วไป) Scenes
import Landing from "../../components/Simulator/Scenes/00-Landing"
import FillName from "../../components/Simulator/Scenes/01-FillName"
import Elgibility from "../../components/Simulator/Scenes/02-Elgibility"
import ViewBoard from "../../components/Simulator/Scenes/03-ViewBoard"
import ViewYourNumber from "../../components/Simulator/Scenes/04-VIewYourNumber"
import YourNumber from "../../components/Simulator/Scenes/05-YourNumber"
import ShowID from "../../components/Simulator/Scenes/06-ShowID"
import Signature from "../../components/Simulator/Scenes/07-Signature"
import ReceiveCard from "../../components/Simulator/Scenes/08-ReceiveCard"
import Cubible from "../../components/Simulator/Scenes/09-Cubicle"
import MarkBallots from "../../components/Simulator/Scenes/10-MarkBallots"
import Folding from "../../components/Simulator/Scenes/11-Folding"
import DropBallots from "../../components/Simulator/Scenes/12-DropBallots"
import Result from "../../components/Simulator/Scenes/13-Result"
import Recap from "../../components/Simulator/Scenes/14-Recap"

// Referendum (ประชาธิ) Scenes
import ReferendumLanding from "../../components/Simulator/Scenes/19-Referendum-Landing"
import ReferendumYourNumber from "../../components/Simulator/Scenes/20-Referendum-YourNumber"
import ReferendumShowID from "../../components/Simulator/Scenes/21-Referendum-ShowID"
import ReferendumSignature from "../../components/Simulator/Scenes/22-Referendum-Signature"
import ReferendumReceiveCard from "../../components/Simulator/Scenes/23-Referendum-ReceiveCard"
import ReferendumCubicle from "../../components/Simulator/Scenes/24-Referendum-Cubicle"
import ReferendumMarkBallots from "../../components/Simulator/Scenes/25-Referendum-MarkBallots"
import ReferendumFolding from "../../components/Simulator/Scenes/26-Referendum-Folding"
import ReferendumDropBallots from "../../components/Simulator/Scenes/27-Referendum-DropBallots"
import ReferendumResult from "../../components/Simulator/Scenes/28-Referendum-Result"
import ReferendumRecap from "../../components/Simulator/Scenes/29-Referendum-Recap"

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
    default:
      return <div />
  }
}

export default function PageRenderer() {
  const { page, setPage } = usePage()
  const progressState = getProgressState(page)

  useEffect(() => {
    setPage("19")
  }, []);
  // Don't show progress bar on landing pages
  const showProgressBar = page !== "0" && page !== "15"

  return (
    <div className="flex min-h-screen flex-col">
      {showProgressBar && <ProgressBar processes={progressState} className="mx-4 mt-4" />}
      <PageContent page={page} />
    </div>
  )
}
