import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default [
  // CommonJS
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: false,
    },
    plugins: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        mainFields: ["main", "module"],
        preferBuiltins: false,
      }),
      typescript({ tsconfig: "./tsconfig.json", sourceMap: false }),
    ],
    external: ["react", "react/jsx-runtime"],
  },
  // ESM
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: false,
    },
    plugins: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        mainFields: ["module", "main"],
        preferBuiltins: false,
      }),
      typescript({ tsconfig: "./tsconfig.json", sourceMap: false }),
    ],
    external: ["react", "react/jsx-runtime"],
  },
  // UMD
  {
    input: "src/default.ts",
    output: {
      file: "dist/default.umd.js",
      format: "umd",
      name: "languageStylerHtml",
      sourcemap: false,
    },
    plugins: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        mainFields: ["module", "main"],
        preferBuiltins: false,
      }),
      typescript({ tsconfig: "./tsconfig.json", sourceMap: false }),
    ],
    external: [],
  },
  // LangStyler Module
  {
    input: "src/react/lang-styler.tsx",
    output: {
      file: "dist/lang-styler.js",
      format: "esm",
      sourcemap: false,
    },
    plugins: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        mainFields: ["module", "main"],
        preferBuiltins: false,
      }),
      typescript({ tsconfig: "./tsconfig.json", sourceMap: false }),
    ],
    external: ["react", "react/jsx-runtime"],
  },
];
