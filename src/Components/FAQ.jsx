import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import { qas } from "../Consts/FQ";

const glass = "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]";
const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const FAQ = () => {
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

export default FAQ;