import { FC } from "react"

export const Button: FC<{ text: string }> = ({ text }) => {
  return <button className="rounded-xl bg-PED-orange py-2.5 px-10 text-lg font-semibold text-white">{text}</button>
}
