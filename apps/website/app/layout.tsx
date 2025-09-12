import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'

import { AppProvider } from '~/app/proider'
import { Footer } from '~/components/footer'
import { NavBar } from '~/components/navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Snaps UI',
  description:
    'A collection of prebuilt, customizable Chakra UI components for faster development',
  authors: [
    { name: 'Justice Chimobi', url: 'https://justice-chimobi.vercel.app/' },
  ],
  applicationName: 'Snaps UI',
  keywords: [
    'snaps-ui',
    'react',
    'ui',
    'chakra-ui',
    'design-system',
    'react-components',
    'accessible',
    'uikit',
    'components',
    'library',
    'emotion',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <AppProvider>
          <NavBar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
