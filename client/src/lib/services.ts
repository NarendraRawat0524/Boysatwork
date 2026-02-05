import { Wrench, Zap, Hammer, Paintbrush, Wind, Building2, Home, Settings } from "lucide-react";

export interface SubService {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
}

export interface Service {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: typeof Wrench;
  color: string;
  bgColor: string;
  image: string;
  rating: number;
  reviewCount: number;
  subServices: SubService[];
}

export const services: Service[] = [
  {
    id: "plumbing",
    name: "Plumbers / Plumbing",
    shortName: "Plumbing",
    description: "Expert plumbing solutions for your home and office. From leaky faucets to complete bathroom installations.",
    icon: Wrench,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop",
    rating: 4.8,
    reviewCount: 2340,
    subServices: [
      { id: "tap-repair", name: "Tap Repair & Replacement", description: "Fix leaky taps or install new ones", price: "₹199", duration: "30-45 mins" },
      { id: "pipe-leak", name: "Pipe Leak Repair", description: "Detect and fix pipe leaks quickly", price: "₹299", duration: "45-60 mins" },
      { id: "drain-cleaning", name: "Drain Cleaning", description: "Clear blocked drains and pipes", price: "₹249", duration: "30-45 mins" },
      { id: "toilet-repair", name: "Toilet Repair", description: "Fix flush issues, leaks, and blockages", price: "₹349", duration: "45-60 mins" },
      { id: "water-tank", name: "Water Tank Cleaning", description: "Complete tank cleaning and sanitization", price: "₹799", duration: "2-3 hours" },
      { id: "bathroom-fitting", name: "Bathroom Fittings", description: "Install showers, faucets, and accessories", price: "₹499", duration: "1-2 hours" },
    ],
  },
  {
    id: "electrical",
    name: "Electricians / Electrical",
    shortName: "Electrical",
    description: "Professional electrical services ensuring safety and efficiency. All work compliant with safety standards.",
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    rating: 4.9,
    reviewCount: 3150,
    subServices: [
      { id: "switch-socket", name: "Switch & Socket Repair", description: "Repair or replace faulty switches and sockets", price: "₹149", duration: "15-30 mins" },
      { id: "fan-installation", name: "Fan Installation", description: "Install ceiling, exhaust, or wall fans", price: "₹299", duration: "30-45 mins" },
      { id: "light-fitting", name: "Light Fitting", description: "Install all types of lights and fixtures", price: "₹199", duration: "20-40 mins" },
      { id: "wiring", name: "Wiring & Rewiring", description: "New wiring or repair old wiring", price: "₹499", duration: "1-3 hours" },
      { id: "mcb-repair", name: "MCB/Fuse Box Repair", description: "Fix tripping issues and upgrade panels", price: "₹399", duration: "45-60 mins" },
      { id: "inverter-ups", name: "Inverter/UPS Installation", description: "Install and setup power backup systems", price: "₹599", duration: "1-2 hours" },
    ],
  },
  {
    id: "carpentry",
    name: "Carpenters / Carpentry",
    shortName: "Carpentry",
    description: "Skilled carpenters for all wood work needs. Custom furniture, repairs, and installations.",
    icon: Hammer,
    color: "text-amber-700",
    bgColor: "bg-amber-50 dark:bg-amber-950",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    rating: 4.7,
    reviewCount: 1890,
    subServices: [
      { id: "door-repair", name: "Door Repair", description: "Fix squeaky, stuck, or damaged doors", price: "₹299", duration: "30-60 mins" },
      { id: "furniture-assembly", name: "Furniture Assembly", description: "Assemble new furniture from any brand", price: "₹399", duration: "1-2 hours" },
      { id: "cabinet-repair", name: "Cabinet/Wardrobe Repair", description: "Fix hinges, drawers, and handles", price: "₹349", duration: "45-90 mins" },
      { id: "bed-repair", name: "Bed Repair", description: "Fix broken beds and mattress support", price: "₹449", duration: "1-2 hours" },
      { id: "shelf-installation", name: "Shelf/Rack Installation", description: "Install wall shelves and racks", price: "₹249", duration: "30-45 mins" },
      { id: "custom-work", name: "Custom Carpentry", description: "Bespoke furniture and woodwork", price: "₹999", duration: "Varies" },
    ],
  },
  {
    id: "painting",
    name: "Painters / Painting",
    shortName: "Painting",
    description: "Transform your space with professional painting services. Interior, exterior, and decorative painting.",
    icon: Paintbrush,
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-950",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop",
    rating: 4.8,
    reviewCount: 2670,
    subServices: [
      { id: "wall-painting", name: "Wall Painting", description: "Fresh coat for your walls", price: "₹18/sq.ft", duration: "Varies" },
      { id: "door-painting", name: "Door & Window Painting", description: "Refresh doors and windows", price: "₹499/door", duration: "2-3 hours" },
      { id: "texture-painting", name: "Texture Painting", description: "Add texture and patterns to walls", price: "₹35/sq.ft", duration: "Varies" },
      { id: "waterproofing", name: "Waterproofing", description: "Protect walls from water damage", price: "₹25/sq.ft", duration: "Varies" },
      { id: "wood-polish", name: "Wood Polishing", description: "Polish furniture and wooden items", price: "₹30/sq.ft", duration: "Varies" },
      { id: "exterior-painting", name: "Exterior Painting", description: "Complete exterior painting solutions", price: "₹22/sq.ft", duration: "Varies" },
    ],
  },
  {
    id: "ac-service",
    name: "AC Technicians",
    shortName: "AC Service",
    description: "Complete AC solutions - installation, repair, and maintenance for all brands and types.",
    icon: Wind,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-950",
    image: "https://images.unsplash.com/photo-1631545806609-8f5c97a37e8f?w=800&h=600&fit=crop",
    rating: 4.9,
    reviewCount: 4120,
    subServices: [
      { id: "ac-service-basic", name: "AC Service (Basic)", description: "Filter cleaning and gas check", price: "₹399", duration: "30-45 mins" },
      { id: "ac-service-complete", name: "AC Deep Cleaning", description: "Complete foam-jet cleaning", price: "₹699", duration: "60-90 mins" },
      { id: "ac-installation", name: "AC Installation", description: "New AC installation with copper piping", price: "₹1499", duration: "2-3 hours" },
      { id: "ac-uninstall", name: "AC Uninstallation", description: "Safe removal and packing", price: "₹499", duration: "45-60 mins" },
      { id: "ac-gas-refill", name: "AC Gas Refill", description: "Top-up or complete gas refill", price: "₹1999", duration: "45-60 mins" },
      { id: "ac-repair", name: "AC Repair", description: "Fix cooling issues and faults", price: "₹299", duration: "45-90 mins" },
    ],
  },
  {
    id: "building-maintenance",
    name: "Building Maintenance",
    shortName: "Building",
    description: "Comprehensive building maintenance services for residential and commercial properties.",
    icon: Building2,
    color: "text-slate-600",
    bgColor: "bg-slate-50 dark:bg-slate-950",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    rating: 4.7,
    reviewCount: 890,
    subServices: [
      { id: "general-repair", name: "General Repairs", description: "All-round handyman services", price: "₹499/hr", duration: "Hourly" },
      { id: "waterproofing-bld", name: "Waterproofing Services", description: "Terrace and wall waterproofing", price: "On Quote", duration: "Varies" },
      { id: "pest-control", name: "Pest Control", description: "Eliminate pests and insects", price: "₹999", duration: "1-2 hours" },
      { id: "deep-cleaning", name: "Deep Cleaning", description: "Complete building cleaning", price: "On Quote", duration: "Varies" },
      { id: "civil-work", name: "Civil Work", description: "Minor construction and repairs", price: "On Quote", duration: "Varies" },
      { id: "tank-cleaning", name: "Water Tank Cleaning", description: "Building tank cleaning", price: "₹1999", duration: "2-4 hours" },
    ],
  },
  {
    id: "property-management",
    name: "Property Management",
    shortName: "Property",
    description: "End-to-end property management solutions for landlords and property owners.",
    icon: Home,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    rating: 4.6,
    reviewCount: 560,
    subServices: [
      { id: "tenant-find", name: "Tenant Finding", description: "Find verified tenants for your property", price: "1 Month Rent", duration: "7-15 days" },
      { id: "rent-collection", name: "Rent Collection", description: "Monthly rent collection service", price: "5% of rent", duration: "Monthly" },
      { id: "property-inspection", name: "Property Inspection", description: "Regular inspection and reports", price: "₹999", duration: "2-3 hours" },
      { id: "maintenance-coord", name: "Maintenance Coordination", description: "Coordinate all repairs and upkeep", price: "10% of cost", duration: "As needed" },
      { id: "legal-assistance", name: "Legal Assistance", description: "Rental agreements and documentation", price: "₹2999", duration: "3-5 days" },
      { id: "property-handover", name: "Property Handover", description: "Complete handover management", price: "₹4999", duration: "1-2 days" },
    ],
  },
  {
    id: "facility-management",
    name: "Facility Management",
    shortName: "Facility",
    description: "Complete facility management for offices, buildings, and commercial spaces.",
    icon: Settings,
    color: "text-violet-600",
    bgColor: "bg-violet-50 dark:bg-violet-950",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    rating: 4.8,
    reviewCount: 420,
    subServices: [
      { id: "housekeeping", name: "Housekeeping Services", description: "Daily/weekly cleaning staff", price: "On Quote", duration: "Daily/Weekly" },
      { id: "security", name: "Security Services", description: "Trained security personnel", price: "On Quote", duration: "24/7" },
      { id: "pantry", name: "Pantry Services", description: "Pantry staff and supplies", price: "On Quote", duration: "Daily" },
      { id: "electrical-maint", name: "Electrical Maintenance", description: "Regular electrical upkeep", price: "AMC Based", duration: "Monthly" },
      { id: "hvac-maint", name: "HVAC Maintenance", description: "AC and ventilation maintenance", price: "AMC Based", duration: "Quarterly" },
      { id: "complete-fms", name: "Complete FMS", description: "End-to-end facility management", price: "On Quote", duration: "Annual" },
    ],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};

export const businessInfo = {
  name: "Boysatwork.in",
  email: "shivskukreja@gmail.com",
  phone: "9811797407",
  whatsapp: "919811797407",
  address: "9 Guru Nanak Market, Lajpat Nagar 4, New Delhi - 110024",
  landmark: "Near Moolchand Metro Station",
  fullAddress: "9 Guru Nanak Market, Lajpat Nagar 4, New Delhi - 110024 (Near Moolchand Metro Station)",
};
