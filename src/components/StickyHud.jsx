import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Compass } from 'lucide-react';

export default function StickyHud() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalScroll) * 100)));
        setScrollProgress(progress);
      }
      setIsVisible(window.scrollY > 250);
    };

    const updateClock = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 select-none">
      {/* HUD Telemetry Pill */}
      <div className="hidden sm:flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white border-2 border-black shadow-[3px_3px_0px_#121214] text-xs font-mono text-[#121214]">
        <div className="flex items-center gap-1.5 font-bold">
          <Clock className="w-3.5 h-3.5 text-[#FF5500]" />
          <span>{currentTime || '12:00 PM'} IST</span>
        </div>

        <span className="w-px h-3.5 bg-black" />

        <div className="flex items-center gap-1.5 font-black text-[#FF5500]">
          <Compass className="w-3.5 h-3.5 text-black" />
          <span>{scrollProgress}% SCROLL</span>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="comic-btn comic-btn-orange w-10 h-10 rounded-xl"
        title="Scroll to Top"
      >
        <ArrowUp className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}
