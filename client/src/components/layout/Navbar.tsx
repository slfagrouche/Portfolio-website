import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuLinkProps } from "@/types";

// Modern Logo Component
const Logo = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center">
      <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="23" fill={isDark ? "#1a1a1a" : "#fff"} stroke={isDark ? "#d2c0a6" : "#d2c0a6"} strokeWidth="2" />
        <path 
          d="M15 25C15 19.5 19.5 15 25 15C30.5 15 35 19.5 35 25" 
          stroke={isDark ? "#d2c0a6" : "#9c8c71"} 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <path 
          d="M35 25C35 30.5 30.5 35 25 35C19.5 35 15 30.5 15 25" 
          stroke={isDark ? "#d2c0a6" : "#9c8c71"} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeDasharray="1 3"
        />
        <path 
          d="M23 20L17 25L23 30" 
          stroke={isDark ? "#d2c0a6" : "#9c8c71"} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M27 20L33 25L27 30" 
          stroke={isDark ? "#d2c0a6" : "#9c8c71"} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className="ml-2 text-lg font-semibold text-neutral-800 dark:text-neutral-100 font-serif">Said Lfagrouche</span>
    </div>
  );
};

const menuLinks = [
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#experience", text: "Experience" },
  { href: "#skills", text: "Skills" },
  { href: "#blog", text: "Blog" },
  { href: "#contact", text: "Contact" },
];

const MenuLink = ({ href, text, onClick, className = "" }: MenuLinkProps) => (
  <a
    href={href}
    className={`text-neutral-700 hover:text-primary dark:text-neutral-300 dark:hover:text-primary font-medium transition-colors ${className}`}
    onClick={onClick}
  >
    {text}
  </a>
);

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md ${isScrolled ? "bg-background/95 shadow-sm" : "bg-background/90"} border-b border-primary/10 dark:border-primary/10 transition-all duration-200`}>
      <div className="container-custom py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <a href="#" className="text-xl font-bold flex items-center space-x-2 font-serif">
          <Logo />
        </a>
        
        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {menuLinks.map((link, index) => (
            <MenuLink key={index} href={link.href} text={link.text} />
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FontAwesomeIcon icon={["fas", "sun"]} className="text-primary" />
            ) : (
              <FontAwesomeIcon icon={["fas", "moon"]} className="text-primary" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon icon={["fas", mobileMenuOpen ? "times" : "bars"]} className="text-primary dark:text-primary" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} px-4 py-2 pb-4 border-b border-primary/10 bg-background/95 backdrop-blur-md`}>
        <div className="flex flex-col space-y-4">
          {menuLinks.map((link, index) => (
            <MenuLink 
              key={index} 
              href={link.href} 
              text={link.text} 
              className="py-2"
              onClick={() => setMobileMenuOpen(false)}
            />
          ))}
          <button 
            onClick={toggleTheme}
            className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300 py-2"
          >
            {theme === "dark" ? (
              <>
                <FontAwesomeIcon icon={["fas", "sun"]} className="text-primary" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={["fas", "moon"]} className="text-primary" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
