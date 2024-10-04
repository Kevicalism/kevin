// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center text-white">
        {/* Footer Navigation */}
        <ul className="flex justify-center space-x-6 mb-4">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-blue-500 hover:text-blue-400">
            <i className="fab fa-twitter"></i> {/* Add Font Awesome for icons */}
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-400">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-400">
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
