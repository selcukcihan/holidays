import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css"
import { getHolidays } from "../data"

const inter = Inter({ subsets: ["latin"] })

export function generateMetadata(): Metadata {
  const shortTitle = 'Resmî Tatiller'
  const description = "Resmî tatilleri gösteren bir uygulama."
  const { holidays, getDaysBetweenDates, isTodayPublicHoliday } = getHolidays()
  const getTitle = () => {
    if (isTodayPublicHoliday) {
      return `Bugün ${holidays[0].name}. Bir sonraki resmî tatile (${holidays[1].name}) ${getDaysBetweenDates(holidays[1].start)} gün var.`
    } else {
      return `Bir sonraki resmî tatile (${holidays[0].name}) ${getDaysBetweenDates(holidays[0].start)} gün var.`
    }
  }
  const title = getTitle()

  const images = [{
    url: `https://tatil.selcukcihan.com/icon.png`,
    width: 360,
    height: 360,
    alt: title,
  }]

  return {
    title: shortTitle,
    description,
    applicationName: description,
    keywords: ['tatil', 'resmî tatiller', 'tatiller', 'resmî', 'tatil günleri', 'tatil günü',
              ...([2024, 2025, 2026, 2027, 2028, 2029].map(y => [`tatil günleri ${y}`, `tatil günü ${y}`]).flat())],
    openGraph: {
      siteName: title,
      title,
      description,
      type: 'website',
      url: 'https://tatil.selcukcihan.com',
      images,
    },
    twitter: {
      site: '@scihan',
      creator: '@scihan',
      card: 'summary',
      title,
      description,
      images,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-7KT40Q6DHY" />
    </html>
  )
}
