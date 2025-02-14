import "./globals.css"
import { Roboto, Orbitron } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { SmoothScroll } from "@/components/SmoothScroll"
import type React from "react"

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-roboto" })
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-orbitron" })

export const metadata = {
  title: "Harmony Industrial Solutions",
  description: "Innovative Industrial Solutions for a Better Future",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${orbitron.variable}`}>
      <body className={`${roboto.className} bg-background text-foreground`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <SmoothScroll />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

