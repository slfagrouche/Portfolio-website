import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialLink } from "@/types";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  iconClassName?: string;
}

const SocialLinks = ({ links, className = "", iconClassName = "text-xl" }: SocialLinksProps) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${link.platform} profile`}
        >
          <FontAwesomeIcon 
            icon={link.icon.includes("fa-") ? link.icon as any : ["fab", link.icon]} 
            className={iconClassName} 
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
