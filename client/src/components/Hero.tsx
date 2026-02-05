import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star, Users, Clock, Shield } from "lucide-react";

export default function Hero() {
  const features = [
    { icon: CheckCircle2, text: "Verified Professionals" },
    { icon: Star, text: "Top-Rated Service" },
    { icon: Clock, text: "Same Day Service" },
    { icon: Shield, text: "100% Satisfaction" },
  ];

  const stats = [
    { value: "15K+", label: "Happy Customers" },
    { value: "50+", label: "Expert Technicians" },
    { value: "4.8", label: "Average Rating" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOTczMTYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-1.5">
                <Users className="h-3.5 w-3.5 mr-2" />
                Trusted by 15,000+ Customers in Delhi NCR
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Home
                <span className="text-primary block">Services at Your</span>
                Doorstep
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                From plumbing to painting, electrical to AC service - we bring trusted, verified professionals for all your home service needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/services" data-testid="link-explore-services">
                <Button size="lg" className="text-base px-8" data-testid="button-explore-services">
                  Explore Services
                </Button>
              </Link>
              <Link href="/book" data-testid="link-book-hero">
                <Button size="lg" variant="outline" className="text-base px-8" data-testid="button-book-service-hero">
                  Book Now
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <feature.icon className="h-4 w-4 text-primary" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-8 pt-4 border-t">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
                    alt="Professional plumber at work"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=250&fit=crop"
                    alt="Electrician fixing wiring"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
                    alt="Carpenter working on furniture"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1631545806609-8f5c97a37e8f?w=400&h=300&fit=crop"
                    alt="AC technician servicing unit"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card rounded-xl shadow-lg p-4 flex items-center gap-4 border">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-semibold text-primary"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">2,340+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
