import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MapPin } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { businessInfo } from "@/lib/services";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="hidden lg:block bg-primary text-primary-foreground py-1.5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              data-testid="link-phone-topbar"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91 {businessInfo.phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              <span>{businessInfo.landmark}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm opacity-90">
              Trusted Home Services in Delhi NCR
            </span>
            <a
              href="https://www.instagram.com/boysatwork.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              aria-label="Follow us on Instagram"
              data-testid="link-instagram-topbar"
            >
              <SiInstagram className="h-3.5 w-3.5" />
              <span className="text-xs">Follow Us</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Boysatwork</span>
                <span className="text-xs text-muted-foreground leading-tight">.in</span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive(link.href) ? "secondary" : "ghost"}
                  className={isActive(link.href) ? "font-semibold" : ""}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={`https://wa.me/${businessInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              data-testid="link-whatsapp-header"
            >
              <Button variant="ghost" size="icon">
                <SiWhatsapp className="h-4 w-4" />
              </Button>
            </a>

            <a
              href="https://www.instagram.com/boysatwork.official/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              data-testid="link-instagram-header"
            >
              <Button variant="ghost" size="icon">
                <SiInstagram className="h-4 w-4" />
              </Button>
            </a>

            <a href={`tel:${businessInfo.phone}`} aria-label="Call us" data-testid="link-call-header">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
            </a>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" data-testid="button-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">B</span>
                      </div>
                      <span className="font-bold">Boysatwork.in</span>
                    </div>
                  </div>

                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                        <Button
                          variant={isActive(link.href) ? "secondary" : "ghost"}
                          className="w-full justify-start text-base"
                          data-testid={`link-nav-mobile-${link.label.toLowerCase()}`}
                        >
                          {link.label}
                        </Button>
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-8">
                    <Link href="/book" onClick={() => setIsOpen(false)}>
                      <Button className="w-full" size="lg" data-testid="button-book-now-mobile">
                        Book a Service
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={`https://wa.me/${businessInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-whatsapp-mobile-menu"
                    >
                      <SiWhatsapp className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="https://www.instagram.com/boysatwork.official/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-instagram-mobile-menu"
                    >
                      <SiInstagram className="h-4 w-4" />
                      <span>Instagram</span>
                    </a>
                  </div>

                  <div className="mt-auto pt-8 border-t">
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <a
                        href={`tel:${businessInfo.phone}`}
                        className="flex items-center gap-2 hover:text-foreground transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>+91 {businessInfo.phone}</span>
                      </a>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>{businessInfo.fullAddress}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
