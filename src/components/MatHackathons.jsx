import React from 'react';
import TapeDivider from './TapeDivider';

const HACKATHONS_DATA = [
  {
    name: 'Build for Billions',
    kicker: 'NATIONAL INSTITUTE OF TECHNOLOGY KARNATAKA (NITK)',
    location: 'SURATHKAL',
    date: 'OCT 2026',
    dateBg: '#FFE23A',
    dateColor: '#0C0E0F',
    desc: 'Building public infrastructure & scalable architecture under pressure.',
    tag: 'NATIONAL SPRINT',
    duration: '24-36H SPRINT →',
    type: 'building'
  },
  {
    name: 'Hack The Future 3.0',
    kicker: 'NATIONAL HACKATHON',
    location: "Tula's University",
    date: 'OCT 2026',
    dateBg: '#4080FB',
    dateColor: '#FFFFFF',
    desc: 'Speed prototyping real-world problem statements & cloud workflows.',
    tag: 'RAPID PROTOTYPING',
    duration: '24-36H SPRINT →',
    type: 'vr'
  },
  {
    name: 'Convergence 2k26',
    kicker: 'SOFTWARE HACKATHON',
    location: 'VNR Vignana Jyothi Institute of Engg. & Tech.',
    date: 'SEP 2026',
    dateBg: '#00D26A',
    dateColor: '#0C0E0F',
    desc: 'Engineering reliable full-stack micro-services within tight time limits.',
    tag: 'FULL-STACK SPRINT',
    duration: '24-36H SPRINT →',
    type: 'laptop'
  },
  {
    name: 'Impact-AI-Thon',
    kicker: null,
    location: "St. Joseph's College of Engineering",
    date: 'FEB 2026',
    dateBg: '#FF477E',
    dateColor: '#FFFFFF',
    desc: 'Engineering applied AI pipelines and responsible intelligent user interfaces.',
    tag: 'AI / MACHINE LEARNING',
    duration: '24-36H SPRINT →',
    type: 'ai'
  },
  {
    name: 'TI Forge',
    kicker: null,
    location: 'Muthaulai Engineering College (MEC)',
    date: 'FEB 2026',
    dateBg: '#FFE23A',
    dateColor: '#0C0E0F',
    desc: 'Where collaborative development, debugging & iterative deployment come together.',
    tag: 'SYSTEMS DESIGN',
    duration: '24-36H SPRINT →',
    type: 'circuit'
  }
];

function renderCardGraphic(type) {
  switch (type) {
    case 'building':
      return (
        <svg width="86" height="96" viewBox="0 0 86 96" fill="none" style={{ flexShrink: 0, display: 'block' }}>
          {/* Comic hatch burst behind */}
          <g stroke="#0C0E0F" strokeWidth="2" strokeLinecap="round">
            <line x1="8" y1="14" x2="18" y2="22" />
            <line x1="4" y1="28" x2="14" y2="32" />
            <line x1="6" y1="44" x2="14" y2="46" />
          </g>
          <rect x="12" y="8" width="70" height="80" rx="14" fill="#FDFBF7" stroke="#0C0E0F" strokeWidth="2.8" />
          {/* Sky with gradient & Sun */}
          <path d="M14 10 H80 V55 H14 Z" fill="#BAE6FD" />
          <circle cx="28" cy="24" r="8" fill="#FDE047" stroke="#F59E0B" strokeWidth="1.2" />
          {/* Academic Building Facade */}
          <path d="M22 65 V36 L47 22 L72 36 V65 Z" fill="#D97706" stroke="#0C0E0F" strokeWidth="2" strokeLinejoin="round" />
          {/* Central Clock Tower */}
          <path d="M41 32 V20 H53 V32 Z" fill="#B45309" stroke="#0C0E0F" strokeWidth="1.8" />
          <circle cx="47" cy="26" r="3.2" fill="#FFFFFF" stroke="#0C0E0F" strokeWidth="1.2" />
          {/* Arches / Windows */}
          <path d="M30 48 C30 43 35 43 35 48 V65 H30 Z" fill="#451A03" />
          <path d="M44 45 C44 39 50 39 50 45 V65 H44 Z" fill="#FFE23A" stroke="#0C0E0F" strokeWidth="1.5" />
          <path d="M59 48 C59 43 64 43 64 48 V65 H59 Z" fill="#451A03" />
          {/* Green Trees & Bushes */}
          <path d="M13 74 C18 64 28 66 32 72 C36 65 48 64 52 70 C58 63 74 65 79 75 V86 H13 Z" fill="#15803D" stroke="#0C0E0F" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case 'vr':
      return (
        <svg width="86" height="96" viewBox="0 0 86 96" fill="none" style={{ flexShrink: 0, display: 'block' }}>
          {/* Comic speed rays behind */}
          <g stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" opacity="0.85">
            <line x1="6" y1="20" x2="20" y2="30" />
            <line x1="4" y1="46" x2="18" y2="48" />
            <line x1="8" y1="72" x2="22" y2="64" />
          </g>
          <rect x="12" y="8" width="70" height="80" rx="14" fill="#0F172A" stroke="#0C0E0F" strokeWidth="2.8" />
          {/* Blue Radial Glow */}
          <circle cx="47" cy="48" r="26" fill="#1E3A8A" />
          {/* Hacker Head Profile */}
          <path d="M28 80 C28 66 34 58 40 54 C36 48 36 36 42 28 C48 20 62 22 66 32 C70 42 66 52 62 56 C68 62 70 70 70 80 Z" fill="#3B82F6" stroke="#0C0E0F" strokeWidth="2" />
          {/* VR Goggles / Headset */}
          <rect x="36" y="34" width="36" height="15" rx="6" fill="#0284C7" stroke="#0C0E0F" strokeWidth="2.2" />
          <rect x="40" y="38" width="28" height="7" rx="3" fill="#38BDF8" />
          <line x1="42" y1="41" x2="66" y2="41" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          {/* Cyber Neck & Jaw Lines */}
          <path d="M50 58 L54 66 L62 68" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'laptop':
      return (
        <svg width="86" height="96" viewBox="0 0 86 96" fill="none" style={{ flexShrink: 0, display: 'block' }}>
          <g stroke="#00D26A" strokeWidth="2.2" strokeLinecap="round" opacity="0.85">
            <line x1="8" y1="16" x2="22" y2="26" />
            <line x1="4" y1="42" x2="18" y2="44" />
            <line x1="8" y1="72" x2="20" y2="64" />
          </g>
          <rect x="12" y="8" width="70" height="80" rx="14" fill="#080F1E" stroke="#0C0E0F" strokeWidth="2.8" />
          {/* Glowing Laptop Screen */}
          <polygon points="26,30 68,22 64,54 22,62" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
          <polygon points="28,34 65,26 62,51 25,58" fill="#0369A1" />
          {/* Code Lines on Screen */}
          <line x1="32" y1="38" x2="52" y2="34" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="44" x2="58" y2="39" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" />
          <line x1="28" y1="50" x2="48" y2="46" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
          {/* Laptop Keyboard Base */}
          <polygon points="18,63 60,55 76,66 32,75" fill="#334155" stroke="#0C0E0F" strokeWidth="2" />
          <polygon points="22,64 56,57 68,64 34,71" fill="#64748B" />
        </svg>
      );
    case 'ai':
      return (
        <svg width="86" height="96" viewBox="0 0 86 96" fill="none" style={{ flexShrink: 0, display: 'block' }}>
          <g stroke="#FF477E" strokeWidth="2.2" strokeLinecap="round" opacity="0.85">
            <line x1="6" y1="22" x2="18" y2="30" />
            <line x1="4" y1="50" x2="16" y2="50" />
            <line x1="8" y1="76" x2="20" y2="68" />
          </g>
          <rect x="12" y="8" width="70" height="80" rx="14" fill="#0A1128" stroke="#0C0E0F" strokeWidth="2.8" />
          {/* Robot Bust Profile */}
          <path 
            d="M26 78 C26 66 32 60 38 56 C34 46 34 32 44 24 C54 16 68 20 72 32 C76 44 72 54 66 58 C72 64 74 72 74 78 Z" 
            fill="#2563EB" 
            stroke="#0C0E0F" 
            strokeWidth="2" 
          />
          {/* Glowing Visor / Optics */}
          <path d="M48 34 C58 32 66 38 66 42 C66 46 56 46 48 42 Z" fill="#60A5FA" stroke="#93C5FD" strokeWidth="1.5" />
          <circle cx="58" cy="40" r="3" fill="#FFFFFF" />
          {/* Ear Node / Headset Disc */}
          <circle cx="38" cy="44" r="7" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="2" />
          <circle cx="38" cy="44" r="3" fill="#93C5FD" />
          {/* Circuit nodes on neck */}
          <path d="M44 60 L48 68 L58 70" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="58" cy="70" r="2.5" fill="#FFE23A" />
        </svg>
      );
    case 'circuit':
      return (
        <svg width="86" height="96" viewBox="0 0 86 96" fill="none" style={{ flexShrink: 0, display: 'block' }}>
          <g stroke="#FFAF26" strokeWidth="2.2" strokeLinecap="round" opacity="0.85">
            <line x1="8" y1="16" x2="20" y2="24" />
            <line x1="4" y1="44" x2="16" y2="44" />
            <line x1="6" y1="72" x2="18" y2="66" />
          </g>
          <rect x="12" y="8" width="70" height="80" rx="14" fill="#0B132B" stroke="#0C0E0F" strokeWidth="2.8" />
          {/* Circuit Grid Behind */}
          <path d="M22 28 H38 V42" stroke="#1C2541" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M68 62 H54 V48" stroke="#1C2541" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Hexagon Badge */}
          <polygon points="47,24 65,34 65,56 47,66 29,56 29,34" fill="#1C2541" stroke="#00F0FF" strokeWidth="2.4" />
          <polygon points="47,28 61,36 61,54 47,62 33,54 33,36" fill="#0B132B" />
          {/* Glowing </> in Center */}
          <text 
            x="47" 
            y="49" 
            textAnchor="middle" 
            fill="#00F0FF" 
            fontFamily="var(--font-mono), monospace" 
            fontSize="14" 
            fontWeight="900"
            letterSpacing="-1px"
          >
            &lt;/&gt;
          </text>
          <circle cx="47" cy="20" r="2.5" fill="#FFE23A" />
          <circle cx="69" cy="45" r="2.5" fill="#00F0FF" />
          <circle cx="47" cy="70" r="2.5" fill="#FFAF26" />
          <circle cx="25" cy="45" r="2.5" fill="#00F0FF" />
        </svg>
      );
    default:
      return null;
  }
}

function HackathonCard({ h, playSfx }) {
  return (
    <div
      onMouseEnter={() => playSfx('pop')}
      className="hackathon-card hack-card-hover"
      style={{
        background: '#FFFFFF',
        border: '3.5px solid #0C0E0F',
        borderRadius: '20px',
        boxShadow: '6px 6px 0 #0C0E0F',
        padding: '16px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative'
      }}
    >
      {/* Main Content: Left Image/Graphic + Right Details */}
      <div
        className="hackathon-card-content"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginBottom: '16px'
        }}
      >
        {/* Left Graphic Thumbnail */}
        <div className="hackathon-card-graphic flex-shrink-0">
          {renderCardGraphic(h.type)}
        </div>

        {/* Right Info Column */}
        <div className="hackathon-card-info" style={{ flex: 1, minWidth: 0, width: '100%', maxWidth: '100%' }}>
          <h3
            className="hackathon-card-title"
            style={{
              fontFamily: 'var(--font-tape)',
              fontSize: 'clamp(1.15rem, 1.4vw, 1.35rem)',
              color: '#0C0E0F',
              margin: '0 0 3px 0',
              lineHeight: 1.15
            }}
          >
            {h.name}
          </h3>

          {h.kicker && (
            <div
              className="hackathon-card-kicker"
              style={{
                color: '#EF4225',
                fontFamily: 'var(--font-tape)',
                fontSize: '0.72rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                lineHeight: 1.25,
                marginBottom: '4px'
              }}
            >
              {h.kicker}
            </div>
          )}

          <div
            className="hackathon-card-location"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: '0.82rem',
              color: '#0C0E0F',
              marginBottom: '6px'
            }}
          >
            <span style={{ color: '#EF4225', fontStyle: 'normal' }}>📍</span>
            <span className="truncate" style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{h.location}</span>
          </div>

          <p
            className="hackathon-card-desc"
            style={{
              color: '#374151',
              fontSize: '0.82rem',
              lineHeight: 1.35,
              fontWeight: 500,
              margin: 0
            }}
          >
            {h.desc}
          </p>
        </div>
      </div>

      {/* Footer Row */}
      <div
        className="hackathon-card-footer"
        style={{
          borderTop: '2px solid #E5E7EB',
          paddingTop: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.74rem'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-tape)',
            fontWeight: 800,
            color: '#0C0E0F',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <span>🏆</span>
          <span>{h.tag}</span>
        </span>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            color: '#111827',
            letterSpacing: '0.02em'
          }}
        >
          {h.duration}
        </span>
      </div>
    </div>
  );
}

export default function MatHackathons() {
  const playSfx = (name) => {
    if (window.SoundEffects?.[name]) {
      window.SoundEffects[name]();
    }
  };

  return (
    <>
      <TapeDivider 
        text="THE HACKATHON ARENA ★ RAPID PROTOTYPING ★ PROBLEM SOLVING UNDER PRESSURE ★ LEVELING UP SKILLS" 
        tilt="tilt-left" 
      />

      <section
        className="section section--prizes sunburst sunburst--red"
        id="hackathons"
        style={{ 
          position: 'relative', 
          overflow: 'hidden',
          padding: 'clamp(52px, 6.5vw, 92px) clamp(16px, 4vw, 36px)',
          background: 'radial-gradient(ellipse at 50% 30%, #EF4225 0%, #D4260A 60%, #9B1500 100%)'
        }}
      >
        {/* Continuously Rotating Sunburst Speed Rays */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 'max(240vw, 240vh)',
            height: 'max(240vw, 240vh)',
            background: 'repeating-conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0.11) 0deg 8deg, transparent 8deg 16deg)',
            animation: 'hackathon-rays-spin 55s linear infinite',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        {/* Moving Dynamic Ambient Comic Spotlight */}
        <div
          className="hackathon-spotlight"
          style={{
            position: 'absolute',
            inset: '-20%',
            background: 'radial-gradient(circle at 50% 35%, rgba(255, 226, 58, 0.22) 0%, rgba(239, 66, 37, 0) 65%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Moving Halftone Comic Dots Pattern */}
        <div
          className="hackathon-dots-bg"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(12, 14, 15, 0.24) 1.5px, transparent 2px)',
            backgroundSize: '14px 14px',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* ── COMIC CORNER SHAPES (LIGHTNING BOLTS & EXPLOSION BURSTS) ── */}

        {/* Left Comic Lightning Bolt */}
        <div 
          style={{
            position: 'absolute',
            left: 'clamp(10px, 2.8vw, 36px)',
            bottom: 'clamp(80px, 18%, 180px)',
            zIndex: 4,
            transform: 'rotate(-18deg)',
            pointerEvents: 'none'
          }}
        >
          <svg width="60" height="96" viewBox="0 0 48 80" fill="none">
            <polygon 
              points="28,4 8,42 24,42 16,76 44,34 26,34" 
              fill="#FFE23A" 
              stroke="#0C0E0F" 
              strokeWidth="4" 
              strokeLinejoin="round" 
              style={{ filter: 'drop-shadow(4px 4px 0px #0C0E0F)' }}
            />
          </svg>
        </div>

        {/* Right Comic Lightning Bolt */}
        <div 
          style={{
            position: 'absolute',
            right: 'clamp(10px, 2.8vw, 36px)',
            bottom: 'clamp(90px, 20%, 200px)',
            zIndex: 4,
            transform: 'rotate(18deg)',
            pointerEvents: 'none'
          }}
        >
          <svg width="60" height="96" viewBox="0 0 48 80" fill="none">
            <polygon 
              points="28,4 8,42 24,42 16,76 44,34 26,34" 
              fill="#FFE23A" 
              stroke="#0C0E0F" 
              strokeWidth="4" 
              strokeLinejoin="round" 
              style={{ filter: 'drop-shadow(4px 4px 0px #0C0E0F)' }}
            />
          </svg>
        </div>

        {/* Top-Left Comic Speed Rays */}
        <div
          style={{
            position: 'absolute',
            left: '-15px',
            top: '30px',
            zIndex: 4,
            pointerEvents: 'none'
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path d="M0,0 L35,25 L15,45 L45,40 L30,70 L60,55 L50,90" stroke="#FFE23A" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        {/* Bottom-Right Comic Explosion Burst Cloud */}
        <div
          style={{
            position: 'absolute',
            right: '-30px',
            bottom: '-30px',
            zIndex: 4,
            pointerEvents: 'none'
          }}
        >
          <svg width="150" height="150" viewBox="0 0 120 120">
            <path 
              d="M30,100 C20,80 30,55 50,55 C55,35 80,35 90,50 C110,50 115,75 105,95 C115,115 90,120 70,115 C55,125 35,115 30,100 Z" 
              fill="#FFFFFF" 
              stroke="#0C0E0F" 
              strokeWidth="4.2" 
            />
            <circle cx="65" cy="75" r="3.2" fill="#0C0E0F" />
            <circle cx="75" cy="82" r="2.8" fill="#0C0E0F" />
            <circle cx="85" cy="74" r="3.2" fill="#0C0E0F" />
          </svg>
        </div>

        {/* Section Heading */}
        <div 
          className="section-head section-head--center" 
          style={{ 
            position: 'relative', 
            zIndex: 3, 
            textAlign: 'center', 
            maxWidth: '820px', 
            margin: '0 auto 36px auto' 
          }}
        >
          <div
            style={{
              display: 'inline-block',
              background: '#FFE23A',
              color: '#0C0E0F',
              fontFamily: 'var(--font-tape)',
              fontSize: '0.85rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 14px',
              borderRadius: '8px',
              border: '2.5px solid #0C0E0F',
              boxShadow: '3px 3px 0 #0C0E0F',
              transform: 'rotate(-2deg)',
              marginBottom: '12px'
            }}
          >
            SPRINT &amp; LEARN
          </div>

          <h2 
            className="display display--prizes" 
            style={{ 
              color: '#FFE23A', 
              WebkitTextStroke: '3px #0C0E0F', 
              paintOrder: 'stroke fill',
              textShadow: '5px 5px 0 #0C0E0F',
              fontFamily: 'var(--font-display), "Bangers", cursive, Impact, sans-serif',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
              lineHeight: 1,
              letterSpacing: '0.03em',
              margin: '0'
            }}
          >
            THE HACKATHON ARENA
          </h2>
        </div>

        {/* ── HACKATHONS CARDS: TOP 3, BOTTOM 2 ON DESKTOP & EXACT 2 CARDS IN A ROW ON MOBILE ── */}
        {/* Desktop View (>= 860px) */}
        <div
          className="hidden md:flex flex-col gap-6 w-full max-w-[1240px] mx-auto relative z-[3]"
        >
          {/* Row 1: Top 3 Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              justifyContent: 'center'
            }}
          >
            {HACKATHONS_DATA.slice(0, 3).map((h, idx) => (
              <HackathonCard key={idx} h={h} playSfx={playSfx} />
            ))}
          </div>

          {/* Row 2: Bottom 2 Centered Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              maxWidth: '820px',
              margin: '0 auto',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            {HACKATHONS_DATA.slice(3).map((h, idx) => (
              <HackathonCard key={idx + 3} h={h} playSfx={playSfx} />
            ))}
          </div>
        </div>

        {/* Mobile View (< 860px): Exact 2 Cards in a Row */}
        <div className="md:hidden hackathons-cards-grid relative z-[3]">
          {HACKATHONS_DATA.map((h, idx) => (
            <div 
              key={idx} 
              className={idx === 4 ? "col-span-2 flex justify-center w-full" : "w-full h-full"}
            >
              <div className={idx === 4 ? "w-[calc(50%-5px)] h-full" : "w-full h-full"}>
                <HackathonCard h={h} playSfx={playSfx} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
