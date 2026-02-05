import emailjs from "@emailjs/browser";

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

export const initEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
};

export interface BookingFormData {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  serviceName: string;
  subServiceName: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes: string;
}

export const sendBookingEmail = async (data: BookingFormData): Promise<boolean> => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.error("EmailJS not configured. Please set up environment variables.");
    return false;
  }

  try {
    const templateParams = {
      to_email: "shivskukreja@gmail.com",
      customer_name: data.customerName,
      customer_phone: data.customerPhone,
      customer_email: data.customerEmail,
      customer_address: data.customerAddress,
      service_name: data.serviceName,
      sub_service_name: data.subServiceName,
      preferred_date: data.preferredDate,
      preferred_time: data.preferredTime,
      additional_notes: data.additionalNotes || "No additional notes",
      booking_time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};

export const isEmailJSConfigured = (): boolean => {
  return !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
};
