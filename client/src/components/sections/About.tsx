import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillProgress from "@/components/ui/skill-progress";
import { aboutDetails, personalInfo } from "@/lib/constants";

const About = () => {
  const coreSkills = [
    { name: "Python", level: "Expert", percentage: 95 },
    { name: "Java", level: "Advanced", percentage: 85 },
    { name: "Spring Boot", level: "Advanced", percentage: 80 },
    { name: "LangChain", level: "Advanced", percentage: 85 }
  ];

  return (
    <section id="about" className="py-20 beige-section-alt fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle">My background and expertise</p>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-1/2">
            <div className="pr-0 md:pr-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed text-lg">
                AI Software Engineer specializing in backend engineering and machine learning solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">AI/ML model development</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">Cloud architecture (AWS)</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">Data pipeline optimization</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">Full-stack development</span>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 gap-4">
                <div className="p-5 beige-card bg-primary/5 dark:bg-primary/10">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <h3 className="font-semibold text-primary dark:text-primary mb-0">Education</h3>
                  </div>
                  <p className="text-neutral-800 dark:text-neutral-200 font-medium">{aboutDetails.education.degree}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{aboutDetails.education.school}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">📚 Studied abroad in Morocco and Japan</p>
                </div>
                
                <div className="p-5 beige-card bg-primary/5 dark:bg-primary/10">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <h3 className="font-semibold text-primary dark:text-primary mb-0">Certifications</h3>
                  </div>
                  <div className="space-y-3 mt-2 max-h-48 overflow-y-auto pr-2">
                    {aboutDetails.certifications.map((cert, index) => (
                      <div key={index} className="border-b border-border pb-2 last:border-0">
                        <p className="text-neutral-800 dark:text-neutral-200 font-medium text-sm">{cert.name}</p>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-600 dark:text-neutral-400">{cert.issuer}</span>
                          <span className="text-neutral-500 dark:text-neutral-500">{cert.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-5 beige-card bg-primary/5 dark:bg-primary/10">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.20l.4 2H12a1 1 0 110 2H9.92l.4 2H12a1 1 0 110 2H10.6l.4 2H16a1 1 0 110 2h-5.4l.4 2H15a1 1 0 110 2h-4.4a1 1 0 01-.98-.8l-.5-2.5a1 1 0 01.9-1.2H12a1 1 0 01-.9-1.2l-.5-2.5a1 1 0 01.9-1.2H12a1 1 0 01-.9-1.2l-.5-2.5a1 1 0 01.9-1.2H12A1 1 0 0111 5H8a1 1 0 110-2h3V2a1 1 0 011-1z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="font-semibold text-primary dark:text-primary mb-0">Fun Fact: I speak</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {personalInfo.languages?.map((language, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-primary mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">{language}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-5 beige-card bg-primary/5 dark:bg-primary/10">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="font-semibold text-primary dark:text-primary mb-0">Hobbies & Interests</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {personalInfo.hobbies?.map((hobby, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-primary mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                        </svg>
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">{hobby}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-5 beige-card bg-primary/5 dark:bg-primary/10">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                    </svg>
                    <h3 className="font-semibold text-primary dark:text-primary mb-0">Leadership Roles</h3>
                  </div>
                  <ul className="text-neutral-700 dark:text-neutral-300 text-sm space-y-2 mt-2">
                    {personalInfo.leadership?.map((role, index) => (
                      <li key={index} className="flex items-start">
                        <svg 
                          className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" 
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
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
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
                    <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    <h3 className="font-semibold text-primary dark:text-primary mb-0">Current Position</h3>
                  </div>
                  <p className="text-neutral-800 dark:text-neutral-200 font-medium">{aboutDetails.currentPosition.title}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-2">{aboutDetails.currentPosition.company}</p>
                  <ul className="text-neutral-700 dark:text-neutral-300 text-sm space-y-2 mt-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Developed AI security platform with computer vision</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Architected cloud-based ML infrastructure on AWS</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute top-0 right-0 opacity-10 dark:opacity-5">
                  <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
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
