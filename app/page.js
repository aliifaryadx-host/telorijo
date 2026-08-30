"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [particles, setParticles] = useState([]);
  const [showPlayModal, setShowPlayModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [glowingCard, setGlowingCard] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const audioRef = useRef(typeof Audio !== "undefined" ? new Audio("/assets/music.mp3") : null);
  const serverIp = "telorijo.wdb.id";
  const serverPort = "5073";

  useEffect(() => {
    const colors = ["bg-yellow-300","bg-pink-300","bg-blue-300","bg-purple-300","bg-emerald-300"];
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 6) + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(generated);
  }, []);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (e, id, nav) => {
    e.preventDefault();
    setActiveNav(nav);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWelcomeClose = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    setShowWelcome(false);
  };

  const team = [
    { name: "Leminghau", role: "Owner", img: "/assets/1.png", bg: "bg-purple-100" },
    { name: "Bulan", role: "Admin", img: "/assets/2.png", bg: "bg-amber-100" },
    { name: "aoi", role: "Admin", img: "/assets/3.png", bg: "bg-pink-100" },
    { name: "Yonn", role: "Admin", img: "/assets/4.png", bg: "bg-blue-100" },
    { name: "Bintang", role: "Admin", img: "/assets/5.png", bg: "bg-green-100" },
    { name: "Aliifaryazakii", role: "Web Developer", img: "/assets/6.png", bg: "bg-indigo-100" },
    { name: "Ihsan", role: "Builder", img: "/assets/7.png", bg: "bg-orange-100" },
    { name: "anyak", role: "Builder", img: "/assets/8.png", bg: "bg-teal-100" },
    { name: "Hanza", role: "Top Balance 1", img: "/assets/9.png", bg: "bg-yellow-100" },
    { name: "HarMewing", role: "Top Balance 2", img: "/assets/10.png", bg: "bg-rose-100" },
  ];

  const features = [
    { title: "PyroFishing", description: "Cast your line and reel in more than just fish — unlock rewards, progress through custom tiers, and master the art of fishing.", icon: "/assets/pyrofishing.png" },
    { title: "PyroFarming", description: "Grow and harvest with unique farming mechanics, unlock rare crops, and upgrade your skills as you farm your way to success.", icon: "/assets/pyrofarming.png" },
    { title: "Custom Enchants", description: "Take your gear beyond vanilla Minecraft with powerful custom enchantments that give you the edge in combat and exploration.", icon: "/assets/enchant.png" },
    { title: "Duels", description: "Challenge friends or rivals to fair 1v1 battles and prove your skills in fast-paced, balanced PvP combat.", icon: "/assets/duels.png" },
    { title: "Spawners", description: "Create custom mob farms, grind resources efficiently, and build your own path to riches with spawners for every strategy.", icon: "/assets/spawners.png" },
    { title: "Cosmetics", description: "Stand out with stylish cosmetics — from hats and particles to special effects that let you express your unique personality.", icon: "/assets/cosmetics.png" },
  ];

  const faqs = [
    { q: "How do I join TelorIjo?", a: "Launch Minecraft Bedrock or Java Edition, go to Multiplayer, click Add Server and use our IP: telorijo.wdb.id with port 5073" },
    { q: "Do I need mods to play?", a: "No mods are required. Just join with vanilla Minecraft." },
    { q: "Is TelorIjo cracked or premium?", a: "TelorIjo supports both cracked and premium accounts, so everyone is welcome to join." },
    { q: "Is there a Discord server?", a: "Yes. Join our Discord community to meet other players, get updates, and participate in events.", linkText: "Join Discord Server", linkUrl: "https://discord.gg/tpAW393N7" },
    { q: "What game modes are available?", a: "We offer unique modes like Survival SMP, Custom Dungeons, and seasonal events. More features are coming soon." },
    { q: "Can I apply for staff?", a: "Yes. Keep an eye on our Discord or website announcements for staff applications.", linkText: "Staff Application Form", linkUrl: "#" },
    { q: "Can I apply for streamer rank?", a: "Absolutely. If you create content and want to become an official streamer, apply here.", linkText: "Streamer Application Form", linkUrl: "#" },
  ];

  const navItems = [
    { id: "home", label: "Home", section: null },
    { id: "about", label: "About", section: "about" },
    { id: "features", label: "Features", section: "features" },
    { id: "team", label: "Team", section: "team" },
    { id: "faq", label: "FAQ", section: "faq" },
  ];

  const rules = [
    { rule: "No griefing or stealing from other players.", punishment: "Permanent ban" },
    { rule: "No hacking, cheating, or using unfair advantages.", punishment: "Permanent ban" },
    { rule: "Respect all players and staff. No toxicity, harassment, or discrimination.", punishment: "Temporary ban (1-7 days) or permanent" },
    { rule: "Do not spam or advertise other servers.", punishment: "Warning, then temporary ban" },
    { rule: "Keep chat in English to ensure communication for everyone.", punishment: "Warning" },
    { rule: "Do not exploit bugs or glitches. Report them immediately.", punishment: "Temporary ban" },
    { rule: "Building near spawn or in protected areas requires staff permission.", punishment: "Warning and removal" },
    { rule: "PvP is allowed only in designated areas, unless both parties agree.", punishment: "Warning" },
  ];

  const handleCardClick = (idx) => {
    setGlowingCard(idx);
    setTimeout(() => setGlowingCard(null), 800);
  };

  return (
    <main className="relative min-h-screen bg-[#faf8f5] text-gray-800 font-sans selection:bg-amber-200 overflow-x-hidden">
      
      <audio ref={audioRef} src="/assets/music.mp3" loop />

      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {particles.map((p) => (
          <div key={p.id} className={`absolute rounded-full ${p.color} animate-pulse blur-[0.5px]`} style={{ width: p.size, height: p.size, left: p.left, bottom: "-20px", opacity: p.opacity, animation: `floatUp ${p.duration} linear infinite`, animationDelay: p.delay }} />
        ))}
      </div>

      <style jsx global>{`
        @keyframes floatUp { 0% { transform: translateY(0) scale(0.8); opacity: 0; } 10% { opacity: 0.6; } 90% { opacity: 0.6; } 100% { transform: translateY(-105vh) scale(1.2); opacity: 0; } }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideRight { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes slideLeft { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes navTab { 0% { transform: scaleX(0); opacity: 0; } 100% { transform: scaleX(1); opacity: 1; } }
        @keyframes neonGlow { 0% { box-shadow: inset 0 -100% 0 0 rgba(251,191,36,0); } 20% { box-shadow: inset 0 0 20px 5px rgba(251,191,36,0.6); } 100% { box-shadow: inset 0 100% 0 0 rgba(251,191,36,0); } }
        @keyframes whiteLine { 0% { width: 0%; opacity: 0; } 50% { width: 100%; opacity: 1; } 100% { width: 0%; opacity: 0; } }
        @keyframes paperFloat { 0% { transform: translate(0,0) rotate(0deg) scale(1); } 25% { transform: translate(5px,-8px) rotate(2deg) scale(1.02); } 50% { transform: translate(-3px,5px) rotate(-1deg) scale(0.98); } 75% { transform: translate(7px,-3px) rotate(3deg) scale(1.01); } 100% { transform: translate(0,0) rotate(0deg) scale(1); } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-paper { animation: paperFloat 4s ease-in-out infinite; }
        .nav-tab-active { position: absolute; bottom: -4px; left: 0; right: 0; height: 3px; background: #fbbf24; border-radius: 9999px; animation: navTab 0.3s ease-out forwards; }
        html { scroll-behavior: smooth; }
        .btn-press:active { transform: scale(0.92) translateY(2px); transition: transform 0.1s ease; }
        .card-hover { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .card-hover:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 40px -12px rgba(0,0,0,0.15); }
        .card-glow { animation: neonGlow 0.8s ease-out forwards; }
        .card-white-line { position: relative; }
        .card-white-line::after { content: ''; position: absolute; bottom: 0; left: 0; height: 2px; background: rgba(255,255,255,0.8); box-shadow: 0 0 10px 2px rgba(255,255,255,0.6); animation: whiteLine 0.8s ease-out forwards; }
        .team-card { transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1); cursor: pointer; flex-shrink: 0; }
        .team-card:hover { transform: translateY(-8px) scale(1.05); }
        .team-card:active { transform: scale(0.92); }
        .team-track { display: flex; gap: 1rem; width: max-content; will-change: transform; }
        .team-track-right { animation: slideRight 35s linear infinite; }
        .team-track-left { animation: slideLeft 35s linear infinite; }
        .team-container { overflow: hidden; width: 100%; position: relative; }
        .paper-image { width: 64px; height: 64px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .paper-image-large { width: 80px; height: 80px; object-fit: cover; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
      `}</style>

      {showWelcome && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl text-center border border-amber-200">
            <img src="/assets/logo.png" alt="TelorIjo" className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-2xl font-black text-gray-900">Welcome to TelorIjo</h2>
            <p className="text-sm text-gray-600 mt-2">Enjoy our server with immersive music. Click the button below to start your adventure!</p>
            <button onClick={handleWelcomeClose} className="mt-6 px-8 py-3 bg-amber-400 hover:bg-amber-500 active:scale-95 text-gray-900 font-bold rounded-full text-sm shadow-lg transition-all">Play Music & Enter</button>
          </div>
        </div>
      )}

      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="flex items-center justify-between w-full max-w-4xl px-6 py-2.5 bg-gray-900/80 backdrop-blur-md rounded-full text-white shadow-2xl border border-white/10 transition-all">
          <a href="#" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); setActiveNav("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <img src="/assets/logo.png" alt="TelorIjo Logo" className="w-8 h-8 rounded-full object-cover group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-extrabold tracking-wider text-amber-300 font-mono text-base">TELORIJO</span>
          </a>
          <div className="hidden md:flex items-center gap-4 text-xs font-semibold text-gray-300">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.section ? (
                  <a href={`#${item.section}`} onClick={(e) => scrollToSection(e, item.section, item.id)} className={`px-3 py-1.5 rounded-lg transition-all duration-300 relative block btn-press ${activeNav === item.id ? "text-amber-300" : "hover:text-amber-300"}`}>
                    {item.label}
                    {activeNav === item.id && <span className="nav-tab-active" />}
                  </a>
                ) : (
                  <a href="#" onClick={(e) => { e.preventDefault(); setActiveNav("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={`px-3 py-1.5 rounded-lg transition-all duration-300 relative block btn-press ${activeNav === "home" ? "text-amber-300" : "hover:text-amber-300"}`}>
                    Home
                    {activeNav === "home" && <span className="nav-tab-active" />}
                  </a>
                )}
              </div>
            ))}
          </div>
          <button onClick={() => setShowPlayModal(true)} className="px-5 py-2 bg-[#fbe38e] hover:bg-[#f3d36b] active:scale-95 text-gray-900 font-bold rounded-full text-xs shadow-md hover:shadow-amber-300/30 transition-all transform hover:-translate-y-0.5 btn-press">Play with us</button>
        </nav>
      </div>

      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover brightness-[0.45]">
          <source src="/assets/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="hidden lg:block absolute top-24 right-10 z-20 max-w-xs bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-left text-white/90 shadow-2xl hover:bg-black/50 transition">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-1">
            <span className="animate-ping w-2 h-2 rounded-full bg-amber-400 inline-block"></span> Notice
          </div>
          <p className="text-[11px] text-gray-300 leading-snug">Connect to <span className="text-amber-300 font-semibold">{serverIp}:{serverPort}</span></p>
        </div>
        <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center">
          <img src="/assets/logo.png" alt="TelorIjo Big Logo" className="w-36 h-36 md:w-44 md:h-44 mb-3 drop-shadow-2xl transition hover:scale-110 hover:rotate-3 duration-500 cursor-pointer" onClick={() => setShowPlayModal(true)} />
          <h1 className="text-4xl md:text-6xl font-black text-amber-100 tracking-tight drop-shadow-lg">Welcome to <span className="text-amber-300">TelorIjo</span></h1>
          <p className="mt-4 text-xs md:text-sm text-gray-200 leading-relaxed max-w-2xl font-medium drop-shadow">Adventure awaits on <span className="font-bold text-white">TelorIjo</span>, a modern Minecraft server built for players who seek creativity, challenge, and community. Build, explore, and conquer unique worlds with friends.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={() => setShowPlayModal(true)} className="px-6 py-3 bg-[#fbe38e] hover:bg-[#f3d36b] active:scale-95 text-gray-900 font-bold rounded-full text-xs shadow-xl hover:shadow-amber-400/20 transition-all transform hover:-translate-y-1 btn-press">Play Now</button>
            <a href="https://discord.gg/tpAW393N7" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-black/40 hover:bg-black/60 text-white font-semibold rounded-full text-xs border border-white/20 backdrop-blur-md transition-all transform hover:-translate-y-1 btn-press">Join Discord</a>
            <button onClick={() => setShowRulesModal(true)} className="px-6 py-3 bg-black/40 hover:bg-black/60 text-white font-semibold rounded-full text-xs border border-white/20 backdrop-blur-md transition-all transform hover:-translate-y-1 btn-press">Rules</button>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-20 py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-50 transform hover:scale-[1.02] transition-transform duration-500 group">
            <img src="/assets/about.jpg" onError={(e) => { e.target.src = "/assets/logo.png"; }} alt="About TelorIjo" className="w-full h-[320px] md:h-[380px] object-cover rounded-2xl" />
            <img src="/assets/new.png" alt="decoration" className="absolute bottom-4 right-4 z-10 paper-image-large animate-paper" />
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-widest text-amber-500 uppercase">About Our Server</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">Welcome to <span className="text-amber-500">TelorIjo</span></h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-xs md:text-sm"><span className="font-semibold text-gray-800">Telorijo.wdb.id</span> is a proudly created Minecraft Survival Multiplayer (SMP) server created with the goal of connecting players in a fun, supportive, and healthy community.</p>
            <p className="mt-3 text-gray-600 leading-relaxed text-xs md:text-sm">Whether you're a casual adventurer, a competitive builder, or someone who just wants to hang out and meet new friends, TelorIjo offers a welcoming space to play Minecraft.</p>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-20 py-24 px-6 bg-white/60 backdrop-blur-sm border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Discover Our <span className="text-amber-500">Server Features</span></h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">Dive into a Minecraft experience crafted for <span className="text-amber-500 font-medium">fun, creativity, and adventure</span>.</p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => (
              <div key={idx} onClick={() => handleCardClick(idx)} className={`p-6 rounded-2xl bg-[#faf8f5] hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group card-hover cursor-pointer btn-press relative card-white-line ${glowingCard === idx ? 'card-glow' : ''}`}>
                <div className="w-16 h-16 mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition duration-300">
                  <img src={item.icon} alt={item.title} className="max-w-full max-h-full object-contain drop-shadow-md" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="relative z-20 py-24 px-6 max-w-5xl mx-auto text-center overflow-hidden">
        <div className="mb-12 rounded-3xl overflow-hidden shadow-xl border-4 border-white max-w-4xl mx-auto transform hover:scale-[1.01] transition duration-300 relative group">
          <img src="/assets/team-banner.jpg" onError={(e) => { e.target.style.display = "none"; }} alt="TelorIjo Staff Team" className="w-full h-48 md:h-64 object-cover" />
          <img src="/assets/new.png" alt="decoration" className="absolute bottom-4 right-4 z-10 paper-image-large animate-paper" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Meet Our Team</h2>
        <p className="mt-2 text-gray-500 max-w-2xl mx-auto text-xs md:text-sm">We're a dedicated team of staff, moderators, and server owners working behind the scenes.</p>
        <div className="mt-10 team-container">
          <div className="team-track team-track-right mb-6">
            {[...team.slice(0,5), ...team.slice(0,5)].map((m, i) => (
              <div key={i} className="team-card flex flex-col items-center p-3.5 w-28 md:w-32 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl">
                <div className={`w-14 h-14 rounded-full ${m.bg} flex items-center justify-center mb-2 overflow-hidden shadow-inner p-1`}>
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover rounded-full" onError={(e) => { e.target.src = "https://mc-heads.net/avatar/MHF_Steve/64"; }} />
                </div>
                <span className="font-bold text-xs text-gray-800 truncate w-full">{m.name}</span>
                <span className="text-[10px] text-gray-400 font-medium">{m.role}</span>
              </div>
            ))}
          </div>
          <div className="team-track team-track-left">
            {[...team.slice(5,10), ...team.slice(5,10)].map((m, i) => (
              <div key={i} className="team-card flex flex-col items-center p-3.5 w-28 md:w-32 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl">
                <div className={`w-14 h-14 rounded-full ${m.bg} flex items-center justify-center mb-2 overflow-hidden shadow-inner p-1`}>
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover rounded-full" onError={(e) => { e.target.src = "https://mc-heads.net/avatar/MHF_Steve/64"; }} />
                </div>
                <span className="font-bold text-xs text-gray-800 truncate w-full">{m.name}</span>
                <span className="text-[10px] text-gray-400 font-medium">{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative z-20 py-24 px-6 bg-white/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-2 text-gray-500 text-xs md:text-sm">Everything you need to know about playing and enjoying TelorIjo.</p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                <button onClick={() => toggleFaq(idx)} className="w-full p-5 flex justify-between items-center text-left font-bold text-gray-800 text-xs md:text-sm focus:outline-none btn-press">
                  <span>{faq.q}</span>
                  <span className={`text-amber-500 transform transition-transform duration-300 text-xs ${openFaq === idx ? "rotate-180" : "rotate-0"}`}>▼</span>
                </button>
                <div className={`transition-all duration-300 ease-in-out px-5 ${openFaq === idx ? "max-h-48 pb-5 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"}`}>
                  <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-50 pt-3">{faq.a}</p>
                  {faq.linkText && <a href={faq.linkUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs font-semibold py-1.5 px-4 rounded-xl bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors btn-press">{faq.linkText}</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showRulesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 shadow-2xl border border-gray-100 relative">
            <button onClick={() => setShowRulesModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition btn-press">✕</button>
            <div className="text-center mb-6">
              <img src="/assets/logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-3" />
              <h3 className="text-2xl font-black text-gray-900">Server Rules</h3>
              <p className="text-xs text-gray-500 mt-1">Follow these rules to ensure a great experience for everyone.</p>
            </div>
            <div className="space-y-3">
              {rules.map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-amber-500 text-sm min-w-[24px]">#{idx+1}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{item.rule}</p>
                      <p className="text-xs text-red-500 mt-1">Penalty: {item.punishment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button onClick={() => setShowRulesModal(false)} className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full text-xs transition btn-press">Close</button>
            </div>
          </div>
        </div>
      )}

      {showPlayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 relative">
            <button onClick={() => setShowPlayModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition btn-press">✕</button>
            <div className="text-center">
              <img src="/assets/logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-3" />
              <h3 className="text-xl font-black text-gray-900">Join TelorIjo Server</h3>
              <p className="text-xs text-gray-500 mt-1">Copy the IP address below to join in Minecraft.</p>
              <div className="mt-5 p-4 bg-amber-50 rounded-2xl border border-amber-200 text-left">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-bold text-gray-400 uppercase">Server IP</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">Java & Bedrock</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-xl px-3 py-2 border border-amber-200">
                  <code className="text-sm font-mono font-bold text-gray-800">{serverIp}</code>
                  <button onClick={() => copyToClipboard(serverIp)} className="text-amber-600 hover:text-amber-800 text-xs font-semibold px-2 py-1 hover:bg-amber-50 rounded-lg transition btn-press">{copied ? "Copied!" : "Copy"}</button>
                </div>
              </div>
              <div className="mt-3 p-3 bg-gray-50 rounded-xl border border-gray-200 text-left">
                <span className="text-[11px] font-bold text-gray-400 uppercase">Port</span>
                <div className="flex items-center justify-between mt-1">
                  <code className="text-sm font-mono font-bold text-gray-800">{serverPort}</code>
                  <button onClick={() => copyToClipboard(serverPort)} className="text-gray-500 hover:text-gray-700 text-xs font-semibold px-2 py-1 hover:bg-gray-100 rounded-lg transition btn-press">Copy</button>
                </div>
              </div>
              <div className="mt-5 flex gap-3">
                <button onClick={() => { navigator.clipboard.writeText(`${serverIp}:${serverPort}`); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="flex-1 py-2.5 bg-amber-400 hover:bg-amber-500 active:scale-95 text-gray-900 font-bold rounded-xl text-sm transition-all btn-press">Copy IP:Port</button>
                <a href={`minecraft://?addExternalServer=TelorIjo|${serverIp}:${serverPort}`} className="flex-1 py-2.5 bg-gray-900 hover:bg-gray-800 active:scale-95 text-white font-bold rounded-xl text-sm text-center transition-all btn-press">Direct Join</a>
              </div>
              <p className="mt-4 text-[10px] text-gray-400">Supported on Java Edition and Bedrock Edition</p>
            </div>
          </div>
        </div>
      )}

      <footer className="relative z-20 py-10 px-6 bg-gray-900 text-white/70 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="TelorIjo" className="w-8 h-8 rounded-full object-cover" />
            <span className="font-bold text-white">Telorijo.wdb.id</span>
            <span className="text-white/40">•</span>
            <span>© 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-300 transition-colors btn-press">Privacy</a>
            <a href="#" className="hover:text-amber-300 transition-colors btn-press">Terms</a>
            <a href="#" className="hover:text-amber-300 transition-colors btn-press">Discord</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
