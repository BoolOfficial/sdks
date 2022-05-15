import { build } from 'esbuild'

const commonProps = {
  entryPoints: ['src/index.ts'],
  bundle: true,
}

build({
  ...commonProps,
  outfile: './lib/index.module.js',
  format: 'esm',
})

build({
  ...commonProps,
  outfile: './lib/index.js',
  format: 'cjs',
})

