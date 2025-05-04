import { BlogPost } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="beige-card overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
      <div className="relative h-48 overflow-hidden">
        {post.imageUrl && (
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-primary/80 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-serif line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <a 
          href={post.link || `/blog/${post.slug}`}
          target={post.link ? "_blank" : "_self"}
          rel={post.link ? "noopener noreferrer" : ""}
          className="inline-flex items-center text-primary dark:text-primary font-medium text-sm group-hover:underline"
        >
          {post.link ? "Read on Medium" : "Read More"}
          <FontAwesomeIcon 
            icon={post.link ? ["fab", "medium"] : ["fas", "arrow-right"]} 
            className="ml-1.5 text-xs transition-transform duration-300 group-hover:translate-x-1" 
          />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;