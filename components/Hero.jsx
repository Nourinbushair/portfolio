"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 w-full">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-cyan-400 font-semibold text-lg">
              Hello, I'm
            </p>

            <h1 className="mt-3 text-5xl md:text-7xl font-bold leading-tight">
              Nourin
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Bushair K.B.
              </span>
            </h1>

            <div className="mt-6 text-2xl font-medium text-cyan-300">
              <TypeAnimation
                sequence={[
                  "Cybersecurity Student",
                  2000,
                  "Web Developer",
                  2000,
                  "Linux Enthusiast",
                  2000,
                  "Ethical Hacking Learner",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-6 text-slate-300 max-w-xl leading-8">
              BCA student passionate about Cybersecurity,
              Ethical Hacking, Linux, Networking and
              Modern Web Development. I enjoy building
              secure applications and continuously learning
              new technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="/resume.pdf"
                className="
                  flex items-center gap-2
                  bg-cyan-500
                  hover:bg-cyan-600
                  px-6 py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="#contact"
                className="
                  border border-slate-700
                  px-6 py-3
                  rounded-xl
                  hover:border-cyan-400
                  transition
                "
              >
                Contact Me
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8 text-3xl">

              <a
                href="https://github.com/NourinBushair"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-cyan-400 transition hover:scale-110" />
              </a>

              <a
                href="https://linkedin.com/in/nourin-bushair-kb-59811b358"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-cyan-400 transition hover:scale-110" />
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400/30 blur-3xl rounded-full scale-125"></div>

              {/* Glass Background */}
              <div className="
                relative
                p-4
                rounded-full
                bg-white/5
                backdrop-blur-md
                border
                border-white/10
              ">

                <img
                  src="/profile.jpg"
                  alt="Nourin Bushair"
                  className="
                    w-80
                    h-80
                    md:w-96
                    md:h-96
                    object-cover
                    object-top
                    rounded-full
                    border-4
                    border-cyan-400
                    shadow-[0_0_40px_rgba(34,211,238,0.6)]
                  "
                />

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}