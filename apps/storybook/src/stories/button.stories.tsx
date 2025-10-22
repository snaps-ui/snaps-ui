import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, HStack, Stack } from '@snaps-ui/react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Default button',
  },
}

export const Variants: Story = {
  render: () => (
    <Stack gap="4">
      <HStack>
        <Button variant="solid">solid</Button>
      </HStack>
      <HStack>
        <Button variant="solid">Solid</Button>
        <Button variant="plain">plain</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="ghost">Ghost</Button>
      </HStack>
      <HStack>
        <Button variant="solid" colorPalette="neutral">
          Solid
        </Button>
        <Button variant="outline" colorPalette="neutral">
          Outline
        </Button>
        <Button variant="subtle" colorPalette="neutral">
          Subtle
        </Button>
        <Button variant="ghost" colorPalette="neutral">
          Ghost
        </Button>
      </HStack>
      <HStack>
        <Button variant="solid" colorPalette="blue">
          Solid
        </Button>
        <Button variant="outline" colorPalette="blue">
          Outline
        </Button>
        <Button variant="subtle" colorPalette="blue">
          Subtle
        </Button>
        <Button variant="ghost" colorPalette="blue">
          Ghost
        </Button>
      </HStack>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <HStack>
      <Button size="xs">XSmall</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">XLarge</Button>
    </HStack>
  ),
}
