import { defineSlotRecipe } from '@chakra-ui/react/styled-system'

export const carouselSlotRecipe = defineSlotRecipe({
  className: 'snaps-ui-carousel',
  slots: [
    'root',
    'viewport',
    'container',
    'slide',
    'controls',
    'buttonsWapper',
    'prevButton',
    'nextButton',
    'dots',
    'dot',
  ],
  base: (() => {
    // shared button styles
    const navButtonBase = {
      rounded: 'full',
      color: 'white',
      border: '1px solid white',
      p: 2,
      appearance: 'none',
      background: 'transparent',
      touchAction: 'manipulation',
      display: 'inline-flex',
      textDecoration: 'none',
      zIndex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      _hover: { bg: 'blackAlpha.950' },
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.5,
        _hover: { bg: 'transparent' },
      },
    }

    return {
      root: {
        position: 'relative',
        overflow: 'hidden',
      },
      viewport: {
        width: '100%',
        overflow: 'hidden',
      },
      container: {
        display: 'flex',
      },
      slide: {
        flex: '0 0 100%',
        transform: 'translate3d(0, 0, 0)',
        height: '300px',
      },
      controls: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
        mb: 2,
      },
      buttonsWapper: {
        display: 'flex',
        gap: 2,
      },
      prevButton: { ...navButtonBase },
      nextButton: { ...navButtonBase },
      dots: { display: 'flex', justifyContent: 'center' },
      dot: {
        width: '10px',
        height: '10px',
        borderRadius: 'full',
        border: '1px solid white',
        bg: 'white',
        mx: 1,
        cursor: 'pointer',
        _selected: { bg: 'blue.500' },
      },
    }
  })(),
})
