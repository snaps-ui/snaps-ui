import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fcfcfc' },
    '2': { value: '#f9f9f9' },
    '3': { value: '#f0f0f0' },
    '4': { value: '#e8e8e8' },
    '5': { value: '#e0e0e0' },
    '6': { value: '#d9d9d9' },
    '7': { value: '#cecece' },
    '8': { value: '#bbbbbb' },
    '9': { value: '#8d8d8d' },
    '10': { value: '#838383' },
    '11': { value: '#646464' },
    '12': { value: '#202020' },
    alpha1: { value: '#00000003' },
    alpha2: { value: '#00000006' },
    alpha3: { value: '#0000000f' },
    alpha4: { value: '#00000017' },
    alpha5: { value: '#0000001f' },
    alpha6: { value: '#00000026' },
    alpha7: { value: '#00000031' },
    alpha8: { value: '#00000044' },
    alpha9: { value: '#00000072' },
    alpha10: { value: '#0000007c' },
    alpha11: { value: '#0000009b' },
    alpha12: { value: '#000000df' },
  },
  dark: {
    '1': { value: '#111111' },
    '2': { value: '#191919' },
    '3': { value: '#222222' },
    '4': { value: '#2a2a2a' },
    '5': { value: '#313131' },
    '6': { value: '#3a3a3a' },
    '7': { value: '#484848' },
    '8': { value: '#606060' },
    '9': { value: '#6e6e6e' },
    '10': { value: '#7b7b7b' },
    '11': { value: '#b4b4b4' },
    '12': { value: '#eeeeee' },
    alpha1: { value: '#00000000' },
    alpha2: { value: '#ffffff09' },
    alpha3: { value: '#ffffff12' },
    alpha4: { value: '#ffffff1b' },
    alpha5: { value: '#ffffff22' },
    alpha6: { value: '#ffffff2c' },
    alpha7: { value: '#ffffff3b' },
    alpha8: { value: '#ffffff55' },
    alpha9: { value: '#ffffff64' },
    alpha10: { value: '#ffffff72' },
    alpha11: { value: '#ffffffaf' },
    alpha12: { value: '#ffffffed' },
  },
})

const semanticTokens = defineSemanticTokens.colors({
  '1': {
    value: {
      _light: '{colors.neutral.light.1}',
      _dark: '{colors.neutral.dark.1}',
    },
  },
  '2': {
    value: {
      _light: '{colors.neutral.light.2}',
      _dark: '{colors.neutral.dark.2}',
    },
  },
  '3': {
    value: {
      _light: '{colors.neutral.light.3}',
      _dark: '{colors.neutral.dark.3}',
    },
  },
  '4': {
    value: {
      _light: '{colors.neutral.light.4}',
      _dark: '{colors.neutral.dark.4}',
    },
  },
  '5': {
    value: {
      _light: '{colors.neutral.light.5}',
      _dark: '{colors.neutral.dark.5}',
    },
  },
  '6': {
    value: {
      _light: '{colors.neutral.light.6}',
      _dark: '{colors.neutral.dark.6}',
    },
  },
  '7': {
    value: {
      _light: '{colors.neutral.light.7}',
      _dark: '{colors.neutral.dark.7}',
    },
  },
  '8': {
    value: {
      _light: '{colors.neutral.light.8}',
      _dark: '{colors.neutral.dark.8}',
    },
  },
  '9': {
    value: {
      _light: '{colors.neutral.light.9}',
      _dark: '{colors.neutral.dark.9}',
    },
  },
  '10': {
    value: {
      _light: '{colors.neutral.light.10}',
      _dark: '{colors.neutral.dark.10}',
    },
  },
  '11': {
    value: {
      _light: '{colors.neutral.light.11}',
      _dark: '{colors.neutral.dark.11}',
    },
  },
  '12': {
    value: {
      _light: '{colors.neutral.light.12}',
      _dark: '{colors.neutral.dark.12}',
    },
  },
  alpha1: {
    value: {
      _light: '{colors.neutral.light.alpha1}',
      _dark: '{colors.neutral.dark.alpha1}',
    },
  },
  alpha2: {
    value: {
      _light: '{colors.neutral.light.alpha2}',
      _dark: '{colors.neutral.dark.alpha2}',
    },
  },
  alpha3: {
    value: {
      _light: '{colors.neutral.light.alpha3}',
      _dark: '{colors.neutral.dark.alpha3}',
    },
  },
  alpha4: {
    value: {
      _light: '{colors.neutral.light.alpha4}',
      _dark: '{colors.neutral.dark.alpha4}',
    },
  },
  alpha5: {
    value: {
      _light: '{colors.neutral.light.alpha5}',
      _dark: '{colors.neutral.dark.alpha5}',
    },
  },
  alpha6: {
    value: {
      _light: '{colors.neutral.light.alpha6}',
      _dark: '{colors.neutral.dark.alpha6}',
    },
  },
  alpha7: {
    value: {
      _light: '{colors.neutral.light.alpha7}',
      _dark: '{colors.neutral.dark.alpha7}',
    },
  },
  alpha8: {
    value: {
      _light: '{colors.neutral.light.alpha8}',
      _dark: '{colors.neutral.dark.alpha8}',
    },
  },
  alpha9: {
    value: {
      _light: '{colors.neutral.light.alpha9}',
      _dark: '{colors.neutral.dark.alpha9}',
    },
  },
  alpha10: {
    value: {
      _light: '{colors.neutral.light.alpha10}',
      _dark: '{colors.neutral.dark.alpha10}',
    },
  },
  alpha11: {
    value: {
      _light: '{colors.neutral.light.alpha11}',
      _dark: '{colors.neutral.dark.alpha11}',
    },
  },
  alpha12: {
    value: {
      _light: '{colors.neutral.light.alpha12}',
      _dark: '{colors.neutral.dark.alpha12}',
    },
  },

  default: { value: { _light: 'black', _dark: 'white' } },
  emphasized: {
    value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' },
  },
  fg: { value: { _light: 'white', _dark: 'black' } },
  text: { value: { _light: 'black', _dark: 'white' } },
})

export default {
  name: 'neutral',
  tokens,
  semanticTokens,
}
