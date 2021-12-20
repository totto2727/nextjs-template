# nextjs-ts-daisy
## 概要
Next.jsに諸々を詰め込んだテンプレートになります。バックエンドにはAWSのAmplifyを使うことを想定しており、初めからでCognitoで認証を行えるようにしています。不要であれば、_`app.tsx`や`hooks`ディレクトリを空にした上で、`package.json`から関連ライブラリを削除してください。

## 使い方
```bash
npm install -g @aws-amplify/cli
amplify configure
amplify add auth
```

```
next-ts-daisy
├ public // 画像などの静的ファイル
├ src
│ ├── components // 使い回すコンポーネント
│ │   ├── projects // 汎用的な状態を持ったコンポーネント
│ │   └── uiParts // 汎用的な純粋なコンポーネント
│ │       ├── [Component Name]
│ │       │   ├── index.tsx
│ │       │   ├── index.stories.tsx
│ │       │   └── presenter.tsx
│ │       │   ├── presenter.test.tsx
| |
│ ├── pages
│ │   └── [PageName]
│ │       ├── index.tsx
│ │       ├── index.test.tsx
│ │       ├── hooks.ts
│ │       ├── hooks.test.tsx
│ │       ├── presenter.tsx
│ │       ├── presenter.test.tsx
│ │       └── [Component Name] // 特定ページでのみ利用する状態を持ったコンポーネント
| |
| ├── repositories // AppSyncや外部APIへのクエリ
| ├── types // 汎用的な型
│ ├── hooks // 汎用的なhooks（Contextのラッパー込み）
│ └── utils // 汎用的な関数

```
