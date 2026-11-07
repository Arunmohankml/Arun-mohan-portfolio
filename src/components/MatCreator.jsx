import React from 'react';
import TapeDivider from './TapeDivider';
import { Instagram, Play } from 'lucide-react';

const INSTA_VIDEOS = [
  {
    id: 'DX9ZIO3haO0',
    title: 'Budget Friendly Varanasi Trip Part 3',
    url: 'https://www.instagram.com/reel/DX9ZIO3haO0/',
    thumbnail: '/reels/reel-1.jpg',
    category: 'TRAVEL VLOG',
    icon: '✈️'
  },
  {
    id: 'DcXhfvGoJoi',
    title: 'Traditional Kerala Sadhya on Fresh Banana Leaf',
    url: 'https://www.instagram.com/reel/DcXhfvGoJoi/',
    thumbnail: '/reels/reel-2.jpg',
    category: 'FOOD RELATED',
    icon: '🥘'
  },
  {
    id: 'DXZX02jjaQB',
    title: 'Budget Friendly Varanasi Trip Part 2',
    url: 'https://www.instagram.com/reel/DXZX02jjaQB/',
    thumbnail: '/reels/reel-3.jpg',
    category: 'TRAVEL VLOG',
    icon: '✈️'
  }
];

export default function MatCreator() {

  return (
    <>
      <TapeDivider text="BEYOND THE CODE ★ FOOD & TRAVEL CREATOR ★ @4RUUN ON INSTAGRAM" tilt="tilt-right" white={true} />

      <section 
        className="section section--hack" 
        id="creator" 
        style={{
          paddingTop: 'clamp(60px, 6vw, 90px)',
          paddingBottom: 'clamp(70px, 7vw, 110px)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Decorative Chocolate Stripes & Dots BG Pattern */}
        <div className="creator-stripes-bg" aria-hidden="true" />

        {/* Decorative Falling Chocolate Chips & Strips with Comic Shadows */}
        {/* 1. Top-Left Chocolate Chip */}
        <div 
          className="falling-chip-1"
          style={{
            position: 'absolute',
            left: '3%',
            top: '80px',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.28,
            filter: 'drop-shadow(3px 4px 0px rgba(12, 14, 15, 0.35))'
          }}
          aria-hidden="true"
        >
          <svg width="42" height="42" viewBox="0 0 36 36">
            <path d="M18 4 C24 10 32 20 28 28 C24 34 12 34 8 28 C4 20 12 10 18 4 Z" fill="#3D2314" stroke="#0C0E0F" strokeWidth="2.5" />
            <path d="M14 16 C16 12 20 12 22 16" stroke="#5C3822" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        {/* 2. Top-Right Chocolate Wafer Strip */}
        <div 
          className="falling-chip-2"
          style={{
            position: 'absolute',
            right: '4%',
            top: '60px',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.26,
            filter: 'drop-shadow(4px 4px 0px rgba(12, 14, 15, 0.35))'
          }}
          aria-hidden="true"
        >
          <svg width="56" height="32" viewBox="0 0 56 32">
            <rect x="4" y="6" width="48" height="18" rx="6" transform="rotate(-15 28 15)" fill="#4A2C1A" stroke="#0C0E0F" strokeWidth="2.5" />
            <line x1="16" y1="9" x2="16" y2="23" stroke="#2B160C" strokeWidth="2" strokeLinecap="round" transform="rotate(-15 28 15)" />
            <line x1="28" y1="9" x2="28" y2="23" stroke="#2B160C" strokeWidth="2" strokeLinecap="round" transform="rotate(-15 28 15)" />
            <line x1="40" y1="9" x2="40" y2="23" stroke="#2B160C" strokeWidth="2" strokeLinecap="round" transform="rotate(-15 28 15)" />
          </svg>
        </div>

        {/* 3. Mid-Left Diagonal Chocolate Strip */}
        <div 
          className="falling-chip-3"
          style={{
            position: 'absolute',
            left: '2%',
            top: '52%',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.24,
            filter: 'drop-shadow(3px 4px 0px rgba(12, 14, 15, 0.35))'
          }}
          aria-hidden="true"
        >
          <svg width="48" height="28" viewBox="0 0 48 28">
            <rect x="4" y="5" width="40" height="16" rx="5" transform="rotate(22 24 13)" fill="#3D2314" stroke="#0C0E0F" strokeWidth="2.5" />
          </svg>
        </div>

        {/* 4. Mid-Right Chocolate Chip Morsel */}
        <div 
          className="falling-chip-1"
          style={{
            position: 'absolute',
            right: '2.5%',
            top: '46%',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.28,
            filter: 'drop-shadow(3px 4px 0px rgba(12, 14, 15, 0.35))'
          }}
          aria-hidden="true"
        >
          <svg width="38" height="38" viewBox="0 0 36 36">
            <path d="M18 4 C24 10 32 20 28 28 C24 34 12 34 8 28 C4 20 12 10 18 4 Z" fill="#2E180E" stroke="#0C0E0F" strokeWidth="2.5" />
          </svg>
        </div>

        {/* 5. Bottom-Left Chocolate Chip with Golden Sparkle */}
        <div 
          className="falling-chip-2"
          style={{
            position: 'absolute',
            left: '5%',
            bottom: '70px',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.26,
            filter: 'drop-shadow(3px 4px 0px rgba(12, 14, 15, 0.35))'
          }}
          aria-hidden="true"
        >
          <svg width="44" height="44" viewBox="0 0 44 44">
            <path d="M22 6 C28 12 36 22 32 30 C28 36 16 36 12 30 C8 22 16 12 22 6 Z" fill="#4A2C1A" stroke="#0C0E0F" strokeWidth="2.5" />
            <polygon points="34,10 36,4 38,10 44,12 38,14 36,20 34,14 28,12" fill="#FFE23A" stroke="#0C0E0F" strokeWidth="1.5" />
          </svg>
        </div>

        {/* 6. Bottom-Right Falling Chocolate Strip */}
        <div 
          className="falling-chip-3"
          style={{
            position: 'absolute',
            right: '5%',
            bottom: '80px',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.25,
            filter: 'drop-shadow(4px 4px 0px rgba(12, 14, 15, 0.35))'
          }}
          aria-hidden="true"
        >
          <svg width="54" height="32" viewBox="0 0 54 32">
            <rect x="4" y="6" width="44" height="16" rx="5" transform="rotate(-18 26 14)" fill="#3D2314" stroke="#0C0E0F" strokeWidth="2.5" />
          </svg>
        </div>

        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>
          
          {/* Section Header */}
          <div style={{ marginBottom: '36px', textAlign: 'center' }}>
            <h2 
              style={{
                fontFamily: 'var(--font-display), "Bangers", cursive, Impact, sans-serif',
                fontSize: 'clamp(3rem, 5.8vw, 5rem)',
                lineHeight: 1,
                color: '#FFFFFF',
                WebkitTextStroke: '3px #0C0E0F',
                paintOrder: 'stroke fill',
                textShadow: '5px 5px 0px #0C0E0F',
                textTransform: 'uppercase',
                margin: '0 0 16px 0',
                letterSpacing: '0.03em'
              }}
            >
              BEYOND THE <span style={{ color: '#FFE23A' }}>CODE</span>.
            </h2>

            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw, 1.3rem)',
                color: '#0C0E0F',
                fontWeight: 600,
                lineHeight: 1.5,
                maxWidth: '780px',
                margin: '0 auto'
              }}
            >
              Technology isn't the only thing I enjoy exploring. Outside development, I create content around food, local experiences and travel. From discovering underrated food spots and exploring new cities to documenting everyday experiences, I use Instagram to share places and experiences worth discovering.
            </p>
          </div>

          {/* Feature Story Card with Photo */}
          <div 
            className="hack__card" 
            style={{ 
              marginBottom: '16px',
              boxShadow: '10px 10px 0 var(--ink)',
              border: '3px solid var(--ink)',
              padding: 'clamp(20px, 2.5vw, 36px)',
              alignItems: 'center'
            }}
          >
            <div className="hack__text" style={{ gap: '14px' }}>
              <span className="hack__hook" style={{ background: '#FFE23A' }}>
                FOOD &amp; TRAVEL CONTENT CREATOR · 1.5K+ FOLLOWERS
              </span>
              
              <p className="hack__lead" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.28rem)', lineHeight: 1.4 }}>
                A personal space to document food discoveries, budget-friendly travel, local culture and experiences along the way.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', width: '100%', marginTop: '4px' }}>
                <div style={{ padding: '10px 14px', background: '#FFFFFF', border: '2px solid var(--ink)', borderRadius: '12px', boxShadow: '3px 3px 0 var(--ink)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>INSTAGRAM</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#E1306C', lineHeight: 1, marginTop: '4px' }}>@4ruun</div>
                </div>
                <div style={{ padding: '10px 14px', background: '#FFFFFF', border: '2px solid var(--ink)', borderRadius: '12px', boxShadow: '3px 3px 0 var(--ink)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>FOLLOWERS</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#0C0E0F', lineHeight: 1, marginTop: '4px' }}>1,514+</div>
                </div>
                <div style={{ padding: '10px 14px', background: '#FFFFFF', border: '2px solid var(--ink)', borderRadius: '12px', boxShadow: '3px 3px 0 var(--ink)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>CONTENT FOCUS</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: '#EF4225', lineHeight: 1.2, marginTop: '4px' }}>Food · Travel · Local Experiences</div>
                </div>
                <div style={{ padding: '10px 14px', background: '#FFFFFF', border: '2px solid var(--ink)', borderRadius: '12px', boxShadow: '3px 3px 0 var(--ink)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>PLATFORM</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#0C0E0F', lineHeight: 1, marginTop: '4px' }}>Instagram</div>
                </div>
              </div>

              <div className="hack__action" style={{ marginTop: '8px' }}>
                <a
                  href="https://www.instagram.com/4ruun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hack__cta"
                  onClick={() => window.SoundEffects?.pow?.()}
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Instagram className="w-5 h-5" />
                  VISIT @4RUUN ON INSTAGRAM ↗
                </a>
                <p className="hack__note" style={{ color: '#444' }}>
                  Food discoveries, travel snippets and experiences from different places.
                </p>
              </div>
            </div>

            {/* Arun's Round Profile Photo with Comic Styling */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div 
                style={{
                  position: 'relative',
                  width: 'clamp(140px, 16vw, 195px)',
                  height: 'clamp(140px, 16vw, 195px)',
                  borderRadius: '50%',
                  padding: '5px',
                  background: '#FFE23A',
                  border: '3.5px solid var(--ink)',
                  boxShadow: '6px 6px 0 var(--ink)'
                }}
              >
                <img
                  src="/instapfp.png"
                  alt="Arun Mohan K (@4ruun) Instagram Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </div>

          {/* 3 Instagram Reel Video Thumbnails (Non-stretched 9:16 ratio) */}
          <div style={{ marginTop: '0px' }}>
            {/* 3-Column Video Grid (Responsive 2 Cards in a Row on Mobile) */}
            <div 
              className="creator-reels-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '24px',
                alignItems: 'stretch'
              }}
            >
              {INSTA_VIDEOS.map((video) => (
                <div
                  key={video.id}
                  style={{
                    background: '#0C0E0F',
                    border: '3.5px solid var(--ink)',
                    borderRadius: '20px',
                    boxShadow: '6px 6px 0 var(--ink)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.18s ease, box-shadow 0.18s ease'
                  }}
                  className="group hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_#0C0E0F]"
                >
                  {/* Clean 9:16 Reel Thumbnail (No white Instagram embed chrome) */}
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Watch "${video.title}" on Instagram`}
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '9 / 16',
                      background: '#0C0E0F',
                      overflow: 'hidden',
                      display: 'block',
                      textDecoration: 'none'
                    }}
                    onClick={() => window.SoundEffects?.pop?.()}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.35s ease'
                      }}
                      className="group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for comic punch & readability */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(12, 14, 15, 0.8) 0%, rgba(12, 14, 15, 0) 45%, rgba(12, 14, 15, 0.2) 100%)',
                        pointerEvents: 'none'
                      }}
                    />

                    {/* Centered Comic Play Button */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        border: '3.5px solid #0C0E0F',
                        boxShadow: '4px 4px 0 #0C0E0F',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.2s ease, background 0.2s ease',
                        pointerEvents: 'none'
                      }}
                      className="group-hover:scale-110 group-hover:bg-[#FFE23A]"
                    >
                      <Play className="w-7 h-7 ml-1 text-[#0C0E0F] fill-[#0C0E0F]" />
                    </div>

                    {/* Reel Title Caption overlay at bottom */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '14px',
                        right: '14px',
                        pointerEvents: 'none'
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontFamily: 'var(--font-tape)',
                          fontSize: '0.92rem',
                          color: '#FFFFFF',
                          lineHeight: 1.25,
                          textShadow: '2px 2px 0 #0C0E0F, -1px -1px 0 #0C0E0F',
                          letterSpacing: '0.02em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {video.title}
                      </p>
                    </div>
                  </a>

                  {/* Bottom Dark Bar: Category Tag & Instagram Link */}
                  <div
                    style={{
                      padding: '12px 14px',
                      background: '#0C0E0F',
                      borderTop: '3px solid #1A1D20',
                      marginTop: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '10px'
                    }}
                  >
                    <span 
                      style={{
                        padding: '5px 12px',
                        background: '#FFE23A',
                        color: '#0C0E0F',
                        borderRadius: '999px',
                        fontFamily: 'var(--font-tape)',
                        fontSize: '0.78rem',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {video.icon} {video.category}
                    </span>

                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        background: '#E1306C',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-tape)',
                        fontSize: '0.82rem',
                        borderRadius: '8px',
                        border: '2px solid #0C0E0F',
                        boxShadow: '2px 2px 0 #000',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap'
                      }}
                      onClick={() => window.SoundEffects?.pop?.()}
                    >
                      <Instagram className="w-4 h-4" />
                      <span>WATCH REEL ↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
