import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'projects', 'about', 'contact']; // IDs of the sections
  const navLinksRef = useRef([]); // References for each nav link

  useEffect(() => {
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: `#${section}`, // The ID of each section
        start: 'top 80%', // Trigger when the section comes into view
        end: 'bottom 20%', // Trigger when the section leaves view
        onEnter: () => setActiveSection(section), // When entering the section
        onEnterBack: () => setActiveSection(section), // When scrolling up into the section
        onLeaveBack: () => setActiveSection(sections[index - 1]), // Scroll up to previous section
      });
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex flex-1 justify-center">
          <ul className="flex space-x-10 text-white text-l relative">
            {sections.map((section, index) => (
              <li key={section} ref={(el) => (navLinksRef.current[index] = el)}>
                <a
                  href={`#${section}`}
                  id={`nav-${section}`}
                  className={`hover:text-gray-400 px-4 py-2 ${activeSection === section ? 'text-white' : 'text-gray-400'
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Animated Star (right side of navbar) */}
        <div className="flex items-center">
          <div
            className="w-8 h-8 bg-blue-500 clip-star mr-4"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
