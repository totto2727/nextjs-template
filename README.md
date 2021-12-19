```
next-ts-daisy
├ public // 画像などの静的ファイル
├ src
│ ├── components // 使い回すコンポーネント
│ │   ├── projects // 汎用的な状態を持ったコンポーネント
│ │   └── uiParts // 汎用的な純粋なコンポーネント
│ │       ├── [Component Name]
│ │       │   ├── index.stories.tsx
│ │       │   ├── index.tsx
│ │       │   ├── presenter.test.tsx
│ │       │   └── presenter.tsx
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
│ ├── hooks // 汎用的なhooks（ContextやRecoil込み）をまとめる
│ └── utils // 共通関数などをまとめる

```
