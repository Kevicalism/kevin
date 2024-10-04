import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer className="mt-auto" /> {/* Ensure footer sticks to bottom */}

    </div>
  );
};

export default App;
