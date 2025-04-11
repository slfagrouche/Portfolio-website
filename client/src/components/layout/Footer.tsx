import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { personalInfo } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="py-10 bg-primary/10 dark:bg-primary/5 border-t border-primary/10 dark:border-primary/10 text-neutral-800 dark:text-neutral-300">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href={personalInfo.linkedin} 
              className="text-neutral-700 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a 
              href={personalInfo.github} 
              className="text-neutral-700 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a 
              href={personalInfo.twitter} 
              className="text-neutral-700 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
