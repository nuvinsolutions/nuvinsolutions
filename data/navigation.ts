export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export interface ServiceLink {
  slug: string;
  title: string;
  blurb: string;
}

// Replaced by data/services.ts in Chunk 3; kept here so nav and footer work from day one.
export const serviceLinks: ServiceLink[] = [
  { slug: "web-development", title: "Web Development", blurb: "Business, custom and e-commerce websites" },
  { slug: "saas-development", title: "SaaS Development", blurb: "Products, dashboards and integrations" },
  { slug: "digital-marketing", title: "Digital Marketing", blurb: "Google Ads, Meta Ads and SEO" },
  { slug: "social-media-management", title: "Social Media Management", blurb: "Strategy, content and community" },
];
