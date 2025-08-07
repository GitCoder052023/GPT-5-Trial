import React from "react";
import { motion } from "motion/react";
import { Link2 } from "lucide-react";
import Container from "./Container";
import Pill from "./Pill";
import { chips } from "../Consts/Integrations";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const Integrations = () => {
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

export default Integrations;