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
      exclude: ["**/*.test.ts", "**/*.test.tsx"],
    }),
    isProduction && terser(),
    // IMPORTANT: Copy CSS files
    copy({
      targets: [
        {
          src: "src/styles/**/*",
          dest: "dist/styles",
          flatten: false,
        },
      ],
      verbose: true,
    }),
  ].filter(Boolean),
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
    external: ["react", "react-dom", "react/jsx-runtime"],
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
    external: ["react", "react-dom", "react/jsx-runtime"],
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
    external: ["react", "react-dom", "react/jsx-runtime"],
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
    external: ["react", "react-dom", "react/jsx-runtime"],
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
    external: [],
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
    external: [],
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
