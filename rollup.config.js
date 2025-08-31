const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const terser = require('@rollup/plugin-terser');

module.exports = [
  // UMD build
  {
    input: 'src/index.ts',
    output: {
      name: 'PiiPaladinLite',
      file: 'dist/pii-paladin-lite.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      terser()
    ]
  },
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/pii-paladin-lite.esm.js',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript()
    ]
  },
  // Browser build (minified)
  {
    input: 'src/index.ts',
    output: {
      name: 'PiiPaladinLite',
      file: 'dist/pii-paladin-lite.browser.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      })
    ]
  }
];
