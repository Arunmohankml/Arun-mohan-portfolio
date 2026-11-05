import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, RefreshCw, Zap, Flame, Smile, Check, Play, Pause } from 'lucide-react';
import confetti from 'canvas-confetti';

// Real Transparent Photos of Arun Mohan in various cool poses!
const POSES = [
  {
    id: 'victory',
    name: 'Victory & Peace',
    emoji: '✌️',
    badge: 'PEACE ✌️',
    quote: 'Always building, always learning!',
    image: '/avatars/arun-victory.png',
    accent: '#FF5500',
  },
  {
    id: 'thumbsup',
    name: 'Double Thumbs Up',
    emoji: '👍',
    badge: '100% READY 👍',
    quote: 'Committed to shipping top-tier code!',
    image: '/avatars/arun-thumbsup.png',
    accent: '#FF6B00',
  },
  {
    id: 'shades',
    name: 'Shades Mode',
    emoji: '😎',
    badge: 'COOL MODE 😎',
    quote: 'Clean architecture, zero compromises.',
    image: '/avatars/arun-shades.png',
    accent: '#121215',
  },
  {
    id: 'pointing',
    name: 'Let\'s Talk',
    emoji: '👉',
    badge: 'YOU & ME 👉',
    quote: 'Got a project? Let’s bring it to life!',
    image: '/avatars/arun-pointing.png',
    accent: '#FF5500',
  },
  {
    id: 'fingerguns',
    name: 'Double Guns',
    emoji: '⚡',
    badge: 'LOCKED IN ⚡',
    quote: 'CitizenIV modder & Cloud architect.',
    image: '/avatars/arun-fingerguns.png',
    accent: '#FF4400',
  },
  {
    id: 'headphones',
    name: 'Deep Focus',
    emoji: '🎧',
    badge: 'FLOW STATE 🎧',
    quote: 'In the zone • CitizenIV & WebRTC pipes.',
    image: '/avatars/arun-headphones.png',
    accent: '#18181D',
  },
  {
    id: 'shield',
    name: 'Zero Bugs',
    emoji: '🙅‍♂️',
    badge: 'BUG DEFENSE 🙅‍♂️',
    quote: 'No broken builds on my watch!',
    image: '/avatars/arun-shield.png',
    accent: '#FF5500',
  },
  {
    id: 'confident',
    name: 'Boss Mode',
    emoji: '💪',
    badge: 'READY TO LEAD 💪',
    quote: 'SRMIST CSE (Cloud) & Freelance Dev.',
    image: '/avatars/arun-confident.png',
    accent: '#121215',
  },
];

export default function PoseCloud() {
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0);
  const [speed, setSpeed] = useState(1050); // Fast 1.05s default per user request
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPopping, setIsPopping] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const activePose = POSES[currentPoseIndex];

  // Automatic cartoonish GIF frame cycling (fast and snappy ~1.05s)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      triggerPoseChange((prev) => (prev + 1) % POSES.length);
    }, speed);

    return () => clearInterval(interval);
  }, [isAutoPlaying, speed]);

  const triggerPoseChange = (newIndexOrUpdater) => {
    setIsPopping(true);
    setCurrentPoseIndex(newIndexOrUpdater);

    // Micro pop animation reset (reduced to 240ms for snappy cartoon movement)
    setTimeout(() => {
      setIsPopping(false);
    }, 240);
  };

  const handleManualPoseSelect = (index) => {
    if (index === currentPoseIndex) return;
    triggerPoseChange(index);
    
    // Tiny confetti burst on manual victory or thumbsup select
    if (index === 0 || index === 1) {
      try {
        confetti({
          particleCount: 35,
          spread: 55,
          origin: { y: 0.6 },
          colors: ['#FF5500', '#FF8800', '#121215', '#FFFFFF']
        });
      } catch (e) {}
    }
  };

  // 3D Parallax tilt on mouse move
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center w-full max-w-[500px] mx-auto select-none"
    >
      {/* Background Soft Solar Glow */}
      <div 
        className="absolute -inset-6 rounded-full opacity-35 blur-3xl pointer-events-none transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(255,85,0,0.3) 0%, rgba(255,255,255,0) 70%)'
        }}
      />


      {/* Main Avatar Stage with 3D Parallax Tilt (snappy 100ms response) */}
      <div 
        className="relative w-full aspect-[4/5] max-h-[500px] flex items-end justify-center transition-transform duration-100 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
        }}
      >
        {/* Comic Speed & Energy Sparkles */}
        <div className="absolute top-10 left-3 animate-float-slow opacity-90 pointer-events-none">
          <Sparkles className="w-6 h-6 text-[#FF5500]" />
        </div>
        <div className="absolute top-6 right-6 animate-float-medium opacity-90 pointer-events-none">
          <Flame className="w-6 h-6 text-[#FF5500]" />
        </div>

        {/* Comic Speech Bubble */}
        <div 
          className="absolute top-2 z-20 transition-all duration-300 transform scale-100"
          style={{
            transform: `translate3d(${tilt.x * 0.8}px, ${tilt.y * 0.8}px, 0)`
          }}
        >
          <div className="relative bg-[#121214] text-white px-4 py-2 rounded-2xl shadow-[4px_4px_0px_#FFD000] border-2 border-black flex items-center gap-2">
            <span className="comic-badge bg-[#FF5500] text-white text-[9px] py-0.5 px-1.5 rounded">
              POW!
            </span>
            <span className="text-xs sm:text-sm font-black tracking-tight text-white">
              {activePose.quote}
            </span>
            <span className="text-base">{activePose.emoji}</span>
            {/* Speech bubble beak */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black" />
          </div>
        </div>

        {/* ── THE POPPING REAL TRANSPARENT CHARACTER ── */}
        <div 
          onClick={() => triggerPoseChange((currentPoseIndex + 1) % POSES.length)}
          className="relative z-10 w-[92%] h-[92%] flex items-end justify-center cursor-pointer group"
          title="Click to pop next pose!"
        >
          {/* Animated transparent image cycling with comic sticker filter */}
          <div className={`relative w-full h-full flex items-end justify-center transition-all duration-300 ${
            isPopping ? 'animate-cartoon-pop' : 'transform hover:scale-[1.03]'
          }`}>
            <img 
              src={activePose.image} 
              alt={`Arun Mohan - ${activePose.name}`}
              className="w-full h-full object-contain object-bottom select-none pointer-events-none transition-all duration-200 comic-avatar-sticker"
            />
          </div>

          {/* Steam / Pop Clouds on Pose Change */}
          {isPopping && (
            <div className="absolute -bottom-2 pointer-events-none flex gap-6 z-15">
              <span className="w-8 h-8 rounded-full bg-white/95 animate-ping" />
              <span className="w-10 h-10 rounded-full bg-white/90 animate-ping delay-75" />
              <span className="w-8 h-8 rounded-full bg-white/95 animate-ping delay-150" />
            </div>
          )}
        </div>

        {/* ── THE CUTE 3D CLOUD BASE AT THE BOTTOM ── */}
        <div className="absolute -bottom-7 w-[106%] h-[130px] z-20 pointer-events-none flex items-end justify-center animate-cloud-float">
          {/* Multi-layered cute fluffy cloud SVG */}
          <svg 
            viewBox="0 0 500 160" 
            className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.09)] filter"
          >
            <defs>
              <linearGradient id="cloud-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="65%" stopColor="#FAF8F6" />
                <stop offset="100%" stopColor="#EDE8E4" />
              </linearGradient>
              <linearGradient id="cloud-rim" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF5500" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FF5500" stopOpacity="0.25" />
              </linearGradient>
              <filter id="cloud-shadow" x="-10%" y="-10%" width="120%" height="130%">
                <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#121215" flood-opacity="0.09" />
              </filter>
            </defs>

            {/* Back cloud puff layer */}
            <g opacity="0.65">
              <ellipse cx="130" cy="115" rx="95" ry="48" fill="#F0EDE8" />
              <ellipse cx="370" cy="115" rx="95" ry="48" fill="#F0EDE8" />
              <ellipse cx="250" cy="95" rx="140" ry="65" fill="#E8E3DD" />
            </g>

            {/* Front main cute cloud puffs */}
            <g filter="url(#cloud-shadow)">
              {/* Bottom flat rounded base */}
              <rect x="35" y="100" width="430" height="58" rx="29" fill="url(#cloud-gradient)" />
              
              {/* Left puffs */}
              <circle cx="95" cy="100" r="48" fill="url(#cloud-gradient)" />
              <circle cx="160" cy="78" r="58" fill="url(#cloud-gradient)" />
              
              {/* Center majestic fluff puff */}
              <circle cx="250" cy="62" r="70" fill="url(#cloud-gradient)" />
              
              {/* Right puffs */}
              <circle cx="340" cy="78" r="58" fill="url(#cloud-gradient)" />
              <circle cx="405" cy="100" r="48" fill="url(#cloud-gradient)" />

              {/* Highlight strokes */}
              <path 
                d="M 115 68 C 135 52, 180 52, 200 66 M 215 46 C 240 34, 260 34, 285 46 M 305 66 C 325 52, 370 52, 390 68" 
                stroke="url(#cloud-rim)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="none" 
              />
            </g>

            {/* Cute mini cloud sparkles */}
            <circle cx="65" cy="95" r="4.5" fill="#FF5500" opacity="0.8" />
            <circle cx="435" cy="95" r="4.5" fill="#FF5500" opacity="0.8" />
          </svg>
        </div>
      </div>

    </div>
  );
}
