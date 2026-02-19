import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { businessInfo } from "@/lib/services";
import { useSEO } from "@/hooks/useSEO";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: `+91 ${businessInfo.phone}`,
    action: `tel:${businessInfo.phone}`,
    buttonText: "Call Now",
    color: "bg-blue-50 dark:bg-blue-950 text-blue-600",
  },
  {
    icon: SiWhatsapp,
    title: "WhatsApp",
    description: "Quick chat for queries & bookings",
    value: `+91 ${businessInfo.phone}`,
    action: `https://wa.me/${businessInfo.whatsapp}?text=Hi, I need help with home services.`,
    buttonText: "Open WhatsApp",
    isExternal: true,
    color: "bg-green-50 dark:bg-green-950 text-green-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "For detailed queries",
    value: businessInfo.email,
    action: `mailto:${businessInfo.email}`,
    buttonText: "Send Email",
    color: "bg-purple-50 dark:bg-purple-950 text-purple-600",
  },
];

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We currently serve all areas in Delhi NCR including South Delhi, North Delhi, East Delhi, West Delhi, Noida, Gurgaon, and Faridabad.",
  },
  {
    question: "How do I book a service?",
    answer: "You can book online through our website, call us directly, or send a WhatsApp message. We'll confirm your booking within 30 minutes.",
  },
  {
    question: "What are your working hours?",
    answer: "We operate from 8:00 AM to 9:00 PM, seven days a week, including holidays. Emergency services may be available outside these hours.",
  },
  {
    question: "Do you provide warranty on services?",
    answer: "Yes, all our services come with a 30-day warranty. If any issue arises from our work, we'll fix it free of charge.",
  },
  {
    question: "How do I pay for services?",
    answer: "You pay after the service is complete. We accept cash, UPI, and all major payment apps. No advance payment required.",
  },
  {
    question: "Can I reschedule my booking?",
    answer: "Yes, you can reschedule your booking up to 2 hours before the scheduled time at no extra cost.",
  },
];

export default function Contact() {
  useSEO({
    title: "Contact Us",
    description: "Get in touch with Boysatwork.in. Call +91 9811797407, WhatsApp, or visit us at Lajpat Nagar 4, New Delhi. We respond within 30 minutes.",
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Contact Us</Badge>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover-elevate">
              <CardContent className="pt-6">
                <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center mb-4`}>
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                <p className="font-medium mb-4">{method.value}</p>
                <a
                  href={method.action}
                  target={method.isExternal ? "_blank" : undefined}
                  rel={method.isExternal ? "noopener noreferrer" : undefined}
                >
                  <Button className="w-full" data-testid={`button-contact-${index}`}>
                    {method.buttonText}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-heading font-extrabold mb-6">Visit Our Office</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">{businessInfo.address}</p>
                      <p className="text-sm text-muted-foreground">{businessInfo.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">Monday - Sunday</p>
                      <p className="text-muted-foreground">8:00 AM - 9:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-muted-foreground">We respond to all queries within 30 minutes during working hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0867869821767!2d77.24017!3d28.5676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c69999ffff%3A0x799f4e0c8c9b1f46!2sLajpat%20Nagar%20IV%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-extrabold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold mb-4">
            Ready to Book a Service?
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Skip the wait. Book online now or call us for immediate assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/book">
              <Button size="lg" variant="secondary" data-testid="button-book-contact">
                Book Online Now
              </Button>
            </a>
            <a href={`tel:${businessInfo.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-call-contact"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call +91 {businessInfo.phone}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
