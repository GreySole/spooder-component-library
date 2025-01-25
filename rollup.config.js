import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import svgr from '@svgr/rollup';
import fs from 'fs-extra';

const packageFile = fs.readFileSync('./package.json', 'utf8');
const packageJson = JSON.parse(packageFile);

export default [{
        input: 'src/index.ts',
        output: [{
                file: packageJson.main,
                format: 'cjs',
                sourcemap:true,
                sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
                    return relativeSourcePath.replace('src', 'dist/src');
                }
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap:true,
                sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
                    console.log(relativeSourcePath);
                    return relativeSourcePath.replace('src', 'dist/src');
                }
            },
        ],
        external: ['react', 'react-dom', 'react-hook-form'],
        plugins: [
            resolve({
                preferBuiltins: true,
                browser: true,
            }),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json', sourceMap:true }),
            json(),
            svgr({ typescript: true }),
            {
                name: 'copy-src',
                buildEnd() {
                    fs.copySync('src', 'dist/src');
                }
            }
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
            },
        ]
    },
];