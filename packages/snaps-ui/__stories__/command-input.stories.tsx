import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CommandInput } from '../src/components/command-input'

const meta: Meta<typeof CommandInput> = {
  title: 'Components/CommandInput',
  component: CommandInput,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Search commands...',
    shortcut: 'Ctrl + K',
    onOpen: () => alert('Command palette opened'),
  },
}

export default meta

type Story = StoryObj<typeof CommandInput>

/**
 * Default CommandInput story.
 */

export const Default: Story = {
  render: (args) => <CommandInput {...args} />,
}

/**
 * Custom shortcut story.
 */
export const WithCustomShortcut: Story = {
  args: {
    shortcut: '⌘ + P',
    title: 'Search projects…',
  },
  render: (args) => <CommandInput {...args} />,
}

/**
 * Editable (non-readOnly) CommandInput story.
 */
export const Editable: Story = {
  args: {
    readOnly: false,
    title: 'Type your command…',
  },
  render: (args) => <CommandInput {...args} />,
}
