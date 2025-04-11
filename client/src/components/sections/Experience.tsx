import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { experiences } from "@/lib/constants";

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-neutral-800 fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">Professional Experience</h2>
        <p className="section-subtitle">My journey as a software engineer</p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-neutral-300 dark:bg-neutral-600 transform md:translateX(-0.5px)"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex flex-col md:flex-row items-center md:justify-center">
                <div className={`flex md:flex-col items-center ${exp.isRight ? 'md:order-2 md:items-start md:w-1/2 md:pl-12' : 'md:items-end md:w-1/2 md:pr-12'} mb-4 md:mb-0`}>
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary text-white flex items-center justify-center z-10 mr-4 md:mr-0 md:mb-3">
                    <FontAwesomeIcon icon={["fas", exp.id === 1 ? "briefcase" : exp.id === 2 ? "cloud" : "graduation-cap"]} />
                  </div>
                  <div className={exp.isRight ? 'md:text-left' : 'md:text-right'}>
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">{exp.company}</h3>
                    <p className="text-primary dark:text-primary-400 font-medium">{exp.position}</p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">{exp.period}</p>
                  </div>
                </div>
                <div className={`${exp.isRight ? 'md:order-1 md:w-1/2 md:pr-12 md:text-right' : 'md:w-1/2 md:pl-12'} pl-16 ${exp.isRight ? 'md:pl-0' : ''}`}>
                  <div className="bg-neutral-50 dark:bg-neutral-700 p-4 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-sm">
                    <ul className="text-neutral-700 dark:text-neutral-300 text-sm space-y-2">
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
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="text-primary dark:text-primary-400 hover:underline inline-flex items-center">
            <span>View Complete Work History</span>
            <FontAwesomeIcon icon={["fas", "arrow-right"]} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
