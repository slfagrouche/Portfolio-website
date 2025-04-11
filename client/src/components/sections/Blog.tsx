import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { blogPosts } from "@/lib/constants";
import BlogCard from "@/components/ui/blog-card";

const Blog = () => {
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
          <a 
            href="/blog" 
            className="inline-flex items-center beige-button py-2.5 px-5 justify-center"
          >
            View All Posts
            <FontAwesomeIcon 
              icon={["fas", "arrow-right"]} 
              className="ml-2 text-xs"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;