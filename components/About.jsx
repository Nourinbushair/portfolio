"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-cyan-400"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-8"
      >
        <p className="text-lg text-slate-300 leading-8">
          I am a BCA Cybersecurity student at Jain University
          passionate about Ethical Hacking, Linux,
          Network Security and Modern Web Development.

          I enjoy solving problems, building projects,
          and continuously learning new technologies.
        </p>
      </motion.div>
    </section>
  );
}