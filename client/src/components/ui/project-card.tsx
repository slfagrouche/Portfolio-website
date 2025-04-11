import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={`${project.title} Project`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">{project.title}</h3>
          <span className="text-xs bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded-full text-neutral-600 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.projectUrl} 
          className="text-primary dark:text-primary-400 text-sm font-medium hover:underline flex items-center"
        >
          View Project <FontAwesomeIcon icon={["fas", "arrow-right"]} className="ml-1 text-xs" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
