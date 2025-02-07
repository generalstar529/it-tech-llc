import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { format } from "date-fns";
import type { BlogPost } from "@shared/schema";
import { Link } from "wouter";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card
      className="h-full transition-all hover:shadow-lg cursor-pointer"
      onClick={() => (window.location.href = `/blog/${post.slug}`)}
    >
      <CardHeader>
        <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{post.authorName}</span>
          <span>•</span>
          <time>{format(new Date(post.publishedAt), "MMM d, yyyy")}</time>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
    </Card>
  );
}
