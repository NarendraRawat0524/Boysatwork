import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { businessInfo, services } from "@/lib/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Boysatwork</span>
                <span className="text-xs opacity-70 leading-tight">.in</span>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Your trusted partner for all home services in Delhi NCR. Professional, reliable, and affordable solutions at your doorstep.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Chat on WhatsApp"
                data-testid="link-whatsapp-footer"
              >
                <SiWhatsapp className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/boysatwork.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Follow us on Instagram"
                data-testid="link-instagram-footer"
              >
                <SiInstagram className="h-5 w-5 text-white" />
              </a>
              <a
                href={`tel:${businessInfo.phone}`}
                className="h-10 w-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Call us"
                data-testid="link-phone-footer"
              >
                <Phone className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    data-testid={`link-footer-service-${service.id}`}
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Book a Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-70" />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  +91 {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-70" />
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-70" />
                <span className="text-sm opacity-80">{businessInfo.fullAddress}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-70" />
                <span className="text-sm opacity-80">Mon-Sun: 8:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-70">
              &copy; {currentYear} Boysatwork.in. All rights reserved.
            </p>
            <p className="text-sm opacity-70">
              Professional Home Services in Delhi NCR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
