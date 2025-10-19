# AGENTS.md（ハイブリッド版）

> **目的（Purpose）**: CODEX.cli を安全に使用し、Tailwind CSS（CDN 経由）を採用した Next.js ポートフォリオサイトのコーディング支援を行う。主に **提案 → 承認 → 実行（proposal → approval → execution）** の流れを徹底し、取り返しのつかない操作を防ぎ、ベストプラクティスを遵守することを目的とする。

---

## 0) 対象範囲と前提（Scope & Assumptions）

* **プロジェクトタイプ（Project type）**: Next.js（App Router または Pages Router）によるポートフォリオサイト。
* **スタイリング（Styling）**: Tailwind CSS（CDN 経由） `<script src="https://cdn.tailwindcss.com"></script>` を使用（ローカル設定ファイルなし）。
* **主な目的（Primary goals）**: コード整形、リファクタリング、コンポーネント生成、DX 改善。
* **対象外（Out of scope）**（要明示的承認）: ファイル削除・依存関係変更・CI/CD 編集・シークレット管理。

---

## 1) 基本原則（Operating Principles）

1. **安全第一（Safety first）**: 破壊的操作は人間の承認なしに行わない。
2. **最小変更（Minimal surface change）**: 目的達成に必要な最小限の変更のみを行う。
3. **可逆性（Reversible steps）**: 変更前に Git をクリーンに保ち、作業ごとにブランチを作成する。
4. **明確性（Clarity）**: 提案時にメリット・デメリット・代替案・差分概要を提示する。
5. **標準準拠（Standards）**: Next.js・TypeScript・アクセシビリティ・Tailwind のベストプラクティスに従う。

---

## 2) 役割（Roles）

* **人間（Human / Owner）**: 提案の承認・コマンド実行・PR のマージ。
* **エージェント（Agent / CODEX.cli）**: 変更提案・安全なファイル編集・コンポーネント生成・コード整形を行う。

---

## 3) 標準権限設定（Default Permissions）

**許可（Allowed）**:

* 読み取り専用解析（ファイル構造のスキャンなど）。
* `app/`, `pages/`, `components/`, `lib/`, `hooks/`, `styles/`, `public/` 内での非破壊的編集（テキストのみ）。
* コード整形（Prettier 相当）・import 並び替え。
* 新規コンポーネント生成（`components/` 以下、`.tsx` or `.jsx`）。

**要承認（Require explicit approval）**:

* ファイル削除・移動・リネーム、src 外の編集、バイナリ・画像・フォント。
* `package.json`・Next.js 設定・CI/CD・`.env`・VCS 設定・履歴操作。

**禁止（Denied）**:

* シェルコマンド実行（例: `rm -rf`, `curl | bash`）。
* シークレットやネットワークアクセス。

---

## 4) 提案 → 承認 → 実行（Propose → Approve → Execute）ワークフロー

### 4.1 提案（Proposal / by Agent）

変更前に以下の **Proposal Card** を提示：

```md
**タスク名（Task Title）**: <短いアクション>
**目的（Goal）**: <内容と理由>
**対象ファイル（Files Touched）**: <パス一覧>
**変更種別（Change Type）**: format / refactor / generate / move / delete / other
**差分概要（Diff Summary）**: <概要>
**メリット（Pros）**:
- <利点>
**デメリット・リスク（Cons / Risks）**:
- <リスクと対策>
**代替案（Alternatives）**: <A案 vs B案>
**ロールバック計画（Rollback Plan）**: <Gitブランチ + 戻し手順>
**実行後チェック（Checks After Execution）**: <build, typecheck, QA>
```

**人間（Human）**は次のいずれかで応答：`APPROVE: <Task Title>` ／ `REVISE: <notes>` ／ `REJECT`

### 4.2 実行（Execution / by Agent）

* Git がクリーンであることを確認し、`feat/codex/<task>` ブランチを作成。
* 承認済みファイルのみ最小限の差分を適用。
* 原子的コミット単位で実行（大きい場合は分割）。
* 削除・移動・リネームは承認なしで行わない。

### 4.3 報告（Report / by Agent）

実行後に **Change Report** を提出：

```md
**タスク名（Task Title）**: <同上>
**ブランチ（Branch）**: feat/codex/<task>
**コミット一覧（Commits）**: <メッセージ>
**変更ファイル数（Files Changed）**: <数>
**主要差分（Key Diffs）**: <要点>
**検証（Validation）**:
- Build: ok/failed
- Typecheck: ok/failed
- Lint/Format: ok/failed
- Visual QA: notes
**次のステップ（Next Steps）**: PR 作成など
```

---

## 5) 安全ガードレール（Safety Guardrails）

### 5.1 破壊的操作（Destructive Actions）

* 削除・移動・リネーム・src外の編集は**確認必須**。
* 提案→承認→再確認の**2段階プロセス**。
* **Dry Run（差分プレビュー）**を常に表示。

### 5.2 パス制御（Allow / Deny Lists）

* **許可（Allow）**: `app/**/*`, `pages/**/*`, `components/**/*`, `lib/**/*`, `hooks/**/*`, `styles/**/*`, `public/**/*`
* **拒否（Deny）**: `.git/**/*`, `.next/**/*`, `node_modules/**/*`, `.env*`, `package*.json`, `*.lock`, 画像/動画/フォント類。

### 5.3 サイズ制限（Size & Rate Limits）

* 1タスクあたり最大 **10ファイル** または **800行変更**。
* 1000行超のファイルは要承認。
* 同時に進行できる提案は1件のみ。

### 5.4 Git 運用（Git Hygiene）

* 作業前にクリーン状態確認。
* コミット命名は `feat:` / `fix:` / `refactor:` / `style:` / `docs:`。
* すべての提案・報告を `codex_logs/<日付>-<task>/` に保存。

---

## 6) Next.js + Tailwind（CDN）ルール

### 6.1 Next.js

* App Router 優先、存在しない場合 Pages Router。
* デフォルトは Server Component、Client 専用時のみ `"use client"`。
* ファイルベースルーティングを維持、構造変更は要承認。
* `Image` / `Link` を使用、メタデータは `app/layout.tsx` または各ページで管理。

### 6.2 Tailwind via CDN

* ユーティリティクラスをインライン利用。
* `@apply` やカスタムテーマは使用しない（繰り返し出現時はコンポーネント化提案）。
* レスポンシブ・ダークモードは明示的に記述。
* クラスは1行120文字以内推奨、長い場合は改行。

### 6.3 アクセシビリティ / SEO

* セマンティックHTMLを優先、必要時のみARIA。
* フォーカスアウトラインは視認可能に保持。
* 画像には `alt`、各ページに `title` / メタ情報を付与。

---

## 7) コンポーネント生成規約（Component Generation Standards）

* 配置: `components/<Domain>/<Name>.tsx` または `components/<Name>.tsx`
* 命名: PascalCase、単一export時は default export。
* Props: 型付け、デフォルト値、安定したAPI。
* スタイル: Tailwindユーティリティ中心、動的計算のみ inline。
* Variants: 複雑化時は composition を優先。

```tsx
// components/ui/Button.tsx
import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button' | 'a';
};

export default function Button({ as = 'button', className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition';
  const focus = 'focus:outline-none focus-visible:ring focus-visible:ring-offset-2';
  const theme = 'bg-gray-900 text-white hover:bg-gray-800';
  const cn = [base, focus, theme, className].join(' ');

  if (as === 'a') return <a className={cn} {...(props as any)} />;
  return <button className={cn} {...props} />;
}
```

---

## 8) 実行ポリシー（Execution Policies）

* シェルコマンド実行禁止。
* 書き込み前に常に差分プレビューを提示（Diff-first）。
* 失敗時は全変更をロールバック（Atomic edits）。
* ログ（proposal.md / report.md）を `codex_logs/` に保存。

---

## 9) 検証チェックリスト（Validation Checklist）

* ビルド: `next build`（もしくは静的チェック）。
* Typecheck: TSがある場合は通過確認。
* ルート構造が変化していないこと。
* Console エラーなし・レスポンシブ確認。
* Lighthouse簡易チェック（手動）。

---

## 10) 使用例（Examples）

**A) コンポーネント抽出（Refactor to smaller component）**

```
Goal: Extract <HeroCTA> from app/page.tsx into components/HeroCTA.tsx.
Expect: move repetitive Tailwind markup into reusable component.
Constraints: no route change; no deletion; show diff first.
```

**B) <Card> コンポーネント作成（Create a <Card> component）**

```
Goal: Generate components/ui/Card.tsx with header/body/footer slots using Tailwind utilities.
Constraints: add import examples; do not edit existing routes; show diff; keep < 100 lines.
```

**C) 整形（Format & import-sort）**

```
Goal: Format and sort imports in all .tsx files under components/ (<= 10 files).
Constraints: preview diffs; stop if any file >1000 lines.
```

---

## 11) 復旧とロールバック（Recovery & Rollback）

* 未承認の変更は即中止し理由を提示。
* 変更後に却下された場合、Git revert または `codex_logs/` から復旧。
* ブランチは短命化し、レビュー後に squash-merge。

---

## 12) 補足（Appendix）

**禁止コマンド（Denied Commands）**: `rm -rf`, `sudo`, `chmod`, `curl | bash`, `git push --force`, `.env*`, lockfiles。

**バイナリ・大容量ファイル（Binary & Large Files）**: デフォルトで除外、要承認。

**文字コード（Encoding）**: UTF-8 / LF。

---

> **要約（TL;DR）**: エージェントは常に「提案 → 承認 → 実行」の手順を守り、差分とメリデメを提示した上で、Next.js + Tailwind(CDN) ポートフォリオに適した安全・可逆的な変更のみを行うこと。
