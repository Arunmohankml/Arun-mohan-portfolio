import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Copy, Check, ArrowUpRight, MessageSquare, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentStatus, setSentStatus] = useState(false);
  const emailAddress = "arunmohankml@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    try {
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#FF5500', '#121215', '#FF8800']
      });
    } catch (e) {}
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSentStatus(true);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Sender: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
    setTimeout(() => setSentStatus(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 md:px-8 max-w-7xl mx-auto border-t border-zinc-200/80">
      
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Direct Call to Action */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF5500] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
            INITIATE COLLABORATION
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-zinc-900 tracking-tight leading-[1.05] mb-6">
            LET’S BUILD <br />
            <span className="text-[#FF5500]">SOMETHING ICONIC</span>.
          </h2>

          <p className="text-zinc-600 text-base leading-relaxed mb-8 max-w-lg">
            Whether you need a custom full-stack web application, a game server UI / script, or want to team up for high-stakes hackathons, my inbox is open.
          </p>

          {/* Quick Copy Email Box */}
          <div className="w-full max-w-md p-4 rounded-2xl bg-white border border-zinc-200 shadow-clean flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-zinc-600 font-bold">Direct Email</div>
                <div className="text-sm font-bold text-zinc-900 font-mono">{emailAddress}</div>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-[#FF5500] text-white text-xs font-mono font-semibold transition-all flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>

          {/* Social Presence Grid */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/Arunmohankml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-900 text-zinc-800 text-xs font-bold transition-all flex items-center gap-2 shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>github.com/Arunmohankml</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>

            <a
              href="https://linkedin.com/in/arun-mohan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-900 text-zinc-800 text-xs font-bold transition-all flex items-center gap-2 shadow-xs"
            >
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/arun-mohan</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>

            <a
              href="https://www.instagram.com/4nuun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-900 text-zinc-800 text-xs font-bold transition-all flex items-center gap-2 shadow-xs"
            >
              <Instagram className="w-4 h-4" />
              <span>@4nuun</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Quick Dispatch Form */}
        <div className="lg:col-span-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200/90 shadow-clean">
            <h3 className="font-display font-bold text-2xl text-zinc-900 mb-1">
              Send a Quick Dispatch
            </h3>
            <p className="text-xs text-zinc-600 mb-6 font-mono">
              Fires directly to Arun's client mail queue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-zinc-700 uppercase mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:border-[#FF5500] focus:bg-white transition-all font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-zinc-700 uppercase mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:border-[#FF5500] focus:bg-white transition-all font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-zinc-700 uppercase mb-1.5">
                  Project Scope or Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project, timeline, or hackathon squad..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:border-[#FF5500] focus:bg-white transition-all font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#FF5500] hover:bg-[#e04800] text-white font-bold text-sm tracking-wide transition-all shadow-[0_10px_25px_rgba(255,85,0,0.25)] flex items-center justify-center gap-2 transform active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>{sentStatus ? 'OPENING CLIENT MAIL...' : 'SEND INQUIRY'}</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
