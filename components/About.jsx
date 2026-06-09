"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto py-24 px-6 text-center"
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
        <p className="text-lg text-slate-300 leading-8 text-white ">
          I am a passionate BCA student specializing in Cybersecurity at Jain (Deemed-to-be) University. My interests lie in ethical hacking, network security, Linux administration, and modern web development. I enjoy exploring how technology works behind the scenes and continuously strive to expand my knowledge through hands-on projects, internships, and certifications.

          Alongside cybersecurity, I have developed skills in web technologies such as HTML, CSS, JavaScript, React, Next.js, and WordPress. I enjoy building responsive and user-friendly websites that combine functionality with modern design principles. My goal is to create solutions that are both secure and efficient while providing an excellent user experience.

          I am a lifelong learner who believes in continuous improvement and practical experience. Through academic projects, cybersecurity labs, and internship opportunities, I am developing the technical and problem-solving skills needed to succeed in the technology industry. I am actively seeking opportunities to contribute, learn from professionals, and grow into a skilled cybersecurity and web development professional.

        </p>
      </motion.div>
    </section>
  );
}