import Skill from "./components/Skill";
import Strengths from "./components/Strengths";
import AboutProfile from "./components/AboutProfile";
import Contact from "@/components/Contact";
import Footer from "@/components/ui/Footer";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import ScrollTopButton from "@/components/ui/ScrollTopButton";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function AboutPage() {
  return (
    <>
      <HamburgerMenu isAboutPage />

      <main className="relative overflow-hidden bg-[#FBF7F2] text-[#6A5C5C]">
        {/* About用：全体にオレンジを感じる淡いグラデーション */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#FBF3EC_0%,#FAF6F1_42%,#F8EFE7_100%)]" />

          <div className="absolute top-[-6%] left-[-18%] h-[760px] w-[760px] rounded-full bg-[#F1D4B8]/54 blur-[145px]" />
          <div className="absolute top-[4%] right-[-18%] h-[600px] w-[600px] rounded-full bg-[#EFD4D8]/34 blur-[130px]" />
          <div className="absolute top-[34%] left-[20%] h-[680px] w-[680px] rounded-full bg-[#F4E2D0]/44 blur-[140px]" />
          <div className="absolute bottom-[-22%] left-[-10%] h-[620px] w-[620px] rounded-full bg-[#F1D4B8]/38 blur-[135px]" />
          <div className="absolute right-[-10%] bottom-[-16%] h-[460px] w-[460px] rounded-full bg-[#E8F2D7]/18 blur-[120px]" />

          <div className="absolute inset-0 bg-white/3" />
        </div>

        <section
          id="top"
          className="relative z-[1] px-5 py-14 md:px-10 md:py-[88px]"
        >
          <div className="mx-auto w-full max-w-[1120px]">
            <div className="mb-16 text-center md:mb-20">
              <h1 className="section-heading">About</h1>
            </div>

            <AboutProfile />
          </div>
        </section>

        <Skill />

        <Strengths />

        <div className="relative z-[1] text-[#5F5555]">
          <Contact />
          <Footer />
        </div>

        <ScrollTopButton />

        <ScrollIndicator />
      </main>
    </>
  );
}
