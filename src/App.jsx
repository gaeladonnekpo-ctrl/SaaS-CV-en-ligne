import React, { useState, useEffect, useRef } from 'react';
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  FlaskConical,
  Globe,
  Heart,
  Languages,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  X
} from 'lucide-react';

export default function App() {
  const [currentPreset, setCurrentPreset] = useState('preset-c');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [skillView, setSkillView] = useState('grid'); // 'grid' or 'radar'
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [contactSent, setContactSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  // Update theme attribute on root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentPreset);
  }, [currentPreset]);

  // Navbar morphing on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animations fallback/integration
  useEffect(() => {
    if (window.gsap) {
      const ctx = window.gsap.context(() => {
        // Hero entrance
        window.gsap.from('.gsap-hero-el', {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out'
        });

        // Register ScrollTrigger if available
        if (window.ScrollTrigger) {
          window.gsap.utils.toArray('.gsap-reveal').forEach((el) => {
            window.gsap.from(el, {
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
              },
              y: 35,
              opacity: 0,
              duration: 0.8,
              ease: 'power3.out'
            });
          });
        }
      });
      return () => ctx.revert();
    }
  }, []);

  const handlePresetChange = (presetKey) => {
    setCurrentPreset(presetKey);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  // Presets definition
  const presets = [
    { id: 'preset-c', name: 'Signal Brut', desc: 'Tech Direct & Laboratoire (Bleu Signal)' },
    { id: 'preset-b', name: 'Nocturne Prestige', desc: 'Sombre & Raffiné (Or & Charbon)' },
    { id: 'preset-a', name: 'Architecte Minimal', desc: 'Épure & Clarté (Encre & Corail)' },
    { id: 'preset-d', name: 'Aura Digitale', desc: 'Créatif & Moderne (Violet Néon)' },
  ];

  // Competences list for dashboard
  const coreSkills = [
    { name: "Contrôle Qualité & Normes HACCP", level: 95, category: "Sécurité Alimentaire", icon: ShieldCheck },
    { name: "Microbiologie & Dépistage Pathogènes", level: 92, category: "Analyses Cliniques & Agro", icon: Microscope },
    { name: "Galerie API 20E & Antibiogrammes", level: 90, category: "Diagnostic Bactérien", icon: FlaskConical },
    { name: "Schémas Technologiques & Production", level: 88, category: "Transformation Agroalimentaire", icon: Briefcase },
    { name: "Analyses Eau, Sols & Impact Climat", level: 85, category: "Sciences Environnementales", icon: Globe }
  ];

  // Radar points computation
  const radarPoints = [
    { label: "Qualité & HACCP", value: 95, angle: -90 },
    { label: "Microbiologie", value: 92, angle: -18 },
    { label: "API 20E / Bioch.", value: 90, angle: 54 },
    { label: "Production Jus", value: 88, angle: 126 },
    { label: "Analyses Éco/Sols", value: 85, angle: 198 },
  ];

  // SVG Radar coordinates helper (center 150, 150, radius 100)
  const getRadarPolygon = (points, factor = 1) => {
    const cx = 150;
    const cy = 150;
    const maxR = 100;
    return points.map(p => {
      const r = (p.value / 100) * maxR * factor;
      const rad = (p.angle * Math.PI) / 180;
      const x = cx + r * Math.cos(rad);
      const y = cy + r * Math.sin(rad);
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <div className="relative min-h-screen text-[var(--color-text-dark)] bg-[var(--color-bg)] selection:bg-[var(--color-accent)] selection:text-white transition-colors duration-500">

      {/* SVG Global Turbulence Noise Filter */}
      <svg className="noise-overlay" aria-hidden="true">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* A. NAVBAR — "La Signature Flottante" */}
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-500 flex items-center justify-between gap-4 px-5 py-3 rounded-full border ${isScrolled
              ? 'bg-[var(--color-bg)]/85 backdrop-blur-xl border-[var(--color-border)] shadow-xl shadow-black/5 text-[var(--color-text-dark)]'
              : 'bg-black/40 backdrop-blur-md border-white/10 text-white shadow-2xl'
            }`}
          style={{ width: 'min(96%, 1020px)' }}
        >
          {/* Logo / Initials */}
          <a href="#hero" className="flex items-center gap-2.5 font-bold tracking-tight text-sm md:text-base group">
            <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-xs font-mono font-bold shadow-md shadow-[var(--color-accent-glow)] group-hover:scale-105 transition-transform">
              GF
            </span>
            <span className="hidden sm:inline font-mono tracking-wider font-semibold text-xs uppercase">
              G.F. ADONNEKPO
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide">
            <a href="#a-propos" className="hover-lift hover:text-[var(--color-accent)] transition-colors">À propos</a>
            <a href="#experience" className="hover-lift hover:text-[var(--color-accent)] transition-colors">Expériences</a>
            <a href="#competences" className="hover-lift hover:text-[var(--color-accent)] transition-colors">Compétences</a>
            <a href="#formations" className="hover-lift hover:text-[var(--color-accent)] transition-colors">Formations</a>
            <a href="#contact" className="hover-lift hover:text-[var(--color-accent)] transition-colors">Contact</a>
          </div>

          {/* Preset Selector & CTA */}
          <div className="flex items-center gap-2.5">
            {/* Aesthetic Preset Switcher */}
            <div className="relative group">
              <button
                title="Changer de preset esthétique"
                className="px-2.5 py-1.5 rounded-full text-[11px] font-mono border border-current/20 flex items-center gap-1.5 opacity-85 hover:opacity-100 hover:border-[var(--color-accent)] transition-all"
              >
                <Sparkles className="w-3 h-3 text-[var(--color-accent)]" />
                <span className="hidden lg:inline capitalize">
                  {presets.find(p => p.id === currentPreset)?.name}
                </span>
              </button>

              {/* Dropdown presets */}
              <div className="absolute right-0 top-full mt-2 w-64 p-2 bg-[var(--color-card)] text-[var(--color-text-dark)] rounded-2xl shadow-2xl border border-[var(--color-border)] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="text-[10px] uppercase font-mono tracking-wider text-[var(--color-text-muted)] px-3 py-1 font-semibold border-b border-black/5 mb-1">
                  Styles Esthétiques
                </div>
                {presets.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handlePresetChange(p.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex flex-col ${currentPreset === p.id
                        ? 'bg-[var(--color-accent)] text-white font-semibold'
                        : 'hover:bg-black/5 text-[var(--color-text-dark)]'
                      }`}
                  >
                    <span className="font-medium">{p.name}</span>
                    <span className={`text-[10px] ${currentPreset === p.id ? 'text-white/80' : 'text-[var(--color-text-muted)]'}`}>
                      {p.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#cv-download"
              className="btn-magnetic px-4 py-1.5 rounded-full bg-[var(--color-accent)] text-white text-xs font-semibold shadow-md shadow-[var(--color-accent-glow)] flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto absolute top-20 inset-x-4 bg-[var(--color-card)] text-[var(--color-text-dark)] p-6 rounded-3xl shadow-2xl border border-[var(--color-border)] flex flex-col gap-4 text-sm font-medium z-50">
            <a onClick={() => setMobileMenuOpen(false)} href="#a-propos" className="py-2 border-b border-black/5">À propos</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#experience" className="py-2 border-b border-black/5">Expériences</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#competences" className="py-2 border-b border-black/5">Compétences</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#formations" className="py-2 border-b border-black/5">Formations</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="py-2">Contact</a>

            <div className="pt-3 border-t border-black/5">
              <span className="text-xs font-mono text-[var(--color-text-muted)] block mb-2">Choisir une esthétique :</span>
              <div className="grid grid-cols-2 gap-2">
                {presets.map(p => (
                  <button
                    key={p.id}
                    onClick={() => { handlePresetChange(p.id); setMobileMenuOpen(false); }}
                    className={`p-2 rounded-xl text-xs font-mono text-center border ${currentPreset === p.id
                        ? 'bg-[var(--color-accent)] text-white border-transparent'
                        : 'border-black/10'
                      }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* B. SECTION HERO — "La Première Impression" */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden bg-[var(--color-primary)] text-white"
      >
        {/* Subtle Laboratory / Scientific Texture with heavy dark gradient */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20 filter contrast-125 brightness-90 mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--color-primary)]/80 via-[var(--color-primary)]/90 to-[var(--color-primary)]" />

        {/* Glow ambient light */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none opacity-25"
          style={{ background: 'var(--color-accent)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

          {/* Profile Badge / Avatar */}
          <div className="gsap-hero-el relative mb-7 group">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-[var(--color-accent)] p-1.5 shadow-2xl shadow-[var(--color-accent-glow)] transition-transform duration-500 group-hover:scale-105 bg-white/5 backdrop-blur-sm">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#1E293B] to-[#334155] flex flex-col items-center justify-center text-center overflow-hidden relative">
                <span className="font-mono text-2xl md:text-3xl font-extrabold tracking-widest text-white">
                  AG
                </span>
                <span className="text-[10px] font-mono uppercase tracking-tighter text-blue-300/80">
                  BIO · LAB
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Live verified tag */}
            <div className="absolute -bottom-2 inset-x-0 flex justify-center">
              <span className="px-3 py-0.5 rounded-full bg-[var(--color-card-dark)] border border-white/20 text-[10px] font-mono tracking-wider text-emerald-400 flex items-center gap-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 online-beacon" />
                DISPONIBLE
              </span>
            </div>
          </div>

          {/* Name - Sans Gras Massif */}
          <h1 className="gsap-hero-el text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[1.08] text-white">
            ADONNEKPO <br className="hidden sm:inline" />
            <span className="text-white/90">SETONDJI GAEL</span> FOURIER
          </h1>

          {/* Title - Serif Italique Émouvant */}
          <p className="gsap-hero-el mt-4 sm:mt-5 text-xl sm:text-2xl md:text-3xl italic font-serif text-[var(--color-accent)] tracking-normal max-w-2xl font-light">
            Technicien en Microbiologie &amp; Biotechnologie Alimentaire
          </p>

          {/* 3 Stats in Monospace */}
          <div className="gsap-hero-el mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs md:text-sm font-mono text-white/70 tracking-wider">
            <span className="flex items-center gap-1.5 text-white">
              <span className="text-[var(--color-accent)] font-bold">3+ ANS</span> D'EXPÉRIENCE
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-white">
              <span className="text-[var(--color-accent)] font-bold">6+ PROJETS</span> &amp; MISSIONS LABO
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-white">
              <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] inline" />
              COTONOU, BÉNIN
            </span>
          </div>

          {/* CTAs */}
          <div className="gsap-hero-el mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#cv-download"
              className="btn-magnetic px-8 py-3.5 rounded-full bg-[var(--color-accent)] text-white text-sm font-semibold tracking-wide shadow-xl shadow-[var(--color-accent-glow)] flex items-center gap-2 hover:bg-[var(--color-accent-hover)]"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger mon CV</span>
            </a>

            <a
              href="#contact"
              className="btn-magnetic px-8 py-3.5 rounded-full border border-white/30 text-white text-sm font-medium tracking-wide hover:bg-white/10 hover:border-white transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Me contacter</span>
            </a>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono tracking-widest uppercase">Défiler</span>
          <div className="w-5 h-9 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 rounded-full bg-[var(--color-accent)] animate-bounce" />
          </div>
        </div>
      </section>

      {/* C. À PROPOS — "Le Manifeste Personnel" */}
      <section id="a-propos" className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="gsap-reveal grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Dramatic Serif Title */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold block mb-3">
              01 / Manifeste Personnel
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif italic tracking-tight leading-tight text-[var(--color-text-dark)]">
              Rigueur biologique, innovation agroalimentaire et impact environnemental.
            </h2>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-black/5 border border-black/10">Normes HACCP</span>
              <span className="px-3 py-1 rounded-full bg-black/5 border border-black/10">Galerie API 20E</span>
              <span className="px-3 py-1 rounded-full bg-black/5 border border-black/10">Coloration de Gram</span>
              <span className="px-3 py-1 rounded-full bg-black/5 border border-black/10">Solutions Bas Carbone</span>
            </div>
          </div>

          {/* Vertical Separator Line on Desktop */}
          <div className="hidden lg:block w-[2px] h-full bg-[var(--color-accent)]/30 rounded-full self-stretch" />

          {/* Right Column: User Bio Text */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-text-dark)]/90">
            <p className="font-medium text-xl leading-relaxed text-[var(--color-text-dark)]">
              Technicien spécialisé en microbiologie, biotechnologie alimentaire et sciences environnementales, avec une expertise approfondie dans l'analyse de l'eau, des sols et des denrées alimentaires.
            </p>
            <p className="text-[var(--color-text-muted)]">
              Habilité au contrôle qualité, à l'identification rigoureuse des germes pathogènes et à la conduite de tests d'antibiogrammes. Fortement engagé envers le maintien des normes d'hygiène et de sécurité sanitaire les plus exigeantes dans la chaîne de production agroalimentaire.
            </p>
            <p className="text-[var(--color-text-muted)]">
              Doté d'une capacité reconnue à travailler en équipe multidisciplinaire et à proposer des solutions durables et innovantes pour répondre simultanément aux défis de la sécurité alimentaire et de la protection de l'écosystème.
            </p>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
              <div className="p-4 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] shadow-sm">
                <span className="block text-2xl font-bold font-mono text-[var(--color-accent)]">100%</span>
                <span className="text-xs text-[var(--color-text-muted)] font-medium">Respect des protocoles sanitaires &amp; bio-sécurité</span>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] shadow-sm">
                <span className="block text-2xl font-bold font-mono text-[var(--color-accent)]">360°</span>
                <span className="text-xs text-[var(--color-text-muted)] font-medium">De l'analyse d'échantillon à l'usine de production</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* D. EXPÉRIENCE — "La Timeline Vivante" */}
      <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 gsap-reveal">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold block mb-3">
            02 / Trajectoire Professionnelle
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-[var(--color-text-dark)]">
            Expériences &amp; Terrains d'Intervention
          </h2>
          <p className="mt-4 text-sm md:text-base text-[var(--color-text-muted)] font-sans">
            Une pratique active en laboratoire d'analyse, contrôle industriel et programmes d'action climatique.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-[var(--color-accent)]/30" />

          {/* Experience Cards */}
          <div className="flex flex-col gap-12 md:gap-16">

            {/* Card 1: LA.MI.T.A */}
            <div className="gsap-reveal relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 pl-14 md:pl-0 w-full text-left md:text-right">
                <div className="card-experience bg-[var(--color-card)] p-7 md:p-8 rounded-[2.5rem] border border-[var(--color-border)] shadow-lg shadow-black/5">
                  <span className="font-mono text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                    Septembre 2023 — Janvier 2024
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-dark)]">
                    Stage Professionnel en Microbiologie
                  </h3>
                  <h4 className="text-sm font-semibold text-[var(--color-text-muted)] mb-4">
                    Laboratoire de Microbiologie et Technologie Alimentaire (LA.MI.T.A)
                  </h4>
                  <ul className="text-sm text-[var(--color-text-muted)] space-y-2 list-none">
                    <li className="flex items-start md:justify-end gap-2">
                      <span>Contrôle rigoureux de la qualité microbiologique des denrées alimentaires.</span>
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    </li>
                    <li className="flex items-start md:justify-end gap-2">
                      <span>Maîtrise stricte des règles d'hygiène et sécurité biologique en laboratoire.</span>
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    </li>
                    <li className="flex items-start md:justify-end gap-2">
                      <span>Sensibilisation active aux normes de sécurité alimentaire et procédures HACCP.</span>
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    </li>
                  </ul>
                </div>
              </div>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--color-bg)] border-4 border-[var(--color-accent)] dot-pulse shadow-md" />
              <div className="md:w-1/2 md:pl-12 hidden md:block" />
            </div>

            {/* Card 2: BRAVO TONUS JUS */}
            <div className="gsap-reveal relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 hidden md:block" />
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--color-bg)] border-4 border-[var(--color-accent)] dot-pulse shadow-md" />
              <div className="md:w-1/2 md:pl-12 pl-14 md:pl-0 w-full text-left">
                <div className="card-experience bg-[var(--color-card)] p-7 md:p-8 rounded-[2.5rem] border border-[var(--color-border)] shadow-lg shadow-black/5">
                  <span className="font-mono text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                    Juin 2023 — Juillet 2023
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-dark)]">
                    Production Assistant
                  </h3>
                  <h4 className="text-sm font-semibold text-[var(--color-text-muted)] mb-4">
                    BRAVO TONUS JUS
                  </h4>
                  <ul className="text-sm text-[var(--color-text-muted)] space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span>Contrôle et supervision des opérations unitaires de fabrication.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span>Maîtrise complète des schémas technologiques pour la production de jus de fruits.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span>Optimisation et traçabilité des processus de transformation industrielle.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: LABOVERT */}
            <div className="gsap-reveal relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 pl-14 md:pl-0 w-full text-left md:text-right">
                <div className="card-experience bg-[var(--color-card)] p-7 md:p-8 rounded-[2.5rem] border border-[var(--color-border)] shadow-lg shadow-black/5">
                  <span className="font-mono text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                    Juillet 2022 — Mars 2023
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-dark)]">
                    Stage Académique — Analyses Cliniques
                  </h3>
                  <h4 className="text-sm font-semibold text-[var(--color-text-muted)] mb-4">
                    Laboratoire Vétérinaire LABOVERT
                  </h4>
                  <ul className="text-sm text-[var(--color-text-muted)] space-y-2 list-none">
                    <li className="flex items-start md:justify-end gap-2">
                      <span>Diagnostic des maladies pathogènes dans les échantillons cliniques et alimentaires.</span>
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    </li>
                    <li className="flex items-start md:justify-end gap-2">
                      <span>Techniques de coloration de Gram et cultures bactériennes sur milieux spécifiques.</span>
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    </li>
                    <li className="flex items-start md:justify-end gap-2">
                      <span>Identification biochimique différentielle des germes via la galerie API 20E.</span>
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    </li>
                  </ul>
                </div>
              </div>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--color-bg)] border-4 border-[var(--color-accent)] dot-pulse shadow-md" />
              <div className="md:w-1/2 md:pl-12 hidden md:block" />
            </div>

            {/* Card 4: Climathon Cotonou 2025 */}
            <div className="gsap-reveal relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 hidden md:block" />
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--color-bg)] border-4 border-[var(--color-accent)] dot-pulse shadow-md" />
              <div className="md:w-1/2 md:pl-12 pl-14 md:pl-0 w-full text-left">
                <div className="card-experience bg-[var(--color-card)] p-7 md:p-8 rounded-[2.5rem] border border-[var(--color-border)] shadow-lg shadow-black/5">
                  <span className="font-mono text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                    Avril 2025
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-dark)]">
                    Catalist Program — Solutions Bas Carbone
                  </h3>
                  <h4 className="text-sm font-semibold text-[var(--color-text-muted)] mb-4">
                    Climathon Cotonou 2025
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Analyse des impacts environnementaux dans le secteur agroalimentaire. Conception de solutions bas carbone pour l’agriculture et l’alimentation durable. Prototypage rapide de projets à fort impact territorial.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5: DAAD ALUMNI */}
            <div className="gsap-reveal relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 pl-14 md:pl-0 w-full text-left md:text-right">
                <div className="card-experience bg-[var(--color-card)] p-7 md:p-8 rounded-[2.5rem] border border-[var(--color-border)] shadow-lg shadow-black/5">
                  <span className="font-mono text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                    Septembre 2024
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-dark)]">
                    Atelier Climat &amp; Technologies Innovantes
                  </h3>
                  <h4 className="text-sm font-semibold text-[var(--color-text-muted)] mb-4">
                    DAAD Alumni
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Maîtrise des technologies et méthodes novatrices dédiées à l'atténuation des impacts du changement climatique sur les filières vivrières en Afrique.
                  </p>
                </div>
              </div>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--color-bg)] border-4 border-[var(--color-accent)] dot-pulse shadow-md" />
              <div className="md:w-1/2 md:pl-12 hidden md:block" />
            </div>

          </div>
        </div>
      </section>

      {/* E. COMPÉTENCES — "Le Tableau de Bord" */}
      <section id="competences" className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 gsap-reveal">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold block mb-3">
              03 / Maîtrise Technique
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-[var(--color-text-dark)]">
              Le Tableau de Bord des Compétences
            </h2>
          </div>

          {/* Toggle View: Grid vs Radar */}
          <div className="inline-flex p-1 rounded-full bg-black/5 border border-black/10 self-start md:self-auto">
            <button
              onClick={() => setSkillView('grid')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-medium transition-all ${skillView === 'grid'
                  ? 'bg-[var(--color-card)] text-[var(--color-text-dark)] shadow-md'
                  : 'text-[var(--color-text-muted)] hover:text-black'
                }`}
            >
              Grille de Maîtrise
            </button>
            <button
              onClick={() => setSkillView('radar')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-medium transition-all ${skillView === 'radar'
                  ? 'bg-[var(--color-card)] text-[var(--color-text-dark)] shadow-md'
                  : 'text-[var(--color-text-muted)] hover:text-black'
                }`}
            >
              Radar SVG Interactif
            </button>
          </div>
        </div>

        {/* View 1: Grille de Maîtrise (Pattern 2) */}
        {skillView === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gsap-reveal">
            {coreSkills.map((skill, idx) => {
              const Icon = skill.icon;
              const radius = 38;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (skill.level / 100) * circumference;

              return (
                <div
                  key={idx}
                  className="bg-[var(--color-card)] p-7 rounded-[2rem] border border-[var(--color-border)] shadow-md shadow-black/5 hover-lift flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-accent)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                      {skill.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 my-2">
                    <h3 className="font-bold text-base text-[var(--color-text-dark)] leading-snug">
                      {skill.name}
                    </h3>

                    {/* Circular SVG Progress */}
                    <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                      <svg className="w-20 h-20 -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          stroke="currentColor"
                          strokeWidth="6"
                          className="text-black/5 fill-none"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          stroke="var(--color-accent)"
                          strokeWidth="6"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          className="fill-none transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <span className="absolute font-mono font-bold text-sm text-[var(--color-text-dark)]">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-black/5 h-1.5 rounded-full mt-4 overflow-hidden">
                    <div
                      className="bg-[var(--color-accent)] h-full rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View 2: Radar de Compétences SVG (Pattern 1) */}
        {skillView === 'radar' && (
          <div className="bg-[var(--color-card)] p-8 md:p-12 rounded-[3rem] border border-[var(--color-border)] shadow-xl shadow-black/5 gsap-reveal flex flex-col items-center">
            <h3 className="text-xl font-bold font-serif italic mb-2">Cartographie Radiale des Compétences</h3>
            <p className="text-xs font-mono text-[var(--color-text-muted)] mb-8">Polygone bio-analytique normalisé</p>

            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
                {/* Background Concentric Radar Rings */}
                {[0.25, 0.5, 0.75, 1].map((f, i) => (
                  <polygon
                    key={i}
                    points={getRadarPolygon(radarPoints.map(p => ({ ...p, value: 100 })), f)}
                    fill="none"
                    stroke="rgba(0,0,0,0.08)"
                    strokeWidth="1"
                    strokeDasharray={i === 3 ? "none" : "3,3"}
                  />
                ))}

                {/* Axes */}
                {radarPoints.map((p, i) => {
                  const rad = (p.angle * Math.PI) / 180;
                  const x = 150 + 100 * Math.cos(rad);
                  const y = 150 + 100 * Math.sin(rad);
                  return (
                    <line
                      key={i}
                      x1="150"
                      y1="150"
                      x2={x}
                      y2={y}
                      stroke="rgba(0,0,0,0.12)"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Data Polygon */}
                <polygon
                  points={getRadarPolygon(radarPoints)}
                  fill="var(--color-accent-glow)"
                  stroke="var(--color-accent)"
                  strokeWidth="2.5"
                  className="transition-all duration-700 ease-in-out"
                />

                {/* Data Points */}
                {radarPoints.map((p, i) => {
                  const r = (p.value / 100) * 100;
                  const rad = (p.angle * Math.PI) / 180;
                  const x = 150 + r * Math.cos(rad);
                  const y = 150 + r * Math.sin(rad);
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r="4" fill="var(--color-accent)" stroke="#fff" strokeWidth="2" />
                    </g>
                  );
                })}

                {/* Labels around the radar */}
                {radarPoints.map((p, i) => {
                  const rad = (p.angle * Math.PI) / 180;
                  const x = 150 + 125 * Math.cos(rad);
                  const y = 150 + 125 * Math.sin(rad);
                  return (
                    <text
                      key={i}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-[9px] font-mono fill-current font-bold"
                    >
                      {p.label} ({p.value}%)
                    </text>
                  );
                })}
              </svg>
            </div>
          </div>
        )}

        {/* Additional Technical Assets & Languages (Tags Pondérés - Pattern 3) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 gsap-reveal">

          {/* Software & Tools */}
          <div className="bg-[var(--color-card)] p-7 rounded-[2rem] border border-[var(--color-border)]">
            <h4 className="text-sm font-mono uppercase tracking-wider text-[var(--color-accent)] font-bold mb-4 flex items-center gap-2">
              <FlaskConical className="w-4 h-4" />
              Outils &amp; Méthodes Analytiques
            </h4>
            <div className="flex flex-wrap gap-2.5">
              <span className="px-4 py-2 rounded-full bg-[var(--color-accent)] text-white text-xs font-semibold shadow-sm">
                Logiciel R (Bio-statistiques)
              </span>
              <span className="px-4 py-2 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30 text-xs font-medium">
                Coloration de Gram
              </span>
              <span className="px-4 py-2 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30 text-xs font-medium">
                Antibiogrammes ciblés
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/5 text-xs text-[var(--color-text-dark)]">
                Suite Office (Word, Excel, PowerPoint)
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/5 text-xs text-[var(--color-text-dark)]">
                Marketing Numérique
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/5 text-xs text-[var(--color-text-dark)]">
                Esprit d'équipe &amp; Rigueur
              </span>
            </div>
          </div>

          {/* Languages & Communication */}
          <div className="bg-[var(--color-card)] p-7 rounded-[2rem] border border-[var(--color-border)]">
            <h4 className="text-sm font-mono uppercase tracking-wider text-[var(--color-accent)] font-bold mb-4 flex items-center gap-2">
              <Languages className="w-4 h-4" />
              Langues &amp; Communication
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold">Fon</span>
                <span className="text-[var(--color-accent)] font-semibold">Langue maternelle</span>
              </div>
              <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[var(--color-accent)] h-full rounded-full w-full" />
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-2">
                <span className="font-bold">Français</span>
                <span className="text-[var(--color-accent)] font-semibold">Courant &amp; Professionnel</span>
              </div>
              <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[var(--color-accent)] h-full rounded-full w-[95%]" />
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-2">
                <span className="font-bold">Anglais</span>
                <span className="text-[var(--color-text-muted)]">Notions &amp; Vocabulaire Technique</span>
              </div>
              <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[var(--color-accent)]/50 h-full rounded-full w-[50%]" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* F. FORMATION — "Les Fondations" */}
      <section id="formations" className="py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary)] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 gsap-reveal">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold block mb-3">
              04 / Cursus Académique
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white">
              Les Fondations Scientifiques
            </h2>
          </div>

          <div className="flex flex-col gap-6 gsap-reveal">
            {/* Formation 1 */}
            <div className="bg-white/5 hover:bg-white/[0.08] transition-all p-7 md:p-8 rounded-[2rem] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase block mb-1">
                  2021 — 2023
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Diplôme de Technicien en Microbiologie et Biotechnologie Alimentaire
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  Université d'Abomey-Calavi (UAC) — Bénin
                </p>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/40 text-xs font-mono text-[var(--color-accent)] self-start md:self-auto shrink-0">
                Diplômé
              </span>
            </div>

            {/* Formation 2 */}
            <div className="bg-white/5 hover:bg-white/[0.08] transition-all p-7 md:p-8 rounded-[2rem] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase block mb-1">
                  2016 — 2020
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Baccalauréat Scientifique (Série D)
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  Collège d'Enseignement Secondaire Général Verdure — Bénin
                </p>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono text-white/70 self-start md:self-auto shrink-0">
                Admis
              </span>
            </div>

            {/* Formation 3 */}
            <div className="bg-white/5 hover:bg-white/[0.08] transition-all p-7 md:p-8 rounded-[2rem] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase block mb-1">
                  2011 — 2016
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Brevet d'Études du Premier Cycle (BEPC Scientifique)
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  Collège d'Enseignement Secondaire Général Verdure — Bénin
                </p>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono text-white/70 self-start md:self-auto shrink-0">
                Admis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* G. CONTACT — "Le Pont" */}
      <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start gsap-reveal">

          {/* Left contact presentation */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold block mb-3">
              05 / Travaillons Ensemble
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif italic tracking-tight text-[var(--color-text-dark)] leading-tight mb-6">
              Donnons vie à vos projets d'analyse &amp; de production.
            </h2>
            <p className="text-sm md:text-base text-[var(--color-text-muted)] mb-8 leading-relaxed">
              Disponible pour des opportunités de poste, des missions d'audit qualité, des analyses de laboratoire ou des collaborations de recherche agroalimentaire.
            </p>

            {/* Contact links cards */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:gaeladonnekpo@gmail.com"
                className="p-4 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover-lift flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-mono uppercase text-[var(--color-text-muted)] block">Email Direct</span>
                  <span className="text-sm font-semibold truncate block group-hover:text-[var(--color-accent)] transition-colors">
                    gaeladonnekpo@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:+2290161708951"
                className="p-4 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover-lift flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[var(--color-text-muted)] block">Téléphone &amp; WhatsApp</span>
                  <span className="text-sm font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                    (+229) 01 61 70 89 51
                  </span>
                </div>
              </a>

              <a
                href="http://bit.ly/44sbRyS"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover-lift flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[var(--color-text-muted)] block">Réseau Professionnel</span>
                  <span className="text-sm font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                    Profil LinkedIn Certifié
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right contact form */}
          <div className="lg:col-span-7 bg-[var(--color-card)] p-8 sm:p-10 rounded-[3rem] border border-[var(--color-border)] shadow-xl shadow-black/5">
            <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2">
              Envoyer un Message
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-6">
              Réponse garantie sous 24h ouvrées.
            </p>

            {contactSent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center animate-fade-in">
                <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-600 mb-3" />
                <h4 className="text-lg font-bold">Message envoyé avec succès !</h4>
                <p className="text-xs mt-1 text-emerald-700">Merci Gael vous répondra dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-semibold text-[var(--color-text-muted)] mb-1">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Marie Dupont"
                      className="w-full px-4 py-3 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase font-semibold text-[var(--color-text-muted)] mb-1">
                      Votre Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@laboratoire.org"
                      className="w-full px-4 py-3 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-semibold text-[var(--color-text-muted)] mb-1">
                    Objet de la Demande
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Proposition de poste / Mission de contrôle qualité"
                    className="w-full px-4 py-3 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-semibold text-[var(--color-text-muted)] mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Bonjour Gaël, nous aimerions échanger avec vous concernant..."
                    className="w-full px-4 py-3 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-magnetic w-full py-4 rounded-2xl bg-[var(--color-accent)] text-white font-semibold text-sm shadow-xl shadow-[var(--color-accent-glow)] hover:bg-[var(--color-accent-hover)] transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Transmettre le Message</span>
                </button>
              </form>
            )}

            {/* Direct CV Download Anchor */}
            <div id="cv-download" className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[var(--color-accent)]" />
                <div>
                  <span className="font-bold text-xs block">Format Curriculum Vitae PDF</span>
                  <span className="text-[11px] text-[var(--color-text-muted)]">Version certifiée 2026 mise à jour</span>
                </div>
              </div>
              <a
                href="./CV_Adonnekpo_Gael_Fourier.pdf"
                download="CV_Adonnekpo_Gael_Fourier.pdf"
                className="btn-magnetic px-5 py-2.5 rounded-full bg-black/10 hover:bg-black/15 text-[var(--color-text-dark)] text-xs font-bold font-mono flex items-center gap-2 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                <span>Télécharger PDF</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* H. PIED DE PAGE */}
      <footer className="bg-[var(--color-primary)] text-white pt-16 pb-12 px-4 sm:px-6 rounded-t-[4rem] border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 online-beacon" />
              <span className="font-mono text-xs text-white/90 uppercase tracking-widest font-semibold">
                En Ligne · Prêt à intervenir
              </span>
            </div>
            <p className="text-sm font-light text-white/60">
              Adonnekpo Setondji Gaël Fourier — Fait avec le vibe coding · 2026
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-white/60">
            <a href="#hero" className="hover:text-white transition-colors">Haut de page</a>
            <span>·</span>
            <a href="#a-propos" className="hover:text-white transition-colors">À propos</a>
            <span>·</span>
            <a href="#experience" className="hover:text-white transition-colors">Expérience</a>
            <span>·</span>
            <a href="#competences" className="hover:text-white transition-colors">Compétences</a>
          </div>

        </div>
      </footer>

    </div>
  );
}

