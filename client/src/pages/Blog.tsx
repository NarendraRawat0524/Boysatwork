import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { format } from "date-fns";
import { blogPosts } from "@/lib/blogPosts";
import { useSEO } from "@/hooks/useSEO";

export default function Blog() {
  useSEO({
    title: "Blog",
    description: "Read expert tips on home maintenance, cleaning, plumbing, electrical work, and more from Delhi NCR's trusted home service provider.",
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Our Blog</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Tips & Insights
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert advice on home maintenance, cleaning tips, and everything you need to keep your home in top shape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-visible hover-elevate" data-testid={`card-blog-${post.slug}`}>
              <div className="aspect-video overflow-hidden rounded-t-md">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-semibold text-lg mb-2 line-clamp-2" data-testid={`text-blog-title-${post.id}`}>
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {format(new Date(post.date), "MMM dd, yyyy")}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" data-testid={`button-read-more-${post.id}`}>
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
