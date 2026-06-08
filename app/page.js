import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Quick Overview */}
      <Stats />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Internship Experience */}
      <Experience />

      {/* Projects */}
      <Projects />

      {/* Certifications */}
      <Certifications />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}