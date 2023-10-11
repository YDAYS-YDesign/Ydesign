import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json" assert { type: "json" };

const input = "src/index.ts";

const plugins = [typescript()];

const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
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
        external,
    },
    {
        input,
        output: {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
        },
        plugins,
        external,
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
        external,
    }
];
