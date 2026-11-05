import React, { useState } from 'react';
import { ArrowDown, Github, Instagram, ExternalLink, Code2, Sparkles, Terminal, Copy, Check, Flame, Zap, ArrowUpRight } from 'lucide-react';
import PoseCloud from './PoseCloud';

export default function Hero({ onNavigateToCreator, onNavigateToContact }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('arunmohankml@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden"
    >
      {/* Floating Comic Corner Badges */}
      <div className="hidden lg:block absolute top-28 left-6 pointer-events-none z-0">
        <div className="comic-badge bg-[#FFD000] text-black -rotate-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>CITIZENIV_LUA_OK</span>
        </div>
      </div>

      <div className="hidden lg:block absolute top-28 right-8 pointer-events-none z-0">
        <div className="comic-badge bg-[#FF2A42] text-white rotate-6">
          <Flame className="w-3.5 h-3.5" />
          <span>LVL 99 DEV</span>
        </div>
      </div>

      {/* Main 2-Column Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* ── LEFT COLUMN: EDITORIAL COMIC TYPOGRAPHY ── */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Top Status Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="comic-badge bg-[#FF5500] text-white -rotate-1">
              ⚡ ARUN MOHAN K
            </span>
            <span className="comic-badge bg-[#FFD000] text-black rotate-1">
              B.TECH CLOUD CSE @ SRMIST
            </span>
            <span className="comic-badge bg-white text-black -rotate-1 hidden sm:inline-flex">
              CITIZENIV ARCHITECT
            </span>
          </div>

          {/* Running Kinetic Marquee Ribbon */}
          <div className="w-full max-w-xl overflow-hidden py-1.5 mb-5 rounded-xl bg-[#121214] text-white select-none border-2 border-black shadow-[3px_3px_0px_#FF5500]">
            <div className="marquee-track flex gap-6 whitespace-nowrap items-center animate-marquee text-xs font-mono font-bold tracking-widest uppercase">
              <span className="text-[#FFD000]">★ FULL-STACK ARCHITECT</span>
              <span className="text-[#FF5500]">●</span>
              <span>GTA CITIZENIV MODDER</span>
              <span className="text-[#FF5500]">●</span>
              <span className="text-white">CLOUD INFRA @ SRMIST</span>
              <span className="text-[#FF5500]">●</span>
              <span className="text-[#FF2A42]">WEBRTC P2P AUDIO</span>
              <span className="text-[#FF5500]">●</span>
              <span className="text-[#FFD000]">★ FULL-STACK ARCHITECT</span>
              <span className="text-[#FF5500]">●</span>
              <span>GTA CITIZENIV MODDER</span>
            </div>
          </div>

          {/* Huge Main Headline */}
          <div className="relative mb-5">
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-[#121214] uppercase">
              ARUN <br />
              <span className="text-[#FF5500] inline-block -rotate-1">
                MOHAN<span className="text-[#121214]">.</span>
              </span>
            </h1>
            
            {/* Background Watermark */}
            <div className="absolute -top-6 -left-4 text-7xl sm:text-9xl font-display font-black text-black/[0.04] select-none pointer-events-none -z-10">
              ARUN
            </div>
          </div>

          {/* Punchy Bio Description */}
          <p className="text-base sm:text-lg text-zinc-700 font-bold leading-relaxed max-w-xl mb-6">
            Building modern web applications, high-speed client platforms like <span className="bg-[#FFD000] text-black px-1.5 py-0.5 rounded border border-black font-black">Tajmahal Carpets</span>, and deep GTA IV CitizenIV in-game NUI systems.
          </p>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="comic-badge bg-white text-black text-xs rounded-lg">
              <span className="text-[#FF5500]">01/</span> React & Next.js
            </span>
            <span className="comic-badge bg-white text-black text-xs rounded-lg">
              <span className="text-[#FF5500]">02/</span> Python AST Tooling
            </span>
            <span className="comic-badge bg-white text-black text-xs rounded-lg">
              <span className="text-[#FF5500]">03/</span> CitizenIV & Lua
            </span>
            <span className="comic-badge bg-white text-black text-xs rounded-lg">
              <span className="text-[#FF5500]">04/</span> WebRTC P2P Mesh
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="comic-btn comic-btn-orange px-6 py-3.5 rounded-2xl text-sm font-black gap-2"
            >
              <span>Explore Projects (Live)</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onNavigateToCreator}
              className="comic-btn comic-btn-yellow px-5 py-3.5 rounded-2xl text-sm font-black gap-2"
            >
              <Instagram className="w-4 h-4 text-black" />
              <span>Creator Journey</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="https://github.com/Arunmohankml"
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn comic-btn-white p-3.5 rounded-2xl text-sm"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* ── RIGHT COLUMN: CUTE 3D CLOUD WITH CYCLING REAL AVATARS ── */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <PoseCloud />
        </div>

      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div className="mt-12 flex justify-center items-center gap-2 text-zinc-500 font-mono text-xs font-bold">
        <span className="animate-bounce">↓</span>
        <span>SCROLL DOWN TO TEST LIVE PROJECT SANDBOX & 3D WORKSTATION ↓</span>
      </div>
    </section>
  );
}
