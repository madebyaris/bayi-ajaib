export const PlansSection = () => {
  return (
    <section id="services" className="sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200 mt-12 pt-16 px-4">
      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-sm text-neutral-600">Plans</p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-neutral-900 mt-2 font-medium tracking-tighter font-serif">
              Flexible ways to hire senior talent
            </h3>
            <p className="sm:text-base text-sm text-neutral-600 mt-4 max-w-[80ch]">
              Choose on-demand sprints, embedded partnership, or a monthly subscription—built for speed and quality.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 hover:bg-neutral-800 transition text-sm font-medium text-white bg-neutral-900 ring-neutral-800 ring-1 rounded-xl py-3 px-6">
            Get a tailored quote
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {[
            { name: "On‑Demand Sourcing", price: "$9k", period: "per week", features: ["Calibrated brief + search strategy","6–8 vetted profiles","Scheduling + feedback loop"] },
            { name: "Embedded Partner", price: "$25k", period: "per month", features: ["Dedicated senior recruiter","Weekly pipeline reviews","ATS + interview orchestration"] },
            { name: "Subscription", price: "Custom", period: "per month", features: ["Ongoing talent pipeline","Unlimited shortlists","Manager enablement"] },
          ].map((plan) => (
            <div key={plan.name} className="relative rounded-2xl border border-neutral-200 bg-white p-8 hover:shadow-lg hover:border-neutral-300 transition">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-medium tracking-tight text-neutral-900 font-serif">{plan.name}</h4>
                <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2 }}><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"></path><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"></path></svg>
                  Fast
                </span>
              </div>
              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl text-neutral-900 font-medium tracking-tighter">{plan.price}</span>
                  <span className="text-neutral-600 text-sm">{plan.period}</span>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"></path></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 hover:bg-neutral-200 transition text-sm font-medium text-neutral-900 bg-neutral-100 w-full border-neutral-200 border rounded-xl mt-8 py-3 px-4">
                Start now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
