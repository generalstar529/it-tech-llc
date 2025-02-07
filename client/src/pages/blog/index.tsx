import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";
import BlogPostCard from "@/components/blog-post-card";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">IT Insights Blog</h1>
          <p className="text-xl text-muted-foreground">
            Expert insights and analysis on the latest IT trends and
            technologies
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-[300px] bg-muted animate-pulse rounded-lg"
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {posts?.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
