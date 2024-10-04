import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  const emailRef = useRef(null); // Ref for the email text

  return (
    <section className="bg-gray-800 py-12" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6 mt-16">Contact Me</h2>
        <p className="text-gray-400 mb-8">Feel free to reach out for any project or just to connect.</p>

        {/* Email with shooting star and hover animation */}
        <div className="text-center text-white text-lg relative">
          <p>
            Email me at:{" "}
            <a
              ref={emailRef}
              href="mailto:keviccccal@gmail.com"
              className="text-blue-200 hover:text-pink-200 transition-transform"
              style={{ position: 'relative', zIndex: 1 }}
            >
              keviccccal@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
