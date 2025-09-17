'use client'

import { Box } from '@snaps-ui/react/box'
import { Container } from '@snaps-ui/react/container'
import { Center } from '@snaps-ui/react/center'
import { Button } from '@snaps-ui/react/button'
import { Flex } from '@snaps-ui/react/flex'
import { Stack } from '@snaps-ui/react/stack'
import { SiChakraui } from 'react-icons/si'
import { IoLogoReact } from 'react-icons/io5'
import { SiTypescript } from 'react-icons/si'
import Link from 'next/link'
import { FaTerminal } from 'react-icons/fa'

import { Typography } from '~/components/typography'

const Logos = [
  {
    href: 'https://chakra-ui.com/',
    label: 'Chakra UI',
    icon: <SiChakraui size={32} color="#319795" />,
  },
  {
    href: 'https://react.dev/',
    label: 'React',
    icon: <IoLogoReact size={32} color="#61DAFB" />,
  },
  {
    href: 'https://www.typescriptlang.org/',
    label: 'Typescript',
    icon: <SiTypescript size={32} color="#3178C6" />,
  },
]

export const HeroSection = () => {
  return (
    <Box as={'section'} height={'auto'}>
      <Container maxW="8xl">
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={'15px'}
          width={{ base: '90%', md: '65%' }}
          m={'5rem auto'}
          textAlign={'center'}
        >
          <Typography
            variant="heading"
            fontSize={{ base: '30px', md: '65px' }}
            css={{
              '--c1':
                'var(--chakra-colors-snaps-400, var(--chakra-colors-brand-500, #6366F1))',
              '--c2':
                'var(--chakra-colors-snaps-800, var(--chakra-colors-brand-700, #7C3AED))',

              _dark: {
                '--c1':
                  'var(--chakra-colors-snaps-300, var(--chakra-colors-brand-300, #A5B4FC))',
                '--c2':
                  'var(--chakra-colors-snaps-600, var(--chakra-colors-brand-500, #6366F1))',
              },

              backgroundImage: 'linear-gradient(80deg, var(--c1), var(--c2))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Build modern apps with speed and flexibility
          </Typography>
          <Typography variant="title" my={'10px'} color={'accent.contrast'}>
            Snaps UI is a collection of prebuilt, customizable Chakra&nbsp;UI
            components. Ship faster with a consistent design system, intuitive
            APIs, and production-ready building blocks for your next project.
          </Typography>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            gap="3"
            mt={'25px'}
            mb={'5px'}
          >
            <Button variant={'solid'} size={{ base: 'sm', md: 'lg' }}>
              Get Started
            </Button>

            <Center
              as="pre"
              minH="12"
              shadow="inset"
              bg={{ _light: 'fg.inverted', _dark: 'teal.400' }}
              color="bg"
              textStyle="sm"
              fontWeight="semibold"
              ps="4"
              pe="6"
              rounded="l2"
              gap="2.5"
            >
              <FaTerminal />
              npm i @snaps-ui/react
            </Center>
          </Stack>

          <Box mt="2rem" opacity={0.7}>
            <Typography variant="body3" mb={4} mt={1}>
              Powered by
            </Typography>

            <Flex align="center" justify="center" gap={8} display={'flex'}>
              {Logos.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flex
                    direction="column"
                    align="center"
                    gap={3}
                    _hover={{
                      textDecoration: 'none',
                      transform: 'scale(1.05)',
                    }}
                  >
                    <Box fontSize={{ base: 'sm', md: '2xl' }}>{icon}</Box>
                    <Typography variant="body3" mt={1}>
                      {label}
                    </Typography>
                  </Flex>
                </Link>
              ))}
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
