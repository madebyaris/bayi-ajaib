import Image from "next/image";
import { cn } from "@/lib/utils";

export const TalentCloudSection = () => {
  return (
    <section id="cloud" className="relative sm:px-6 lg:px-8 overflow-hidden lg:overflow-visible max-w-7xl mr-auto ml-auto pr-4 pb-20 pl-4">
      <div className="relative rounded-3xl bg-neutral-950 ring-1 ring-neutral-800 p-2 sm:p-3">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-24 top-1/3 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 blur-3xl opacity-40"></div>
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 relative">
          {/* Left Sidebar */}
          <aside className="lg:col-span-3 bg-neutral-900/60 ring-1 ring-neutral-800 rounded-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-gradient-to-b from-emerald-500 to-emerald-600 ring-1 ring-emerald-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3v18"></path><path d="M3 12h18"></path></svg>
                </div>
                <span className="text-white text-sm font-medium tracking-tight">Vibe Talent Cloud</span>
              </div>
              <button className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-neutral-800 transition text-neutral-300 ring-1 ring-neutral-800" aria-label="Open menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 12h16"></path><path d="M4 6h16"></path><path d="M4 18h16"></path></svg>
              </button>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="relative w-8 h-8 overflow-hidden rounded-full ring-1 ring-neutral-700">
                <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=320&auto=format&fit=crop" alt="Avatar" fill sizes="32px" className="object-cover" />
              </span>
              <div>
                <p className="text-white text-sm font-medium tracking-tight">Alex Rivera</p>
                <p className="text-neutral-400 text-xs">Head of Talent</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2 bg-neutral-900 ring-1 ring-neutral-800 rounded-xl px-3 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                <input aria-label="Search skills, roles" type="text" placeholder="Search skills, roles..." className="w-full bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500" />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Navigation</p>
              <nav className="space-y-1">
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-100 bg-neutral-800 ring-1 ring-neutral-700" href="#">Dashboard</a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition" href="#">Shortlists</a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition" href="#">Interviews</a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition" href="#">Offers</a>
              </nav>
            </div>

            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Recent roles</p>
              <ul className="space-y-1 text-sm">
                {[
                  "Staff Frontend · React/TS",
                  "Product Design Lead · B2B",
                  "ML Engineer · GenAI",
                  "Data Platform Engineer",
                  "Fractional CTO",
                ].map((r) => (
                  <li key={r} className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition">{r}</li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Matching Area */}
          <main className="lg:col-span-6 bg-neutral-900/60 ring-1 ring-neutral-800 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
            <header className="flex items-start justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl text-white font-medium tracking-tight">AI Match Generator</h2>
                <p className="text-sm text-neutral-400 mt-1">Describe your role. Get vetted profiles with signal, fast.</p>
              </div>
              <div className="inline-flex items-center gap-2">
                <button className="w-8 h-8 rounded-lg ring-1 ring-neutral-800 hover:bg-neutral-800 text-neutral-300 inline-flex items-center justify-center" aria-label="More">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </button>
              </div>
            </header>

            <div className="mt-4 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 ring-1 ring-neutral-800 p-4 sm:p-6 relative">
              {/* Prompt bubble */}
              <div className="mt-4 max-w-xl ml-auto">
                <div className="rounded-2xl bg-neutral-800/80 ring-1 ring-neutral-700 text-sm text-neutral-200 px-4 py-3">
                  Find a Staff Frontend Engineer (React/TypeScript/Next.js) with design systems experience, shipped SaaS at scale, and overlap in ET to CET. Bonus: GraphQL and performance tuning.
                </div>
              </div>

              {/* Candidate cards */}
              <div className="mt-8 flex items-end justify-center gap-4">
                {["https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80"].map((src, idx) => (
                  <div key={src} className={cn("relative", idx===0? "-rotate-6" : idx===2? "rotate-6" : "z-10")}>
                    <div className={cn("rounded-xl overflow-hidden ring-1", idx===1?"w-52 h-36 ring-emerald-300 shadow-[0_0_0_2px_rgba(16,185,129,0.35)]":"w-44 h-32 ring-white/10")}>
                      <span className="relative block w-full h-full">
                        <Image src={src} alt="Candidate" fill sizes="(max-width:768px) 33vw, 200px" className="object-cover" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response bubble */}
              <div className="mt-6 max-w-xl">
                <div className="rounded-2xl bg-neutral-800/80 ring-1 ring-neutral-700 text-sm text-neutral-200 px-4 py-3">
                  Great match. Here are three senior profiles with system design depth and SaaS scale experience. Each includes work samples, references, and availability.
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 flex items-center gap-2 flex-wrap">
                {["React","TypeScript"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 text-xs text-emerald-300 bg-emerald-900/30 rounded-full px-3 py-1 ring-1 ring-emerald-700">
                    {t}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m20 6-11 11-5-5"></path></svg>
                  </span>
                ))}
              </div>
            </div>

            {/* Role input */}
            <div className="mt-4 flex items-end gap-3">
              <div className="flex-1 rounded-2xl bg-neutral-900 ring-1 ring-neutral-800 px-3 py-2">
                <div className="flex items-center gap-2">
                  <button className="inline-flex hover:text-emerald-400 transition text-neutral-400 w-8 h-8 items-center justify-center" aria-label="Attach">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                  </button>
                  <input aria-label="Role brief" type="text" placeholder="Describe the role, outcomes, and must-have skills..." className="flex-1 bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500" />
                </div>
              </div>
              <button className="w-12 h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-400 transition ring-1 ring-emerald-400 inline-flex items-center justify-center" aria-label="Generate matches">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path></svg>
              </button>
            </div>
            <p className="mt-2 text-[11px] text-neutral-500">Your briefs stay private. We only share profiles with your consent.</p>
          </main>

          {/* Right Sidebar (simplified) */}
          <aside className="lg:col-span-3 bg-neutral-900/60 ring-1 ring-neutral-800 rounded-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-xs text-emerald-200 bg-emerald-900/40 rounded-full px-3 py-1 ring-1 ring-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true"></span>
                Plan: Pro
              </span>
              <button className="w-8 h-8 inline-flex items-center justify-center rounded-lg ring-1 ring-neutral-800 text-neutral-300 hover:bg-neutral-800" aria-label="Add">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3v18"></path><path d="M3 12h18"></path></svg>
              </button>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm text-neutral-300 font-medium tracking-tight">Open Roles</p>
                <span className="inline-flex items-center text-[11px] text-black bg-emerald-400 rounded-full px-2 py-0.5 ring-1 ring-emerald-300">Live</span>
              </div>
              <div className="space-y-2">
                {["AI Platform · Staff FE","B2B SaaS · UX Lead","GenAI · ML Engineer"].map((r, i) => (
                  <div key={r} className={cn("p-3 rounded-xl ring-1", i===1?"ring-emerald-700 bg-emerald-900/20":"ring-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition")}>
                    <p className="text-sm text-neutral-200">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
