import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/lib/index.js',  // 入口文件
  output: {
    file: 'dist/threeUtils.js',
    format: 'es',
    name: 'TU'
  },
  plugins: [
    resolve(),
    commonjs(),
    // terser()  // 压缩输出文件
  ],
  watch: {
    include: 'src/lib/**',
    exclude: 'node_modules/**'
  },
};
