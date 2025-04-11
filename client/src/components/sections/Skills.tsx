import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillProgress from "@/components/ui/skill-progress";
import { skillCategories, skillTags } from "@/lib/constants";

const Skills = () => {
  return (
    <section id="skills" className="py-16 fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">Technical Skills</h2>
        <p className="section-subtitle">Expertise across various technologies and domains</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            <div className="space-y-8">
              {skillCategories.map((category, idx) => idx % 2 === 0 && (
                <div key={category.id} className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={["fas", category.icon]} />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <SkillProgress key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={["fas", "cloud"]} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">Cloud & DevOps</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {skillTags["Cloud & DevOps"].map((tag, index) => (
                    <div key={index} className="flex items-center bg-neutral-50 dark:bg-neutral-700/50 px-3 py-2 rounded border border-neutral-200 dark:border-neutral-600">
                      <FontAwesomeIcon 
                        icon={tag.icon.includes("-") ? ["fab", tag.icon] : ["fas", tag.icon]} 
                        className="text-neutral-700 dark:text-neutral-300 mr-2" 
                      />
                      <span className="text-neutral-700 dark:text-neutral-300">{tag.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div>
            <div className="space-y-8">
              {skillCategories.map((category, idx) => idx % 2 === 1 && (
                <div key={category.id} className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={["fas", category.icon]} />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <SkillProgress key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={["fas", "window-maximize"]} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">Web Development</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {skillTags["Web Development"].map((tag, index) => (
                    <div key={index} className="flex items-center bg-neutral-50 dark:bg-neutral-700/50 px-3 py-2 rounded border border-neutral-200 dark:border-neutral-600">
                      <FontAwesomeIcon 
                        icon={tag.icon.includes("-") ? ["fab", tag.icon] : ["fas", tag.icon]} 
                        className="text-neutral-700 dark:text-neutral-300 mr-2" 
                      />
                      <span className="text-neutral-700 dark:text-neutral-300">{tag.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
