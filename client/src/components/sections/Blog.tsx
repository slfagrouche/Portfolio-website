import { useState } from "react";
import { blogPosts } from "@/lib/constants";
import BlogCard from "@/components/ui/blog-card";

const Blog = () => {
  const [showAllPosts, setShowAllPosts] = useState(false);
  
  // Additional blog posts
  const additionalBlogPosts = [
    {
      id: 4,
      title: "Understanding Retrieval Augmented Generation (RAG) for LLMs",
      excerpt: "An in-depth exploration of how RAG architecture can dramatically improve LLM performance by grounding responses in factual data.",
      date: "February 15, 2025",
      readTime: "10 min read",
      category: "AI",
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=500&auto=format&fit=crop",
      slug: "understanding-rag-for-llms"
    },
    {
      id: 5,
      title: "Deploying Microservices with Kubernetes",
      excerpt: "A practical guide to container orchestration and service management for scalable applications using Kubernetes.",
      date: "January 30, 2025",
      readTime: "7 min read",
      category: "Cloud",
      imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=500&auto=format&fit=crop",
      slug: "deploying-microservices-with-kubernetes"
    },
    {
      id: 6,
      title: "Advanced Spring Boot Best Practices",
      excerpt: "Essential patterns and practices for building robust, maintainable enterprise applications with Spring Boot.",
      date: "January 15, 2025",
      readTime: "9 min read",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop",
      slug: "advanced-spring-boot-best-practices"
    }
  ];
  
  const displayedPosts = showAllPosts ? 
    [...blogPosts, ...additionalBlogPosts] : 
    blogPosts;

  return (
    <section id="blog" className="py-20 fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">Latest Articles</h2>
        <p className="section-subtitle">Thoughts and insights on technology and development</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAllPosts(!showAllPosts)} 
            className="inline-flex items-center beige-button py-2.5 px-5 justify-center"
          >
            {showAllPosts ? "Show Fewer Posts" : "View All Posts"}
            <svg 
              className={`ml-2 w-4 h-4 transition-transform duration-300 ${showAllPosts ? "rotate-180" : ""}`}
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;