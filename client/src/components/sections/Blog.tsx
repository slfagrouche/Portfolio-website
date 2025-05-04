import { blogPosts } from "@/lib/constants";
import BlogCard from "@/components/ui/blog-card";

const Blog = () => {
  // Display all posts from constants.ts
  const displayedPosts = blogPosts;

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
          <a 
            href="https://medium.com/@saidlfagrouche" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center beige-button py-2.5 px-5 justify-center"
          >
            View All Articles on Medium
            <svg 
              className="ml-2 w-4 h-4"
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;