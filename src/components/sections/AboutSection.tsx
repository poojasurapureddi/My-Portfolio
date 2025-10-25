import React from 'react';
// import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ArrowRight, Calendar, Code, Map, User } from 'lucide-react';
import { Button } from '../ui/Button';

export const AboutSection: React.FC = () => {
  const { ref: ref1, inView: inView1 } = useScrollAnimation();
  const { ref: ref2, inView: inView2 } = useScrollAnimation({ delay: 200 });
  
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better and discover my path in the world of development."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={ref1} className={`transition-all duration-700 ${inView1 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <img 
                src="/assets/Aboutpageimg.png" 
                // rounded-lg shadow-lg src="https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="About Me" 
                className="w-full h-[750px] rounded-lg shadow-md"
              />
              
              <div className="absolute -bottom-6 -right-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <p className="font-bold text-xl text-primary-500">9+ Months</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Experience</p>
              </div>
            </div>
          </div>
          
          <div ref={ref2} className={`transition-all duration-700 delay-200 ${inView2 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-4">Frontend Developer Focused on Crafting Seamless User Experiences</h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
I'm a frontend developer passionate about building clean, responsive, and user-friendly interfaces. Currently working as a Frontend Developer Intern at Vithi IT, I contribute to the development of dynamic, data-driven HRMS systems using React, Next.js, and Tailwind CSS.</p>
<p className="text-gray-600 dark:text-gray-400 mb-6">
I specialize in crafting seamless user experiences by integrating frontend components with powerful GraphQL APIs and ensuring performance, accessibility, and code reusability. My work is deeply rooted in collaboration, as I work closely with backend and design teams to translate business logic into intuitive UI.</p>
<p className="text-gray-600 dark:text-gray-400 mb-6">
With hands-on experience in the full development lifecycle—from prototyping to deployment—I strive to create interfaces that are not only functional but delightful to use.            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-primary-500">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Name</h4>
                  <p className="text-gray-600 dark:text-gray-400">Pooja Surapureddi</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-primary-500">
                  <Map size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Hydrabad, TG</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-primary-500">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">9+ months</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-primary-500">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Specialization</h4>
                  <p className="text-gray-600 dark:text-gray-400">React, Next.js</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
When I'm not coding, you'll find me experimenting with modern UI trends, building side projects to sharpen my React skills, or diving into design systems. I’m passionate about continuous learning and love sharing practical insights with the developer community.            </p>
            
            {/* <Button 
              variant="primary"
              icon={<ArrowRight size={16} />}
              onClick={() => window.open('src/srinivas_frontend_resume', '_blank')}
            >
              Download Resume
            </Button> */}
            <a 
              href="/Pooja-Surapureddi-Resume.pdf" 
              download="Pooja-Surapureddi-Resume.pdf" 
              style={{ textDecoration: 'none' }}
            >
              <Button 
                variant="primary" 
                icon={<ArrowRight size={16} />}
              >
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};