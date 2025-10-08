import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'

import { AppProvider } from '~/app/proider'
import { NavBar } from '~/components/navbar'

import './global.css'
import { Banner } from '~/components/banner'

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
    'A beautifully crafted React design system powered by Ark UI and Panda CSS, providing accessible, themeable, and production-ready components.',
  authors: [
    { name: 'Justice Chimobi', url: 'https://github.com/chimobi-justice' },
  ],
  applicationName: 'Snaps UI',
  keywords: [
    'snaps-ui',
    'react',
    'ui',
    'ark ui',
    'panda css',
    'design-system',
    'react-components',
    'accessible',
    'uikit',
    'components',
    'library',
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
          <Banner />
          <NavBar />
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
