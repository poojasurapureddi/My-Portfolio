import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard, Project } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';

const projects: Project[] = [
  {
    id: 1,
    title: 'Sathavahana – Billing Management Platform',
    description: "Sathavahana is a responsive billing management platform designed to simplify and automate the billing process. It provides users with dynamic options to calculate bills and access detailed breakdowns of charges, ensuring transparency and accuracy in financial transactions. The system integrates seamlessly with backend services to enable smooth data flow and real-time updates. As a frontend developer, I developed the platform using Next.js, React.js, and Tailwind CSS, focusing on building a responsive and intuitive user interface. I optimized API integrations with backend services to enhance performance and data synchronization, which improved transparency and increased user satisfaction by 30%." ,
    image: '/assets/sathavahana1.png',
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript/ES6+", "Git", "GraphQl"],
    liveUrl: 'https://sk-catering.vercel.app.com',
    githubUrl: 'https://github.com/poojasurapureddi',
    featured: true,
  },
  {
    id: 2,
    title: 'QR Gate -Adminpanel',
    description: "QR Gate is a web-based admin panel designed for educational institutes to manage students, staff, wardens, and parents. It supports multiple access levels, including Super Admin and Institute Admin, and includes modules like User Management, Campus Setup, ID Configuration, and QR-based Student Tracking.\n\nAs a frontend intern, I assisted in developing UI components using React and Tailwind CSS, and gained hands-on experience in creating dynamic forms, implementing form validations, and integrating data using GraphQL APIs for features like student creation, state management, and role assignments. I worked closely with senior developers to ensure seamless functionality across key modules.",
    image: '/assets/QR.png',
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript/ES6+", "Git", "GraphQl"],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/poojasurapureddi',
  },
  {
    id: 3,
    title: ' Abhinav Bharath Dashboard',
    description: 'Abhinav Bharath is a civic engagement platform that provides a powerful admin dashboard to track user behavior, content performance, and leader activities. It features real-time analytics segmented by location, user type, platform, and gender.\n\nThe dashboard includes modules for user engagement, post moderation, leader performance, survey & manifesto tracking, and system-level metrics like login attempts and push notifications.\n\nAs a frontend intern, I contributed to building analytics and reporting components using React and Tailwind CSS, gaining experience in handling dynamic visualizations, date/location-based filtering, and integrating data from GraphQL APIs under senior developer guidance.',
    image: '/assets/AB.png',
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript/ES6+", "Git", "GraphQl"],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/poojasurapureddi',
  },
  {
    id: 4,
    title: 'Laverne – Real Estate Platform ',
    description: "Laverne is a responsive real estate website designed to showcase properties efficiently while providing a seamless browsing experience for users. The platform includes advanced search and filtering options, performance optimizations, SEO enhancements, and email-based customer interaction to improve engagement and generate leads.As a frontend developer, I developed and deployed the platform using Next.js, React, and Tailwind CSS, focusing on creating a responsive and user-friendly interface. I implemented advanced search and filtering functionality, optimized site performance and SEO, and integrated email-based interactions to enhance user engagement and lead generation.",
    image: '/assets/laverne2.png',
    tags: ['React',"Next.js", "Tailwind CSS", "JavaScript/ES6+", "Git", "GraphQl"],
    liveUrl: 'https://www.thelaverneestates.com/',
    githubUrl: 'https://github.com/poojasurapureddi',
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