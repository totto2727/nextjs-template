module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'import',
    'simple-import-sort',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'info', 'error'] }], // console.logが残っていればwarn
    'no-restricted-syntax': [
      // for in, for of, enumは使ってはいけない
      'error',
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
    'prefer-arrow-callback': 'error', // arrow functionを許可
    'prefer-const': 'error', // const推奨
    'func-style': ['error', 'expression'], // 関数式を使わなければいけない
    'arrow-body-style': ['error', 'always'], // 関数式の中身は必ず中括弧で囲む
    'no-restricted-imports': [
      'error',
      { paths: [{ name: 'react', importNames: ['default'] }] },
    ], // reactの明示的なimportは不要なので禁止
    'react/prop-types': 'off', // ts使うので不要
    'react/react-in-jsx-scope': 'off', // reactはグローバルなので不要
    'react/display-name': 'error', // 無名関数を禁止する
    'react/no-unused-prop-types': 'warn', // 未使用propsはエラー
    'react-hooks/rules-of-hooks': 'error', // hooksの基本的なlinter
    'react-hooks/exhaustive-deps': 'warn', // effectやcallbackのdeps linter
    'import/newline-after-import': 'error',
    'import/no-default-export': 'error', // default-exportを禁止する
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'simple-import-sort/imports': 'error', // import文の整列
    'simple-import-sort/exports': 'error', // export文の整列
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    // 一部ルールを除外する
    {
      files: [
        'src/pages/**/*.tsx',
        'src/pages/api/**/*.ts',
        'src/components/**/*.tsx',
      ], // pagesのdefault exportは仕方ないので除外
      rules: { 'import/no-default-export': 'off' },
    },
    {
      files: ['**/*.tsx'], // componentの戻り値の型定義の記述は必須にしない
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
}
