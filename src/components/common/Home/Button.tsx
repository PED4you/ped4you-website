"use client"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

import Link from "next/link"

export const LinkButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      className="relative rounded-xl bg-PED-orange py-2.5 px-10 text-lg font-semibold text-white ring-2 ring-PED-orange/25 transition-all duration-300 ease-out hover:scale-105 hover:ring-8"
      href={link}
    >
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
      className="relative rounded-xl bg-PED-orange py-2.5 px-10 text-lg font-semibold text-white ring-2 ring-PED-orange/25 transition-all duration-300 ease-out hover:scale-105 hover:ring-8"
      {...props}
    >
      {text}
    </button>
  )
}
