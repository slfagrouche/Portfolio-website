import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { personalInfo } from "@/lib/constants";
import SocialLinks from "@/components/ui/social-links";

const Hero = () => {
  const socialLinks = [
    { platform: "LinkedIn", url: personalInfo.linkedin, icon: "linkedin" },
    { platform: "GitHub", url: personalInfo.github, icon: "github" },
    { platform: "Twitter", url: personalInfo.twitter, icon: "twitter" }
  ];

  return (
    <section id="hero" className="py-16 md:py-24 px-4 fade-in">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt={personalInfo.name} 
                className="w-64 h-64 object-cover rounded-full mx-auto border-4 border-white dark:border-neutral-800 shadow-lg"
              />
              <div className="absolute -bottom-3 -right-3 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={["fas", "code"]} className="text-lg" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-white">
              I'm <span className="text-primary dark:text-primary-400">{personalInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-neutral-600 dark:text-neutral-300">
              {personalInfo.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-md">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contact" className="px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-md transition-colors shadow-md flex items-center space-x-2">
                <FontAwesomeIcon icon={["fas", "envelope"]} />
                <span>Contact Me</span>
              </a>
              <a href={personalInfo.resumeUrl} className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors flex items-center space-x-2 text-neutral-700 dark:text-neutral-200">
                <FontAwesomeIcon icon={["fas", "download"]} />
                <span>Download CV</span>
              </a>
            </div>
            <SocialLinks links={socialLinks} className="mt-8 justify-center md:justify-start" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
