import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: 'vitest.setup.ts',
    include: ['packages/**/*.test.{ts,tsx}'],
    globals: true,
    environment: 'jsdom',
  },
})
