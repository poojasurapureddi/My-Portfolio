import React , { useState }from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, image, tags, liveUrl, githubUrl, featured } = project;
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className={`card h-full flex flex-col ${featured ? 'col-span-2 row-span-2' : ''}`}
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map(tag => (
          <span 
            key={tag} 
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">{description}</p> */}
      <div className="mb-4">
      <p 
        className={`text-gray-600 dark:text-gray-400 flex-grow ${
          !isExpanded ? 'line-clamp-3' : ''
        }`}
      >
        {description}
      </p>
      {description.split('\n').length > 3 || description.length > 150 ? (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:underline mt-1 text-sm"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      ) : null}
    </div>
      
      <div className="flex gap-3 mt-auto">
        {githubUrl && (
          <Button 
            variant="outline" 
            size="sm"
            icon={<Github size={16} />}
            onClick={() => window.open(githubUrl, '_blank')}
          >
            Code
          </Button>
        )}
        
        {liveUrl && (
          <Button 
            variant="primary" 
            size="sm"
            icon={<ExternalLink size={16} />}
            onClick={() => window.open(liveUrl, '_blank')}
          >
            Live Demo
          </Button>
        )}
      </div>
    </motion.div>
  );
};