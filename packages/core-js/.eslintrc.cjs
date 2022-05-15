module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-undef': 'off', // Already covered by TypeScript,
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Types should be inferred when possible
    '@typescript-eslint/no-explicit-any': 'off', // Might be re-enabled again later (requires explicitly typing promises)
  },
  overrides: [
    {
      files: ['**/*.spec.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
};
