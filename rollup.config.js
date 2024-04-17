import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json" assert { type: "json" };
import css from "rollup-plugin-css-only";
import replace from "rollup-plugin-replace";
import globals from 'rollup-plugin-node-globals';

const input = "src/index.ts";

const plugins = [
    replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true
    }),
    typescript(),
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    css({ output: "bundle.css" }),
];

export default [
    {
        input,
        output: {
            file: pkg.module,
            format: "esm",
            sourcemap: true,
        },
        plugins,
        external: ["react", "react-dom"],
    },
    {
        input,
        output: {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
        },
        plugins,
        external: ["react", "react-dom"],
    },
    // declaration types
    {
        input,
        output: {
            file: pkg.types,
            format: "esm",
            sourcemap: true,
        },
        plugins: [
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: true,
                        declarationDir: "types",
                    },
                },
            }),
        ],
        external: ["react", "react-dom"],
    },
];
