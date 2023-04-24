"use client"
import { usePage } from "./PageProvider"
import Landing from "./Scenes/0-Landing"
import FillName from "./Scenes/1-FillName"

export default function PageRenderer() {
  const { page } = usePage()

  switch (page) {
    case 0:
      return <Landing />
    case 1:
      return <FillName />
    case 2:
      return <div>yess</div>
    case 3:
      return <div>noo</div>
    default:
      return <div />
  }
}
