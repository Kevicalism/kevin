import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import workinprogress from '../assets/workinprogress.png'; // Correct import

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const id = "projects", Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    // Rotation with Scroll and Fade & Blur In Effect
    gsap.fromTo(
      projectRefs.current,
      { opacity: 0, filter: 'blur(10px)', rotateY: 45 }, // Start blurred, rotated
      {
        opacity: 1,
        filter: 'blur(0px)', // Remove blur
        rotateY: 0, // No rotation
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectRefs.current,
          start: 'top 80%', // Start animation when cards enter 80% of the viewport
          end: 'bottom 20%'
        },
      }
    );

    // Parallax Effect on Hover
    projectRefs.current.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Get mouse position relative to the card
        const y = e.clientY - rect.top;
        gsap.to(card, {
          x: (x - rect.width / 2) * 0.05, // Move based on cursor position
          y: (y - rect.height / 2) * 0.05,
          duration: 0.5, // Smooth transition
          ease: 'power3.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          x: 0,
          y: 0, // Reset position when the cursor leaves
          duration: 0.5,
          ease: 'power3.out',
        });
      });
    });
  }, []);

  const projectData = [
    {
      title: 'Project 1',
      description: 'This is the first project. It highlights awesome features.',
      imageUrl: workinprogress, // Use the imported workinprogress image
    },
    {
      title: 'Project 2',
      description: 'This is the second project.',
      imageUrl: workinprogress, // Use the imported workinprogress image
    },
    {
      title: 'Project 3',
      description: 'This is the third project.',
      imageUrl: workinprogress, // Use the imported workinprogress image
    },
  ];

  return (
    <section className="py-12 bg-gray-900 text-white">
      <h2 className="text-center text-3xl font-bold mb-8 mt-16">My Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)} // Add ref to each project card
            className="bg-gray-800 rounded-lg shadow-lg p-6 text-center"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-contain mb-4 rounded-lg" // Changed to object-contain
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
