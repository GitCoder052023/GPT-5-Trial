import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Container from "./Container";
import Pill from "./Pill";

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

export default Navbar;