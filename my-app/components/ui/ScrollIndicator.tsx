// components/ScrollIndicator.tsx

export default function ScrollIndicator() {
  return (
    <div className="hidden md:flex fixed right-8 top-[80%] -translate-y-1/2 z-20 items-center gap-4">
      <p
        className="text-[12px] tracking-[0.25em] text-[#A28686] rotate-90"
        style={{ fontFamily: "'Marcellus', serif" }}
      >
        SCROLL
      </p>

      <div className="relative h-[120px] w-[1px] bg-[#D8CACA] overflow-hidden">
        <span className="absolute left-0 top-0 block h-[40px] w-[1px] bg-[#A28686] animate-scrollLine" />
      </div>
    </div>
  );
}