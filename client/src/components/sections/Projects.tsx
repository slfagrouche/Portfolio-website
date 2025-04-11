import { useState } from "react";
import { projects, projectCategories } from "@/lib/constants";
import ProjectCard from "@/components/ui/project-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="section-subtitle">Showcasing my latest work and technical expertise</p>
        
        {/* Project Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 mt-6">
          {projectCategories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "beige-button shadow-md"
                  : "bg-secondary/60 dark:bg-secondary/30 text-neutral-800 dark:text-neutral-300 hover:bg-secondary dark:hover:bg-secondary/50"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-16 px-6 beige-card">
              <FontAwesomeIcon icon={["fas", "folder-open"]} className="text-4xl text-primary/70 mb-4" />
              <p className="text-neutral-700 dark:text-neutral-300">No projects found in this category.</p>
              <button 
                onClick={() => setActiveFilter("All")}
                className="mt-4 text-primary dark:text-primary hover:underline inline-flex items-center"
              >
                View all projects <FontAwesomeIcon icon={["fas", "arrow-right"]} className="ml-1.5 text-xs" />
              </button>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <a href="#" className="px-6 py-3 beige-button-outlined inline-flex items-center hover:bg-secondary/50">
            <span>Browse All Projects</span>
            <FontAwesomeIcon 
              icon={["fas", "arrow-right"]} 
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
