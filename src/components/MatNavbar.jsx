import React, { useState, useEffect } from 'react';

export default function MatNavbar({ onNavigateDedicated }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const playSfx = (name) => {
    if (window.MakeatonSound && window.MakeatonSound.play) {
      window.MakeatonSound.play(name);
    }
  };

  const handleNav = (anchorId) => {
    playSfx('pop');
    if (onNavigateDedicated) {
      onNavigateDedicated('all');
    }
    setTimeout(() => {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 40);
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Creator', id: 'creator' },
    { label: 'Journey Book', id: 'timeline', sfx: 'pageFlip' },
    { label: 'Hackathons', id: 'hackathons' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <div 
      style={{
        position: 'fixed',
        top: '14px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: 'fit-content',
        maxWidth: 'calc(100% - 24px)',
        padding: '0 4px',
        pointerEvents: 'none'
      }}
    >
      <header 
        style={{
          pointerEvents: 'auto',
          background: 'var(--paper)',
          border: 'var(--line) solid var(--ink)',
          borderRadius: '999px',
          boxShadow: isScrolled ? '0 6px 0 var(--ink)' : '4px 4px 0 var(--ink)',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px 10px 4px 6px',
          gap: '6px'
        }}
      >
        {/* Brand Logo & Back-to-Top Button */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            playSfx('pop');
            handleNav('top');
          }}
          onMouseEnter={() => playSfx('pop')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            padding: '2px 8px 2px 4px',
            borderRadius: '999px',
            background: 'transparent',
            transition: 'transform 0.15s ease, background 0.15s ease',
            flexShrink: 0
          }}
          className="hover:bg-[#FFE23A] hover:-translate-y-0.5 active:translate-y-0"
          title="Arun Mohan K — Back to Top"
        >
          <img
            src="/logo.png"
            alt="Arun Mohan K"
            style={{
              width: '32px',
              height: '32px',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(1.5px 1.5px 0 #0C0E0F)'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-tape)',
              fontSize: '0.92rem',
              letterSpacing: '0.04em',
              color: 'var(--ink)',
              textTransform: 'uppercase'
            }}
            className="hidden sm:inline"
          >
            ARUN
          </span>
        </a>

        {/* Small vertical divider */}
        <div 
          style={{ 
            width: '2px', 
            height: '22px', 
            background: '#0C0E0F', 
            opacity: 0.2, 
            flexShrink: 0 
          }} 
        />

        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(4px, 1.2vw, 14px)',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '2px 4px'
          }} 
          aria-label="Sections"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                if (link.sfx) playSfx(link.sfx);
                handleNav(link.id);
              }}
              onMouseEnter={() => playSfx(link.sfx || 'pop')}
              style={{
                padding: '6px clamp(8px, 1vw, 14px)',
                fontFamily: 'var(--font-tape)',
                fontSize: 'clamp(0.82rem, 0.95vw, 0.92rem)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: 'var(--ink)',
                borderRadius: '999px',
                transition: 'background 0.15s ease, color 0.15s ease, transform 0.1s ease',
                display: 'inline-block'
              }}
              className="hover:bg-[#FFE23A] hover:-translate-y-0.5 active:translate-y-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}
