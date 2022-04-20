module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    React: true,
    JSX: true,
    __webpack_public_path__: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['./**/*.ts', './**/*.tsx'],
      rules: {
        'no-use-before-define': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-unused-vars': ['error'],
      },
    },
    {
      files: ['./cypress/**/*.ts', './cypress/**/*.tsx', './cypress/**/*.jsx', './cypress/**/*.js'],
      plugins: ['cypress'],
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended'],
    },
    {
      env: {
        'jest/globals': true,
      },
      files: ['./src/**/*.spec.ts', './src/**/*.spec.tsx'],
      plugins: ['jest'],
    },
  ],
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'] }],
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'no-unneeded-ternary': ['error'],
    indent: ['error', 2],
  },
}
