"use client";

export default function WebDevelopmentAccordion() {
  return (
    <div className="flex flex-col gap-5 font-['Noto_Sans'] md:gap-7">
      {/* HTML / CSS */}
      <div className="flex w-full flex-col gap-3">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[220px_1fr] md:gap-0">
          <p className="item-heading">HTML / CSS</p>

          <p className="body-text-small">
            デザインカンプを正確に再現し、レスポンシブ対応の実装ができます。
          </p>
        </div>

        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>

      {/* JavaScript */}
      <div className="flex w-full flex-col gap-3">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[220px_1fr] md:gap-0">
          <p className="item-heading">JavaScript</p>

          <p className="body-text-small">
            動的なUIやアニメーションを実装し、直感的なサイトの動きを作れます。
          </p>
        </div>

        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>

      {/* TypeScript */}
      <div className="flex w-full flex-col gap-3">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[220px_1fr] md:gap-0">
          <p className="item-heading">TypeScript</p>

          <p className="body-text-small">
            型定義によって安全で読みやすいコードを書けます。
            <br />
            React / Next.js 環境でのProps管理やコンポーネント設計に活かしています。
          </p>
        </div>

        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>

      {/* React / Next.js */}
      <div className="flex w-full flex-col gap-3">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[220px_1fr] md:gap-0">
          <p className="item-heading">React / Next.js</p>

          <p className="body-text-small">
            コンポーネント思考でUIを設計し、再利用性の高い実装ができます。
            <br />
            App Router構成やSEOを意識したページ設計を行い、パフォーマンスにも配慮した開発を心がけています。
          </p>
        </div>

        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>

      {/* Tailwind */}
      <div className="flex w-full flex-col gap-3">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[220px_1fr] md:gap-0">
          <p className="item-heading">Tailwind</p>

          <p className="body-text-small">
            デザイン意図を反映したスタイリングができ、柔軟にレスポンシブ対応が可能です。
            <br />
            ユーティリティクラスを活用し、効率的かつ統一感のあるUI実装を行えます。
          </p>
        </div>

        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>
    </div>
  );
}