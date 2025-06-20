import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sivananthan Sangeerthan - Software Engineering Undergraduate",
  description:
    "Software Engineering undergraduate specializing in MERN stack development. Currently working as Software Engineer Intern at Clevonex. View my projects and get in touch.",
  keywords: "software engineer, MERN stack, react, node.js, portfolio, web development, sri lanka",
  authors: [{ name: "Sivananthan Sangeerthan" }],
  openGraph: {
    title: "Sivananthan Sangeerthan - Software Engineering Undergraduate",
    description:
      "Software Engineering undergraduate specializing in MERN stack development and modern web technologies.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
