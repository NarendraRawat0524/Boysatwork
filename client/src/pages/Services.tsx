import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            All Home Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our complete range of professional home services. All work done by verified,
            experienced technicians with guaranteed satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">Can't find what you're looking for?</h2>
            <p className="text-muted-foreground mb-4">
              We offer many more services. Contact us to discuss your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:9811797407" className="text-primary font-semibold hover:underline">
                Call: +91 9811797407
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="mailto:shivskukreja@gmail.com" className="text-primary font-semibold hover:underline">
                Email: shivskukreja@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
