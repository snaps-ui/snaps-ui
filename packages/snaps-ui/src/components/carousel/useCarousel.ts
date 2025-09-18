'use client'

import { useEffect, useState, useCallback } from 'react'
import type {
  EmblaOptionsType,
  EmblaPluginType,
  EmblaCarouselType,
} from 'embla-carousel'
import type { EmblaViewportRefType } from 'embla-carousel-react'
import useEmblaCarousel from 'embla-carousel-react'

interface UseCarouselReturn {
  viewportRef: EmblaViewportRefType
  api: EmblaCarouselType | undefined
  selectedIndex: number
  scrollSnaps: number[]
  scrollNext: () => void
  scrollPrev: () => void
  scrollTo: (index: number) => void
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
}

export function useCarousel(
  options?: EmblaOptionsType,
  plugins?: EmblaPluginType[]
): UseCarouselReturn {
  const [viewportRef, api] = useEmblaCarousel(options, plugins)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollTo = useCallback(
    (index: number) => api && api.scrollTo(index),
    [api]
  )

  const scrollPrev = useCallback(() => api && api.scrollPrev(), [api])

  const scrollNext = useCallback(() => api && api.scrollNext(), [api])

  const onSelect = useCallback(
    (embla?: EmblaCarouselType) => {
      const emblaApi = embla ?? api
      if (!emblaApi) return
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    },
    [api]
  )

  useEffect(() => {
    if (!api) return

    setScrollSnaps(api.scrollSnapList())
    setSelectedIndex(api.selectedScrollSnap())

    //run once on mount so disabled states are correct initially
    onSelect()

    api.on('select', onSelect)
    api.on('reInit', onSelect)

    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
    }
  }, [api, onSelect])

  return {
    viewportRef,
    api,
    selectedIndex,
    scrollSnaps,
    scrollNext,
    scrollPrev,
    scrollTo,
    prevBtnDisabled,
    nextBtnDisabled,
  }
}
