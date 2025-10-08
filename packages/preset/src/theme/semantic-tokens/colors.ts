import { defineSemanticTokens } from '@pandacss/dev'

export const colors = defineSemanticTokens.colors({
  bg: {
    surface: { value: { _light: '{colors.gray.1}', _dark: '{colors.gray.1}' } },
    default: { value: { _light: 'white', _dark: '{colors.gray.2}' } },
    subtle: { value: { _light: '{colors.gray.2}', _dark: '{colors.gray.3}' } },
    muted: { value: { _light: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
    emphasized: {
      value: { _light: '{colors.gray.4}', _dark: '{colors.gray.5}' },
    },
    disabled: {
      value: { _light: '{colors.gray.5}', _dark: '{colors.gray.6}' },
    },
  },
  fg: {
    default: {
      value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' },
    },
    muted: { value: { _light: '{colors.gray.11}', _dark: '{colors.gray.11}' } },
    subtle: {
      value: { _light: '{colors.gray.10}', _dark: '{colors.gray.10}' },
    },
    disabled: {
      value: { _light: '{colors.gray.9}', _dark: '{colors.gray.9}' },
    },
    error: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
  },
  border: {
    default: { value: { _light: '{colors.gray.7}', _dark: '{colors.gray.7}' } },
    muted: { value: { _light: '{colors.gray.6}', _dark: '{colors.gray.6}' } },
    subtle: { value: { _light: '{colors.gray.4}', _dark: '{colors.gray.4}' } },
    disabled: {
      value: { _light: '{colors.gray.5}', _dark: '{colors.gray.5}' },
    },
    outline: {
      value: { _light: '{colors.gray.alpha9}', _dark: '{colors.gray.alpha9}' },
    },
    error: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
  },

  accent: {
    default: {
      value: { _light: '{colors.snaps.6}', _dark: '{colors.snaps.9}' },
    },
    subtle: {
      value: { _light: '{colors.snaps.3}', _dark: '{colors.snaps.4}' },
    },
    muted: {
      value: { _light: '{colors.snaps.2}', _dark: '{colors.snaps.5}' },
    },
    emphasized: {
      value: { _light: '{colors.snaps.7}', _dark: '{colors.snaps.10}' },
    },
    disabled: {
      value: { _light: '{colors.snaps.4}', _dark: '{colors.snaps.6}' },
    },

    fg: {
      value: { _light: 'white', _dark: '{colors.snaps.12}' },
    },
    text: {
      value: { _light: '{colors.snaps.11}', _dark: '{colors.snaps.12}' },
    },
    subtleText: {
      value: { _light: '{colors.snaps.10}', _dark: '{colors.snaps.11}' },
    },
    mutedText: {
      value: { _light: '{colors.snaps.9}', _dark: '{colors.snaps.10}' },
    },

    border: {
      value: { _light: '{colors.snaps.6}', _dark: '{colors.snaps.8}' },
    },
    outline: {
      value: {
        _light: '{colors.snaps.alpha9}',
        _dark: '{colors.snaps.alpha9}',
      },
    },
  },
})
