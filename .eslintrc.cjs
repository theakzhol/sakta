module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: ["jsdoc", "@typescript-eslint", "prettier", "simple-import-sort"],
  rules: {
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/function-component-definition": "off",
    "react/no-array-index-key": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
    "react/require-default-props": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/no-unresolved": "off",
    "no-undef": "off",
    "no-param-reassign": "off",
    "arrow-body-style": "off",
    "no-shadow": "off",
    "react/jsx-props-no-spreading": "warn",
    "@typescript-eslint/no-shadow": "warn",
    "no-restricted-syntax": ["off", "ForOfStatement"],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: false,
      },
    ],
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "jsdoc/require-description-complete-sentence": [
      "error",
      {
        tags: ["see", "copyright"],
      },
    ],
    "jsdoc/require-param": [
      "error",
      {
        checkDestructured: false,
        enableFixer: false,
      },
    ],
    "jsdoc/require-param-name": "error",
    "jsdoc/require-param-description": "error",
    "jsdoc/check-tag-names": "error",
    "jsdoc/no-types": "error",
    "func-style": [
      "error",
      "declaration",
      {
        allowArrowFunctions: true,
      },
    ],
    "jsdoc/check-alignment": "error",
    "jsdoc/no-bad-blocks": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ["^react", "^@?\\w"],
              ["^(@|components)(/.*|$)"],
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              ["^\\u0000"],
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              ["^.+\\.?(css)$"],
            ],
          },
        ],
      },
    },
  ],
};
