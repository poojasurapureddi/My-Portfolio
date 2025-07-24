import React from 'react';
import { Github, Linkedin, Mail, } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/saisrinivasdasari', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/saisrinivas-dasari/', label: 'LinkedIn' },
    { icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg>
      ), url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={20} />, url: 'mailto:Saisrinivasdasari2000@gmail.com', label: 'Email' },
  ];
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-primary-500 mb-2">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Creating beautiful, functional, and accessible digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:text-white transition-colors"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};