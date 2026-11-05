import React from 'react';

export default function MatAbout() {
  const areasOfInterest = [
    'Software Engineering',
    'Full-Stack Development',
    'Cloud Computing',
    'Real-Time Systems',
    'C++',
    'Lua'
  ];

  return (
    <section className="section section--about" id="about" aria-labelledby="about-title">
      
      {/* ── LEFT PANEL (YELLOW SQUIGGLE) ── */}
      <div className="about-panel about-panel--mat">
        <div className="about-panel__head">
          <p className="about-kicker font-mono text-xs font-bold uppercase tracking-wider text-[#0C0E0F]">
            // ORIGIN &amp; BACKGROUND
          </p>
          <h2 
            className="about-title text-[#0C0E0F] uppercase"
            style={{
              fontFamily: 'var(--font-display), "Bangers", cursive, Impact, sans-serif',
              fontSize: 'clamp(2.5rem, 4.2vw, 3.8rem)',
              lineHeight: 1,
              letterSpacing: '0.03em',
              margin: '6px 0 16px 0'
            }}
          >
            ABOUT <br />ARUN MOHAN K.
          </h2>
        </div>

        <div 
          className="about-panel__body space-y-4 font-sans text-sm sm:text-base text-[#0C0E0F] font-medium leading-relaxed"
          style={{ paddingBottom: 'clamp(90px, 11vw, 150px)' }}
        >
          <p>
            I&apos;m <strong>Arun Mohan K</strong>, a Computer Science student at <strong>SRMIST</strong>, specialising in <strong>Cloud Computing</strong>, with an interest in software engineering and building things for the web.
          </p>
          <p>
            My interest in technology started at an early age, exploring how games, applications and online systems work behind the scenes. What began as curiosity gradually developed into hands-on experience with programming, game multiplayer environments, web technologies and software development.
          </p>
          <p>
            Since then, I&apos;ve worked across different areas of development, building projects, experimenting with new technologies and learning through practical experience. I enjoy understanding how things work, solving problems and turning ideas into functional products.
          </p>
          <div className="pt-2">
            <span className="inline-block px-3 py-1 bg-[#0C0E0F] text-[#FFE23A] font-mono text-xs font-bold rounded-full uppercase">
              ★ TINKERING WITH TECHNOLOGY SINCE AGE 15
            </span>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL (CREAM PAPER) ── */}
      <div className="about-panel about-panel--cittic">
        <div className="about-panel__head">
          <p className="about-kicker font-mono text-xs font-bold uppercase tracking-wider text-zinc-700">
            // PHILOSOPHY &amp; SYSTEMS
          </p>
          <h2 
            className="about-title text-[#0C0E0F] uppercase"
            style={{
              fontFamily: 'var(--font-display), "Bangers", cursive, Impact, sans-serif',
              fontSize: 'clamp(2.5rem, 4.2vw, 3.8rem)',
              lineHeight: 1,
              letterSpacing: '0.03em',
              margin: '6px 0 16px 0'
            }}
          >
            HOW I BUILD <br />THINGS.
          </h2>
        </div>

        <div 
          className="about-panel__body space-y-4 font-sans text-sm sm:text-base text-[#0C0E0F] font-medium leading-relaxed"
          style={{ paddingBottom: 'clamp(90px, 11vw, 150px)' }}
        >
          <p>
            I approach development with a focus on functionality, performance and maintainability. I enjoy working across different parts of a project, from building user interfaces to handling backend logic and exploring how systems work together.
          </p>
          <p>
            My experience includes developing web applications, working with real-time communication technologies and exploring programming languages and tools beyond the usual frontend stack.
          </p>
          <p>
            As part of the technical team at <strong>DSC</strong>, I also get to collaborate with other developers, contribute to team projects and take part in hackathons. These experiences have helped me become more comfortable working with new ideas, solving problems and building under time constraints.
          </p>
          
          <div className="pt-3">
            <div className="font-tape text-xs uppercase tracking-wider text-zinc-700 mb-2 font-bold">
              // AREAS OF INTEREST
            </div>
            <div className="flex flex-wrap gap-2">
              {areasOfInterest.map((interest, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 bg-[#F2E3D0] border border-[#0C0E0F] text-[#0C0E0F] font-mono text-xs font-bold rounded-lg uppercase shadow-[2px_2px_0px_#0C0E0F]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
