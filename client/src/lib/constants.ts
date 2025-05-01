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
  hobbies: ["Soccer", "Chess", "Hiking", "Cooking (Moroccan & Japanese cuisine)"],
  leadership: [
    "Peer Mentor, CUNY Brooklyn College CS Department",
    "Vice President, Brooklyn College Computer Science Club",
    "America Needs You Ambassador"
  ],
  studyAbroad: ["Morocco", "Japan"]
};

export type Project = {
  id: number;
  title: string;
  category: string | string[];
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
  demoVideo?: string;
  demoEmbed?: string;
  hasInteractiveDemo?: boolean;
  duration: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "TheraGuide AI",
    category: ["AI/ML", "Web Development"],
    description: "AI system helping mental-health professionals craft real-time, context-aware replies during patient sessions with crisis detection and RAG-powered suggestions.",
    imageUrl: "https://images.unsplash.com/photo-1566807810030-3eaa60f3e670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "FastAPI", "OpenAI", "ChromaDB", "LangChain", "React"],
    projectUrl: "https://github.com/slfagrouche/TheraGuide-AI",
    hasInteractiveDemo: true,
    demoVideo: "https://www.loom.com/share/e5017c328bdd4461a55cee15f6c10eff?sid=510db1eb-08d1-4e91-b3b6-388d3eaa5b68",
    demoEmbed: '<div style="position: relative; padding-bottom: 54.37499999999999%; height: 0;"><iframe src="https://www.loom.com/embed/e5017c328bdd4461a55cee15f6c10eff?sid=7fcb722e-8a40-489d-a803-851186b7fecb" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    duration: "3 months"
  },
  {
    id: 2,
    title: "AI Podcast Producer",
    category: ["Cloud", "AI/ML"],
    description: "Cutting-edge application that automatically transforms news articles into engaging conversational podcasts with realistic host and co-host dynamics.",
    imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "OpenAI", "ElevenLabs", "Supabase"],
    projectUrl: "https://github.com/slfagrouche/AI-Podcast-Producer",
    hasInteractiveDemo: true,
    demoVideo: "https://www.loom.com/share/52c9078c2554408e8c401ac481cb2e36?sid=954829e8-3904-4656-9c2e-4d18a1aa570e",
    demoEmbed: '<div style="position: relative; padding-bottom: 54.37499999999999%; height: 0;"><iframe src="https://www.loom.com/embed/52c9078c2554408e8c401ac481cb2e36?sid=23867105-15fd-4ab5-b7e8-d98b12b4cfa7" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    duration: "2 months"
  },
  {
    id: 3,
    title: "n8n-AI-Animal-VideoGen",
    category: ["Automation", "AI/ML"],
    description: "An end-to-end n8n automation that transforms simple animal and style inputs into professional short-form videos featuring animals in fashion styles using multiple AI services.",
    imageUrl: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["n8n", "DeepSeek", "Flux AI", "Runway Gen3", "ElevenLabs", "Creatomate", "Google APIs"],
    projectUrl: "https://github.com/slfagrouche/n8n-AI-Animal-VideoGen",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/eN6KEEJMGwM",
    duration: "1 week"
  },
  {
    id: 4,
    title: "TravelAI Companion",
    category: ["Cloud", "AI/ML"],
    description: "AI-driven travel assistant that offers personalized itineraries and real-time language translation for international travelers.",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "LangChain", "MongoDB", "React"],
    projectUrl: "https://github.com/slfagrouche/TravelAICompanion",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/eN6KEEJMGwM",
    duration: "2 months"
  },
  {
    id: 5,
    title: "SafeGuard",
    category: ["Cloud", "Web Development"],
    description: "Crisis monitoring platform for real-time incident tracking and alerts in humanitarian crisis areas using AI verification.",
    imageUrl: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "AWS", "FastAPI", "LangChain", "React"],
    projectUrl: "https://github.com/slfagrouche/SafeGuard",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/eN6KEEJMGwM",
    duration: "4 months"
  },
  {
    id: 6,
    title: "Real Estate Market Analysis",
    category: "AI/ML",
    description: "Analysis of 2.2 million Realtor.com listings using Python and machine learning to uncover U.S. real estate market patterns, identifying market segments and predicting property prices.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib", "Seaborn"],
    projectUrl: "https://github.com/slfagrouche/Real-Estate-Market-Analysis",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/eN6KEEJMGwM",
    duration: "3 months"
  },
  {
    id: 7,
    title: "TUTOR - AI Educational Assistant",
    category: ["AI/ML", "Web Development"],
    description: "An AI-powered educational assistant for audio transcription, PDF text extraction, and context-aware Q&A using LangChain and RAG architecture.",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "LangChain", "Flask", "FAISS", "Google Cloud API"],
    projectUrl: "https://github.com/slfagrouche/TUTOR",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/eN6KEEJMGwM",
    duration: "3.5 months"
  },
  {
    id: 8,
    title: "KitchenTeacher",
    category: "Web Development",
    description: "Interactive web application that predicts dishes from food images, provides YouTube recipe videos, and fetches detailed recipe instructions.",
    imageUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "Gradio", "Hugging Face", "TheMealDB API", "YouTube API"],
    projectUrl: "https://github.com/slfagrouche/KitchenTeacher",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/eN6KEEJMGwM",
    duration: "2 months"
  },
  {
    id: 9,
    title: "Facial Emotion Recognition",
    category: "AI/ML",
    description: "A facial recognition system developed for the AI4ALL fellowship program that classifies 7 emotions with 92% accuracy across 35,000+ images.",
    imageUrl: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "OpenCV", "TensorFlow", "Scikit-learn", "SVMs", "CNNs"],
    projectUrl: "https://github.com/slfagrouche/AI4ALL-Ignite24-Group2-FacialRecognition",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/eN6KEEJMGwM",
    duration: "2 months"
  },
  {
    id: 10,
    title: "The Swinging Snake Game",
    category: "Game Development",
    description: "A classic Snake game reimagined using Java Swing where players control a growing snake that eats apples to increase their score, with increasing difficulty levels.",
    imageUrl: "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Java", "Swing", "Object-Oriented Programming"],
    projectUrl: "https://github.com/slfagrouche/The-Swinging-Snake-Game",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/eN6KEEJMGwM",
    demoEmbed: '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/eN6KEEJMGwM" title="The Swinging Snake Game Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    duration: "2 weeks"
  },
  {
    id: 11,
    title: "n8n-SmartAgent-Orchestrator",
    category: ["Automation", "AI/ML"],
    description: "A plug-and-play n8n workflow that integrates with Slack, using a LangChain Smart Agent powered by DeepSeek to auto-invoke tools like Tavily web search, Gmail draft creation, and Google Calendar events.",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["n8n", "DeepSeek AI", "LangChain", "Tavily", "Google APIs", "Slack API"],
    projectUrl: "https://github.com/slfagrouche/n8n-SmartAgent-Orchestrator",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/eN6KEEJMGwM",
    duration: "1 week"
  },
  {
    id: 12,
    title: "BetterChef",
    category: ["AI/ML", "Web Development"],
    description: "AI-powered cooking assistant providing personalized recipes, meal planning, and real-time cooking guidance.",
    imageUrl: "https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "TensorFlow", "Flask", "OpenAI"],
    projectUrl: "https://github.com/slfagrouche/Betterchef-AI-Powered-Cooking-App",
    hasInteractiveDemo: true,
    demoVideo: "https://www.youtube.com/embed/eN6KEEJMGwM",
    duration: "3 months"
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
    ],
    isRight: false
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
      "Implemented solutions using Java and Springboot to build a CRM application",
      "Developed a RESTful API using Java and Springboot to handle CRM data"],
    isRight: false
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
    ],
    isRight: true
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
      { name: "Java", level: "Expert", percentage: 90 },
      { name: "C++", level: "Intermediate", percentage: 75 },
      { name: "HTML/CSS, JavaScript", level: "Intermediate", percentage: 85 },
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
      { name: "FastAPI/Flask", level: "Advanced", percentage: 80 },
      { name: "Django", level: "Advanced", percentage: 85 },
      { name: "AWS", level: "Advanced", percentage: 85 },
      { name: "GCP", level: "Intermediate", percentage: 75 },
      { name: "Docker", level: "Advanced", percentage: 75 },
      { name: "MongoDB", level: "Advanced", percentage: 80 },
      
    ]
  }
];

export const skillTags: { [key: string]: SkillTag[] } = {
  "Cloud & DevOps": [
    { name: "AWS", icon: "aws" },
    { name: "GCP", icon: "cloud" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "server" },
    { name: "CI/CD", icon: "server" },
    { name: "Linux", icon: "terminal" }
  ],
  "Tools": [
    { name: "Postman", icon: "python" },
    { name: "Jenkins", icon: "calculator" },
    { name: "Milvus", icon: "image" },
    { name: "Pulumi", icon: "robot" },
    { name: "RAG", icon: "search" }
  ],
};

export const projectCategories = ["All", "AI/ML", "Web Development", "Cloud", "Game Development", "Automation"];

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
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=80",
    slug: "future-of-ai-in-software-development"
  },
  {
    id: 2,
    title: "Building Scalable Applications with React and Node.js",
    excerpt: "A comprehensive guide to architecting large-scale applications using React and Node.js while maintaining performance.",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=80",
    slug: "building-scalable-applications-react-nodejs"
  },
  {
    id: 3,
    title: "Optimizing Cloud Costs for Startups",
    excerpt: "Practical strategies for managing and optimizing your cloud infrastructure costs while maintaining high performance.",
    date: "February 23, 2025",
    readTime: "6 min read",
    category: "Cloud",
    imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&auto=format&fit=crop&q=80",
    slug: "optimizing-cloud-costs-startups"
  },
  {
    id: 4,
    title: "Getting Started with LangChain for RAG Applications",
    excerpt: "A developer's guide to implementing Retrieval Augmented Generation for production-level applications with LangChain.",
    date: "January 18, 2025",
    readTime: "7 min read",
    category: "AI",
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&auto=format&fit=crop&q=80",
    slug: "getting-started-with-langchain-rag"
  },
  {
    id: 5,
    title: "Best Practices for Secure API Design",
    excerpt: "Essential security patterns and practices every developer should follow when designing and implementing APIs.",
    date: "December 5, 2024",
    readTime: "9 min read",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=80",
    slug: "best-practices-secure-api-design"
  }
];

export const aboutDetails = {
  education: {
    degree: "BSc. in Computer Science, Minor in Data Science",
    school: "Brooklyn College (2021 - Present)"
  },
  certifications: [
    { name: "Cornell University ML Foundations", issuer: "Cornell University", date: "Aug 2023" },
    { name: "AI4ALL AI Development & Career Readiness Certificate", issuer: "AI4ALL", date: "Mar 2025" },
    { name: "Certificate of Completion - CUNY Tech Prep (Data Science)", issuer: "CUNY Tech Prep", date: "Jun 2024" },
    { name: "LangChain Chat with Your Data", issuer: "DeepLearning.AI", date: "Feb 2024" },
    { name: "Finetuning Large Language Models", issuer: "DeepLearning.AI", date: "Mar 2024" },
    { name: "Large Language Model Operations (LLMOps)", issuer: "DeepLearning.AI", date: "Apr 2024" },
    { name: "ChatGPT Prompt Engineering for Developers", issuer: "DeepLearning.AI", date: "Jan 2024" },
    { name: "Intermediate Technical Interview Prep", issuer: "CodePath", date: "May 2024" }
  ],
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
