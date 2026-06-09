"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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
const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

```
try {
  await emailjs.send(
    "service_hkw426o",
    "template_cug4kxt",
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    "w9NqiKoYQxqCWk9Bx"
  );

  alert("Message sent successfully!");

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
} catch (error) {
  console.error(error);
  alert("Failed to send message.");
}
```

};

return ( <section
   id="contact"
   className="max-w-7xl mx-auto py-24 px-6"
 >
<motion.h2
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className="text-5xl font-bold text-cyan-400 mb-10"
>
Contact Me
</motion.h2>

```
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <Card className="bg-slate-900 border-slate-800 shadow-lg shadow-cyan-500/10">
      <CardHeader>
        <CardTitle className="text-white text-2xl text-center">
          Let's Work Together
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-400"
          />

          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-400"
          />

          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text"
            placeholder="Subject"
            className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-400"
          />

          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, internship opportunity, collaboration, or any questions you have..."
            className="min-h-[150px] bg-slate-950 border-slate-700 text-white placeholder:text-slate-400"
          />

          <Button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  </motion.div>
</section>

);
}
