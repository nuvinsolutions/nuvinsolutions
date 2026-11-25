import type { ServiceSlug } from "@/lib/types";

export const hero = {
  tagline: "Attract. Engage. Convert.",
  lines: ["Website development and", "digital marketing", "built to be found."],
  lead: "We design and build fast, SEO-optimized websites and SaaS products, then run the Google Ads, Meta Ads and social media that bring customers to them.",
  primaryCta: { label: "Start a Project", href: "/contact" },
  secondaryCta: { label: "Explore Our Work", href: "/work" },
};

export const perspective = {
  eyebrow: "THE NUVIN PERSPECTIVE",
  title: { before: "A Partner,", emphasis: "not a Vendor." },
  copy: "We align how people discover your business, what they experience on your website, and how they take the next step so each part supports the same business goal.",
};

export type GraphicKind = "web" | "saas" | "marketing" | "social";

export interface Capability {
  slug: ServiceSlug;
  title: string;
  graphic: GraphicKind;
  description: string;
  services: string[];
}

export const capabilities = {
  title: "What We Bring",
  accent: "Together.",
  lead: "The right expertise for what your business needs next.",
  items: [
    {
      slug: "web-development",
      title: "Web Development",
      graphic: "web",
      description: "Websites and e-commerce shaped around your business.",
      services: ["Business Website Development", "Custom Website Development", "E-commerce Development", "Landing Page Development", "Website Redesign"],
    },
    {
      slug: "saas-development",
      title: "SaaS Development",
      graphic: "saas",
      description: "Custom products, web apps and integrations.",
      services: ["SaaS Product Development", "Custom Web Applications", "Admin Dashboards", "Subscription-based Platforms", "API Integrations"],
    },
    {
      slug: "digital-marketing",
      title: "Digital Marketing",
      graphic: "marketing",
      description: "SEO, Google Ads and Meta Ads.",
      services: ["Google Ads", "Meta Ads (Facebook & Instagram)", "Search Engine Optimization (SEO)", "Paid Advertising Campaign Management"],
    },
    {
      slug: "social-media-management",
      title: "Social Media Management",
      graphic: "social",
      description: "Strategy, content and audience engagement.",
      services: ["Social Media Strategy", "Content Planning", "Creative Post Design", "Social Media Management", "Audience Engagement"],
    },
  ] satisfies Capability[],
};

export const partnership = {
  title: "One Partner. Multiple Possibilities.",
  lead: "Our services are built to work together. Combine them, and each one makes the others stronger.",
  pairings: [
    {
      a: "Website Development",
      b: "SEO",
      outcome: "A website that’s found, not just visited.",
      detail: "We structure pages, content and technical foundations for search from day one, instead of retrofitting SEO later.",
      links: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
      ],
    },
    {
      a: "SaaS Development",
      b: "API Integrations",
      outcome: "A product that fits the way you already work.",
      detail: "Connect your platform to payments, CRMs, communication tools and internal systems, so data moves instead of being re-entered.",
      links: [{ label: "SaaS Development", href: "/services/saas-development" }],
    },
    {
      a: "Digital Marketing",
      b: "Social Media Management",
      outcome: "Paid reach and organic presence, pulling in the same direction.",
      detail: "Campaigns and content share one message, one audience and one view of what’s working.",
      links: [
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "Social Media Management", href: "/services/social-media-management" },
      ],
    },
  ],
};

export const selectedWork = {
  lead: "Three digital experiences, each designed around how its customers browse and buy.",
};

export const workProcess = {
  title: { before: "A clear path from", emphasis: "brief to launch." },
  lead: "Each phase has a purpose, a decision, and a clear next step.",
  steps: [
    { title: "Discover", text: "We understand your business, audience, and the outcome this project needs to support.", output: "A focused project brief." },
    { title: "Align", text: "We turn that context into an agreed scope, priorities, and a practical plan.", output: "A shared roadmap." },
    { title: "Build", text: "We design and develop the solution, sharing progress at agreed review points.", output: "A reviewed, working build." },
    { title: "Launch", text: "We test, refine, and hand over the finished website or product.", output: "A launch-ready handover." },
  ],
};

export const finalCta = {
  eyebrow: "LET’S TALK ABOUT WHAT’S NEXT",
  title: { before: "Ready for your next step?", emphasis: "Let’s talk." },
  text: "Tell us what you are building or where growth feels stuck. We will help identify a practical next step for your website, product, or marketing.",
  cta: { label: "Tell Us About Your Project", href: "/contact" },
};













