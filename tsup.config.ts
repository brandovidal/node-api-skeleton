import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    outDir: 'build',
    target: 'node18',
    platform: 'node',
    format: ['esm'],
    splitting: true,
    sourcemap: true,
    minify: true,
    shims: true,
    dts: true
  }
])