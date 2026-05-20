"use client";

import { useState } from "react";
import FV from "@/components/FV";
import ScrollTopButton from "@/components/ui/ScrollTopButton";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onFinish={() => setIsLoaded(true)} />}

      {isLoaded && (
        <main className="fv-site-enter bg-white text-gray-800">
          <FV />
        </main>
      )}

      {isLoaded && (
        <div className="lg:hidden">
          <HamburgerMenu />
        </div>
      )}

      {isLoaded && <ScrollIndicator hideOnDesktopFv />}
      {isLoaded && <ScrollTopButton />}
    </>
  );
}
