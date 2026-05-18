import FV from '@/components/FV';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import HamburgerMenu from "@/components/ui/HamburgerMenu";

export default function Page() {
  return (
    <>
      <main className="bg-white text-gray-800">
        <FV />
      </main>
      <div className="md:hidden">
        <HamburgerMenu />
      </div>

      <ScrollIndicator hideOnDesktopFv />
      <ScrollTopButton />
    </>
  );
}