import React from 'react';
import { Trophy, Clock, MapPin, Users, Flame, Award, Zap } from 'lucide-react';

const HACKATHONS = [
  {
    title: "INNOBYTE '26",
    organization: "SIMATS Engineering",
    date: "Feb 2026",
    location: "Chennai, India",
    team: "Team Optiminds",
    role: "Full-Stack & Systems Lead",
    highlight: "Selected finalist team prototyping rapid civic tech solutions under tight deadlines.",
    tags: ["Competitive Hackathon", "Team Optiminds", "FastAPI / React"],
    badge: "Selected Finalist",
    badgeColor: "bg-[#FFD000] text-black",
    emoji: "🏆"
  },
  {
    title: "Sudhee HICON",
    organization: "CBIT Hyderabad",
    date: "Feb 2026",
    location: "Hyderabad, India",
    team: "SRMIST Delegation",
    role: "Frontend & Integration",
    highlight: "Traveled to Hyderabad to build an intensive full-stack product sprint against leading university teams across India.",
    tags: ["Inter-State Sprint", "CBIT", "Realtime Systems"],
    badge: "Inter-State Competitor",
    badgeColor: "bg-[#FF5500] text-white",
    emoji: "🚀"
  },
  {
    title: "PEC 3.0 (36-Hour Sprint)",
    organization: "Panimalar Engineering College",
    date: "36h Non-stop",
    location: "Chennai, India",
    team: "Hackathon Squad",
    role: "Full-Stack Prototype Engineer",
    highlight: "First major hackathon trial. Coded continuously across 36 hours with zero downtime to deliver a functioning MVP.",
    tags: ["36h Non-stop", "First Major Hackathon", "MVP Deployment"],
    badge: "Endurance Sprint",
    badgeColor: "bg-[#FF2A42] text-white",
    emoji: "⚡"
  }
];

export default function HackathonTimeline() {
  return (
    <section id="hackathons" className="relative py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t-4 border-[#121214]">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b-4 border-[#121214]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="comic-badge bg-[#FF2A42] text-white -rotate-1">
              ⚡ PRESSURE CREATES DIAMONDS
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#121214] tracking-tight uppercase">
            HACKATHON <span className="text-[#FF5500]">ARENA</span>.
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-sm font-mono text-zinc-700 max-w-md font-bold">
          High-pressure competitive engineering. Delivering functional MVPs and architectures under 24-to-36 hour countdown timers.
        </p>
      </div>

      {/* Comic Milestone Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {HACKATHONS.map((hack) => (
          <div
            key={hack.title}
            className="comic-card p-6 sm:p-8 rounded-3xl bg-white flex flex-col justify-between"
          >
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className={`comic-badge ${hack.badgeColor} text-[10px] rounded-lg`}>
                  {hack.badge}
                </span>
                <span className="text-2xl">{hack.emoji}</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#121214] mb-2 tracking-tight">
                {hack.title}
              </h3>
              
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-600 font-bold mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>{hack.organization} • {hack.location}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-100 border-2 border-black text-xs font-mono font-bold text-[#121214] mb-5">
                <Users className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>{hack.team}</span>
              </div>

              <p className="text-zinc-700 text-sm leading-relaxed mb-6 font-medium">
                {hack.highlight}
              </p>
            </div>

            {/* Bottom Tags */}
            <div className="pt-4 border-t-2 border-[#121214] flex flex-wrap gap-1.5">
              {hack.tags.map((tag) => (
                <span 
                  key={tag}
                  className="comic-badge bg-white text-[#121214] text-[10px] rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
