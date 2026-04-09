'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Learning Paths', href: '/paths' },
  { label: 'Research', href: '/research' },
  { label: 'Reading List', href: '/reading-list' },
  { label: 'Student Success', href: '/student-success' },
  { label: 'Peer Training', href: '/peer-training' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="sticky top-0 z-100 bg-ink border-b border-white/[0.08] px-7 lg:px-15 flex items-center justify-between h-13">
      {/* Brand */}
      <Link
        href="/"
        className="font-mono text-[10px] tracking-[0.18em] uppercase text-paper/50 no-underline"
      >
        Teaching <strong className="text-red font-normal">Computing</strong> Differently
      </Link>

      {/* Desktop links */}
      <ul className="hidden lg:flex list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="block px-4.5 h-13 leading-[52px] font-mono text-[10px] tracking-[0.14em] uppercase text-paper/40 no-underline transition-colors border-l border-white/[0.05] hover:text-paper"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="https://fansofhenry.github.io/cs-ed/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4.5 h-13 leading-[52px] font-mono text-[10px] tracking-[0.14em] uppercase text-red no-underline transition-colors border-l border-white/[0.05] hover:text-red/80"
          >
            Research Portfolio &#x2197;
          </a>
        </li>
        {/* Dark mode toggle */}
        <li>
          <button
            onClick={toggleDark}
            className="flex items-center justify-center w-13 h-13 border-l border-white/[0.05] text-paper/40 hover:text-paper transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
        </li>
      </ul>

      {/* Mobile controls */}
      <div className="flex items-center gap-2 lg:hidden">
        <button
          onClick={toggleDark}
          className="flex items-center justify-center w-10 h-10 text-paper/40 hover:text-paper transition-colors cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center w-10 h-10 text-paper/60 hover:text-paper transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-13 left-0 right-0 bg-ink border-b border-white/[0.08] lg:hidden z-50">
          <ul className="list-none py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-7 py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-paper/40 no-underline hover:text-paper transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://fansofhenry.github.io/cs-ed/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-7 py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-red no-underline"
              >
                Research Portfolio &#x2197;
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
