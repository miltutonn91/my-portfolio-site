import Works from "@/components/Works";
import Footer from "@/components/ui/Footer";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import Contact from '@/components/Contact';
import ScrollTopButton from "@/components/ui/ScrollTopButton";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#5F5555]">
      <HamburgerMenu isWorksPage />
      <Works />
      <ScrollTopButton />
      <ScrollIndicator />
      <Contact />
      <Footer />
    </main>
  );
}