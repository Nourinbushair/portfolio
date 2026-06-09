"use client";

import { motion } from "framer-motion";
import {
Card,
CardContent,
CardHeader,
CardTitle,
} from "@/components/ui/card";

const certifications = [
{
title: "Cyber Security Internship Completion Certificate",
issuer: "Woogle Tech",
year: "2025",
},
{
title: "Hack the Web: Web Application Penetration Testing Workshop",
issuer: "Offenso Hackers Academy",
year: "2025",
},
{
title: "Fundamentals of Java Programming",
issuer: "Coursera",
year: "2024",
},
{
title: "Introduction to Java",
issuer: "Coursera LearnQuest",
year: "2024",
},
{
title: "Introduction to Agile Development and Scrum",
issuer: "Coursera IBM",
year: "2025",
},
{
title: "Programming Foundations: Beyond the Fundamentals",
issuer: "LinkedIn Learning",
year: "2025",
},
{
title: "Programming Foundations: Algorithms",
issuer: "LinkedIn Learning",
year: "2025",
},
{
title: "Prompt Engineering Workshop",
issuer: "AccelerateX",
year: "2024",
},
{
title: "5-Day Internship on AI Project Development",
issuer: "AccelerateX",
year: "2024",
},
{
title: "AI Builders Lab",
issuer: "Google for Developers & Hack2Skill",
year: "2025",
},
{
title: "WordPress Essential Training",
issuer: "LinkedIn Learning",
year: "2026",
},
{
title: "Cisco Networking",
issuer: "Cisco",
year: "2026",
},
{
title: "Build and Configure Networks with Packet Tracer",
issuer: "LinkedIn Learning",
year: "2026",
},
];

export default function Certificates() {
return ( <section
   id="certifications"
   className="max-w-7xl mx-auto py-24 px-6"
 >
<motion.h2
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
className="text-5xl font-bold text-cyan-400 mb-12"
>
Certifications
</motion.h2>

```
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {certifications.map((cert, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        <Card className="h-full bg-slate-900 border-slate-800 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">

          <CardHeader>
            <CardTitle className="text-white text-lg">
              {cert.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-cyan-400 font-medium">
              {cert.issuer}
            </p>

            <p className="text-slate-400 mt-2">
              {cert.year}
            </p>
          </CardContent>

        </Card>
      </motion.div>
    ))}

  </div>
</section>

);
}
