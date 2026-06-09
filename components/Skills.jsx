"use client";

import { motion } from "framer-motion";

const skills = [
  "Cybersecurity",
  "Network Security",
  "Kali Linux",
  "Nmap",
  "Wireshark",
  "GitHub",
  "HTML",
  "CSS",
  "Python",
  "Java",
  "WordPress",
  "Next.js",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto py-24 px-6"
    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-10 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-xl
              p-5
              text-center
              text-white
              font-medium
              hover:border-cyan-400
              hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
              transition-all
            "
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}