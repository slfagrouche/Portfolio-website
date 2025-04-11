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
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <FontAwesomeIcon icon={["fas", "certificate"]} className="mr-3 text-primary" />
                    <h3 className="font-semibold text-primary dark:text-primary mb-0">Certifications</h3>
                  </div>
                  <p className="text-neutral-800 dark:text-neutral-200 font-medium">{aboutDetails.certifications.title}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{aboutDetails.certifications.others}</p>
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
