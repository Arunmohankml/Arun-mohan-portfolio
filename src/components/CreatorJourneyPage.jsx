import React, { useState } from 'react';
import { 
  Instagram, Play, Eye, Heart, MessageCircle, Share2, Sparkles, 
  Flame, Award, Laptop, Camera, Mic, Video, Users, CheckCircle2, 
  ArrowUpRight, Bookmark, Music
} from 'lucide-react';
import confetti from 'canvas-confetti';

const REELS_VAULT = [
  {
    id: 'reel-1',
    title: 'Budget Friendly Varanasi Trip Part 3',
    url: 'https://www.instagram.com/reel/DX9ZIO3haO0/',
    embedUrl: 'https://www.instagram.com/reel/DX9ZIO3haO0/embed/',
    category: 'TRAVEL VLOG',
    icon: '✈️',
    views: '29.3K',
    likes: '3.1K',
    comments: '215',
    audio: 'Varanasi Ghat Ambiance • Morning Chimes',
    takeaway: 'Budget friendly Varanasi trip guide: accommodation, street food routes, ghat boat rides, and student wanderlust.'
  },
  {
    id: 'reel-2',
    title: 'Traditional Kerala Sadhya on Fresh Banana Leaf',
    url: 'https://www.instagram.com/reel/DcXhfvGoJoi/',
    embedUrl: 'https://www.instagram.com/reel/DcXhfvGoJoi/embed/',
    category: 'FOOD RELATED',
    icon: '🥘',
    views: '35.8K',
    likes: '3.8K',
    comments: '270',
    audio: 'Chenda Melam • Traditional Fest Audio',
    takeaway: 'The purest comfort food experience: hot Kerala Matta rice served on a fresh plantain leaf with 15+ accompaniments and golden payasam.'
  },
  {
    id: 'reel-3',
    title: 'Budget Friendly Varanasi Trip Part 2',
    url: 'https://www.instagram.com/reel/DXZX02jjaQB/',
    embedUrl: 'https://www.instagram.com/reel/DXZX02jjaQB/embed/',
    category: 'TRAVEL VLOG',
    icon: '✈️',
    views: '41.2K',
    likes: '4.4K',
    comments: '340',
    audio: 'Mountain Acoustic • Wanderlust Beat',
    takeaway: 'Student travel guides, street food discoveries, and budget breakdown across Varanasi ghats.'
  }
];

export default function CreatorJourneyPage({ onNavigateToContact }) {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [savedReels, setSavedReels] = useState({});
  const activeReel = REELS_VAULT[activeReelIndex];

  const handleSaveReel = (id) => {
    setSavedReels(prev => ({ ...prev, [id]: !prev[id] }));
    try {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.6 },
        colors: ['#FF5500', '#FFD000', '#121214']
      });
    } catch (e) {}
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto space-y-16 animate-in fade-in duration-300">
      
      {/* ── HERO BANNER: ARUN MOHAN CREATOR CHAPTER ── */}
      <div className="comic-card-static rounded-3xl p-6 sm:p-10 md:p-12 bg-[#FFD000] relative overflow-hidden">
        {/* Background Halftone Dots */}
        <div className="absolute inset-0 comic-dots opacity-15 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="comic-badge bg-[#FF5500] text-white -rotate-1">
                📸 INSTAGRAM &amp; CREATOR CHAPTER
              </span>
              <span className="comic-badge bg-white text-[#121214] rotate-1">
                FOOD • TRAVEL • LIFESTYLE
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-[#121214] tracking-tight uppercase leading-[0.95]">
              BEYOND THE TERMINAL: <br />
              <span className="bg-[#121214] text-white px-2 py-0.5 inline-block -rotate-1 mt-1">
                FOOD &amp; TRAVEL
              </span> CREATOR JOURNEY.
            </h1>

            <p className="text-[#121214] text-sm sm:text-base font-bold leading-relaxed max-w-xl">
              I’m not a tech vlogger — by night and on weekends, I hunt down authentic food spots, explore budget travel trails, and share honest street food reviews from <b>Kerala to Chennai, Varanasi to Himachal</b>.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="comic-card-flat bg-white p-3 rounded-2xl text-center">
                <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase">Instagram</div>
                <div className="text-xl sm:text-2xl font-black font-mono text-[#E1306C]">@4ruun</div>
              </div>
              <div className="comic-card-flat bg-white p-3 rounded-2xl text-center">
                <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase">Community</div>
                <div className="text-xl sm:text-2xl font-black font-mono text-[#121214]">1,514+</div>
              </div>
              <div className="comic-card-flat bg-white p-3 rounded-2xl text-center">
                <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase">Stories</div>
                <div className="text-xl sm:text-2xl font-black font-mono text-[#FF5500]">32+ Posts</div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a 
                href="https://www.instagram.com/4ruun/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="comic-btn comic-btn-orange px-5 py-3 rounded-2xl text-sm gap-2 font-black"
              >
                <Instagram className="w-4 h-4 text-white" />
                <span>Follow on Instagram (@4ruun)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onNavigateToContact}
                className="comic-btn comic-btn-white px-5 py-3 rounded-2xl text-sm gap-2 font-black"
              >
                <span>DM for Food &amp; Travel Collabs 📩</span>
              </button>
            </div>
          </div>

          {/* Right Avatar Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="comic-card-static rounded-3xl bg-white p-4 w-full max-w-[340px] relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-b from-orange-100 to-amber-50 border-2 border-black flex items-end justify-center relative overflow-hidden">
                <img 
                  src="/avatars/arun-headphones.png" 
                  alt="Arun Mohan Creator Mode"
                  className="w-full h-full object-contain object-bottom comic-avatar-sticker select-none"
                />
                
                {/* Floating Comic Tag */}
                <div className="absolute top-3 right-3 comic-badge bg-[#FF5500] text-white text-[10px] rotate-3">
                  RECORDING 🔴
                </div>

                <div className="absolute bottom-3 inset-x-3 bg-black/85 backdrop-blur-md rounded-xl p-2.5 text-white border border-zinc-700 text-center">
                  <div className="text-xs font-black font-display uppercase tracking-wide">
                    Arun Mohan K
                  </div>
                  <div className="text-[10px] font-mono text-[#FFD000]">
                    Tech Storyteller • Modder • Cloud Dev
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── THE INSTAGRAM REEL VAULT (INTERACTIVE SIMULATOR) ── */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b-4 border-[#121214] gap-2">
          <div>
            <div className="comic-badge bg-[#FF5500] text-white -rotate-1 mb-1">
              TOP PERFORMING REELS
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#121214] uppercase tracking-tight">
              THE VIRAL REEL <span className="text-[#FF5500]">VAULT</span>.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-600 font-bold max-w-sm">
            Interactive reel breakdown. Click through each reel to preview the hook, metrics, and technical takeaways.
          </p>
        </div>

        {/* 2-Column Reel Workspace */}
        <div className="comic-card-static rounded-3xl p-4 sm:p-8 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Reel Selector List (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
              SELECT A FEATURED REEL BREAKDOWN:
            </div>

            {REELS_VAULT.map((reel, idx) => {
              const isSelected = idx === activeReelIndex;
              return (
                <div
                  key={reel.id}
                  onClick={() => setActiveReelIndex(idx)}
                  className={`comic-card-flat p-4 rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    isSelected 
                      ? 'bg-[#121214] text-white shadow-[4px_4px_0px_#FF5500] translate-x-1' 
                      : 'bg-zinc-50 hover:bg-zinc-100 text-[#121214]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{reel.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-[#FF5500] text-white' : 'bg-zinc-200 text-[#121214]'
                        }`}>
                          {reel.category}
                        </span>
                        <span className={`text-[10px] font-mono ${isSelected ? 'text-[#FFD000]' : 'text-zinc-500'}`}>
                          {reel.views} Views
                        </span>
                      </div>
                      <div className="font-black text-sm sm:text-base tracking-tight mt-1 line-clamp-1">
                        {reel.title}
                      </div>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border-2 ${
                    isSelected ? 'bg-[#FF5500] text-white border-white' : 'bg-white text-black border-black'
                  }`}>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Reel Interactive Phone Frame (Right 6 Cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[360px] rounded-[36px] bg-[#121214] border-[4px] border-black shadow-2xl p-3 flex flex-col text-white">
              
              {/* Phone Header */}
              <div className="flex justify-between items-center px-2 py-1 text-[10px] font-mono text-zinc-400">
                <span className="font-bold text-white">Instagram Reel</span>
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Video Embed
                </span>
              </div>

              {/* Reel Video Player Card with Live Instagram Iframe */}
              <div className="relative aspect-[9/14] rounded-[24px] bg-black overflow-hidden border border-zinc-800 my-1">
                <iframe
                  src={activeReel.embedUrl}
                  title={activeReel.title}
                  className="w-full h-full border-0 overflow-hidden"
                  scrolling="no"
                  allowTransparency="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>

              {/* Food & Travel Story Breakdown */}
              <div className="mt-2.5 p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-mono space-y-1">
                <div className="text-[#FFD000] font-bold text-[10px] uppercase">
                  🍴 Food &amp; Travel Story Breakdown:
                </div>
                <div className="text-zinc-300 leading-snug">
                  {activeReel.takeaway}
                </div>
              </div>

              {/* Direct Instagram Watch Button */}
              <a
                href={activeReel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-2.5 px-4 bg-[#E1306C] text-white rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 border border-white/20 hover:opacity-95 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                <span>WATCH REEL ON INSTAGRAM ↗</span>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* ── THE 4 FOOD & TRAVEL CONTENT PILLARS ── */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="comic-badge bg-[#FFD000] text-black -rotate-1 mb-2">
            WHAT I DOCUMENT
          </div>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-[#121214] uppercase">
            FOOD &amp; TRAVEL <span className="text-[#FF5500]">PILLARS</span>.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="comic-card p-5 rounded-2xl bg-white space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-orange-100 border-2 border-black flex items-center justify-center text-xl">
              🥘
            </div>
            <div className="font-display font-black text-lg text-[#121214]">
              Kerala Street Food Hunts
            </div>
            <p className="text-xs text-zinc-700 leading-relaxed">
              Charred banana-leaf Kizhi Porotta, Malabar biryani, spicy nadan beef roasts, fresh fish curry meals, and tawa specials.
            </p>
          </div>

          <div className="comic-card p-5 rounded-2xl bg-white space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border-2 border-black flex items-center justify-center text-xl">
              🍔
            </div>
            <div className="font-display font-black text-lg text-[#121214]">
              Gourmet Burgers &amp; Grills
            </div>
            <p className="text-xs text-zinc-700 leading-relaxed">
              Stacked crispy double chicken burgers, cheese melts, charred Arabic Alfahm, and fragrant Mandi rice platters.
            </p>
          </div>

          <div className="comic-card p-5 rounded-2xl bg-white space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-red-100 border-2 border-black flex items-center justify-center text-xl">
              ☕
            </div>
            <div className="font-display font-black text-lg text-[#121214]">
              Varanasi Budget Travel
            </div>
            <p className="text-xs text-zinc-700 leading-relaxed">
              Detailed 3-day student travel itineraries under ₹3,500, morning matka chai, malai rabri, Ganga boat rides, and ghat trails.
            </p>
          </div>

          <div className="comic-card p-5 rounded-2xl bg-white space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 border-2 border-black flex items-center justify-center text-xl">
              🏔️
            </div>
            <div className="font-display font-black text-lg text-[#121214]">
              Himachal &amp; Mountain Escapes
            </div>
            <p className="text-xs text-zinc-700 leading-relaxed">
              "It's Monday but you're somewhere in Himachal" — backpacking routes, peaceful mountain stays, local cafes, and wanderlust vlogs.
            </p>
          </div>
        </div>
      </div>

      {/* ── CREATOR VLOGGING RIG & GEAR ── */}
      <div className="comic-card-static rounded-3xl p-6 sm:p-8 bg-[#121214] text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800 gap-2 mb-6">
          <div>
            <span className="comic-badge bg-[#FF5500] text-white text-[10px] mb-1">
              THE HARDWARE &amp; SUITE
            </span>
            <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">
              CREATOR VLOGGING ARSENAL.
            </h4>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            4K 60FPS HDR • Street-Ready Audio • Natural Color Grading
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-1.5">
            <div className="text-[10px] font-mono text-[#FFD000] font-bold uppercase">Visual Capture</div>
            <div className="text-sm font-bold text-white">iPhone 4K 60FPS HDR</div>
            <div className="text-xs text-zinc-400">Ultra-sharp food textures, rich steam details, and low-light street market performance.</div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-1.5">
            <div className="text-[10px] font-mono text-[#FF5500] font-bold uppercase">Stabilization</div>
            <div className="text-sm font-bold text-white">DJI Osmo Mobile Gimbal</div>
            <div className="text-xs text-zinc-400">Silky smooth walking camera shots across crowded bazaars, street stalls, and trails.</div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-1.5">
            <div className="text-[10px] font-mono text-[#FF2A42] font-bold uppercase">Street Audio</div>
            <div className="text-sm font-bold text-white">Wireless Dual Lapel Mic</div>
            <div className="text-xs text-zinc-400">Noise-cancelling transmitter capturing crisp voiceovers over sizzling tawas and crowds.</div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-1.5">
            <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Post Production</div>
            <div className="text-sm font-bold text-white">DaVinci Resolve + CapCut</div>
            <div className="text-xs text-zinc-400">Natural food color grading, appetizing warm tones, and dynamic pacing.</div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BANNER: BRAND COLLABORATION & INQUIRIES ── */}
      <div className="comic-card p-6 sm:p-8 rounded-3xl bg-white border-[3px] border-black flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="comic-badge bg-emerald-400 text-black text-[11px] font-bold">
            🟢 RESTAURANT FEATURES &amp; FOOD COLLABORATIONS OPEN
          </div>
          <h4 className="font-display font-black text-2xl sm:text-3xl text-[#121214] uppercase">
            WANT TO PARTNER ON FOOD &amp; TRAVEL CONTENT?
          </h4>
          <p className="text-xs sm:text-sm text-zinc-700 max-w-lg">
            Open for cafe reviews, restaurant features, budget travel campaigns, and food crawl collaborations across Kerala &amp; Chennai.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://www.instagram.com/4ruun/"
            target="_blank"
            rel="noopener noreferrer"
            className="comic-btn comic-btn-orange px-6 py-3.5 rounded-2xl text-sm font-black whitespace-nowrap gap-2"
          >
            <Instagram className="w-4 h-4" />
            <span>DM on Instagram (@4ruun) ↗</span>
          </a>

          <button
            onClick={onNavigateToContact}
            className="comic-btn comic-btn-white px-5 py-3.5 rounded-2xl text-sm font-black whitespace-nowrap"
          >
            <span>Send Direct Message</span>
          </button>
        </div>
      </div>

    </div>
  );
}
