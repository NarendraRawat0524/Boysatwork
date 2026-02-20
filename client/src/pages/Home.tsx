import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Shield, Clock, Wallet, Headphones, Calendar, User as UserIcon, Quote, Eye, Target } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import StatsCounter from "@/components/StatsCounter";
import ServiceCard from "@/components/ServiceCard";
import { services, businessInfo } from "@/lib/services";
import { getLatestBlogPosts } from "@/lib/blogPosts";
import { useSEO } from "@/hooks/useSEO";
import { format } from "date-fns";
import visionImg from "@/assets/images/vision-img.png";
import missionImg from "@/assets/images/mission-img.png";

const whyChooseUs = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "All our technicians undergo thorough background checks and skill verification",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "We respect your time with guaranteed arrival within the scheduled slot",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description: "No hidden charges. Know the price upfront before booking",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our customer support team is always ready to assist you",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Lajpat Nagar",
    rating: 5,
    text: "Excellent AC servicing! The technician was professional and thorough. Will definitely use again.",
    service: "AC Service",
  },
  {
    name: "Rajesh Kumar",
    location: "South Extension",
    rating: 5,
    text: "Best plumbing service in Delhi. Fixed a major leak within an hour. Highly recommended!",
    service: "Plumbing",
  },
  {
    name: "Anita Verma",
    location: "Defence Colony",
    rating: 5,
    text: "The carpenter did an amazing job with our wardrobe repair. Very reasonable prices too.",
    service: "Carpentry",
  },
  {
    name: "Vikram Singh",
    location: "Greater Kailash",
    rating: 4,
    text: "Prompt and professional painting service. They completed the entire 3BHK in just 3 days. Great quality work!",
    service: "Painting",
  },
  {
    name: "Meena Gupta",
    location: "Saket",
    rating: 5,
    text: "Deep cleaning service was exceptional. My house looks brand new. The team was very polite and efficient.",
    service: "Deep Cleaning",
  },
  {
    name: "Amit Joshi",
    location: "Vasant Kunj",
    rating: 5,
    text: "Called for electrical wiring issue at 8pm and they sent someone within an hour. Fantastic emergency service!",
    service: "Electrical",
  },
];

const overallRating = {
  score: 4.8,
  total: 2340,
  breakdown: [
    { stars: 5, percent: 78 },
    { stars: 4, percent: 15 },
    { stars: 3, percent: 5 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 1 },
  ],
};

export default function Home() {
  useSEO({
    title: "Home",
    description: "Book trusted home services in Delhi NCR - Plumbers, Electricians, Carpenters, Painters, AC Technicians & more. Professional, reliable & affordable. Call 9811797407.",
  });

  const latestPosts = getLatestBlogPosts(2);

  return (
    <div>
      <HeroCarousel />

      <StatsCounter />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
              Expert Solutions for Every Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From quick repairs to complete installations, we offer comprehensive home services
              with certified professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" data-testid="link-view-all-services">
              <Button variant="outline" size="lg" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Why Boysatwork</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering the best service experience in Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover-elevate">
                <CardContent className="pt-8 pb-6">
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background" data-testid="section-vision">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-1/2 space-y-5" data-testid="vision-text">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary">Our Vision</Badge>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
                Building a Trusted Future for Home Services
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To become Delhi NCR's most trusted and preferred home services platform, where every household has access to skilled, verified professionals for all their maintenance and repair needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a world where homeowners never have to worry about finding reliable service providers. Our goal is to set the gold standard for quality, transparency, and customer satisfaction in the home services industry.
              </p>
            </div>
            <div className="md:w-1/2" data-testid="vision-image">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={visionImg}
                  alt="Our vision for trusted home services"
                  className="w-full h-72 md:h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30" data-testid="section-mission">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <div className="md:w-1/2 space-y-5" data-testid="mission-text">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary">Our Mission</Badge>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
                Delivering Excellence in Every Service
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To deliver exceptional home services through a network of trained, background-verified professionals while maintaining transparent pricing and ensuring complete customer satisfaction on every job.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to empowering local skilled workers with fair wages and growth opportunities, creating a win-win ecosystem for both service providers and customers across Delhi NCR.
              </p>
            </div>
            <div className="md:w-1/2" data-testid="mission-image">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={missionImg}
                  alt="Our mission of skilled craftsmanship"
                  className="w-full h-72 md:h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30" data-testid="section-latest-posts">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Latest Posts</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
              From Our Blog
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert tips, guides, and insights to help you maintain your home better
            </p>
          </div>

          {latestPosts.map((post, index) => (
            <div
              key={post.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center ${
                index > 0 ? "mt-12" : ""
              }`}
              data-testid={`blog-preview-${post.id}`}
            >
              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="md:w-1/2 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {format(new Date(post.date), "MMM dd, yyyy")}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <UserIcon className="h-3.5 w-3.5" />
                    {post.author}
                  </span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-extrabold leading-tight" data-testid={`text-blog-preview-title-${post.id}`}>
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline" data-testid={`button-read-more-home-${post.id}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" size="lg" data-testid="button-view-all-blogs">
                View All Blog Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30" data-testid="section-testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-1">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="text-5xl font-bold text-foreground mb-2" data-testid="text-overall-rating">
                  {overallRating.score}
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i <= Math.round(overallRating.score)
                          ? "fill-yellow-400 text-yellow-400 dark:fill-yellow-300 dark:text-yellow-300"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Based on {overallRating.total.toLocaleString()} reviews
                </p>
                <div className="w-full space-y-2">
                  {overallRating.breakdown.map((item) => (
                    <div key={item.stars} className="flex items-center gap-2 text-sm">
                      <span className="w-8 text-right text-muted-foreground">{item.stars}</span>
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 dark:fill-yellow-300 dark:text-yellow-300" />
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400 dark:bg-yellow-300 rounded-full"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                      <span className="w-10 text-right text-muted-foreground">{item.percent}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="pt-6">
                    <Quote className="h-6 w-6 text-muted-foreground/40 mb-3" />
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400 dark:fill-yellow-300 dark:text-yellow-300"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div>
                        <p className="font-semibold text-sm" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{testimonial.service}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.slice(4).map((testimonial, index) => (
              <Card key={index + 4} className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Quote className="h-6 w-6 text-muted-foreground/40 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400 dark:fill-yellow-300 dark:text-yellow-300"
                                : "text-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-3 text-sm">"{testimonial.text}"</p>
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div>
                          <p className="font-semibold text-sm" data-testid={`text-testimonial-name-${index + 4}`}>{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">{testimonial.service}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Book a Service?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Get expert help for your home in just a few clicks. Same-day service available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book" data-testid="link-book-cta">
              <Button
                size="lg"
                variant="secondary"
                data-testid="button-book-cta"
              >
                Book Now
              </Button>
            </Link>
            <a href={`tel:${businessInfo.phone}`} data-testid="link-call-cta">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground"
                data-testid="button-call-cta"
              >
                Call +91 {businessInfo.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
