import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, PlayCircle, ShieldCheck, Zap, ClipboardCheck, Globe, Link2, Upload, Image as ImageIcon, Video, FileText, Search, CheckCircle2, XCircle } from "lucide-react";
import Container from "./Container";
import GradientText from "./GradientText";
import Pill from "./Pill";

const glass = "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]";
const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
  }),
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

export default Hero;