import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fcfcfd' },
    '2': { value: '#f9f9fb' },
    '3': { value: '#f0f0f3' },
    '4': { value: '#e8e8ec' },
    '5': { value: '#e0e1e6' },
    '6': { value: '#d9d9e0' },
    '7': { value: '#cdced6' },
    '8': { value: '#b9bbc6' },
    '9': { value: '#8b8d98' },
    '10': { value: '#80838d' },
    '11': { value: '#60646c' },
    '12': { value: '#1c2024' },
    alpha1: { value: '#00005503' },
    alpha2: { value: '#00005506' },
    alpha3: { value: '#0000330f' },
    alpha4: { value: '#00002d17' },
    alpha5: { value: '#0009321f' },
    alpha6: { value: '#00002f26' },
    alpha7: { value: '#00062e32' },
    alpha8: { value: '#00083046' },
    alpha9: { value: '#00051d74' },
    alpha10: { value: '#00071b7f' },
    alpha11: { value: '#0007149f' },
    alpha12: { value: '#000509e3' },
  },
  dark: {
    '1': { value: '#111113' },
    '2': { value: '#18191b' },
    '3': { value: '#212225' },
    '4': { value: '#272a2d' },
    '5': { value: '#2e3135' },
    '6': { value: '#363a3f' },
    '7': { value: '#43484e' },
    '8': { value: '#5a6169' },
    '9': { value: '#696e77' },
    '10': { value: '#777b84' },
    '11': { value: '#b0b4ba' },
    '12': { value: '#edeef0' },
    alpha1: { value: '#00000000' },
    alpha2: { value: '#d8f4f609' },
    alpha3: { value: '#ddeaf814' },
    alpha4: { value: '#d3edf81d' },
    alpha5: { value: '#d9edfe25' },
    alpha6: { value: '#d6ebfd30' },
    alpha7: { value: '#d9edff40' },
    alpha8: { value: '#d9edff5d' },
    alpha9: { value: '#dfebfd6d' },
    alpha10: { value: '#e5edfd7b' },
    alpha11: { value: '#f1f7feb5' },
    alpha12: { value: '#fcfdffef' },
  },
})
const semanticTokens = defineSemanticTokens.colors({
  '1': {
    value: { _light: '{colors.slate.light.1}', _dark: '{colors.slate.dark.1}' },
  },
  '2': {
    value: { _light: '{colors.slate.light.2}', _dark: '{colors.slate.dark.2}' },
  },
  '3': {
    value: { _light: '{colors.slate.light.3}', _dark: '{colors.slate.dark.3}' },
  },
  '4': {
    value: { _light: '{colors.slate.light.4}', _dark: '{colors.slate.dark.4}' },
  },
  '5': {
    value: { _light: '{colors.slate.light.5}', _dark: '{colors.slate.dark.5}' },
  },
  '6': {
    value: { _light: '{colors.slate.light.6}', _dark: '{colors.slate.dark.6}' },
  },
  '7': {
    value: { _light: '{colors.slate.light.7}', _dark: '{colors.slate.dark.7}' },
  },
  '8': {
    value: { _light: '{colors.slate.light.8}', _dark: '{colors.slate.dark.8}' },
  },
  '9': {
    value: { _light: '{colors.slate.light.9}', _dark: '{colors.slate.dark.9}' },
  },
  '10': {
    value: {
      _light: '{colors.slate.light.10}',
      _dark: '{colors.slate.dark.10}',
    },
  },
  '11': {
    value: {
      _light: '{colors.slate.light.11}',
      _dark: '{colors.slate.dark.11}',
    },
  },
  '12': {
    value: {
      _light: '{colors.slate.light.12}',
      _dark: '{colors.slate.dark.12}',
    },
  },
  alpha1: {
    value: {
      _light: '{colors.slate.light.alpha1}',
      _dark: '{colors.slate.dark.alpha1}',
    },
  },
  alpha2: {
    value: {
      _light: '{colors.slate.light.alpha2}',
      _dark: '{colors.slate.dark.alpha2}',
    },
  },
  alpha3: {
    value: {
      _light: '{colors.slate.light.alpha3}',
      _dark: '{colors.slate.dark.alpha3}',
    },
  },
  alpha4: {
    value: {
      _light: '{colors.slate.light.alpha4}',
      _dark: '{colors.slate.dark.alpha4}',
    },
  },
  alpha5: {
    value: {
      _light: '{colors.slate.light.alpha5}',
      _dark: '{colors.slate.dark.alpha5}',
    },
  },
  alpha6: {
    value: {
      _light: '{colors.slate.light.alpha6}',
      _dark: '{colors.slate.dark.alpha6}',
    },
  },
  alpha7: {
    value: {
      _light: '{colors.slate.light.alpha7}',
      _dark: '{colors.slate.dark.alpha7}',
    },
  },
  alpha8: {
    value: {
      _light: '{colors.slate.light.alpha8}',
      _dark: '{colors.slate.dark.alpha8}',
    },
  },
  alpha9: {
    value: {
      _light: '{colors.slate.light.alpha9}',
      _dark: '{colors.slate.dark.alpha9}',
    },
  },
  alpha10: {
    value: {
      _light: '{colors.slate.light.alpha10}',
      _dark: '{colors.slate.dark.alpha10}',
    },
  },
  alpha11: {
    value: {
      _light: '{colors.slate.light.alpha11}',
      _dark: '{colors.slate.dark.alpha11}',
    },
  },
  alpha12: {
    value: {
      _light: '{colors.slate.light.alpha12}',
      _dark: '{colors.slate.dark.alpha12}',
    },
  },
  default: {
    value: { _light: '{colors.slate.light.9}', _dark: '{colors.slate.dark.9}' },
  },
  emphasized: {
    value: {
      _light: '{colors.slate.light.10}',
      _dark: '{colors.slate.dark.10}',
    },
  },
  fg: { value: { _light: 'white', _dark: 'white' } },
  text: {
    value: {
      _light: '{colors.slate.light.12}',
      _dark: '{colors.slate.dark.12}',
    },
  },
})

export default {
  name: 'slate',
  tokens,
  semanticTokens,
}
