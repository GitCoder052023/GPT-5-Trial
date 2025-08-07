import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Sparkles,
  Zap,
  Search,
  Image as ImageIcon,
  Video,
  FileText,
  FileAudio,
  Upload,
  Link2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  PlayCircle,
  Globe,
  ClipboardCheck,
} from "lucide-react";

// -----------------------------
// Design tokens
// -----------------------------
const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const glass =
  "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]";

// -----------------------------
// Data (Pricing from uploaded chart)
// -----------------------------
const plans = [
  {
    name: "Free",
    price: 0,
    tagline: "Kickstart your truth checks",
    cta: "Start Free",
    highlight: false,
    bullets: [
      "5 fact checks/day",
      "Images & Videos",
      "2 uploads/check • 10MB each",
      "YouTube up to 10 mins",
    ],
  },
  {
    name: "Plus",
    price: 9.99,
    tagline: "For curious creators",
    cta: "Upgrade to Plus",
    highlight: false,
    bullets: [
      "10 fact checks/day",
      "Image, Video, PDF, Docx",
      "Up to 5 uploads/check • 20MB each",
      "Local video: Unlimited (500MB combined)",
      "YouTube up to 30 mins",
      "SCM short-check (Instagram only)",
    ],
  },
  {
    name: "Pro",
    price: 24.99,
    tagline: "Teams and power users",
    cta: "Go Pro",
    highlight: true,
    bullets: [
      "25 fact checks/day",
      "Image, Video, PDF, Docx, Audio",
      "Up to 10 uploads/check • 50MB each",
      "Local video: Unlimited (1GB combined)",
      "YouTube up to 60 mins",
      "SCM short-check (X, IG, FB, Threads)",
    ],
  },
  {
    name: "Premium",
    price: 34.99,
    tagline: "Scale with confidence",
    cta: "Get Premium",
    highlight: false,
    bullets: [
      "35 fact checks/day",
      "Image, Video, PDF, Docx, Audio",
      "Unlimited uploads (2GB combined)",
      "Max file size: 2GB",
      "Local video: Unlimited (2GB combined)",
      "YouTube up to 8 hours",
      "SCM short-check (X, FB, Threads, IG, Reddit, TikTok)",
    ],
  },
];

// -----------------------------
// UI primitives
// -----------------------------
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>
);

const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
    {children}
  </span>
);

const Pill = ({ children, icon: Icon }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {Icon && <Icon size={14} className="text-white/70" />}
    {children}
  </span>
);

// -----------------------------
// Sections
// -----------------------------
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <motion.div
              className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500"
              initial={{ rotate: -12, scale: 0.9, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            />
            <ShieldCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[48%] text-white" size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight">Verifa</span>
          <Pill icon={Sparkles}>AI Fact-Checking</Pill>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-white/80 hover:text-white">Features</a>
          <a href="#integrations" className="text-sm text-white/80 hover:text-white">Integrations</a>
          <a href="#pricing" className="text-sm text-white/80 hover:text-white">Pricing</a>
          <a href="#faq" className="text-sm text-white/80 hover:text-white">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden rounded-lg border border-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/5 md:inline-flex">
            Sign in
          </button>
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-white hover:opacity-95"
          >
            Get started
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-gradient-to-tr from-blue-400/20 to-emerald-400/20 blur-2xl" />
      </div>

      <Container className="relative grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <Sparkles size={14} />
            Verify anything — shorts to full docs
          </motion.div>

          <motion.h1
            className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Know what’s <GradientText>real</GradientText>. Instantly.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={2}
          >
            Verifa is an AI‑powered fact‑checking tool that verifies the truth behind YouTube Shorts, Insta Reels, Threads, Reddit posts, TikTok — all the way to PDFs, DOCX, news articles, and long‑form content.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row"
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 font-medium text-white/80"
            >
              Start free
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <button className={`inline-flex items-center gap-2 rounded-xl ${glass} px-5 py-3`}>
              <PlayCircle size={18} className="text-white/80" />
              Watch demo
            </button>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/50"
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={4}
          >
            <Pill icon={ShieldCheck}>Private by default</Pill>
            <Pill icon={Zap}>Fast checks</Pill>
            <Pill icon={ClipboardCheck}>Transparent sources</Pill>
          </motion.div>
        </div>

        {/* Mock UI */}
        <motion.div
          className={`relative ${glass} rounded-2xl p-4`}
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={5}
        >
          <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-2xl" />
          <div className="flex items-center gap-2 rounded-xl bg-black/50 p-2">
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1 text-xs text-white/80">
              <Globe size={14} />
              Paste link or upload
            </div>
            <div className="ml-auto inline-flex items-center gap-2">
              <Pill>
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400/80" /> Live check
              </Pill>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-12 gap-3">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2">
                <Link2 size={16} className="text-white/60" />
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
                  placeholder="https://youtube.com/shorts/..."
                />
                <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs hover:bg-white/15">
                  <Upload size={14} />
                  Upload
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1.5 text-xs font-medium text-white">
                  Check
                </button>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                {[
                  { label: "Image", icon: ImageIcon },
                  { label: "Video", icon: Video },
                  { label: "PDF/DOCX", icon: FileText },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <item.icon size={14} className="text-white/70" />
                    {item.label}
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <div className="inline-flex items-center gap-2 text-white/80">
                    <Search size={14} />
                    Evidence scan
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Pill>3 sources</Pill>
                    <Pill>1 contradiction</Pill>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 text-emerald-400" size={16} />
                    <span>
                      Claim matches official health data released in 2023.
                      <span className="ml-2 text-white/50">gov.example/data</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="mt-0.5 text-rose-400" size={16} />
                    <span>
                      Viral clip misquotes original interview; context missing.
                      <span className="ml-2 text-white/50">news.example/interview</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 text-emerald-400" size={16} />
                    <span>
                      Independent report corroborates key statistic.
                      <span className="ml-2 text-white/50">journal.example/report</span>
                    </span>
                  </li>
                </ul>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <div className="inline-flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    Confidence: <span className="font-medium text-white">High</span>
                  </div>
                  <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:bg-white/5">
                    Export summary
                  </button>
                </div>
              </div>
            </div>

            {/* Preview panel */}
            <div className="col-span-12 lg:col-span-5">
              <div className="h-full rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-3">
                <div className="mb-2 flex items-center justify-between text-xs text-white/80">
                  <span>Supported sources</span>
                  
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "YouTube Shorts",
                    "Instagram Reels",
                    "Threads",
                    "Reddit",
                    "TikTok",
                    "PDF / DOCX",
                    "News Articles",
                    "Local Video",
                  ].map((s, i) => (
                    <div key={s} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                      {s}
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="mb-2 text-xs text-white/80">Why Verifa?</div>
                  <ul className="space-y-1.5 text-xs text-white/70">
                    <li className="flex items-center gap-2">
                      <Zap size={14} className="text-yellow-300" /> Fast, explainable checks
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-emerald-300" /> Local uploads stay private
                    </li>
                    <li className="flex items-center gap-2">
                      <ClipboardCheck size={14} className="text-cyan-300" /> Transparent evidence trail
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

const Features = () => {
  const items = [
    {
      icon: Search,
      title: "Source triangulation",
      desc: "Cross-checks claims across reliable databases, articles, and primary sources with explainable reasoning.",
    },
    {
      icon: ShieldCheck,
      title: "Trust, not just scores",
      desc: "Every verdict includes citations, context, and contradictions so you can see how conclusions are made.",
    },
    {
      icon: Zap,
      title: "Designed for the short-form era",
      desc: "Verify reels, shorts, and posts as easily as long-form PDFs or news articles — all in one place.",
    },
  ];
  return (
    <section id="features" className="relative">
      <Container className="py-16 md:py-24">
        <motion.h2
          className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          Built to verify anything — fast
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-white/70"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          custom={1}
          viewport={{ once: true, amount: 0.3 }}
        >
          From short clips to long reports, Verifa adapts to the content and explains the truth behind it.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              className={`group ${glass} rounded-2xl p-5`}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-2">
                <it.icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-300 group-hover:w-24" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const Integrations = () => {
  const chips = [
    "YouTube",
    "Instagram",
    "Threads",
    "TikTok",
    "Reddit",
    "X (Twitter)",
    "Facebook",
    "PDF",
    "DOCX",
    "Image",
    "Video",
    "Audio"
  ];
  return (
    <section id="integrations" className="relative">
      <Container className="py-16 md:py-24">
        <motion.div
          className="mb-8 flex items-center justify-center gap-2"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Pill icon={Link2}>Works where content lives</Pill>
        </motion.div>

        <motion.h2
          className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          One tool for every platform
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-white/70"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          custom={1}
          viewport={{ once: true, amount: 0.3 }}
        >
          Drop a link or upload directly. Verifa handles short clips, posts, and full documents with the same clarity.
        </motion.p>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {chips.map((c, i) => (
            <motion.div
              key={c}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
              variants={reveal}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
              {c}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const Pricing = () => {
  const [active, setActive] = useState("Pro");

  return (
    <section id="pricing" className="relative">
      <Container className="py-16 md:py-24">
        <motion.h2
          className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          Pricing that scales with clarity
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-white/70"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          custom={1}
          viewport={{ once: true, amount: 0.3 }}
        >
          Transparent limits. No surprises. Choose a plan that matches your verification needs.
        </motion.p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              className={`${glass} relative flex flex-col rounded-2xl p-5 ${p.highlight ? "ring-2 ring-cyan-400/50" : ""}`}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
              onMouseEnter={() => setActive(p.name)}
            >
              {p.highlight && (
                <span className="absolute -top-2 right-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-2 py-0.5 text-[10px] font-medium text-white">
                  Most popular
                </span>
              )}
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <Pill>{p.tagline}</Pill>
              </div>
              <div className="mb-4 flex items-end gap-1">
                <span className="text-3xl font-semibold tracking-tight">
                  {p.price === 0 ? "Free" : `$${p.price.toFixed(2)}`}
                </span>
                {p.price !== 0 && <span className="pb-1 text-xs text-white/60">/month</span>}
              </div>
              <a
                href="#"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-medium ${
                  p.highlight
                    ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
                    : "border border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
                }`}
              >
                {p.cta}
                <ArrowRight size={16} />
              </a>
              <ul className="mt-5 space-y-2 text-sm">
                {p.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 text-emerald-400" />
                    <span className="text-white/80">{b}</span>
                  </li>
                ))}
              </ul>
              {active === p.name && (
                <motion.div
                  layoutId="glow"
                  className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10"
                />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const FAQ = () => {
  const qas = [
    {
      q: "How does Verifa verify short videos and posts?",
      a: "We extract claims, then triangulate with reputable sources and databases. You get citations, contradictions, and a confidence score with an explanation trail.",
    },
    {
      q: "Is my uploaded content private?",
      a: "Yes. Local uploads are processed with privacy in mind and are not shared externally. You can delete checks and evidence trails anytime.",
    },
    {
      q: "What counts as a daily fact check?",
      a: "Each link or upload you submit counts as one check, regardless of the number of sources analyzed under that check.",
    },
    {
      q: "Can I use Verifa for long-form content?",
      a: "Absolutely. You can verify PDFs, DOCX, and long YouTube videos (limits depend on your plan).",
    },
  ];
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative">
      <Container className="py-16 md:py-24">
        <motion.h2
          className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Frequently asked questions
        </motion.h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {qas.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                className={`${glass} rounded-2xl`}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
              >
                <button
                  className="flex w-full items-center justify-between p-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="font-medium">{item.q}</span>
                  <ArrowRight
                    size={18}
                    className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="px-4 pb-4 text-white/70"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <Container className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500" />
          <span className="text-sm font-medium">Verifa</span>
        </div>
        <div className="text-center text-xs text-white/50 md:text-left">
          © {new Date().getFullYear()} Verifa. All rights reserved.
        </div>
        <div className="flex items-center gap-3 text-xs text-white/60">
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#">Contact</a>
        </div>
      </Container>
    </footer>
  );
};

// -----------------------------
// App
// -----------------------------
export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Integrations />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
