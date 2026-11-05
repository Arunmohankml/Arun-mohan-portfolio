import React from 'react';

export default function MatStatusStrip() {
  const handleCardClick = (targetId) => {
    if (window.SoundEffects?.pop) {
      window.SoundEffects.pop();
    }
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      className="hero-status-strip" 
      aria-label="Status & Highlights"
      style={{
        position: 'relative',
        width: '100%',
        background: '#FFE23A',
        backgroundImage: 'radial-gradient(rgba(12, 14, 15, 0.16) 1.5px, transparent 2px)',
        backgroundSize: '12px 12px',
        borderTop: 'none',
        borderBottom: '4px solid #0C0E0F',
        padding: '7px 16px',
        zIndex: 5
      }}
    >
      <div 
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '12px',
          alignItems: 'stretch'
        }}
      >
        {/* ── CARD 1 (LEFT): EDUCATION & LOCATION ── */}
        <div
          style={{
            background: '#FFFDF8',
            border: '3px solid #0C0E0F',
            borderRadius: '14px',
            boxShadow: '3.5px 3.5px 0 #0C0E0F',
            padding: '7px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease'
          }}
          className="hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0C0E0F]"
        >
          {/* SRMIST */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#FFE23A',
                border: '2px solid #0C0E0F',
                boxShadow: '2px 2px 0 #0C0E0F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C0E0F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="3" ry="3"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <line x1="8" y1="14" x2="11" y2="14"/>
                <line x1="13" y1="14" x2="16" y2="14"/>
              </svg>
            </div>
            <div style={{ minWidth: 0 }}>
              <div 
                style={{ 
                  fontFamily: 'var(--font-tape)', 
                  fontSize: 'clamp(1rem, 1.2vw, 1.18rem)', 
                  fontWeight: 900, 
                  fontStyle: 'italic', 
                  color: '#0C0E0F', 
                  lineHeight: 1.05 
                }}
              >
                SRMIST
              </div>
              <div 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.64rem', 
                  fontWeight: 800, 
                  color: '#4B5563', 
                  textTransform: 'uppercase', 
                  marginTop: '2px', 
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap'
                }}
              >
                B.TECH CSE (CLOUD)
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '2px', height: '30px', background: '#0C0E0F', opacity: 0.85, flexShrink: 0 }} />

          {/* CHENNAI */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#FFE23A',
                border: '2px solid #0C0E0F',
                boxShadow: '2px 2px 0 #0C0E0F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C0E0F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div style={{ minWidth: 0 }}>
              <div 
                style={{ 
                  fontFamily: 'var(--font-tape)', 
                  fontSize: 'clamp(1rem, 1.2vw, 1.18rem)', 
                  fontWeight: 900, 
                  fontStyle: 'italic', 
                  color: '#0C0E0F', 
                  lineHeight: 1.05 
                }}
              >
                CHENNAI
              </div>
              <div 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.64rem', 
                  fontWeight: 800, 
                  color: '#4B5563', 
                  textTransform: 'uppercase', 
                  marginTop: '2px', 
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap'
                }}
              >
                TAMIL NADU, INDIA
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD 2 (CENTER): CURRENT STATUS ── */}
        <div
          style={{
            background: '#FFE23A',
            border: '3px solid #0C0E0F',
            borderRadius: '14px',
            boxShadow: '3.5px 3.5px 0 #0C0E0F',
            padding: '7px 14px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease'
          }}
          className="hover:-translate-y-1 hover:shadow-[5px_5px_0px_#0C0E0F]"
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <span 
              style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                background: '#10B981', 
                boxShadow: '0 0 6px rgba(16, 185, 129, 0.9)',
                display: 'inline-block'
              }} 
              className="animate-pulse" 
            />
            <span 
              style={{ 
                fontFamily: 'var(--font-tape)', 
                fontSize: '0.72rem', 
                fontWeight: 900, 
                letterSpacing: '0.08em', 
                color: '#0C0E0F', 
                textTransform: 'uppercase' 
              }}
            >
              CURRENT STATUS
            </span>
          </div>

          <div 
            style={{ 
              fontFamily: 'var(--font-tape)', 
              fontSize: 'clamp(1.15rem, 1.5vw, 1.5rem)', 
              fontWeight: 900, 
              fontStyle: 'italic', 
              color: '#0C0E0F', 
              textShadow: '1.5px 1.5px 0 #FFFFFF', 
              textTransform: 'uppercase', 
              lineHeight: 1.1, 
              margin: '1px 0' 
            }}
          >
            ACTIVE &amp; CODING
          </div>

          <div 
            style={{ 
              fontFamily: 'var(--font-tape)', 
              fontSize: '0.66rem', 
              fontWeight: 900, 
              letterSpacing: '0.04em', 
              color: '#0C0E0F', 
              textTransform: 'uppercase' 
            }}
          >
            OPEN FOR FREELANCE &amp; SUMMER &apos;26 INTERNSHIPS
          </div>
        </div>

        {/* ── CARD 3 (RIGHT): ENGINEERING PORTFOLIO ── */}
        <div
          onClick={() => handleCardClick('projects')}
          style={{
            background: 'linear-gradient(135deg, #FF6EA7 0%, #FF5296 100%)',
            border: '3px solid #0C0E0F',
            borderRadius: '14px',
            boxShadow: '3.5px 3.5px 0 #0C0E0F',
            padding: '7px 14px',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease'
          }}
          className="hover:-translate-y-1 hover:shadow-[5px_5px_0px_#0C0E0F]"
        >
          {/* Radial speed lines corner decoration */}
          <div 
            style={{ 
              position: 'absolute', 
              right: '-35px', 
              top: '-35px', 
              width: '160px', 
              height: '160px', 
              background: 'repeating-conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0.28) 0deg 12deg, transparent 12deg 24deg)', 
              borderRadius: '50%', 
              pointerEvents: 'none' 
            }} 
          />

          <div 
            style={{ 
              fontFamily: 'var(--font-tape)', 
              fontSize: '0.72rem', 
              fontWeight: 900, 
              letterSpacing: '0.06em', 
              color: '#0C0E0F', 
              textTransform: 'uppercase', 
              position: 'relative', 
              zIndex: 1 
            }}
          >
            ENGINEERING PORTFOLIO
          </div>

          <div 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(1.3rem, 1.8vw, 1.7rem)', 
              fontWeight: 900, 
              fontStyle: 'italic', 
              color: '#FFE23A', 
              WebkitTextStroke: '1.5px #0C0E0F', 
              paintOrder: 'stroke fill',
              textShadow: '2.5px 2.5px 0 #0C0E0F', 
              lineHeight: 1.1, 
              margin: '1px 0', 
              position: 'relative', 
              zIndex: 1 
            }}
          >
            10+ SHIPPED
          </div>

          <div 
            style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '0.72rem', 
              fontWeight: 700, 
              color: '#0C0E0F', 
              letterSpacing: '-0.01em', 
              position: 'relative', 
              zIndex: 1 
            }}
          >
            From WebRTC pipes to commercial e-commerce →
          </div>
        </div>
      </div>
    </section>
  );
}
