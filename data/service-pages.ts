import type { ServiceSlug } from "@/lib/types";

export interface ServicePageContent {
  slug: ServiceSlug;
  primaryKeyword: string;
  title: string;
  metaDescription: string;
  headline: { before: string; emphasis: string };
  intro: string;
  problemTitle: string;
  problem: string[];
  includedLead: string;
  included: { title: string; detail: string }[];
  processLead: string;
  process: { title: string; timeframe: string; detail: string }[];
  toolsLead: string;
  tools: string[];
  packageLead: string;
  packages: { name: string; description: string; includes: string[] }[];
  projectSlugs: string[];
  workLead: string;
  reasons: { title: string; detail: string }[];
  faq: { question: string; answer: string }[];
}

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "web-development": {
    slug: "web-development",
    primaryKeyword: "web development agency",
    title: "Web Development Agency | Nuvin Solutions",
    metaDescription: "Build a fast, search-ready business website that turns more of the right visitors into enquiries. Get a tailored web development quote from Nuvin.",
    headline: { before: "Web Development Services That Turn Visitors Into", emphasis: "Clients" },
    intro: "We design and build websites for startups, small businesses and growing brands that need a clearer story, a smoother customer journey and a reliable way to generate enquiries.",
    problemTitle: "Is Your Website Costing You Customers?",
    problem: [
      "A slow or outdated website can make a capable business look harder to trust. If visitors cannot quickly understand what you offer, find the information they need or take the next step, they may leave before they ever speak with you. A site that looks fine on a desktop can also frustrate customers on a phone, where much of today’s browsing happens.",
      "As a web development agency, Nuvin starts by understanding the people your site needs to serve and the business goal it needs to support. We plan the structure, design around your brand, and build a responsive, search-ready experience. The result is a website that makes your value easier to see and makes it simpler for the right visitor to enquire, book or buy.",
    ],
    includedLead: "A strong business website needs more than polished screens. We bring the structure, performance and practical tools together so your team can use the site confidently after launch.",
    included: [
      { title: "Responsive design", detail: "Layouts adapt to phones, tablets and desktop screens, helping every visitor use the site comfortably wherever they discover your business." },
      { title: "SEO-ready structure", detail: "Clear page hierarchy, descriptive headings and crawlable content give search engines a useful foundation and help people find the right page." },
      { title: "Speed optimization", detail: "Lean assets and considered implementation reduce unnecessary waiting, so customers can reach your content without friction." },
      { title: "CMS or admin tools", detail: "Where the project needs it, we make everyday updates manageable, from changing page copy to adding products or publishing content." },
      { title: "Analytics setup", detail: "Measurement can be configured around meaningful actions such as enquiries, calls or purchases, so you can understand how the site is used." },
      { title: "Security and hosting guidance", detail: "We help you prepare a dependable launch environment and understand the practical maintenance and security steps your website needs." },
    ],
    processLead: "The schedule below is a planning estimate. Final timing depends on page count, content readiness, integrations and review turnaround.",
    process: [
      { title: "Discovery", timeframe: "2–3 business days", detail: "We clarify your audience, goals, existing content and the actions the website should help visitors take." },
      { title: "Structure and design", timeframe: "About 1 week", detail: "We map key pages and shape the visual direction before moving into the full build." },
      { title: "Development", timeframe: "1–2 weeks", detail: "We build the approved responsive pages, connect agreed tools and prepare the site for real content." },
      { title: "Testing and launch", timeframe: "3–5 business days", detail: "We review devices, links, forms and performance, then coordinate a careful handover and launch." },
    ],
    toolsLead: "We choose technology to suit your requirements, maintainability and the team who will use the website. A typical modern stack may include:",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel", "GitHub"],
    packageLead: "The right scope depends on your site, content and integrations. We prepare a tailored quote after understanding what you need; there are no public package prices to force-fit your project.",
    packages: [
      { name: "Starter", description: "A focused website for a business that needs a professional place to begin online.", includes: ["Core business pages", "Responsive implementation", "SEO foundations"] },
      { name: "Growth", description: "A more complete website for a brand ready to improve its customer journey and visibility.", includes: ["Expanded page structure", "Content and conversion planning", "Analytics and integrations"] },
      { name: "Custom", description: "A bespoke website for specific workflows, commerce needs or connected systems.", includes: ["Custom features", "Third-party integrations", "Scoped support plan"] },
    ],
    projectSlugs: ["char-and-ember", "e-bikes", "brew-and-co"],
    workLead: "These real projects show how we adapt the website experience to different audiences and buying decisions. We do not attach performance figures where verified analytics are not available.",
    reasons: [
      { title: "Search is considered early", detail: "Page structure, technical foundations and content hierarchy are part of planning, rather than a rushed checklist after the site is built." },
      { title: "Designed around real visitors", detail: "We organize information around the questions customers bring, so the site makes the next step easier to understand." },
      { title: "One connected partner", detail: "Development can be planned alongside SaaS, SEO or campaign needs, which helps avoid disconnected tools and conflicting messages." },
      { title: "Clear handover", detail: "We explain what has been built and how to manage the agreed parts, so your team knows where to go after launch." },
    ],
    faq: [
      { question: "How much does business website development cost in Pakistan?", answer: "Website development cost in Pakistan depends on the number of pages, custom design, content needs, e-commerce features and integrations. Nuvin first understands your goals and scope, then provides a tailored quote. Share your requirements for a clear estimate before work begins." },
      { question: "How long does it take to build a business website?", answer: "A focused business website can often be planned and built in several weeks, while larger sites take longer. Content readiness, feedback and special features all affect timing. We outline a practical schedule after agreeing the page list and requirements." },
      { question: "Will my website be optimized for search engines?", answer: "We build search-friendly foundations into the site, including crawlable pages, clear headings, responsive layouts and performance considerations. Search visibility also depends on useful content, competition and ongoing SEO work, so we do not promise specific rankings." },
      { question: "Can you redesign my existing website?", answer: "Yes. We can review the current website, identify where visitors may be getting stuck and plan a redesign around your goals. We can retain useful content, improve the structure and update the visual experience while planning redirects where needed." },
      { question: "Do you provide hosting and website maintenance?", answer: "We can help select and configure suitable hosting for your project and discuss ongoing maintenance needs. The exact support depends on the website, platform and service scope. Your proposal will clarify what is included and who manages each part after launch." },
      { question: "Can I update the website myself after launch?", answer: "Where regular updates are expected, we can include a content management or admin experience suited to the website. During handover, we explain the agreed editing workflow. The right setup depends on how often you publish and who will maintain the content." },
    ],
  },
  "saas-development": {
    slug: "saas-development",
    primaryKeyword: "SaaS development company",
    title: "SaaS Development Company | Nuvin Solutions",
    metaDescription: "Plan and build scalable SaaS products, from MVP scope to secure launch. Tell Nuvin Solutions what you’re building and request a tailored quote today.",
    headline: { before: "SaaS Development for Products Built to", emphasis: "Scale" },
    intro: "We help founders and growing businesses turn a product idea into a usable SaaS platform, from validating the first release to building the workflows, dashboards and integrations that support the next stage.",
    problemTitle: "Is Your Product Idea Stuck Between Concept and Code?",
    problem: [
      "SaaS ideas often start with a real operational problem, but the path from concept to a working product can feel unclear. Teams may try to build too much before testing the core workflow, or stitch together tools that do not fit how customers actually work. Unclear priorities can increase cost and delay the learning that should shape the product.",
      "As a SaaS development company, Nuvin helps define what the first useful version needs to do, then designs and builds around that scope. We consider user roles, data, permissions, integrations and future needs early, while keeping the initial product focused. This gives your business a practical foundation to test with users and improve based on what you learn.",
    ],
    includedLead: "SaaS development is a connected system, not only a set of screens. We plan the essential product pieces so customers can access, understand and use the software reliably.",
    included: [
      { title: "MVP scope and roadmap", detail: "We prioritize the core user problem and distinguish launch essentials from features that can wait until real usage provides direction." },
      { title: "Product interface and flows", detail: "We map the key tasks, states and navigation so the first experience is understandable for both new and returning users." },
      { title: "Dashboards and admin panels", detail: "We build the views teams need to monitor activity, manage records and complete important product workflows." },
      { title: "Authentication and roles", detail: "User accounts, access rules and role-based permissions can be planned to match the different people who use the platform." },
      { title: "Payments and subscriptions", detail: "Where needed, we connect payment flows and subscription states so the product experience reflects the customer’s plan." },
      { title: "APIs and integrations", detail: "We connect agreed services and design data flows that reduce repeated work while keeping system responsibilities clear." },
    ],
    processLead: "SaaS timelines vary with product complexity, security requirements and third-party services. These ranges are planning estimates, refined after discovery.",
    process: [
      { title: "Product discovery", timeframe: "About 1 week", detail: "We understand users, business priorities, current workflows and the smallest release that can test the product idea." },
      { title: "UX and technical plan", timeframe: "1–2 weeks", detail: "We outline product flows, data needs, roles, integrations and an architecture suited to the agreed first release." },
      { title: "MVP development", timeframe: "4+ weeks", detail: "We build and review the core product in stages, keeping the agreed scope and feedback visible throughout." },
      { title: "Testing and release", timeframe: "1–2 weeks", detail: "We check essential user paths, permissions and integrations, then prepare the deployment and handover plan." },
    ],
    toolsLead: "The stack depends on the product and its operational needs. A typical modern SaaS foundation may include:",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Zod", "Vercel"],
    packageLead: "We scope SaaS projects around the product stage, risk and integrations. These package directions help frame a conversation; final features and investment are quoted for your product.",
    packages: [
      { name: "Starter", description: "Validate a focused product idea with the smallest useful release.", includes: ["MVP definition", "Core user journey", "Essential account flows"] },
      { name: "Growth", description: "Improve an existing product with richer workflows and operational tools.", includes: ["Expanded product modules", "Dashboard and admin tools", "Selected integrations"] },
      { name: "Custom", description: "Build a tailored SaaS platform around complex business rules or systems.", includes: ["Custom architecture", "Advanced roles and workflows", "Integration planning"] },
    ],
    projectSlugs: ["trade-sync"],
    workLead: "TradeSync is a real product interface project. Its views are presented as product work; we do not claim unprovided adoption, revenue or performance metrics.",
    reasons: [
      { title: "Scope before feature lists", detail: "We connect features to user needs and business priorities, which helps prevent a first release from becoming an untested collection of ideas." },
      { title: "Technical choices with a reason", detail: "The stack is selected for the product’s workflow, integrations and maintainability, rather than technology for its own sake." },
      { title: "Visible progress", detail: "Milestones and reviews make it easier to see what is complete, what needs a decision and what comes next." },
      { title: "A base for learning", detail: "A focused release gives you a product to evaluate with users and a clearer basis for deciding what to improve next." },
    ],
    faq: [
      { question: "How much does SaaS development cost?", answer: "SaaS development cost depends on product scope, user roles, data workflows, integrations, security requirements and the level of design needed. We start by understanding the first release you need, then prepare a phased scope and tailored quote rather than guessing from a feature list." },
      { question: "How long does it take to build an MVP?", answer: "A focused SaaS MVP may take several weeks to a few months, depending on its workflows, integrations and review cycles. The timeline becomes more reliable once the core user journey and launch requirements are agreed. We share milestones before development begins." },
      { question: "What should be included in a SaaS MVP?", answer: "A SaaS MVP should include the smallest set of workflows that lets intended users solve the main problem and gives the business useful feedback. That often means essential accounts, permissions and one core workflow; advanced automation can be considered after learning from real use." },
      { question: "Can you add payments, subscriptions and APIs?", answer: "Yes. We can scope payment providers, subscription states and API integrations according to your product needs. Each integration has its own technical and operational requirements, so we review documentation, data flows and edge cases during planning before confirming cost and timing." },
      { question: "Can you work with an existing SaaS application?", answer: "We can review an existing product and discuss improvements, new modules or a rebuild path. First we need to understand the current architecture, code access, user workflows and known constraints. This helps us recommend a practical next step instead of assuming a rewrite is necessary." },
      { question: "Will my SaaS platform be secure and scalable?", answer: "Security and scale require product-specific decisions around data, access, infrastructure and monitoring. We consider those needs during architecture and implementation, but no platform is automatically risk-free or infinitely scalable. The right safeguards and capacity plan depend on your product and expected usage." },
    ],
  },
  "digital-marketing": {
    slug: "digital-marketing",
    primaryKeyword: "digital marketing agency",
    title: "Digital Marketing Agency | Nuvin Solutions",
    metaDescription: "Reach qualified leads with SEO, Google Ads and Meta campaigns shaped around your goals. Request a tailored digital marketing plan from Nuvin today.",
    headline: { before: "Digital Marketing That Brings You More", emphasis: "Qualified Leads" },
    intro: "We help businesses improve how they are discovered online and turn more relevant attention into enquiries through search engine optimization, paid campaigns and useful content.",
    problemTitle: "Are Your Marketing Efforts Reaching the Right People?",
    problem: [
      "Marketing can feel busy without making progress. A business may post regularly, spend on ads or publish content, yet still struggle to tell which activity is reaching potential customers. Disconnected campaigns, unclear landing pages and weak measurement make it harder to learn what is working or where the budget should go next.",
      "As a digital marketing agency, Nuvin begins with your offer, audience and current acquisition path. We identify the questions customers are asking, the pages they land on and the actions that matter to your business. From there, SEO, Google Ads, Meta campaigns and content can be planned as a focused system, with measurement that helps guide future decisions instead of promising overnight results.",
    ],
    includedLead: "A campaign works best when its audience, message, landing experience and measurement support one another. We can scope the parts your business needs now and build from there.",
    included: [
      { title: "Search engine optimization", detail: "Technical checks, page structure and search intent help make your website easier for search engines and customers to understand." },
      { title: "Content marketing", detail: "Useful content can answer customer questions, explain your offer and support discovery across search and other channels." },
      { title: "Google Ads management", detail: "We can plan search campaigns around relevant intent, focused ad groups and landing pages that make the next action clear." },
      { title: "Meta advertising", detail: "Facebook and Instagram campaigns can be structured around audience, creative and objectives that fit your offer and funnel." },
      { title: "Landing page alignment", detail: "Campaign visitors need a page that continues the promise in the ad and gives them a straightforward route to enquire or purchase." },
      { title: "Analytics and reporting", detail: "We configure agreed events and regular reporting so decisions can consider enquiries, cost and quality—not clicks alone." },
    ],
    processLead: "Marketing improvements require testing and learning. Setup timing is an estimate; ongoing optimization depends on campaign activity and the data available.",
    process: [
      { title: "Audit and goals", timeframe: "3–5 business days", detail: "We review your website, current channels, audience and existing measurement to understand the starting point." },
      { title: "Strategy and priorities", timeframe: "About 1 week", detail: "We define channel roles, campaign goals, audience focus and what should be measured first." },
      { title: "Setup and launch", timeframe: "1–2 weeks", detail: "We prepare account structure, ads or content, landing page requirements and tracking before launch." },
      { title: "Learn and optimize", timeframe: "Ongoing", detail: "We review the available data, identify useful adjustments and discuss the next experiments with you." },
    ],
    toolsLead: "We use reporting and campaign tools that suit the channels and measurement needs agreed for your project, including:",
    tools: ["Google Analytics", "Search Console", "Google Ads", "Meta Ads Manager", "Semrush", "Looker Studio", "Tag Manager"],
    packageLead: "Choose a starting point based on your channel and growth needs. We quote after reviewing your goals, existing assets, media budget and the work required.",
    packages: [
      { name: "Starter", description: "Build a clear baseline for search visibility or one focused paid channel.", includes: ["Initial channel review", "Focused campaign or SEO plan", "Measurement foundations"] },
      { name: "Growth", description: "Coordinate multiple acquisition activities around one business objective.", includes: ["SEO and paid channel mix", "Landing page recommendations", "Ongoing performance reviews"] },
      { name: "Custom", description: "Plan a broader marketing system for complex audiences, offers or markets.", includes: ["Multi-channel roadmap", "Advanced measurement", "Custom reporting cadence"] },
    ],
    projectSlugs: ["as-digital"],
    workLead: "AS Digital is a real digital-services and training website project. We share it as related digital work and do not imply campaign metrics that have not been provided.",
    reasons: [
      { title: "Channels connected to the website", detail: "We consider the landing experience alongside SEO and campaigns, so the message customers click through to can support the ad or search result." },
      { title: "Attention to lead quality", detail: "Reporting can distinguish useful enquiry actions from surface-level activity, giving the business better context for marketing decisions." },
      { title: "Realistic expectations", detail: "Search and paid marketing both involve variables outside a single agency’s control. We focus on clear work, measurement and informed iteration." },
      { title: "A plan shaped to your stage", detail: "We prioritize the channel and work that fit your current audience, offer and resources instead of insisting every business needs every service." },
    ],
    faq: [
      { question: "How much does digital marketing cost in Pakistan?", answer: "Digital marketing cost in Pakistan depends on the channels, campaign complexity, content needs and reporting scope. Advertising spend is separate from management work. We review your goals and available budget, then outline a suitable plan and the expected responsibilities before starting." },
      { question: "How long does SEO take to show results?", answer: "SEO is a longer-term activity, and the time to see movement depends on competition, website condition, content quality and search demand. We focus first on technical and content foundations, then monitor progress over time. No responsible agency can guarantee a specific ranking or date." },
      { question: "Do you manage Google Ads and Meta Ads?", answer: "Yes. We can plan and manage Google Ads and Meta advertising based on your audience, offer and campaign goal. Scope may include account structure, creative direction, landing page recommendations and reporting. Your media spend remains separate from the service quote." },
      { question: "Can you help generate qualified leads?", answer: "We can improve the path from discovery to enquiry by aligning audience, message, campaign and landing page. Lead quality also depends on your offer, market, follow-up and sales process. We agree on useful measurement so campaign decisions can account for more than lead volume." },
      { question: "Should I start with SEO or paid advertising?", answer: "The right starting point depends on how quickly you need to learn, how customers search and whether your website is ready to convert visitors. Paid campaigns can test demand sooner, while SEO develops organic visibility over time. We can review both options against your goals." },
      { question: "Do I need a new website before marketing?", answer: "Not always. We first review whether your existing website clearly explains the offer, works well on mobile and makes enquiry simple. If the site creates friction, improvements may be worthwhile before or alongside campaigns. The recommendation depends on what the current experience reveals." },
    ],
  },
  "social-media-management": {
    slug: "social-media-management",
    primaryKeyword: "social media management services",
    title: "Social Media Management Services | Nuvin Solutions",
    metaDescription: "Build a consistent brand presence with social media strategy, content and community management. Request a tailored social media quote from Nuvin.",
    headline: { before: "Social Media Management That Keeps Your Brand", emphasis: "Consistent" },
    intro: "We help startups, small businesses and growing brands plan useful content, publish consistently and manage conversations across the social platforms their audiences use.",
    problemTitle: "Is Your Social Presence Hard to Keep Consistent?",
    problem: [
      "Social media can become a cycle of last-minute posts, inconsistent visuals and unanswered messages. When content is planned without a clear audience or purpose, keeping up takes time but may not help customers understand the brand. It also becomes difficult to tell which topics and formats deserve more attention.",
      "Our social media management services give your brand a practical rhythm. We learn your voice, audience and business priorities, then plan content, prepare on-brand creative, schedule publishing and support community management within the agreed scope. Regular reporting gives us a basis to refine the plan, while keeping your team informed and involved in important decisions.",
    ],
    includedLead: "A reliable social presence is built through repeatable planning and consistent execution. We shape the service around your platforms, approval process and the time your team can contribute.",
    included: [
      { title: "Social media strategy", detail: "We align channel choices, content themes and publishing priorities with your audience and business goals." },
      { title: "Content calendar", detail: "A planned calendar gives your team visibility into upcoming posts, campaign moments and the materials needed for approval." },
      { title: "Post design and copy", detail: "We prepare platform-appropriate visuals and captions that follow your brand direction and make each post’s purpose clear." },
      { title: "Scheduling and publishing", detail: "Agreed content can be scheduled across selected channels, helping maintain a consistent cadence without last-minute posting." },
      { title: "Community management", detail: "We can help monitor and respond to comments or messages within an agreed workflow, escalating sensitive or sales-specific questions to your team." },
      { title: "Monthly reporting", detail: "Regular summaries show what was published and how audiences responded, helping inform the next month’s content decisions." },
    ],
    processLead: "We agree on a practical setup timeline and publishing rhythm with your team. Timing varies with access, brand materials and approval turnaround.",
    process: [
      { title: "Discovery and access", timeframe: "2–3 business days", detail: "We learn your audience, brand voice, current channels and the approval process your team prefers." },
      { title: "Content direction", timeframe: "About 1 week", detail: "We define content themes, platform priorities and a first calendar for review before production." },
      { title: "Create and approve", timeframe: "1–2 weeks", detail: "We prepare initial creative and captions, collect feedback and finalize the first publishing batch." },
      { title: "Publish and learn", timeframe: "Monthly cycle", detail: "We schedule agreed posts, monitor engagement within scope and review performance to shape future content." },
    ],
    toolsLead: "We work with the platforms and planning tools that fit your workflow. Depending on the engagement, these may include:",
    tools: ["Instagram", "Facebook", "LinkedIn", "Meta Business Suite", "Canva", "Buffer", "Later"],
    packageLead: "Monthly scope depends on platforms, publishing frequency, creative volume and community support. We confirm what is included in a tailored quote before any ongoing work begins.",
    packages: [
      { name: "Starter", description: "Create a dependable baseline on one priority social platform.", includes: ["Content direction", "Monthly calendar", "Core post design"] },
      { name: "Growth", description: "Maintain a broader, coordinated presence across selected channels.", includes: ["Multi-platform planning", "Regular creative production", "Community and performance review"] },
      { name: "Custom", description: "Support a more involved social operation with specific campaign needs.", includes: ["Custom platform mix", "Campaign content planning", "Agreed response workflow"] },
    ],
    projectSlugs: ["as-digital", "char-and-ember"],
    workLead: "These real projects show digital experiences for different kinds of brands. They are shared as brand context, not as social campaign case studies or claims of unprovided social metrics.",
    reasons: [
      { title: "Content with a purpose", detail: "Each content theme should help inform, reassure or prompt a useful next step instead of filling a calendar for its own sake." },
      { title: "A voice that stays recognizable", detail: "We work from your brand direction and audience so posts feel consistent even when topics, formats and platforms change." },
      { title: "Approval built into the workflow", detail: "Shared planning and review points help your team see what is coming and provide feedback before content is published." },
      { title: "Reporting that guides the next month", detail: "We look at platform signals in context and use them to discuss what to continue, adjust or test in the next content cycle." },
    ],
    faq: [
      { question: "How much do social media management services cost?", answer: "Social media management services are priced according to the number of platforms, posts, creative requirements, community support and reporting cadence. We learn how much help your team needs, then prepare a monthly or project-based scope with clear deliverables and responsibilities." },
      { question: "Which social media platforms should my business use?", answer: "The right platforms depend on where your customers spend time, how they evaluate your offer and what content your business can sustain. We can review your audience and current channels before recommending a focused platform mix instead of asking you to be everywhere." },
      { question: "How many posts will you publish each month?", answer: "Publishing frequency is agreed as part of the scope and should match your goals, audience and available content. We plan a calendar in advance so you can review topics and timing. The quote will make the expected post volume and formats clear." },
      { question: "Do you create social media content and designs?", answer: "Yes. Depending on the selected scope, we can plan content themes, write captions and prepare branded post designs for agreed platforms. We will need your brand assets, product details and approvals so content remains accurate and reflects your business." },
      { question: "Can you reply to comments and direct messages?", answer: "Community management can be included when we agree on response hours, topics and escalation rules. Product questions, complaints or private account matters may need your team’s input. We define those boundaries before replying on your behalf." },
      { question: "How do you measure social media performance?", answer: "We report on relevant platform signals such as reach, engagement and content response, based on available account data. These metrics are reviewed in context rather than treated as guaranteed business results. We use the findings to refine topics, formats and publishing priorities." },
    ],
  },
};

export function getServicePage(slug: string): ServicePageContent | undefined {
  return Object.values(servicePages).find((service) => service.slug === slug);
}
