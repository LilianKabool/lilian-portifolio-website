import Hero from "../../features/home/components/Hero";

import About from "../pages/About";
import Projects from "./Projects";
import Technologies from "./technologies";
import Contact from "./Contact";


function Home() {
  return (
    <main>

      {/* Hero Section */}
      <Hero />


      {/* Divider */}
      <div className="border-b border-[var(--color-muted)]/70" />


      {/* About Section */}
      <About />


      {/* Divider */}
      <div className="border-b border-[var(--color-muted)]/70" />


      {/* Projects Section */}
      <Projects />


      {/* Divider */}
      <div className="border-b border-[var(--color-muted)]/70" />


      {/* Technologies Section */}
      <Technologies />


      {/* Divider */}
      <div className="border-b border-[var(--color-muted)]/70" />


      {/* Contact Section */}
      <Contact />


    </main>
  );
}


export default Home;