import Image from "next/image";

export const ContactSection = () => {
  return (
    <section id="contact" className="sm:px-6 lg:px-8 max-w-7xl mx-auto mt-24 mb-24 px-4">
      <div className="relative rounded-3xl bg-white ring-1 ring-neutral-200 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-20 -right-24 w-[480px] h-[480px] rounded-full bg-emerald-100 blur-3xl opacity-60"></div>
          <div className="absolute -bottom-24 -left-24 w-[520px] h-[520px] rounded-full bg-neutral-100 blur-3xl opacity-70"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-8 sm:p-12">
            <h3 className="text-3xl sm:text-4xl text-neutral-900 font-medium tracking-tighter font-serif">Book a hiring consult</h3>
            <p className="text-neutral-600 mt-2">Tell us what you&apos;re building and the outcomes you need. We&apos;ll share a tailored plan and relevant profiles within 48 hours.</p>

            <form className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-800">Your name</label>
                  <input id="name" name="name" type="text" required className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-800" placeholder="Alex Rivera" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-800">Company</label>
                  <input id="company" name="company" type="text" className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-800" placeholder="Acme Co." />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-800">Work email</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-800" placeholder="alex@company.com" />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-neutral-800">Primary role</label>
                  <select id="role" name="role" className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-800">
                    <option>Senior Engineer</option>
                    <option>Product Designer</option>
                    <option>Data / AI</option>
                    <option>Fractional Leadership</option>
                    <option>Multiple roles</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-800">What outcomes are you hiring for?</label>
                <textarea id="message" name="message" rows={5} className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-800" placeholder="Scope, tech stack, stage, timeline..."></textarea>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path></svg>
                  Your info is private. We&apos;ll never share or spam.
                </div>
                <button type="submit" className="inline-flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-xl hover:bg-neutral-800 transition">
                  Send request
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
              </div>
            </form>
          </div>

          <div className="relative p-8 sm:p-12 bg-neutral-950 text-white">
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent"></div>
              <div className="absolute left-0 top-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
            </div>

            <div className="relative">
              <p className="text-sm text-neutral-400">Signal</p>
              <h4 className="text-2xl font-medium tracking-tight mt-1">What clients say</h4>

              <div className="mt-6 space-y-6">
                <blockquote className="rounded-2xl bg-neutral-900 ring-1 ring-neutral-800 p-4">
                  <p className="text-neutral-200">&ldquo;Vibe sent three profiles that were better than our entire inbound in months. We signed our Staff FE in two weeks.&rdquo;</p>
                  <footer className="mt-3 flex items-center gap-3">
                    <span className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-neutral-800">
                      <Image src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=300&auto=format&fit=crop" alt="Client" fill sizes="32px" className="object-cover" />
                    </span>
                    <div>
                      <p className="text-sm">Priya N., VP Engineering</p>
                      <p className="text-xs text-neutral-400">Series B fintech</p>
                    </div>
                  </footer>
                </blockquote>

                <blockquote className="rounded-2xl bg-neutral-900 ring-1 ring-neutral-800 p-4">
                  <p className="text-neutral-200">&ldquo;The embedded model is the first time recruiting felt like product work—fast iteration, tight feedback, strong outcomes.&rdquo;</p>
                  <footer className="mt-3 flex items-center gap-3">
                    <span className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-neutral-800">
                      <Image src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=300&auto=format&fit=crop" alt="Client" fill sizes="32px" className="object-cover" />
                    </span>
                    <div>
                      <p className="text-sm">Jonah R., CPO</p>
                      <p className="text-xs text-neutral-400">B2B SaaS</p>
                    </div>
                  </footer>
                </blockquote>
              </div>

              <div className="mt-8">
                <p className="text-sm text-neutral-400">Recent logos</p>
                <div className="mt-3 grid grid-cols-3 gap-3 items-center">
                  <div className="rounded-xl bg-neutral-900 ring-1 ring-neutral-800 p-3 text-center text-neutral-300 text-sm">atlas</div>
                  <div className="rounded-xl bg-neutral-900 ring-1 ring-neutral-800 p-3 text-center text-neutral-300 text-sm">north</div>
                  <div className="rounded-xl bg-neutral-900 ring-1 ring-neutral-800 p-3 text-center text-neutral-300 text-sm">orbit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
