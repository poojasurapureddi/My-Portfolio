import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard, Project } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';

const projects: Project[] = [
  {
    id: 1,
    title: 'Astona – Business & HRMS Platform',
    description: "Astona is a multi-company management system that provides real-time analytics on employees, sales, purchases, and expenses. It includes modules for HRMS (Payroll, Attendance, Leave, Performance, Employee Data) and Business Management (Sales, Purchase, Expense, Entity).\n\nAs a frontend intern, I contributed to building reusable UI components using React, Next.js, and Tailwind CSS, working closely with senior developers to implement key features across the HRMS and Business modules.",
    image: '/assets/Astona.png',
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript/ES6+", "Git", "GraphQl"],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'QR Gate -Adminpanel',
    description: "QR Gate is a web-based admin panel designed for educational institutes to manage students, staff, wardens, and parents. It supports multiple access levels, including Super Admin and Institute Admin, and includes modules like User Management, Campus Setup, ID Configuration, and QR-based Student Tracking.\n\nAs a frontend intern, I assisted in developing UI components using React and Tailwind CSS, and gained hands-on experience in creating dynamic forms, implementing form validations, and integrating data using GraphQL APIs for features like student creation, state management, and role assignments. I worked closely with senior developers to ensure seamless functionality across key modules.",
    image: '/assets/QR.png',
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript/ES6+", "Git", "GraphQl"],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: ' Abhinav Bharath Dashboard',
    description: 'Abhinav Bharath is a civic engagement platform that provides a powerful admin dashboard to track user behavior, content performance, and leader activities. It features real-time analytics segmented by location, user type, platform, and gender.\n\nThe dashboard includes modules for user engagement, post moderation, leader performance, survey & manifesto tracking, and system-level metrics like login attempts and push notifications.\n\nAs a frontend intern, I contributed to building analytics and reporting components using React and Tailwind CSS, gaining experience in handling dynamic visualizations, date/location-based filtering, and integrating data from GraphQL APIs under senior developer guidance.',
    image: '/assets/AB.png',
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript/ES6+", "Git", "GraphQl"],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Hesh Motors -Electric Trike ',
    description: "A modern, responsive static website built to showcase Hesh Motors’ flagship electric reverse trike—a hybrid vehicle with patented tilt-system technology for enhanced stability and performance.\n\nI developed key pages like Home, Features, and Technology using HTML5, CSS3, and JavaScript, and implemented interactive animations with GSAP and ScrollReveal for an engaging user experience. The site was optimized for performance, fully responsive across devices, and designed in close collaboration with UI/UX designers to reflect the brand's innovation.",
    image: '/assets/hesh.png',
    tags: ['React',"Next.js", "Tailwind CSS", "JavaScript/ES6+", "Git", "GraphQl"],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  // {
  //   id: 5,
  //   title: 'Fitness Tracking App',
  //   description: 'A mobile-first fitness tracking application with workout plans and progress charts.',
  //   image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   tags: ['React Native', 'Redux', 'Firebase'],
  //   liveUrl: 'https://example.com',
  //   githubUrl: 'https://github.com',
  // },
];

const categories = ['All', 'React'];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'All') return true;
    return project.tags.includes(activeCategory);
  });
  
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <SectionHeading
          title="My Projects"
          subtitle="Check out some of my recent work and personal projects."
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence> */}
        <AnimatePresence mode="wait">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

    {/* Projects grid */}
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <ProjectCard 
                  project={project} 
                  // className="h-full transition-all duration-300 group-hover:shadow-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-xl font-medium text-gray-500">
              No projects found in this category
            </h3>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  </div>
</AnimatePresence>
      </div>
    </section>
  );
};