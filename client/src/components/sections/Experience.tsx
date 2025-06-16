import { useState } from "react";
import { experiences } from "@/lib/constants";

const Experience = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  
  const additionalExperiences = [
    {
      id: 7,
      company: "Brooklyn College",
      position: "Peer Mentor, Computer Science",
      period: "Jan 2023 - Dec 2024",
      responsibilities: [
        "Mentored 70+ first-year CS students, optimizing academic planning and campus integration",
        "Launched peer-led workshops and career sessions, increasing student retention by 30%"
      ]
    },
    {
      id: 8,
      company: "XRSI - XR Safety Initiative",
      position: "Software Engineering Intern",
      period: "Jan 2023 - Nov 2023",
      responsibilities: [
        "Architected high-performance REST APIs in Python with a WordPress headless CMS for XR safety features",
        "Streamlined SQL queries and database indexing, reducing data retrieval time by 30% for 10K+ daily requests"
      ],
      isRight: true
    }
  ];
  
  // Limit experiences to 2 bullet points each
  const experiencesWithLimitedBullets = experiences.map(exp => ({
    ...exp,
    responsibilities: exp.responsibilities.slice(0, 2)
  }));
  
  const displayedExperiences = showAllExperiences ? 
    [...experiencesWithLimitedBullets, ...additionalExperiences] : 
    experiencesWithLimitedBullets;
  
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
            {displayedExperiences.map((exp) => (
              <div key={exp.id} className="relative flex flex-col md:flex-row items-center md:justify-center">
                <div className={`flex md:flex-col items-center ${exp.isRight ? 'md:order-2 md:items-start md:w-1/2 md:pl-12' : 'md:items-end md:w-1/2 md:pr-12'} mb-4 md:mb-0`}>
                  <div className="w-14 h-14 flex-shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10 mr-4 md:mr-0 md:mb-3 shadow-md">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
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
                            {exp.isRight ? (
                              <svg className="w-4 h-4 text-primary ml-2 mt-1 hidden md:block flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                              </svg>
                            )}
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
          <button 
            onClick={() => setShowAllExperiences(!showAllExperiences)} 
            className="px-6 py-3 beige-button-outlined inline-flex items-center group"
          >
            <span>{showAllExperiences ? "Show Less" : "View Complete Work History"}</span>
            <svg 
              className={`ml-2 w-4 h-4 transition-transform duration-300 ${showAllExperiences ? "rotate-180" : ""}`}
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

export default Experience;
