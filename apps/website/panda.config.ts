import { defineConfig } from '@pandacss/dev'
import { createSnapsPreset } from '@snaps-ui/panda-preset'
import neutral from '@snaps-ui/panda-preset/colors/neutral'

export default defineConfig({
  presets: [
    '@pandacss/preset-panda',
    createSnapsPreset({
      accentColor: neutral,
      grayColor: neutral,
      radius: 'sm',
    }),
  ],
  preflight: true,
  include: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  outdir: 'dist',
  jsxFramework: 'react',
  staticCss: {
    recipes: '*',
  },
  theme: {
    extend: {},
  },
})
