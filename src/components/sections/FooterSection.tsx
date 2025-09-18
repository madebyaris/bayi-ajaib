export const FooterSection = () => {
  return (
    <footer className="border-t border-neutral-200">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <span className="text-lg font-semibold tracking-tight font-serif">VIBE TALENT</span>
            <p className="text-sm text-neutral-600 mt-3">We connect ambitious teams with senior engineers, designers, data/AI talent, and fractional leaders.</p>
          </div>
          <nav className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <p className="text-neutral-800 font-medium">Explore</p>
              <a className="block text-neutral-600 hover:text-neutral-900 transition" href="#work">Placements</a>
              <a className="block text-neutral-600 hover:text-neutral-900 transition" href="#cloud">Talent Cloud</a>
              <a className="block text-neutral-600 hover:text-neutral-900 transition" href="#services">Plans</a>
            </div>
            <div className="space-y-3">
              <p className="text-neutral-800 font-medium">Company</p>
              <a className="block text-neutral-600 hover:text-neutral-900 transition" href="#about">About</a>
              <a className="block text-neutral-600 hover:text-neutral-900 transition" href="#contact">Contact</a>
              <a className="block text-neutral-600 hover:text-neutral-900 transition" href="#">Privacy</a>
            </div>
          </nav>
          <div className="sm:text-right">
            <p className="text-sm text-neutral-600">Join our talent network</p>
            <a href="#" className="inline-flex items-center gap-2 mt-3 text-sm text-white bg-neutral-900 hover:bg-neutral-800 transition rounded-full px-4 py-2">
              Submit profile
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">© 2025 Vibe Talent. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-lg ring-1 ring-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 transition" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-lg ring-1 ring-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 transition" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><path d="M17.5 6.5h.01"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-lg ring-1 ring-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 transition" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
