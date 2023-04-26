"use client"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

import Link from "next/link"

import classNames from "classnames"

export const LinkButton = ({ text, className, link }: { text: string; className?: string; link: string }) => {
  return (
    <Link
      className={classNames(
        className,
        "relative rounded-xl bg-PED-orange py-2.5 px-10 text-lg font-semibold text-white ring-2 ring-PED-orange/25 transition-all duration-300 ease-out hover:scale-105 hover:ring-8"
      )}
      href={link}
    >
      {text}
    </Link>
  )
}

export const Button = ({
  text,
  className,
  onClick,
  ...props
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  text: string
  className?: string
  onClick?: () => void
}) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={classNames(
        className,
        "relative mt-4 rounded-xl bg-PED-orange py-2.5 px-10 text-lg font-semibold text-white ring-2 ring-PED-orange/25 transition-all duration-300 ease-out hover:scale-105 hover:ring-8"
      )}
      {...props}
    >
      {text}
    </button>
  )
}
