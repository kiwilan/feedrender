import type { Options } from 'tsup'
import 'dotenv/config'

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
    NODE_ENV: process.env.ENV || 'production',
  },
}
