import { useState } from "react";
import { blogPosts } from "@/lib/constants";
import BlogCard from "@/components/ui/blog-card";

const Blog = () => {
  return (
    <section id="blog" className="py-20 fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">Latest Articles</h2>
        <p className="section-subtitle">Thoughts and insights on technology and development</p>
        
        <div className="mt-12 flex justify-center items-center">
          <div className="text-center p-12 bg-secondary/20 rounded-xl max-w-2xl">
            <svg 
              className="w-16 h-16 mx-auto text-primary/50 mb-5" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            <h3 className="text-2xl font-bold mb-3 text-neutral-800 dark:text-neutral-200">Coming Soon</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-5">
            Fresh articles on AI, machine learning, and software development are in the works—drop back in soon!
            </p>
            <div className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Stay tuned!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;