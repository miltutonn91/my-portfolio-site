import Works from '@/components/Works';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FV from '@/components/FV';
import Footer from "@/components/Footer";
import HamburgerMenu from "@/components/HamburgerMenu";
import ScrollTopButton from "@/components/ScrollTopButton";
import ScrollIndicator from "@/components/ScrollIndicator";


export default function Page() {
  return (
    <>
    <HamburgerMenu />
    <main className="bg-white text-gray-800">
      <FV />
      <Works />
      <About />
      <Contact/>
      <Footer />
      <ScrollTopButton />
      <ScrollIndicator />
    </main>
    </>
  );
}
