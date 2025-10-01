import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fcfdfc' },
    '2': { value: '#f8faf8' },
    '3': { value: '#eff1ef' },
    '4': { value: '#e7e9e7' },
    '5': { value: '#dfe2df' },
    '6': { value: '#d7dad7' },
    '7': { value: '#cccfcc' },
    '8': { value: '#b9bcb8' },
    '9': { value: '#898e87' },
    '10': { value: '#7f847d' },
    '11': { value: '#60655f' },
    '12': { value: '#1d211c' },
    alpha1: { value: '#00550003' },
    alpha2: { value: '#00490007' },
    alpha3: { value: '#00200010' },
    alpha4: { value: '#00160018' },
    alpha5: { value: '#00180020' },
    alpha6: { value: '#00140028' },
    alpha7: { value: '#000f0033' },
    alpha8: { value: '#040f0047' },
    alpha9: { value: '#050f0078' },
    alpha10: { value: '#040e0082' },
    alpha11: { value: '#020a00a0' },
    alpha12: { value: '#010600e3' },
  },
  dark: {
    '1': { value: '#111210' },
    '2': { value: '#181917' },
    '3': { value: '#212220' },
    '4': { value: '#282a27' },
    '5': { value: '#2f312e' },
    '6': { value: '#383a36' },
    '7': { value: '#454843' },
    '8': { value: '#5c625b' },
    '9': { value: '#687066' },
    '10': { value: '#767d74' },
    '11': { value: '#afb5ad' },
    '12': { value: '#eceeec' },
    alpha1: { value: '#00000000' },
    alpha2: { value: '#f1f2f008' },
    alpha3: { value: '#f4f5f312' },
    alpha4: { value: '#f3fef21a' },
    alpha5: { value: '#f2fbf122' },
    alpha6: { value: '#f4faed2c' },
    alpha7: { value: '#f2fced3b' },
    alpha8: { value: '#edfdeb57' },
    alpha9: { value: '#ebfde766' },
    alpha10: { value: '#f0fdec74' },
    alpha11: { value: '#f6fef4b0' },
    alpha12: { value: '#fdfffded' },
  },
})

const semanticTokens = defineSemanticTokens.colors({
  '1': {
    value: { _light: '{colors.olive.light.1}', _dark: '{colors.olive.dark.1}' },
  },
  '2': {
    value: { _light: '{colors.olive.light.2}', _dark: '{colors.olive.dark.2}' },
  },
  '3': {
    value: { _light: '{colors.olive.light.3}', _dark: '{colors.olive.dark.3}' },
  },
  '4': {
    value: { _light: '{colors.olive.light.4}', _dark: '{colors.olive.dark.4}' },
  },
  '5': {
    value: { _light: '{colors.olive.light.5}', _dark: '{colors.olive.dark.5}' },
  },
  '6': {
    value: { _light: '{colors.olive.light.6}', _dark: '{colors.olive.dark.6}' },
  },
  '7': {
    value: { _light: '{colors.olive.light.7}', _dark: '{colors.olive.dark.7}' },
  },
  '8': {
    value: { _light: '{colors.olive.light.8}', _dark: '{colors.olive.dark.8}' },
  },
  '9': {
    value: { _light: '{colors.olive.light.9}', _dark: '{colors.olive.dark.9}' },
  },
  '10': {
    value: {
      _light: '{colors.olive.light.10}',
      _dark: '{colors.olive.dark.10}',
    },
  },
  '11': {
    value: {
      _light: '{colors.olive.light.11}',
      _dark: '{colors.olive.dark.11}',
    },
  },
  '12': {
    value: {
      _light: '{colors.olive.light.12}',
      _dark: '{colors.olive.dark.12}',
    },
  },
  alpha1: {
    value: {
      _light: '{colors.olive.light.alpha1}',
      _dark: '{colors.olive.dark.alpha1}',
    },
  },
  alpha2: {
    value: {
      _light: '{colors.olive.light.alpha2}',
      _dark: '{colors.olive.dark.alpha2}',
    },
  },
  alpha3: {
    value: {
      _light: '{colors.olive.light.alpha3}',
      _dark: '{colors.olive.dark.alpha3}',
    },
  },
  alpha4: {
    value: {
      _light: '{colors.olive.light.alpha4}',
      _dark: '{colors.olive.dark.alpha4}',
    },
  },
  alpha5: {
    value: {
      _light: '{colors.olive.light.alpha5}',
      _dark: '{colors.olive.dark.alpha5}',
    },
  },
  alpha6: {
    value: {
      _light: '{colors.olive.light.alpha6}',
      _dark: '{colors.olive.dark.alpha6}',
    },
  },
  alpha7: {
    value: {
      _light: '{colors.olive.light.alpha7}',
      _dark: '{colors.olive.dark.alpha7}',
    },
  },
  alpha8: {
    value: {
      _light: '{colors.olive.light.alpha8}',
      _dark: '{colors.olive.dark.alpha8}',
    },
  },
  alpha9: {
    value: {
      _light: '{colors.olive.light.alpha9}',
      _dark: '{colors.olive.dark.alpha9}',
    },
  },
  alpha10: {
    value: {
      _light: '{colors.olive.light.alpha10}',
      _dark: '{colors.olive.dark.alpha10}',
    },
  },
  alpha11: {
    value: {
      _light: '{colors.olive.light.alpha11}',
      _dark: '{colors.olive.dark.alpha11}',
    },
  },
  alpha12: {
    value: {
      _light: '{colors.olive.light.alpha12}',
      _dark: '{colors.olive.dark.alpha12}',
    },
  },
  default: {
    value: { _light: '{colors.olive.light.9}', _dark: '{colors.olive.dark.9}' },
  },
  emphasized: {
    value: {
      _light: '{colors.olive.light.10}',
      _dark: '{colors.olive.dark.10}',
    },
  },
  fg: { value: { _light: 'white', _dark: 'white' } },
  text: {
    value: {
      _light: '{colors.olive.light.12}',
      _dark: '{colors.olive.dark.12}',
    },
  },
})

export default {
  name: 'olive',
  tokens,
  semanticTokens,
}
