"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-bold text-cyan-400 text-centre "
      >
        Internship Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-semibold text-white">
          Cyber Security Intern
        </h3>

        <p className="text-cyan-400 mt-2">
          Woogle Tech • 2025
        </p>

        <ul className="mt-4 space-y-2 text-slate-300">
          <li>• Vulnerability Assessment</li>
          <li>• Security Awareness Training</li>
          <li>• Threat Analysis & Mitigation</li>
          <li>• Technical Documentation</li>
        </ul>

      </motion.div>

    </section>
  );
}