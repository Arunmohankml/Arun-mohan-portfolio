import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t-4 border-[#121214] py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-8 rounded-xl bg-[#121214] text-white font-mono font-black text-xs flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_#FFD000]">
              AM
            </span>
            <span className="font-display font-black text-2xl text-[#121214] tracking-tight uppercase">
              ARUN MOHAN K<span className="text-[#FF5500]">.</span>
            </span>
          </div>
          <p className="text-xs font-mono font-bold text-zinc-700 max-w-sm">
            Full-Stack Developer • CitizenIV Game Server Modder • B.Tech Cloud Computing @ SRMIST
          </p>
        </div>

        {/* Center: System Status */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-zinc-100 border-2 border-black text-xs font-mono font-bold text-[#121214] shadow-[3px_3px_0px_#121214]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>ALL SYSTEMS NOMINAL • CHENNAI, INDIA</span>
        </div>

        {/* Right: Copyright & Top Button */}
        <div className="flex items-center gap-5">
          <div className="text-xs font-mono font-bold text-zinc-700 text-center md:text-right">
            <div>© {new Date().getFullYear()} Arun Mohan K.</div>
            <div className="text-[11px] text-[#FF5500]">Unique Comic-Brutalist Engineering</div>
          </div>

          <button
            onClick={scrollToTop}
            className="comic-btn comic-btn-orange p-3 rounded-xl"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </footer>
  );
}
