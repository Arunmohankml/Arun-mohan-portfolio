import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, Sparkles, ChevronRight, ChevronLeft, Laptop, Cpu, Code2, Cloud, CheckCircle2, Shield, Globe } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    category: 'Core Web & Architecture',
    desc: 'Crafting responsive, high-performance web frontends and microservices.',
    accent: '#FF5500',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Advanced', exp: '4+ Years' },
      { name: 'React.js / Next', level: 'Skilled', exp: 'Production Ready' },
      { name: 'HTML5 & Modern CSS3', level: 'Expert', exp: 'Pixel Perfect' },
      { name: 'Tailwind CSS', level: 'Advanced', exp: 'Utility First' },
      { name: 'WebRTC / PeerJS', level: 'Proficient', exp: 'Realtime Audio/Video' },
    ]
  },
  {
    category: 'Backend & Systems',
    desc: 'Scalable services, automated pipelines, and RESTful APIs.',
    accent: '#18181D',
    skills: [
      { name: 'Python', level: 'Advanced', exp: 'Scripting & Tooling' },
      { name: 'Django & Flask', level: 'Proficient', exp: 'Backend APIs' },
      { name: 'Node.js', level: 'Proficient', exp: 'Signaling & Services' },
      { name: 'C / C++', level: 'Academic', exp: 'Algorithms & Memory' },
      { name: 'REST & GraphQL', level: 'Advanced', exp: 'API Design' },
    ]
  },
  {
    category: 'Game Modding & CitizenIV',
    desc: 'Deep tinkering with GTA IV CitizenIV servers, NUI web interfaces & Lua bridges.',
    accent: '#FF6B00',
    skills: [
      { name: 'CitizenIV Server Scripting', level: 'Specialist', exp: 'Since Age 15' },
      { name: 'Lua Scripting Engine', level: 'Advanced', exp: 'Server & Client' },
      { name: 'In-Game NUI Web UI', level: 'Pioneer', exp: 'Virtual Phones & HUD' },
      { name: 'FiveM Translation Tools', level: 'Creator', exp: 'Automated Parsers' },
    ]
  },
  {
    category: 'Cloud & Academic Focus',
    desc: 'Pursuing Cloud Computing at SRMIST & contributing to DSC technical team.',
    accent: '#121215',
    skills: [
      { name: 'B.Tech Cloud Computing', level: 'Specialization', exp: 'SRMIST' },
      { name: 'DSC Technical Team', level: 'Core Member', exp: 'Community Lead' },
      { name: 'Git & Version Control', level: 'Advanced', exp: 'Daily Driver' },
      { name: 'Cloud Infra Basics', level: 'Intermediate', exp: 'Deployment & CI' },
    ]
  }
];

export default function ParallaxSkills() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Terminal state for CitizenIV simulator
  const [terminalLog, setTerminalLog] = useState([
    '[INIT] CitizenIV server environment initialized...',
    '[NUI] Injecting web-based smartphone virtual display...',
    '[OK] WebRTC audio signaling channel connected.',
    '[READY] System standby. Click "RUN SCRIPT" below.'
  ]);
  const [isRunningScript, setIsRunningScript] = useState(false);

  // Track scroll inside the 420vh pinned sticky section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableDistance = containerRef.current.offsetHeight - window.innerHeight;

      if (totalScrollableDistance > 0) {
        const progress = Math.min(1, Math.max(0, -rect.top / totalScrollableDistance));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const runSimulatedScript = () => {
    setIsRunningScript(true);
    setTerminalLog((prev) => [...prev, '> Executing citizeniv_phone_test.lua...']);

    setTimeout(() => {
      setTerminalLog((prev) => [
        ...prev,
        '[LUA] TriggerEvent("client:openVirtualPhone", playerID: 104)',
        '[SUCCESS] Virtual Phone rendered @ 60 FPS in CitizenIV.',
        '[SRMIST] Cloud telemetry heartbeat synced.'
      ]);
      setIsRunningScript(false);
    }, 850);
  };

  // ─────────────────────────────────────────────────────────────
  // VERTICAL BOOK-OPENING LAPTOP ARCHITECTURE
  // (Derived from the 3D book rotation model: 180deg closed -> 0deg open)
  // ─────────────────────────────────────────────────────────────
  // 1. OPENING (0.00 -> 0.20):
  //    - Starts FULLY CLOSED: Lid rotated 180deg over keyboard base
  //    - As user scrolls, lid rotates 180deg -> 0deg around the central spine
  // 2. HORIZONTAL CONTENT SCROLL (0.20 -> 0.80):
  //    - Laptop stays open (0deg). Inside display slides horizontally.
  // 3. CLOSING (0.80 -> 1.00):
  //    - Lid rotates 0deg -> 180deg, folding back down onto keyboard
  // ─────────────────────────────────────────────────────────────
  let lidAngle = 180; // 180deg = fully closed over keyboard
  let horizontalSlidePercent = 0;
  let statusText = "LAPTOP CLOSED • SCROLL DOWN TO OPEN ↓";
  let activePhase = "closed";

  if (scrollProgress < 0.20) {
    const openFactor = scrollProgress / 0.20;
    lidAngle = 180 * (1 - openFactor); // 180deg down to 0deg
    horizontalSlidePercent = 0;
    statusText = openFactor < 0.05 
      ? "LAPTOP CLOSED • SCROLL DOWN TO OPEN ↓" 
      : `OPENING LAPTOP... (${Math.round(openFactor * 100)}%)`;
    activePhase = openFactor > 0.05 ? "opening" : "closed";
  } else if (scrollProgress <= 0.80) {
    lidAngle = 0; // fully open upright
    const slideFactor = (scrollProgress - 0.20) / 0.60;
    horizontalSlidePercent = slideFactor * 75; // 0% to 75% across 4 slides
    statusText = `SCROLL TO SLIDE CONTENT (${Math.min(4, Math.floor(slideFactor * 4) + 1)}/4) →`;
    activePhase = "active";
  } else {
    const closeFactor = (scrollProgress - 0.80) / 0.20;
    lidAngle = 180 * closeFactor; // 0deg up to 180deg
    horizontalSlidePercent = 75;
    statusText = `CLOSING LAPTOP... (${Math.round(closeFactor * 100)}%)`;
    activePhase = "closing";
  }

  const currentSlideIndex = Math.min(3, Math.max(0, Math.floor((horizontalSlidePercent / 75) * 4)));
  const isCoverFacing = lidAngle > 90;

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="relative h-[420vh] bg-[#FAFAFC] selection:bg-[#FF5500] selection:text-white"
    >
      {/* ── STICKY PINNED WORKSPACE VIEWPORT ── */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
        
        {/* Top Status Comic HUD Pill */}
        <div className="mb-4 z-40 flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border-2 border-black shadow-[3px_3px_0px_#121214] select-none">
          <span className="flex h-2.5 w-2.5 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
              activePhase === 'active' ? 'bg-[#FF5500]' : 'bg-zinc-400'
            } opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
              activePhase === 'active' ? 'bg-[#FF5500]' : 'bg-zinc-400'
            }`}></span>
          </span>
          <span className="text-[11px] font-mono font-black tracking-wider uppercase text-[#121214]">
            {statusText}
          </span>
          {activePhase === 'active' && (
            <span className="comic-badge bg-[#FFD000] text-black text-[9px] py-0.5 px-1.5 rounded">
              SLIDE {currentSlideIndex + 1} OF 4
            </span>
          )}
        </div>

        {/* ── LAPTOP BOOK-STYLE 3D STAGE (Exact perspective: 70rem from user snippet) ── */}
        <div 
          className="relative w-full max-w-[680px] sm:max-w-[720px] flex flex-col items-center justify-center select-none"
          style={{
            perspective: '70rem', // Exact perspective from user snippet
            perspectiveOrigin: '50% 50%',
          }}
        >
          {/* Ambient Glow behind Laptop */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(255,85,0,0.2) 0%, rgba(255,255,255,0) 70%)',
              opacity: lidAngle < 90 ? 1 : 0.2
            }}
          />

          {/* ════ TWO-PART LAPTOP ASSEMBLY WITH CENTRAL HORIZONTAL SPINE ════ */}
          <div className="relative w-full flex flex-col items-center">

            {/* ──── PART 1: TOP HALF / LID (Rotates 180deg around bottom spine like a book cover) ──── */}
            <div 
              className="relative w-full h-[240px] sm:h-[280px] md:h-[310px] z-30 will-change-transform"
              style={{
                transformOrigin: 'bottom center', // Horizontal spine at the bottom of the lid!
                transform: `rotateX(${lidAngle}deg)`,
                transformStyle: 'preserve-3d',
                transitionDuration: '50ms',
              }}
            >
              {/* FACE A: EXTERIOR METALLIC COVER (Visible when lidAngle > 90deg) - Boxy 3D Edged */}
              <div 
                className="absolute inset-0 rounded-t-lg sm:rounded-t-xl rounded-b-none bg-gradient-to-b from-[#2E2D38] via-[#24232E] to-[#181720] border-t-[6px] border-x-[6px] border-b-[2px] sm:border-t-[8px] sm:border-x-[8px] sm:border-b-[3px] border-[#16151D] flex flex-col items-center justify-between p-4 sm:p-6 select-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.6),0_6px_0_#0E0D13,0_15px_30px_rgba(0,0,0,0.4)]"
                style={{
                  transform: 'rotateX(180deg)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                {/* Top Notch Lip */}
                <div className="w-16 sm:w-24 h-1.5 rounded-sm bg-zinc-600/80 shadow-inner" />

                {/* Centered Glowing AM Monogram */}
                <div className="flex flex-col items-center justify-center my-auto">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/80 shadow-[0_0_30px_rgba(255,85,0,0.35)] flex items-center justify-center">
                    <span className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                      AM<span className="text-[#FF5500]">.</span>
                    </span>
                  </div>
                  <div className="mt-3 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-zinc-300">
                    ARUN MOHAN K WORKSTATION
                  </div>
                  <div className="mt-0.5 text-[10px] sm:text-[11px] font-mono text-zinc-400">
                    B.Tech CSE (Cloud) @ SRMIST • CitizenIV Modder
                  </div>
                </div>

                {/* Bottom Instruction Prompt */}
                <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-700 text-[11px] font-mono text-zinc-200 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
                  <span>SCROLL DOWN TO OPEN WORKSTATION ↓</span>
                </div>
              </div>

              {/* FACE B: INNER SCREEN DISPLAY (Visible when lidAngle <= 90deg) - Boxy 3D Edged */}
              <div 
                className="absolute inset-0 rounded-t-lg sm:rounded-t-xl rounded-b-none bg-[#14131A] border-t-[6px] border-x-[6px] border-b-[2px] sm:border-t-[8px] sm:border-x-[8px] sm:border-b-[3px] border-[#16151D] flex flex-col overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(0,0,0,0.8),0_5px_0_#0E0D13,0_12px_25px_rgba(0,0,0,0.35)]"
                style={{
                  transform: 'rotateX(0deg)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                {/* Top Bezel with Camera Notch */}
                <div className="relative h-6 bg-[#0E0D13] flex items-center justify-between px-3 sm:px-4 z-30 border-b border-zinc-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <span className="w-1 h-1 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono text-zinc-400 font-semibold hidden sm:inline">
                      arun-dev-station
                    </span>
                    <div className="flex items-center gap-1 bg-zinc-900 px-1.5 py-0.5 rounded text-[9px] font-mono text-zinc-400">
                      <span className="text-[#FF5500] font-bold">SLIDE {currentSlideIndex + 1}</span>
                      <span>/ 4</span>
                    </div>
                  </div>
                </div>

                {/* Inner Screen Display: Horizontal Slide Viewport */}
                <div className="relative flex-1 bg-[#0A0A0E] text-white overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                  {/* Horizontal Slider Track driven by scroll */}
                  <div 
                    className="flex h-full w-[400%] transition-transform ease-out will-change-transform"
                    style={{
                      transform: `translateX(-${horizontalSlidePercent}%)`,
                      transitionDuration: '60ms'
                    }}
                  >
                    {/* ── SLIDE 1: OVERVIEW & PHILOSOPHY ── */}
                    <div className="w-full h-full p-3 sm:p-5 flex flex-col justify-between overflow-y-auto">
                      <div>
                        <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-[#FF5500] uppercase mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                          BACKGROUND & CAPABILITIES
                        </div>
                        <h2 className="font-display font-black text-lg sm:text-2xl text-white tracking-tight mb-1.5">
                          HOW I <span className="text-[#FF5500]">BUILD THINGS</span>.
                        </h2>
                        <p className="text-zinc-300 text-[11px] sm:text-xs leading-relaxed max-w-xl mb-2">
                          Started tinkering with GTA IV CitizenIV servers when I was 15. That curiosity pushed me into full-stack web engineering, game server UI/UX, and cloud infrastructure.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-1">
                        <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900/90 border border-zinc-800">
                          <div className="text-[9px] font-mono text-[#FF5500] uppercase font-bold">B.Tech CSE</div>
                          <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5">Cloud @ SRMIST</div>
                          <div className="text-[9px] text-zinc-400 mt-0.5">Scalable cloud systems</div>
                        </div>
                        <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900/90 border border-zinc-800">
                          <div className="text-[9px] font-mono text-[#FF5500] uppercase font-bold">Technical Team</div>
                          <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5">DSC Technical Team</div>
                          <div className="text-[9px] text-zinc-400 mt-0.5">Core team developer</div>
                        </div>
                        <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900/90 border border-zinc-800">
                          <div className="text-[9px] font-mono text-[#FF5500] uppercase font-bold">Commercial Work</div>
                          <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5">Freelance Developer</div>
                          <div className="text-[9px] text-zinc-400 mt-0.5">Tajmahal Carpets & more</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-zinc-900 text-[10px] font-mono text-zinc-400">
                        <span>Keep scrolling down to slide horizontally →</span>
                        <span className="text-[#FF5500] font-bold">1 / 4 • OVERVIEW</span>
                      </div>
                    </div>

                    {/* ── SLIDE 2: CITIZENIV LUA TERMINAL ── */}
                    <div className="w-full h-full p-3 sm:p-5 flex flex-col justify-between overflow-y-auto">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5 text-[#FF5500]" />
                            <span className="text-[11px] font-mono font-bold uppercase text-zinc-300">
                              CITIZENIV LUA ENGINE BRIDGE
                            </span>
                          </div>
                          <button
                            onClick={runSimulatedScript}
                            disabled={isRunningScript}
                            className="px-2 py-0.5 rounded bg-[#FF5500] hover:bg-[#e04800] text-white text-[10px] font-bold font-mono flex items-center gap-1 transition-all active:scale-95 disabled:opacity-50"
                          >
                            <Play className="w-2.5 h-2.5" />
                            <span>{isRunningScript ? 'RUNNING...' : 'RUN SCRIPT'}</span>
                          </button>
                        </div>

                        <p className="text-[10px] sm:text-[11px] text-zinc-400 mb-2 leading-tight">
                          In-game smartphone UI (NUI), WebRTC audio channels, and automated Lua string localization tools.
                        </p>

                        <div className="rounded-lg bg-black border border-zinc-800 p-2.5 font-mono text-[10px] text-zinc-300 h-28 sm:h-36 overflow-y-auto">
                          <div className="text-[8.5px] text-zinc-500 mb-1 pb-1 border-b border-zinc-900 flex justify-between">
                            <span>citizeniv_daemon v2.4.0</span>
                            <span className="text-emerald-400">● CONNECTED</span>
                          </div>
                          <div className="space-y-1">
                            {terminalLog.map((line, i) => (
                              <div key={i} className={line.startsWith('[SUCCESS]') ? 'text-emerald-400 font-bold' : line.startsWith('>') ? 'text-[#FF5500] font-semibold' : 'text-zinc-300'}>
                                {line}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-zinc-900 text-[10px] font-mono text-zinc-400">
                        <span>Keep scrolling down to view Web Stack →</span>
                        <span className="text-[#FF5500] font-bold">2 / 4 • CITIZENIV SIMULATOR</span>
                      </div>
                    </div>

                    {/* ── SLIDE 3: WEB & FRONTEND STACK ── */}
                    <div className="w-full h-full p-3 sm:p-5 flex flex-col justify-between overflow-y-auto">
                      <div>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-[#FF5500] uppercase mb-1">
                          <Code2 className="w-3.5 h-3.5 text-[#FF5500]" />
                          MODULE 01 / CLIENT & FRONTEND
                        </div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1.5">
                          Core Web & Architecture
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-zinc-400 mb-3">
                          Responsive web frontends, component engineering, and realtime P2P media streams.
                        </p>

                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          {SKILL_CATEGORIES[0].skills.slice(0, 4).map((skill) => (
                            <div key={skill.name} className="p-2 rounded-md bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                              <span className="font-semibold text-white text-[11px] truncate mr-1">{skill.name}</span>
                              <span className="font-mono text-[8.5px] px-1.5 py-0.5 rounded bg-zinc-800 text-orange-400 font-bold shrink-0">
                                {skill.exp}
                              </span>
                            </div>
                          ))}
                          {SKILL_CATEGORIES[3].skills.slice(0, 2).map((skill) => (
                            <div key={skill.name} className="p-2 rounded-md bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                              <span className="font-semibold text-white text-[11px] truncate mr-1">{skill.name}</span>
                              <span className="font-mono text-[8.5px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold shrink-0">
                                {skill.exp}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-zinc-900 text-[10px] font-mono text-zinc-400">
                        <span>Keep scrolling down to view Backend & Systems →</span>
                        <span className="text-[#FF5500] font-bold">3 / 4 • FRONTEND & CLOUD</span>
                      </div>
                    </div>

                    {/* ── SLIDE 4: BACKEND & SYSTEMS ── */}
                    <div className="w-full h-full p-3 sm:p-5 flex flex-col justify-between overflow-y-auto">
                      <div>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-[#FF5500] uppercase mb-1">
                          <Cpu className="w-3.5 h-3.5 text-[#FF5500]" />
                          MODULE 02 / SYSTEMS & SCRIPTING
                        </div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1.5">
                          Backend, Systems & Automation
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-zinc-400 mb-3">
                          Microservices, Lua game scripting, and automated CLI parsers.
                        </p>

                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          {SKILL_CATEGORIES[1].skills.slice(0, 4).map((skill) => (
                            <div key={skill.name} className="p-2 rounded-md bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                              <span className="font-semibold text-white text-[11px] truncate mr-1">{skill.name}</span>
                              <span className="font-mono text-[8.5px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold shrink-0">
                                {skill.exp}
                              </span>
                            </div>
                          ))}
                          {SKILL_CATEGORIES[2].skills.slice(0, 2).map((skill) => (
                            <div key={skill.name} className="p-2 rounded-md bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                              <span className="font-semibold text-white text-[11px] truncate mr-1">{skill.name}</span>
                              <span className="font-mono text-[8.5px] px-1.5 py-0.5 rounded bg-zinc-800 text-orange-400 font-bold shrink-0">
                                {skill.exp}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-zinc-900 text-[10px] font-mono text-zinc-400">
                        <span className="text-emerald-400 font-bold">All slides complete! Scroll down to close laptop and proceed ↓</span>
                        <span className="text-[#FF5500] font-bold">4 / 4 • BACKEND & LUA</span>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Progress Bar */}
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-zinc-900">
                    <div 
                      className="h-full bg-gradient-to-r from-[#FF5500] to-orange-400 transition-all duration-75"
                      style={{ width: `${Math.min(100, (horizontalSlidePercent / 75) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ──── CENTRAL 3D BOXY HINGE BARREL ──── */}
            <div className="w-full h-3 sm:h-3.5 bg-gradient-to-b from-[#1C1B24] via-[#2D2C39] to-[#121118] border-x-[6px] sm:border-x-[8px] border-[#16151D] border-y border-black/80 flex items-center justify-between px-6 z-25 shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              <div className="w-4 h-1 rounded-xs bg-[#0F0E14]" />
              <div className="flex-1 mx-4 h-0.5 bg-[#0F0E14]/60" />
              <div className="w-4 h-1 rounded-xs bg-[#0F0E14]" />
            </div>

            {/* ──── PART 2: BOTTOM HALF / KEYBOARD DECK (Matches dimensions and boxy 3D edge profile) ──── */}
            <div 
              className="relative w-full h-[240px] sm:h-[280px] md:h-[310px] rounded-b-lg sm:rounded-b-xl rounded-t-none bg-gradient-to-b from-[#22212B] via-[#1B1A22] to-[#14131A] border-x-[6px] border-b-[10px] sm:border-x-[8px] sm:border-b-[14px] border-[#121118] border-t-0 flex flex-col items-center justify-between p-3 sm:p-4 z-20 select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_3px_12px_rgba(0,0,0,0.5),0_8px_0_#0A090E,0_18px_35px_rgba(0,0,0,0.6)]"
            >
              {/* Recessed Chiclet Keyboard Deck with CNC Milled Inset */}
              <div className="w-full max-w-[620px] bg-[#0E0D13] rounded-md border border-zinc-800/90 p-2 sm:p-3 flex items-stretch gap-2 sm:gap-4 shadow-[inset_0_2px_8px_rgba(0,0,0,0.85)]">
                
                {/* Left Speaker Grille */}
                <div className="w-4 sm:w-6 flex flex-col justify-between py-1 opacity-40">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="flex gap-1 justify-center">
                      <span className="w-1 h-1 rounded-full bg-zinc-500" />
                      <span className="w-1 h-1 rounded-full bg-zinc-500 hidden sm:inline" />
                    </div>
                  ))}
                </div>

                {/* Clean, Non-Squashed Keyboard Keys Matrix with 3D Chiclet Edges */}
                <div className="flex-1 flex flex-col justify-between gap-1">
                  {/* Row 1: Function Keys */}
                  <div className="flex gap-0.5 sm:gap-1 h-3 sm:h-4">
                    {['esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Touch ID'].map((k, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-[2px] bg-[#1B1A22] border-b-[1.5px] border-[#0A090E] flex items-center justify-center text-[6px] sm:text-[7px] font-mono shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] ${
                          k === 'Touch ID' ? 'text-[#FF5500] font-bold bg-[#261A16]' : 'text-zinc-400'
                        }`}
                      >
                        {k}
                      </div>
                    ))}
                  </div>

                  {/* Row 2: Numbers */}
                  <div className="flex gap-0.5 sm:gap-1 h-3.5 sm:h-4.5">
                    {['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'].map((k, i) => (
                      <div key={i} className={`${k === 'delete' ? 'flex-[1.4]' : 'flex-1'} rounded-[2px] bg-[#1E1D25] border-b-[2px] border-[#0A090E] flex items-center justify-center text-[7px] sm:text-[8px] font-mono text-zinc-300 font-semibold shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]`}>
                        {k}
                      </div>
                    ))}
                  </div>

                  {/* Row 3: QWERTY */}
                  <div className="flex gap-0.5 sm:gap-1 h-3.5 sm:h-4.5">
                    {['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'].map((k, i) => (
                      <div key={i} className={`${k === 'tab' ? 'flex-[1.4]' : 'flex-1'} rounded-[2px] bg-[#1E1D25] border-b-[2px] border-[#0A090E] flex items-center justify-center text-[7px] sm:text-[8px] font-mono text-zinc-300 font-bold shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]`}>
                        {k}
                      </div>
                    ))}
                  </div>

                  {/* Row 4: Home Row */}
                  <div className="flex gap-0.5 sm:gap-1 h-3.5 sm:h-4.5">
                    {['caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'return'].map((k, i) => (
                      <div key={i} className={`${k === 'caps' ? 'flex-[1.5]' : k === 'return' ? 'flex-[1.5]' : 'flex-1'} rounded-[2px] bg-[#1E1D25] border-b-[2px] border-[#0A090E] flex items-center justify-center text-[7px] sm:text-[8px] font-mono text-zinc-300 font-bold shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]`}>
                        {k}
                      </div>
                    ))}
                  </div>

                  {/* Row 5: Space Bar Row */}
                  <div className="flex gap-0.5 sm:gap-1 h-3.5 sm:h-4.5">
                    <div className="flex-1 rounded-[2px] bg-[#1B1A22] border-b-[2px] border-[#0A090E] flex items-center justify-center text-[6px] sm:text-[7px] font-mono text-zinc-400">fn</div>
                    <div className="flex-1 rounded-[2px] bg-[#1B1A22] border-b-[2px] border-[#0A090E] flex items-center justify-center text-[6px] sm:text-[7px] font-mono text-zinc-400">ctrl</div>
                    <div className="flex-1 rounded-[2px] bg-[#1B1A22] border-b-[2px] border-[#0A090E] flex items-center justify-center text-[6px] sm:text-[7px] font-mono text-zinc-400">opt</div>
                    <div className="flex-[1.2] rounded-[2px] bg-[#1B1A22] border-b-[2px] border-[#0A090E] flex items-center justify-center text-[6px] sm:text-[7px] font-mono text-zinc-400 font-bold">⌘ cmd</div>
                    <div className="flex-[5] rounded-[2px] bg-[#1E1D25] border-b-[2px] border-[#0A090E] flex items-center justify-center text-[6px] sm:text-[7px] font-mono text-zinc-500 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
                      SPACE
                    </div>
                    <div className="flex-[1.2] rounded-[2px] bg-[#1B1A22] border-b-[2px] border-[#0A090E] flex items-center justify-center text-[6px] sm:text-[7px] font-mono text-zinc-400 font-bold">⌘ cmd</div>
                    <div className="flex-1 rounded-[2px] bg-[#1B1A22] border-b-[2px] border-[#0A090E] flex items-center justify-center text-[6px] sm:text-[7px] font-mono text-zinc-400">opt</div>
                    <div className="flex-1 rounded-[2px] bg-[#1B1A22] border-b-[2px] border-[#0A090E] flex items-center justify-center text-[6px] sm:text-[7px] font-mono text-zinc-400">◄ ►</div>
                  </div>
                </div>

                {/* Right Speaker Grille */}
                <div className="w-4 sm:w-6 flex flex-col justify-between py-1 opacity-40">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="flex gap-1 justify-center">
                      <span className="w-1 h-1 rounded-full bg-zinc-500 hidden sm:inline" />
                      <span className="w-1 h-1 rounded-full bg-zinc-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Boxy Precision Glass Trackpad */}
              <div className="w-36 sm:w-48 md:w-56 h-12 sm:h-16 rounded-md bg-gradient-to-b from-[#181720] to-[#111016] border border-zinc-700/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.7)] flex items-center justify-center">
                <span className="text-[7.5px] font-mono text-zinc-500 tracking-widest uppercase">Force Touch Trackpad</span>
              </div>

              {/* Chassis Edge Spec Labels */}
              <div className="w-full flex justify-between px-3 sm:px-6 text-[8px] font-mono text-zinc-500">
                <span>THUNDERBOLT 4</span>
                <span>ARUN MOHAN K WORKSTATION</span>
                <span>MAGSAFE 3</span>
              </div>
            </div>

          </div>

          {/* Floor Drop Shadow */}
          <div 
            className="absolute -bottom-5 inset-x-6 h-10 rounded-full blur-xl bg-black/45 transition-all duration-150 pointer-events-none -z-10"
            style={{
              transform: `scale(${lidAngle < 90 ? 1.05 : 0.9})`,
              opacity: lidAngle < 90 ? 0.7 : 0.4
            }}
          />
        </div>

      </div>
    </section>
  );
}
