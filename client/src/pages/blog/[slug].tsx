import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import type { BlogPost } from "@shared/schema";
import { format } from "date-fns";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${slug}`],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="container max-w-3xl">
          <div className="h-8 w-3/4 bg-muted animate-pulse rounded mb-4" />
          <div className="h-4 w-1/4 bg-muted animate-pulse rounded mb-8" />
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-muted animate-pulse rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-20">
        <div className="container">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <article className="container max-w-3xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>{post.authorName}</span>
            <span>•</span>
            <time>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</time>
          </div>
        </header>
        <div className="prose prose-slate max-w-none">
          {post.content.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
