import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Check, ArrowLeft, Phone, IndianRupee } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { getServiceById, businessInfo } from "@/lib/services";
import { useSEO } from "@/hooks/useSEO";
import NotFound from "./not-found";

export default function ServiceDetails() {
  const { id } = useParams<{ id: string }>();
  const service = id ? getServiceById(id) : null;

  useSEO({
    title: service?.shortName || "Service Details",
    description: service?.description || "Professional home services in Delhi NCR with verified technicians and transparent pricing.",
  });

  if (!service) {
    return <NotFound />;
  }

  const Icon = service.icon;

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <Link href="/services">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-lg ${service.bgColor}`}>
                    <Icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">{service.name}</h1>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-semibold">{service.rating}</span>
                  </div>
                  <span className="text-white/70">({service.reviewCount.toLocaleString()} reviews)</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-heading font-extrabold mb-4">About This Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.description} Our experienced professionals ensure quality work with
                complete satisfaction guarantee. All services include standard safety measures
                and quality materials.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-extrabold mb-6">Available Services & Pricing</h2>
              <div className="grid gap-4">
                {service.subServices.map((sub) => (
                  <Card key={sub.id} className="hover-elevate">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4" data-testid={`card-subservice-${sub.id}`}>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{sub.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{sub.description}</p>
                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            <div className="flex items-center gap-1 text-primary font-semibold">
                              <IndianRupee className="h-4 w-4" />
                              <span>{sub.price.replace("₹", "")}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{sub.duration}</span>
                            </div>
                          </div>
                        </div>
                        <Link href={`/book?service=${service.id}&subservice=${sub.id}`}>
                          <Button data-testid={`button-book-${sub.id}`}>Book Now</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-heading font-extrabold mb-4">What's Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Expert technician visit",
                  "Standard safety equipment",
                  "Quality materials used",
                  "30-day service warranty",
                  "No hidden charges",
                  "Clean workspace after service",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-extrabold text-lg mb-4">Quick Booking</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Book now and our expert will reach you within 2 hours (subject to availability)
                  </p>
                  
                  <Link href={`/book?service=${service.id}`} className="block mb-4">
                    <Button className="w-full" size="lg" data-testid="button-book-sidebar">
                      Book This Service
                    </Button>
                  </Link>

                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/${businessInfo.whatsapp}?text=Hi, I'm interested in ${service.name} service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                      aria-label="Chat on WhatsApp"
                      data-testid="link-whatsapp-sidebar"
                    >
                      <Button variant="outline" className="w-full" data-testid="button-whatsapp-sidebar">
                        <SiWhatsapp className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                    </a>
                    <a href={`tel:${businessInfo.phone}`} className="flex-1" aria-label="Call us" data-testid="link-call-sidebar">
                      <Button variant="outline" className="w-full" data-testid="button-call-sidebar">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-extrabold text-lg mb-4">Why Choose Us</h3>
                  <ul className="space-y-3">
                    {[
                      "Verified & trained professionals",
                      "Transparent upfront pricing",
                      "On-time service guarantee",
                      "100% satisfaction or money back",
                      "Easy online booking",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading font-extrabold text-lg mb-2">Need Help?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Call us for instant booking or queries
                  </p>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-xl font-bold hover:underline"
                  >
                    +91 {businessInfo.phone}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
