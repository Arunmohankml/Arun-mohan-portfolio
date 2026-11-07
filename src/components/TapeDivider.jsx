import React from 'react';

export default function TapeDivider({ 
  text = "ARUN MOHAN K ★ FULL-STACK ARCHITECT", 
  tilt = "tilt-left", // "tilt-left" | "tilt-right" | "flat"
  white = false 
}) {
  const items = Array(8).fill(text);

  return (
    <div 
      className="tape-divider-wrapper relative w-full select-none pointer-events-none" 
      style={{ 
        height: 0, 
        zIndex: 25,
        overflowX: 'clip',
        overflowY: 'visible',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
      aria-hidden="true"
    >
      <div 
        className={`tape ${tilt === 'tilt-right' ? 'tape--tilt-right' : ''} ${white ? 'tape--white' : ''}`} 
        data-tape={text} 
        style={{ 
          top: '50%',
          boxShadow: '0 8px 0 rgba(12, 14, 15, 0.45)',
          borderTop: '3.5px solid var(--ink)',
          borderBottom: '3.5px solid var(--ink)'
        }}
      >
        <div className="tape__track" style={{ '--tape-speed': '38s' }}>
          <div className="tape__group">
            {items.map((item, i) => (
              <span key={i} className="tape__item">{item}</span>
            ))}
          </div>
          <div className="tape__group">
            {items.map((item, i) => (
              <span key={`clone-${i}`} className="tape__item">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
