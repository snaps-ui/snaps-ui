// import { defineLayerStyles } from '@chakra-ui/react'

// export const layerStyles: any = defineLayerStyles({
//   // fill: some background color + color combination
//   'fill.muted': {
//     value: {
//       background: 'colorPalette.muted',
//       color: 'colorPalette.fg',
//     },
//   },
//   'fill.subtle': {
//     value: {
//       background: 'colorPalette.subtle',
//       color: 'colorPalette.fg',
//     },
//   },
//   'fill.surface': {
//     value: {
//       background: 'colorPalette.muted',
//       color: 'colorPalette.fg',
//       boxShadow: 'inset 0 0 0px 1px var(--shadow-color)',
//       boxShadowColor: 'colorPalette.subtle',
//     },
//   },
//   'fill.solid': {
//     value: {
//       background: 'colorPalette.solid',
//       color: 'colorPalette.contrast',
//     },
//   },

//   // outline: some border color + color combination
//   'outline.subtle': {
//     value: {
//       color: 'colorPalette.fg',
//       boxShadow: 'inset 0 0 0px 1px var(--shadow-color)',
//       boxShadowColor: 'colorPalette.subtle',
//     },
//   },
//   'outline.solid': {
//     value: {
//       borderWidth: '1px',
//       borderColor: 'colorPalette.solid',
//       color: 'colorPalette.fg',
//     },
//   },

//   // indicator: floating border color or left/bottom border
//   'indicator.bottom': {
//     value: {
//       position: 'relative',
//       '--indicator-color-fallback': 'colors.colorPalette.solid',
//       _before: {
//         content: `""`,
//         position: 'absolute',
//         bottom: 'var(--indicator-offset-y, 0)',
//         insetInline: 'var(--indicator-offset-x, 0)',
//         height: 'var(--indicator-thickness, 3px)',
//         borderTopLeftRadius: 'var(--indicator-thickness, 3px)',
//         borderTopRightRadius: 'var(--indicator-thickness, 3px)',
//         background: 'var(--indicator-color, var(--indicator-color-fallback))',
//       },
//     },
//   },
//   'indicator.top': {
//     value: {
//       position: 'relative',
//       '--indicator-color-fallback': 'colors.colorPalette.solid',
//       _before: {
//         content: `""`,
//         position: 'absolute',
//         top: 'var(--indicator-offset-y, 0)',
//         insetInline: 'var(--indicator-offset-x, 0)',
//         height: 'var(--indicator-thickness, 3px)',
//         borderBottomLeftRadius: 'var(--indicator-thickness, 3px)',
//         borderBottomRightRadius: 'var(--indicator-thickness, 3px)',
//         background: 'var(--indicator-color, var(--indicator-color-fallback))',
//       },
//     },
//   },
//   'indicator.start': {
//     value: {
//       position: 'relative',
//       '--indicator-color-fallback': 'colors.colorPalette.solid',
//       _before: {
//         content: `""`,
//         position: 'absolute',
//         insetInlineStart: 'var(--indicator-offset-x, 0)',
//         insetBlock: 'var(--indicator-offset-y, 0)',
//         width: 'var(--indicator-thickness, 3px)',
//         borderTopLeftRadius: 'var(--indicator-thickness, 3px)',
//         borderBottomLeftRadius: 'var(--indicator-thickness, 3px)',
//         background: 'var(--indicator-color, var(--indicator-color-fallback))',
//       },
//     },
//   },
//   'indicator.end': {
//     value: {
//       position: 'relative',
//       '--indicator-color-fallback': 'colors.colorPalette.solid',
//       _before: {
//         content: `""`,
//         position: 'absolute',
//         insetInlineEnd: 'var(--indicator-offset-x, 0)',
//         insetBlock: 'var(--indicator-offset-y, 0)',
//         width: 'var(--indicator-thickness, 3px)',
//         borderTopRightRadius: 'var(--indicator-thickness, 3px)',
//         borderBottomRightRadius: 'var(--indicator-thickness, 3px)',
//         background: 'var(--indicator-color, var(--indicator-color-fallback))',
//       },
//     },
//   },

//   disabled: {
//     value: {
//       opacity: '0.5',
//       cursor: 'not-allowed',
//     },
//   },

//   none: {
//     value: {},
//   },

//   overlay: {
//     value: {
//       bg: 'bg.overlay',
//       backdropFilter: 'var(--overlay-effect)',
//       borderRadius: 'panel.lg',
//       boxShadow: 'overlay',
//     },
//   },

//   backdrop: {
//     value: {
//       bg: 'bg.backdrop',
//       backdropFilter: 'var(--backdrop-effect)',
//     },
//   },
// })

import { defineLayerStyles } from '@chakra-ui/react'

export const layerStyles: any = defineLayerStyles({
  // Fills: your background and text color combinations
  'fill.muted': {
    value: {
      background: 'colors.stone.100', // A light, neutral background
      color: 'colors.slate.800', // A dark, readable text color
    },
  },
  'fill.subtle': {
    value: {
      background: 'colors.stone.50', // A very light, almost white background
      color: 'colors.slate.900', // A strong, readable text color
    },
  },
  'fill.surface': {
    value: {
      background: 'colors.stone.50',
      color: 'colors.slate.900',
      boxShadow: 'inset 0 0 0px 1px var(--shadow-color)',
      boxShadowColor: 'colors.stone.300', // A subtle border for surfaces
    },
  },
  'fill.solid': {
    value: {
      background: 'colors.denim.500', // A prominent, solid background from your brand's accent palette
      color: 'colors.denim.50', // A very light color for contrast on the dark background
    },
  },

  // Outlines: your border and text color combinations
  'outline.subtle': {
    value: {
      color: 'colors.slate.900', // Dark text
      boxShadow: 'inset 0 0 0px 1px var(--shadow-color)',
      boxShadowColor: 'colors.slate.200', // A very light, subtle border
    },
  },
  'outline.solid': {
    value: {
      borderWidth: '1px',
      borderColor: 'colors.denim.500', // A prominent, solid border from your accent palette
      color: 'colors.slate.900', // Dark text
    },
  },

  // Indicator: a floating border color
  'indicator.bottom': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'colors.denim.500', // The fallback color is a prominent color from your palette
      _before: {
        content: `""`,
        position: 'absolute',
        bottom: 'var(--indicator-offset-y, 0)',
        insetInline: 'var(--indicator-offset-x, 0)',
        height: 'var(--indicator-thickness, 3px)',
        borderTopLeftRadius: 'var(--indicator-thickness, 3px)',
        borderTopRightRadius: 'var(--indicator-thickness, 3px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
  'indicator.top': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'colors.denim.500',
      _before: {
        content: `""`,
        position: 'absolute',
        top: 'var(--indicator-offset-y, 0)',
        insetInline: 'var(--indicator-offset-x, 0)',
        height: 'var(--indicator-thickness, 3px)',
        borderBottomLeftRadius: 'var(--indicator-thickness, 3px)',
        borderBottomRightRadius: 'var(--indicator-thickness, 3px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
  'indicator.start': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'colors.denim.500',
      _before: {
        content: `""`,
        position: 'absolute',
        insetInlineStart: 'var(--indicator-offset-x, 0)',
        insetBlock: 'var(--indicator-offset-y, 0)',
        width: 'var(--indicator-thickness, 3px)',
        borderTopLeftRadius: 'var(--indicator-thickness, 3px)',
        borderBottomLeftRadius: 'var(--indicator-thickness, 3px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
  'indicator.end': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'colors.denim.500',
      _before: {
        content: `""`,
        position: 'absolute',
        insetInlineEnd: 'var(--indicator-offset-x, 0)',
        insetBlock: 'var(--indicator-offset-y, 0)',
        width: 'var(--indicator-thickness, 3px)',
        borderTopRightRadius: 'var(--indicator-thickness, 3px)',
        borderBottomRightRadius: 'var(--indicator-thickness, 3px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },

  disabled: {
    value: {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
  },

  none: {
    value: {},
  },

  overlay: {
    value: {
      bg: 'colors.blackAlpha.700', // A dark, semi-transparent overlay
      backdropFilter: 'var(--overlay-effect)',
      borderRadius: 'panel.lg',
      boxShadow: 'overlay',
    },
  },

  backdrop: {
    value: {
      bg: 'colors.blackAlpha.700',
      backdropFilter: 'var(--backdrop-effect)',
    },
  },
})
