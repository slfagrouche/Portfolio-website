import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { experiences } from "@/lib/constants";

const Experience = () => {
  return (
    <section id="experience" className="py-20 beige-section-alt fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">Professional Experience</h2>
        <p className="section-subtitle">My journey as a software engineer</p>
        
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-primary/20 dark:bg-primary/20 transform md:translateX(-0.5px)"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex flex-col md:flex-row items-center md:justify-center">
                <div className={`flex md:flex-col items-center ${exp.isRight ? 'md:order-2 md:items-start md:w-1/2 md:pl-12' : 'md:items-end md:w-1/2 md:pr-12'} mb-4 md:mb-0`}>
                  <div className="w-14 h-14 flex-shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10 mr-4 md:mr-0 md:mb-3 shadow-md">
                    <FontAwesomeIcon icon={["fas", exp.id === 1 ? "briefcase" : exp.id === 2 ? "cloud" : "graduation-cap"]} className="text-lg" />
                  </div>
                  <div className={exp.isRight ? 'md:text-left' : 'md:text-right'}>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 font-serif">{exp.company}</h3>
                    <p className="text-primary dark:text-primary font-medium">{exp.position}</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">{exp.period}</p>
                  </div>
                </div>
                <div className={`${exp.isRight ? 'md:order-1 md:w-1/2 md:pr-12 md:text-right' : 'md:w-1/2 md:pl-12'} pl-16 ${exp.isRight ? 'md:pl-0' : ''}`}>
                  <div className="beige-card p-5 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 opacity-50"></div>
                    <div className="relative z-10">
                      <ul className="text-neutral-700 dark:text-neutral-300 text-sm space-y-3">
                        {exp.responsibilities.map((item, index) => (
                          <li key={index} className={`flex ${exp.isRight ? 'md:flex-row-reverse' : ''}`}>
                            {exp.isRight && (
                              <FontAwesomeIcon 
                                icon={["fas", "circle-chevron-left"]} 
                                className="text-primary ml-2 mt-1 text-xs hidden md:block" 
                              />
                            )}
                            <FontAwesomeIcon 
                              icon={["fas", "circle-chevron-right"]} 
                              className={`text-primary mr-2 mt-1 text-xs ${exp.isRight ? 'md:hidden' : ''}`} 
                            />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="px-6 py-3 beige-button-outlined inline-flex items-center group">
            <span>View Complete Work History</span>
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

export default Experience;
