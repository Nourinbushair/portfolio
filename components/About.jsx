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
  <div className="flex flex-row items-center gap-6">

    <img
      src="/profile.jpg"
      alt="Nourin Bushair"
      className="w-28 h-28 md:w-48 md:h-48 rounded-full object-cover border-4 border-cyan-400"
    />

    <p className="text-lg text-slate-300 leading-8">
      I am a passionate BCA student specializing in Cybersecurity at Jain
      (Deemed-to-be) University...
    </p>

  </div>
</motion.div>
    </section>
  );
}