# ポートフォリオサイト

## プロジェクトの概要

フロントエンドエンジニアへの転職活動に向けて制作したポートフォリオサイトです。

制作実績、スキル、自己紹介、お問い合わせ導線をまとめ、制作物や自身の制作姿勢が分かりやすく伝わるように設計しました。

作品一覧から各詳細ページへ遷移できる構成にし、各作品の概要・担当範囲・使用技術・制作期間などを確認できるようにしています。

また、今後作品を追加・更新していくことを想定し、作品情報を `works.ts` で管理し、表示部分とデータを分けた構成にしています。

### サイトURL

https://my-portfolio-site-sage-tau.vercel.app/

### GitHub URL

https://github.com/miltutonn91/my-portfolio-site

---

## デザインについて

自身が制作において大切にしている「丁寧さ」と「誠実さ」が伝わるよう、落ち着いた配色と余白を活かしたシンプルなデザインにしました。
やわらかな雰囲気の中にも情報の読みやすさを保てるよう、文字のサイズやコントラスト、要素間の余白を意識して整えています。

---

## 主要技術・ツール

| 技術 | 用途 |
|---|---|
| TypeScript | 型定義を用いた実装 |
| React | UIコンポーネントの作成 |
| Next.js | ルーティング・ページ構成 |
| Tailwind CSS | スタイリング |
| Node.js | 開発環境・npm scriptsの実行 |
| Git / GitHub | バージョン管理・ソースコード管理 |
| Figma | デザイン作成 |
| Vercel | デプロイ |

---

## コマンド一覧

| コマンド | 内容 |
|---|---|
| `npm install` | 必要なパッケージをインストール |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番環境用にビルド |
| `npm run start` | ビルド後のアプリを起動 |
| `npm run lint` | ESLintでコードをチェック |
| `npm run format` | Prettierでコードを整形 |
| `npm run format:check` | Prettierで整形ルールに沿っているか確認 |
| `npm run convert:text-rem` | テキスト関連のpx指定をremに変換する自作スクリプトを実行 |

---

## ディレクトリ構成

```txt
my-portfolio-site/
├── .gitignore
├── README.md
└── my-app/
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── app/
    │   ├── about/
    │   │   ├── components/
    │   │   │   ├── AboutProfile.tsx
    │   │   │   ├── Skill.tsx
    │   │   │   └── Strengths.tsx
    │   │   └── page.tsx
    │   ├── works/
    │   │   ├── [id]/
    │   │   │   └── page.tsx
    │   │   ├── components/
    │   │   │   ├── WorksCard.tsx
    │   │   │   └── WorksDetail.tsx
    │   │   └── page.tsx
    │   ├── globals.css
    │   ├── icon.png
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── ui/
    │   │   ├── BlurIn.tsx
    │   │   ├── CustomCursor.tsx
    │   │   ├── FadeIn.tsx
    │   │   ├── Footer.tsx
    │   │   ├── HamburgerMenu.tsx
    │   │   ├── LoadingScreen.tsx
    │   │   ├── ScrollIndicator.tsx
    │   │   ├── ScrollTopButton.tsx
    │   │   └── button.tsx
    │   ├── Contact.tsx
    │   └── FV.tsx
    ├── data/
    │   └── works.ts
    ├── lib/
    │   └── utils.ts
    ├── public/
    │   └── images/
    ├── scripts/
    │   └── text-px-to-rem.js
    ├── components.json
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    └── tsconfig.json
```

---


## 開発環境構築方法

### 1. リポジトリをクローン

```bash
git clone https://github.com/miltutonn91/my-portfolio-site.git
```

### 2. ディレクトリへ移動

```bash
cd my-portfolio-site/my-app
```

### 3. パッケージをインストール

```bash
npm install
```

### 4. 開発サーバーを起動

```bash
npm run dev
```

### 5. ブラウザで確認

```txt
http://localhost:3000
```

本サイトは Next.js で制作しているため、ローカル環境で確認する場合はパッケージのインストールと開発サーバーの起動が必要です。
