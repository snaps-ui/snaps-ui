'use client'

import { ThemeProvider } from 'next-themes'
import { SnapsProvider } from '@snaps-ui/react'
import { Toaster } from '@snaps-ui/react/toaster'

import { system } from '~/app/theme'

export const AppProvider = (props: { children: React.ReactNode }) => {
  return (
    <SnapsProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Toaster position="top-right" />
        {props.children}
      </ThemeProvider>
    </SnapsProvider>
  )
}
