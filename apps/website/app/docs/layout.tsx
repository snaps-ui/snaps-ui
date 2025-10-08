import Link from 'next/link'
import { Box } from '@snaps-ui/react/box'
import { Flex } from '@snaps-ui/react/flex'

import { AppProvider } from '~/app/proider'

export default function DocsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppProvider>
      <Flex minH="100vh" bg={'bg.default'}>
        {/* Sidebar */}
        <Box
          as="aside"
          w={{ base: '64', md: '72' }}
          p="6"
          borderRight="1px solid"
          borderColor="border.default"
          position="sticky"
          top="0"
          h="100vh"
        >
          <Box as="nav" display="flex" flexDir="column" gap="3">
            <Link href="/docs/typography">Typography</Link>
            <Link href="/docs/button">Button</Link>
            <Link href="/docs/card">Card</Link>
            <Link href="/docs/input">Input</Link>
            <Link href="/docs/alert">Alert</Link>
            <Link href="/docs/banner">Banner</Link>
          </Box>
        </Box>

        {/* Main Content */}
        <Box as="main" flex="1" p={{ base: '6', md: '10' }}>
          {children}
        </Box>
      </Flex>
    </AppProvider>
  )
}
