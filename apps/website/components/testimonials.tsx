'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Box } from '@snaps-ui/react/box'
import { Card } from '@snaps-ui/react/card'
import { Grid, GridItem } from '@snaps-ui/react/grid'
import { Stack, HStack } from '@snaps-ui/react/stack'
import { Text } from '@snaps-ui/react/text'
import { Flex } from '@snaps-ui/react/flex'
import { FaLinkedin } from 'react-icons/fa'

const getRandomColor = () => {
  const colors = [
    '#FF6347',
    '#FFD700',
    '#ADFF2F',
    '#00CED1',
    '#9370DB',
    '#FF69B4',
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

const testimonials = [
  {
    name: 'Nelson Chinedu',
    role: 'Frontend Engineer',
    image: '/nelson.jpeg',
    text: 'Snaps UI completely changed how I build apps. Everything is composable and the design system is consistent out of the box.',
    linkUrl: 'https://www.linkedin.com/in/nelson-chinedu',
  },
  {
    name: 'Aymeric PINEAU',
    role: 'Founder Intlayer',
    image: 'https://avatars.githubusercontent.com/u/62554073?v=4',
    text: 'I love how customizable the components are. I was able to theme my entire dashboard in just a few minutes.',
    linkUrl: 'https://www.linkedin.com/in/aymericpineau',
  },
  {
    name: 'Emeka Okolo',
    role: 'Software Developer',
    text: 'The accessibility features built-in are a game changer. My team no longer worries about ARIA roles and keyboard navigation.',
  },
  {
    name: 'Sophia Martins',
    role: 'Engineering Lead',
    text: 'Documentation is super clean and the developer experience feels polished. It’s like Chakra UI, but faster to work with.',
  },
  {
    name: 'David Kim',
    role: 'Senior Frontend Developer',
    text: 'Snaps UI has sped up our prototyping process massively. We ship features twice as fast now.',
  },
  {
    name: 'Elena Petrova',
    role: 'Frontend Lead',
    text: 'The gradient styling and brand-first approach really stand out. Our product finally looks modern and consistent.',
  },
]

export const Testimonials = () => {
  const [initialImages, setInitialImages] = useState<{ [key: string]: string }>(
    {}
  )

  // this will update with avater component from snaps ui
  useEffect(() => {
    const generateInitialImage = (name: string): string => {
      const initials = name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
      const size = 40
      const color = getRandomColor()
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')

      if (!ctx) return ''

      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = '#FFFFFF'
      ctx.font = `bold ${size / 2}px sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(initials, size / 2, size / 2)

      return canvas.toDataURL()
    }

    const newInitialImages: { [key: string]: string } = {}
    testimonials.forEach((testimonial) => {
      if (!testimonial.image) {
        newInitialImages[testimonial.name] = generateInitialImage(
          testimonial.name
        )
      }
    })
    setInitialImages(newInitialImages)
  }, [])

  return (
    <Box
      as="section"
      borderTop="1px solid"
      borderColor={{ base: 'blackAlpha.200', _dark: 'whiteAlpha.200' }}
      bg={{ base: 'whiteAlpha.50', _dark: 'blackAlpha.50' }}
      backdropFilter="blur(10px)"
      px={{ base: '6', md: '12' }}
      py="12"
      mt="16"
    >
      <Box textAlign={'left'} mb={'25px'} width={'90%'} mx={'auto'}>
        <Text
          fontWeight="extrabold"
          fontSize={{ base: '18px', md: '30px' }}
          color={'accent.contrast'}
        >
          Trusted by developers, startups, and enterprises
        </Text>

        <Text
          fontWeight="extrabold"
          fontSize={{ base: '13px', md: '16px' }}
          color={'accent.contrast'}
        >
          Join thousands of developers and companies around the world.
        </Text>
      </Box>

      <Grid
        w={{ base: '100%', md: '90%' }}
        mx="auto"
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={{ base: '2', md: '3' }}
      >
        {testimonials.map(({ name, role, image, text, linkUrl }) => {
          const src = image || initialImages[name]

          return (
            <GridItem key={name} height="min-content">
              <Card.Root>
                <Card.Body gap="2">
                  <Flex
                    justifyContent={'space-between'}
                    justifyItems={'flex-start'}
                  >
                    <HStack mb="6" gap="3">
                      {src && (
                        <Image
                          src={src}
                          width={40}
                          height={40}
                          alt={name}
                          style={{ borderRadius: '50%' }}
                          placeholder={'blur'}
                          blurDataURL={
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=='
                          }
                        />
                      )}
                      <Stack gap="0">
                        <Card.Title mt="2">{name}</Card.Title>
                        <Text color="gray.400" textStyle="sm">
                          {role}
                        </Text>
                      </Stack>
                    </HStack>

                    {linkUrl && (
                      <Link
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin size={'18px'} />
                      </Link>
                    )}
                  </Flex>
                  <Card.Description>{text}</Card.Description>
                </Card.Body>
              </Card.Root>
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}
