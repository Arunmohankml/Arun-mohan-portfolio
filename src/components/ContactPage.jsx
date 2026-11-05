import React, { useState } from 'react';
import { 
  Mail, MessageSquare, Send, CheckCircle2, Copy, Check, Instagram, 
  Github, Sparkles, MapPin, Clock, ArrowUpRight, HelpCircle, ChevronDown, 
  ChevronUp, ShieldCheck, Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

const FAQS = [
  {
    q: 'How quickly do you respond to project inquiries?',
    a: 'Usually within 12 to 24 hours. If it is an urgent server outage or client sprint deadline, message me directly on Instagram or Discord for fastest response.'
  },
  {
    q: 'Are you available for freelance web development?',
    a: 'Yes! I take select client projects for custom React frontends, high-speed e-commerce catalogs (like Tajmahal Carpets), and WebRTC interactive media platforms.'
  },
  {
    q: 'Can you build custom CitizenIV or FiveM scripts for our server?',
    a: 'Absolutely. I specialize in in-game web-based smartphone NUI displays, WebRTC radio voice systems, and custom Lua server-to-client event bridges.'
  },
  {
    q: 'How can brands or creators collaborate with you?',
    a: 'I partner with developer tooling companies, hardware brands, and student hackathons to create engaging educational reels and tutorials for my tech audience.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Freelance Web Project',
    budget: '$500 - $2,000 (₹40K - ₹1.5L)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedChannel, setCopiedChannel] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const handleCopy = (text, channel) => {
    navigator.clipboard.writeText(text);
    setCopiedChannel(channel);
    setTimeout(() => setCopiedChannel(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF5500', '#FFD000', '#FF2A42', '#FFFFFF', '#121214']
        });
      } catch (err) {}
    }, 700);
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto space-y-16 animate-in fade-in duration-300">
      
      {/* ── TOP HERO BANNER ── */}
      <div className="comic-card-static rounded-3xl p-6 sm:p-10 md:p-12 bg-[#FF5500] text-white relative overflow-hidden">
        {/* Background Comic Halftone */}
        <div className="absolute inset-0 comic-dots opacity-15 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="comic-badge bg-[#FFD000] text-[#121214] -rotate-1">
                📬 DEDICATED CONTACT STATION
              </span>
              <span className="comic-badge bg-[#121214] text-white rotate-1">
                🟢 AVAILABLE FOR CONTRACTS & INQUIRIES
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
              HAVE A PROJECT IN MIND? <br />
              <span className="bg-[#121214] text-[#FFD000] px-2 py-0.5 inline-block -rotate-1 mt-1">
                LET'S MAKE IT REAL
              </span>.
            </h1>

            <p className="text-white text-sm sm:text-base font-bold leading-relaxed max-w-xl">
              Whether you need a high-performance web platform, GTA IV CitizenIV custom server scripting, or want to partner on a developer content reel — send your signal directly.
            </p>

            {/* Availability Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-[#121214] border-2 border-black text-xs font-mono font-bold text-zinc-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Base: Chennai, India (IST) • Typical Reply: &lt; 24h</span>
            </div>
          </div>

          {/* Right Avatar Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="comic-card-static rounded-3xl bg-white p-3 w-full max-w-[280px]">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-b from-amber-100 to-orange-50 border-2 border-black flex items-end justify-center relative overflow-hidden">
                <img 
                  src="/avatars/arun-pointing.png" 
                  alt="Arun Mohan Pointing"
                  className="w-full h-full object-contain object-bottom comic-avatar-sticker select-none"
                />
                <div className="absolute top-2 left-2 comic-badge bg-[#FFD000] text-black text-[9px] -rotate-2">
                  "GOT AN IDEA? 👉"
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── 2-COLUMN WORKSPACE: INTERACTIVE FORM (LEFT) + DIRECT COMMS (RIGHT) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ──── LEFT: NEO-BRUTALIST COMIC CONTACT FORM (7 Cols) ──── */}
        <div className="lg:col-span-7 comic-card-static rounded-3xl p-6 sm:p-8 md:p-10 bg-white">
          <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-black">
            <div>
              <div className="comic-badge bg-[#FFD000] text-black text-[10px] mb-1">
                ENCRYPTED DIRECT CHANNEL
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#121214] uppercase">
                SEND YOUR TRANSMISSION.
              </h2>
            </div>
            <span className="text-2xl">⚡</span>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#FFD000] border-2 border-black text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-black mx-auto flex items-center justify-center text-3xl">
                🚀
              </div>
              <h3 className="font-display font-black text-2xl text-[#121214] uppercase">
                TRANSMISSION RECEIVED!
              </h3>
              <p className="text-sm font-bold text-[#121214] max-w-md mx-auto">
                Thanks for reaching out, {formData.name}! Your message has been logged. Arun Mohan K will review and respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', category: 'Freelance Web Project', budget: '$500 - $2,000 (₹40K - ₹1.5L)', message: '' });
                }}
                className="comic-btn comic-btn-dark px-5 py-2.5 rounded-xl text-xs font-bold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-zinc-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-50 border-2 border-black rounded-xl p-3 text-sm font-mono text-[#121214] focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#FF5500]"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-zinc-700">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-50 border-2 border-black rounded-xl p-3 text-sm font-mono text-[#121214] focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#FF5500]"
                  />
                </div>
              </div>

              {/* Project Category */}
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold uppercase text-zinc-700">
                  Project / Inquiry Type
                </label>
                <select
                  value={formData.category}
                  onChange={e => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-zinc-50 border-2 border-black rounded-xl p-3 text-sm font-mono text-[#121214] focus:outline-none focus:bg-white"
                >
                  <option>Freelance Web Platform (React / Next / Full-Stack)</option>
                  <option>CitizenIV / FiveM Game Modding Script (NUI / Lua)</option>
                  <option>Brand Sponsorship / Creator Collab (Instagram)</option>
                  <option>Student Hackathon / Speaker Invite (SRMIST)</option>
                  <option>General Tech Query / Just Saying Hi</option>
                </select>
              </div>

              {/* Budget / Scope Range */}
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold uppercase text-zinc-700">
                  Approximate Budget / Timeline
                </label>
                <select
                  value={formData.budget}
                  onChange={e => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-zinc-50 border-2 border-black rounded-xl p-3 text-sm font-mono text-[#121214] focus:outline-none focus:bg-white"
                >
                  <option>&lt; $500 (Small Fix / Consultation / Quick Script)</option>
                  <option>$500 - $2,000 (Standard Web Project or Game NUI Feature)</option>
                  <option>$2,000 - $5,000+ (Full Commercial Deployment)</option>
                  <option>Not Applicable / Non-Commercial Discussion</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold uppercase text-zinc-700">
                  Brief Project Overview *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the goals, timeline, and what you're looking to build..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-50 border-2 border-black rounded-xl p-3 text-sm font-mono text-[#121214] focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#FF5500]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="comic-btn comic-btn-orange w-full py-4 rounded-xl text-sm font-black uppercase tracking-wider gap-2 shadow-[4px_4px_0px_#121214]"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING SIGNAL...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>DISPATCH MESSAGE TO ARUN MOHAN K →</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

        {/* ──── RIGHT: DIRECT COMMS & FAQ ACCORDION (5 Cols) ──── */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct Comms Channels Box */}
          <div className="comic-card-static rounded-3xl p-6 bg-white space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-black">
              <span className="comic-badge bg-[#FF2A42] text-white text-[10px]">
                DIRECT CHANNELS
              </span>
              <span className="font-mono text-xs font-bold text-zinc-600">
                1-CLICK CONNECT
              </span>
            </div>

            {/* Email */}
            <div className="p-3.5 rounded-2xl bg-zinc-50 border-2 border-black flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-100 border-2 border-black flex items-center justify-center text-red-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Primary Email</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-[#121214]">
                    arunmohankml@gmail.com
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCopy('arunmohankml@gmail.com', 'email')}
                className="comic-btn comic-btn-white p-2 rounded-xl text-xs"
                title="Copy Email"
              >
                {copiedChannel === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-zinc-50 hover:bg-orange-50 border-2 border-black flex items-center justify-between gap-3 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-100 border-2 border-black flex items-center justify-center text-[#FF5500]">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Instagram DM</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-[#121214] group-hover:text-[#FF5500]">
                    @arunmohan
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#FF5500]" />
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/Arunmohankml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border-2 border-black flex items-center justify-between gap-3 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-200 border-2 border-black flex items-center justify-center text-black">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase">GitHub Profile</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-[#121214]">
                    github.com/Arunmohankml
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-black" />
            </a>

            {/* Discord */}
            <div className="p-3.5 rounded-2xl bg-zinc-50 border-2 border-black flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 border-2 border-black flex items-center justify-center text-amber-700">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Discord Handle</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-[#121214]">
                    arunmohan#0001
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCopy('arunmohan#0001', 'discord')}
                className="comic-btn comic-btn-white p-2 rounded-xl text-xs"
                title="Copy Discord"
              >
                {copiedChannel === 'discord' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="comic-card-static rounded-3xl p-6 bg-white space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-black">
              <span className="comic-badge bg-[#FFD000] text-black text-[10px]">
                FAQ
              </span>
              <span className="font-mono text-xs font-bold text-zinc-600">
                FREQUENTLY ASKED
              </span>
            </div>

            <div className="space-y-2">
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="comic-card-flat rounded-xl bg-zinc-50 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      className="w-full p-3 text-left font-bold text-xs sm:text-sm text-[#121214] flex justify-between items-center gap-2"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0 text-zinc-500" />}
                    </button>
                    {isOpen && (
                      <div className="p-3 pt-0 text-xs text-zinc-600 leading-relaxed font-mono border-t border-zinc-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
