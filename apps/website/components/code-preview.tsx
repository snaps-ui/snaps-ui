'use client'

import Link from 'next/link'
import { chakra } from '@snaps-ui/react'
import { Box } from '@snaps-ui/react/box'
import { CodeBlock, createShikiAdapter } from '@snaps-ui/react/code-block'
import { Text } from '@snaps-ui/react/text'
import { Heading } from '@snaps-ui/react/heading'
import { SimpleGrid } from '@snaps-ui/react/simple-grid'
import { VStack } from '@snaps-ui/react/stack'
import { Button } from '@snaps-ui/react/button'
import { Input } from '@snaps-ui/react/input'
import { Card } from '@snaps-ui/react/card'
import { Toaster } from '@snaps-ui/react/toaster'
import {
  toast,
  successToast,
  errorToast,
  warningToast,
} from '@snaps-ui/react/toaster'
import type { HighlighterGeneric } from 'shiki'

const showToastBtn = {
  code: `
"use client"

import {
 SnapsProvider, 
 Button, 
 Toaster, 
 toast 
 successToast, 
 errorToast, 
 warningToast
 } from "@snaps-ui/react"


export const App = () => (
  <SnapsProvider>
    <Toaster position="top-right" />
    <Button onClick={() => toast.success("Hello from Snaps UI!")}>
      Show Toast
    </Button>
  </SnapsProvider>
)
`,
  language: 'tsx',
}

const showBtn = {
  code: `
"use client"

import { SnapsProvider, Button } from "@snaps-ui/react"

export const App = () => (
  <SnapsProvider>
    <Button variant="solid" size="lg">
      Get Started
    </Button>
  </SnapsProvider>
)
`,
  language: 'tsx',
}

const SonnerLink = chakra(Link, {
  base: {
    color: 'snaps.600',
    fontWeight: 'semibold',
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
    transition: 'color 0.2s ease-in-out',

    _hover: {
      color: 'snaps.800',
      textDecoration: 'underline',
    },

    _dark: {
      color: 'snaps.300',
      _hover: { color: 'snaps.100' },
    },
  },
})

export const CodePreview = () => {
  return (
    <Box as={'section'} px={{ base: '6', md: '12' }} py="12" mt="16">
      <Box textAlign={'left'} mb={'25px'} width={'90%'} mx={'auto'}>
        <Text
          fontWeight="extrabold"
          fontSize={{ base: '18px', md: '30px' }}
          color={'accent.contrast'}
        >
          Getting Started with Snaps UI
        </Text>

        <Text
          fontWeight="extrabold"
          fontSize={{ base: '13px', md: '16px' }}
          color={'accent.contrast'}
        >
          Build faster with the simplicity of Chakra UI and the flexibility of
          your own design system.
        </Text>
      </Box>

      <SimpleGrid
        columns={[1, null, 2]}
        gap={10}
        mb={16}
        alignItems="center"
        width={'90%'}
        mx={'auto'}
      >
        <Box overflowX="auto" bg={'black'} p={'15px'}>
          <CodePreviewBlock code={showBtn.code} language={showBtn.language} />
        </Box>

        <Box>
          <VStack gap={6}>
            <Button variant="solid" size={{ base: 'sm', md: 'lg' }}>
              Get Started
            </Button>
            <Text fontSize={{ base: 'xs', md: 'md' }} color={'accent.contrast'}>
              Same intuitive API as Chakra — but styled with your system
            </Text>
          </VStack>
        </Box>
      </SimpleGrid>

      <Heading
        size={{ base: 'md', md: 'lg' }}
        mb={8}
        textAlign="center"
        color={'accent.contrast'}
      >
        Use your favourite components
      </Heading>

      <SimpleGrid columns={[1, null, 3]} gap={10}>
        {/* Buttons */}
        <VStack gap={4}>
          <Text fontWeight="bold" color={'accent.contrast'}>
            Buttons
          </Text>
          <Button variant="solid" width={{ base: '100%', md: 'fit-content' }}>
            Solid
          </Button>
          <Button variant="outline" width={{ base: '100%', md: 'fit-content' }}>
            Outline
          </Button>
          <Button variant="ghost" width={{ base: '100%', md: 'fit-content' }}>
            Ghost
          </Button>
        </VStack>

        {/* Input */}
        <VStack gap={4} width={{ base: '100%', md: '100%' }}>
          <Text fontWeight="bold" color={'accent.contrast'}>
            Inputs
          </Text>
          <Input placeholder="Type something..." />
          <Input placeholder="Type something..." variant={'flushed'} />
          <Input placeholder="Type something..." variant={'subtle'} />
        </VStack>

        {/* Card */}
        <VStack gap={6} align="stretch">
          <Text fontWeight="bold" color={'accent.contrast'}>
            Card
          </Text>
          <Card.Root>
            <Card.Header>Welcome</Card.Header>
            <Card.Body>This is a Snaps UI card.</Card.Body>
          </Card.Root>
        </VStack>
      </SimpleGrid>

      <Box width={'90%'} mx={'auto'}>
        <Box mt={'15px'} width={{ base: '90%', md: '50%' }}>
          <Heading
            color={'accent.contrast'}
            size={{ base: 'md', md: 'lg' }}
            mb={2}
            mt="16"
          >
            Toasts built on Sonner
          </Heading>

          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            color={'accent.contrast'}
            mb={8}
          >
            Snaps UI toast is powered by{' '}
            <SonnerLink
              href={'https://sonner.emilkowal.ski/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sonner
            </SonnerLink>{' '}
            under the hood — fast, lightweight, and fully customizable. Use our
            prebuilt helpers (<code>successToast</code>, <code>errorToast</code>
            , <code>warningToast</code>) or render your own component.
          </Text>
        </Box>

        <SimpleGrid
          columns={[1, null, 2]}
          gap={10}
          alignItems="center"
          mb={'25px'}
        >
          <Box overflowX="auto" bg={'black'} p={'15px'}>
            <CodePreviewBlock
              code={showToastBtn.code}
              language={showToastBtn.language}
            />
          </Box>

          <Box>
            <VStack gap={6}>
              <Button
                variant="solid"
                size="lg"
                onClick={() => toast.success('Hello from Snaps UI!')}
                width={{ base: '100%', md: 'fit-content' }}
              >
                Show Toast
              </Button>
              <Text fontSize="md" color={'accent.contrast'}>
                Toasters are built in, just like Chakra’s <code>useToast</code>.
              </Text>
              <Toaster position="top-right" />
            </VStack>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={[1, null, 2]} gap={10}>
          <VStack gap={4}>
            <Button
              onClick={() => {
                successToast({
                  title: 'Success toast',
                  description: 'Snaps UI success description Text!',
                })
              }}
              width={{ base: '100%', md: 'fit-content' }}
            >
              Success Toast
            </Button>
            <Button
              onClick={() => {
                errorToast({
                  title: 'Error toast',
                  description: 'Snaps UI error description Text!',
                })
              }}
              variant="outline"
              width={{ base: '100%', md: 'fit-content' }}
            >
              Error Toast
            </Button>
            <Button
              onClick={() => {
                warningToast({
                  title: 'Warning toast',
                  description: 'Snaps UI Warning description Text!',
                })
              }}
              variant="ghost"
              width={{ base: '100%', md: 'fit-content' }}
            >
              Warning Toast
            </Button>
          </VStack>

          <VStack gap={4}>
            <Button
              onClick={() =>
                toast.custom(
                  () => (
                    <Box
                      p="4"
                      bg="teal"
                      color="white"
                      rounded="md"
                      shadow="lg"
                      fontWeight="bold"
                    >
                      Custom Styled Toast 🚀
                    </Box>
                  ),
                  { duration: 4000 }
                )
              }
              width={{ base: '100%', md: 'fit-content' }}
            >
              Custom Toast
            </Button>
            <Text fontSize="md" color={'accent.contrast'} textAlign="center">
              Snaps UI toast is flexible — you can use built-in variants
              (successToast, errorToast, warningToast) or pass your own
              component for full customization.
            </Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

const CodePreviewBlock = ({
  code,
  language,
}: {
  code: string
  language: string
}) => (
  <Box overflowX="auto" bg="black" p="15px" rounded="md">
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root code={code} language={language}>
        <CodeBlock.Content minW="max-content">
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  </Box>
)

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import('shiki')
    return createHighlighter({
      langs: ['tsx', 'jsx', 'ts'],
      themes: ['github-dark'],
    })
  },
  theme: 'github-dark',
})
