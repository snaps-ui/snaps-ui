import { defineSemanticTokens } from '@chakra-ui/react'

export const semanticColors = defineSemanticTokens.colors({
  // Presence: Status indicators for user presence
  presence: {
    online: {
      value: { _light: '{colors.moss.500}', _dark: '{colors.moss.500}' },
    },
    offline: {
      value: { _light: '{colors.slate.400}', _dark: '{colors.slate.400}' },
    },
    busy: {
      value: { _light: '{colors.ochre.500}', _dark: '{colors.ochre.500}' },
    },
    dnd: {
      value: {
        _light: '{colors.terracotta.500}',
        _dark: '{colors.terracotta.500}',
      },
    },
    away: {
      value: { _light: '{colors.slate.400}', _dark: '{colors.slate.400}' },
    },
  },

  // Status: Colors for informational messages and states
  status: {
    success: {
      value: { _light: '{colors.moss.500}', _dark: '{colors.moss.500}' },
    },
    error: {
      value: {
        _light: '{colors.terracotta.500}',
        _dark: '{colors.terracotta.500}',
      },
    },
    warning: {
      value: { _light: '{colors.ochre.500}', _dark: '{colors.ochre.500}' },
    },
    info: {
      value: { _light: '{colors.denim.500}', _dark: '{colors.denim.500}' },
    },
  },

  // Sidebar colors
  sidebar: {
    bg: {
      value: { _light: '{colors.stone.100}', _dark: '{colors.black}' },
    },
    fg: {
      value: { _light: '{colors.slate.900}', _dark: '{colors.stone.100}' },
    },
    border: {
      value: { _light: '{colors.stone.200}', _dark: '{colors.slate.800}' },
    },
    accent: {
      bg: {
        value: { _light: '{colors.stone.200}', _dark: '{colors.slate.900}' },
      },
      fg: {
        value: { _light: '{colors.slate.900}', _dark: '{colors.slate.200}' },
      },
    },
  },

  // Backgrounds
  bg: {
    DEFAULT: {
      value: { _light: '{colors.white}', _dark: '{colors.black}' },
    },
    muted: {
      value: { _light: '{colors.stone.50}', _dark: '{colors.slate.950}' },
    },
    subtle: {
      value: { _light: '{colors.stone.100}', _dark: '{colors.slate.900}' },
    },
    emphasized: {
      value: { _light: '{colors.stone.200}', _dark: '{colors.slate.800}' },
    },
    inverted: {
      value: { _light: '{colors.black}', _dark: '{colors.white}' },
    },
    content: {
      value: { _light: '{colors.stone.50}', _dark: '{colors.slate.950}' },
    },
    panel: {
      value: { _light: '{colors.white}', _dark: '{colors.slate.900}' },
    },
    overlay: {
      value: {
        _light:
          'color-mix(in oklch, {colors.white} var(--overlay-translucency, 95%), transparent)',
        _dark:
          'color-mix(in oklch, {colors.slate.900} var(--overlay-translucency, 85%), transparent)',
      },
    },
    backdrop: {
      value: {
        _light: '{colors.blackAlpha.300}',
        _dark: '{colors.blackAlpha.300}',
      },
    },
    error: {
      value: {
        _light: '{colors.terracotta.50}',
        _dark: '{colors.terracotta.950}',
      },
    },
    warning: {
      value: { _light: '{colors.ochre.50}', _dark: '{colors.ochre.950}' },
    },
    success: {
      value: { _light: '{colors.moss.50}', _dark: '{colors.moss.950}' },
    },
    info: {
      value: { _light: '{colors.denim.50}', _dark: '{colors.denim.950}' },
    },
  },

  // Foreground (text) colors
  fg: {
    DEFAULT: {
      value: { _light: '{colors.black}', _dark: '{colors.stone.50}' },
    },
    muted: {
      value: { _light: '{colors.slate.500}', _dark: '{colors.slate.500}' },
    },
    subtle: {
      value: { _light: '{colors.slate.600}', _dark: '{colors.slate.400}' },
    },
    emphasized: {
      value: { _light: '{colors.slate.800}', _dark: '{colors.slate.200}' },
    },
    inverted: {
      value: { _light: '{colors.stone.50}', _dark: '{colors.black}' },
    },
    error: {
      value: {
        _light: '{colors.terracotta.500}',
        _dark: '{colors.terracotta.400}',
      },
    },
    warning: {
      value: { _light: '{colors.ochre.600}', _dark: '{colors.ochre.300}' },
    },
    success: {
      value: { _light: '{colors.moss.600}', _dark: '{colors.moss.300}' },
    },
    info: {
      value: { _light: '{colors.denim.600}', _dark: '{colors.denim.300}' },
    },
  },

  // Border colors
  border: {
    DEFAULT: {
      value: { _light: '{colors.stone.200}', _dark: '{colors.slate.800}' },
    },
    muted: {
      value: { _light: '{colors.stone.50}', _dark: '{colors.slate.950}' },
    },
    subtle: {
      value: { _light: '{colors.stone.100}', _dark: '{colors.slate.900}' },
    },
    emphasized: {
      value: { _light: '{colors.stone.300}', _dark: '{colors.slate.700}' },
    },
    inverted: {
      value: { _light: '{colors.slate.800}', _dark: '{colors.stone.200}' },
    },
    error: {
      value: {
        _light: '{colors.terracotta.500}',
        _dark: '{colors.terracotta.400}',
      },
    },
    warning: {
      value: { _light: '{colors.ochre.500}', _dark: '{colors.ochre.400}' },
    },
    success: {
      value: { _light: '{colors.moss.500}', _dark: '{colors.moss.400}' },
    },
    info: {
      value: { _light: '{colors.denim.500}', _dark: '{colors.denim.400}' },
    },
  },

  // Brand-specific color palettes
  accent: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.denim.700}', _dark: '{colors.denim.300}' },
    },
    muted: {
      value: { _light: '{colors.denim.50}', _dark: '{colors.denim.950}' },
    },
    subtle: {
      value: { _light: '{colors.denim.100}', _dark: '{colors.denim.900}' },
    },
    emphasized: {
      value: { _light: '{colors.denim.200}', _dark: '{colors.denim.800}' },
    },
    solid: {
      value: { _light: '{colors.denim.600}', _dark: '{colors.denim.600}' },
    },
    focusRing: {
      value: { _light: '{colors.denim.600}', _dark: '{colors.denim.600}' },
    },
  },

  neutral: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.slate.800}', _dark: '{colors.slate.200}' },
    },
    muted: {
      value: { _light: '{colors.stone.100}', _dark: '{colors.slate.900}' },
    },
    subtle: {
      value: { _light: '{colors.stone.200}', _dark: '{colors.slate.800}' },
    },
    emphasized: {
      value: { _light: '{colors.stone.300}', _dark: '{colors.slate.700}' },
    },
    solid: {
      value: { _light: '{colors.slate.900}', _dark: '{colors.white}' },
    },
    focusRing: {
      value: { _light: '{colors.slate.600}', _dark: '{colors.slate.600}' },
    },
  },

  slate: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.slate.900}', _dark: '{colors.slate.200}' },
    },
    muted: {
      value: { _light: '{colors.slate.100}', _dark: '{colors.slate.900}' },
    },
    subtle: {
      value: { _light: '{colors.slate.200}', _dark: '{colors.slate.800}' },
    },
    emphasized: {
      value: { _light: '{colors.slate.300}', _dark: '{colors.slate.700}' },
    },
    solid: {
      value: { _light: '{colors.slate.500}', _dark: '{colors.slate.500}' },
    },
    focusRing: {
      value: { _light: '{colors.slate.600}', _dark: '{colors.slate.600}' },
    },
  },

  stone: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.stone.900}', _dark: '{colors.stone.200}' },
    },
    muted: {
      value: { _light: '{colors.stone.50}', _dark: '{colors.stone.950}' },
    },
    subtle: {
      value: { _light: '{colors.stone.100}', _dark: '{colors.stone.900}' },
    },
    emphasized: {
      value: { _light: '{colors.stone.300}', _dark: '{colors.stone.700}' },
    },
    solid: {
      value: { _light: '{colors.stone.500}', _dark: '{colors.stone.500}' },
    },
    focusRing: {
      value: { _light: '{colors.stone.600}', _dark: '{colors.stone.600}' },
    },
  },

  olive: {
    contrast: {
      value: { _light: 'black', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.olive.700}', _dark: '{colors.olive.300}' },
    },
    muted: {
      value: { _light: '{colors.olive.50}', _dark: '{colors.olive.950}' },
    },
    subtle: {
      value: { _light: '{colors.olive.100}', _dark: '{colors.olive.900}' },
    },
    emphasized: {
      value: { _light: '{colors.olive.200}', _dark: '{colors.olive.800}' },
    },
    solid: {
      value: { _light: '{colors.olive.500}', _dark: '{colors.olive.500}' },
    },
    focusRing: {
      value: { _light: '{colors.olive.600}', _dark: '{colors.olive.600}' },
    },
  },

  sage: {
    contrast: {
      value: { _light: 'black', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.sage.700}', _dark: '{colors.sage.300}' },
    },
    muted: {
      value: { _light: '{colors.sage.50}', _dark: '{colors.sage.950}' },
    },
    subtle: {
      value: { _light: '{colors.sage.100}', _dark: '{colors.sage.900}' },
    },
    emphasized: {
      value: { _light: '{colors.sage.200}', _dark: '{colors.sage.800}' },
    },
    solid: {
      value: { _light: '{colors.sage.500}', _dark: '{colors.sage.500}' },
    },
    focusRing: {
      value: { _light: '{colors.sage.600}', _dark: '{colors.sage.600}' },
    },
  },

  sand: {
    contrast: {
      value: { _light: 'black', _dark: 'black' },
    },
    fg: {
      value: { _light: '{colors.sand.700}', _dark: '{colors.sand.300}' },
    },
    muted: {
      value: { _light: '{colors.sand.50}', _dark: '{colors.sand.950}' },
    },
    subtle: {
      value: { _light: '{colors.sand.100}', _dark: '{colors.sand.900}' },
    },
    emphasized: {
      value: { _light: '{colors.sand.200}', _dark: '{colors.sand.800}' },
    },
    solid: {
      value: { _light: '{colors.sand.400}', _dark: '{colors.sand.400}' },
    },
    focusRing: {
      value: { _light: '{colors.sand.400}', _dark: '{colors.sand.400}' },
    },
  },

  clay: {
    contrast: {
      value: { _light: 'black', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.clay.700}', _dark: '{colors.clay.300}' },
    },
    muted: {
      value: { _light: '{colors.clay.50}', _dark: '{colors.clay.950}' },
    },
    subtle: {
      value: { _light: '{colors.clay.100}', _dark: '{colors.clay.900}' },
    },
    emphasized: {
      value: { _light: '{colors.clay.200}', _dark: '{colors.clay.800}' },
    },
    solid: {
      value: { _light: '{colors.clay.400}', _dark: '{colors.clay.400}' },
    },
    focusRing: {
      value: { _light: '{colors.clay.400}', _dark: '{colors.clay.400}' },
    },
  },

  ochre: {
    contrast: {
      value: { _light: 'black', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.ochre.700}', _dark: '{colors.ochre.300}' },
    },
    muted: {
      value: { _light: '{colors.ochre.50}', _dark: '{colors.ochre.950}' },
    },
    subtle: {
      value: { _light: '{colors.ochre.100}', _dark: '{colors.ochre.900}' },
    },
    emphasized: {
      value: { _light: '{colors.ochre.200}', _dark: '{colors.ochre.800}' },
    },
    solid: {
      value: { _light: '{colors.ochre.500}', _dark: '{colors.ochre.500}' },
    },
    focusRing: {
      value: { _light: '{colors.ochre.600}', _dark: '{colors.ochre.600}' },
    },
  },

  terracotta: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: {
        _light: '{colors.terracotta.700}',
        _dark: '{colors.terracotta.300}',
      },
    },
    muted: {
      value: {
        _light: '{colors.terracotta.50}',
        _dark: '{colors.terracotta.950}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.terracotta.100}',
        _dark: '{colors.terracotta.900}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.terracotta.200}',
        _dark: '{colors.terracotta.800}',
      },
    },
    solid: {
      value: {
        _light: '{colors.terracotta.600}',
        _dark: '{colors.terracotta.600}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.terracotta.600}',
        _dark: '{colors.terracotta.600}',
      },
    },
  },

  rust: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.rust.700}', _dark: '{colors.rust.300}' },
    },
    muted: {
      value: { _light: '{colors.rust.50}', _dark: '{colors.rust.950}' },
    },
    subtle: {
      value: { _light: '{colors.rust.100}', _dark: '{colors.rust.900}' },
    },
    emphasized: {
      value: { _light: '{colors.rust.200}', _dark: '{colors.rust.800}' },
    },
    solid: {
      value: { _light: '{colors.rust.600}', _dark: '{colors.rust.600}' },
    },
    focusRing: {
      value: { _light: '{colors.rust.600}', _dark: '{colors.rust.600}' },
    },
  },

  forest: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.forest.700}', _dark: '{colors.forest.300}' },
    },
    muted: {
      value: { _light: '{colors.forest.50}', _dark: '{colors.forest.950}' },
    },
    subtle: {
      value: { _light: '{colors.forest.100}', _dark: '{colors.forest.900}' },
    },
    emphasized: {
      value: { _light: '{colors.forest.200}', _dark: '{colors.forest.800}' },
    },
    solid: {
      value: { _light: '{colors.forest.600}', _dark: '{colors.forest.600}' },
    },
    focusRing: {
      value: { _light: '{colors.forest.600}', _dark: '{colors.forest.600}' },
    },
  },

  moss: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.moss.700}', _dark: '{colors.moss.300}' },
    },
    muted: {
      value: { _light: '{colors.moss.50}', _dark: '{colors.moss.950}' },
    },
    subtle: {
      value: { _light: '{colors.moss.100}', _dark: '{colors.moss.900}' },
    },
    emphasized: {
      value: { _light: '{colors.moss.200}', _dark: '{colors.moss.800}' },
    },
    solid: {
      value: { _light: '{colors.moss.600}', _dark: '{colors.moss.600}' },
    },
    focusRing: {
      value: { _light: '{colors.moss.600}', _dark: '{colors.moss.600}' },
    },
  },

  ocean: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.ocean.700}', _dark: '{colors.ocean.300}' },
    },
    muted: {
      value: { _light: '{colors.ocean.50}', _dark: '{colors.ocean.950}' },
    },
    subtle: {
      value: { _light: '{colors.ocean.100}', _dark: '{colors.ocean.900}' },
    },
    emphasized: {
      value: { _light: '{colors.ocean.200}', _dark: '{colors.ocean.800}' },
    },
    solid: {
      value: { _light: '{colors.ocean.600}', _dark: '{colors.ocean.600}' },
    },
    focusRing: {
      value: { _light: '{colors.ocean.600}', _dark: '{colors.ocean.600}' },
    },
  },

  sky: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.sky.700}', _dark: '{colors.sky.300}' },
    },
    muted: {
      value: { _light: '{colors.sky.50}', _dark: '{colors.sky.950}' },
    },
    subtle: {
      value: { _light: '{colors.sky.100}', _dark: '{colors.sky.900}' },
    },
    emphasized: {
      value: { _light: '{colors.sky.200}', _dark: '{colors.sky.800}' },
    },
    solid: {
      value: { _light: '{colors.sky.600}', _dark: '{colors.sky.600}' },
    },
    focusRing: {
      value: { _light: '{colors.sky.600}', _dark: '{colors.sky.600}' },
    },
  },

  denim: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.denim.700}', _dark: '{colors.denim.300}' },
    },
    muted: {
      value: { _light: '{colors.denim.50}', _dark: '{colors.denim.950}' },
    },
    subtle: {
      value: { _light: '{colors.denim.100}', _dark: '{colors.denim.900}' },
    },
    emphasized: {
      value: { _light: '{colors.denim.200}', _dark: '{colors.denim.800}' },
    },
    solid: {
      value: { _light: '{colors.denim.600}', _dark: '{colors.denim.600}' },
    },
    focusRing: {
      value: { _light: '{colors.denim.600}', _dark: '{colors.denim.600}' },
    },
  },

  plum: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.plum.700}', _dark: '{colors.plum.300}' },
    },
    muted: {
      value: { _light: '{colors.plum.50}', _dark: '{colors.plum.950}' },
    },
    subtle: {
      value: { _light: '{colors.plum.100}', _dark: '{colors.plum.900}' },
    },
    emphasized: {
      value: { _light: '{colors.plum.200}', _dark: '{colors.plum.800}' },
    },
    solid: {
      value: { _light: '{colors.plum.600}', _dark: '{colors.plum.600}' },
    },
    focusRing: {
      value: { _light: '{colors.plum.600}', _dark: '{colors.plum.600}' },
    },
  },

  amethyst: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: {
        _light: '{colors.amethyst.700}',
        _dark: '{colors.amethyst.300}',
      },
    },
    muted: {
      value: { _light: '{colors.amethyst.50}', _dark: '{colors.amethyst.950}' },
    },
    subtle: {
      value: {
        _light: '{colors.amethyst.100}',
        _dark: '{colors.amethyst.900}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.amethyst.200}',
        _dark: '{colors.amethyst.800}',
      },
    },
    solid: {
      value: {
        _light: '{colors.amethyst.600}',
        _dark: '{colors.amethyst.600}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.amethyst.600}',
        _dark: '{colors.amethyst.600}',
      },
    },
  },

  aubergine: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: {
        _light: '{colors.aubergine.700}',
        _dark: '{colors.aubergine.300}',
      },
    },
    muted: {
      value: {
        _light: '{colors.aubergine.50}',
        _dark: '{colors.aubergine.950}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.aubergine.100}',
        _dark: '{colors.aubergine.900}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.aubergine.200}',
        _dark: '{colors.aubergine.800}',
      },
    },
    solid: {
      value: {
        _light: '{colors.aubergine.600}',
        _dark: '{colors.aubergine.600}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.aubergine.600}',
        _dark: '{colors.aubergine.600}',
      },
    },
  },

  blush: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.blush.700}', _dark: '{colors.blush.300}' },
    },
    muted: {
      value: { _light: '{colors.blush.50}', _dark: '{colors.blush.950}' },
    },
    subtle: {
      value: { _light: '{colors.blush.100}', _dark: '{colors.blush.900}' },
    },
    emphasized: {
      value: { _light: '{colors.blush.200}', _dark: '{colors.blush.800}' },
    },
    solid: {
      value: { _light: '{colors.blush.600}', _dark: '{colors.blush.600}' },
    },
    focusRing: {
      value: { _light: '{colors.blush.600}', _dark: '{colors.blush.600}' },
    },
  },

  coral: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.coral.700}', _dark: '{colors.coral.300}' },
    },
    muted: {
      value: { _light: '{colors.coral.50}', _dark: '{colors.coral.950}' },
    },
    subtle: {
      value: { _light: '{colors.coral.100}', _dark: '{colors.coral.900}' },
    },
    emphasized: {
      value: { _light: '{colors.coral.200}', _dark: '{colors.coral.800}' },
    },
    solid: {
      value: { _light: '{colors.coral.600}', _dark: '{colors.coral.600}' },
    },
    focusRing: {
      value: { _light: '{colors.coral.600}', _dark: '{colors.coral.600}' },
    },
  },

  rosehip: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.rosehip.700}', _dark: '{colors.rosehip.300}' },
    },
    muted: {
      value: { _light: '{colors.rosehip.50}', _dark: '{colors.rosehip.950}' },
    },
    subtle: {
      value: { _light: '{colors.rosehip.100}', _dark: '{colors.rosehip.900}' },
    },
    emphasized: {
      value: { _light: '{colors.rosehip.200}', _dark: '{colors.rosehip.800}' },
    },
    solid: {
      value: { _light: '{colors.rosehip.600}', _dark: '{colors.rosehip.600}' },
    },
    focusRing: {
      value: { _light: '{colors.rosehip.600}', _dark: '{colors.rosehip.600}' },
    },
  },
})
