import { defineTokens, defineSemanticTokens } from '@pandacss/dev'

export const createColorTokens = (
  name: string,
  light: any,
  dark: any,
  fgLight?: string,
  fgDark?: string
) => {
  const tokens = defineTokens.colors({
    light,
    dark,
  })

  const semanticTokens = defineSemanticTokens.colors({
    '1': {
      value: {
        _light: `{colors.${name}.light.1}`,
        _dark: `{colors.${name}.dark.1}`,
      },
    },
    '2': {
      value: {
        _light: `{colors.${name}.light.2}`,
        _dark: `{colors.${name}.dark.2}`,
      },
    },
    '3': {
      value: {
        _light: `{colors.${name}.light.3}`,
        _dark: `{colors.${name}.dark.3}`,
      },
    },
    '4': {
      value: {
        _light: `{colors.${name}.light.4}`,
        _dark: `{colors.${name}.dark.4}`,
      },
    },
    '5': {
      value: {
        _light: `{colors.${name}.light.5}`,
        _dark: `{colors.${name}.dark.5}`,
      },
    },
    '6': {
      value: {
        _light: `{colors.${name}.light.6}`,
        _dark: `{colors.${name}.dark.6}`,
      },
    },
    '7': {
      value: {
        _light: `{colors.${name}.light.7}`,
        _dark: `{colors.${name}.dark.7}`,
      },
    },
    '8': {
      value: {
        _light: `{colors.${name}.light.8}`,
        _dark: `{colors.${name}.dark.8}`,
      },
    },
    '9': {
      value: {
        _light: `{colors.${name}.light.9}`,
        _dark: `{colors.${name}.dark.9}`,
      },
    },
    '10': {
      value: {
        _light: `{colors.${name}.light.10}`,
        _dark: `{colors.${name}.dark.10}`,
      },
    },
    '11': {
      value: {
        _light: `{colors.${name}.light.11}`,
        _dark: `{colors.${name}.dark.11}`,
      },
    },
    '12': {
      value: {
        _light: `{colors.${name}.light.12}`,
        _dark: `{colors.${name}.dark.12}`,
      },
    },
    alpha1: {
      value: {
        _light: `{colors.${name}.light.alpha1}`,
        _dark: `{colors.${name}.dark.alpha1}`,
      },
    },
    alpha2: {
      value: {
        _light: `{colors.${name}.light.alpha2}`,
        _dark: `{colors.${name}.dark.alpha2}`,
      },
    },
    alpha3: {
      value: {
        _light: `{colors.${name}.light.alpha3}`,
        _dark: `{colors.${name}.dark.alpha3}`,
      },
    },
    alpha4: {
      value: {
        _light: `{colors.${name}.light.alpha4}`,
        _dark: `{colors.${name}.dark.alpha4}`,
      },
    },
    alpha5: {
      value: {
        _light: `{colors.${name}.light.alpha5}`,
        _dark: `{colors.${name}.dark.alpha5}`,
      },
    },
    alpha6: {
      value: {
        _light: `{colors.${name}.light.alpha6}`,
        _dark: `{colors.${name}.dark.alpha6}`,
      },
    },
    alpha7: {
      value: {
        _light: `{colors.${name}.light.alpha7}`,
        _dark: `{colors.${name}.dark.alpha7}`,
      },
    },
    alpha8: {
      value: {
        _light: `{colors.${name}.light.alpha8}`,
        _dark: `{colors.${name}.dark.alpha8}`,
      },
    },
    alpha9: {
      value: {
        _light: `{colors.${name}.light.alpha9}`,
        _dark: `{colors.${name}.dark.alpha9}`,
      },
    },
    alpha10: {
      value: {
        _light: `{colors.${name}.light.alpha10}`,
        _dark: `{colors.${name}.dark.alpha10}`,
      },
    },
    alpha11: {
      value: {
        _light: `{colors.${name}.light.alpha11}`,
        _dark: `{colors.${name}.dark.alpha11}`,
      },
    },
    alpha12: {
      value: {
        _light: `{colors.${name}.light.alpha12}`,
        _dark: `{colors.${name}.dark.alpha12}`,
      },
    },
    default: {
      value: {
        _light: `{colors.${name}.light.9}`,
        _dark: `{colors.${name}.dark.9}`,
      },
    },
    emphasized: {
      value: {
        _light: `{colors.${name}.light.10}`,
        _dark: `{colors.${name}.dark.10}`,
      },
    },
    fg: {
      value: {
        _light: fgLight ? `{colors.${fgLight}}` : 'white',
        _dark: fgDark ? `{colors.${fgDark}}` : 'white',
      },
    },
    text: {
      value: {
        _light: `{colors.${name}.light.alpha11}`,
        _dark: `{colors.${name}.dark.alpha11}`,
      },
    },
  })

  return {
    name,
    tokens,
    semanticTokens,
  }
}
