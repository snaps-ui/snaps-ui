'use client'

import { ThemeProvider } from 'next-themes'
import { SnapsProvider } from '@snaps-ui/react/provider'
import { Toaster } from '@snaps-ui/react/toaster'

import { system } from '~/app/theme'

export const AppProvider = (props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <SnapsProvider value={system}>
        <Toaster position="top-right" />
        {props.children}
      </SnapsProvider>
    </ThemeProvider>
  )
}
