import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Shield, Clock, Wallet, Headphones } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { services, businessInfo } from "@/lib/services";
import { useSEO } from "@/hooks/useSEO";

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
];

export default function Home() {
  useSEO({
    title: "Home",
    description: "Book trusted home services in Delhi NCR - Plumbers, Electricians, Carpenters, Painters, AC Technicians & more. Professional, reliable & affordable. Call 9811797407.",
  });

  return (
    <div>
      <Hero />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-semibold" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <Badge variant="outline">{testimonial.service}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
                className="text-base px-8"
                data-testid="button-book-cta"
              >
                Book Now
              </Button>
            </Link>
            <a href={`tel:${businessInfo.phone}`} data-testid="link-call-cta">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
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
