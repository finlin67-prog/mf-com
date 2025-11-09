// /lib/industries.ts

export type IndustryDetail = {
  slug: string
  title: string
  subhead: string
  intro: string[] // 2 short narrative paragraphs
  problems: string[] // bullets: what we see in the wild
  plays: { title: string; blurb: string }[] // 3–5 cards
  outcomes: string[] // metric chips
  relatedExpertise: { label: string; href: string }[]
  relatedProjects: { label: string; href: string }[]
}

export const INDUSTRY_ITEMS: IndustryDetail[] = [
  // ────────────────────────────────────────────────────────────────────────────
  // FINANCIAL SERVICES  (route: /industries/financial-services)
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: "financial-services",
    title: "Financial Services",
    subhead: "Trust, compliance, and precision GTM for complex buying committees.",
    intro: [
      "In Financial Services, every motion must balance speed with scrutiny. I design GTM systems that respect compliance while accelerating revenue—so marketing, sales, and product move confidently together.",
      "From enterprise ABM to lifecycle programs and data governance, the goal is consistent pipeline quality and clear attribution across long, multi-stakeholder cycles.",
    ],
    problems: [
      "Long cycles with fragmented stakeholder maps",
      "Compliance constraints slow content and cadence",
      "Siloed data across CRM/MAP/BI → low confidence",
      "One-off campaigns vs. durable systems",
    ],
    plays: [
      {
        title: "Tiered ABM Programs",
        blurb: "ICP tiers, exec engagement, and orchestration that respects buying committees.",
      },
      { title: "Signal-Led Nurture", blurb: "Intent + product telemetry to time outreach and content." },
      { title: "Governed Analytics", blurb: "Attribution models aligned with BI to inform decisions, not debates." },
      { title: "Sales Enablement Kits", blurb: "Reg-safe content kits that speed consensus and action." },
    ],
    outcomes: ["+87% pipeline (PRGX)", "2.3× faster velocity", "MQL→SQL +180%", "Reporting latency 4d → 2h"],
    relatedExpertise: [
      { label: "ABM", href: "/expertise/account-based-marketing" },
      { label: "Lifecycle Marketing", href: "/expertise/lifecycle-marketing" },
      { label: "Marketing Operations", href: "/expertise/marketing-operations" },
    ],
    relatedProjects: [
      { label: "ABM System Launch — PRGX", href: "/projects/abm-system-launch" },
      { label: "Revenue Analytics — Salesforce", href: "/projects/rev-analytics" },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // SAAS SOFTWARE
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: "saas",
    title: "SaaS Software",
    subhead: "Velocity, experiments, and full-funnel orchestration for product-led and sales-led motions.",
    intro: [
      "SaaS growth rewards teams that move quickly and measure rigorously. I build systems where demand, product, and sales reinforce each other—so wins scale, not just spikes.",
      "From search + paid meshes to lifecycle automation and pricing signals, each lever is tested for incremental lift and tied to revenue velocity.",
    ],
    problems: [
      "Channel fragmentation and inconsistent hand-offs",
      "Vanity metrics vs. pipeline accountability",
      "Underused automation and messy data",
      "Unclear split between PLG and SLG motions",
    ],
    plays: [
      { title: "Demand Engine", blurb: "Search + paid + content working as one, paced to sales capacity." },
      { title: "Lifecycle Ops", blurb: "Scoring, routing, and nurture tied to product usage and intent." },
      { title: "Experiment Framework", blurb: "Rapid tests with QA and guardrails; compounding insight." },
      { title: "Pricing Signals", blurb: "Monetization insights feeding GTM and roadmap decisions." },
    ],
    outcomes: ["+150% lead volume", "3.2× campaign ROI", "Activation rate ↑", "CAC payback ↓"],
    relatedExpertise: [
      { label: "Demand Generation", href: "/expertise/demand-generation" },
      { label: "Growth Marketing", href: "/expertise/growth-marketing" },
      { label: "Marketing Automation", href: "/expertise/marketing-automation" },
    ],
    relatedProjects: [
      { label: "Partner Co-Sell — AMCS", href: "/projects/partner-cosell" },
      { label: "Enterprise ABM — Red Hat", href: "/projects/redhat-abm" },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // HEALTHCARE
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: "healthcare",
    title: "Healthcare",
    subhead: "Evidence-led storytelling and governed data in a regulated environment.",
    intro: [
      "Healthcare requires precision and proof. I design compliant GTM systems that turn clinical value into clear commercial stories—without sacrificing speed or accuracy.",
      "Signals, permissions, and audience segmentation are baked into orchestration so programs scale responsibly.",
    ],
    problems: [
      "Regulatory review slows content cycles",
      "Complex stakeholder mix (clinical, IT, finance)",
      "Data silos → limited personalization",
      "Under-instrumented field programs",
    ],
    plays: [
      { title: "Governed Content Ops", blurb: "Clear pathways for compliant, fast content approvals." },
      { title: "Persona-Based Journeys", blurb: "Clinical and economic value told to each buyer type." },
      { title: "Field + Digital Mesh", blurb: "Event capture, routing SLAs, and post-event cadences." },
    ],
    outcomes: ["Onboarding time ↓", "NRR ↑", "Sales follow-up ↑", "Attribution clarity ↑"],
    relatedExpertise: [
      { label: "Customer Experience (CX)", href: "/expertise/customer-experience" },
      { label: "Email Marketing", href: "/expertise/email-marketing" },
      { label: "Marketing Operations", href: "/expertise/marketing-operations" },
    ],
    relatedProjects: [
      { label: "Revenue Analytics — Salesforce", href: "/projects/rev-analytics" },
      { label: "ABM System — PRGX", href: "/projects/abm-system-launch" },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // MANUFACTURING
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: "manufacturing",
    title: "Manufacturing",
    subhead: "Account-centric GTM for long cycles, complex SKUs, and field-driven demand.",
    intro: [
      "Industrial buying is multi-stage and multi-stakeholder. I build ABM-first systems, connecting digital programs with field and channel motions so momentum isn't lost between touches.",
      "Content focuses on problem-solution clarity and ROI stories tied to operations and finance—not just features.",
    ],
    problems: [
      "Distributor/channel noise and attribution gaps",
      "Fragmented data across regions and product lines",
      "Events without measurable follow-through",
      "Technical content that doesn't convert",
    ],
    plays: [
      { title: "ABM + Channel Alignment", blurb: "Plays and enablement that travel through partners." },
      { title: "Event Ops", blurb: "Pre/during/post frameworks with routing and SLAs." },
      { title: "Content Kits", blurb: "Modular assets localized by region and role." },
    ],
    outcomes: ["Event→pipeline lift ↑", "Lead capture accuracy ↑", "CPL ↓", "Sales cycle time ↓"],
    relatedExpertise: [
      { label: "ABM", href: "/expertise/account-based-marketing" },
      { label: "Event Marketing", href: "/expertise/event-marketing" },
      { label: "Content Marketing", href: "/expertise/content-marketing" },
    ],
    relatedProjects: [
      { label: "Event-to-Store Lift — Retail", href: "/projects/retail-lift" },
      { label: "Partner Co-Sell — AMCS", href: "/projects/partner-cosell" },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // RETAIL
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: "retail",
    title: "Retail",
    subhead: "Omnichannel programs that connect brand moments to store and e-commerce outcomes.",
    intro: [
      "Retail GTM works when digital and physical reinforce each other. I design programs where events, offers, and content are coordinated—so intent turns into visits and baskets.",
      "Attribution is grounded in incremental lift, not just scans—so teams scale what actually moves revenue.",
    ],
    problems: [
      "Events with unclear ROI",
      "Disconnected digital and field motions",
      "Sparse post-event follow-up",
      "Promotions that don't build long-term value",
    ],
    plays: [
      { title: "Event→Pipeline System", blurb: "Pre/during/post cadence with onsite capture and routing." },
      { title: "Offer Orchestration", blurb: "Segmented offers that align to lifecycle and margin." },
      { title: "Store Enablement", blurb: "Field playbooks that sync with digital signals." },
    ],
    outcomes: ["Event→pipeline lift ↑ 30–35%", "Cross-channel conversion ↑", "CPL efficiency ↑", "Follow-up rate ↑"],
    relatedExpertise: [
      { label: "Omnichannel Marketing", href: "/expertise/omnichannel-marketing" },
      { label: "Email Marketing", href: "/expertise/email-marketing" },
      { label: "Event Marketing", href: "/expertise/event-marketing" },
    ],
    relatedProjects: [{ label: "Event-to-Store Lift — Retail", href: "/projects/retail-lift" }],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // LOGISTICS / FLEET / SUPPLY CHAIN
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: "logistics",
    title: "Logistics & Fleet",
    subhead: "Regionally tuned GTM with account clustering and partner alignment.",
    intro: [
      "Logistics decisions are local even when brands are global. I build regionally tuned playbooks with account clustering, partner alignment, and attribution that cuts through channel noise.",
      "Campaigns are paced to capacity and route to the right teams fast—so opportunities don't decay while they're still warm.",
    ],
    problems: [
      "Mixed motions across regions and partners",
      "Weak attribution in co-sell/co-market motions",
      "Slow or inconsistent routing → leakage",
      "Generic messaging across segments",
    ],
    plays: [
      { title: "Regional Playbooks", blurb: "Segment- and geo-specific cadences, content, and offers." },
      { title: "Partner Alignment", blurb: "Clear SLAs and attribution frameworks for co-sell." },
      { title: "Signal-Led Routing", blurb: "Faster hand-offs with ownership clarity." },
    ],
    outcomes: ["$1.1M pipeline in 90 days", "Attribution clarity ↑", "Lead leakage ↓", "Regional conversion ↑"],
    relatedExpertise: [
      { label: "Demand Generation", href: "/expertise/demand-generation" },
      { label: "Omnichannel Marketing", href: "/expertise/omnichannel-marketing" },
      { label: "Marketing Operations", href: "/expertise/marketing-operations" },
    ],
    relatedProjects: [
      { label: "Partner Co-Sell — AMCS", href: "/projects/partner-cosell" },
      { label: "Regional Playbooks — Logistics", href: "/projects/regional-playbooks" },
    ],
  },
]
