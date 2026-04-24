import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/**',
        'dist/**',
        '**/*.test.ts',
        '**/*.spec.ts',
        '**/__tests__/**',
        '**/types.ts',
        'examples/**',
      ],
      thresholds: {
        statements: 40,
        branches: 75,
        functions: 55,
        lines: 40,
      },
    },
    include: ['src/**/*.test.ts'],
    testTimeout: 10000,
  },
})