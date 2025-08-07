import React from "react";
import { motion } from "motion/react";
import Container from "./Container";
import { items } from "../Consts/Features";

const glass = "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]";
const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const Features = () => {
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

export default Features;