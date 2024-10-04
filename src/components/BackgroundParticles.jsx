import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const BackgroundParticles = () => {
  useEffect(() => {
    const particles = gsap.utils.toArray('.particle');
    const depthFactor = [-200, -100, 0, 100, 200]; // Different depths for 3D effect

    particles.forEach((particle, i) => {
      const depth = depthFactor[Math.floor(Math.random() * depthFactor.length)];
      const delay = Math.random() * 5;
      const colorTypes = ['#FFFFFF', '#FFD700', '#FF6347', '#87CEEB']; // Star colors

      particle.style.backgroundColor = colorTypes[Math.floor(Math.random() * colorTypes.length)];
      particle.style.filter = `blur(${Math.abs(depth) / 50}px)`;

      gsap.to(particle, {
        x: `random(-300, 300)`,
        y: `random(-300, 300)`,
        z: depth, // Adding depth
        repeat: -1,
        yoyo: true,
        duration: `random(3, 6)`,
        ease: 'power1.inOut',
        delay: delay,
      });

      gsap.to(particle, {
        opacity: 'random(0.5, 1)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
      });

      gsap.to(particle, {
        rotation: 360,
        duration: `random(5, 10)`,
        repeat: -1,
        ease: 'linear',
      });
    });

    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      particles.forEach((particle) => {
        const dx = particle.getBoundingClientRect().left - mouseX;
        const dy = particle.getBoundingClientRect().top - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          gsap.to(particle, {
            x: `+=${dx / 5}`,
            y: `+=${dy / 5}`,
            duration: 0.5,
            ease: 'power3.out',
          });
        }
      });
    });

    // Create shooting stars within the hero section
    const createShootingStar = (delay = 0) => {
      const shootingStar = document.createElement('div');
      shootingStar.classList.add('shooting-star');
      document.querySelector('.particle-container').appendChild(shootingStar); // Append shooting star to particle container

      gsap.fromTo(
        shootingStar,
        { x: '100vw', y: '-20vh', opacity: 1, position: 'absolute' }, // Absolute position to contain within the hero
        {
          x: '-20vw',
          y: '100vh',
          opacity: 0,
          duration: 2,
          delay: delay,
          onComplete: () => {
            shootingStar.remove();
          },
        }
      );
    };

    // Trigger shooting stars in parallel
    setInterval(() => {
      createShootingStar();
      createShootingStar(0.2);
      createShootingStar(0.4);
    }, 5000);
  }, []);

  return (
    <div className="particle-container absolute inset-0 overflow-hidden" style={{ width: '100%', height: '100%' }}>
      {[...Array(150)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: '10px',
            height: '10px',
            position: 'absolute', // Absolute within hero section
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            borderRadius: '50%',
          }}
        ></div>
      ))}
    </div>
  );
};

export default BackgroundParticles;
