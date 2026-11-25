export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  email?: string;
  phone?: string;
  location?: string;
  socials: { label: string; url: string }[];
}

export const site: SiteConfig = {
  name: "Nuvin Solutions",
  description:
    "Nuvin Solutions is a remote-first agency in Lahore, Pakistan, building SEO-optimised websites, SaaS products and digital marketing for growing businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "nuvinsolutions@gmail.com",
  phone: "+92 324 4022046",
  location: "Lahore, Pakistan (remote-first)",
  socials: [
    // { label: "LinkedIn", url: "https://www.linkedin.com/company/…" },
  ],
};
