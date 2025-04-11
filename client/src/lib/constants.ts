export const personalInfo = {
  name: "Said Lfagrouche",
  title: "Software Engineer & AI/ML Engineer",
  bio: "Specialized in developing scalable solutions with expertise in machine learning, cloud technologies, and full-stack development.",
  location: "Washington, DC",
  email: "contact@saidlfagrouche.com",
  linkedin: "https://linkedin.com/in/saidlfagrouche",
  github: "https://github.com/slfagrouche",
  twitter: "#",
  resumeUrl: "#",
};

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "BetterChef",
    category: "AI/ML",
    description: "AI-powered cooking assistant providing personalized recipes, meal planning, and real-time cooking guidance.",
    imageUrl: "https://images.unsplash.com/photo-1555596898-fc3757ea5351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "TensorFlow", "Flask"],
    projectUrl: "#",
  },
  {
    id: 2,
    title: "TUTOR",
    category: "AI/ML",
    description: "AI-powered educational assistant for audio transcription, PDF text extraction, and context-aware Q&A.",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "LangChain", "MongoDB"],
    projectUrl: "#",
  },
  {
    id: 3,
    title: "SafeGuard",
    category: "Cloud",
    description: "Crisis monitoring platform for real-time incident tracking and alerts in humanitarian crisis areas.",
    imageUrl: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "AWS", "FastAPI"],
    projectUrl: "#",
  },
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
    company: "Computer Software Solutions LLC",
    position: "Back-end Developer Intern",
    period: "Nov 2024 - Present",
    responsibilities: [
      "Build and maintain backend systems using Java and Spring Boot",
      "Designed a resume-parsing feature with LLMs, improving accuracy and efficiency",
      "Improved code quality with IntelliJ IDEA LLM plugins"
    ]
  },
  {
    id: 2,
    company: "Salesforce",
    position: "Software Engineering Intern",
    period: "Jun 2024 - Aug 2024",
    responsibilities: [
      "Designed and optimized APIs for Salesforce Data Cloud",
      "Implemented cloud infrastructure solutions using AWS",
      "Collaborated with cross-functional teams to develop features"
    ],
    isRight: true
  },
  {
    id: 3,
    company: "CUNY Tech Prep",
    position: "Data Science Fellow",
    period: "Aug 2023 - May 2024",
    responsibilities: [
      "Focused on predicting Amazon product review ratings using Neural Networks and NLP",
      "Achieved 90% accuracy through a Deep Neural Network with Bag of Words vectorization",
      "Demonstrated the project's predictive capabilities on a 10% sample of a 54.41 GB dataset"
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
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", level: "Expert", percentage: 95 },
      { name: "Java", level: "Advanced", percentage: 85 },
      { name: "C++", level: "Intermediate", percentage: 75 },
      { name: "JavaScript", level: "Advanced", percentage: 80 },
      { name: "SQL", level: "Advanced", percentage: 85 }
    ]
  },
  {
    id: 2,
    title: "Machine Learning & AI",
    icon: "robot",
    skills: [
      { name: "TensorFlow", level: "Advanced", percentage: 85 },
      { name: "PyTorch", level: "Advanced", percentage: 80 },
      { name: "Scikit-learn", level: "Expert", percentage: 90 },
      { name: "Hugging Face", level: "Advanced", percentage: 85 },
      { name: "LangChain", level: "Advanced", percentage: 80 }
    ]
  }
];

export const skillTags: { [key: string]: SkillTag[] } = {
  "Cloud & DevOps": [
    { name: "AWS S3", icon: "aws" },
    { name: "EC2", icon: "aws" },
    { name: "Lambda", icon: "aws" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "dharmachakra" },
    { name: "CI/CD", icon: "server" }
  ],
  "Web Development": [
    { name: "Django", icon: "python" },
    { name: "Flask", icon: "python" },
    { name: "Spring Boot", icon: "java" },
    { name: "React.js", icon: "react" },
    { name: "Vue.js", icon: "vuejs" },
    { name: "MongoDB", icon: "database" }
  ]
};

export const projectCategories = ["All", "AI/ML", "Web Development", "Cloud"];

export const aboutDetails = {
  education: {
    degree: "BSc. in Computer Science, Minor in Data Science",
    school: "Brooklyn College (2021 - Present)"
  },
  certifications: {
    title: "Cornell University ML Foundations",
    others: "Multiple DeepLearning.AI Certificates"
  },
  currentPosition: {
    title: "Back-end Developer Intern",
    company: "Computer Software Solutions LLC",
    description: "Building and maintaining backend systems using Java and Spring Boot, implementing resume-parsing features with LLMs."
  }
};
