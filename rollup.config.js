import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import svgr from '@svgr/rollup';
import fs from 'fs-extra';

const packageFile = fs.readFileSync('./package.json', 'utf8');
const packageJson = JSON.parse(packageFile);

export default [{
        input: 'src/index.ts',
        output: [{
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            resolve({
                preferBuiltins: true,
                browser: true,
            }),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            json(),
            postcss({
                extensions: ['.css', '.scss'],
                extract: true, // Extract CSS to a separate file
                minimize: true, // Minify the CSS
            }),
            svgr({ typescript: true }),
            builtins(),
            globals(),
        ],
        external: [
            'dgram',
            'events',
            'https',
            'http',
            'net',
            'tls',
            'crypto',
            'stream',
            'url',
            'zlib',
            'buffer',
        ],
    },
    {
        input: 'dist/types/index.d.ts',
        output: [
            { file: 'dist/cjs/index.d.ts', format: 'esm' },
            { file: 'dist/esm/index.d.ts', format: 'esm' }
        ],
        plugins: [
            dts(),
            {
                name: 'copy-types',
                buildEnd() {
                    fs.copySync('dist/types', 'dist/cjs/types');
                    fs.copySync('dist/types', 'dist/esm/types');
                }
            }
        ]
    },
];