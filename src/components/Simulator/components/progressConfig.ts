// Page ranges for each voting process
export const GENERAL_PAGES = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]

export const REFERENDUM_PAGES = [
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
]

export const TOTAL_STEPS = 10 // Number of visual steps in progress bar

// Map page number to step index (0-indexed)
// Some pages are grouped into single steps
function getStepForGeneralPage(page: string): number {
  const pageNum = parseInt(page)
  if (pageNum === 0) return 0 // Landing
  if (pageNum === 1) return 1 // FillName
  if (pageNum === 2) return 2 // Eligibility
  if (pageNum >= 3 && pageNum <= 5) return 3 // ViewBoard, ViewYourNumber, YourNumber
  if (pageNum === 6) return 4 // ShowID
  if (pageNum === 7) return 5 // Signature
  if (pageNum === 8) return 6 // ReceiveCard
  if (pageNum === 9) return 7 // Cubicle
  if (pageNum === 10) return 8 // MarkBallots
  if (pageNum >= 11 && pageNum <= 12) return 9 // Folding, DropBallots
  if (pageNum >= 13) return 9 // Result, Recap (completed)
  return 0
}

function getStepForReferendumPage(page: string): number {
  const pageNum = parseInt(page)
  // Same mapping but offset by 15
  return getStepForGeneralPage(String(pageNum - 15))
}

export interface ProcessState {
  id: string
  label: string
  number: number
  totalSteps: number
  currentStep: number
  status: "pending" | "active" | "completed"
}

export function getProgressState(page: string): ProcessState[] {
  const pageNum = parseInt(page)

  const isGeneralPage = GENERAL_PAGES.includes(page)
  const isReferendumPage = REFERENDUM_PAGES.includes(page)

  // Determine status for each process
  let generalStatus: "pending" | "active" | "completed" = "pending"
  let referendumStatus: "pending" | "active" | "completed" = "pending"
  let generalStep = -1
  let referendumStep = -1

  if (isGeneralPage) {
    generalStatus = "active"
    generalStep = getStepForGeneralPage(page)
    referendumStatus = "pending"
    referendumStep = -1
  } else if (isReferendumPage) {
    generalStatus = "completed"
    generalStep = TOTAL_STEPS - 1 // All steps completed
    referendumStatus = "active"
    referendumStep = getStepForReferendumPage(page)
  }

  return [
    {
      id: "general",
      label: "ทั่วไป",
      number: 1,
      totalSteps: TOTAL_STEPS,
      currentStep: generalStep,
      status: generalStatus,
    },
    {
      id: "referendum",
      label: "ประชามติ",
      number: 2,
      totalSteps: TOTAL_STEPS,
      currentStep: referendumStep,
      status: referendumStatus,
    },
  ]
}
