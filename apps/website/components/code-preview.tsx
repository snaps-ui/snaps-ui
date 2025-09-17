'use client'

import Link from 'next/link'
import Image from 'next/image'
import { chakra } from '@snaps-ui/react'
import { Box } from '@snaps-ui/react/box'
import { CodeBlock, createShikiAdapter } from '@snaps-ui/react/code-block'
import type { HighlighterGeneric } from 'shiki'
import { SimpleGrid } from '@snaps-ui/react/simple-grid'
import { VStack } from '@snaps-ui/react/stack'
import { Button } from '@snaps-ui/react/button'
import { Input } from '@snaps-ui/react/input'
import { Card } from '@snaps-ui/react/card'
import { Flex } from '@snaps-ui/react/flex'
import { Stack, HStack } from '@snaps-ui/react/stack'
import {
  toast,
  successToast,
  errorToast,
  warningToast,
} from '@snaps-ui/react/toaster'
import { FaLinkedin } from 'react-icons/fa6'

import { Typography } from '~/components/typography'

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
        <Typography variant="subheading">
          Getting Started with Snaps UI
        </Typography>

        <Typography variant="body2">
          Build faster with the simplicity of Chakra UI and the flexibility of
          your own design system.
        </Typography>
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
            <Typography variant="body3">
              Same intuitive API as Chakra — but styled with your system
            </Typography>
          </VStack>
        </Box>
      </SimpleGrid>

      <Box width={'90%'} mx={'auto'}>
        <Box textAlign={'left'} mb={'25px'} width={{ base: '100%', md: '50%' }}>
          <Typography variant="subheading">
            Use your favourite components
          </Typography>

          <Typography variant="body2">
            Build your next app faster with high-quality, tested components.
            Snaps UI includes everything you need to create complex web
            applications with ease.
          </Typography>
        </Box>

        <Flex
          justifyContent={'space-around'}
          flexDirection={{ base: 'column', md: 'row' }}
          gap={6}
        >
          <Box>
            <Typography variant="body1">Buttons</Typography>

            <Flex gap={'3'} mt={'9px'}>
              <Button
                variant="solid"
                width={{ base: '100%', md: 'fit-content' }}
              >
                Solid
              </Button>
              <Button
                variant="outline"
                width={{ base: '100%', md: 'fit-content' }}
              >
                Outline
              </Button>
              <Button
                variant="ghost"
                width={{ base: '100%', md: 'fit-content' }}
              >
                Ghost
              </Button>
            </Flex>
          </Box>

          <Box>
            <Typography variant="body1">Inputs</Typography>

            <Flex
              mt={'9px'}
              flexDirection={{ base: 'column', md: 'row' }}
              gap={4}
            >
              <Input placeholder="Type something..." />
              <Input placeholder="Type something..." variant={'flushed'} />
              <Input placeholder="Type something..." variant={'subtle'} />
            </Flex>
          </Box>
        </Flex>

        <Flex justifyContent={'space-between'} mt={'25px'}>
          <Box width={'100%'}>
            <Typography variant="body1">Cards</Typography>

            <Flex
              mt={'9px'}
              flexDirection={{ base: 'column', md: 'row' }}
              gap={4}
            >
              <Card.Root width={'full'}>
                <Card.Body gap="2">
                  <Flex
                    justifyContent={'space-between'}
                    justifyItems={'flex-start'}
                  >
                    <HStack mb="6" gap="3">
                      <Image
                        src={'/justice-chimobi.jpeg'}
                        width={40}
                        height={40}
                        alt={'aurthor of snaps ui avatar'}
                        style={{ borderRadius: '50%' }}
                        placeholder={'blur'}
                        blurDataURL={
                          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=='
                        }
                      />
                      <Stack gap="0">
                        <Card.Title mt="2">Justice Chimobi</Card.Title>
                        <Typography variant="body3" color={'gray.200'}>
                          Creator Snaps UI
                        </Typography>
                      </Stack>
                    </HStack>

                    <Link
                      href={'https://www.linkedin.com/in/justice-chimobi'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={'18px'} />
                    </Link>
                  </Flex>
                  <Card.Description>
                    Building developer-friendly UI components for modern React
                    apps. Snaps UI helps you build faster with styled,
                    accessible components.
                  </Card.Description>
                </Card.Body>
              </Card.Root>

              <Card.Root width={'full'}>
                <Card.Header>Welcome</Card.Header>
                <Card.Body>This is a Snaps UI card.</Card.Body>
              </Card.Root>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box width={'90%'} mx={'auto'}>
        <Box mt={'15px'} width={{ base: '90%', md: '50%' }}>
          <Typography variant="body2" mb={2} mt="16">
            Toasts built on Sonner
          </Typography>

          <Typography variant="body2" mb={8}>
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
          </Typography>
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
              <Typography variant="body3">
                Toasters are built in, just like Chakra’s <code>useToast</code>.
              </Typography>

              {/* Buttons */}
              <Flex
                gap={4}
                alignContent={'center'}
                justifyContent={'center'}
                mt={'20px'}
              >
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
              </Flex>
            </VStack>
          </Box>
        </SimpleGrid>

        <Flex
          justifyContent={'center'}
          width={{ base: '100%', md: '60%' }}
          mx={'auto'}
        >
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
            <Typography variant="body3" textAlign="center">
              Snaps UI toast is flexible — you can use built-in variants
              (successToast, errorToast, warningToast) or pass your own
              component for full customization.
            </Typography>
          </VStack>
        </Flex>
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
