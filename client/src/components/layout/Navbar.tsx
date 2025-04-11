import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuLinkProps } from "@/types";

const menuLinks = [
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#experience", text: "Experience" },
  { href: "#skills", text: "Skills" },
  { href: "#contact", text: "Contact" },
];

const MenuLink = ({ href, text, onClick, className = "" }: MenuLinkProps) => (
  <a
    href={href}
    className={`text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary-400 transition-colors ${className}`}
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
    <nav className={`sticky top-0 z-50 backdrop-blur-md ${isScrolled ? "bg-white/90 dark:bg-neutral-900/90" : "bg-white/80 dark:bg-neutral-900/80"} border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200`}>
      <div className="container-custom py-3 flex justify-between items-center">
        {/* Logo/Name */}
        <a href="#" className="text-xl font-semibold flex items-center space-x-2">
          <span className="text-primary dark:text-primary-400">SL</span>
        </a>
        
        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {menuLinks.map((link, index) => (
            <MenuLink key={index} href={link.href} text={link.text} />
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FontAwesomeIcon icon={["fas", "sun"]} className="text-neutral-300" />
            ) : (
              <FontAwesomeIcon icon={["fas", "moon"]} className="text-neutral-600" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon icon={["fas", "bars"]} className="text-neutral-600 dark:text-neutral-300" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} px-4 py-2 pb-4 border-b border-neutral-200 dark:border-neutral-800`}>
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
            className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-300 py-2"
          >
            {theme === "dark" ? (
              <>
                <FontAwesomeIcon icon={["fas", "sun"]} />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={["fas", "moon"]} />
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
