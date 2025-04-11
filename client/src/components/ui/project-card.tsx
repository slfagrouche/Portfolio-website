import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="beige-card beige-card-hover overflow-hidden bg-card">
      <div className="h-48 overflow-hidden relative group">
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={`${project.title} Project`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 z-20">
          <span className="text-xs bg-primary/20 dark:bg-primary/30 text-primary-foreground dark:text-primary px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-serif">{project.title}</h3>
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
      </div>
    </div>
  );
};

export default ProjectCard;
