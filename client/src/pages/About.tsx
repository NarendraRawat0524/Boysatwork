import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Target, Award, Shield, Clock, Heart } from "lucide-react";
import { businessInfo } from "@/lib/services";
import { useSEO } from "@/hooks/useSEO";

const stats = [
  { value: "15,000+", label: "Happy Customers" },
  { value: "50+", label: "Expert Technicians" },
  { value: "8+", label: "Service Categories" },
  { value: "4.8", label: "Average Rating" },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "All our professionals undergo thorough background verification and skill assessment.",
  },
  {
    icon: Clock,
    title: "Punctuality",
    description: "We respect your time. Our technicians arrive within the scheduled time slot.",
  },
  {
    icon: Award,
    title: "Quality Work",
    description: "We use quality materials and follow best practices for every service.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority. We go the extra mile to exceed expectations.",
  },
];

const team = [
  { role: "Plumbing Experts", count: "12+" },
  { role: "Electricians", count: "15+" },
  { role: "Carpenters", count: "8+" },
  { role: "Painters", count: "10+" },
  { role: "AC Technicians", count: "10+" },
];

export default function About() {
  useSEO({
    title: "About Us",
    description: "Learn about Boysatwork.in - Delhi NCR's trusted home service provider. 15,000+ happy customers, 50+ expert technicians, and 4.8 average rating.",
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Your Trusted Home Service Partner
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Boysatwork.in is Delhi NCR's trusted destination for professional home services. 
            We connect you with verified, skilled professionals for all your home needs.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="py-8">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-primary" />
              <Badge variant="secondary">Our Mission</Badge>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold mb-4">
              Making Home Services Simple & Reliable
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We started Boysatwork.in with a simple goal - to make finding reliable home service 
              professionals as easy as ordering food online. No more calling multiple vendors, 
              negotiating prices, or worrying about service quality.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our platform connects you with pre-vetted, trained professionals who deliver 
              quality work at transparent prices. From a leaky tap to complete home renovation, 
              we've got you covered.
            </p>
            <Link href="/services">
              <Button data-testid="button-explore-services-about">Explore Our Services</Button>
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
              alt="Our team at work"
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold">Since 2020</div>
              <div className="text-sm opacity-90">Serving Delhi NCR</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">Our Values</Badge>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">Our Team</Badge>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold">Expert Professionals</h2>
            <p className="text-muted-foreground mt-2">A team of 50+ verified experts ready to serve you</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {team.map((member, index) => (
              <Card key={index} className="px-6 py-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">{member.count}</div>
                  <div className="text-sm text-muted-foreground">{member.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold mb-4">Visit Our Office</h2>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">Address:</strong> {businessInfo.address}</p>
                <p><strong className="text-foreground">Landmark:</strong> {businessInfo.landmark}</p>
                <p><strong className="text-foreground">Phone:</strong> +91 {businessInfo.phone}</p>
                <p><strong className="text-foreground">Email:</strong> {businessInfo.email}</p>
                <p><strong className="text-foreground">Working Hours:</strong> Mon-Sun, 8:00 AM - 9:00 PM</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="space-y-4">
                <Link href="/book">
                  <Button size="lg" className="w-full" data-testid="button-book-about">
                    Book a Service
                  </Button>
                </Link>
                <a href={`tel:${businessInfo.phone}`}>
                  <Button size="lg" variant="outline" className="w-full" data-testid="button-call-about">
                    Call +91 {businessInfo.phone}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
