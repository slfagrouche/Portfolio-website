import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillProgress from "@/components/ui/skill-progress";
import { skillCategories, skillTags } from "@/lib/constants";

const Skills = () => {
  return (
    <section id="skills" className="py-20 fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">Technical Skills</h2>
        <p className="section-subtitle">Expertise across various technologies and domains</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Left column */}
          <div>
            <div className="space-y-8">
              {skillCategories.map((category, idx) => idx % 2 === 0 && (
                <div key={category.id} className="beige-card p-6 backdrop-blur-sm bg-card">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary flex items-center justify-center mr-4 shadow-sm">
                      <FontAwesomeIcon icon={["fas", "code"]} />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-serif">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-5">
                    {category.skills.map((skill, index) => (
                      <SkillProgress key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="beige-card p-6 backdrop-blur-sm bg-card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary flex items-center justify-center mr-4 shadow-sm">
                    <FontAwesomeIcon icon={["fas", "code"]} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-serif">Cloud & DevOps</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {skillTags["Cloud & DevOps"].map((tag, index) => (
                    <div key={index} className="flex items-center bg-secondary/50 dark:bg-secondary/40 px-3 py-2.5 rounded-md border border-border">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2.5"></span>
                      <span className="text-neutral-800 dark:text-neutral-200">{tag.name}</span>
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
                <div key={category.id} className="beige-card p-6 backdrop-blur-sm bg-card">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary flex items-center justify-center mr-4 shadow-sm">
                      <FontAwesomeIcon icon={["fas", "code"]} />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-serif">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-5">
                    {category.skills.map((skill, index) => (
                      <SkillProgress key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="beige-card p-6 backdrop-blur-sm bg-card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary flex items-center justify-center mr-4 shadow-sm">
                    <FontAwesomeIcon icon={["fas", "code"]} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-serif">Web Development</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {skillTags["Web Development"].map((tag, index) => (
                    <div key={index} className="flex items-center bg-secondary/50 dark:bg-secondary/40 px-3 py-2.5 rounded-md border border-border">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2.5"></span>
                      <span className="text-neutral-800 dark:text-neutral-200">{tag.name}</span>
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