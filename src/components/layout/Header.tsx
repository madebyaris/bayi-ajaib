"use client";

import { useState, useCallback } from "react";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = "" }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMenu = useCallback(() => setMobileOpen(true), []);
  const closeMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <header className={`sm:px-6 md:px-10 w-full max-w-7xl mt-3 mr-auto ml-auto pr-4 pl-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => (window.location.href = "/")}
            className="cursor-pointer text-lg font-semibold tracking-tight font-serif"
            aria-label="Go to homepage"
          >
            VIBE TALENT
          </button>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-neutral-700 items-center" role="navigation" aria-label="Main navigation">
          <a href="/services" className="hover:text-black transition-colors font-medium relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="/for-employers" className="hover:text-black transition-colors font-medium relative group">
            For Employers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="/jobs" className="hover:text-black transition-colors font-medium relative group">
            For Job Seekers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="/about" className="hover:text-black transition-colors font-medium relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="/contact" className="hover:text-black transition-colors font-medium relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
          </a>
        </nav>
        <div className="flex gap-3 items-center">
          <a
            href="/contact"
            className="hidden md:inline-flex items-center justify-center hover:bg-neutral-800 transition text-sm text-white bg-neutral-900 h-10 rounded-full pr-5 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
            aria-label="Book a consultation with our recruitment experts"
          >
            Book a hiring consult
          </a>
          <button
            onClick={openMenu}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white hover:bg-neutral-800 transition"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
              <path d="M4 6h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50">
          <button
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-label="Close menu overlay"
            onClick={closeMenu}
          />
          <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 translate-x-0">
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <span className="text-lg font-semibold tracking-tight font-serif">
                VIBE TALENT
              </span>
              <button
                onClick={closeMenu}
                className="inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-neutral-200 bg-neutral-50 text-neutral-900 hover:bg-neutral-100 transition"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col p-6" onClick={closeMenu} role="navigation" aria-label="Mobile navigation">
              {[
                { href: "/services", label: "Services", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 10v12"></path><path d="M15 5v17"></path><path d="M23 2v20"></path><path d="M1 12v10"></path></svg>
                ) },
                { href: "/for-employers", label: "For Employers", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                ) },
                { href: "/jobs", label: "For Job Seekers", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                ) },
                { href: "/about", label: "About", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                ) },
                { href: "/contact", label: "Contact", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 12h20"></path><path d="m15 5 7 7-7 7"></path></svg>
                ) },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 py-4 text-lg font-medium text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-100 last:border-b-0"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
              <div className="mt-8">
                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 h-12 text-base font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition rounded-full px-6 shadow-lg"
                  aria-label="Book a consultation with our recruitment experts"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 12h20"></path><path d="m15 5 7 7-7 7"></path></svg>
                  Book a hiring consult
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
