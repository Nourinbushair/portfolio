"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
Card,
CardContent,
CardHeader,
CardTitle,
} from "@/components/ui/card";

const projects = [
{
title: "Cybersecurity Portfolio",
description:
"Modern personal portfolio built with Next.js, Tailwind CSS, Framer Motion and shadcn/ui showcasing skills, certifications, projects and internship experience.",
tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
github: "https://github.com/NourinBushair/portfolio",
},

{
title: "Python Packet Sniffer",
description:
"Network packet analyzer built using Scapy for learning traffic inspection, packet capture and cybersecurity concepts.",
tech: ["Python", "Scapy", "Networking"],
github: "https://github.com/NourinBushair/python-packet-sniffer",
},

{
title: "Wi-Fi Network Analyzer",
description:
"Scans nearby wireless networks and displays signal strength and security information for learning network analysis.",
tech: ["Python", "Networking"],
github: "https://github.com/NourinBushair/wifi-network-analyzer",
},

{
title: "Password Strength Checker",
description:
"Analyzes password security using regex patterns and cybersecurity best practices.",
tech: ["Python", "Regex", "Cybersecurity"],
github: "https://github.com/NourinBushair/password-strength-checker",
},

{
title: "File Integrity Checker",
description:
"Uses SHA-256 hashing to verify file integrity and detect unauthorized modifications.",
tech: ["Python", "SHA-256", "Security"],
github: "https://github.com/NourinBushair/file-integrity-checker",
},

{
title: "Port Scanner",
description:
"Socket-based network scanner for discovering open ports and understanding network security fundamentals.",
tech: ["Python", "Sockets", "Networking"],
github: "https://github.com/NourinBushair/python-port-scanner",
},

{
title: "caesar cipher tool",
description:
"A beginner-friendly Python Caesar Cipher tool for encrypting and decrypting messages using classical cryptography techniques.",
tech: ["Python", "Sockets", "Networking"],
github: "https://github.com/NourinBushair/caesar-cipher-tool",
},

{
title: "keylogger detection",
description:
"A beginner-friendly Python tool that detects suspicious keylogger-like processes for cybersecurity learning and defensive security practice.",
tech: ["Python", "Sockets", "Networking"],
github: "https://github.com/NourinBushair/keylogger-detection",
},

{
title: "my electron app",
description:
"A simple Electron-based desktop application built using HTML, CSS, JavaScript, and Node.js for learning desktop app development.",
tech: ["Python", "Sockets", "Networking"],
github: "https://github.com/NourinBushair/my-electron-app",
},
];

export default function Projects() {
return ( <section
   id="projects"
   className="max-w-7xl mx-auto py-24 px-6"
 >
<motion.h2
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className="text-5xl font-bold text-cyan-400 text-center mb-12"
>
Projects
</motion.h2>

```
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Card className="h-full bg-slate-900 border-slate-800 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">

          <CardHeader>
            <CardTitle className="text-white text-xl">
              {project.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-slate-300 leading-7">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Button
              asChild
              className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </Button>
          </CardContent>

        </Card>
      </motion.div>
    ))}
  </div>
</section>

);
}
