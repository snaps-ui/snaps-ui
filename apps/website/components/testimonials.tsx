'use client'

import Link from 'next/link'
import { Box } from '@snaps-ui/react/box'
import { Card } from '@snaps-ui/react/card'
import { Grid, GridItem } from '@snaps-ui/react/grid'
import { Flex } from '@snaps-ui/react/flex'
import { Typography } from '@snaps-ui/react/typography'
import { Persona } from '@snaps-ui/react/persona'
import { FaLinkedin } from 'react-icons/fa'

import { testimonials } from '~/constant/testimonials'

export const Testimonials = () => {
  return (
    <Box as="section" px={{ base: '6', md: '12' }} py="12" mt="16">
      <Box
        textAlign={'left'}
        mb={'25px'}
        width={'90%'}
        mx={'auto'}
        colorPalette={'red'}
      >
        <Typography variant="h4" color={'fg.muted'}>
          Trusted by developers, startups, and enterprises
        </Typography>

        <Typography variant="body1" color={'fg.muted'}>
          Join thousands of developers and companies around the world.
        </Typography>
      </Box>

      <Grid
        w={{ base: '100%', md: '90%' }}
        mx="auto"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={{ base: '2', md: '3' }}
      >
        {testimonials.map(({ name, role, image, text, linkUrl }) => {
          return (
            <GridItem key={name} height="min-content">
              <Card.Root>
                <Card.Body gap="2">
                  <Card.Header>
                    <Flex
                      justifyContent={'space-between'}
                      alignItems={'flex-start'}
                    >
                      <Persona
                        name={name}
                        title={role}
                        img={image}
                        imgSize="xl"
                      />

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
                  </Card.Header>
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
