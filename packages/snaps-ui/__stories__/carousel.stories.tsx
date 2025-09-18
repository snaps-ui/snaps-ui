import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Carousel, useCarousel } from '../src/components/carousel'
import { Box } from '../src/components/box'

const meta: Meta<typeof Carousel.Root> = {
  title: 'Components/Carousel',
  component: Carousel.Root,
  parameters: {
    layout: '',
  },
}

export default meta

type Story = StoryObj<typeof Carousel.Root>

export const Default: Story = {
  render: () => {
    const {
      viewportRef,
      scrollPrev,
      scrollNext,
      scrollTo,
      scrollSnaps,
      selectedIndex,
      prevBtnDisabled,
      nextBtnDisabled,
    } = useCarousel({ loop: false })

    return (
      <Box bg={'black'} padding={'10px'}>
        <Carousel.Root>
          <Carousel.Viewport ref={viewportRef}>
            <Carousel.Container>
              {[1, 2, 3, 4].map((i) => (
                <Carousel.Slide
                  key={i}
                  p="4"
                  bg="blue"
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  color={'white'}
                >
                  Slide {i}
                </Carousel.Slide>
              ))}
            </Carousel.Container>
          </Carousel.Viewport>

          <Carousel.Controls>
            <Carousel.ButtonWrapper>
              <Carousel.PrevButton
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
              >
                Prev
              </Carousel.PrevButton>

              <Carousel.NextButton
                onClick={scrollNext}
                disabled={nextBtnDisabled}
              >
                Next
              </Carousel.NextButton>
            </Carousel.ButtonWrapper>

            <Carousel.Dots>
              {scrollSnaps.map((_, index) => (
                <Carousel.Dot
                  key={index}
                  onClick={() => scrollTo(index)}
                  bg={index === selectedIndex ? 'black' : 'white'}
                />
              ))}
            </Carousel.Dots>
          </Carousel.Controls>
        </Carousel.Root>
      </Box>
    )
  },
}
