import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  const textAlign = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-12 ${textAlign}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className={`h-1 w-20 bg-primary-500 mt-4 ${centered ? 'mx-auto' : ''}`}
        initial={{ width: 0 }}
        whileInView={{ width: centered ? 80 : 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </div>
  );
};