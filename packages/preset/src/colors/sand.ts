import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fdfdfc' },
    '2': { value: '#f9f9f8' },
    '3': { value: '#f1f0ef' },
    '4': { value: '#e9e8e6' },
    '5': { value: '#e2e1de' },
    '6': { value: '#dad9d6' },
    '7': { value: '#cfceca' },
    '8': { value: '#bcbbb5' },
    '9': { value: '#8d8d86' },
    '10': { value: '#82827c' },
    '11': { value: '#63635e' },
    '12': { value: '#21201c' },
    alpha1: { value: '#55550003' },
    alpha2: { value: '#25250007' },
    alpha3: { value: '#20100010' },
    alpha4: { value: '#1f150019' },
    alpha5: { value: '#1f180021' },
    alpha6: { value: '#19130029' },
    alpha7: { value: '#19140035' },
    alpha8: { value: '#1915014a' },
    alpha9: { value: '#0f0f0079' },
    alpha10: { value: '#0c0c0083' },
    alpha11: { value: '#080800a1' },
    alpha12: { value: '#060500e3' },
  },
  dark: {
    '1': { value: '#111110' },
    '2': { value: '#191918' },
    '3': { value: '#222221' },
    '4': { value: '#2a2a28' },
    '5': { value: '#31312e' },
    '6': { value: '#3b3a37' },
    '7': { value: '#494844' },
    '8': { value: '#62605b' },
    '9': { value: '#6f6d66' },
    '10': { value: '#7c7b74' },
    '11': { value: '#b5b3ad' },
    '12': { value: '#eeeeec' },
    alpha1: { value: '#00000000' },
    alpha2: { value: '#f4f4f309' },
    alpha3: { value: '#f6f6f513' },
    alpha4: { value: '#fefef31b' },
    alpha5: { value: '#fbfbeb23' },
    alpha6: { value: '#fffaed2d' },
    alpha7: { value: '#fffbed3c' },
    alpha8: { value: '#fff9eb57' },
    alpha9: { value: '#fffae965' },
    alpha10: { value: '#fffdee73' },
    alpha11: { value: '#fffcf4b0' },
    alpha12: { value: '#fffffded' },
  },
})
const semanticTokens = defineSemanticTokens.colors({
  '1': {
    value: { _light: '{colors.sand.light.1}', _dark: '{colors.sand.dark.1}' },
  },
  '2': {
    value: { _light: '{colors.sand.light.2}', _dark: '{colors.sand.dark.2}' },
  },
  '3': {
    value: { _light: '{colors.sand.light.3}', _dark: '{colors.sand.dark.3}' },
  },
  '4': {
    value: { _light: '{colors.sand.light.4}', _dark: '{colors.sand.dark.4}' },
  },
  '5': {
    value: { _light: '{colors.sand.light.5}', _dark: '{colors.sand.dark.5}' },
  },
  '6': {
    value: { _light: '{colors.sand.light.6}', _dark: '{colors.sand.dark.6}' },
  },
  '7': {
    value: { _light: '{colors.sand.light.7}', _dark: '{colors.sand.dark.7}' },
  },
  '8': {
    value: { _light: '{colors.sand.light.8}', _dark: '{colors.sand.dark.8}' },
  },
  '9': {
    value: { _light: '{colors.sand.light.9}', _dark: '{colors.sand.dark.9}' },
  },
  '10': {
    value: { _light: '{colors.sand.light.10}', _dark: '{colors.sand.dark.10}' },
  },
  '11': {
    value: { _light: '{colors.sand.light.11}', _dark: '{colors.sand.dark.11}' },
  },
  '12': {
    value: { _light: '{colors.sand.light.12}', _dark: '{colors.sand.dark.12}' },
  },
  alpha1: {
    value: {
      _light: '{colors.sand.light.alpha1}',
      _dark: '{colors.sand.dark.alpha1}',
    },
  },
  alpha2: {
    value: {
      _light: '{colors.sand.light.alpha2}',
      _dark: '{colors.sand.dark.alpha2}',
    },
  },
  alpha3: {
    value: {
      _light: '{colors.sand.light.alpha3}',
      _dark: '{colors.sand.dark.alpha3}',
    },
  },
  alpha4: {
    value: {
      _light: '{colors.sand.light.alpha4}',
      _dark: '{colors.sand.dark.alpha4}',
    },
  },
  alpha5: {
    value: {
      _light: '{colors.sand.light.alpha5}',
      _dark: '{colors.sand.dark.alpha5}',
    },
  },
  alpha6: {
    value: {
      _light: '{colors.sand.light.alpha6}',
      _dark: '{colors.sand.dark.alpha6}',
    },
  },
  alpha7: {
    value: {
      _light: '{colors.sand.light.alpha7}',
      _dark: '{colors.sand.dark.alpha7}',
    },
  },
  alpha8: {
    value: {
      _light: '{colors.sand.light.alpha8}',
      _dark: '{colors.sand.dark.alpha8}',
    },
  },
  alpha9: {
    value: {
      _light: '{colors.sand.light.alpha8}',
      _dark: '{colors.sand.dark.alpha9}',
    },
  },
  alpha10: {
    value: {
      _light: '{colors.sand.light.alpha8}',
      _dark: '{colors.sand.dark.alpha10}',
    },
  },
  alpha11: {
    value: {
      _light: '{colors.sand.light.alpha11}',
      _dark: '{colors.sand.dark.alpha11}',
    },
  },
  alpha12: {
    value: {
      _light: '{colors.sand.light.alpha12}',
      _dark: '{colors.sand.dark.alpha12}',
    },
  },

  default: {
    value: { _light: '{colors.sand.light.9}', _dark: '{colors.sand.dark.9}' },
  },
  emphasized: {
    value: { _light: '{colors.sand.light.10}', _dark: '{colors.sand.dark.10}' },
  },
  fg: { value: { _light: 'white', _dark: 'white' } },
  text: {
    value: { _light: '{colors.sand.light.12}', _dark: '{colors.sand.dark.12}' },
  },
})

export default {
  name: 'sand',
  tokens,
  semanticTokens,
}
