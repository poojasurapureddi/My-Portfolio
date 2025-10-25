import React from 'react';
import { motion } from 'framer-motion';
import { SkillBar } from '../ui/SkillBar';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Code, Cpu, } from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: Array<{ name: string; level: number }>;
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code size={24} />,
    title: 'Frontend Development',
    color: 'bg-primary-500',
    skills: [
      { name: 'HTML & CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
    ],
  },
  // {
  //   icon: <Database size={24} />,
  //   title: 'Backend Development',
  //   color: 'bg-secondary-600',
  //   skills: [
  //     { name: 'Node.js', level: 85 },
  //     { name: 'Express', level: 88 },
  //     { name: 'MongoDB', level: 80 },
  //     { name: 'SQL', level: 75 },
  //   ],
  // },
  // {
  //   icon: <Layout size={24} />,
  //   title: 'UI/UX Design',
  //   color: 'bg-accent-400',
  //   skills: [
  //     { name: 'Figma', level: 80 },
  //     { name: 'Adobe XD', level: 75 },
  //     { name: 'Wireframing', level: 85 },
  //     { name: 'Prototyping', level: 80 },
  //   ],
  // },
  {
    icon: <Cpu size={24} />,
    title: 'Other Skills',
    color: 'bg-success-500',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'SQL', level: 70 },
      { name: 'VsCode', level: 75 },
      { name: 'python', level: 80 },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <SectionHeading
          title="My Skills"
          subtitle="Here's a breakdown of my technical skills and expertise."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.title} 
              category={category} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  category: SkillCategory;
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, index }) => {
  const { ref, inView } = useScrollAnimation({ delay: index * 100 });
  
  return (
    <motion.div 
      ref={ref}
      className={`card transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className={`p-3 rounded-lg mr-4 text-white ${category.color.replace('bg-', 'bg-')}`}>
          {category.icon}
        </div>
        <h3 className="text-xl font-bold">{category.title}</h3>
      </div>
      
      <div>
        {category.skills.map(skill => (
          <SkillBar 
            key={skill.name} 
            name={skill.name} 
            level={skill.level} 
            color={category.color} 
          />
        ))}
      </div>
    </motion.div>
  );
};