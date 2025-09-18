import React from 'react'
import type { Preview } from '@storybook/react-vite'

import {
  SnapsProvider,
  createSystem,
  defaultConfig,
  Toaster,
} from '../packages/snaps-ui/src'

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Inter, sans-serif' },
        body: { value: 'Inter, sans-serif' },
        mono: { value: 'Roboto Mono, monospace' },
      },
    },
  },
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    codePanel: true,
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <SnapsProvider value={system}>
        <Toaster position="top-right" />
        <Story />
      </SnapsProvider>
    ),
  ],
}

export default preview
