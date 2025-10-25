import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-transparent dark:from-primary-900/10 dark:to-transparent -z-10" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Frontend Developer
            </motion.span>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I'm <span className="text-primary-500">Pooja Surapureddi</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Crafting sleek, responsive, and user-first interfaces with modern web tech.            
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
              >
                Let's Talk
              </Button>
              
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/poojasurapureddi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/pooja-surapureddi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="/assets/Pooja.jpg" 
                // src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Pooja Surapureddi" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};