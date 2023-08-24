import type { Options } from 'tsup'

export default <Options>{
  entryPoints: [
    'src/*.ts',
  ],
  clean: true,
  minify: true,
  format: ['cjs', 'esm'],
  dts: false,
  onSuccess: 'npm run build:fix',
}
