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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"; // Removed the raw .tsx extension from import
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // States to control the Shadcn AlertDialog
  const [isOpen, setIsOpen] = useState(false);
  const [alertContent, setAlertContent] = useState({ title: "", description: "" });

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

      // Set success message and open the modal
      setAlertContent({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I will get back to you as soon as possible.",
      });
      setIsOpen(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EMAILJS ERROR:", error);

      // Set error message and open the modal
      setAlertContent({
        title: "Submission Failed",
        description: error?.text || error?.message || "Failed to send email. Please check your console.",
      });
      setIsOpen(true);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto py-24 px-6">
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

              {/* Swapped standard button out for Shadcn Button component */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 text-black font-semibold py-3 h-auto transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

     
<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
  <AlertDialogContent className="bg-slate-950 border border-cyan-500/30 text-white shadow-xl shadow-cyan-500/5 max-w-[400px] rounded-lg">
    <AlertDialogHeader>
      <AlertDialogTitle className="text-cyan-400 text-2xl font-bold tracking-wide">
        {alertContent.title}
      </AlertDialogTitle>
      <AlertDialogDescription className="text-slate-400 text-sm mt-2 leading-relaxed">
        {alertContent.description}
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter className="mt-6">
      <AlertDialogAction 
        className="w-full bg-cyan-500 hover:bg-cyan-600 active:scale-[0.98] text-black font-bold uppercase tracking-wider py-2.5 rounded transition-all duration-200"
      >
        okay
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </section>
  );
}
