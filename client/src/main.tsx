import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// For Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faCloud, faCode, faDownload, 
  faEnvelope, faGraduationCap, 
  faMoon, faSun, faBriefcase, 
  faRobot, faWindowMaximize, 
  faLocationDot, faCircleChevronRight, 
  faCircleChevronLeft, faDatabase,
  faServer, faDharmachakra, faArrowRight,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, faGithub, faTwitter, 
  faAws, faPython, faJava, 
  faDocker, faReact, faVuejs
} from '@fortawesome/free-brands-svg-icons';

// Add all icons to the library so you can use them anywhere
library.add(
  faCloud, faCode, faDownload, 
  faEnvelope, faGraduationCap, 
  faMoon, faSun, faBriefcase, 
  faRobot, faWindowMaximize, 
  faLocationDot, faCircleChevronRight, 
  faCircleChevronLeft, faDatabase,
  faServer, faDharmachakra, faArrowRight,
  faBars,
  faLinkedin, faGithub, faTwitter, 
  faAws, faPython, faJava, 
  faDocker, faReact, faVuejs
);

createRoot(document.getElementById("root")!).render(<App />);
