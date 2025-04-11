import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillProgress from "@/components/ui/skill-progress";
import { aboutDetails } from "@/lib/constants";

const About = () => {
  const coreSkills = [
    { name: "Python", level: "Expert", percentage: 95 },
    { name: "Java", level: "Advanced", percentage: 85 },
    { name: "AWS", level: "Advanced", percentage: 80 },
    { name: "TensorFlow/PyTorch", level: "Advanced", percentage: 85 }
  ];

  return (
    <section id="about" className="py-20 beige-section-alt fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle">My background and expertise</p>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-1/2">
            <div className="pr-0 md:pr-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                Software engineer with expertise in machine learning and cloud technologies, I specialize in developing scalable, efficient solutions for complex technological challenges. My skill set spans a wide range of cutting-edge technologies.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
                Whether working on AI-powered applications, developing robust backend systems, or crafting intuitive user interfaces, I am committed to building technology that makes a meaningful impact.
              </p>
              
              <div className="mt-8 grid grid-cols-1 gap-4">
                <div className="p-5 beige-card bg-primary/5 dark:bg-primary/10">
                  <div className="flex items-center mb-3">
                    <FontAwesomeIcon icon={["fas", "graduation-cap"]} className="mr-3 text-primary" />
                    <h3 className="font-semibold text-primary dark:text-primary mb-0">Education</h3>
                  </div>
                  <p className="text-neutral-800 dark:text-neutral-200 font-medium">{aboutDetails.education.degree}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{aboutDetails.education.school}</p>
                </div>
                
                <div className="p-5 beige-card bg-primary/5 dark:bg-primary/10">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <h3 className="font-semibold text-primary dark:text-primary mb-0">Certifications</h3>
                  </div>
                  <p className="text-neutral-800 dark:text-neutral-200 font-medium">{aboutDetails.certifications.title}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{aboutDetails.certifications.others}</p>
                </div>
                
                <div className="p-5 beige-card bg-primary/5 dark:bg-primary/10">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                    <h3 className="font-semibold text-primary dark:text-primary mb-0">Fellowships</h3>
                  </div>
                  <ul className="text-neutral-700 dark:text-neutral-300 text-sm space-y-2 mt-2">
                    {aboutDetails.fellowships?.map((fellowship, index) => (
                      <li key={index} className="flex items-start">
                        <svg 
                          className="w-4 h-4 text-primary mt-1 mr-2" 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{fellowship}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="p-6 beige-card bg-card backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-5 text-neutral-800 dark:text-neutral-100 font-serif">Core Technologies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                {coreSkills.map((skill, index) => (
                  <SkillProgress key={index} skill={skill} />
                ))}
              </div>
              
              <div className="mt-8 p-5 beige-card bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <FontAwesomeIcon icon={["fas", "briefcase"]} className="mr-3 text-primary" />
                    <h3 className="font-semibold text-primary dark:text-primary mb-0">Current Position</h3>
                  </div>
                  <p className="text-neutral-800 dark:text-neutral-200 font-medium">{aboutDetails.currentPosition.title}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-2">{aboutDetails.currentPosition.company}</p>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">{aboutDetails.currentPosition.description}</p>
                </div>
                <div className="absolute top-0 right-0 opacity-10 dark:opacity-5">
                  <FontAwesomeIcon icon={["fas", "code"]} className="text-8xl text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
