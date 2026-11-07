import React, { useState, useEffect } from 'react';

export default function MatNavbar({ onNavigateDedicated }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const playSfx = (name) => {
    if (window.MakeatonSound && window.MakeatonSound.play) {
      window.MakeatonSound.play(name);
    }
  };

  const handleNav = (anchorId) => {
    playSfx('pop');
    setMobileMenuOpen(false);
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
    <>
      {/* Top Floating Bar */}
      <div 
        className="mat-navbar-container"
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
          className="mat-navbar-header"
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
            padding: '4px 14px 4px 8px',
            gap: '8px'
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
              className="inline"
            >
              ARUN
            </span>
          </a>

          {/* Desktop divider */}
          <div 
            className="mat-nav-desktop-divider"
            style={{ 
              width: '2px', 
              height: '22px', 
              background: '#0C0E0F', 
              opacity: 0.2, 
              flexShrink: 0 
            }} 
          />

          {/* Desktop Links */}
          <nav 
            className="mat-nav-desktop-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(3px, 0.8vw, 10px)',
              whiteSpace: 'nowrap',
              padding: '2px 6px 2px 2px',
              flexShrink: 0
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
                  padding: '5px clamp(7px, 0.8vw, 12px)',
                  fontFamily: 'var(--font-tape)',
                  fontSize: 'clamp(0.8rem, 0.9vw, 0.9rem)',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: 'var(--ink)',
                  borderRadius: '999px',
                  transition: 'background 0.15s ease, color 0.15s ease, transform 0.1s ease',
                  display: 'inline-block',
                  flexShrink: 0
                }}
                className="hover:bg-[#FFE23A] hover:-translate-y-0.5 active:translate-y-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mat-nav-hamburger-btn"
            onClick={() => {
              playSfx('pop');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'none', // Shown on mobile via CSS
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '999px',
              background: mobileMenuOpen ? 'var(--pink)' : '#FFE23A',
              border: '2.5px solid var(--ink)',
              boxShadow: '2px 2px 0 var(--ink)',
              cursor: 'pointer',
              marginLeft: '4px',
              padding: 0,
              transition: 'transform 0.15s ease, background 0.15s ease'
            }}
          >
            {mobileMenuOpen ? (
              // X icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger 3 bars
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--ink)' }}>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </header>
      </div>

      {/* Mobile Drawer Overlay & Panel */}
      {mobileMenuOpen && (
        <div
          className="mat-mobile-menu-overlay"
          onClick={() => {
            playSfx('pop');
            setMobileMenuOpen(false);
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(12, 14, 15, 0.65)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex: 998,
            animation: 'fadeIn 0.2s ease forwards'
          }}
        >
          <div
            className="mat-mobile-menu-drawer"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: '68px',
              left: '14px',
              right: '14px',
              background: 'var(--paper)',
              border: '3.5px solid var(--ink)',
              borderRadius: '20px',
              boxShadow: '6px 6px 0 var(--ink)',
              padding: '18px 16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              animation: 'comicDrawerSlide 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
              zIndex: 999
            }}
          >
            {/* Drawer Header Badge */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '10px',
                borderBottom: '2.5px dashed rgba(12, 14, 15, 0.25)',
                marginBottom: '4px'
              }}
            >
              <span 
                style={{
                  fontFamily: 'var(--font-tape)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  background: 'var(--yellow)',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  border: '2px solid var(--ink)',
                  boxShadow: '2px 2px 0 var(--ink)'
                }}
              >
                NAVIGATION
              </span>
              <span 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#666',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                // ISSUE #01
              </span>
            </div>

            {/* Links List */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map((link, idx) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.sfx) playSfx(link.sfx);
                    handleNav(link.id);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 16px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    background: idx === 0 ? '#FFE23A' : idx === 1 ? '#FF4F79' : '#FFF',
                    color: (idx === 1) ? '#FFF' : 'var(--ink)',
                    border: '2.5px solid var(--ink)',
                    borderRadius: '12px',
                    boxShadow: '3px 3px 0 var(--ink)',
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                  }}
                  className="active:translate-x-1 active:translate-y-1"
                >
                  <span>{link.label}</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>→</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
