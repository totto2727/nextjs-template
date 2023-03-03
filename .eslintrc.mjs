const config = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:storybook/recommended',
        'next/core-web-vitals',
        'prettier',
      ],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'error', // Any型の使用を禁止
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 返り値の省略を許容
        // 型インポートの使用を推奨
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            prefer: 'type-imports',
          },
        ],
        '@typescript-eslint/no-unused-vars': 'off', // pluginと被っているためOFF
        '@typescript-eslint/switch-exhaustiveness-check': 'error', // Switch文の全検査を必須に
      },
    },
  ],
  plugins: [],
  // console.logが残っていればwarn
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['warn', 'info', 'error'],
      },
    ],
    // for in, for of, enumは使ってはいけない
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
    ],
    'prefer-arrow-callback': 'warn', // arrow functionの使用をを推奨
    'prefer-const': 'warn', // constの使用を推奨
    'prefer-template': 'warn', // テンプレートリテラルの使用を推奨
    'arrow-body-style': ['warn', 'as-needed'], // 必要な場合のみ囲む
    // reactの明示的なimportは不要なので禁止
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
          },
        ],
      },
    ],
    'react/no-unused-prop-types': 'warn', // 未使用propsの削除を推奨
    'react/jsx-boolean-value': 'warn', // JSXのbooleanの削除を推奨
    // JSXの自己終了タグの使用を推奨
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'warn', // hooksの基本的なlinter
    'react-hooks/exhaustive-deps': 'error', // effectやcallbackのdeps linter
  },
}
export default config
