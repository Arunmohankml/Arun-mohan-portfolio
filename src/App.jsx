import React, { useState, useEffect } from 'react';
import MatNavbar from './components/MatNavbar';
import MatHero from './components/MatHero';
import MatAbout from './components/MatAbout';
import MatProjects from './components/MatProjects';
import MatComicBook from './components/MatComicBook';
import MatCreator from './components/MatCreator';
import MatHackathons from './components/MatHackathons';
import MatFAQ from './components/MatFAQ';
import MatContactFooter from './components/MatContactFooter';
import CreatorJourneyPage from './components/CreatorJourneyPage';
import ContactPage from './components/ContactPage';

export default function App() {
  // Page mode: 'all' (unified Make-A-Ton comic site) | 'creator' (standalone creator page) | 'contact' (standalone contact page)
  const [viewMode, setViewMode] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#/creator' || hash === '#creator-page') return 'creator';
    if (hash === '#/contact' || hash === '#contact-page') return 'contact';
    return 'all';
  });

  // Expose audio alias so all components trigger Web Audio reliably
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.SoundEffects = {
        pop: () => window.MakeatonSound?.play?.('pop'),
        pow: () => window.MakeatonSound?.play?.('pow'),
        pageFlip: () => window.MakeatonSound?.play?.('pageFlip'),
        whoosh: () => window.MakeatonSound?.play?.('whoosh'),
        chime: () => window.MakeatonSound?.play?.('chime'),
        boing: () => window.MakeatonSound?.play?.('boing'),
        zip: () => window.MakeatonSound?.play?.('zip'),
      };
    }

    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/creator' || hash === '#creator-page') {
        setViewMode('creator');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/contact' || hash === '#contact-page') {
        setViewMode('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/' || hash === '' || hash.startsWith('#top')) {
        setViewMode('all');
      }
    };

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (mode) => {
    setViewMode(mode);
    if (mode === 'creator') window.location.hash = '#/creator';
    else if (mode === 'contact') window.location.hash = '#/contact';
    else {
      window.location.hash = '#/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-[#0C0E0F] relative selection:bg-[#EF4225] selection:text-white" style={{ background: 'var(--yellow)' }}>
      {/* Sticky Comic Slide-in Navbar */}
      <MatNavbar onNavigateDedicated={navigateTo} />

      {/* Main Comic Flow */}
      {viewMode === 'all' && (
        <main id="top">
          {/* 1. Make-A-Ton Hero */}
          <MatHero />

          {/* 2. Split About Section (Yellow Squiggle + Cream Paper) */}
          <MatAbout />

          {/* 3. Selected Projects with Live Working Simulators */}
          <MatProjects />

          {/* 4. 3D Scroll-Driven Page-Flip Comic Book Timeline */}
          <MatComicBook />

          {/* 5. Content Creator & Instagram Chapter */}
          <MatCreator />

          {/* 6. Hackathon Arena with 3D Sunburst Podium */}
          <MatHackathons />

          {/* 7. Frequently Asked Questions (Comic Asterisks Accordion) */}
          <MatFAQ />

          {/* 8. Contact Dispatch Terminal & Footer */}
          <MatContactFooter />
        </main>
      )}

      {/* Standalone Dedicated Creator Page View */}
      {viewMode === 'creator' && (
        <div style={{ background: '#FAFAFC', minHeight: '100vh', paddingTop: '80px', paddingBottom: '60px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              padding: '12px 20px',
              background: 'var(--yellow)',
              border: '3px solid var(--ink)',
              borderRadius: '16px',
              boxShadow: '4px 4px 0 var(--ink)'
            }}>
              <span style={{ fontFamily: 'var(--font-tape)', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                📖 DEDICATED VIEW: CONTENT CREATOR JOURNEY
              </span>
              <button
                type="button"
                className="btn btn--pop"
                onClick={() => navigateTo('all')}
                style={{ fontSize: '0.8rem', padding: '6px 14px' }}
              >
                ← BACK TO FULL COMIC SITE
              </button>
            </div>
            <CreatorJourneyPage onNavigateToContact={() => navigateTo('contact')} />
          </div>
        </div>
      )}

      {/* Standalone Dedicated Contact Page View */}
      {viewMode === 'contact' && (
        <div style={{ background: '#FAFAFC', minHeight: '100vh', paddingTop: '80px', paddingBottom: '60px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              padding: '12px 20px',
              background: 'var(--yellow)',
              border: '3px solid var(--ink)',
              borderRadius: '16px',
              boxShadow: '4px 4px 0 var(--ink)'
            }}>
              <span style={{ fontFamily: 'var(--font-tape)', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                ✉️ DEDICATED VIEW: DIRECT CONTACT TERMINAL
              </span>
              <button
                type="button"
                className="btn btn--pop"
                onClick={() => navigateTo('all')}
                style={{ fontSize: '0.8rem', padding: '6px 14px' }}
              >
                ← BACK TO FULL COMIC SITE
              </button>
            </div>
            <ContactPage />
          </div>
        </div>
      )}
    </div>
  );
}
