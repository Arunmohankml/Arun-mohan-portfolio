import React, { useEffect, useRef } from 'react';
import TapeDivider from './TapeDivider';

const CHAPTERS = [
  {
    num: '01',
    short: '2019 - 2021',
    title: 'The Beginning',
    activity: 'FROM CURIOSITY TO CODE',
    panel: '/mat9/panel-1-new.jpg',
    badge: 'ORIGIN',
    dialogue: 'From curiosity to code: experimenting with programming, building small projects, and exploring software.',
    highlight: 'From curiosity to code',
    date: 'Malappuram, Kerala',
    focus: 'Web development, programming fundamentals and building practical applications.',
    tech: 'JavaScript, Python, Lua, HTML, CSS',
    lead: 'Exploring Software Development',
    blurb: 'My interest in technology grew through experimenting with programming, exploring how software works and building small projects. Over time, I developed an interest in web development, backend systems and creating useful digital products.',
    highlights: ['WEB DEVELOPMENT', 'PYTHON', 'JAVASCRIPT', 'LUA', 'PROBLEM SOLVING'],
    location: 'Malappuram, Kerala'
  },
  {
    num: '02',
    short: '2021 – 2023',
    title: 'The Early Build Years',
    activity: 'FREELANCING, DEVELOPMENT & CREATIVE WORK',
    panel: '/mat9/panel-2-new.jpg',
    badge: 'SCHOOL',
    dialogue: 'School years: Balancing high school while shipping freelance client projects and creative media!',
    highlight: 'freelance client projects',
    date: '2021–2023 · Malappuram, Kerala, India',
    focus: 'Freelance Client Work, Web Development & Digital Media',
    lead: 'Freelance Client Work & Creative Media',
    blurb: 'Started taking on client projects and exploring software development through hands-on work with custom server scripting and web development. This period marked my introduction to building real-world software while shipping freelance client projects. Alongside development, I also explored video editing and photo editing, gaining experience in creating digital content and working with different creative tools.',
    highlights: ['CLIENT PROJECTS', 'GAME SCRIPTING', 'WEB DEVELOPMENT', 'FREELANCING', 'VIDEO EDITING', 'PHOTO EDITING']
  },
  {
    num: '03',
    short: '2023 – 2024',
    title: 'The Backend Era',
    activity: 'PYTHON, DJANGO & WEB APPLICATIONS',
    panel: '/mat9/panel-3-new.jpg',
    badge: 'BACKEND',
    dialogue: 'Building scalable backend systems: server-side logic, QR menu platforms, and database architecture!',
    highlight: 'backend systems',
    date: '2023–2024',
    work: 'Freelance Web Development & Client Projects',
    lead: 'Python, Django & Web Applications',
    blurb: 'Expanded my development skills by exploring Python, Django and backend development. Worked on websites for clients, including QR-based digital menu platforms for cafes and restaurants. Started building more structured web applications, understanding server-side logic, database integration and backend architecture. Also began exploring Data Structures and Algorithms through LeetCode, developing a stronger foundation in programming and problem-solving.',
    highlights: ['PYTHON', 'DJANGO', 'BACKEND DEV', 'QR MENU SYSTEMS', 'DATABASES', 'LEETCODE']
  },
  {
    num: '04',
    short: '2024 – 2026',
    title: 'The Developer Evolution',
    activity: 'COMPUTER SCIENCE, MODERN WEB & AI',
    panel: '/mat9/panel-4-new.jpg',
    badge: 'COLLEGE',
    dialogue: 'Strengthening core CS at SRMIST, shipping client platforms, and mastering AI workflows!',
    highlight: 'core CS at SRMIST',
    date: '2024–2026',
    education: 'B.Tech CSE · SRMIST, Chennai · Joined 2025',
    focus: 'Software Engineering, Full-Stack & AI-Assisted Development',
    lead: 'Computer Science, Modern Web & AI',
    blurb: 'Expanded my technical foundation through computer science studies, strengthening my understanding of C, C++ and core programming concepts. Continued working on freelance projects and building websites for clients, including Foreign Language Academy, Tajmahal Products and Aquaterra Store. Explored modern web technologies such as React, Next.js, TypeScript and Tailwind CSS, while experimenting with projects like PeerWave. Also developed an interest in AI-assisted development, learning to use AI tools effectively through structured prompting, workflow integration and practical experimentation.',
    highlights: ['C & C++', 'REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'AI PROMPTING', 'FREELANCE DEV', 'PEERWAVE']
  },
  {
    num: '05',
    short: '2026 – PRESENT',
    status: 'CURRENTLY ONGOING',
    title: 'The Next Chapter',
    activity: 'HACKATHONS, COMMUNITY & NEW OPPORTUNITIES',
    panel: '/mat9/panel-6-new.jpg',
    badge: 'ONGOING',
    dialogue: 'Hackathons, college technical communities at Spectrum & SOCMUN, and shipping projects under pressure!',
    highlight: 'Spectrum & SOCMUN',
    date: '2026 – Present',
    currently: 'Freelancing, Hackathons & Internship Preparation',
    focus: 'Technical Growth, Collaboration & Professional Dev',
    lead: 'Hackathons, Community & New Opportunities',
    blurb: 'Currently continuing freelance development while actively exploring internship opportunities and preparing for industry roles. Participated in 4–5 hackathons across cities including Hyderabad, Chennai and Dehradun, gaining experience in collaborative problem-solving, rapid prototyping and building under time constraints. Actively involved in college communities through the technical teams of Spectrum and SOCMUN, contributing to club activities and collaborative initiatives. Constantly experimenting with new technologies, exploring ideas and expanding my technical skills through hands-on learning and personal projects.',
    highlights: ['HACKATHONS', 'FREELANCING', 'SPECTRUM', 'SOCMUN', 'TEAM COLLAB', 'INTERNSHIP PREP', 'CONTINUOUS LEARNING']
  }
];

export default function MatComicBook() {
  const scrollerRef = useRef(null);
  const sectionRef = useRef(null);
  const flippedStates = useRef(new Array(10).fill(false));

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const leaves = scroller.querySelectorAll('.leaf');
    const n = leaves.length;
    scroller.style.setProperty('--leaves', n);

    const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
    // Smooth natural paper ease (cubic easeInOut)
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    let targetProgress = 0;
    let currentProgress = 0;
    let rafId = null;

    const applyProgress = (prog) => {
      leaves.forEach((leaf, i) => {
        // Active turn window: 70% of each leaf slot, with 15% resting zone at both ends
        const rawT = clamp((prog - i - 0.15) / 0.70, 0, 1);
        const t = ease(rawT);

        leaf.style.setProperty('--t', t.toFixed(4));
        leaf.style.transform = `rotateY(${-180 * t}deg)`;
        leaf.style.zIndex = t === 0 ? n - i : t === 1 ? i + 1 : n + 2;

        // Sound trigger on crossing 50%
        if (rawT >= 0.5 && !flippedStates.current[i]) {
          flippedStates.current[i] = true;
          if (window.SoundEffects?.pageFlip) window.SoundEffects.pageFlip();
        } else if (rawT < 0.5 && flippedStates.current[i]) {
          flippedStates.current[i] = false;
          if (window.SoundEffects?.pageFlip) window.SoundEffects.pageFlip();
        }
      });
    };

    const tick = () => {
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0003) {
        currentProgress += diff * 0.095; // Cushioned, buttery smooth momentum
        applyProgress(currentProgress);
        rafId = requestAnimationFrame(tick);
      } else {
        currentProgress = targetProgress;
        applyProgress(currentProgress);
        rafId = null;
      }
    };

    const onScroll = () => {
      const rect = scroller.getBoundingClientRect();
      const totalScroll = scroller.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const scrolledPastTop = -rect.top;
      targetProgress = clamp(scrolledPastTop / totalScroll, 0, 1) * n;

      if (!rafId) {
        rafId = requestAnimationFrame(tick);
      }
    };

    // Initialize position immediately without animating from 0
    const rect = scroller.getBoundingClientRect();
    const totalScroll = scroller.offsetHeight - window.innerHeight;
    if (totalScroll > 0) {
      const initProgress = clamp(-rect.top / totalScroll, 0, 1) * n;
      targetProgress = initProgress;
      currentProgress = initProgress;
      applyProgress(currentProgress);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <TapeDivider text="THE COMIC TIMELINE ★ SCROLL TO FLIP PAGES ★ 5 CHAPTERS OF CODE & CHAOS" tilt="tilt-left" />

      {/* Main Comic Book Section - Must have overflow: visible so position: sticky works */}
      <section
        ref={sectionRef}
        className="section section--timeline is-book pattern pattern--squiggle"
        id="timeline"
        data-timeline
        style={{
          position: 'relative',
          overflow: 'visible',
          paddingTop: 0,
          paddingBottom: 0
        }}
      >
        {/* Fallback Static Chapter Cards (for screen readers and non-JS) */}
        <ol className="timeline-list">
          {CHAPTERS.map((c) => (
            <li
              key={c.num}
              data-short={c.short}
              data-title={c.title}
              data-panel={c.panel}
              data-badge={c.badge}
              data-dialogue={c.dialogue}
              data-highlight={c.highlight}
            >
              <time>{c.short}</time>
              <h3>{c.activity}</h3>
              <p className="timeline-list__lead"><b>{c.lead}</b></p>
              <p>{c.blurb}</p>
            </li>
          ))}
        </ol>

        {/* Scroll-Driven 3D Book Stage - Sticky Pinned Container */}
        <div 
          className="book-scroller" 
          ref={scrollerRef} 
          data-book-scroller
          style={{ minHeight: 'calc(100vh + 560vh)', position: 'relative' }}
        >
          <div 
            className="book-stage" 
            style={{ 
              position: 'sticky', 
              top: 0, 
              height: '100vh',
              display: 'grid',
              placeItems: 'center',
              alignContent: 'center',
              paddingTop: 'clamp(56px, 7.5vh, 80px)',
              paddingBottom: 'clamp(16px, 2.5vh, 32px)',
              gap: 'clamp(20px, 3vh, 32px)'
            }}
          >
            {/* Header sitting above the book inside the sticky stage */}
            <div className="section-head section-head--center" style={{ margin: 0, padding: 0 }}>
              <h2 
                style={{ 
                  fontFamily: 'var(--font-display), "Bangers", cursive, Impact, sans-serif',
                  fontSize: 'clamp(2.4rem, 3.8vw, 3.4rem)', 
                  margin: 0, 
                  lineHeight: 1,
                  color: '#FFFFFF',
                  WebkitTextStroke: '2.5px #0C0E0F',
                  paintOrder: 'stroke fill',
                  textShadow: '4px 4px 0px #0C0E0F',
                  letterSpacing: '0.04em'
                }}
              >
                THE TIMELINE
              </h2>
            </div>

            <div className="book" aria-hidden="true">
              {/* PAGE BASE LEFT: TABLE OF CONTENTS */}
              <div className="page page--left page--base page--contents">
                <p className="page__kicker">ARUN MOHAN K</p>
                <h3 className="page__title">CONTENTS</h3>
                <ol className="page__toc">
                  {CHAPTERS.map((c) => (
                    <li key={c.num}>
                      <span>{c.num}</span>
                      <span>{c.title}</span>
                      <span>{c.short}</span>
                    </li>
                  ))}
                </ol>
                <div className="page__foot" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '6px' }}>
                  <span style={{ fontSize: '0.72rem', opacity: 0.85, fontFamily: 'var(--font-tape)' }}>
                    ★ SCROLL DOWN TO TURN PAGES ★
                  </span>
                  <p className="page__folio" style={{ margin: 0, opacity: 0.7 }}>01</p>
                </div>
              </div>

              {/* PAGE BASE RIGHT: BACK COVER */}
              <div className="page page--right page--base page--backcover">
                <div className="hero-badge" style={{ transform: 'scale(1.1)' }}>AM</div>
                <p className="page__cover-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', margin: '8px 0' }}>THE ADVENTURE<br/>CONTINUES</p>
                <p className="page__cover-sub" style={{ fontSize: '0.85rem', margin: '4px 0' }}>READY FOR THE NEXT SPRINT</p>
                <p className="page__tag" style={{ fontSize: '0.75rem', padding: '0.3em 0.8em' }}>CLOUD · FULL-STACK · REAL-TIME</p>
                <p className="page__folio" style={{ marginTop: 'auto', opacity: 0.7 }}>14</p>
              </div>

              {/* LEAF 0: FRONT COVER & ART CHAPTER 1 */}
              <div className="leaf" style={{ '--t': 0, zIndex: 6 }}>
                {/* Front of Leaf 0: Front Cover */}
                <div className="page page--right page--cover">
                  <p className="page__tag">ORIGIN STORYBOOK</p>
                  <p className="page__cover-title">THE<br/>CODING<br/>CHRONICLES</p>
                  <p className="page__cover-sub">ARUN MOHAN K’S ODYSSEY</p>
                  <div style={{
                    marginTop: '15px',
                    padding: '8px 16px',
                    background: 'var(--ink)',
                    color: 'var(--tape)',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-tape)',
                    fontSize: '0.85rem'
                  }}>
                    A STORY IN 5 CHAPTERS ↓
                  </div>
                </div>

                {/* Back of Leaf 0: Facing Art for Chapter 1 */}
                <div className="page page--left page--art face--back">
                  <div className="page__head">
                    <p className="page__kicker">Chapter {CHAPTERS[0].num}</p>
                    <p className="page__badge">{CHAPTERS[0].badge}</p>
                  </div>
                  <div className="page__panel-wrap">
                    <div className="page__panel-frame">
                      <img
                        className="page__panel-img"
                        src={CHAPTERS[0].panel}
                        alt={CHAPTERS[0].title}
                        loading="lazy"
                      />
                    </div>
                    <div className="page__bubble">
                      <p>
                        {CHAPTERS[0].dialogue.split(CHAPTERS[0].highlight)[0]}
                        <strong className="page__bubble-highlight">{CHAPTERS[0].highlight}</strong>
                        {CHAPTERS[0].dialogue.split(CHAPTERS[0].highlight)[1]}
                      </p>
                    </div>
                  </div>
                  <div className="page__foot">
                    <p className="page__folio">02</p>
                  </div>
                </div>
              </div>

              {/* LEAF 1: CHAPTER 1 DETAILS & ART CHAPTER 2 */}
              <div className="leaf" style={{ '--t': 0, zIndex: 5 }}>
                {/* Front of Leaf 1: Chapter 1 Detail */}
                <div className="page page--right page--chapter">
                  <div className="page__head">
                    <p className="page__kicker">Chapter {CHAPTERS[0].num}</p>
                    <p className="page__date-pill">{CHAPTERS[0].short}</p>
                  </div>
                  <h3 className="page__title">{CHAPTERS[0].title}</h3>
                  <p className="page__activity">
                    {CHAPTERS[0].activity}
                  </p>
                  <dl className="page__meta">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px', paddingBottom: '3px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <dt style={{ fontFamily: 'var(--font-tape)', fontSize: '0.68em' }}>FOCUS</dt>
                        <span style={{ fontSize: '0.65em', fontFamily: 'var(--font-mono)', color: '#444', fontWeight: 700 }}>📍 Malappuram, Kerala</span>
                      </div>
                      <dd style={{ margin: 0, textAlign: 'left', fontSize: '0.72em', lineHeight: 1.25, fontWeight: 600 }}>
                        {CHAPTERS[0].focus}
                      </dd>
                    </div>
                    <div style={{ paddingBottom: '2px' }}>
                      <dt style={{ fontFamily: 'var(--font-tape)', fontSize: '0.68em' }}>TECHNOLOGIES</dt>
                      <dd style={{ margin: 0, textAlign: 'right', fontSize: '0.72em', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        {CHAPTERS[0].tech}
                      </dd>
                    </div>
                  </dl>
                  <p className="page__blurb" style={{ fontSize: 'clamp(0.68rem, 0.85vw, 0.76rem)', lineHeight: 1.35, margin: '2px 0' }}>
                    {CHAPTERS[0].blurb}
                  </p>
                  <div className="page__foot" style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%', gap: '6px', paddingTop: '2px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', flex: 1 }}>
                      {CHAPTERS[0].highlights.map((h) => (
                        <span key={h} className="page__badge" style={{ fontSize: '0.54rem', padding: '1px 5px', rotate: '0deg' }}>★ {h}</span>
                      ))}
                    </div>
                    <p className="page__folio" style={{ margin: 0, flexShrink: 0, opacity: 0.7 }}>03</p>
                  </div>
                </div>

                {/* Back of Leaf 1: Art Chapter 2 */}
                <div className="page page--left page--art face--back">
                  <div className="page__head">
                    <p className="page__kicker">Chapter {CHAPTERS[1].num}</p>
                    <p className="page__badge">{CHAPTERS[1].badge}</p>
                  </div>
                  <div className="page__panel-wrap">
                    <div className="page__panel-frame">
                      <img
                        className="page__panel-img"
                        src={CHAPTERS[1].panel}
                        alt={CHAPTERS[1].title}
                        loading="lazy"
                      />
                    </div>
                    <div className="page__bubble">
                      <p>
                        {CHAPTERS[1].dialogue.split(CHAPTERS[1].highlight)[0]}
                        <strong className="page__bubble-highlight">{CHAPTERS[1].highlight}</strong>
                        {CHAPTERS[1].dialogue.split(CHAPTERS[1].highlight)[1]}
                      </p>
                    </div>
                  </div>
                  <div className="page__foot">
                    <p className="page__folio">04</p>
                  </div>
                </div>
              </div>

              {/* LEAF 2: CHAPTER 2 DETAILS & ART CHAPTER 3 */}
              <div className="leaf" style={{ '--t': 0, zIndex: 4 }}>
                {/* Front of Leaf 2: Chapter 2 Detail */}
                <div className="page page--right page--chapter">
                  <div className="page__head">
                    <p className="page__kicker">Chapter {CHAPTERS[1].num}</p>
                    <p className="page__date-pill">{CHAPTERS[1].short}</p>
                  </div>
                  <h3 className="page__title">{CHAPTERS[1].title}</h3>
                  <p className="page__activity">
                    {CHAPTERS[1].activity}
                  </p>
                  <dl className="page__meta">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px', paddingBottom: '3px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <dt style={{ fontFamily: 'var(--font-tape)', fontSize: '0.68em' }}>FOCUS</dt>
                        <span style={{ fontSize: '0.65em', fontFamily: 'var(--font-mono)', color: '#444', fontWeight: 700 }}>📍 Malappuram, Kerala</span>
                      </div>
                      <dd style={{ margin: 0, textAlign: 'left', fontSize: '0.72em', lineHeight: 1.25, fontWeight: 600 }}>
                        {CHAPTERS[1].focus}
                      </dd>
                    </div>
                    <div style={{ paddingBottom: '2px' }}>
                      <dt style={{ fontFamily: 'var(--font-tape)', fontSize: '0.68em' }}>LOCATION &amp; ERA</dt>
                      <dd style={{ margin: 0, textAlign: 'right', fontSize: '0.70em', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        {CHAPTERS[1].date}
                      </dd>
                    </div>
                  </dl>
                  <p className="page__blurb" style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.73rem)', lineHeight: 1.34, margin: '2px 0' }}>
                    {CHAPTERS[1].blurb}
                  </p>
                  <div className="page__foot" style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%', gap: '6px', paddingTop: '2px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', flex: 1 }}>
                      {CHAPTERS[1].highlights.map((h) => (
                        <span key={h} className="page__badge" style={{ fontSize: '0.52rem', padding: '1px 5px', rotate: '0deg' }}>★ {h}</span>
                      ))}
                    </div>
                    <p className="page__folio" style={{ margin: 0, flexShrink: 0, opacity: 0.7 }}>05</p>
                  </div>
                </div>

                {/* Back of Leaf 2: Art Chapter 3 */}
                <div className="page page--left page--art face--back">
                  <div className="page__head">
                    <p className="page__kicker">Chapter {CHAPTERS[2].num}</p>
                    <p className="page__badge">{CHAPTERS[2].badge}</p>
                  </div>
                  <div className="page__panel-wrap">
                    <div className="page__panel-frame">
                      <img
                        className="page__panel-img"
                        src={CHAPTERS[2].panel}
                        alt={CHAPTERS[2].title}
                        loading="lazy"
                      />
                    </div>
                    <div className="page__bubble">
                      <p>
                        {CHAPTERS[2].dialogue.split(CHAPTERS[2].highlight)[0]}
                        <strong className="page__bubble-highlight">{CHAPTERS[2].highlight}</strong>
                        {CHAPTERS[2].dialogue.split(CHAPTERS[2].highlight)[1]}
                      </p>
                    </div>
                  </div>
                  <div className="page__foot">
                    <p className="page__folio">06</p>
                  </div>
                </div>
              </div>

              {/* LEAF 3: CHAPTER 3 DETAILS & ART CHAPTER 4 */}
              <div className="leaf" style={{ '--t': 0, zIndex: 3 }}>
                {/* Front of Leaf 3: Chapter 3 Detail */}
                <div className="page page--right page--chapter">
                  <div className="page__head">
                    <p className="page__kicker">Chapter {CHAPTERS[2].num}</p>
                    <p className="page__date-pill">{CHAPTERS[2].short}</p>
                  </div>
                  <h3 className="page__title">{CHAPTERS[2].title}</h3>
                  <p className="page__activity">
                    {CHAPTERS[2].activity}
                  </p>
                  <dl className="page__meta">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px', paddingBottom: '3px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <dt style={{ fontFamily: 'var(--font-tape)', fontSize: '0.68em' }}>WORK</dt>
                        <span style={{ fontSize: '0.65em', fontFamily: 'var(--font-mono)', color: '#444', fontWeight: 700 }}>2023–2024</span>
                      </div>
                      <dd style={{ margin: 0, textAlign: 'left', fontSize: '0.72em', lineHeight: 1.25, fontWeight: 600 }}>
                        {CHAPTERS[2].work}
                      </dd>
                    </div>
                    <div style={{ paddingBottom: '2px' }}>
                      <dt style={{ fontFamily: 'var(--font-tape)', fontSize: '0.68em' }}>CORE FOCUS</dt>
                      <dd style={{ margin: 0, textAlign: 'right', fontSize: '0.70em', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        Python, Django, Databases &amp; LeetCode
                      </dd>
                    </div>
                  </dl>
                  <p className="page__blurb" style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.73rem)', lineHeight: 1.34, margin: '2px 0' }}>
                    {CHAPTERS[2].blurb}
                  </p>
                  <div className="page__foot" style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%', gap: '6px', paddingTop: '2px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', flex: 1 }}>
                      {CHAPTERS[2].highlights.map((h) => (
                        <span key={h} className="page__badge" style={{ fontSize: '0.52rem', padding: '1px 5px', rotate: '0deg' }}>★ {h}</span>
                      ))}
                    </div>
                    <p className="page__folio" style={{ margin: 0, flexShrink: 0, opacity: 0.7 }}>07</p>
                  </div>
                </div>

                {/* Back of Leaf 3: Art Chapter 4 */}
                <div className="page page--left page--art face--back">
                  <div className="page__head">
                    <p className="page__kicker">Chapter {CHAPTERS[3].num}</p>
                    <p className="page__badge">{CHAPTERS[3].badge}</p>
                  </div>
                  <div className="page__panel-wrap">
                    <div className="page__panel-frame">
                      <img
                        className="page__panel-img"
                        src={CHAPTERS[3].panel}
                        alt={CHAPTERS[3].title}
                        loading="lazy"
                      />
                    </div>
                    <div className="page__bubble">
                      <p>
                        {CHAPTERS[3].dialogue.split(CHAPTERS[3].highlight)[0]}
                        <strong className="page__bubble-highlight">{CHAPTERS[3].highlight}</strong>
                        {CHAPTERS[3].dialogue.split(CHAPTERS[3].highlight)[1]}
                      </p>
                    </div>
                  </div>
                  <div className="page__foot">
                    <p className="page__folio">08</p>
                  </div>
                </div>
              </div>

              {/* LEAF 4: CHAPTER 4 DETAILS & ART CHAPTER 5 */}
              <div className="leaf" style={{ '--t': 0, zIndex: 2 }}>
                {/* Front of Leaf 4: Chapter 4 Detail */}
                <div className="page page--right page--chapter">
                  <div className="page__head">
                    <p className="page__kicker">Chapter {CHAPTERS[3].num}</p>
                    <p className="page__date-pill">{CHAPTERS[3].short}</p>
                  </div>
                  <h3 className="page__title">{CHAPTERS[3].title}</h3>
                  <p className="page__activity">
                    {CHAPTERS[3].activity}
                  </p>
                  <dl className="page__meta">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px', paddingBottom: '3px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <dt style={{ fontFamily: 'var(--font-tape)', fontSize: '0.68em' }}>EDUCATION</dt>
                        <span style={{ fontSize: '0.65em', fontFamily: 'var(--font-mono)', color: '#444', fontWeight: 700 }}>Joined 2025</span>
                      </div>
                      <dd style={{ margin: 0, textAlign: 'left', fontSize: '0.72em', lineHeight: 1.25, fontWeight: 600 }}>
                        {CHAPTERS[3].education}
                      </dd>
                    </div>
                    <div style={{ paddingBottom: '2px' }}>
                      <dt style={{ fontFamily: 'var(--font-tape)', fontSize: '0.68em' }}>FOCUS</dt>
                      <dd style={{ margin: 0, textAlign: 'right', fontSize: '0.70em', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        {CHAPTERS[3].focus}
                      </dd>
                    </div>
                  </dl>
                  <p className="page__blurb" style={{ fontSize: 'clamp(0.63rem, 0.77vw, 0.71rem)', lineHeight: 1.30, margin: '2px 0' }}>
                    {CHAPTERS[3].blurb}
                  </p>
                  <div className="page__foot" style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%', gap: '6px', paddingTop: '2px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', flex: 1 }}>
                      {CHAPTERS[3].highlights.map((h) => (
                        <span key={h} className="page__badge" style={{ fontSize: '0.49rem', padding: '1px 5px', rotate: '0deg' }}>★ {h}</span>
                      ))}
                    </div>
                    <p className="page__folio" style={{ margin: 0, flexShrink: 0, opacity: 0.7 }}>09</p>
                  </div>
                </div>

                {/* Back of Leaf 4: Art Chapter 5 */}
                <div className="page page--left page--art face--back">
                  <div className="page__head">
                    <p className="page__kicker">Chapter {CHAPTERS[4].num}</p>
                    <p className="page__badge">{CHAPTERS[4].badge}</p>
                  </div>
                  <div className="page__panel-wrap">
                    <div className="page__panel-frame">
                      <img
                        className="page__panel-img"
                        src={CHAPTERS[4].panel}
                        alt={CHAPTERS[4].title}
                        loading="lazy"
                      />
                    </div>
                    <div className="page__bubble">
                      <p>
                        {CHAPTERS[4].dialogue.split(CHAPTERS[4].highlight)[0]}
                        <strong className="page__bubble-highlight">{CHAPTERS[4].highlight}</strong>
                        {CHAPTERS[4].dialogue.split(CHAPTERS[4].highlight)[1]}
                      </p>
                    </div>
                  </div>
                  <div className="page__foot">
                    <p className="page__folio">10</p>
                  </div>
                </div>
              </div>

              {/* LEAF 5: CHAPTER 5 DETAILS & THE END SPREAD */}
              <div className="leaf" style={{ '--t': 0, zIndex: 1 }}>
                {/* Front of Leaf 5: Chapter 5 Detail */}
                <div className="page page--right page--chapter">
                  <div className="page__head">
                    <p className="page__kicker">Chapter {CHAPTERS[4].num}</p>
                    <p className="page__date-pill" style={{ background: '#27C93F', color: '#0C0E0F', fontWeight: 800 }}>
                      ● {CHAPTERS[4].status}
                    </p>
                  </div>
                  <h3 className="page__title">{CHAPTERS[4].title}</h3>
                  <p className="page__activity">
                    {CHAPTERS[4].activity}
                  </p>
                  <dl className="page__meta">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px', paddingBottom: '3px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <dt style={{ fontFamily: 'var(--font-tape)', fontSize: '0.68em' }}>CURRENTLY</dt>
                        <span style={{ fontSize: '0.65em', fontFamily: 'var(--font-mono)', color: '#444', fontWeight: 700 }}>2026 – PRESENT</span>
                      </div>
                      <dd style={{ margin: 0, textAlign: 'left', fontSize: '0.72em', lineHeight: 1.25, fontWeight: 600 }}>
                        {CHAPTERS[4].currently}
                      </dd>
                    </div>
                    <div style={{ paddingBottom: '2px' }}>
                      <dt style={{ fontFamily: 'var(--font-tape)', fontSize: '0.68em' }}>FOCUS</dt>
                      <dd style={{ margin: 0, textAlign: 'right', fontSize: '0.70em', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        {CHAPTERS[4].focus}
                      </dd>
                    </div>
                  </dl>
                  <p className="page__blurb" style={{ fontSize: 'clamp(0.61rem, 0.74vw, 0.69rem)', lineHeight: 1.28, margin: '2px 0' }}>
                    {CHAPTERS[4].blurb}
                  </p>
                  <div className="page__foot" style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%', gap: '6px', paddingTop: '2px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', flex: 1 }}>
                      {CHAPTERS[4].highlights.map((h) => (
                        <span key={h} className="page__badge" style={{ fontSize: '0.47rem', padding: '1px 5px', rotate: '0deg' }}>★ {h}</span>
                      ))}
                    </div>
                    <p className="page__folio" style={{ margin: 0, flexShrink: 0, opacity: 0.7 }}>11</p>
                  </div>
                </div>

                {/* Back of Leaf 5: End Page */}
                <div className="page page--left page--end face--back">
                  <div className="hero-badge" style={{ transform: 'scale(1.2)', margin: '0 auto' }}>AM</div>
                  <p className="page__cover-title" style={{ fontSize: '3.2rem', marginTop: '10px' }}>THE END?</p>
                  <p className="page__blurb" style={{ fontSize: '1.1rem', maxWidth: '320px', margin: '10px auto' }}>
                    Not quite. The best chapter is the one we build next together.
                  </p>
                  <a
                    href="#contact"
                    className="btn btn--pop"
                    style={{ marginTop: '14px', textDecoration: 'none' }}
                  >
                    START A PROJECT →
                  </a>
                  <p className="page__folio">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
