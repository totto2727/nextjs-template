module.exports = {
  env: {
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'info', 'error'] }], // console.logが残っていればwarn
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
    // 'prefer-arrow-callback': 'error', // arrow functionを許可
    'prefer-const': 'off', // const推奨
    'prefer-template': 'warn', // テンプレートリテラルの使用を強制
    // 'func-style': ['error', 'expression'], // 関数式を使わなければいけない
    'arrow-body-style': ['warn', 'as-needed'], // 必要な場合のみ囲む
    'no-restricted-imports': [
      'error',
      { paths: [{ name: 'react', importNames: ['default'] }] },
    ], // reactの明示的なimportは不要なので禁止
    'react/no-unused-prop-types': 'warn', // 未使用props
    'react/jsx-boolean-value': 'warn', // JSXのbooleanの省略
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ], // JSXの自己終了タグの使用を強制
    'react-hooks/rules-of-hooks': 'warn', // hooksの基本的なlinter
    'react-hooks/exhaustive-deps': 'warn', // effectやcallbackのdeps linter
    '@typescript-eslint/no-explicit-any': 'error', // Any型を禁止にする
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 返り値の定義を必須にする
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/no-unused-vars': 'off', // pluginと被っているためOFF
    '@typescript-eslint/switch-exhaustiveness-check': 'error', // Switch文の全検査を必須にする
  },
  overrides: [],
}
