"use client"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

import Link from "next/link"

export const LinkButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link className="relative rounded-xl bg-PED-orange py-2.5 px-10 text-lg font-semibold text-white" href={link}>
      {text}
    </Link>
  )
}

export const Button = ({
  text,
  onClick,
  ...props
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  text: string
  onClick?: () => void
}) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className="relative rounded-xl bg-PED-orange py-2.5 px-10 text-lg font-semibold text-white"
      {...props}
    >
      {text}
    </button>
  )
}
