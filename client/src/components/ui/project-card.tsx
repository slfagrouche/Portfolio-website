import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [showDemo, setShowDemo] = useState(false);
  
  const toggleDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDemo(!showDemo);
  };
  
  return (
    <div className="beige-card beige-card-hover overflow-hidden bg-card">
      <div className="h-48 overflow-hidden relative group">
        {showDemo && project.demoVideo ? (
          <div className="w-full h-full">
            <iframe 
              src={project.demoVideo} 
              title={`${project.title} Demo`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img 
              src={project.imageUrl} 
              alt={`${project.title} Project`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {project.hasInteractiveDemo && (
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={toggleDemo}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                  <span>Watch Demo</span>
                </button>
              </div>
            )}
          </>
        )}
        
        <div className="absolute top-3 right-3 z-20">
          <span className="text-xs bg-primary/20 dark:bg-primary/30 text-primary-foreground dark:text-primary px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 font-serif">{project.title}</h3>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 flex items-center">
              <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
              </svg>
              Duration: {project.duration}
            </div>
          </div>
          {showDemo && (
            <button 
              onClick={toggleDemo}
              className="text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
            </button>
          )}
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-secondary dark:bg-secondary px-2.5 py-1 rounded-full text-neutral-700 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <a 
            href={project.projectUrl} 
            className="text-primary dark:text-primary text-sm font-medium group inline-flex items-center"
          >
            <span className="group-hover:underline">View Project</span> 
            <FontAwesomeIcon 
              icon={["fas", "arrow-right"]} 
              className="ml-1.5 text-xs transition-transform duration-300 group-hover:translate-x-1" 
            />
          </a>
          
          {project.hasInteractiveDemo && !showDemo && (
            <button 
              onClick={toggleDemo}
              className="text-primary dark:text-primary text-sm font-medium group inline-flex items-center"
            >
              <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
              <span className="group-hover:underline">Demo</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
