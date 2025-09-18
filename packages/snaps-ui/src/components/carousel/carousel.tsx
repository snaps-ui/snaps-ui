'use client'

import type {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel'
import {
  type HTMLChakraProps,
  type UnstyledProp,
  type SlotRecipeProps,
  createSlotRecipeContext,
} from '@chakra-ui/react/styled-system'

const {
  withContext,
  withProvider,
  useStyles: useCarouselStyles,
  PropsProvider,
} = createSlotRecipeContext({
  key: 'carousel',
})

export { useCarouselStyles }

/**
 * Base props for the Carousel root element.
 * Includes slot recipe props and `unstyled` support.
 */
export interface CarouselRootBaseProps
  extends SlotRecipeProps<'carousel'>,
    UnstyledProp {}

/**
 * Props for the Carousel root element.
 *
 * @property option - Optional Embla carousel options for configuring behavior (looping, speed, etc.).
 * @property plugins - Optional array of Embla carousel plugins.
 * @property onInit - Optional Callback fired when the Embla instance initializes.
 */

export interface CarouselRootProps
  extends HTMLChakraProps<'div'>,
    CarouselRootBaseProps {
  option?: EmblaOptionsType
  plugins?: EmblaPluginType[]
  onInit?: (embla: EmblaCarouselType) => void
}

/**
 * Root component of the carousel.
 * Provides the style context and handles main Embla initialization.
 */
export const CarouselRoot = withProvider<HTMLDivElement, CarouselRootProps>(
  'div',
  'root'
)

/**
 * Context provider for passing carousel slot recipe props.
 * Can be used to wrap custom child components to inherit carousel styles.
 */
export const CarouselPropsProvider =
  PropsProvider as React.Provider<CarouselRootBaseProps>

/**
 * The viewport of the carousel.
 * This is the scrollable area containing the slides.
 */

export interface CarouselViewportProps
  extends HTMLChakraProps<'div'>,
    UnstyledProp {}

export const CarouselViewport = withContext<
  HTMLDivElement,
  CarouselViewportProps
>('div', 'viewport')

/**
 * The container holding all slides. Usually a flex container.
 */
export interface CarouselContainerProps
  extends HTMLChakraProps<'div'>,
    UnstyledProp {}

export const CarouselContainer = withContext<
  HTMLDivElement,
  CarouselContainerProps
>('div', 'container')

/**
 * A single slide inside the carousel.
 */
export interface CarouselSlideProps
  extends HTMLChakraProps<'div'>,
    UnstyledProp {}

export const CarouselSlide = withContext<HTMLDivElement, CarouselSlideProps>(
  'div',
  'slide'
)

/**
 * Container for carousel controls such as previous/next buttons and dots.
 */
export interface CarouselControlsProps
  extends HTMLChakraProps<'div'>,
    UnstyledProp {}

export const CarouselControls = withContext<
  HTMLDivElement,
  CarouselControlsProps
>('div', 'controls')

/**
 * Wrapper for carousel navigation buttons.
 * Useful for grouping prev/next buttons together.
 */
export interface CarouselButtonWrapperProps
  extends HTMLChakraProps<'div'>,
    UnstyledProp {}

export const CarouselButtonWrapper = withContext<
  HTMLDivElement,
  CarouselButtonWrapperProps
>('div', 'buttonsWapper')

/**
 * Previous slide button.
 * Usually placed inside `CarouselButtonWrapper`.
 */
export interface CarouselPrevButtonProps
  extends HTMLChakraProps<'button'>,
    UnstyledProp {}

export const CarouselPrevButton = withContext<
  HTMLButtonElement,
  CarouselPrevButtonProps
>('button', 'prevButton')

/**
 * Next slide button.
 * Usually placed inside `CarouselButtonWrapper`.
 */
export interface CarouselNextButtonProps
  extends HTMLChakraProps<'button'>,
    UnstyledProp {}

export const CarouselNextButton = withContext<
  HTMLButtonElement,
  CarouselNextButtonProps
>('button', 'nextButton')

/**
 * Dots container for pagination indicators.
 */

export interface CarouselDotsProps
  extends HTMLChakraProps<'div'>,
    UnstyledProp {}

export const CarouselDots = withContext<HTMLDivElement, CarouselDotsProps>(
  'div',
  'dots'
)

/**
 * Single dot for carousel pagination.
 * Typically rendered as one per slide.
 */
export interface CarouselDotProps
  extends HTMLChakraProps<'button'>,
    UnstyledProp {}

export const CarouselDot = withContext<HTMLButtonElement, CarouselDotProps>(
  'button',
  'dot'
)
