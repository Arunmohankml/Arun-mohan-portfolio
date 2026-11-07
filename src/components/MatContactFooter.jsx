import React, { useState } from 'react';
import TapeDivider from './TapeDivider';

export default function MatContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', budget: '$1k - $3k' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.SoundEffects?.pow) {
      window.SoundEffects.pow();
    }
    setSubmitted(true);
  };

  return (
    <>
      <TapeDivider text="TRANSMIT COMMS ★ START A PROJECT ★ DIRECT TERMINAL CONTACT" tilt="tilt-left" />

      {/* Main Contact Section */}
      <section
        className="section"
        id="contact"
        style={{
          background: 'var(--yellow)',
          backgroundImage: 'radial-gradient(rgba(12, 14, 15, 0.13) 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px',
          color: 'var(--ink)',
          paddingTop: 'clamp(44px, 5.5vw, 70px)',
          paddingBottom: 'clamp(60px, 7vw, 90px)'
        }}
      >
        <div className="section-head section-head--center" style={{ marginBottom: 'clamp(24px, 3vw, 36px)' }}>
          <h2 
            style={{ 
              fontFamily: 'var(--font-display), "Bangers", cursive, Impact, sans-serif',
              color: '#0C0E0F',
              fontSize: 'clamp(2.8rem, 5.2vw, 4.4rem)',
              lineHeight: 1.05,
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              margin: '0 0 12px 0',
              textShadow: 'none',
              WebkitTextStroke: '0'
            }}
          >
            GET IN TOUCH
          </h2>
          <p 
            className="section-lead" 
            style={{ 
              color: '#1A1C1E',
              maxWidth: '620px',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.12rem)',
              lineHeight: 1.5,
              fontWeight: 500
            }}
          >
            Have a project in mind, an engineering role, or a hackathon team invite? Send a direct dispatch below.
          </p>
        </div>

        <div 
          className="contact-cards-container"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '30px',
            alignItems: 'start'
          }}
        >
          {/* Left Info Card */}
          <div 
            className="contact-card"
            style={{
              background: 'var(--white)',
              border: 'var(--line) solid var(--ink)',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '8px 8px 0 var(--ink)'
            }}
          >
            <span style={{
              display: 'inline-block',
              padding: '4px 12px',
              background: 'var(--red)',
              color: 'var(--white)',
              borderRadius: '999px',
              fontFamily: 'var(--font-tape)',
              fontSize: '0.8rem',
              marginBottom: '14px'
            }}>
              DIRECT COMMS CHANNELS
            </span>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              margin: '0 0 10px 0',
              lineHeight: 1
            }}>
              LET’S BUILD TOGETHER
            </h3>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#333' }}>
              Whether you need a high-throughput backend architecture, a reactive frontend that scores 100/100 on performance, or real-time WebRTC media pipelines — I’m available.
            </p>

            <div style={{ display: 'grid', gap: '14px', marginTop: '24px' }}>
              <a
                href="mailto:contact@arunmohan.dev"
                className="btn btn--white"
                style={{ 
                  justifyContent: 'flex-start', 
                  textDecoration: 'none', 
                  padding: '11px 18px',
                  fontFamily: "var(--font-mono), 'JetBrains Mono', Consolas, monospace",
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  letterSpacing: '0.01em',
                  textTransform: 'none'
                }}
                onClick={() => window.SoundEffects?.pop?.()}
              >
                <span style={{ fontSize: '1.05rem', marginRight: '4px' }}>📧</span>
                <span>contact@arunmohan.dev</span>
              </a>
              <a
                href="https://github.com/Arunmohankml"
                target="_blank"
                rel="noreferrer"
                className="btn btn--white"
                style={{ 
                  justifyContent: 'flex-start', 
                  textDecoration: 'none', 
                  padding: '11px 18px',
                  fontFamily: "var(--font-mono), 'JetBrains Mono', Consolas, monospace",
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  letterSpacing: '0.01em',
                  textTransform: 'none'
                }}
                onClick={() => window.SoundEffects?.pop?.()}
              >
                <span style={{ fontSize: '1.05rem', marginRight: '4px' }}>🐙</span>
                <span>github.com/Arunmohankml</span>
              </a>
              <a
                href="https://linkedin.com/in/arun-mohan"
                target="_blank"
                rel="noreferrer"
                className="btn btn--white"
                style={{ 
                  justifyContent: 'flex-start', 
                  textDecoration: 'none', 
                  padding: '11px 18px',
                  fontFamily: "var(--font-mono), 'JetBrains Mono', Consolas, monospace",
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  letterSpacing: '0.01em',
                  textTransform: 'none'
                }}
                onClick={() => window.SoundEffects?.pop?.()}
              >
                <span style={{ fontSize: '1.05rem', marginRight: '4px' }}>💼</span>
                <span>linkedin.com/in/arun-mohan</span>
              </a>
              <a
                href="https://www.instagram.com/4ruun/"
                target="_blank"
                rel="noreferrer"
                className="btn btn--white"
                style={{ 
                  justifyContent: 'flex-start', 
                  textDecoration: 'none', 
                  padding: '11px 18px',
                  fontFamily: "var(--font-mono), 'JetBrains Mono', Consolas, monospace",
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  letterSpacing: '0.01em',
                  textTransform: 'none'
                }}
                onClick={() => window.SoundEffects?.pop?.()}
              >
                <span style={{ fontSize: '1.05rem', marginRight: '4px' }}>📸</span>
                <span>instagram.com/4ruun</span>
              </a>
            </div>

            <div style={{
              marginTop: '24px',
              padding: '14px',
              background: 'var(--tape)',
              border: '2px solid var(--ink)',
              borderRadius: '12px',
              fontFamily: 'var(--font-tape)',
              fontSize: '0.85rem'
            }}>
              📍 BASED IN CHENNAI & KOCHI, INDIA · GLOBAL REMOTE READY
            </div>
          </div>

          {/* Right: Contact Form */}
          <div 
            className="contact-card"
            style={{
              background: 'var(--paper)',
              border: 'var(--line) solid var(--ink)',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '8px 8px 0 var(--ink)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '10px' }}>💥</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--ink)' }}>
                  MESSAGE TRANSMITTED!
                </h3>
                <p style={{ fontFamily: 'var(--font-tape)', fontSize: '1rem', color: 'var(--ink)' }}>
                  Thanks for reaching out! I’ll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn btn--pop"
                  style={{ marginTop: '20px' }}
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '', budget: '$1k - $3k' });
                  }}
                >
                  SEND ANOTHER DISPATCH
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-tape)', fontSize: '0.85rem', marginBottom: '6px' }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Bruce Wayne"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'var(--white)',
                      border: 'var(--line) solid var(--ink)',
                      borderRadius: '10px',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-tape)', fontSize: '0.85rem', marginBottom: '6px' }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="bruce@wayne-enterprises.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'var(--white)',
                      border: 'var(--line) solid var(--ink)',
                      borderRadius: '10px',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-tape)', fontSize: '0.85rem', marginBottom: '6px' }}>
                    PROJECT SCOPE / BUDGET
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'var(--white)',
                      border: 'var(--line) solid var(--ink)',
                      borderRadius: '10px',
                      fontFamily: 'var(--font-tape)',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="freelance">Freelance Web / Full-Stack Project</option>
                    <option value="cloud">Cloud Architecture / Distributed Systems</option>
                    <option value="modding">Lua / Game Modding / Low-level Engineering</option>
                    <option value="job">Full-Time Software Engineer Role</option>
                    <option value="collab">Creator / Content Collaboration</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-tape)', fontSize: '0.85rem', marginBottom: '6px' }}>
                    YOUR MESSAGE
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell me about what you're building, timelines, or role specs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'var(--white)',
                      border: 'var(--line) solid var(--ink)',
                      borderRadius: '10px',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--pop"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    marginTop: '6px'
                  }}
                >
                  🚀 TRANSMIT DISPATCH →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Comic Site Footer */}
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="foot-brand">
            <span className="foot-kicker">ENGINEERING & SYSTEMS ARCHITECT</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBlock: '10px 12px' }}>
              <img 
                src="/logo.png" 
                alt="Arun Mohan K" 
                style={{ 
                  width: '52px', 
                  height: '52px', 
                  objectFit: 'contain',
                  filter: 'drop-shadow(2px 2px 0 #0C0E0F)'
                }} 
              />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--tape)' }}>
                ARUN MOHAN K
              </span>
            </div>
            <p className="foot-tagline">
              From reverse-engineering GTA IV at age 15 to distributed cloud architecture at SRMIST. Building fast, rock-solid software.
            </p>
            <a href="mailto:contact@arunmohan.dev" className="foot-mail">
              <span>contact@arunmohan.dev</span>
            </a>
          </div>

          <div style={{ display: 'grid', gap: '10px' }}>
            <span className="foot-kicker">QUICK NAVIGATION</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--font-tape)' }}>
              <a href="#projects" style={{ color: 'var(--white)', textDecoration: 'none' }}>★ SELECTED PROJECTS</a>
              <a href="#journey" style={{ color: 'var(--white)', textDecoration: 'none' }}>★ 3D COMIC TIMELINE</a>
              <a href="#about" style={{ color: 'var(--white)', textDecoration: 'none' }}>★ ABOUT & ORIGIN</a>
              <a href="#creator" style={{ color: 'var(--white)', textDecoration: 'none' }}>★ CONTENT CREATOR</a>
              <a href="#hackathons" style={{ color: 'var(--white)', textDecoration: 'none' }}>★ HACKATHON ARENA</a>
              <a href="#faq" style={{ color: 'var(--white)', textDecoration: 'none' }}>★ DEBRIEF & FAQ</a>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '12px', justifyItems: 'start' }}>
            <span className="foot-kicker">SYSTEM STATUS</span>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'var(--ink)',
              color: 'var(--tape)',
              border: '2px solid var(--ink)',
              borderRadius: '999px',
              fontFamily: 'var(--font-tape)',
              fontSize: '0.8rem'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#44FF88', display: 'inline-block' }} />
              OPEN FOR WORK & CONTRACTS
            </div>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', maxWidth: '220px', lineHeight: 1.4 }}>
              © 2026 Arun Mohan K. Designed & built in Make-A-Ton comic aesthetic.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
