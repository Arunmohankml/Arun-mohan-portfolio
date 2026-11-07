import React from 'react';
import TapeDivider from './TapeDivider';
import { Github, ExternalLink } from 'lucide-react';

import tajmahalImg from '../assets/projects/tajmahal-products.png';
import terreriumImg from '../assets/projects/terrerium-store.png';
import anonvoteImg from '../assets/projects/anonvote.png';
import civicEyeImg from '../assets/projects/civic-eye.png';
import knotspotImg from '../assets/projects/knotspot.png';
import pickmeupImg from '../assets/projects/pickmeup.png';

const PROJECTS = [
  {
    id: 'tajmahal-products',
    number: '01',
    title: 'Tajmahal Products',
    badge: 'LUXURY E-COMMERCE',
    badgeColor: '#FFE23A',
    category: 'Commercial Web Platform & Interior Decor',
    desc: 'Bespoke luxury carpet and artisanal home decor platform. Real-time product catalog with instant quote generation, dynamic pricing, and responsive showcase.',
    tags: ['React', 'Tailwind CSS', 'Vercel Edge', 'Production'],
    github: 'https://github.com/Arunmohankml/TajmahalProducts',
    live: 'https://tajmahal-products.vercel.app/',
    urlLabel: 'tajmahal-products.vercel.app',
    image: tajmahalImg,
    fallback: '/projects/tajmahal-products.png'
  },
  {
    id: 'terrerium-store',
    number: '02',
    title: 'Terrarium Store',
    badge: 'BOTANICAL STOREFRONT',
    badgeColor: '#4080FB',
    category: 'Biophilic Design & Custom Storefront',
    desc: 'Curated handcrafted biophilic ecosystems and custom moss terrarium store with dynamic catalog filtering, responsive cart engine, and natural aesthetics.',
    tags: ['React 18', 'Tailwind CSS', 'Cart Engine', 'Vercel'],
    github: 'https://github.com/Arunmohankml/Terrerium-store',
    live: 'https://terrerium-store.vercel.app/',
    urlLabel: 'terrerium-store.vercel.app',
    image: terreriumImg,
    fallback: '/projects/terrerium-store.png'
  },
  {
    id: 'anon-vote',
    number: '03',
    title: 'AnonVote Cryptographic Voting',
    badge: 'BLOCKCHAIN & ZERO-KNOWLEDGE',
    badgeColor: '#EF4225',
    category: 'Cryptographic Voting & Web3 Governance',
    desc: 'Decentralized campus elections separating voter identity from the ballot. Verify eligibility once, cast an anonymous cryptographic nullifier on the blockchain.',
    tags: ['Solidity', 'Cryptographic Nullifiers', 'Web3', 'React'],
    github: 'https://github.com/Arunmohankml/AnonVote',
    live: 'https://anon-vote-ikac.vercel.app/',
    urlLabel: 'anon-vote-ikac.vercel.app',
    image: anonvoteImg,
    fallback: '/projects/anonvote.png'
  },
  {
    id: 'civic-eye',
    number: '04',
    title: 'CivicEye Smart City',
    badge: 'MUNICIPAL DISPATCH',
    badgeColor: '#FFE23A',
    category: 'Municipal Triage & Public Infrastructure',
    desc: 'An intelligent, transparent civic-complaint platform that bridges citizens and municipal authorities. Citizens photograph and report public issues in seconds; municipalities manage, prioritize, and resolve them through a live dispatch console.',
    tags: ['FastAPI', 'Geolocation GPS', 'Dispatch Console', 'React'],
    github: 'https://github.com/Arunmohankml/CivicEye',
    live: 'https://civic-eye-blond.vercel.app/',
    urlLabel: 'civic-eye-blond.vercel.app',
    image: civicEyeImg,
    fallback: '/projects/civic-eye.png'
  },
  {
    id: 'knotspot',
    number: '05',
    title: 'KnotSpot — Campus Tribe',
    badge: 'CAMPUS SOCIAL PLATFORM',
    badgeColor: '#EF4225',
    category: 'Student Matchmaking & Roommate Finder',
    desc: 'Find your campus tribe — match, room, and connect at SRM, Amrita, and VIT student socialization platform with anonymous confession knots and real-time community chat.',
    tags: ['Full-Stack', 'Real-time Chat', 'Campus Matching', 'Socket.IO'],
    github: 'https://github.com/Arunmohankml/datingapp',
    live: 'https://knotspot.online/',
    urlLabel: 'knotspot.online',
    image: knotspotImg,
    fallback: '/projects/knotspot.png'
  },
  {
    id: 'pickmeup-v2',
    number: '06',
    title: 'PickMeUp V2',
    badge: 'LOCAL TAXI DISPATCH',
    badgeColor: '#4080FB',
    category: 'Autonomous Ride Hailing & Geolocation',
    desc: 'A taxi booking site for local places without Rapido or Uber, connecting commuters with nearby local drivers instantly with zero middleman commissions.',
    tags: ['React', 'Leaflet Maps', 'Geolocation Routing', 'Tailwind'],
    github: 'https://github.com/Arunmohankml/PickMeUpV2',
    live: 'https://pick-me-up-v2.vercel.app/',
    urlLabel: 'pick-me-up-v2.vercel.app',
    image: pickmeupImg,
    fallback: '/projects/pickmeup.png'
  }
];

export default function MatProjects() {
  const playSfx = (name) => {
    if (window.SoundEffects?.[name]) {
      window.SoundEffects[name]();
    }
  };

  return (
    <>
      {/* Tape Divider at Boundary */}
      <TapeDivider text="SELECTED PROJECTS ★ ARUN MOHAN K" tilt="tilt-right" />

      <section 
        className="section section--odoo pattern pattern--squiggle" 
        id="projects" 
        aria-labelledby="projects-title"
        style={{
          paddingTop: 'clamp(50px, 6vw, 75px)',
          paddingBottom: 'clamp(70px, 8vw, 110px)',
          position: 'relative'
        }}
      >
        <div className="section__inner pt-8 pb-10">
        
        {/* Section Head */}
        <div style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '800px', marginInline: 'auto' }}>
          <h2 
            id="projects-title"
            style={{ 
              fontFamily: 'var(--font-display), "Bangers", cursive, Impact, sans-serif',
              fontSize: 'clamp(2.8rem, 5.2vw, 4.6rem)', 
              margin: '8px 0 0 0',
              lineHeight: 1,
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              color: '#0C0E0F',
              WebkitTextStroke: '0',
              textShadow: 'none'
            }}
          >
            LIVE PROJECT PREVIEWS.
          </h2>
        </div>

        {/* 3x2 Clean Grid of Project Boxes */}
        {/* ── PROJECTS CARDS GRID (RESPONSIVE 2 CARDS IN A ROW ON MOBILE) ── */}
        <div 
          className="projects-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}
        >
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="project-card group"
              style={{
                background: 'var(--white)',
                border: '3.5px solid var(--ink)',
                borderRadius: '22px',
                boxShadow: '8px 8px 0 var(--ink)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.2, 1, 0.3, 1)',
                position: 'relative'
              }}
              onMouseEnter={() => playSfx('pop')}
            >
              {/* Top: Browser Mock Window with Screenshot Preview */}
              <div 
                className="project-mock-window relative overflow-hidden" 
                style={{
                  height: '240px',
                  borderBottom: '3.5px solid var(--ink)',
                  background: '#0C0E0F'
                }}
              >
                {/* Mock Browser Header Bar */}
                <div 
                  style={{
                    background: '#1F2024',
                    borderBottom: '2px solid #2E3038',
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: 20,
                    position: 'relative'
                  }}
                >
                  {/* Window Controls */}
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5F56', display: 'inline-block' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27C93F', display: 'inline-block' }} />
                  </div>

                  {/* Domain Pill */}
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open live site"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: '#D1D5DB',
                      background: '#111215',
                      padding: '2px 10px',
                      borderRadius: '999px',
                      border: '1px solid #374151',
                      textDecoration: 'none',
                      maxWidth: '200px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {proj.urlLabel}
                  </a>

                  {/* Right Spacer for symmetric browser balance */}
                  <div style={{ width: '34px' }} />
                </div>

                {/* Screenshot Preview Box */}
                <div 
                  style={{ 
                    height: 'calc(100% - 37px)',
                    width: '100%',
                    position: 'relative',
                    background: '#18181B',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={proj.image}
                    alt={`${proj.title} Preview`}
                    loading="eager"
                    onError={(e) => {
                      if (proj.fallback && e.currentTarget.src !== proj.fallback) {
                        e.currentTarget.src = proj.fallback;
                      }
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    className="group-hover:scale-105"
                  />
                </div>

                {/* Hover Overlay with Action Buttons */}
                <div 
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3 p-4 z-20"
                  style={{ top: '37px' }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-tape)',
                      fontSize: '0.85rem',
                      color: '#FFE23A',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '2px'
                    }}
                  >
                    EXPLORE PROJECT
                  </span>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {/* 1. GitHub Button */}
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--white"
                      style={{
                        padding: '8px 14px',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-tape)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '3px 3px 0 var(--ink)',
                        border: '2.5px solid var(--ink)'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        playSfx('pow');
                      }}
                    >
                      <Github className="w-4 h-4" />
                      <span>GITHUB</span>
                    </a>

                    {/* 2. Live Demo Button */}
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--pop"
                      style={{
                        padding: '8px 14px',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-tape)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '3px 3px 0 var(--ink)',
                        border: '2.5px solid var(--ink)'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        playSfx('pow');
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LIVE DEMO</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom: Title & Project Metadata (Below the Box) */}
              <div 
                className="project-card-body"
                style={{
                  padding: '20px 22px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  flex: 1
                }}
              >
                {/* Project Title */}
                <h3 
                  className="project-card-title"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    lineHeight: 1.15,
                    margin: 0,
                    color: 'var(--ink)',
                    textTransform: 'uppercase'
                  }}
                >
                  {proj.title}
                </h3>

                {/* Short Description */}
                <p 
                  className="project-card-desc"
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.45,
                    color: '#3F3F46',
                    margin: '2px 0 8px 0',
                    flex: 1
                  }}
                >
                  {proj.desc}
                </p>

                {/* Tech Pills */}
                <div className="project-card-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', paddingTop: '8px', borderTop: '1.5px dashed rgba(12,14,15,0.2)' }}>
                  {proj.tags.map((tag) => (
                    <span 
                      key={tag}
                      style={{
                        padding: '2px 8px',
                        background: '#F4F4F6',
                        color: 'var(--ink)',
                        border: '1px solid var(--ink)',
                        borderRadius: '6px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 700
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile direct action buttons */}
                <div className="flex sm:hidden items-center gap-1.5 pt-2 mt-auto">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1 px-1.5 text-[10px] font-bold text-center bg-white border border-[#0C0E0F] rounded shadow-[1.5px_1.5px_0px_#0C0E0F] uppercase"
                    onClick={(e) => { e.stopPropagation(); playSfx('pop'); }}
                  >
                    CODE →
                  </a>
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1 px-1.5 text-[10px] font-bold text-center bg-[#FF2A5F] text-white border border-[#0C0E0F] rounded shadow-[1.5px_1.5px_0px_#0C0E0F] uppercase"
                    onClick={(e) => { e.stopPropagation(); playSfx('pow'); }}
                  >
                    LIVE →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big High-Impact Button Below: Show All Projects from GitHub */}
        <div style={{ textAlign: 'center', marginTop: '54px' }}>
          <a
            href="https://github.com/Arunmohankml"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--pop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
              padding: '16px 36px',
              textDecoration: 'none',
              boxShadow: '6px 6px 0 var(--ink)',
              border: '3.5px solid var(--ink)',
              borderRadius: '999px',
              fontFamily: 'var(--font-tape)',
              letterSpacing: '0.04em'
            }}
            onClick={() => playSfx('pow')}
          >
            <Github className="w-6 h-6" />
            <span>SHOW ALL PROJECTS ON GITHUB →</span>
          </a>
          <p 
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--ink)',
              fontWeight: 700,
              marginTop: '12px'
            }}
          >
            ★ EXPLORE ALL REPOSITORIES AT GITHUB.COM/ARUNMOHANKML ★
          </p>
        </div>

      </div>
    </section>
    </>
  );
}
