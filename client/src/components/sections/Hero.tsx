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
    <section id="hero" className="py-20 md:py-28 px-4 fade-in bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl transform -translate-y-4 translate-x-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt={personalInfo.name} 
                className="relative w-64 h-64 object-cover rounded-full mx-auto border-4 border-background dark:border-secondary shadow-lg beige-card-hover"
              />
              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={["fas", "code"]} className="text-lg" />
              </div>
            </div>
          </div>
          <div className="md:w-3/5 text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground/90 dark:bg-primary/20 dark:text-primary rounded-full text-sm font-medium mb-4">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100 font-serif">
              I'm <span className="text-primary dark:text-primary">{personalInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-neutral-700 dark:text-neutral-300 font-light">
              {personalInfo.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contact" className="px-6 py-3 beige-button flex items-center space-x-2">
                <FontAwesomeIcon icon={["fas", "envelope"]} />
                <span>Contact Me</span>
              </a>
              <a href={personalInfo.resumeUrl} className="px-6 py-3 beige-button-outlined flex items-center space-x-2">
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
