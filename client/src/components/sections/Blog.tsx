import { useState } from "react";
import { blogPosts } from "@/lib/constants";
import BlogCard from "@/components/ui/blog-card";

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Generate more blog posts for the modal view
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
  
  const allBlogPosts = [...blogPosts, ...additionalBlogPosts];

  return (
    <section id="blog" className="py-20 fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">Latest Articles</h2>
        <p className="section-subtitle">Thoughts and insights on technology and development</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="inline-flex items-center beige-button py-2.5 px-5 justify-center"
          >
            View All Posts
            <svg 
              className="ml-2 w-4 h-4" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* All Posts Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 fade-in">
          <div className="bg-background dark:bg-background w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-serif">All Blog Posts</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    fillRule="evenodd" 
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              {allBlogPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;