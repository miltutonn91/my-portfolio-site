import FV from '@/components/FV';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function Page() {
  return (
    <>
      <main className="bg-white text-gray-800">
        <FV />
      </main>

      <ScrollIndicator hideOnDesktopFv />
      <ScrollTopButton />
    </>
  );
}