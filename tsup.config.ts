import type { Options } from 'tsup'

export default <Options>{
  entryPoints: [
    'src/*.ts',
  ],
  outDir: 'dist',
  clean: true,
  minify: true,
  format: ['cjs', 'esm'],
  dts: false,
  onSuccess: 'npm run build:fix',
  env: {
    NODE_ENV: 'production',
  },
}
