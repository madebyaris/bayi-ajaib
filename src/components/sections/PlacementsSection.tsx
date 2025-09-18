import Image from "next/image";
import { cn } from "@/lib/utils";

export const PlacementsSection = () => {
  return (
    <section id="work" className="sm:p-8 max-w-7xl bg-neutral-50 rounded-3xl mt-10 mb-20 mx-auto p-6">
      <div className="relative pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-40"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-40"></div>
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-40"></div>
        <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-40"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-sm text-neutral-500">Featured placements</span>
            <h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-neutral-900 mt-2 font-medium tracking-tighter font-serif">
              Senior hires that accelerate product velocity.
            </h2>
            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200"></div>
              </div>
              <div className="hidden sm:grid grid-cols-3 gap-6 text-neutral-600 bg-neutral-50 px-4 relative">
                {[
                  { label: "Engineering" },
                  { label: "Design" },
                  { label: "Data & AI" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full mt-10">
            <p className="text-sm font-medium text-neutral-900 tracking-tight">Across product stages</p>
            <p className="text-sm text-neutral-600 mt-1 max-w-sm">
              From pre-seed to post-IPO—talent aligned to your roadmap, speed, and culture.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 hover:bg-neutral-800 transition text-sm text-white bg-neutral-900 h-10 max-w-sm rounded-full mt-4 px-4">
              Request detailed case studies
              <span className="inline-flex h-2 w-2 rounded-full bg-white" aria-hidden="true"></span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "Staff Frontend · Fintech",
              tag: "Engineering",
              src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
              aspect: "aspect-[3/4]",
            },
            {
              title: "UX Lead · B2B SaaS",
              tag: "Design",
              src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
              aspect: "aspect-[3/4]",
            },
            {
              title: "ML Lead · GenAI",
              tag: "Data & AI",
              src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
              aspect: "aspect-[1/1]",
            },
            {
              title: "Fractional CTO · Marketplace",
              tag: "Leadership",
              src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
              aspect: "aspect-[1/1]",
            },
          ].map((card) => (
            <article key={card.title} className={cn("relative overflow-hidden", card.aspect, "bg-center bg-cover border-neutral-200 border rounded-2xl")}> 
              <Image
                src={card.src}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-black/30 border border-white/20 rounded-full px-1.5 py-1.5 backdrop-blur" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 13 3 3 8-8"></path></svg>
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center text-xs text-white/90 bg-black/30 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur">
                  {card.tag}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-lg font-medium tracking-tight leading-tight">
                  {card.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
