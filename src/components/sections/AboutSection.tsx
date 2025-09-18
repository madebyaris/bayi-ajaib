import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="about" className="sm:px-6 lg:px-8 max-w-7xl mx-auto mt-24 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-neutral-900 font-medium tracking-tighter font-serif">
            Operators turned talent partners
          </h3>
          <p className="text-neutral-600 mt-4">
            We've shipped products at venture-backed startups and public companies. Now we help founders build teams that move with the same velocity—without compromising on quality.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-neutral-800">
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"></path></svg>
              2,500+ senior profiles vetted with work samples and references
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"></path></svg>
              Global coverage across ET ↔ CET time zones
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"></path></svg>
              Embedded process design: scorecards, interview loops, offers
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-3 gap-3">
            <span className="relative rounded-2xl aspect-[4/5] w-full border border-neutral-200 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Team working session" fill sizes="(max-width: 768px) 33vw, 25vw" className="object-cover" />
            </span>
            <span className="relative rounded-2xl aspect-square w-full border border-neutral-200 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" alt="Interview loop" fill sizes="(max-width: 768px) 33vw, 25vw" className="object-cover" />
            </span>
            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden border border-neutral-200">
              <span className="relative block h-full w-full">
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Founder collaboration" fill sizes="(max-width: 768px) 33vw, 25vw" className="object-cover" />
              </span>
            </div>
            <span className="relative rounded-2xl aspect-[4/5] w-full border border-neutral-200 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" alt="Product planning" fill sizes="(max-width: 768px) 33vw, 25vw" className="object-cover" />
            </span>
            <span className="relative rounded-2xl aspect-square w-full border border-neutral-200 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop" alt="Engineering culture" fill sizes="(max-width: 768px) 33vw, 25vw" className="object-cover" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
