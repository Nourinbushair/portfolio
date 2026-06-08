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

      
    </section>
  );
}