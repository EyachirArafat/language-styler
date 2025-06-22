import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

const isProduction = process.env.NODE_ENV === "production";

const baseConfig = {
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      mainFields: ["module", "main"],
      preferBuiltins: false,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      sourceMap: !isProduction,
      declaration: true,
      declarationDir: "dist",
    }),
    isProduction &&
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      }),
    copy({
      targets: [{ src: "src/styles", dest: "dist" }],
    }),
  ].filter(Boolean),
  external: ["react", "react-dom", "react/jsx-runtime"],
};

export default [
  // Main bundle (CommonJS)
  {
    ...baseConfig,
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: !isProduction,
      exports: "named",
    },
  },

  // Main bundle (ESM)
  {
    ...baseConfig,
    input: "src/index.ts",
    output: {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: !isProduction,
    },
  },

  // React-only bundle (CommonJS)
  {
    ...baseConfig,
    input: "src/react/index.ts",
    output: {
      file: "dist/react.js",
      format: "cjs",
      sourcemap: !isProduction,
      exports: "named",
    },
  },

  // React-only bundle (ESM)
  {
    ...baseConfig,
    input: "src/react/index.ts",
    output: {
      file: "dist/react.esm.js",
      format: "esm",
      sourcemap: !isProduction,
    },
  },

  // Vanilla JS bundle (CommonJS)
  {
    ...baseConfig,
    input: "src/vanilla/index.ts",
    output: {
      file: "dist/vanilla.js",
      format: "cjs",
      sourcemap: !isProduction,
      exports: "named",
    },
    external: [], // No external dependencies for vanilla
  },

  // Vanilla JS bundle (ESM)
  {
    ...baseConfig,
    input: "src/vanilla/index.ts",
    output: {
      file: "dist/vanilla.esm.js",
      format: "esm",
      sourcemap: !isProduction,
    },
    external: [], // No external dependencies for vanilla
  },

  // UMD bundle for browsers
  {
    ...baseConfig,
    input: "src/vanilla/index.ts",
    output: {
      file: "dist/language-styler.umd.js",
      format: "umd",
      name: "LanguageStyler",
      sourcemap: !isProduction,
    },
    external: [],
  },
];
