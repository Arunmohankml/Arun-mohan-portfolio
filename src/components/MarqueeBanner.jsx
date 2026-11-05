import React from 'react';

export default function MarqueeBanner({ 
  text = "ARUN MOHAN K", 
  subtitle = "FULL-STACK ARCHITECT • CITIZENIV MODDER • CLOUD COMPUTING • FREELANCE ENGINEER • ",
  reverse = false,
  bgColor = "bg-[#FFD000]",
  textColor = "text-[#121214]"
}) {
  const items = Array(6).fill(null);

  return (
    <div className={`relative w-full overflow-hidden py-3.5 border-y-4 border-[#121214] ${bgColor} select-none shadow-[0_4px_0px_#121214]`}>
      {/* Primary Marquee Track */}
      <div className={`marquee-track flex gap-8 whitespace-nowrap items-center ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {items.map((_, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className={`font-display font-black text-3xl md:text-5xl lg:text-6xl tracking-tight uppercase ${textColor}`}>
              {text}
            </span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#FF5500] border-2 border-black" />
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#121214] font-black">
              {subtitle}
            </span>
            <span className="text-black font-black text-2xl">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}
