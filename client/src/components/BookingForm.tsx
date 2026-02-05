import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { services, getServiceById, businessInfo } from "@/lib/services";
import { sendBookingEmail, isEmailJSConfigured } from "@/lib/emailjs";

const bookingSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  customerPhone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  customerEmail: z.string().email("Please enter a valid email address"),
  customerAddress: z.string().min(10, "Please enter your complete address").max(500, "Address is too long"),
  serviceId: z.string().min(1, "Please select a service"),
  subServiceId: z.string().min(1, "Please select a sub-service"),
  preferredDate: z.date({ required_error: "Please select a preferred date" }),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  additionalNotes: z.string().max(1000, "Notes are too long").optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const timeSlots = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
  "6:00 PM - 7:00 PM",
  "7:00 PM - 8:00 PM",
];

interface BookingFormProps {
  preselectedServiceId?: string;
  preselectedSubServiceId?: string;
}

export default function BookingForm({ preselectedServiceId, preselectedSubServiceId }: BookingFormProps) {
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      customerAddress: "",
      serviceId: preselectedServiceId || "",
      subServiceId: preselectedSubServiceId || "",
      preferredTime: "",
      additionalNotes: "",
    },
  });

  const selectedServiceId = form.watch("serviceId");
  const selectedService = selectedServiceId ? getServiceById(selectedServiceId) : null;

  useEffect(() => {
    if (preselectedServiceId) {
      form.setValue("serviceId", preselectedServiceId);
    }
    if (preselectedSubServiceId) {
      form.setValue("subServiceId", preselectedSubServiceId);
    }
  }, [preselectedServiceId, preselectedSubServiceId, form]);

  useEffect(() => {
    if (selectedServiceId && selectedServiceId !== preselectedServiceId) {
      form.setValue("subServiceId", "");
    }
  }, [selectedServiceId, preselectedServiceId, form]);

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    setErrorMessage("");

    const service = getServiceById(data.serviceId);
    const subService = service?.subServices.find((s) => s.id === data.subServiceId);

    if (!service || !subService) {
      setErrorMessage("Invalid service selection. Please try again.");
      setShowErrorModal(true);
      setIsSubmitting(false);
      return;
    }

    const formData = {
      customerName: data.customerName,
      customerPhone: data.customerPhone,
      customerEmail: data.customerEmail,
      customerAddress: data.customerAddress,
      serviceName: service.name,
      subServiceName: subService.name,
      preferredDate: format(data.preferredDate, "dd MMMM yyyy"),
      preferredTime: data.preferredTime,
      additionalNotes: data.additionalNotes || "",
    };

    if (isEmailJSConfigured()) {
      const success = await sendBookingEmail(formData);
      if (success) {
        setShowSuccessModal(true);
        form.reset();
      } else {
        setErrorMessage("Failed to send booking request. Please try calling us directly.");
        setShowErrorModal(true);
      }
    } else {
      console.log("EmailJS not configured. Booking data:", formData);
      setShowSuccessModal(true);
      form.reset();
    }

    setIsSubmitting(false);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Book a Service</CardTitle>
          <CardDescription>
            Fill in your details and we'll get back to you within 30 minutes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" data-testid="input-name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="customerPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="10-digit mobile number" data-testid="input-phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="customerEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" data-testid="input-email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="customerAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Address *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your complete address including flat/house no., building, street, landmark, and pincode"
                        className="resize-none"
                        rows={3}
                        data-testid="input-address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="serviceId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Category *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.shortName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subServiceId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Type *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={!selectedService}
                      >
                        <FormControl>
                          <SelectTrigger data-testid="select-subservice">
                            <SelectValue placeholder={selectedService ? "Select service type" : "Select a service first"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {selectedService?.subServices.map((sub) => (
                            <SelectItem key={sub.id} value={sub.id}>
                              {sub.name} - {sub.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Preferred Date *</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                              data-testid="button-date"
                            >
                              {field.value ? format(field.value, "PPP") : "Pick a date"}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < tomorrow}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Time *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-time">
                            <SelectValue placeholder="Select a time slot" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="additionalNotes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any specific requirements or details about the service needed..."
                        className="resize-none"
                        rows={3}
                        data-testid="input-notes"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
                data-testid="button-submit-booking"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Book Now"
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By booking, you agree to receive service updates via SMS and WhatsApp
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <DialogTitle className="text-center text-xl">Booking Confirmed!</DialogTitle>
            <DialogDescription className="text-center">
              Thank you for your booking. Our team will contact you within 30 minutes to confirm the details.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="text-center text-sm text-muted-foreground">
              For immediate assistance, call us at:
            </div>
            <a
              href={`tel:${businessInfo.phone}`}
              className="block text-center text-lg font-semibold text-primary hover:underline"
            >
              +91 {businessInfo.phone}
            </a>
            <Button
              className="w-full"
              onClick={() => {
                setShowSuccessModal(false);
                setLocation("/");
              }}
              data-testid="button-close-success"
            >
              Back to Home
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <DialogTitle className="text-center text-xl">Booking Failed</DialogTitle>
            <DialogDescription className="text-center">
              {errorMessage || "Something went wrong. Please try again or call us directly."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <a
              href={`tel:${businessInfo.phone}`}
              className="block text-center text-lg font-semibold text-primary hover:underline"
            >
              Call +91 {businessInfo.phone}
            </a>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowErrorModal(false)}
              data-testid="button-close-error"
            >
              Try Again
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
