import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'tsup'

import rootConfig from '../../tsup.config'

function directiveRemover(nameOfFile: string) {
  const file = path.resolve(__dirname, 'dist', nameOfFile)

  return fs.promises.writeFile(
    file,
    fs.readFileSync(file, 'utf-8').replace("'use client'\n", '')
  )
}

export default defineConfig({
  ...rootConfig,
  entry: [
    'src/components/**/index.ts',
    'src/colors.ts',
    'src/base-presets.ts',
    'src/index.ts',
  ],
  tsconfig: './tsconfig.json',
  sourcemap: false,
  external: ['@chakra-ui/react', '@emotion/react', 'react', 'react-dom'],
  async onSuccess() {
    await Promise.all([
      directiveRemover('index.cjs'),
      directiveRemover('index.js'),
    ])
  },
})
