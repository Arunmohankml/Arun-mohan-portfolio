import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function MatHero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    setPointer({ x, y });
  };

  const playSfx = (name) => {
    if (window.SoundEffects?.[name]) {
      window.SoundEffects[name]();
    }
  };

  const handleAvatarClick = () => {
    playSfx('pop');
    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.55 },
        colors: ['#FFE23A', '#EF4225', '#4080FB', '#FFFFFF']
      });
    } catch (e) {}
  };

  return (
    <section 
      className="hero" 
      id="top" 
      aria-labelledby="hero-title" 
      onMouseMove={handleMouseMove}
      style={{ 
        '--px': pointer.x, 
        '--py': pointer.y,
        position: 'relative',
        zIndex: 40,
        overflow: 'visible',
        width: '100%',
        height: 'clamp(560px, 100svh, 860px)',
        minHeight: '540px',
        padding: 0,
        margin: 0,
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        background: '#0C0E0F',
        borderBottom: 'none'
      }}
    >
      {/* ── MAIN COMIC SPREAD FRAME ── */}
      <div
        className="comic-hero-spread"
        style={{
          position: 'relative',
          zIndex: 40,
          overflow: 'visible',
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          display: 'grid',
          gridTemplateColumns: '53% 47%',
          background: '#0C0E0F'
        }}
      >
        {/* ── LEFT PANEL: GOLDEN YELLOW SUNBURST ── */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(ellipse at 30% 45%, #FFAF26 0%, #F59318 60%, #E87208 100%)',
            padding: 'clamp(24px, 3.6vw, 56px)',
            paddingTop: 'clamp(50px, 7vh, 76px)',
            paddingBottom: 'clamp(80px, 11vh, 120px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            zIndex: 2
          }}
        >
          {/* Rotating Sunburst Rays */}
          <span
            style={{
              position: 'absolute',
              inset: '-50%',
              width: '200%',
              height: '200%',
              background: 'repeating-conic-gradient(from var(--ray-turn, 0deg) at 36% 50%, #FFB636 0deg 7.5deg, #F0881A 7.5deg 15deg)',
              opacity: 0.9,
              zIndex: 0,
              animation: 'hero-rays 90s linear infinite',
              pointerEvents: 'none'
            }}
          />

          {/* Halftone Dot Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(12, 14, 15, 0.16) 1.5px, transparent 2px)',
              backgroundSize: '11px 11px',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />

          {/* Explosive "M" Star Badge (Top-Left) */}
          <div 
            style={{ 
              position: 'absolute', 
              top: 'clamp(14px, 2.2vh, 26px)', 
              left: 'clamp(16px, 2.4vw, 32px)', 
              zIndex: 10,
              filter: 'drop-shadow(3px 3px 0 #0C0E0F)'
            }}
          >
            <div style={{ position: 'relative', width: '56px', height: '56px' }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <polygon 
                  points="50,0 63,26 95,15 79,45 100,70 69,75 64,100 42,82 20,96 25,68 0,55 24,37 10,12 38,22" 
                  fill="#FFFFFF" 
                  stroke="#0C0E0F" 
                  strokeWidth="5" 
                  strokeLinejoin="round" 
                />
              </svg>
              <span 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontFamily: 'var(--font-tape)', 
                  fontSize: '1.35rem', 
                  fontWeight: 900, 
                  color: '#0C0E0F', 
                  letterSpacing: '-0.02em'
                }}
              >
                M
              </span>
            </div>
          </div>

          {/* "HI, I'M" Speech Pill */}
          <div 
            style={{ 
              zIndex: 4,
              position: 'relative',
              marginBottom: '12px',
              transform: 'rotate(-3deg)'
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '7px 20px',
                background: '#FFE23A',
                color: '#0C0E0F',
                fontFamily: 'var(--font-display), "Bangers", cursive, sans-serif',
                fontSize: 'clamp(1.15rem, 1.5vw, 1.35rem)',
                letterSpacing: '0.04em',
                borderRadius: '10px',
                border: '3px solid #0C0E0F',
                boxShadow: '3.5px 3.5px 0 #0C0E0F'
              }}
            >
              HI, I&apos;M
              {/* Pointer Tail */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-7px',
                  left: '18px',
                  width: 0,
                  height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '7px solid #0C0E0F'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '19px',
                  width: 0,
                  height: 0,
                  borderLeft: '5px solid transparent',
                  borderRight: '5px solid transparent',
                  borderTop: '5px solid #FFE23A'
                }}
              />
            </div>
          </div>

          {/* Hero Title: ARUN MOHAN K. */}
          <h1 
            id="hero-title" 
            style={{ 
              fontFamily: 'var(--font-display), "Bangers", cursive, sans-serif', 
              fontSize: 'clamp(3.8rem, 6.8vw, 7rem)', 
              color: '#FFFFFF', 
              WebkitTextStroke: '4.5px #0C0E0F', 
              paintOrder: 'stroke fill', 
              textShadow: '6px 6px 0px #0C0E0F', 
              letterSpacing: '0.02em', 
              lineHeight: 0.95,
              margin: '0 0 20px 0', 
              whiteSpace: 'nowrap',
              zIndex: 3,
              position: 'relative',
              transform: 'rotate(-2deg)'
            }}
          >
            ARUN MOHAN K.
          </h1>

          {/* Subtitle Banner Box: FULL-STACK ARCHITECT & CLOUD ENGINEER */}
          <div 
            style={{ 
              background: '#FFFFFF', 
              border: '4px solid #0C0E0F', 
              borderRadius: '16px', 
              boxShadow: '6.5px 6.5px 0 #0C0E0F', 
              padding: '14px 28px', 
              maxWidth: 'max-content', 
              marginBottom: '24px',
              zIndex: 3,
              position: 'relative',
              transform: 'rotate(-2deg)'
            }}
          >
            <div 
              style={{ 
                fontFamily: 'var(--font-display), "Bangers", cursive, sans-serif', 
                fontSize: 'clamp(1.35rem, 2.1vw, 1.95rem)', 
                color: '#0C0E0F', 
                lineHeight: 1.15, 
                textTransform: 'uppercase',
                letterSpacing: '0.03em'
              }}
            >
              FULL-STACK ARCHITECT &amp; <br />
              <span style={{ color: '#FFE23A', WebkitTextStroke: '1.5px #0C0E0F', textShadow: '2px 2px 0 #0C0E0F' }}>CLOUD</span> ENGINEER
            </div>
          </div>

          {/* Tagline */}
          <p 
            style={{ 
              fontFamily: 'var(--font-tape)', 
              fontSize: 'clamp(1.08rem, 1.45vw, 1.35rem)', 
              fontWeight: 700,
              color: '#0C0E0F', 
              letterSpacing: '0.02em', 
              marginBottom: '36px',
              zIndex: 3,
              position: 'relative',
              lineHeight: 1.35
            }}
          >
            Build. Ship. Dominate. Systems, Cloud &amp; Real-Time Ui.
          </p>

          {/* Action Buttons Row */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '22px', 
              flexWrap: 'wrap',
              zIndex: 4,
              position: 'relative'
            }}
          >
            {/* Speed Lines Doodle Left of Buttons */}
            <div 
              style={{
                position: 'absolute',
                left: '-26px',
                top: '50%',
                transform: 'translateY(-50%) rotate(-3deg)',
                pointerEvents: 'none'
              }}
            >
              <svg width="22" height="34" viewBox="0 0 16 28">
                <line x1="14" y1="2" x2="2" y2="12" stroke="#0C0E0F" strokeWidth="3" strokeLinecap="round" />
                <line x1="16" y1="16" x2="4" y2="26" stroke="#0C0E0F" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* EXPLORE PROJECTS (BIGGER & TILTED CARTOONISH WITH POPPING TILT HOVER) */}
            <a 
              href="#projects"
              className="btn btn--pop hero-btn-explore"
              onClick={() => playSfx('pow')}
              onMouseEnter={() => playSfx('pop')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '17px 36px',
                background: '#FF2A5F',
                color: '#FFFFFF',
                fontFamily: 'var(--font-tape)',
                fontSize: '1.18rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                borderRadius: '999px',
                border: '4px solid #0C0E0F',
                boxShadow: '6px 6px 0 #0C0E0F',
                textDecoration: 'none'
              }}
            >
              <span>EXPLORE PROJECTS</span>
              <span style={{ fontSize: '1.35rem' }}>→</span>
            </a>

            {/* VIEW GITHUB PROFILE (BIGGER & TILTED CARTOONISH WITH POPPING TILT HOVER) */}
            <a 
              href="https://github.com/Arunmohankml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-btn-github"
              onMouseEnter={() => playSfx('pop')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 32px',
                background: '#FFFFFF',
                color: '#0C0E0F',
                fontFamily: 'var(--font-tape)',
                fontSize: '1.12rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                borderRadius: '999px',
                border: '4px solid #0C0E0F',
                boxShadow: '6px 6px 0 #0C0E0F',
                textDecoration: 'none'
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>VIEW GITHUB PROFILE</span>
              <span style={{ fontSize: '1.25rem' }}>→</span>
            </a>

            {/* Doodle ticks below buttons */}
            <div 
              style={{
                position: 'absolute',
                right: '18px',
                bottom: '-28px',
                pointerEvents: 'none'
              }}
            >
              <svg width="32" height="20" viewBox="0 0 26 18">
                <line x1="2" y1="2" x2="11" y2="16" stroke="#0C0E0F" strokeWidth="3.2" strokeLinecap="round" />
                <line x1="15" y1="2" x2="24" y2="16" stroke="#0C0E0F" strokeWidth="3.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── TORN PAPER SEAM (DIAGONAL SPLIT) ── */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 'calc(53% - 24px)',
            width: '48px',
            height: '100%',
            zIndex: 4,
            pointerEvents: 'none',
            overflow: 'hidden'
          }}
          aria-hidden="true"
        >
          <svg 
            viewBox="0 0 40 800" 
            preserveAspectRatio="none" 
            style={{ 
              width: '100%', 
              height: '100%', 
              display: 'block' 
            }}
          >
            {/* Torn blue back-shadow */}
            <path 
              d="M16,0 L24,45 L14,95 L26,145 L15,195 L27,250 L17,305 L25,360 L14,415 L26,475 L16,530 L27,590 L16,645 L25,705 L16,755 L22,800 L40,800 L40,0 Z" 
              fill="#104AC0" 
            />
            {/* Thick white torn paper edge */}
            <path 
              d="M16,0 L24,45 L14,95 L26,145 L15,195 L27,250 L17,305 L25,360 L14,415 L26,475 L16,530 L27,590 L16,645 L25,705 L16,755 L22,800" 
              stroke="#FFFFFF" 
              strokeWidth="9" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" 
            />
            {/* Ink outline of tear */}
            <path 
              d="M16,0 L24,45 L14,95 L26,145 L15,195 L27,250 L17,305 L25,360 L14,415 L26,475 L16,530 L27,590 L16,645 L25,705 L16,755 L22,800" 
              stroke="#0C0E0F" 
              strokeWidth="3.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" 
            />
          </svg>
        </div>

        {/* ── RIGHT PANEL: DEEP COMIC BLUE WITH CODE WINDOW ── */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(ellipse at 70% 45%, #2972F8 0%, #1A5ED8 50%, #1042A6 100%)',
            zIndex: 1
          }}
        >
          {/* Rotating Blue Radial Speed Rays */}
          <span
            style={{
              position: 'absolute',
              inset: '-50%',
              width: '200%',
              height: '200%',
              background: 'repeating-conic-gradient(from var(--ray-turn, 0deg) at 68% 48%, rgba(255, 255, 255, 0.13) 0deg 8deg, transparent 8deg 16deg)',
              opacity: 0.95,
              zIndex: 0,
              animation: 'hero-rays 90s linear infinite',
              pointerEvents: 'none'
            }}
          />

          {/* Halftone Dot Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.16) 1.5px, transparent 2px)',
              backgroundSize: '12px 12px',
              pointerEvents: 'none'
            }}
          />

          {/* ── FLOATING COMIC TECH LOGOS ── */}
          <img
            src="/logos/react-comic.png"
            alt="React"
            title="React.js"
            className="comic-tech-logo float-logo-1"
            onMouseEnter={() => playSfx('pop')}
            style={{
              position: 'absolute',
              top: 'clamp(26px, 4.5vh, 55px)',
              right: 'clamp(140px, 14vw, 220px)',
              width: 'clamp(52px, 4.5vw, 70px)',
              height: 'auto',
              zIndex: 6
            }}
          />
          <img
            src="/logos/cpp-comic.png"
            alt="C++"
            title="C++"
            className="comic-tech-logo float-logo-2"
            onMouseEnter={() => playSfx('pop')}
            style={{
              position: 'absolute',
              top: 'clamp(48px, 7.5vh, 85px)',
              right: 'clamp(25px, 3.2vw, 55px)',
              width: 'clamp(50px, 4.2vw, 66px)',
              height: 'auto',
              zIndex: 6
            }}
          />
          <img
            src="/logos/django-comic.png"
            alt="Django"
            title="Django"
            className="comic-tech-logo float-logo-5"
            onMouseEnter={() => playSfx('pop')}
            style={{
              position: 'absolute',
              top: 'clamp(38%, 42vh, 48%)',
              right: 'clamp(290px, 25vw, 380px)',
              width: 'clamp(75px, 6.5vw, 105px)',
              height: 'auto',
              zIndex: 6
            }}
          />
          <img
            src="/logos/python-comic.png"
            alt="Python"
            title="Python"
            className="comic-tech-logo float-logo-3"
            onMouseEnter={() => playSfx('pop')}
            style={{
              position: 'absolute',
              top: 'clamp(56%, 58vh, 66%)',
              right: 'clamp(160px, 16vw, 240px)',
              width: 'clamp(50px, 4.2vw, 68px)',
              height: 'auto',
              zIndex: 6
            }}
          />
          <img
            src="/logos/aws-comic.png"
            alt="AWS"
            title="Amazon Web Services"
            className="comic-tech-logo float-logo-4"
            onMouseEnter={() => playSfx('pop')}
            style={{
              position: 'absolute',
              top: 'clamp(66%, 68vh, 76%)',
              right: 'clamp(35px, 4vw, 72px)',
              width: 'clamp(65px, 5.8vw, 88px)',
              height: 'auto',
              zIndex: 6
            }}
          />

          {/* ── CODE EDITOR WINDOW (LARGE, TILTED BEHIND ARUN) ── */}
          <div
            className="code-window"
            style={{
              position: 'absolute',
              right: 'clamp(20px, 3.5vw, 55px)',
              top: 'clamp(22%, 25vh, 32%)',
              width: 'clamp(260px, 26vw, 360px)',
              zIndex: 3,
              transform: 'rotate(5deg)'
            }}
          >
            <div
              style={{
                background: '#181A22',
                border: '3.2px solid #0C0E0F',
                borderRadius: '16px',
                boxShadow: '6px 6px 0 #0C0E0F',
                overflow: 'hidden'
              }}
            >
              {/* Window Title Bar */}
              <div
                style={{
                  padding: '9px 14px',
                  background: '#222632',
                  borderBottom: '2.5px solid #0C0E0F',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span 
                  className="code-dot code-dot--red" 
                  title="Close" 
                  onMouseEnter={() => playSfx('pop')} 
                />
                <span 
                  className="code-dot code-dot--yellow" 
                  title="Minimize" 
                  onMouseEnter={() => playSfx('pop')} 
                />
                <span 
                  className="code-dot code-dot--green" 
                  title="Maximize" 
                  onMouseEnter={() => playSfx('pop')} 
                />
              </div>

              {/* Code Editor Body */}
              <div
                style={{
                  padding: '14px 18px',
                  fontFamily: "var(--font-mono), 'JetBrains Mono', Consolas, monospace",
                  fontSize: 'clamp(0.85rem, 1.05vw, 1.05rem)',
                  lineHeight: 1.6,
                  color: '#F8FAFC'
                }}
              >
                <div>
                  <span style={{ color: '#60A5FA', fontWeight: 700 }}>while</span>{' '}
                  <span style={{ color: '#BAE6FD' }}>(curiosity)</span>{' '}
                  <span style={{ color: '#F8FAFC' }}>{'{'}</span>
                </div>
                <div style={{ paddingLeft: '1.5em' }}>
                  <span style={{ color: '#38BDF8', fontWeight: 600 }}>build</span>
                  <span style={{ color: '#F8FAFC' }}>();</span>
                </div>
                <div style={{ paddingLeft: '1.5em' }}>
                  <span style={{ color: '#38BDF8', fontWeight: 600 }}>learn</span>
                  <span style={{ color: '#F8FAFC' }}>();</span>
                </div>
                <div style={{ paddingLeft: '1.5em' }}>
                  <span style={{ color: '#38BDF8', fontWeight: 600 }}>grow</span>
                  <span style={{ color: '#F8FAFC' }}>();</span>
                </div>
                <div>
                  <span style={{ color: '#F8FAFC' }}>{'}'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── "LET'S BUILD SOMETHING GREAT!" (BOTTOM-RIGHT) ── */}
          <div
            style={{
              position: 'absolute',
              right: 'clamp(20px, 3.5vw, 55px)',
              bottom: 'clamp(55px, 8vh, 85px)',
              zIndex: 5,
              textAlign: 'right',
              transform: 'rotate(-5deg)',
              pointerEvents: 'none'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display), "Bangers", cursive, sans-serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.35rem, 2.2vw, 2.2rem)',
                color: '#FFFFFF',
                WebkitTextStroke: '2.5px #0C0E0F',
                paintOrder: 'stroke fill',
                textShadow: '3.5px 3.5px 0 #0C0E0F',
                lineHeight: 0.98,
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              LET&apos;S<br />
              BUILD<br />
              SOMETHING<br />
              GREAT!
            </div>
            {/* Speed marks underneath */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
              <svg width="42" height="12" viewBox="0 0 42 12">
                <line x1="8" y1="2" x2="40" y2="2" stroke="#FFE23A" strokeWidth="3" strokeLinecap="round" />
                <line x1="18" y1="8" x2="38" y2="8" stroke="#FFE23A" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── ARUN MOHAN K CUTOUT AVATAR (HERO SCALE TO FILL MARKED SPACE) ── */}
        <div
          className="arun-hero-center-cutout"
          style={{
            position: 'absolute',
            left: 'clamp(46%, 49vw, 54%)',
            bottom: 'clamp(-15px, -1.5vh, 0px)',
            zIndex: 25,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            filter: 'drop-shadow(4px 4px 0 #FFFFFF) drop-shadow(-4px -4px 0 #FFFFFF) drop-shadow(7px 7px 0 #0C0E0F)'
          }}
          onClick={handleAvatarClick}
          title="Click Arun!"
        >
          {/* Yellow Doodle Crown (LOCKED DIRECTLY TO ARUN'S HAIR) */}
          <div 
            style={{ 
              position: 'absolute', 
              top: 'clamp(-36px, -4vh, -22px)', 
              right: '25%', 
              zIndex: 30, 
              transform: 'rotate(18deg)',
              pointerEvents: 'none'
            }}
          >
            <svg width="58" height="44" viewBox="0 0 52 40" fill="none">
              {/* 2 spark lines */}
              <line x1="6" y1="14" x2="1" y2="9" stroke="#FFE23A" strokeWidth="3.2" strokeLinecap="round" />
              <line x1="12" y1="6" x2="7" y2="1" stroke="#FFE23A" strokeWidth="3.2" strokeLinecap="round" />
              {/* 3-Point Crown Body */}
              <path 
                d="M12 30 L13 10 L25 20 L37 8 L40 30 Z" 
                fill="#FFE23A" 
                stroke="#0C0E0F" 
                strokeWidth="3.4" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>

          {/* Arun Mohan Photo Cutout (SUBSTANTIALLY BIGGER TO FILL THE MARKED SPACE) */}
          <img
            src="/avatars/arun-victory.png"
            alt="Arun Mohan K"
            style={{
              height: 'clamp(580px, 86vh, 880px)',
              width: 'auto',
              objectFit: 'contain',
              objectPosition: 'bottom',
              display: 'block'
            }}
          />
        </div>

        {/* ── FLOATING ACCENT MINI-CLOUDS (COMIC SKY DETAILS) ── */}
        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(110px, 16vh, 180px)',
            left: 'clamp(18px, 4vw, 55px)',
            zIndex: 16,
            pointerEvents: 'none'
          }}
          className="float-logo-2"
          aria-hidden="true"
        >
          <svg width="84" height="46" viewBox="0 0 84 46" fill="none" style={{ filter: 'drop-shadow(3px 3px 0 #0C0E0F)' }}>
            <path
              d="M 18,36 C 8,36 3,28 7,19 C 11,11 23,9 29,15 C 34,5 50,5 56,13 C 62,9 72,13 75,21 C 83,25 82,36 71,37 C 58,38 28,38 18,36 Z"
              fill="#FFFFFF"
              stroke="#0C0E0F"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M 18,36 C 28,38 58,38 71,37 C 82,36 83,25 75,21 C 70,28 55,34 32,34 C 22,34 14,35 18,36 Z"
              fill="#BAE6FD"
              opacity="0.8"
            />
          </svg>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(130px, 18vh, 210px)',
            right: 'clamp(30px, 6vw, 110px)',
            zIndex: 16,
            pointerEvents: 'none'
          }}
          className="float-logo-4"
          aria-hidden="true"
        >
          <svg width="98" height="52" viewBox="0 0 98 52" fill="none" style={{ filter: 'drop-shadow(3px 3px 0 #0C0E0F)' }}>
            <path
              d="M 22,42 C 10,42 4,32 9,22 C 14,12 28,10 35,17 C 41,6 59,6 66,15 C 73,10 85,15 88,24 C 97,29 96,42 83,43 C 68,44 34,44 22,42 Z"
              fill="#FFFFFF"
              stroke="#0C0E0F"
              strokeWidth="3.2"
              strokeLinejoin="round"
            />
            <path
              d="M 22,42 C 34,44 68,44 83,43 C 96,42 97,29 88,24 C 82,32 65,39 38,39 C 26,39 17,40 22,42 Z"
              fill="#BAE6FD"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* ── COMIC PUFFY CLOUDS (ORGANIC CUMULUS BANK WITH NATURAL BILLOWS, 3D DEPTH & COMIC INKING) ── */}
        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(-85px, -10vh, -65px)',
            left: '-20px',
            right: '-20px',
            width: 'calc(100% + 40px)',
            height: 'clamp(170px, 21vh, 240px)',
            zIndex: 15,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 6px 0 #0C0E0F)'
          }}
          aria-hidden="true"
        >
          <svg 
            viewBox="0 0 1440 260" 
            preserveAspectRatio="none" 
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            {/* 1. Back Layer: Cool Ice-Blue Cumulus Peaks (Creates authentic 3D Comic Depth) */}
            <path
              d="M -30, 150
                 C 20, 80 80, 50 150, 75
                 C 185, 12 295, 10 360, 68
                 C 410, 40 470, 35 520, 70
                 C 560, 15 670, 12 730, 60
                 C 770, 5 880, 2 940, 58
                 C 980, 25 1040, 20 1090, 62
                 C 1140, 8 1260, 5 1320, 55
                 C 1370, 30 1430, 45 1470, 95
                 C 1490, 130 1485, 175 1460, 205
                 C 1380, 255 1250, 258 1160, 215
                 C 1070, 258 920, 260 830, 220
                 C 740, 258 600, 260 510, 218
                 C 420, 258 270, 256 180, 215
                 C 90, 250 -10, 240 -40, 195
                 Z"
              fill="#E0F2FE"
              stroke="#0C0E0F"
              strokeWidth="3.4"
              strokeLinejoin="round"
            />

            {/* 2. Main Foreground Layer: Pure White Billowing Cloud Bank */}
            <path
              d="M -40, 140
                 C 0, 95 60, 85 110, 105
                 C 150, 35 250, 25 310, 80
                 C 350, 55 400, 52 440, 85
                 C 480, 28 570, 22 630, 70
                 C 675, 42 735, 38 780, 75
                 C 820, 20 920, 18 970, 72
                 C 1010, 48 1060, 44 1100, 82
                 C 1150, 22 1255, 18 1315, 72
                 C 1365, 42 1430, 55 1465, 105
                 C 1485, 140 1480, 175 1455, 200
                 C 1390, 248 1285, 252 1210, 215
                 C 1140, 252 1015, 255 935, 215
                 C 860, 255 725, 258 640, 218
                 C 565, 255 435, 254 350, 215
                 C 270, 250 145, 248 65, 210
                 C 5, 238 -25, 215 -40, 175
                 Z"
              fill="#FFFFFF"
              stroke="#0C0E0F"
              strokeWidth="4"
              strokeLinejoin="round"
            />

            {/* 3. Under-Cushion Comic Cel Shading (Clean Sky-Blue Hue) */}
            <path
              d="M -40, 175
                 C -25, 215 5, 238 65, 210
                 C 145, 248 270, 250 350, 215
                 C 435, 254 565, 255 640, 218
                 C 725, 258 860, 255 935, 215
                 C 1015, 255 1140, 252 1210, 215
                 C 1285, 252 1390, 248 1455, 200
                 C 1440, 180 1400, 195 1360, 185
                 C 1300, 225 1220, 228 1160, 195
                 C 1100, 228 980, 230 900, 195
                 C 820, 230 690, 232 610, 198
                 C 530, 230 400, 228 320, 195
                 C 240, 225 130, 222 40, 190
                 C -10, 175 -30, 160 -40, 175
                 Z"
              fill="#BAE6FD"
              opacity="0.8"
            />

            {/* 4. Comic Contour Accent Arcs (Defines Spherical Roundness of Upper Domes) */}
            <path d="M 205, 55 C 240, 48 275, 60 290, 78" stroke="#0C0E0F" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <path d="M 535, 45 C 570, 38 600, 48 615, 65" stroke="#0C0E0F" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <path d="M 870, 40 C 905, 34 935, 44 952, 62" stroke="#0C0E0F" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <path d="M 1210, 42 C 1245, 36 1280, 46 1295, 65" stroke="#0C0E0F" strokeWidth="2.8" strokeLinecap="round" fill="none" />

            {/* 5. Comic Contour Accent Arcs (Defines Softness of Bottom Cushions) */}
            <path d="M 210, 225 C 255, 236 300, 230 325, 215" stroke="#0C0E0F" strokeWidth="2.6" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M 770, 235 C 820, 245 870, 238 900, 220" stroke="#0C0E0F" strokeWidth="2.6" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M 1060, 230 C 1110, 240 1155, 232 1180, 218" stroke="#0C0E0F" strokeWidth="2.6" strokeLinecap="round" fill="none" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
