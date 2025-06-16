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
                src="https://media.licdn.com/dms/image/v2/D4E03AQGNaBy-8LVZMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725496285203?e=1755734400&v=beta&t=dI2mew6dL9NX0v3VZfdwDCAt1vWHtmlWkHhGxtQV72s" 
                alt={personalInfo.name} 
                className="relative w-64 h-64 object-cover rounded-full mx-auto border-4 border-background dark:border-secondary shadow-lg beige-card-hover"
              />
              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:w-3/5 text-center md:text-left">
            <span className="text-wave inline-block px-3 py-1 bg-primary/5 text-primary/80 dark:bg-primary/10 dark:text-primary/90 rounded-full text-sm font-medium mb-4 border border-primary/20">
              {"Welcome to my portfolio".split("").map((char, index) => (
                <span key={index} style={{ '--i': index } as React.CSSProperties}>
                  {char === " " ? "\u00A0" : char} {/* Replace space with non-breaking space */}
                </span>
              ))}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100 font-serif">
              I'm <span className="animated-gradient-text">{personalInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-neutral-700 dark:text-neutral-300 font-light">
              {personalInfo.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contact" className="relative inline-flex items-center px-8 py-4 overflow-hidden text-lg font-medium rounded-full bg-primary text-primary-foreground transition-all duration-300 ease-out hover:bg-primary/90 hover:shadow-md group">
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="flex items-center gap-2 group-hover:translate-x-[-10px] transition-transform duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Get In Touch
                </span>
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
