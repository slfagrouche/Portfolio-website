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
    <section id="about" className="py-16 bg-white dark:bg-neutral-800 fade-in">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 section-heading">
              About Me
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Software engineer with expertise in machine learning and cloud technologies, I specialize in developing scalable, efficient solutions for complex technological challenges. My skill set spans a wide range of cutting-edge technologies.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              Whether working on AI-powered applications, developing robust backend systems, or crafting intuitive user interfaces, I am committed to building technology that makes a meaningful impact.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-700/50">
                <h3 className="font-semibold text-primary dark:text-primary-400 mb-2">Education</h3>
                <p className="text-neutral-700 dark:text-neutral-300">{aboutDetails.education.degree}</p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">{aboutDetails.education.school}</p>
              </div>
              <div className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-700/50">
                <h3 className="font-semibold text-primary dark:text-primary-400 mb-2">Certifications</h3>
                <p className="text-neutral-700 dark:text-neutral-300">{aboutDetails.certifications.title}</p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">{aboutDetails.certifications.others}</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-white">Core Technologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {coreSkills.map((skill, index) => (
                <SkillProgress key={index} skill={skill} />
              ))}
            </div>
            
            <div className="p-4 rounded-lg bg-neutral-100 dark:bg-neutral-700/50 relative overflow-hidden border border-neutral-200 dark:border-neutral-700">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-white">Current Position</h3>
                <p className="text-neutral-700 dark:text-neutral-300">{aboutDetails.currentPosition.title}</p>
                <p className="text-neutral-500 dark:text-neutral-400 mb-2">{aboutDetails.currentPosition.company}</p>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">{aboutDetails.currentPosition.description}</p>
              </div>
              <div className="absolute top-0 right-0 opacity-10 dark:opacity-5">
                <FontAwesomeIcon icon={["fas", "code"]} className="text-8xl text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
