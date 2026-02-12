export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: "paragraph" | "heading" | "subheading" | "list" | "faq";
  text?: string;
  items?: string[];
  question?: string;
  answer?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "best-deep-cleaning-services-delhi",
    title: "Best Deep Cleaning Services in Delhi - Trusted Experts at Boys@Work",
    excerpt: "Living in Delhi means constantly dealing with dust, pollution, and germs. Discover how professional deep cleaning can transform your home and office into a healthier, hygienic space.",
    coverImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=500&fit=crop",
    author: "Boys@Work Team",
    date: "2025-12-15",
    category: "Deep Cleaning",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "Living in a city like Delhi means constantly dealing with dust, pollution, and germs. Even with regular cleaning, many areas inside homes and offices slowly collect dirt\u2014behind furniture, inside kitchen corners, bathroom tiles, and frequently touched surfaces. Over time, this hidden buildup affects hygiene, air quality, and overall health.",
      },
      {
        type: "paragraph",
        text: "This is where professional deep cleaning services become essential. Boys@Work provides some of the best deep cleaning services in Delhi, focusing on thorough cleaning that goes beyond what daily cleaning can achieve. Our aim is not just to make spaces look clean, but to make them healthy, hygienic, and comfortable for everyday living and working. With trained professionals, modern equipment, and safe cleaning products, we ensure results that are visible and long-lasting.",
      },
      {
        type: "heading",
        text: "What Deep Cleaning Really Means & Why It Matters",
      },
      {
        type: "paragraph",
        text: "Deep cleaning is a detailed and systematic process that targets deep-seated dirt, grease, stains, and harmful bacteria. Unlike routine cleaning, which maintains appearance, deep cleaning focuses on areas that are often ignored but have the highest impact on hygiene.",
      },
      {
        type: "paragraph",
        text: "Professional deep cleaning typically includes:",
      },
      {
        type: "list",
        items: [
          "Cleaning behind and under furniture",
          "Deep scrubbing of bathrooms and kitchens",
          "Removal of stubborn grease, stains, and limescale",
          "Sanitization of high-touch surfaces",
        ],
      },
      {
        type: "paragraph",
        text: "This level of cleaning helps reduce allergies, bad odors, and the spread of germs. It also improves indoor air quality, making the space safer for families, employees, and visitors. That is why many people now choose professional deep cleaning services in Delhi as a regular hygiene solution, not just an occasional service.",
      },
      {
        type: "heading",
        text: "Why Boys@Work Is a Trusted Choice in Delhi",
      },
      {
        type: "paragraph",
        text: "When hiring a cleaning service, trust and quality matter the most. At Boys@Work, we follow a professional approach to ensure every cleaning job meets high standards of safety and effectiveness.",
      },
      {
        type: "list",
        items: [
          "Trained and background-verified cleaning professionals",
          "Use of eco-friendly and non-toxic cleaning products",
          "Advanced tools and professional-grade machines",
          "Transparent pricing with no hidden charges",
          "Proper checklist and final quality inspection",
        ],
      },
      {
        type: "paragraph",
        text: "Our focus on consistency and customer satisfaction has helped us build a strong reputation as one of the most dependable deep cleaning service providers in Delhi.",
      },
      {
        type: "heading",
        text: "Professional Deep Cleaning Services Offered by Boys@Work",
      },
      {
        type: "paragraph",
        text: "We offer customized deep cleaning services for both residential and commercial properties across Delhi NCR. Each service is planned according to the space, usage, and level of cleaning required.",
      },
      {
        type: "subheading",
        text: "Home Deep Cleaning",
      },
      {
        type: "paragraph",
        text: "Our home deep cleaning service is designed to restore freshness and hygiene by thoroughly cleaning:",
      },
      {
        type: "list",
        items: [
          "Bedrooms and living areas",
          "Floors, doors, windows, and switches",
          "Sofa, mattress, and curtain vacuuming",
          "Hidden corners and hard-to-reach areas",
        ],
      },
      {
        type: "subheading",
        text: "Office Deep Cleaning",
      },
      {
        type: "paragraph",
        text: "A clean office supports better productivity and creates a positive professional impression. Our office deep cleaning services cover:",
      },
      {
        type: "list",
        items: [
          "Workstations and cabins",
          "Washrooms and pantry areas",
          "Glass partitions and floors",
          "Sanitization of high-touch surfaces",
        ],
      },
      {
        type: "subheading",
        text: "Bathroom & Kitchen Deep Cleaning",
      },
      {
        type: "paragraph",
        text: "Bathrooms and kitchens are prone to moisture, grease, and bacteria buildup. Our deep cleaning ensures:",
      },
      {
        type: "list",
        items: [
          "Effective grease and stain removal",
          "Deep cleaning of tiles, sinks, and fittings",
          "Germ and bacteria elimination",
          "Odor control and proper sanitization",
        ],
      },
      {
        type: "heading",
        text: "Areas We Serve Across Delhi NCR",
      },
      {
        type: "paragraph",
        text: "Boys@Work provides deep cleaning services across all major areas of Delhi NCR, including South, North, East, West, and Central Delhi, as well as Noida, Gurgaon, and Ghaziabad. Our local teams ensure quick response, timely service, and consistent quality across locations.",
      },
      {
        type: "heading",
        text: "How Our Deep Cleaning Process Works",
      },
      {
        type: "list",
        items: [
          "Inspection and assessment of the property",
          "Removal of loose dust and debris",
          "Detailed scrubbing and complete sanitization",
          "Final quality check and customer approval",
        ],
      },
      {
        type: "paragraph",
        text: "This systematic approach allows us to deliver consistent and high-quality deep cleaning services in Delhi.",
      },
      {
        type: "heading",
        text: "Benefits of Hiring Professional Deep Cleaning Services",
      },
      {
        type: "list",
        items: [
          "Saves time and physical effort",
          "Ensures better hygiene and sanitation",
          "Improves indoor air quality",
          "Keeps spaces cleaner for a longer period",
        ],
      },
      {
        type: "paragraph",
        text: "For these reasons, many homeowners and businesses prefer professional deep cleaning services in Delhi over regular or DIY cleaning methods.",
      },
      {
        type: "heading",
        text: "Cost of Deep Cleaning Services in Delhi",
      },
      {
        type: "paragraph",
        text: "The cost of deep cleaning depends on factors such as the size of the area, type of property (home or office), and level of cleaning required. At Boys@Work, we believe in complete transparency. We offer free inspection and free quotation, so customers receive clear pricing without any hidden charges.",
      },
      {
        type: "heading",
        text: "Frequently Asked Questions",
      },
      {
        type: "faq",
        question: "What is the difference between regular cleaning and deep cleaning?",
        answer: "Regular cleaning handles surface dust, while deep cleaning removes hidden dirt, grease, and germs from hard-to-reach areas for better hygiene.",
      },
      {
        type: "faq",
        question: "How often should deep cleaning be done?",
        answer: "Homes should be deep cleaned every 3-6 months, while offices usually need it every 1-3 months depending on usage.",
      },
      {
        type: "faq",
        question: "Is deep cleaning safe for children and pets?",
        answer: "Yes, professional deep cleaning uses eco-friendly, non-toxic products that are safe for children, pets, and sensitive individuals.",
      },
      {
        type: "faq",
        question: "How long does a deep cleaning service take?",
        answer: "Most deep cleaning services take around 3-8 hours, depending on the size and condition of the property.",
      },
      {
        type: "faq",
        question: "Why choose Boys@Work for deep cleaning services in Delhi?",
        answer: "Boys@Work offers trained staff, safe products, transparent pricing, and thorough cleaning, making it a trusted deep cleaning service in Delhi.",
      },
    ],
  },
  {
    id: "2",
    slug: "home-maintenance-tips-monsoon",
    title: "Essential Home Maintenance Tips for Delhi Monsoon Season",
    excerpt: "Monsoon season brings unique challenges for homeowners in Delhi. Learn how to protect your home from water damage, leaks, and electrical issues with these expert tips.",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    author: "Boys@Work Team",
    date: "2025-11-20",
    category: "Home Maintenance",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "The monsoon season in Delhi brings much-needed relief from the summer heat, but it also poses significant challenges for homeowners. From water leakage to electrical hazards, the rainy season can cause damage if your home isn't properly maintained.",
      },
      {
        type: "heading",
        text: "Pre-Monsoon Checklist for Your Home",
      },
      {
        type: "list",
        items: [
          "Check and repair any roof leaks or cracks",
          "Clean and unclog drainage pipes and gutters",
          "Inspect electrical wiring and fix exposed connections",
          "Waterproof exterior walls and balconies",
          "Service your AC units before the humidity increases",
        ],
      },
      {
        type: "heading",
        text: "Plumbing Precautions During Monsoon",
      },
      {
        type: "paragraph",
        text: "Heavy rains can overwhelm your home's plumbing system. Make sure all drains are clear, pipes are properly sealed, and you have a reliable plumber on speed dial. At Boys@Work, we offer emergency plumbing services across Delhi NCR to handle any monsoon-related plumbing issues.",
      },
      {
        type: "heading",
        text: "Electrical Safety Tips",
      },
      {
        type: "list",
        items: [
          "Never touch electrical switches with wet hands",
          "Install proper MCBs and ELCBs for safety",
          "Keep electrical appliances away from water exposure",
          "Get a professional electrical inspection before monsoon",
        ],
      },
      {
        type: "paragraph",
        text: "Being proactive about home maintenance can save you thousands in repair costs later. Book a pre-monsoon home inspection with Boys@Work today and protect your home this rainy season.",
      },
    ],
  },
  {
    id: "3",
    slug: "choosing-right-ac-service-delhi",
    title: "How to Choose the Right AC Service Provider in Delhi",
    excerpt: "With Delhi summers reaching 45+ degrees, a well-functioning AC is essential. Here's what to look for when choosing an AC service provider.",
    coverImage: "/images/blog-ac-service.jpg",
    author: "Boys@Work Team",
    date: "2025-10-10",
    category: "AC Service",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "Delhi summers are brutal, with temperatures often soaring above 45 degrees Celsius. A well-maintained air conditioner isn't a luxury\u2014it's a necessity. But choosing the right AC service provider can be challenging with so many options available.",
      },
      {
        type: "heading",
        text: "What to Look For in an AC Service Provider",
      },
      {
        type: "list",
        items: [
          "Certified and trained technicians",
          "Transparent pricing without hidden costs",
          "Warranty on service and parts",
          "Availability of genuine spare parts",
          "Quick response time and same-day service",
        ],
      },
      {
        type: "heading",
        text: "Types of AC Services You Should Know About",
      },
      {
        type: "paragraph",
        text: "Regular AC maintenance includes several types of services. Understanding them helps you make informed decisions:",
      },
      {
        type: "list",
        items: [
          "Basic AC servicing (filter cleaning, gas check) - every 3 months",
          "Deep AC cleaning (coil wash, drain cleaning) - every 6 months",
          "AC gas refill - when cooling performance drops",
          "AC installation and uninstallation - when moving or upgrading",
          "Complete AC repair - for compressor, fan motor, or PCB issues",
        ],
      },
      {
        type: "paragraph",
        text: "At Boys@Work, we provide all types of AC services with trained technicians who handle every major brand. Our transparent pricing and 30-day warranty give you peace of mind with every service call.",
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getLatestBlogPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
