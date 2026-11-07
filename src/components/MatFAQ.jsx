import React, { useState } from 'react';
import TapeDivider from './TapeDivider';

const FAQS = [
  {
    q: 'WHAT MAKES YOUR ENGINEERING APPROACH UNIQUE?',
    a: 'Most developers start with frontend frameworks. I started at age 15 reverse-engineering GTA IV game memory, inspecting x86 assembly pointers, and building native C++ plugins. That background gives me a deep intuition for memory efficiency, network serialization, and performance bottlenecks that standard full-stack developers often overlook.'
  },
  {
    q: 'ARE YOU AVAILABLE FOR FREELANCE & FULL-TIME CONTRACTS?',
    a: 'Yes! I am actively taking on ambitious freelance engineering projects, cloud architectural consulting, and high-velocity full-stack contracts. I also welcome discussions for software engineering roles graduating from SRMIST B.Tech Cloud Computing.'
  },
  {
    q: 'CAN YOU HANDLE BOTH DISTRIBUTED CLOUD AND POLISHED UI?',
    a: 'End-to-end. On the backend, I design Dockerized microservices, PostgreSQL schemas, and Kubernetes deployments. On the frontend, I obsess over sub-second load times, smooth 60fps animations, interactive WebRTC real-time connections, and distinctive graphic identities.'
  },
  {
    q: 'WHAT IS YOUR TRACK RECORD WITH REAL COMMERCIAL CLIENTS?',
    a: 'I designed and deployed the entire enterprise operations and inventory system for Tajmahal Carpets. The system manages real-time roll tracking, automated PDF invoice generation, and WhatsApp order routing, operating with zero critical bugs and a 40% reduction in order processing time.'
  },
  {
    q: 'HOW DO YOU WIN IN HIGH-PRESSURE 36-HOUR HACKATHONS?',
    a: 'Ruthless prioritization. We build a functional, demonstrable core within the first 12 hours. We spend the remaining 24 hours polishing user experience, load-testing edge cases, and engineering a live interactive walkthrough that blows judges away without relying on pre-recorded slides.'
  }
];

export default function MatFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
    if (window.SoundEffects?.pop) {
      window.SoundEffects.pop();
    }
  };

  return (
    <>
      <TapeDivider text="FREQUENTLY ASKED QUESTIONS ★ GOT QUESTIONS? WE GOT COMIC ANSWERS" tilt="tilt-right" white={true} />

      <section className="section section--faq pattern pattern--asterisk" id="faq">
        <div className="section__inner section__inner--narrow">
          <div className="section-head section-head--center" style={{ color: 'var(--white)' }}>
            <h2 className="display display--heading" style={{ color: 'var(--white)' }}>
              FREQUENTLY ASKED
            </h2>
            <p className="section-lead" style={{ color: 'var(--white)' }}>
              Everything you wanted to know about Arun Mohan K’s engineering philosophy, toolchains, and availability.
            </p>
          </div>

          <div className="faq" style={{ maxWidth: '840px', margin: '0 auto' }}>
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <details
                  key={idx}
                  className="faq__item"
                  open={isOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFAQ(idx);
                  }}
                >
                  <summary>
                    <span>{item.q}</span>
                  </summary>
                  <div className="faq__body">
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: 1.55,
                      color: 'var(--ink)',
                      margin: 0,
                      fontWeight: 500
                    }}>
                      {item.a}
                    </p>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
