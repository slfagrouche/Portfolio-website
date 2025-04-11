export const personalInfo = {
  name: "Said Lfagrouche",
  title: "Software Engineer & AI/ML Engineer",
  bio: "Specialized in developing scalable solutions with expertise in machine learning, cloud technologies, and full-stack development.",
  location: "New York, NY",
  email: "SaidLfagrouche@gmail.com",
  linkedin: "https://linkedin.com/in/saidlfagrouche",
  github: "https://github.com/slfagrouche",
  twitter: "https://x.com/SLfagrouch3441",
  resumeUrl: "#",
  
  // Personal details
  languages: ["English", "Arabic", "Darija", "Berber", "French (Beginner)"],
  hobbies: ["Soccer", "Hiking", "Cooking", "Travel"],
  funFacts: ["Studied abroad in Morocco and Japan", "Speaks 4 languages", "Loves ramen and Moroccan couscous"],
};

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
  demoVideo?: string;
  hasInteractiveDemo?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "BetterChef",
    category: "AI/ML",
    description: "AI-powered cooking assistant providing personalized recipes, meal planning, and real-time cooking guidance.",
    imageUrl: "https://images.unsplash.com/photo-1555596898-fc3757ea5351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "TensorFlow", "Flask", "OpenAI"],
    projectUrl: "#",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "TravelAI Companion",
    category: "AI/ML",
    description: "AI-driven travel assistant that offers personalized itineraries and real-time language translation for international travelers.",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "LangChain", "MongoDB", "React"],
    projectUrl: "#",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "SafeGuard",
    category: "Cloud",
    description: "Crisis monitoring platform for real-time incident tracking and alerts in humanitarian crisis areas using AI verification.",
    imageUrl: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "AWS", "FastAPI", "LangChain", "React"],
    projectUrl: "https://github.com/slfagrouche/SafeGuard",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "AI-Powered Mock Interview",
    category: "AI/ML",
    description: "Interactive interview practice platform using AI to simulate real interviews and provide feedback for job seekers.",
    imageUrl: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["JavaScript", "React", "OpenAI", "Node.js", "MongoDB"],
    projectUrl: "https://github.com/slfagrouche/AI-Powered-Mock-Interview",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Real Estate Market Analysis",
    category: "AI/ML",
    description: "Analysis of 2.2 million Realtor.com listings using Python and machine learning to uncover U.S. real estate market patterns, identifying market segments and predicting property prices.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib", "Seaborn"],
    projectUrl: "https://github.com/slfagrouche/Real-Estate-Market-Analysis",
    hasInteractiveDemo: false
  },
  {
    id: 6,
    title: "TUTOR - AI Educational Assistant",
    category: "AI/ML",
    description: "An AI-powered educational assistant for audio transcription, PDF text extraction, and context-aware Q&A using LangChain and RAG architecture.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "LangChain", "Flask", "FAISS", "Google Cloud API"],
    projectUrl: "https://github.com/slfagrouche/TUTOR",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 7,
    title: "KitchenTeacher",
    category: "Web Development",
    description: "Interactive web application that predicts dishes from food images, provides YouTube recipe videos, and fetches detailed recipe instructions.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-bda9f33a8b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "Gradio", "Hugging Face", "TheMealDB API", "YouTube API"],
    projectUrl: "https://github.com/slfagrouche/KitchenTeacher",
    hasInteractiveDemo: false
  },
  {
    id: 8,
    title: "Facial Emotion Recognition",
    category: "AI/ML",
    description: "A facial recognition system developed for the AI4ALL fellowship program that classifies 7 emotions with 92% accuracy across 35,000+ images.",
    imageUrl: "https://images.unsplash.com/photo-1523450001304-caac55e84396?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "OpenCV", "TensorFlow", "Scikit-learn", "SVMs", "CNNs"],
    projectUrl: "https://github.com/slfagrouche/AI4ALL-Ignite24-Group2-FacialRecognition",
    hasInteractiveDemo: false
  }
];

export type Experience = {
  id: number;
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  isRight?: boolean;
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "City Tech, CUNY",
    position: "Lead AI Engineer, Campus AI Community",
    period: "Dec 2024 - Present",
    responsibilities: [
      "Engineered AI-driven web scraping with Firecrawler to extract educational resources, boosting data accuracy by 25%",
      "Mentored team members and deployed AI NLP chatbots using LangChain, MongoDB, and AWS SageMaker",
      "Increased support engagement by 40% while achieving 95% accuracy with AI implementation"
    ]
  },
  {
    id: 2,
    company: "AI4ALL",
    position: "Machine Learning Fellow",
    period: "Sep 2024 - Mar 2025",
    responsibilities: [
      "Developed a facial emotion recognition system using SVMs and CNN models that classified 7 emotions with 92% accuracy across 35,000+ images",
      "Implemented data augmentation and feature engineering techniques that reduced bias by 40% and improved model performance on underrepresented classes",
      "Collaborated with Meta and Microsoft AI engineers to optimize model architecture, reducing inference time by 75% while maintaining accuracy benchmarks"
    ],
    isRight: true
  },
  {
    id: 3,
    company: "Computer Software Solutions LLC",
    position: "Back-end Developer",
    period: "Nov 2024 - Present",
    responsibilities: [
      "Engineered Java/Spring Boot microservices, implementing CI/CD pipelines with Docker and Kubernetes",
      "Architected an ML-powered resume parsing system using NLP, increasing matching accuracy by 35%",
      "Optimized MongoDB initiatives decreasing query response times by 65%, with 85% SonarQube code coverage"
    ],
    isRight: false
  },
  {
    id: 4,
    company: "SafeGuard",
    position: "Founder",
    period: "Aug 2024 - Present",
    responsibilities: [
      "Founded incident reporting app using Django and AWS, integrating AI agents with RAG to cut response times by 30%",
      "Engineered LangChain-based verification agents that cut false positives by 73%",
      "Designed scalable DynamoDB/EC2/S3 backend handling 200+ concurrent users with sub-200ms response times"
    ],
    isRight: true
  },
  {
    id: 5,
    company: "Salesforce",
    position: "Software Engineer Intern",
    period: "Jun 2024 - Aug 2024",
    responsibilities: [
      "Worked with the CRM Data Cloud Solutions Team",
      "Implemented solutions using Python and web infrastructure",
      "Focused on software construction and computer information systems"
    ],
    isRight: true
  },
  {
    id: 6,
    company: "CUNY Tech Prep",
    position: "Data Science Fellow",
    period: "Aug 2023 - May 2024",
    responsibilities: [
      "Developed PyTorch DNNs using NLP/BoW for Amazon rating prediction with 90% accuracy on 5.4GB data",
      "Executed large-scale NLP data processing enabling robust feature engineering",
      "Presented predictive capabilities highlighting business value in extracting patterns from user reviews"
    ]
  }
];

export type Skill = {
  name: string;
  level: string;
  percentage: number;
};

export type SkillCategory = {
  id: number;
  title: string;
  icon: string;
  skills: Skill[];
};

export type SkillTag = {
  name: string;
  icon: string;
};

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Languages & Tools",
    icon: "code",
    skills: [
      { name: "Python", level: "Expert", percentage: 95 },
      { name: "Java", level: "Advanced", percentage: 85 },
      { name: "C++", level: "Intermediate", percentage: 75 },
      { name: "SQL", level: "Advanced", percentage: 85 },
      { name: "Git", level: "Advanced", percentage: 80 }
    ]
  },
  {
    id: 2,
    title: "ML & AI",
    icon: "robot",
    skills: [
      { name: "TensorFlow", level: "Advanced", percentage: 85 },
      { name: "PyTorch", level: "Advanced", percentage: 80 },
      { name: "Hugging Face", level: "Advanced", percentage: 85 },
      { name: "LangChain", level: "Advanced", percentage: 85 },
      { name: "Scikit-learn", level: "Expert", percentage: 90 }
    ]
  },
  {
    id: 3,
    title: "Frameworks & Cloud",
    icon: "server",
    skills: [
      { name: "Spring Boot", level: "Advanced", percentage: 85 },
      { name: "Django", level: "Advanced", percentage: 80 },
      { name: "AWS", level: "Advanced", percentage: 85 },
      { name: "Docker", level: "Intermediate", percentage: 75 },
      { name: "MongoDB", level: "Advanced", percentage: 80 }
    ]
  }
];

export const skillTags: { [key: string]: SkillTag[] } = {
  "Cloud & DevOps": [
    { name: "AWS", icon: "aws" },
    { name: "GCP", icon: "cloud" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "CI/CD", icon: "server" },
    { name: "Linux", icon: "terminal" }
  ],
  "Data & AI": [
    { name: "MongoDB", icon: "database" },
    { name: "Weaviate", icon: "database" },
    { name: "RAG", icon: "search" },
    { name: "Milvus", icon: "database" },
    { name: "Pandas", icon: "python" },
    { name: "NumPy", icon: "calculator" }
  ],
  "Web Development": [
    { name: "Spring Boot", icon: "java" },
    { name: "Django", icon: "python" },
    { name: "Flask", icon: "python" },
    { name: "Postman", icon: "send" },
    { name: "Swagger", icon: "file-text" },
    { name: "Jenkins", icon: "settings" }
  ]
};

export const projectCategories = ["All", "AI/ML", "Web Development", "Cloud"];

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "How AI is transforming the way we build software and what developers need to know to stay ahead of the curve.",
    date: "April 2, 2025",
    readTime: "5 min read",
    category: "AI",
    imageUrl: "https://images.unsplash.com/photo-1677442135046-2d073f3429a4?q=80&w=500&auto=format&fit=crop",
    slug: "future-of-ai-in-software-development"
  },
  {
    id: 2,
    title: "Building Scalable Applications with React and Node.js",
    excerpt: "A comprehensive guide to architecting large-scale applications using React and Node.js while maintaining performance.",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1546900703-cf06143d1239?q=80&w=500&auto=format&fit=crop",
    slug: "building-scalable-applications-react-nodejs"
  },
  {
    id: 3,
    title: "Optimizing Cloud Costs for Startups",
    excerpt: "Practical strategies for managing and optimizing your cloud infrastructure costs while maintaining high performance.",
    date: "February 23, 2025",
    readTime: "6 min read",
    category: "Cloud",
    imageUrl: "https://images.unsplash.com/photo-1603695360804-28c7eb917f7a?q=80&w=500&auto=format&fit=crop",
    slug: "optimizing-cloud-costs-startups"
  }
];

export const aboutDetails = {
  education: {
    degree: "BSc. in Computer Science, Minor in Data Science",
    school: "Brooklyn College (2021 - Present)"
  },
  certifications: {
    title: "Cornell University ML Foundations",
    others: "AI4ALL Certificate, CodePath Certificate"
  },
  currentPosition: {
    title: "Lead AI Engineer",
    company: "City Tech, CUNY",
    description: ""
  },
  fellowships: [
    "Apple Pathways Alliance Scholar (Sep 2024 - Present)",
    "AI4ALL Machine Learning Fellow (Sep 2024 - Mar 2025)",
    "MLT Career Prep '25 Software Engineering Fellow (Jan 2023 - Dec 2024)"
  ]
};
