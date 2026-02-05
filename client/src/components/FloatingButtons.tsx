import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { businessInfo } from "@/lib/services";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${businessInfo.whatsapp}?text=Hi, I'm interested in booking a service.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        aria-label="Chat on WhatsApp"
        data-testid="button-whatsapp-floating"
      >
        <SiWhatsapp className="h-7 w-7" />
      </a>
      
      <a
        href={`tel:${businessInfo.phone}`}
        className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        aria-label="Call us"
        data-testid="button-call-floating"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
