import antfu from '@antfu/eslint-config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default antfu({
  type: 'lib',
  plugins: {
    'simple-import-sort': simpleImportSort,
  },

  ignores: [
    '**/public/mockServiceWorker.js', // Игнорируем конкретный файл
  ],

  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'style/jsx-quotes': 'off',
    'style/semi': 'off',
    'no-extra-semi': 'off',
    'no-unused-expressions': 'error',
    'no-console': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^node:'],
          // 1. Сторонние библиотеки (`react`, `react-router-dom`)
          ['^react', '^@?\\w'],
          // 2. Типы (`import type`)
          ['^\\u0000'],
          // 3. Внутренние пути (`@/`, `src/`)
          ['^@/', '^~?\\w'],
          // 4. Относительные пути (`./`)
          ['^\\.'],
          // 5. Стили (`.scss`, `.css`)
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'perfectionist/sort-imports': 'off',
    'simple-import-sort/exports': 'error',
    'eslint-comments/no-unlimited-disable': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },

  // TypeScript and Vue are autodetected, you can also explicitly enable them:
  typescript: true,
  react: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,
});
