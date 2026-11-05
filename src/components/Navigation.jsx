import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Terminal, Menu, X, Sparkles, Layers, Instagram, Mail, Code2, Laptop } from 'lucide-react';

export default function Navigation({ currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId, sectionAnchor = null) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);

    if (sectionAnchor) {
      setTimeout(() => {
        const el = document.getElementById(sectionAnchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <nav className={`pointer-events-auto transition-all duration-200 flex items-center justify-between gap-3 sm:gap-6 px-4 py-2.5 rounded-2xl border-[2.5px] border-[#121214] ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-[4px_4px_0px_#121214]' 
            : 'bg-white/90 backdrop-blur-md shadow-[3px_3px_0px_#121214]'
        } max-w-5xl w-full`}>
          
          {/* Brand Logo / Monogram */}
          <button 
            onClick={() => handleNavClick('technical')}
            className="flex items-center gap-2 group text-left cursor-pointer select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#121214] text-white flex items-center justify-center font-display font-black text-sm border-2 border-black group-hover:bg-[#FF5500] group-hover:text-white transition-colors shadow-[2px_2px_0px_#FFD000]">
              AM<span className="text-[#FF5500] group-hover:text-white">.</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-black text-sm text-[#121214] tracking-tight block leading-none">
                ARUN MOHAN K
              </span>
              <span className="text-[10px] font-mono text-[#FF5500] font-bold block leading-none mt-1">
                SRMIST Cloud • Dev
              </span>
            </div>
          </button>

          {/* Desktop Navigation Tabs (3 Main Pages + Quick Section Anchors) */}
          <div className="hidden md:flex items-center gap-1.5 p-1 bg-zinc-100 rounded-xl border-2 border-black">
            
            {/* 1. Technical Core Page */}
            <button
              onClick={() => handleNavClick('technical')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-black tracking-wide transition-all cursor-pointer ${
                currentPage === 'technical'
                  ? 'bg-[#121214] text-white shadow-sm'
                  : 'text-zinc-700 hover:text-black hover:bg-white/60'
              }`}
            >
              ⚡ TECHNICAL CORE
            </button>

            {/* Sub-anchors if on technical page */}
            {currentPage === 'technical' && (
              <div className="flex items-center gap-1 pl-1 border-l border-zinc-300">
                <a
                  href="#projects"
                  className="px-2 py-1 text-[11px] font-mono font-bold text-zinc-600 hover:text-[#FF5500]"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  className="px-2 py-1 text-[11px] font-mono font-bold text-zinc-600 hover:text-[#FF5500]"
                >
                  3D Laptop
                </a>
                <a
                  href="#hackathons"
                  className="px-2 py-1 text-[11px] font-mono font-bold text-zinc-600 hover:text-[#FF5500]"
                >
                  Sprints
                </a>
              </div>
            )}

            {/* 2. Content Creator Journey Page */}
            <button
              onClick={() => handleNavClick('creator')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-black tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'creator'
                  ? 'bg-[#FFD000] text-[#121214] shadow-sm'
                  : 'text-zinc-700 hover:text-black hover:bg-white/60'
              }`}
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>CREATOR JOURNEY</span>
            </button>

            {/* 3. Dedicated Contact Page */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-black tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'contact'
                  ? 'bg-[#FF5500] text-white shadow-sm'
                  : 'text-zinc-700 hover:text-black hover:bg-white/60'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>CONTACT STATION</span>
            </button>

          </div>

          {/* Right Action Pill */}
          <div className="flex items-center gap-2">
            
            {/* Status dot */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 border-2 border-black text-[10px] font-mono font-bold text-[#121214]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ONLINE</span>
            </div>

            {/* Contact Action Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="comic-btn comic-btn-orange px-3.5 py-1.5 rounded-xl text-xs gap-1 font-black shrink-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-zinc-100 border-2 border-black text-black"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>
        </nav>
      </header>

      {/* ── MOBILE DRAWER ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-sm comic-card-static rounded-3xl p-6 bg-white flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b-2 border-black">
              <span className="font-display font-black text-lg text-[#121214]">
                MENU NAVIGATION
              </span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg border-2 border-black bg-zinc-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => handleNavClick('technical')}
              className={`p-3 rounded-xl border-2 border-black text-left font-black text-sm flex items-center justify-between ${
                currentPage === 'technical' ? 'bg-[#121214] text-white' : 'bg-zinc-50 text-[#121214]'
              }`}
            >
              <span>⚡ Technical Core (Home)</span>
              <span className="text-xs font-mono">01</span>
            </button>

            <button
              onClick={() => handleNavClick('creator')}
              className={`p-3 rounded-xl border-2 border-black text-left font-black text-sm flex items-center justify-between ${
                currentPage === 'creator' ? 'bg-[#FFD000] text-[#121214]' : 'bg-zinc-50 text-[#121214]'
              }`}
            >
              <span>📸 Creator Journey (Instagram)</span>
              <span className="text-xs font-mono">02</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`p-3 rounded-xl border-2 border-black text-left font-black text-sm flex items-center justify-between ${
                currentPage === 'contact' ? 'bg-[#FF5500] text-white' : 'bg-zinc-50 text-[#121214]'
              }`}
            >
              <span>📬 Contact Station</span>
              <span className="text-xs font-mono">03</span>
            </button>

            <div className="pt-2 text-center text-[10px] font-mono text-zinc-500">
              Arun Mohan K Portfolio • B.Tech Cloud Computing @ SRMIST
            </div>
          </div>
        </div>
      )}
    </>
  );
}
