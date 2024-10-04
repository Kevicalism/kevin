import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BackgroundParticles from './BackgroundParticles'; // Import the particles

const id = "home", Hero = () => {
  const starBgRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const stars = starBgRef.current.querySelectorAll('.star');

    // GSAP animation for continuous random star movement
    stars.forEach((star) => {
      gsap.to(star, {
        x: 'random(-100, 100)', // Move stars in random x direction
        y: 'random(-100, 100)', // Move stars in random y direction
        duration: 'random(3, 6)', // Different speed for each star
        repeat: -1, // Infinite loop
        yoyo: true, // Move back to the original position
        ease: 'power1.inOut', // Smooth movement
      });
    });

    // Twinkle effect (slight opacity change)
    gsap.to(stars, {
      opacity: 'random(0.5, 1)', // Random opacity for twinkling effect
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      stagger: 0.1, // Small delay between stars
    });

    // Bento Card Animation: Move slightly up, blur and fade in quickly
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, filter: 'blur(10px)', border: '0px solid rgba(59, 130, 246, 0)' }, // Start with blur and slightly below position
      {
        opacity: 1,
        y: 0, // Move to the center position
        filter: 'blur(0px)', // Remove blur
        border: '3px solid rgba(59, 130, 246, 0.7)', // Blue border
        duration: 0.2, // Faster duration for the animation
        ease: 'power3.out', // Smooth easing
      }
    );

    // Remove scale/hover interaction, only subtle hover effect (without scaling or moving)
    cardRef.current.addEventListener('mouseenter', () => {
      gsap.to(cardRef.current, {
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow on hover
        duration: 0.3,
        ease: 'power3.out',
      });
    });

    cardRef.current.addEventListener('mouseleave', () => {
      gsap.to(cardRef.current, {
        boxShadow: 'none', // Remove shadow after hover
        duration: 0.3,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <section className="relative bg-gray-900 text-white h-screen flex">
      {/* Limit particle container to hero section only */}
      <div className="w-full h-screen relative flex justify-center items-center">
        <div
          ref={cardRef}
          className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out w-3/4 z-10"
          style={{ borderRadius: '15px', border: '3px solid rgba(59, 130, 246, 0.7)' }} // Blue border
        >
          <h2 className="text-2xl font-semibold mb-4">My Portfolio Website</h2>
          <p>
            Just some brief explanations of what I've done. What I know currently, and some projects!
          </p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Learn More
          </button>
        </div>

        {/* Limit particles to hero section */}
        <div ref={starBgRef} className="absolute inset-0 z-0 overflow-hidden h-screen">
          <BackgroundParticles /> {/* Include BackgroundParticles */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
