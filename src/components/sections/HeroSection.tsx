import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative sm:px-6 md:px-10 w-full max-w-7xl mt-12 mr-auto mb-16 ml-auto pr-4 pl-4">
      <h1 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] font-medium text-black tracking-tighter font-serif">
        Indonesia&apos;s Leading Headhunter &
        <span className="inline-block align-middle sm:h-12 sm:w-20 md:h-16 md:w-28 w-14 h-10 relative mx-2 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.12)] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400&auto=format&fit=crop"
            alt="Professional talent"
            fill
            sizes="(max-width: 768px) 56px, (max-width: 1024px) 112px, 112px"
            className="object-cover"
            priority
          />
        </span>
        Talent Acquisition Partner
      </h1>
      <p className="sm:text-2xl text-base text-black max-w-3xl mt-4">
        Executive Search, Recruitment Agency Services & HR Consulting. Serving Jakarta, Surabaya, Bandung. Vetted professionals, precision matching, guaranteed results.
      </p>

      <div className="flex flex-wrap gap-2.5 mt-8">
        {[
          { label: "Senior Engineering" },
          { label: "Product Design" },
          { label: "Data & AI" },
          { label: "Fractional Leaders" },
        ].map((chip) => (
          <span
            key={chip.label}
            className="inline-flex items-center gap-2 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-full py-1.5 px-3 shadow-sm backdrop-blur"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 13 3 3 8-8"></path></svg>
            {chip.label}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
        <a href="#work" className="inline-flex items-center justify-center hover:bg-neutral-800 transition text-base font-medium text-white bg-neutral-900 h-12 rounded-full px-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          Browse placements
        </a>
        <a href="#contact" className="inline-flex items-center justify-center hover:bg-neutral-100 transition text-base font-medium text-neutral-900 bg-white h-12 border-neutral-200 border rounded-full px-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          Hire now
        </a>
      </div>
    </section>
  );
};
