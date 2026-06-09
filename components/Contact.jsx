"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();


setLoading(true);

try {
  const result = await emailjs.send(
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

  console.log("SUCCESS:", result);

  alert("Message Sent Successfully!");

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
} catch (error) {
  console.error("EMAILJS ERROR:", error);

  alert(
    error?.text ||
    error?.message ||
    "Failed to send email. Check console."
  );
}

setLoading(false);


};

return ( <section
   id="contact"
   className="max-w-7xl mx-auto py-24 px-6"
 >
<motion.h2
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className="text-5xl font-bold text-cyan-400 mb-10 text-center"
>
Contact Me
</motion.h2>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <Card className="bg-slate-900 border-slate-800 shadow-lg shadow-cyan-500/10">
      <CardHeader>
        <CardTitle className="text-cyan-400 text-2xl text-center ">
          Let's Work Together
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            required
          />

          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            required
            className="text-white"
          />

          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text"
            placeholder="Subject"
            required
            className="text-white"
          />

          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, internship opportunity, collaboration, or any questions you have..."
            required
            className="min-h-[150px] text-white"
            
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 text-black font-semibold py-3 rounded-md transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </CardContent>
    </Card>
  </motion.div>
</section>

);
}
