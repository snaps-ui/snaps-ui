import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: 'vitest.setup.ts',
    include: ['packages/snaps-ui-*/**/*.test.{ts,tsx}'],
    globals: true,
    environment: 'jsdom',
  },
})