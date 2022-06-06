module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-undef': 'off', // Already covered by TypeScript,
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Types should be inferred when possible
  },
  ignorePatterns: ['lib'],
  overrides: [
    {
      files: ['**/*.spec.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
