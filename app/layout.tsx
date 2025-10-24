import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ChatProvider } from "@/lib/chat-context"
import { CrispChatWidget } from "@/components/crisp-chat-widget"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "New Health Medicals - Medical Equipment Distribution",
  description:
    "Reliable distribution and installation of modern medical equipment for hospitals, clinics, pharmacies, and home care",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ChatProvider>
          {children}
          <CrispChatWidget />
        </ChatProvider>
        <Analytics />
      </body>
    </html>
  )
}
