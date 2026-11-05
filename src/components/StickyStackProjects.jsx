import React, { useState } from 'react';
import { ExternalLink, Github, Layers, Sparkles, Terminal, Smartphone, Globe, Shield, ArrowUpRight } from 'lucide-react';

const FEATURED_PROJECTS = [
  {
    id: 'tajmahalcarpets',
    title: 'Tajmahal Carpets',
    category: 'Client Web Platform',
    role: 'Lead Full-Stack Developer',
    description: 'A bespoke digital storefront and product catalog built for a luxury carpet manufacturer. Features responsive high-res visual showcases, instant WhatsApp order flows, and optimized performance.',
    tags: ['React / JS', 'TailwindCSS', 'Client Freelance', 'Production'],
    stats: [
      { label: 'Speed Score', value: '99/100' },
      { label: 'Uptime', value: '100%' },
      { label: 'Type', value: 'Client Work' }
    ],
    github: 'https://github.com/Arunmohankml/tajmahalcarpet',
    live: 'https://github.com/Arunmohankml/tajmahalcarpet',
    icon: Globe,
    accent: '#FF5500',
    number: '01',
    highlight: 'Real-world production deployment for commercial client',
    codeSnippet: `// Responsive catalog sync & instant quote routing
const routeOrderToWhatsApp = (carpetItem, dimension) => {
  const message = encodeURIComponent(
    \`Hi Tajmahal Carpets, I'm interested in \${carpetItem.name} (\${dimension}).\`
  );
  window.open(\`https://wa.me/91XXXXXXXXXX?text=\${message}\`, '_blank');
};`
  },
  {
    id: 'web-iphone',
    title: 'CitizenIV Web-iPhone',
    category: 'Game Server Scripting / In-Game NUI',
    role: 'CitizenIV Engine Developer',
    description: 'An interactive virtual smartphone rendered directly inside the GTA IV CitizenIV engine. Players can send messages, make calls via WebRTC, check bank balances, and launch mini-apps in real-time.',
    tags: ['CitizenIV NUI', 'JavaScript', 'Lua', 'Game UI/UX'],
    stats: [
      { label: 'Target Engine', value: 'CitizenIV' },
      { label: 'Latency', value: '<16ms' },
      { label: 'Stack', value: 'Web + Lua' }
    ],
    github: 'https://github.com/Arunmohankml/Web-Iphone',
    live: 'https://github.com/Arunmohankml/CitizenIV-masterlist',
    icon: Smartphone,
    accent: '#FF6B00',
    number: '02',
    highlight: 'Bridging web standards with Grand Theft Auto IV game memory',
    codeSnippet: `-- CitizenIV Lua <-> NUI Web Event Bridge
RegisterNUICallback("send_sms", function(data, cb)
    local receiver = data.targetPhone
    local message = data.text
    TriggerServerEvent("citizeniv:relayMessage", receiver, message)
    cb({ status = "delivered", timestamp = os.time() })
end)`
  },
  {
    id: 'lua-translator',
    title: 'FiveM & CitizenIV Lua Translator',
    category: 'Developer Automation & CLI Tool',
    role: 'Tooling Creator',
    description: 'An automated utility pipeline built in Python to parse, extract, batch-translate, and re-inject localized strings into complex FiveM and CitizenIV Lua server resources with AST safety checks.',
    tags: ['Python', 'Lua Parsing', 'CLI Tooling', 'Automation'],
    stats: [
      { label: 'Resource Speed', value: '10x Faster' },
      { label: 'Language Support', value: 'Multi-lingual' },
      { label: 'Language', value: 'Python' }
    ],
    github: 'https://github.com/Arunmohankml/FiveM-CitizenIV-Lua-string-transilator',
    live: 'https://github.com/Arunmohankml/FiveM-CitizenIV-Lua-string-transilator',
    icon: Terminal,
    accent: '#121215',
    number: '03',
    highlight: 'Used by game server admins to localize hundreds of community scripts',
    codeSnippet: `# Automated AST Lua string extractor & localization injector
def parse_and_localize(lua_filepath, target_lang='en'):
    with open(lua_filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    strings = regex_extract_quoted_tokens(content)
    translated_map = batch_translate(strings, target_lang)
    return inject_translations(content, translated_map)`
  },
  {
    id: 'peerwave',
    title: 'PeerWave P2P Network',
    category: 'WebRTC & Distributed Systems',
    role: 'Network & Backend Engineer',
    description: 'Decentralized peer-to-peer audio/video streaming mesh leveraging WebRTC and PeerJS. Minimizes server bandwidth by establishing direct browser-to-browser encrypted data and media pipes.',
    tags: ['PeerJS', 'WebRTC', 'Node.js', 'Socket.IO'],
    stats: [
      { label: 'Topology', value: 'Direct P2P Mesh' },
      { label: 'Encryption', value: 'DTLS / SRTP' },
      { label: 'Server Cost', value: '~0 Server Load' }
    ],
    github: 'https://github.com/Arunmohankml/PeerWave',
    live: 'https://github.com/Arunmohankml/PeerWave-server',
    icon: Layers,
    accent: '#FF5500',
    number: '04',
    highlight: 'Direct browser-to-browser streaming without costly relay servers',
    codeSnippet: `// PeerWave Direct Mesh Connection Handshake
const peer = new Peer(generateUserHash(), {
  host: 'peerwave-signaling.local',
  port: 9000,
  path: '/peerwave'
});
peer.on('call', (incomingMediaStream) => {
  incomingMediaStream.answer(myLocalStream);
  attachVideoElement(incomingMediaStream);
});`
  },
  {
    id: 'civiceye',
    title: 'CivicEye & FraudEye',
    category: 'Hackathon Innovation Project',
    role: 'Core Backend & Architecture',
    description: 'Selected hackathon project built to empower citizens to report municipal violations and track resolution status in real-time with automated verification and geotagged timestamp hashing.',
    tags: ['Python', 'FastAPI', 'Geolocation', 'Hackathon'],
    stats: [
      { label: 'Response Time', value: '<200ms' },
      { label: 'Verification', value: 'Automated' },
      { label: 'Origin', value: 'Team Optiminds' }
    ],
    github: 'https://github.com/Arunmohankml/CivicEye',
    live: 'https://github.com/Arunmohankml/FraudEye',
    icon: Shield,
    accent: '#FF4400',
    number: '05',
    highlight: 'Built under high pressure during 36-hour competitive hackathons',
    codeSnippet: `@app.post("/api/v1/incidents/report")
async def report_incident(payload: IncidentSchema):
    verified_coords = validate_geofence(payload.lat, payload.lon)
    incident_hash = generate_proof_hash(payload)
    await db.incidents.insert_one({**payload.dict(), "hash": incident_hash})
    return {"status": "indexed", "tracking_id": incident_hash[:12]}`
  }
];

export default function StickyStackProjects() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF5500] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
            FEATURED ENGINEERING WORK
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-zinc-900 tracking-tight">
            SELECTED <span className="text-[#FF5500]">PROJECTS</span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-sm font-mono text-zinc-600 max-w-md">
          Scroll through to experience the sticky stacking deck. Each card pins and layers smoothly as you navigate downward.
        </p>
      </div>

      {/* ── STICKY STACKING DECK CONTAINER ── */}
      <div className="relative flex flex-col gap-12 pb-24">
        {FEATURED_PROJECTS.map((project, index) => {
          const IconComponent = project.icon;
          // Calculate staggered sticky top position for satisfying stacking effect
          const stickyTop = 90 + index * 18;

          return (
            <div
              key={project.id}
              style={{
                top: `${stickyTop}px`,
              }}
              className="sticky transition-all duration-300 rounded-3xl bg-white border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden hover:border-zinc-300"
            >
              {/* Card Header Strip */}
              <div className="flex items-center justify-between px-6 py-4 bg-zinc-50/80 border-b border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-mono font-bold text-xs">
                    {project.number}
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-800 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-600 font-medium hidden sm:inline">
                    {project.role}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#FF5500]" />
                </div>
              </div>

              {/* Main Card Body (2 Columns) */}
              <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Col: Details & Description */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-display font-black text-3xl sm:text-4xl text-zinc-900 mb-3 tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Highlight Tag */}
                    <div className="p-3 rounded-xl bg-orange-50/80 border border-orange-200/60 mb-6 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-orange-950 font-sans">
                        <strong className="font-bold text-[#FF5500]">Key Highlight:</strong> {project.highlight}
                      </span>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {project.stats.map((st, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-100">
                          <div className="text-[10px] font-mono text-zinc-600 uppercase">{st.label}</div>
                          <div className="text-sm font-bold text-zinc-900 font-mono mt-0.5">{st.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 text-xs font-mono font-medium border border-zinc-200/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-[#FF5500] text-white text-xs font-bold transition-all flex items-center gap-2"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Source Code</span>
                    </a>
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold transition-all flex items-center gap-1.5"
                    >
                      <span>Repository Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Col: High-Tech Code / Architecture Window */}
                <div className="lg:col-span-6 w-full">
                  <div className="rounded-2xl bg-zinc-950 text-zinc-300 p-4 sm:p-6 border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs">
                    
                    {/* Window Controls */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/80">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] text-zinc-500 font-mono">
                        {project.id}.snippet.js
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                        <span>LIVE PREVIEW</span>
                      </div>
                    </div>

                    {/* Formatted Code Box */}
                    <pre className="overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-zinc-300 font-mono py-2">
                      <code>{project.codeSnippet}</code>
                    </pre>

                    {/* Interactive Footer */}
                    <div className="mt-4 pt-3 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-500">
                      <span>ENGINE: NODE / CITIZENIV / CLOUD</span>
                      <span className="text-[#FF5500]">STATUS: 200 OK</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
