import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import pkg from "./package.json" assert { type: "json" };

const input = "src/index.ts";

const plugins = [typescript(), peerDepsExternal(), nodeResolve()];


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
