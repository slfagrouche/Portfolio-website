import { useState } from "react";
import { projects, projectCategories } from "@/lib/constants";
import ProjectCard from "@/components/ui/project-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const maxProjectsToShow = showAllProjects ? projects.length : 6;
  
  const filteredProjects = activeFilter === "All" 
    ? projects.slice(0, maxProjectsToShow)
    : projects.filter(project => project.category === activeFilter).slice(0, maxProjectsToShow);

  return (
    <section id="projects" className="py-20 fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="section-subtitle">Showcasing my latest work and technical expertise</p>
        
        {/* Project Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 mt-8">
          {projectCategories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${
                activeFilter === category
                  ? "beige-button shadow-md"
                  : "bg-secondary/60 dark:bg-secondary/30 text-neutral-800 dark:text-neutral-300 hover:bg-secondary dark:hover:bg-secondary/50"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {/* Icon based on category */}
              <span className="inline-flex items-center">
                {category === "All" && (
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                )}
                {category === "AI/ML" && (
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 7H7v6h6V7z" />
                    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                  </svg>
                )}
                {category === "Web Development" && (
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
                {category === "Cloud" && (
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                )}
                {category}
              </span>
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map(project => (
            <div key={project.id} className="transition-all duration-300 hover:-translate-y-1">
              <ProjectCard project={project} />
            </div>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-20 px-8 beige-card bg-primary/5 dark:bg-primary/10 rounded-xl">
              <svg className="w-16 h-16 mx-auto text-primary/50 mb-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
              <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">No projects found</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">There are no projects in the "{activeFilter}" category.</p>
              <button 
                onClick={() => setActiveFilter("All")}
                className="px-6 py-2.5 beige-button rounded-full text-sm font-medium inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                View all projects
              </button>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => setShowAllProjects(!showAllProjects)} 
            className="px-8 py-3 beige-button shadow-sm rounded-full inline-flex items-center hover:shadow-md transition-all duration-300"
          >
            <span className="font-medium">{showAllProjects ? "Show Fewer Projects" : "Browse All Projects"}</span>
            <svg 
              className={`ml-2 w-4 h-4 transition-transform duration-300 ${showAllProjects ? "rotate-180" : ""}`} 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
