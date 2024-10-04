import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reactLogo from '../assets/reactlogo.png';
import jsLogo from '../assets/javascriptlogo.png';
import cssLogo from '../assets/csslogo.png';
import htmlLogo from '../assets/htmllogo.png';
import tailwindLogo from '../assets/tailwindcsslogo.png';
import Clogo from '../assets/Clogo.png';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: 'HTML', imageUrl: htmlLogo },
  { name: 'CSS', imageUrl: cssLogo },
  { name: 'JavaScript', imageUrl: jsLogo },
  { name: 'React', imageUrl: reactLogo },
  { name: 'TailwindCSS', imageUrl: tailwindLogo },
  { name: 'C#', imageUrl: Clogo }
];

const id = "skills", Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    // Uniform entry animation for all skill boxes
    gsap.fromTo(
      skillRefs.current,
      { opacity: 0, y: 50 }, // Initial state for all elements
      {
        opacity: 1,
        y: 0,
        duration: 0.6, // Consistent duration for all elements
        ease: 'power3.out',
        stagger: 0.2, // Delay between each element's animation
        scrollTrigger: {
          trigger: skillRefs.current,
          start: 'top 80%', // Trigger when 80% of the viewport is in view
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const handleMouseEnter = (index) => {
    // 3D Rotation effect on hover
    gsap.to(skillRefs.current[index], {
      scale: 1.1,
      rotateY: 15, // Rotates around Y-axis for 3D effect
      rotateX: -15, // Tilts slightly around X-axis
      boxShadow: '0px 8px 15px rgba(255, 255, 255, 0.6)', // Glow effect
      duration: 0.1,
    });
  };

  const handleMouseLeave = (index) => {
    // Reset 3D rotation and scale on hover out
    gsap.to(skillRefs.current[index], {
      scale: 1,
      rotateY: 0.1,
      rotateX: 0.1, // Reset rotation
      boxShadow: 'none',
      duration: 0.1,
    });
  };

  return (
    <section className="py-12 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-white mb-8 mt-16">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillRefs.current[index] = el)} // Attach ref for GSAP animations
            className="bg-gray-800 p-4 w-32 h-32 mx-auto rounded-lg flex flex-col items-center transition-all"
            onMouseEnter={() => handleMouseEnter(index)} // Hover to trigger 3D rotation
            onMouseLeave={() => handleMouseLeave(index)} // Reset on mouse leave
          >
            <img src={skill.imageUrl} alt={skill.name} className="w-10 h-10 mb-2" />
            <span className="text-white text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
