import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'es2022',
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: false,
  format: ['esm', 'cjs'],
  banner: {
    js: "'use client'",
  },
})
