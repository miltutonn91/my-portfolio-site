import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutProfile() {
  return (
    <FadeIn>
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-stretch md:gap-20">
        {/* 画像 */}
        <div className="flex items-stretch justify-center md:w-1/2">
          <div className="relative h-[370px] w-[280px] overflow-hidden bg-[#FFFDF8]">
            <Image
              src="/images/about/profile-detail.jpg"
              alt="プロフィール写真"
              fill
              priority
              className="object-cover"
              sizes="280px"
            />
          </div>
        </div>

        {/* テキスト */}
        <div className="mx-auto flex w-full max-w-[520px] flex-col justify-center text-left md:mx-0 md:w-1/2 md:max-w-none">
          <div className="mb-12 flex items-baseline gap-[14px]">
            <p className="text-[1.25rem] leading-none font-bold tracking-[0.04em] text-[#5F5555] md:text-[1.5rem]">
              梅田 実沙
            </p>

            <p className="text-[0.8125rem] leading-[24px] font-normal tracking-[0.12em] text-[#6A5C5C]">
              MISA UMEDA
            </p>
          </div>

          <p className="body-text mb-6 max-w-[520px] whitespace-pre-line">
            1998年生まれ。愛知県出身。職業は看護師です。
          </p>

          <p className="body-text mb-6 max-w-[520px] whitespace-pre-line">
            動きや操作を通して情報を伝えられるWebの表現に興味を持ち、Webデザインを学ぶことを決意しました。
            見た目の美しさだけでなく、情報の伝わり方や使いやすさを支える役割があることを学ぶ中で、フロントエンドエンジニアを目指すようになりました。
            どんな小さなことにも丁寧に向き合い、誠実に取り組む姿勢を大切にしています。
          </p>

          <p className="body-text max-w-[520px] whitespace-pre-line">
            趣味は写真を撮ることと音楽鑑賞です。休日はカメラを持って季節の植物や街並みを撮影したり、ライブ会場で音楽に触れたりしながら過ごしています。
          </p>
        </div>
      </div>
    </FadeIn>
  );
}