import { useParams, Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { format } from "date-fns";
import { getBlogBySlug, getLatestBlogPosts, type BlogSection } from "@/lib/blogPosts";
import { businessInfo } from "@/lib/services";
import { useSEO } from "@/hooks/useSEO";
import NotFound from "./not-found";

function RenderSection({ section, index }: { section: BlogSection; index: number }) {
  switch (section.type) {
    case "heading":
      return (
        <h2 className="text-2xl font-heading font-extrabold mt-8 mb-4" data-testid={`heading-${index}`}>
          {section.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 className="text-xl font-heading font-extrabold mt-6 mb-3" data-testid={`subheading-${index}`}>
          {section.text}
        </h3>
      );
    case "paragraph":
      return (
        <p className="text-muted-foreground leading-relaxed mb-4">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul className="space-y-2 mb-4 ml-4">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "faq":
      return (
        <div className="border rounded-md p-4 mb-3">
          <p className="font-semibold mb-2">{section.question}</p>
          <p className="text-sm text-muted-foreground">{section.answer}</p>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : null;

  useSEO({
    title: post?.title || "Blog",
    description: post?.excerpt || "Read expert home service tips and insights from Boys@Work.",
  });

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = getLatestBlogPosts(3).filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6" data-testid="button-back-blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="aspect-video rounded-md overflow-hidden mb-6">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {format(new Date(post.date), "MMMM dd, yyyy")}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <User className="h-3.5 w-3.5" />
                {post.author}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-extrabold mb-6" data-testid="text-blog-post-title">
              {post.title}
            </h1>

            <div className="prose-content">
              {post.content.map((section, index) => (
                <RenderSection key={index} section={section} index={index} />
              ))}
            </div>

            <div className="mt-10 p-6 rounded-md bg-primary/5 border border-primary/20">
              <h3 className="font-semibold text-lg mb-2">Need Professional Help?</h3>
              <p className="text-muted-foreground mb-4">
                Call or WhatsApp us today for a free inspection and quote.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${businessInfo.phone}`}>
                  <Button data-testid="button-blog-call">
                    <Phone className="mr-2 h-4 w-4" />
                    Call +91 {businessInfo.phone}
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" data-testid="button-blog-whatsapp">
                    <SiWhatsapp className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Book a Service</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need expert help? Book a professional service today.
                  </p>
                  <Link href="/book" className="block">
                    <Button className="w-full" data-testid="button-blog-book">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {relatedPosts.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Related Posts</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((related) => (
                        <Link key={related.id} href={`/blog/${related.slug}`}>
                          <div className="group cursor-pointer">
                            <div className="aspect-video rounded-md overflow-hidden mb-2">
                              <img
                                src={related.coverImage}
                                alt={related.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                              {related.title}
                            </h4>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(related.date), "MMM dd, yyyy")}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
                  <div className="space-y-3 text-sm">
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      +91 {businessInfo.phone}
                    </a>
                    <a
                      href={`https://wa.me/${businessInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <SiWhatsapp className="h-4 w-4" />
                      WhatsApp Us
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
