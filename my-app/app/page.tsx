import Works from '@/components/Works';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FV from '@/components/FV';
import Footer from '@/components/ui/Footer';
import HamburgerMenu from '@/components/ui/HamburgerMenu';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function Page() {
  return (
    <>
      <HamburgerMenu />
      <main className="bg-white text-gray-800">
        <FV />
        <Works />
        <About />
        <Contact />
        <Footer />
        <ScrollTopButton />
        <ScrollIndicator />
      </main>
    </>
  );
}
