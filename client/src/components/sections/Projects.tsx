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
    <section id="projects" className="py-16 fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="section-subtitle">Showcasing my latest work and technical expertise</p>
        
        {/* Project Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {projectCategories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === category
                  ? "bg-primary text-white"
                  : "bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-neutral-600 dark:text-neutral-400">No projects found in this category.</p>
            </div>
          )}
        </div>
        
        <div className="mt-10 text-center">
          <a href="#" className="px-6 py-3 bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-700 dark:hover:bg-neutral-600 text-white rounded-md transition-colors inline-flex items-center">
            <span>View All Projects</span>
            <FontAwesomeIcon icon={["fas", "arrow-right"]} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
