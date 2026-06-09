"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
Card,
CardContent,
CardHeader,
CardTitle,
} from "@/components/ui/card";

export default function Contact() {
return ( <section
   id="contact"
   className="max-w-6xl mx-auto py-24 px-6"
 >
<motion.h2
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
className="text-5xl font-bold text-cyan-400 mb-10"
>
Contact Me
</motion.h2>

```
  <Card className="bg-slate-900 border-slate-800">
    <CardHeader>
      <CardTitle className="text-white text-2xl">
        Let's Connect
      </CardTitle>
    </CardHeader>

    <CardContent>
      <form className="space-y-6">

        <Input
          type="text"
          placeholder="Your Name"
        />

        <Input
          type="email"
          placeholder="Your Email"
        />

        <Textarea
          placeholder="Your Message"
          className="min-h-[150px]"
        />

        <Button
          type="submit"
          className="w-full"
        >
          Send Message
        </Button>

      </form>
    </CardContent>
  </Card>
</section>
);
}
