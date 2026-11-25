import type { Project, ProjectImage } from "@/lib/types";

function screenshots(folder: string, files: string[], description: string): ProjectImage[] {
  return files.map((file, index) => ({
    src: `/work/${folder}/${file}`,
    alt: `${description}, screen ${index + 1}`,
    width: 1916,
    height: 1079,
  }));
}

export const projects: Project[] = [
  {
    slug: "char-and-ember",
    name: "Char & Ember",
    category: "web-development",
    summary: "A fast-food website where customers can browse menu items and place orders directly through WhatsApp.",
    caseStudy: {
      intro: "A fast-food website that brings menu browsing and WhatsApp ordering into one simple customer journey.",
      challenge: "A broad fast-food menu can slow a hungry customer down. The business needed to make its items easy to scan and turn browsing into a direct order, without adding a long checkout process.",
      solution: "We built an online menu organized around food categories, with a clear WhatsApp ordering path. Customers can move from choosing an item to contacting the business in one simple flow.",
      highlights: ["Browse food items and menu categories", "Explore options before ordering", "Place an order directly through WhatsApp"],
    },
    overview: ["A restaurant website presenting the menu and helping customers place orders."],
    objectives: ["Make the menu easy to explore", "Make ordering straightforward"],
    challenges: [],
    technologies: [],
    images: screenshots("char-ember", ["pic1.png", "pic2.png", "pic3.png"], "Char & Ember restaurant website"),
    featured: true,
    liveUrl: "https://char-ember.vercel.app/",
    isPlaceholder: false,
  },
  {
    slug: "e-bikes",
    name: "E-Bikes",
    category: "web-development",
    summary: "An electric vehicle website for exploring available bikes, viewing specifications, and finding dealership opportunities.",
    caseStudy: {
      intro: "A digital showroom for an electric vehicle company, bringing its vehicles, specifications, and dealership offer together.",
      challenge: "Choosing an electric vehicle takes more consideration than an impulse purchase. Buyers need to understand the available models and specifications, while potential dealers need a clear way to explore dealership opportunities.",
      solution: "We created a digital showroom that presents the vehicle range and specifications, surfaces dealership information, and gives buyers a clear next step to order.",
      highlights: ["Browse the electric vehicle range", "View bike specifications", "Explore dealership opportunities and order a vehicle"],
    },
    overview: ["A product-led website for electric bikes and scooters."],
    objectives: ["Present the product lineup", "Make model features easy to compare"],
    challenges: [],
    technologies: [],
    images: screenshots("evoo", ["img-1.png", "img-2.png", "img-3.png", "img-4.png"], "E-Bikes electric mobility website"),
    featured: true,
    liveUrl: "https://e-bikes-gamma.vercel.app/",
    isPlaceholder: false,
  },
  {
    slug: "as-digital",
    name: "AS Digital",
    category: "digital-marketing",
    summary: "A digital services and professional training website focused on helping businesses and learners grow.",
    overview: ["A website for digital services and professional training."],
    objectives: ["Present business services", "Showcase professional training"],
    challenges: [],
    technologies: [],
    images: screenshots("AS", ["i-1.png", "i-2.png", "i-3.png", "i-4.png", "i-5.png"], "AS Digital website"),
    featured: false,
    liveUrl: "https://as-digital-umcg.vercel.app/",
    isPlaceholder: false,
  },
  {
    slug: "brew-and-co",
    name: "Brew & Co",
    category: "web-development",
    summary: "An online coffee ordering platform where customers can explore the menu and place an order easily.",
    caseStudy: {
      intro: "An online coffee ordering platform for browsing the menu and placing an order with ease.",
      challenge: "For an online coffee order, customers need to explore the drinks and food menu and decide what they want without extra back-and-forth. The business needed a direct path from menu discovery to placing an order.",
      solution: "We built an online ordering platform where customers can browse coffee and food, discover menu favourites, and place an order online.",
      highlights: ["Browse coffee, drinks, and food offerings", "Discover featured menu favourites", "Place an order online"],
    },
    overview: ["A café website centered on its menu and bestsellers."],
    objectives: ["Showcase menu items", "Make the café experience easy to explore"],
    challenges: [],
    technologies: [],
    images: screenshots("brew", ["p2.png", "p1.png", "p3.png"], "Brew & Co café website"),
    featured: true,
    liveUrl: "https://brew-and-co-acyz.vercel.app/",
    isPlaceholder: false,
  },
  {
    slug: "fit-pro",
    name: "FitPro",
    category: "web-development",
    summary: "A fitness website presenting training, trainers, memberships, and gym facilities.",
    overview: ["A fitness club website introducing its training and membership options."],
    objectives: ["Present gym services", "Help prospective members take the next step"],
    challenges: [],
    technologies: [],
    images: screenshots("fitpro", ["piz1.png", "p2.png", "p3.png", "p4.png"], "FitPro fitness website"),
    featured: false,
    liveUrl: "https://fit-pro-frontend.vercel.app/",
    isPlaceholder: false,
  },
  {
    slug: "smile-care",
    name: "Smile Care",
    category: "web-development",
    summary: "A patient-friendly dental clinic website with treatment information and appointment booking.",
    overview: ["A dental clinic website introducing its care team and services."],
    objectives: ["Help patients explore treatments", "Make appointment booking accessible"],
    challenges: [],
    technologies: [],
    images: screenshots("smile", ["s1.png", "s2.png", "s3.png", "s4.png"], "Smile Care dental clinic website"),
    featured: false,
    liveUrl: "https://dental-clinic-lyart-nu.vercel.app/",
    isPlaceholder: false,
  },
  {
    slug: "trade-sync",
    name: "TradeSync",
    category: "saas-development",
    summary: "A copy-trading platform interface for exploring traders, market activity, and portfolio information.",
    overview: ["A trading product interface organized around trader discovery and portfolio views."],
    objectives: ["Make trading information easy to scan", "Present portfolio activity clearly"],
    challenges: [],
    technologies: [],
    images: screenshots("trade", ["p1.png", "p2.png", "p3.png", "p4.png"], "TradeSync trading platform"),
    featured: false,
    liveUrl: "https://trade-sync-seven.vercel.app/",
    isPlaceholder: false,
  },
];

export const categoryLabel: Record<Project["category"], string> = {
  "web-development": "Web Development",
  "saas-development": "SaaS Development",
  "digital-marketing": "Digital Marketing",
  "social-media-management": "Social Media Management",
};







