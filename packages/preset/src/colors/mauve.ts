import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fdfcfd' },
    '2': { value: '#faf9fb' },
    '3': { value: '#f2eff3' },
    '4': { value: '#eae7ec' },
    '5': { value: '#e3dfe6' },
    '6': { value: '#dbd8e0' },
    '7': { value: '#d0cdd7' },
    '8': { value: '#bcbac7' },
    '9': { value: '#8e8c99' },
    '10': { value: '#84828e' },
    '11': { value: '#65636d' },
    '12': { value: '#211f26' },
    alpha1: { value: '#55005503' },
    alpha2: { value: '#2b005506' },
    alpha3: { value: '#30004010' },
    alpha4: { value: '#20003618' },
    alpha5: { value: '#20003820' },
    alpha6: { value: '#14003527' },
    alpha7: { value: '#10003332' },
    alpha8: { value: '#08003145' },
    alpha9: { value: '#05001d73' },
    alpha10: { value: '#0500197d' },
    alpha11: { value: '#0400119c' },
    alpha12: { value: '#020008e0' },
  },
  dark: {
    '1': { value: '#121113' },
    '2': { value: '#1a191b' },
    '3': { value: '#232225' },
    '4': { value: '#2b292d' },
    '5': { value: '#323035' },
    '6': { value: '#3c393f' },
    '7': { value: '#49474e' },
    '8': { value: '#625f69' },
    '9': { value: '#6f6d78' },
    '10': { value: '#7c7a85' },
    '11': { value: '#b5b2bc' },
    '12': { value: '#eeeef0' },
    alpha1: { value: '#00000000' },
    alpha2: { value: '#f5f4f609' },
    alpha3: { value: '#ebeaf814' },
    alpha4: { value: '#eee5f81d' },
    alpha5: { value: '#efe6fe25' },
    alpha6: { value: '#f1e6fd30' },
    alpha7: { value: '#eee9ff40' },
    alpha8: { value: '#eee7ff5d' },
    alpha9: { value: '#eae6fd6e' },
    alpha10: { value: '#ece9fd7c' },
    alpha11: { value: '#f5f1ffb7' },
    alpha12: { value: '#fdfdffef' },
  },
})

const semanticTokens = defineSemanticTokens.colors({
  '1': {
    value: { _light: '{colors.mauve.light.1}', _dark: '{colors.mauve.dark.1}' },
  },
  '2': {
    value: { _light: '{colors.mauve.light.2}', _dark: '{colors.mauve.dark.2}' },
  },
  '3': {
    value: { _light: '{colors.mauve.light.3}', _dark: '{colors.mauve.dark.3}' },
  },
  '4': {
    value: { _light: '{colors.mauve.light.4}', _dark: '{colors.mauve.dark.4}' },
  },
  '5': {
    value: { _light: '{colors.mauve.light.5}', _dark: '{colors.mauve.dark.5}' },
  },
  '6': {
    value: { _light: '{colors.mauve.light.6}', _dark: '{colors.mauve.dark.6}' },
  },
  '7': {
    value: { _light: '{colors.mauve.light.7}', _dark: '{colors.mauve.dark.7}' },
  },
  '8': {
    value: { _light: '{colors.mauve.light.8}', _dark: '{colors.mauve.dark.8}' },
  },
  '9': {
    value: { _light: '{colors.mauve.light.9}', _dark: '{colors.mauve.dark.9}' },
  },
  '10': {
    value: {
      _light: '{colors.mauve.light.10}',
      _dark: '{colors.mauve.dark.10}',
    },
  },
  '11': {
    value: {
      _light: '{colors.mauve.light.11}',
      _dark: '{colors.mauve.dark.11}',
    },
  },
  '12': {
    value: {
      _light: '{colors.mauve.light.12}',
      _dark: '{colors.mauve.dark.12}',
    },
  },
  alpha1: {
    value: {
      _light: '{colors.mauve.light.alpha1}',
      _dark: '{colors.mauve.dark.alpha1}',
    },
  },
  alpha2: {
    value: {
      _light: '{colors.mauve.light.alpha2}',
      _dark: '{colors.mauve.dark.alpha2}',
    },
  },
  alpha3: {
    value: {
      _light: '{colors.mauve.light.alpha3}',
      _dark: '{colors.mauve.dark.alpha3}',
    },
  },
  alpha4: {
    value: {
      _light: '{colors.mauve.light.alpha4}',
      _dark: '{colors.mauve.dark.alpha4}',
    },
  },
  alpha5: {
    value: {
      _light: '{colors.mauve.light.alpha5}',
      _dark: '{colors.mauve.dark.alpha5}',
    },
  },
  alpha6: {
    value: {
      _light: '{colors.mauve.light.alpha6}',
      _dark: '{colors.mauve.dark.alpha6}',
    },
  },
  alpha7: {
    value: {
      _light: '{colors.mauve.light.alpha7}',
      _dark: '{colors.mauve.dark.alpha7}',
    },
  },
  alpha8: {
    value: {
      _light: '{colors.mauve.light.alpha8}',
      _dark: '{colors.mauve.dark.alpha8}',
    },
  },
  alpha9: {
    value: {
      _light: '{colors.mauve.light.alpha9}',
      _dark: '{colors.mauve.dark.alpha9}',
    },
  },
  alpha10: {
    value: {
      _light: '{colors.mauve.light.alpha10}',
      _dark: '{colors.mauve.dark.alpha10}',
    },
  },
  alpha11: {
    value: {
      _light: '{colors.mauve.light.alpha11}',
      _dark: '{colors.mauve.dark.alpha11}',
    },
  },
  alpha12: {
    value: {
      _light: '{colors.mauve.light.alpha12}',
      _dark: '{colors.mauve.dark.alpha12}',
    },
  },
  default: {
    value: { _light: '{colors.mauve.light.9}', _dark: '{colors.mauve.dark.9}' },
  },
  emphasized: {
    value: {
      _light: '{colors.mauve.light.10}',
      _dark: '{colors.mauve.dark.10}',
    },
  },
  fg: { value: { _light: 'white', _dark: 'white' } },
  text: {
    value: {
      _light: '{colors.mauve.light.12}',
      _dark: '{colors.mauve.dark.12}',
    },
  },
})

export default {
  name: 'mauve',
  tokens,
  semanticTokens,
}
