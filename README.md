# nextjs-ts-daisy
## 概要
Next.jsに諸々を詰め込んだテンプレートになります。バックエンドにはAWSのAmplifyを使うことを想定しており、初めからでCognitoで認証を行えるようにしています。不要であれば、_`app.tsx`や`hooks`ディレクトリを空にした上で、`package.json`から関連ライブラリを削除してください。

## 使い方
```bash
npm install -g @aws-amplify/cli
amplify configure
amplify add auth
```

![sss](https://user-images.githubusercontent.com/61417777/179907850-80d0c794-2c2f-4e30-b3b4-c5e10ca9ac0d.png)
