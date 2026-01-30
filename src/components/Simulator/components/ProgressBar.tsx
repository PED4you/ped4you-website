"use client"

import classNames from "classnames"

interface ProcessState {
  id: string
  label: string
  number: number
  totalSteps: number
  currentStep: number // -1 = not started, 0-indexed otherwise
  status: "pending" | "active" | "completed"
}

interface ProgressBarProps {
  processes: ProcessState[]
  className?: string
}

function NumberBubble({ number, status }: { number: number; status: "active" | "inactive" | "completed" }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={classNames(
          "flex h-12 w-12 items-center justify-center rounded-full text-2xl font-medium transition-all duration-300",
          {
            "bg-PED-orange text-white": status === "active" || status === "completed",
            "bg-PED-orange/30 text-white/70": status === "inactive",
          }
        )}
      >
        {number}
      </div>
    </div>
  )
}

function StepSegments({ totalSteps, currentStep }: { totalSteps: number; currentStep: number }) {
  return (
    <div className="flex flex-1 items-center gap-1 rounded-full bg-white/80 p-1.5">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isFilled = index <= currentStep
        const isFirst = index === 0
        const isLast = index === totalSteps - 1

        return (
          <div
            key={index}
            className={classNames("h-3 flex-1 transition-all duration-300", {
              "bg-PED-orange": isFilled,
              "bg-gray-200": !isFilled,
              "rounded-l-full": isFirst,
              "rounded-r-full": isLast,
            })}
          />
        )
      })}
    </div>
  )
}

function ProcessRow({ process, nextProcess }: { process: ProcessState; nextProcess?: ProcessState }) {
  const isExpanded = process.status === "active"

  if (!isExpanded) {
    // Collapsed view - just show the bubble
    return (
      <div className="flex items-center justify-center py-2">
        <div className="flex flex-col items-center gap-1">
          <NumberBubble number={process.number} status={process.status === "completed" ? "completed" : "inactive"} />
          <span
            className={classNames("text-sm font-medium", {
              "text-PED-orange": process.status === "completed",
              "text-PED-orange/50": process.status === "pending",
            })}
          >
            {process.label}
          </span>
        </div>
      </div>
    )
  }

  // Expanded view - show full progress bar
  return (
    <div className="flex items-center gap-3 py-2">
      {/* Left bubble with label */}
      <div className="flex flex-col items-center gap-1">
        <NumberBubble number={process.number} status="active" />
        <span className="text-sm font-medium text-PED-orange">{process.label}</span>
      </div>

      {/* Step segments */}
      <StepSegments totalSteps={process.totalSteps} currentStep={process.currentStep} />

      {/* Right bubble (next process preview) */}
      {nextProcess && (
        <div className="flex flex-col items-center gap-1">
          <NumberBubble number={nextProcess.number} status="inactive" />
          <span className="text-sm font-medium text-PED-orange/50">{nextProcess.label}</span>
        </div>
      )}
    </div>
  )
}

export default function ProgressBar({ processes, className }: ProgressBarProps) {
  // Only show active process row (not collapsed ones separately)
  const activeProcess = processes.find((p) => p.status === "active")
  const activeIndex = processes.findIndex((p) => p.status === "active")
  const nextProcess = activeIndex >= 0 ? processes[activeIndex + 1] : undefined

  return (
    <div className={classNames("mx-auto w-full max-w-xl rounded-2xl bg-white px-4 py-2", className)}>
      {activeProcess && <ProcessRow process={activeProcess} nextProcess={nextProcess} />}
    </div>
  )
}
