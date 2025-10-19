import Works from '@/components/Works';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FV from '@/components/FV';

export default function Page() {
  return (
    <main className="bg-white text-gray-800">
      <FV />
      <Works />
      <About />
      <Contact/>
    </main>
  );
}
