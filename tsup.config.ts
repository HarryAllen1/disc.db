import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  sourcemap: true,
  minify: true,
  skipNodeModulesBundle: true,
  format: ['esm', 'cjs', 'iife'],
});
