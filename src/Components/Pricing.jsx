import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "./Container";
import Pill from "./Pill";
import { plans } from "../Consts/Plans";

const glass = "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]";
const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
  }),
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

export default Pricing;