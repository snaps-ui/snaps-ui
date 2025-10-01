import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fbfdfc' },
    '2': { value: '#f7f9f8' },
    '3': { value: '#eef1f0' },
    '4': { value: '#e6e9e8' },
    '5': { value: '#dfe2e0' },
    '6': { value: '#d7dad9' },
    '7': { value: '#cbcfcd' },
    '8': { value: '#b8bcba' },
    '9': { value: '#868e8b' },
    '10': { value: '#7c8481' },
    '11': { value: '#5f6563' },
    '12': { value: '#1a211e' },
    alpha1: { value: '#00804004' },
    alpha2: { value: '#00402008' },
    alpha3: { value: '#002d1e11' },
    alpha4: { value: '#001f1519' },
    alpha5: { value: '#00180820' },
    alpha6: { value: '#00140d28' },
    alpha7: { value: '#00140a34' },
    alpha8: { value: '#000f0847' },
    alpha9: { value: '#00110b79' },
    alpha10: { value: '#00100a83' },
    alpha11: { value: '#000a07a0' },
    alpha12: { value: '#000805e5' },
  },
  dark: {
    '1': { value: '#101211' },
    '2': { value: '#171918' },
    '3': { value: '#202221' },
    '4': { value: '#272a29' },
    '5': { value: '#2e3130' },
    '6': { value: '#373b39' },
    '7': { value: '#444947' },
    '8': { value: '#5b625f' },
    '9': { value: '#63706b' },
    '10': { value: '#717d79' },
    '11': { value: '#adb5b2' },
    '12': { value: '#eceeed' },
    alpha1: { value: '#00000000' },
    alpha2: { value: '#f0f2f108' },
    alpha3: { value: '#f3f5f412' },
    alpha4: { value: '#f2fefd1a' },
    alpha5: { value: '#f1fbfa22' },
    alpha6: { value: '#edfbf42d' },
    alpha7: { value: '#edfcf73c' },
    alpha8: { value: '#ebfdf657' },
    alpha9: { value: '#dffdf266' },
    alpha10: { value: '#e5fdf674' },
    alpha11: { value: '#f4fefbb0' },
    alpha12: { value: '#fdfffeed' },
  },
})
const semanticTokens = defineSemanticTokens.colors({
  '1': {
    value: { _light: '{colors.sage.light.1}', _dark: '{colors.sage.dark.1}' },
  },
  '2': {
    value: { _light: '{colors.sage.light.2}', _dark: '{colors.sage.dark.2}' },
  },
  '3': {
    value: { _light: '{colors.sage.light.3}', _dark: '{colors.sage.dark.3}' },
  },
  '4': {
    value: { _light: '{colors.sage.light.4}', _dark: '{colors.sage.dark.4}' },
  },
  '5': {
    value: { _light: '{colors.sage.light.5}', _dark: '{colors.sage.dark.5}' },
  },
  '6': {
    value: { _light: '{colors.sage.light.6}', _dark: '{colors.sage.dark.6}' },
  },
  '7': {
    value: { _light: '{colors.sage.light.7}', _dark: '{colors.sage.dark.7}' },
  },
  '8': {
    value: { _light: '{colors.sage.light.8}', _dark: '{colors.sage.dark.8}' },
  },
  '9': {
    value: { _light: '{colors.sage.light.9}', _dark: '{colors.sage.dark.9}' },
  },
  '10': {
    value: { _light: '{colors.sage.light.10}', _dark: '{colors.sage.dark.10}' },
  },
  '11': {
    value: { _light: '{colors.sage.light.11}', _dark: '{colors.sage.dark.11}' },
  },
  '12': {
    value: { _light: '{colors.sage.light.12}', _dark: '{colors.sage.dark.12}' },
  },
  alpha1: {
    value: {
      _light: '{colors.sage.light.alpha1}',
      _dark: '{colors.sage.dark.alpha1}',
    },
  },
  alpha2: {
    value: {
      _light: '{colors.sage.light.alpha2}',
      _dark: '{colors.sage.dark.alpha2}',
    },
  },
  alpha3: {
    value: {
      _light: '{colors.sage.light.alpha3}',
      _dark: '{colors.sage.dark.alpha3}',
    },
  },
  alpha4: {
    value: {
      _light: '{colors.sage.light.alpha4}',
      _dark: '{colors.sage.dark.alpha4}',
    },
  },
  alpha5: {
    value: {
      _light: '{colors.sage.light.alpha5}',
      _dark: '{colors.sage.dark.alpha5}',
    },
  },
  alpha6: {
    value: {
      _light: '{colors.sage.light.alpha6}',
      _dark: '{colors.sage.dark.alpha6}',
    },
  },
  alpha7: {
    value: {
      _light: '{colors.sage.light.alpha7}',
      _dark: '{colors.sage.dark.alpha7}',
    },
  },
  alpha8: {
    value: {
      _light: '{colors.sage.light.alpha8}',
      _dark: '{colors.sage.dark.alpha8}',
    },
  },
  alpha9: {
    value: {
      _light: '{colors.sage.light.alpha9}',
      _dark: '{colors.sage.dark.alpha9}',
    },
  },
  alpha10: {
    value: {
      _light: '{colors.sage.light.alpha10}',
      _dark: '{colors.sage.dark.alpha10}',
    },
  },
  alpha11: {
    value: {
      _light: '{colors.sage.light.alpha11}',
      _dark: '{colors.sage.dark.alpha11}',
    },
  },
  alpha12: {
    value: {
      _light: '{colors.sage.light.alpha12}',
      _dark: '{colors.sage.dark.alpha12}',
    },
  },
  default: {
    value: { _light: '{colors.sage.light.9}', _dark: '{colors.sage.dark.9}' },
  },
  emphasized: {
    value: { _light: '{colors.sage.light.10}', _dark: '{colors.sage.dark.10}' },
  },
  fg: { value: { _light: 'white', _dark: 'white' } },
  text: {
    value: { _light: '{colors.sage.light.12}', _dark: '{colors.sage.dark.12}' },
  },
})

export default {
  name: 'sage',
  tokens,
  semanticTokens,
}
