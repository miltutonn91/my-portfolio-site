"use client";

export default function WebDevelopmentAccordion() {
  return (
    <div className="flex flex-col gap-[30px] items-start text-[#726F6F] text-[16px] tracking-[0.48px] leading-[24px] font-['Noto_Sans']">
      {/* HTML / CSS */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="grid grid-cols-[220px_1fr] items-start">
          <p className="text-[#A28686] font-semibold text-[16px] tracking-[0.48px]">
            HTML / CSS
          </p>
          <p className="text-[#726F6F] text-[14px] leading-[24px] tracking-[0.42px]">
            デザインカンプを正確に再現し、レスポンシブ対応の実装ができます。
          </p>
        </div>
        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>

      {/* JavaScript */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="grid grid-cols-[220px_1fr] items-start">
          <p className="text-[#A28686] font-semibold text-[16px] tracking-[0.48px]">
            JavaScript
          </p>
          <p className="text-[#726F6F] text-[14px] leading-[24px] tracking-[0.42px]">
            動的なUIやアニメーションを実装し、直感的なサイトの動きを作れます。
          </p>
        </div>
        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>

      {/* TypeScript */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="grid grid-cols-[220px_1fr] items-start">
          <p className="text-[#A28686] font-semibold text-[16px] tracking-[0.48px]">
            TypeScript
          </p>
          <p className="text-[#726F6F] text-[14px] leading-[24px] tracking-[0.42px]">
            型定義によって安全で読みやすいコードを書けます。
            <br />
            React / Next.js 環境でのProps管理やコンポーネント設計に活かしています。
          </p>
        </div>
        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>

      {/* React / Next.js */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="grid grid-cols-[220px_1fr] items-start">
          <p className="text-[#A28686] font-semibold text-[16px] tracking-[0.48px]">
            React / Next.js
          </p>
          <p className="text-[#726F6F] text-[14px] leading-[24px] tracking-[0.42px]">
            コンポーネント思考でUIを設計し、再利用性の高い実装ができます。
            <br />
            App Router構成やSEOを意識したページ設計を行い、
            パフォーマンスにも配慮した開発を心がけています。
          </p>
        </div>
        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>

      {/* Tailwind */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="grid grid-cols-[220px_1fr] items-start">
          <p className="text-[#A28686] font-semibold text-[16px] tracking-[0.48px]">
            Tailwind
          </p>
          <p className="text-[#726F6F] text-[14px] leading-[24px] tracking-[0.42px]">
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
