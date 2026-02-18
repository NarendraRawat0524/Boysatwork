import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    tagline: "Your Home,",
    highlight: "Our Expertise",
    subtitle: "Professional home services by verified experts in Delhi NCR. From plumbing to painting, we handle it all.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=600&fit=crop",
    cta: { text: "Explore Services", href: "/services" },
    ctaSecondary: { text: "Contact Us", href: "/contact" },
  },
  {
    tagline: "Trusted by",
    highlight: "15,000+ Families",
    subtitle: "Delhi NCR's most reliable home service platform. Same-day service, transparent pricing, 30-day warranty on all work.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=600&fit=crop",
    cta: { text: "Book Now", href: "/book" },
    ctaSecondary: { text: "Read More", href: "/about" },
  },
  {
    tagline: "Quality Service,",
    highlight: "Affordable Prices",
    subtitle: "No hidden charges. Upfront pricing for every service. Background-verified professionals at your doorstep.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    cta: { text: "View Services", href: "/services" },
    ctaSecondary: { text: "Call Us", href: "tel:9811797407" },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full overflow-hidden" data-testid="hero-carousel">
      <div className="relative h-[500px] md:h-[550px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={`${slide.tagline} ${slide.highlight}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>

            <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
              <div className="max-w-2xl space-y-6 text-center">
                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-transform duration-700 ${
                    index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  {slide.tagline}
                  <span className="text-primary block mt-1">{slide.highlight}</span>
                </h1>
                <p
                  className={`text-lg md:text-xl text-white/90 max-w-xl mx-auto transition-transform duration-700 ${
                    index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  {slide.subtitle}
                </p>
                <div
                  className={`flex flex-wrap justify-center gap-4 transition-transform duration-700 ${
                    index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  {slide.cta.href.startsWith("tel:") ? (
                    <a href={slide.cta.href}>
                      <Button size="lg" data-testid={`button-cta-primary-${index}`}>
                        {slide.cta.text}
                      </Button>
                    </a>
                  ) : (
                    <Link href={slide.cta.href}>
                      <Button size="lg" data-testid={`button-cta-primary-${index}`}>
                        {slide.cta.text}
                      </Button>
                    </Link>
                  )}
                  {slide.ctaSecondary.href.startsWith("tel:") ? (
                    <a href={slide.ctaSecondary.href}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/40 text-white bg-white/10"
                        data-testid={`button-cta-secondary-${index}`}
                      >
                        {slide.ctaSecondary.text}
                      </Button>
                    </a>
                  ) : (
                    <Link href={slide.ctaSecondary.href}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/40 text-white bg-white/10"
                        data-testid={`button-cta-secondary-${index}`}
                      >
                        {slide.ctaSecondary.text}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
        data-testid="button-carousel-next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-primary" : "w-2.5 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
