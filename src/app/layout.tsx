import { ReactNode } from "react"

import { Analytics } from "@vercel/analytics/react"

import "@/styles/globals.css"
import Script from "next/dist/client/script"

import { mitr } from "./fonts"

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="th">
      <head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png" />
        <link rel="manifest" href="/meta/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#92DCEF" />

        <meta name="msapplication-TileColor" content="#5438DC" />
        <meta name="theme-color" content="#ffffff" />

        <Analytics />
      </head>
      <body className={mitr.className}>
        <>{children}</>
        <Script
          src="/lib/onnx/ort.js"
          strategy="beforeInteractive"
          type="module" // Crucial because it's an .mjs file
        />
      </body>
    </html>
  )
}
