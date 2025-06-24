import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Thodupuzha Taxi - Pazheri Cab Service | 24/7 Taxi in Kerala",
  description:
    "Pazheri Cab Service offers reliable 24/7 taxi services from Thodupuzha to all over Kerala. Airport pickups (Cochin, Calicut), wedding trips, temple tours, family holidays & more. Book your Hatchback, Sedan, SUV, or Tempo Traveller today!",
  keywords: [
    "Pazheri Cab Service",
    "Thodupuzha taxi",
    "taxi service Thodupuzha",
    "cabs in Thodupuzha",
    "Kerala taxi service",
    "airport taxi Cochin",
    "airport taxi Calicut",
    "wedding taxi Kerala",
    "temple tour taxi Kerala",
    "family holiday cabs Kerala",
    "SUV taxi Thodupuzha",
    "Tempo Traveller Thodupuzha",
    "thodupuzhataxi.com",
  ],
  openGraph: {
    title: "Pazheri Cab Service - Thodupuzha's Premier Taxi Service | All Kerala",
    description:
      "Book Pazheri Cab Service for reliable travel from Thodupuzha across Kerala. Airport transfers, tours, weddings. Call us 24/7.",
    type: "website",
    url: "https://thodupuzhataxi.com",
    images: [
      {
        url: "https://thodupuzha-taxi.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Pazheri Cab Service - Thodupuzha Taxi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pazheri Cab Service Thodupuzha | Your Kerala Travel Partner",
    description: "24/7 reliable cabs from Thodupuzha. Airport, tours, weddings. Pazheri Cab Service.",
    images: ["https://thodupuzha-taxi.vercel.app/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans text-foreground antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}
