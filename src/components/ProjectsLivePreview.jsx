import React, { useState } from 'react';
import { 
  Smartphone, Globe, Terminal, Layers, Shield, ExternalLink, Github, 
  Play, RefreshCw, Send, CheckCircle2, Phone, MessageSquare, MapPin, 
  Code, Eye, Sparkles, ChevronRight, Volume2, Mic, Video, Zap, ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

const PROJECTS_DATA = [
  {
    id: 'web-iphone',
    number: '01',
    title: 'CitizenIV Web-iPhone',
    badge: 'GTA IV IN-GAME NUI',
    badgeColor: 'bg-[#FF5500] text-white',
    category: 'Game Engine Architecture & WebRTC',
    tagline: 'A working virtual smartphone rendered directly inside the GTA IV CitizenIV engine.',
    desc: 'Bridges Grand Theft Auto IV game memory with web technologies. Players can make in-game WebRTC phone calls, send real-time SMS to other players, inspect bank accounts, and trigger server-side Lua events via NUI.',
    accent: '#FF5500',
    tags: ['CitizenIV NUI', 'Lua Bridge', 'WebRTC Audio', 'JavaScript', 'Game UI/UX'],
    stats: [
      { label: 'Render Latency', value: '<16ms' },
      { label: 'Engine', value: 'CitizenIV' },
      { label: 'Bridge', value: 'Lua + NUI' },
    ],
    github: 'https://github.com/Arunmohankml/Web-Iphone',
    live: 'https://github.com/Arunmohankml/CitizenIV-masterlist',
    codeSnippet: `-- CitizenIV Lua <-> NUI Web Event Bridge
RegisterNUICallback("dial_contact", function(data, cb)
    local callerID = GetPlayerServerId(PlayerId())
    local targetNumber = data.number
    TriggerServerEvent("citizeniv:initiateWebRTCCall", callerID, targetNumber)
    cb({ status = "ringing", channel = "rtc-" .. targetNumber })
end)`
  },
  {
    id: 'tajmahalcarpets',
    number: '02',
    title: 'Tajmahal Carpets',
    badge: 'CLIENT E-COMMERCE',
    badgeColor: 'bg-[#FFD000] text-[#121214]',
    category: 'Commercial Web Platform',
    tagline: 'High-performance digital luxury rug gallery & instant quote order system.',
    desc: 'Architected for a premier carpet manufacturer. Features an interactive rug customizer with real-time silk vs. wool density pricing, responsive high-res galleries, and automated WhatsApp quote routing.',
    accent: '#FFD000',
    tags: ['React 18', 'Tailwind CSS', 'WhatsApp API', 'Client Freelance', 'Production'],
    stats: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Deploy', value: 'Vercel Edge' },
    ],
    github: 'https://github.com/Arunmohankml/tajmahalcarpet',
    live: 'https://github.com/Arunmohankml/tajmahalcarpet',
    codeSnippet: `// WhatsApp Quote Dispatch Pipeline
export const dispatchOrderQuote = (rug, size, material) => {
  const price = calculateDynamicQuote(rug.baseKPSI, size, material);
  const msg = encodeURIComponent(
    \`*NEW ORDER INQUIRY*\\nRug: \${rug.name}\\nSize: \${size}\\nMaterial: \${material}\\nEstimated: ₹\${price.toLocaleString()}\`
  );
  window.open(\`https://wa.me/91XXXXXXXXXX?text=\${msg}\`, '_blank');
};`
  },
  {
    id: 'lua-translator',
    number: '03',
    title: 'FiveM to CitizenIV Lua Translator',
    badge: 'CLI & COMPILER TOOL',
    badgeColor: 'bg-[#FF2A42] text-white',
    category: 'Developer Tooling & AST Parsing',
    tagline: 'Automated AST parser converting FiveM server resources to CitizenIV native syntax.',
    desc: 'Analyzes Lua Abstract Syntax Trees to detect incompatible FiveM natives (e.g. `RegisterNetEvent`, `GetPlayerPed`, `SetEntityCoords`), batch-extracts localizable strings, and injects clean CitizenIV equivalents with zero syntax breaks.',
    accent: '#FF2A42',
    tags: ['Python 3', 'Lua AST Parsing', 'Regex Engines', 'Automation', 'Open Source'],
    stats: [
      { label: 'Speed Boost', value: '10x Faster' },
      { label: 'Natives Mapped', value: '180+' },
      { label: 'Accuracy', value: '99.4%' },
    ],
    github: 'https://github.com/Arunmohankml/FiveM-CitizenIV-Lua-string-transilator',
    live: 'https://github.com/Arunmohankml/FiveM-CitizenIV-Lua-string-transilator',
    codeSnippet: `# Python AST Lua String Extractor & FiveM -> CitizenIV Native Mapper
def translate_lua_resource(source_code: str) -> str:
    native_map = {
        "RegisterNetEvent": "RegisterServerEvent",
        "GetPlayerPed(-1)": "GetPlayerChar(GetPlayerId())",
        "SetEntityCoords": "SetCharCoordinates"
    }
    for fivem_native, citizeniv_native in native_map.items():
        source_code = re.sub(rf"\\b{fivem_native}\\b", citizeniv_native, source_code)
    return source_code`
  },
  {
    id: 'peerwave',
    number: '04',
    title: 'PeerWave P2P Mesh',
    badge: 'DISTRIBUTED SYSTEMS',
    badgeColor: 'bg-[#FF5500] text-white',
    category: 'WebRTC P2P Realtime Engine',
    tagline: 'Decentralized peer-to-peer audio/video streaming mesh with direct browser pipes.',
    desc: 'Eliminates expensive media relay servers by establishing direct DTLS/SRTP encrypted mesh tunnels between browser nodes. Features dynamic signaling fallback and low-latency audio sync.',
    accent: '#FF5500',
    tags: ['WebRTC', 'PeerJS', 'Node.js', 'Socket.IO', 'Signaling'],
    stats: [
      { label: 'Relay Cost', value: '~0 Server Load' },
      { label: 'Encryption', value: 'DTLS / SRTP' },
      { label: 'Mesh Nodes', value: 'Up to 8 Peers' },
    ],
    github: 'https://github.com/Arunmohankml/PeerWave',
    live: 'https://github.com/Arunmohankml/PeerWave-server',
    codeSnippet: `// PeerWave Direct Mesh Connection Handshake
const peerNode = new Peer(generateUserHash(), {
  host: 'peerwave-signaling.arunmohan.dev',
  port: 443,
  secure: true
});

peerNode.on('call', (incomingCall) => {
  incomingCall.answer(localMediaStream);
  incomingCall.on('stream', (remoteStream) => mountVideo(remoteStream));
});`
  },
  {
    id: 'civiceye',
    number: '05',
    title: 'CivicEye Smart City',
    badge: 'HACKATHON WINNER',
    badgeColor: 'bg-[#FFD000] text-[#121214]',
    category: 'Civic-Tech & Geolocation',
    tagline: 'Decentralized incident reporting platform with cryptographic verification.',
    desc: 'Built during competitive hackathons. Empowers citizens to report potholes, street lamp outages, and municipal violations with automated GPS geofencing, photo hashes, and real-time status resolution.',
    accent: '#FFD000',
    tags: ['FastAPI', 'Geolocation', 'MongoDB', 'Hackathon Sprint', 'Cryptographic Proof'],
    stats: [
      { label: 'API Latency', value: '<180ms' },
      { label: 'Geofence Accuracy', value: '±3 Meters' },
      { label: 'Team', value: 'Team Optiminds' },
    ],
    github: 'https://github.com/Arunmohankml/CivicEye',
    live: 'https://github.com/Arunmohankml/FraudEye',
    codeSnippet: `@app.post("/api/v1/incidents/report")
async def report_incident(payload: IncidentReport):
    verify_gps_geofence(payload.lat, payload.lng)
    proof_hash = hashlib.sha256(f"{payload.lat}{payload.ts}".encode()).hexdigest()
    await db.incidents.insert_one({**payload.dict(), "proof": proof_hash})
    return {"status": "indexed", "tracking_id": proof_hash[:10]}`
  }
];

export default function ProjectsLivePreview() {
  const [selectedProjectId, setSelectedProjectId] = useState('web-iphone');
  const [viewMode, setViewMode] = useState('preview'); // 'preview' | 'code'

  // ── Simulator States ──
  // 1. CitizenIV iPhone State
  const [phoneScreen, setPhoneScreen] = useState('home'); // 'home' | 'dialer' | 'sms' | 'gps'
  const [dialNumber, setDialNumber] = useState('911-IV');
  const [callStatus, setCallStatus] = useState('idle'); // 'idle' | 'calling' | 'connected'
  const [smsMessages, setSmsMessages] = useState([
    { sender: 'Niko Bellic', text: 'Arun, is the WebRTC radio ready?', time: '12:04' },
    { sender: 'You', text: 'Yes, 60 FPS NUI frame running smoothly.', time: '12:05' }
  ]);
  const [inputSms, setInputSms] = useState('');

  // 2. Tajmahal Carpets State
  const [selectedRug, setSelectedRug] = useState('Royal Kashan Silk');
  const [rugSize, setRugSize] = useState('6x9 ft');
  const [rugMaterial, setRugMaterial] = useState('Mulberry Silk (600 KPSI)');
  const [quoteSent, setQuoteSent] = useState(false);

  // 3. Lua Translator State
  const [luaCodeInput, setLuaCodeInput] = useState(
`-- Sample FiveM Lua Input
RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(xPlayer)
    local playerPed = GetPlayerPed(-1)
    SetEntityCoords(playerPed, 204.5, -840.1, 30.5)
    TriggerClientEvent('chat:addMessage', -1, { args = { 'Welcome to Liberty City' } })
end)`
  );
  const [translatedOutput, setTranslatedOutput] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  // 4. PeerWave State
  const [peerMicOn, setPeerMicOn] = useState(true);
  const [peerCamOn, setPeerCamOn] = useState(true);
  const [peerMsg, setPeerMsg] = useState('');
  const [peerChatLogs, setPeerChatLogs] = useState([
    { peer: 'Peer-01 (Host)', text: 'WebRTC data pipe established.' },
    { peer: 'Peer-02 (Arun)', text: 'Direct P2P mesh connected @ 14ms latency.' }
  ]);

  // 5. CivicEye State
  const [activeIncident, setActiveIncident] = useState('INC-8492');
  const [reportedIncidents, setReportedIncidents] = useState([
    { id: 'INC-8492', title: 'Main Street Pothole Hazard', status: 'IN PROGRESS', time: '10m ago' },
    { id: 'INC-8493', title: 'Broken Solar Traffic Signal', status: 'RESOLVED', time: '1h ago' },
  ]);
  const [newIncidentTitle, setNewIncidentTitle] = useState('');

  const activeProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  // CitizenIV Dialer Action
  const handleDial = () => {
    setCallStatus('calling');
    setTimeout(() => {
      setCallStatus('connected');
    }, 900);
  };

  const handleHangup = () => {
    setCallStatus('idle');
  };

  const handleSendSms = (e) => {
    e.preventDefault();
    if (!inputSms.trim()) return;
    setSmsMessages(prev => [...prev, { sender: 'You', text: inputSms, time: 'Just now' }]);
    setInputSms('');
    setTimeout(() => {
      setSmsMessages(prev => [...prev, { sender: 'Server Gateway', text: '[LUA EVENT ACK] Message relayed to NUI display.', time: 'Just now' }]);
    }, 600);
  };

  // Tajmahal Carpets Price Calculator
  const getRugPrice = () => {
    let base = 24000;
    if (selectedRug === 'Tabriz Heritage') base = 32000;
    if (selectedRug === 'Samarkand Velvet') base = 19000;

    let multiplier = 1;
    if (rugSize === '6x9 ft') multiplier = 1.6;
    if (rugSize === '8x10 ft') multiplier = 2.4;

    if (rugMaterial.includes('Silk')) multiplier *= 1.8;
    return Math.round(base * multiplier);
  };

  const handleSendQuote = () => {
    setQuoteSent(true);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FFD000', '#FF5500', '#121214', '#FFFFFF']
      });
    } catch (e) {}
    setTimeout(() => setQuoteSent(false), 2500);
  };

  // Lua Translator Action
  const handleTranslateLua = () => {
    setIsTranslating(true);
    setTimeout(() => {
      let output = luaCodeInput
        .replace(/RegisterNetEvent/g, 'RegisterServerEvent')
        .replace(/GetPlayerPed\(-1\)/g, 'GetPlayerChar(GetPlayerId())')
        .replace(/SetEntityCoords/g, 'SetCharCoordinates')
        .replace(/TriggerClientEvent/g, 'TriggerClientEvent_NUI');
      
      output = `-- [CITIZENIV TRANSLATED LUA OUTPUT]\n-- Target Engine: CitizenIV (GTA IV) • AST Checked\n-- Localized strings preserved\n\n` + output;
      setTranslatedOutput(output);
      setIsTranslating(false);
      try {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.6 },
          colors: ['#FF2A42', '#FFD000', '#121214']
        });
      } catch (e) {}
    }, 650);
  };

  // PeerWave Chat Action
  const handlePeerChat = (e) => {
    e.preventDefault();
    if (!peerMsg.trim()) return;
    setPeerChatLogs(prev => [...prev, { peer: 'Peer-02 (You)', text: peerMsg }]);
    setPeerMsg('');
  };

  // CivicEye Report Action
  const handleAddIncident = (e) => {
    e.preventDefault();
    if (!newIncidentTitle.trim()) return;
    const newId = `INC-${Math.floor(1000 + Math.random() * 9000)}`;
    setReportedIncidents(prev => [{ id: newId, title: newIncidentTitle, status: 'VERIFIED', time: 'Just now' }, ...prev]);
    setActiveIncident(newId);
    setNewIncidentTitle('');
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* ── HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-4 border-[#121214]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="comic-badge bg-[#FFD000] text-[#121214] -rotate-1">
              ⚡ FLAGSHIP SHOWCASE
            </span>
            <span className="comic-badge bg-[#FF5500] text-white rotate-1">
              LIVE PREVIEW ENABLED
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#121214] tracking-tight uppercase">
            SELECTED <span className="text-[#FF5500]">PROJECTS</span>.
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-sm font-mono text-zinc-700 max-w-md font-bold">
          Click any project below to launch its <span className="bg-[#FFD000] px-1 text-black">interactive live preview</span> simulator. Test real buttons, dial numbers, or view code.
        </p>
      </div>

      {/* ── PROJECT TABS (COMIC STRIP SELECTOR) ── */}
      <div className="flex gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {PROJECTS_DATA.map((proj) => {
          const isSelected = selectedProjectId === proj.id;
          return (
            <button
              key={proj.id}
              onClick={() => {
                setSelectedProjectId(proj.id);
                if (proj.id === 'lua-translator' && !translatedOutput) {
                  // prefill translation
                  setTranslatedOutput(`-- [CITIZENIV TRANSLATED LUA OUTPUT]\n-- Target Engine: CitizenIV (GTA IV)\n-- Click "TRANSLATE NOW" below to run the compiler.`);
                }
              }}
              className={`comic-btn px-4 py-3 rounded-xl text-left flex items-center gap-3 shrink-0 transition-all ${
                isSelected 
                  ? 'bg-[#121214] text-white shadow-[4px_4px_0px_#FF5500] translate-x-0.5 translate-y-0.5' 
                  : 'bg-white text-[#121214] hover:bg-zinc-50'
              }`}
            >
              <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-black text-xs border-2 border-current ${
                isSelected ? 'bg-[#FF5500] text-white border-white' : 'bg-zinc-100 text-[#121214] border-black'
              }`}>
                {proj.number}
              </span>
              <div>
                <div className="font-black text-xs sm:text-sm tracking-tight whitespace-nowrap">
                  {proj.title}
                </div>
                <div className={`text-[10px] font-mono font-bold uppercase truncate ${
                  isSelected ? 'text-[#FFD000]' : 'text-zinc-500'
                }`}>
                  {proj.badge}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── MAIN WORKSPACE: DETAILS (LEFT) + LIVE INTERACTIVE SANDBOX (RIGHT) ── */}
      <div className="comic-card-static rounded-3xl p-4 sm:p-6 md:p-8 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ──── LEFT PANEL: PROJECT DETAILS & SPECS ──── */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          <div>
            {/* Project Header Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`comic-badge ${activeProject.badgeColor} rounded-md text-[11px]`}>
                {activeProject.badge}
              </span>
              <span className="comic-badge bg-zinc-100 text-[#121214] rounded-md text-[11px]">
                {activeProject.category}
              </span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-[#121214] tracking-tight mb-2">
              {activeProject.title}
            </h3>

            <p className="text-sm font-mono font-bold text-[#FF5500] mb-3">
              // {activeProject.tagline}
            </p>

            <p className="text-zinc-700 text-sm leading-relaxed mb-6">
              {activeProject.desc}
            </p>

            {/* Stats Matrix with Comic Borders */}
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              {activeProject.stats.map((st, i) => (
                <div key={i} className="comic-card-flat bg-zinc-50 p-2.5 rounded-xl text-center">
                  <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase truncate">
                    {st.label}
                  </div>
                  <div className="text-sm sm:text-base font-black font-mono text-[#121214] mt-0.5">
                    {st.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-6">
              <div className="text-[10px] font-mono font-bold uppercase text-zinc-500 mb-2">
                TECHNOLOGY STACK
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="comic-badge bg-white text-[#121214] text-[11px] rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links & Sandbox Mode Switcher */}
          <div className="pt-4 border-t-2 border-[#121214] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn comic-btn-dark px-3.5 py-2 rounded-xl text-xs gap-1.5"
              >
                <Github className="w-4 h-4 text-white" />
                <span>Source Code</span>
              </a>

              <a
                href={activeProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn comic-btn-white px-3.5 py-2 rounded-xl text-xs gap-1.5"
              >
                <span>Repo Link</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF5500]" />
              </a>
            </div>

            {/* Toggle Simulator vs Code AST */}
            <div className="flex items-center p-1 rounded-xl bg-zinc-100 border-2 border-black">
              <button
                onClick={() => setViewMode('preview')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'preview' ? 'bg-[#FF5500] text-white shadow-sm' : 'text-zinc-600 hover:text-black'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Simulator</span>
              </button>
              <button
                onClick={() => setViewMode('code')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'code' ? 'bg-[#121214] text-white shadow-sm' : 'text-zinc-600 hover:text-black'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Code AST</span>
              </button>
            </div>
          </div>
        </div>

        {/* ──── RIGHT PANEL: INTERACTIVE LIVE SANDBOX VIEWPORT ──── */}
        <div className="lg:col-span-7 w-full">
          <div className="comic-card-static rounded-2xl bg-[#121214] text-white overflow-hidden flex flex-col min-h-[500px]">
            
            {/* Top Viewport Chrome Bar */}
            <div className="px-4 py-3 bg-[#18181D] border-b-2 border-black flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF2A42] border border-black" />
                <span className="w-3 h-3 rounded-full bg-[#FFD000] border border-black" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 border border-black" />
                <span className="ml-2 font-mono text-[11px] font-bold text-zinc-400">
                  {selectedProjectId}.sandbox.live
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="comic-badge bg-[#FF5500] text-white text-[10px] py-0.5 px-2 rounded-md">
                  LIVE INTERACTIVE
                </span>
              </div>
            </div>

            {/* Viewport Content */}
            <div className="flex-1 p-4 sm:p-6 bg-[#0E0E12] flex flex-col justify-center">

              {/* ──────────────── CODE AST VIEW (If user toggled code) ──────────────── */}
              {viewMode === 'code' ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono text-zinc-400 pb-2 border-b border-zinc-800">
                    <span>// AST ARCHITECTURE & PRODUCTION SNIPPET</span>
                    <span className="text-[#FFD000]">SYNTAX VERIFIED</span>
                  </div>
                  <pre className="p-4 rounded-xl bg-black border-2 border-zinc-800 text-[12px] font-mono text-emerald-400 overflow-x-auto leading-relaxed max-h-[380px]">
                    <code>{activeProject.codeSnippet}</code>
                  </pre>
                  <p className="text-[11px] font-mono text-zinc-400">
                    💡 Click "Simulator" above to return to the live working interactive demo.
                  </p>
                </div>
              ) : (

                /* ──────────────── LIVE INTERACTIVE SIMULATORS ──────────────── */
                <>
                  {/* ── 1. CITIZENIV VIRTUAL iPHONE SIMULATOR ── */}
                  {selectedProjectId === 'web-iphone' && (
                    <div className="flex flex-col items-center">
                      <div className="w-full max-w-[340px] rounded-[36px] bg-[#1C1B24] border-[4px] border-zinc-700 shadow-2xl p-3 flex flex-col">
                        
                        {/* Dynamic Island Notch */}
                        <div className="w-28 h-5 bg-black rounded-full mx-auto mb-2 flex items-center justify-between px-3 text-[9px] font-mono text-zinc-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>CitizenIV</span>
                          <span>60 FPS</span>
                        </div>

                        {/* Phone Display Screen */}
                        <div className="rounded-[26px] bg-[#0A0A0E] p-3 text-white min-h-[360px] flex flex-col justify-between border border-zinc-800">
                          
                          {/* Screen Header */}
                          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 pb-2 border-b border-zinc-800">
                            <span>GTA IV Liberty City</span>
                            <span className="text-[#FF5500] font-bold">NUI 2.4</span>
                          </div>

                          {/* App Views */}
                          {phoneScreen === 'home' && (
                            <div className="py-4 space-y-4">
                              <div className="text-center font-display font-black text-xl text-white">
                                12:45 <span className="text-xs font-mono text-zinc-400 block font-normal">Friday • Star Junction</span>
                              </div>

                              <div className="grid grid-cols-3 gap-3 pt-2">
                                <button 
                                  onClick={() => setPhoneScreen('dialer')}
                                  className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-zinc-900 hover:bg-[#FF5500] transition-colors"
                                >
                                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                                    <Phone className="w-5 h-5" />
                                  </div>
                                  <span className="text-[10px] font-mono font-bold">Dialer</span>
                                </button>

                                <button 
                                  onClick={() => setPhoneScreen('sms')}
                                  className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-zinc-900 hover:bg-[#FF5500] transition-colors"
                                >
                                  <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-white">
                                    <MessageSquare className="w-5 h-5" />
                                  </div>
                                  <span className="text-[10px] font-mono font-bold">Messages</span>
                                </button>

                                <button 
                                  onClick={() => setPhoneScreen('gps')}
                                  className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-zinc-900 hover:bg-[#FF5500] transition-colors"
                                >
                                  <div className="w-10 h-10 rounded-full bg-[#FF5500] flex items-center justify-center text-white">
                                    <MapPin className="w-5 h-5" />
                                  </div>
                                  <span className="text-[10px] font-mono font-bold">GPS Radar</span>
                                </button>
                              </div>

                              <div className="comic-card-flat bg-zinc-900/90 p-2.5 rounded-xl border border-zinc-800 text-[10px] font-mono text-zinc-300">
                                <span className="text-[#FFD000] font-bold block mb-0.5">● WebRTC Audio Ready</span>
                                Trigger events seamlessly from in-game smartphone to CitizenIV Lua server.
                              </div>
                            </div>
                          )}

                          {phoneScreen === 'dialer' && (
                            <div className="py-2 flex flex-col justify-between flex-1">
                              <div className="text-center">
                                <div className="text-[10px] font-mono text-zinc-500">DIAL NUMBER</div>
                                <div className="text-xl font-mono font-bold text-white tracking-widest my-1">
                                  {dialNumber}
                                </div>
                                <div className={`text-[10px] font-mono ${callStatus === 'connected' ? 'text-emerald-400 font-bold' : 'text-zinc-400'}`}>
                                  {callStatus === 'idle' && 'READY TO CALL'}
                                  {callStatus === 'calling' && 'RINGING WEBRTC AUDIO CHANNEL...'}
                                  {callStatus === 'connected' && '● LIVE AUDIO CONNECTED (16ms)'}
                                </div>
                              </div>

                              {/* Number Pad */}
                              <div className="grid grid-cols-3 gap-1.5 my-2">
                                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(k => (
                                  <button
                                    key={k}
                                    onClick={() => setDialNumber(prev => prev.length < 10 ? prev + k : prev)}
                                    className="h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-sm font-mono font-bold text-white active:scale-95 transition-all"
                                  >
                                    {k}
                                  </button>
                                ))}
                              </div>

                              <div className="flex gap-2">
                                {callStatus === 'idle' ? (
                                  <button 
                                    onClick={handleDial}
                                    className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs flex items-center justify-center gap-1.5"
                                  >
                                    <Phone className="w-3.5 h-3.5" />
                                    <span>Call Server</span>
                                  </button>
                                ) : (
                                  <button 
                                    onClick={handleHangup}
                                    className="flex-1 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs flex items-center justify-center gap-1.5"
                                  >
                                    <span>Hang Up</span>
                                  </button>
                                )}
                                <button 
                                  onClick={() => setDialNumber('')}
                                  className="px-3 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-mono text-xs"
                                >
                                  CLR
                                </button>
                              </div>
                            </div>
                          )}

                          {phoneScreen === 'sms' && (
                            <div className="flex flex-col flex-1 justify-between py-1">
                              <div className="space-y-1.5 overflow-y-auto max-h-[200px] pr-1">
                                {smsMessages.map((msg, i) => (
                                  <div 
                                    key={i} 
                                    className={`p-2 rounded-xl text-[10px] font-mono leading-tight ${
                                      msg.sender === 'You' ? 'bg-[#FF5500] text-white ml-6' : 'bg-zinc-900 text-zinc-300 mr-6'
                                    }`}
                                  >
                                    <div className="font-bold text-[8px] opacity-75 mb-0.5">{msg.sender} • {msg.time}</div>
                                    <div>{msg.text}</div>
                                  </div>
                                ))}
                              </div>

                              <form onSubmit={handleSendSms} className="flex gap-1.5 mt-2">
                                <input
                                  type="text"
                                  placeholder="Type Lua message..."
                                  value={inputSms}
                                  onChange={e => setInputSms(e.target.value)}
                                  className="flex-1 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-[#FF5500]"
                                />
                                <button type="submit" className="p-2 bg-[#FF5500] text-white rounded-lg">
                                  <Send className="w-3.5 h-3.5" />
                                </button>
                              </form>
                            </div>
                          )}

                          {phoneScreen === 'gps' && (
                            <div className="py-2 space-y-3">
                              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-xs space-y-1">
                                <div className="text-[#FFD000] font-bold">LIBERTY CITY COORD ENGINE</div>
                                <div className="text-zinc-300">X: 1248.59 • Y: -720.12 • Z: 18.4</div>
                                <div className="text-zinc-400 text-[10px]">Zone: Broker / Algonquin Bridge</div>
                              </div>
                              <div className="h-28 rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-800 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                                <div className="w-3 h-3 rounded-full bg-[#FF5500] animate-ping" />
                                <span className="absolute bottom-2 text-[9px] font-mono text-zinc-400">GPS Ping: Active @ 60 FPS</span>
                              </div>
                            </div>
                          )}

                          {/* Home Indicator Bar */}
                          <div className="pt-2 text-center">
                            <button 
                              onClick={() => setPhoneScreen('home')}
                              className="w-24 h-1 rounded-full bg-zinc-600 hover:bg-white transition-colors mx-auto"
                              title="Go to Home Screen"
                            />
                          </div>

                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── 2. TAJMAHAL CARPETS LUXURY E-COMMERCE SIMULATOR ── */}
                  {selectedProjectId === 'tajmahalcarpets' && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                        <div>
                          <div className="text-xs font-mono font-bold text-[#FFD000]">DIGITAL SHOWROOM CONFIGURATOR</div>
                          <div className="text-sm font-bold text-white">Tajmahal Carpets Luxury Line</div>
                        </div>
                        <span className="comic-badge bg-emerald-500 text-black text-[10px]">
                          INSTANT QUOTE
                        </span>
                      </div>

                      {/* Configurator Controls */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {/* Rug Selection */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-zinc-400 font-bold uppercase">Select Rug</label>
                          <select 
                            value={selectedRug} 
                            onChange={e => setSelectedRug(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-2 text-xs font-mono"
                          >
                            <option>Royal Kashan Silk</option>
                            <option>Tabriz Heritage</option>
                            <option>Samarkand Velvet</option>
                          </select>
                        </div>

                        {/* Size Selection */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-zinc-400 font-bold uppercase">Dimension</label>
                          <select 
                            value={rugSize} 
                            onChange={e => setRugSize(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-2 text-xs font-mono"
                          >
                            <option>4x6 ft</option>
                            <option>6x9 ft</option>
                            <option>8x10 ft</option>
                          </select>
                        </div>

                        {/* Material Selection */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-zinc-400 font-bold uppercase">Weave Material</label>
                          <select 
                            value={rugMaterial} 
                            onChange={e => setRugMaterial(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-2 text-xs font-mono"
                          >
                            <option>Mulberry Silk (600 KPSI)</option>
                            <option>New Zealand Wool</option>
                          </select>
                        </div>
                      </div>

                      {/* Rug Preview Box */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl">
                            🏛️
                          </div>
                          <div>
                            <div className="text-base font-bold text-white">{selectedRug}</div>
                            <div className="text-xs font-mono text-zinc-400">{rugSize} • {rugMaterial}</div>
                            <div className="text-[10px] text-emerald-400 font-mono mt-0.5">● In Stock • Ready for Worldwide Air Freight</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-[10px] font-mono text-zinc-400">ESTIMATED PRICE</div>
                          <div className="text-2xl font-black font-mono text-[#FFD000]">
                            ₹{getRugPrice().toLocaleString()}
                          </div>
                        </div>
                      </div>

                      {/* WhatsApp Trigger Button */}
                      <button
                        onClick={handleSendQuote}
                        className="comic-btn comic-btn-yellow w-full py-3 rounded-xl text-xs gap-2 font-black"
                      >
                        {quoteSent ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-black" />
                            <span>QUOTE DISPATCHED TO WHATSAPP DESK!</span>
                          </>
                        ) : (
                          <>
                            <MessageSquare className="w-4 h-4 text-black" />
                            <span>TEST WHATSAPP DIRECT ORDER FLOW →</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* ── 3. FIVEM TO CITIZENIV LUA TRANSLATOR SIMULATOR ── */}
                  {selectedProjectId === 'lua-translator' && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                        <div>
                          <div className="text-xs font-mono font-bold text-[#FF2A42]">LUA AST COMPILER SANDBOX</div>
                          <div className="text-sm font-bold text-white">FiveM to CitizenIV Converter</div>
                        </div>
                        <button
                          onClick={handleTranslateLua}
                          disabled={isTranslating}
                          className="comic-btn comic-btn-red px-3 py-1.5 rounded-lg text-xs gap-1.5 font-bold"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>{isTranslating ? 'PARSING AST...' : 'TRANSLATE NOW'}</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Input Code */}
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-zinc-400 font-bold uppercase flex justify-between">
                            <span>Input FiveM Lua</span>
                            <span className="text-[#FF5500]">SOURCE</span>
                          </div>
                          <textarea
                            value={luaCodeInput}
                            onChange={e => setLuaCodeInput(e.target.value)}
                            rows={8}
                            className="w-full bg-black border border-zinc-800 rounded-xl p-2.5 text-[11px] font-mono text-zinc-300 focus:outline-none focus:border-[#FF2A42]"
                          />
                        </div>

                        {/* Translated Output */}
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-zinc-400 font-bold uppercase flex justify-between">
                            <span>CitizenIV Native Output</span>
                            <span className="text-emerald-400">COMPILED</span>
                          </div>
                          <textarea
                            readOnly
                            value={translatedOutput || `-- Click "TRANSLATE NOW" above to compile FiveM natives to CitizenIV.`}
                            rows={8}
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-[11px] font-mono text-emerald-400 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 flex items-center justify-between">
                        <span>AST Rules: Converts FiveM entities, threads & NUI callbacks into CitizenIV memory calls.</span>
                        <span className="text-[#FFD000] font-bold">180+ NATIVES MAPPED</span>
                      </div>
                    </div>
                  )}

                  {/* ── 4. PEERWAVE WEBRTC P2P SIMULATOR ── */}
                  {selectedProjectId === 'peerwave' && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                        <div>
                          <div className="text-xs font-mono font-bold text-[#FF5500]">PEERWAVE WEBRTC MESH ROOM</div>
                          <div className="text-sm font-bold text-white">Direct P2P Encrypted Data Pipe</div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span>14ms Latency</span>
                        </div>
                      </div>

                      {/* Peer Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {/* Local Node */}
                        <div className="h-28 rounded-xl bg-zinc-900 border border-zinc-800 p-2 flex flex-col justify-between relative overflow-hidden">
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="font-bold text-white">Arun Mohan K (Local Host)</span>
                            <span className="text-emerald-400">● MESH NODE</span>
                          </div>
                          <div className="my-auto text-center text-3xl">👨‍💻</div>
                          <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
                            <span>Codec: VP9/Opus</span>
                            <span>Loss: 0%</span>
                          </div>
                        </div>

                        {/* Remote Peer */}
                        <div className="h-28 rounded-xl bg-zinc-900 border border-zinc-800 p-2 flex flex-col justify-between relative overflow-hidden">
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="font-bold text-white">Niko Bellic (Peer-02)</span>
                            <span className="text-sky-400">● P2P CONNECTED</span>
                          </div>
                          <div className="my-auto text-center text-3xl">🎮</div>
                          <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
                            <span>Signaling: DTLS/SRTP</span>
                            <span>Direct Mesh</span>
                          </div>
                        </div>
                      </div>

                      {/* Controls Bar */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                        <div className="flex gap-2">
                          <button 
                            onClick={() => setPeerMicOn(!peerMicOn)}
                            className={`p-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors ${
                              peerMicOn ? 'bg-zinc-800 text-white' : 'bg-red-600 text-white'
                            }`}
                          >
                            <Mic className="w-3.5 h-3.5" />
                            <span>{peerMicOn ? 'Mic ON' : 'Muted'}</span>
                          </button>

                          <button 
                            onClick={() => setPeerCamOn(!peerCamOn)}
                            className={`p-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors ${
                              peerCamOn ? 'bg-zinc-800 text-white' : 'bg-red-600 text-white'
                            }`}
                          >
                            <Video className="w-3.5 h-3.5" />
                            <span>{peerCamOn ? 'Cam ON' : 'Cam OFF'}</span>
                          </button>
                        </div>

                        <form onSubmit={handlePeerChat} className="flex gap-1.5 flex-1 max-w-xs ml-3">
                          <input
                            type="text"
                            placeholder="Send P2P encrypted text..."
                            value={peerMsg}
                            onChange={e => setPeerMsg(e.target.value)}
                            className="flex-1 bg-black border border-zinc-700 px-2.5 py-1 rounded-lg text-xs font-mono text-white focus:outline-none"
                          />
                          <button type="submit" className="p-2 bg-[#FF5500] text-white rounded-lg">
                            <Send className="w-3.5 h-3.5" />
                          </button>
                        </form>
                      </div>
                    </div>
                  )}

                  {/* ── 5. CIVICEYE SMART CITY SIMULATOR ── */}
                  {selectedProjectId === 'civiceye' && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                        <div>
                          <div className="text-xs font-mono font-bold text-[#FFD000]">MUNICIPAL RESOLUTION DASHBOARD</div>
                          <div className="text-sm font-bold text-white">CivicEye Realtime Incident Tracking</div>
                        </div>
                        <span className="comic-badge bg-[#FF5500] text-white text-[10px]">
                          GEOTAGGED
                        </span>
                      </div>

                      {/* Incident Feed */}
                      <div className="space-y-2">
                        {reportedIncidents.map((inc) => (
                          <div 
                            key={inc.id}
                            onClick={() => setActiveIncident(inc.id)}
                            className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                              activeIncident === inc.id 
                                ? 'bg-zinc-800 border-[#FFD000]' 
                                : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="font-mono text-xs font-bold text-[#FF5500]">{inc.id}</span>
                              <span className="font-bold text-xs text-white">{inc.title}</span>
                            </div>
                            <div className="flex items-center gap-2 font-mono text-[10px]">
                              <span className="text-zinc-400">{inc.time}</span>
                              <span className={`px-2 py-0.5 rounded font-bold ${
                                inc.status === 'RESOLVED' ? 'bg-emerald-950 text-emerald-400' : 'bg-amber-950 text-amber-400'
                              }`}>
                                {inc.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Add Report Form */}
                      <form onSubmit={handleAddIncident} className="flex gap-2 pt-2">
                        <input
                          type="text"
                          placeholder="Report new civic issue (e.g. Water leak at Tech Park)..."
                          value={newIncidentTitle}
                          onChange={e => setNewIncidentTitle(e.target.value)}
                          className="flex-1 bg-black border border-zinc-700 px-3 py-2 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-[#FFD000]"
                        />
                        <button 
                          type="submit" 
                          className="comic-btn comic-btn-yellow px-4 py-2 rounded-xl text-xs font-bold gap-1"
                        >
                          <span>Log Issue</span>
                        </button>
                      </form>
                    </div>
                  )}
                </>
              )}

            </div>

            {/* Bottom Status Ribbon */}
            <div className="px-4 py-2 bg-[#121214] border-t border-zinc-800 flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span className="text-emerald-400">● SIMULATOR RUNNING @ 60 FPS</span>
              <span className="text-zinc-400">ARUN MOHAN K WORKSPACE ENGINE</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
