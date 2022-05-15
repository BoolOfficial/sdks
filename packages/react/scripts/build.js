import { build } from 'esbuild';

const commonProps = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: false,
  external: ['react'],
};

build({
  ...commonProps,
  outfile: './lib/index.cjs',
  format: 'cjs',
});

build({
  ...commonProps,
  outfile: './lib/index.module.js',
  format: 'esm',
});
