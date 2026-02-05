import { useSearch } from "wouter";
import { Badge } from "@/components/ui/badge";
import BookingForm from "@/components/BookingForm";
import { businessInfo } from "@/lib/services";

export default function Booking() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const serviceId = params.get("service") || undefined;
  const subServiceId = params.get("subservice") || undefined;

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Book a Service</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule Your Service
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill in your details below and our team will confirm your booking within 30 minutes.
            For urgent requirements, call us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookingForm 
              preselectedServiceId={serviceId} 
              preselectedSubServiceId={subServiceId} 
            />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Booking Process</h3>
                <ol className="space-y-4">
                  {[
                    { step: 1, title: "Fill the Form", desc: "Enter your details and select service" },
                    { step: 2, title: "Confirmation Call", desc: "We'll call to confirm within 30 mins" },
                    { step: 3, title: "Expert Visits", desc: "Professional arrives at scheduled time" },
                    { step: 4, title: "Pay After Service", desc: "Pay only after work is complete" },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For immediate assistance or urgent bookings, contact us directly:
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Call: +91 {businessInfo.phone}
                  </a>
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 font-semibold hover:underline"
                  >
                    WhatsApp: +91 {businessInfo.phone}
                  </a>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Service Guarantee</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 30-day warranty on all services</li>
                  <li>• 100% satisfaction guarantee</li>
                  <li>• Verified & trained professionals</li>
                  <li>• Transparent pricing, no hidden costs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
