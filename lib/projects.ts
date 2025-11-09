export type ProjectDetail = {
  slug: string
  title: string
  subhead: string
  intro: string[] // 1–2 narrative paragraphs
  problem: string
  approach: string
  results: string[] // bullet outcomes
  outcomes: string[] // metric chips
  relatedExpertise: { label: string; href: string }[]
  relatedIndustries: { label: string; href: string }[]
}

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: "abm-system-launch",
    title: "ABM System Launch — PRGX",
    subhead: "From volume marketing to precision growth across strategic accounts.",
    intro: [
      "PRGX needed pipeline quality and velocity—fast. Broad campaigns were creating noise, not meetings.",
      "We designed a tiered ABM program with orchestrated plays, governed data, and a personalization system that could scale without losing authenticity.",
    ],
    problem:
      "Volume-led programs underperformed at the account level; unclear hand-offs and low confidence in attribution.",
    approach: "Tiered ICP; 1:1/1:Few/1:Many plays; intent signals; SDR alignment; governed analytics tied to BI.",
    results: ["+87% pipeline growth", "2.3× faster deal velocity", "MQL→SQL +180% through lifecycle rebuild"],
    outcomes: ["Pipeline ↑", "Velocity ↑", "Attribution clarity ↑"],
    relatedExpertise: [
      { label: "Account-Based Marketing (ABM)", href: "/expertise/account-based-marketing" },
      { label: "Lifecycle Marketing", href: "/expertise/lifecycle-marketing" },
      { label: "Marketing Operations", href: "/expertise/marketing-operations" },
    ],
    relatedIndustries: [{ label: "Financial Services", href: "/industries/financial-services" }],
  },
  {
    slug: "partner-cosell",
    title: "Partner Co-Sell Engine — AMCS",
    subhead: "Regional playbooks and partner alignment that turned activity into pipeline.",
    intro: [
      "AMCS needed a repeatable partner motion across regions—without losing local nuance.",
      "We built geo-specific playbooks, attribution guardrails, and routing SLAs so opportunities moved quickly and could be measured.",
    ],
    problem: "Fragmented partner programs; weak attribution; uneven follow-up across regions.",
    approach:
      "Regional segmentation; co-sell playbooks; offer libraries; attribution framework; owning SLAs for routing.",
    results: ["$1.1M new pipeline in 90 days", "Lead leakage ↓ through routing clarity", "Partner ROI visibility ↑"],
    outcomes: ["Pipeline ↑", "Lead leakage ↓", "Attribution clarity ↑"],
    relatedExpertise: [
      { label: "Demand Generation", href: "/expertise/demand-generation" },
      { label: "Omnichannel Marketing", href: "/expertise/omnichannel-marketing" },
      { label: "Customer Marketing", href: "/expertise/customer-marketing" },
    ],
    relatedIndustries: [
      { label: "Logistics & Fleet", href: "/industries/logistics" },
      { label: "SaaS Software", href: "/industries/saas" },
    ],
  },
  {
    slug: "rev-analytics",
    title: "Revenue Analytics Dashboard — Salesforce",
    subhead: "One source of truth for pipeline, velocity, and marketing impact.",
    intro: [
      "Leaders needed trusted metrics daily—not weekly. Data lived in silos and reporting lagged behind decisions.",
      "We delivered governed definitions, a streamlined data model, and Tableau dashboards built for action.",
    ],
    problem: "Disparate reporting, delays, and metric debates slowed decision-making.",
    approach: "Governed data model; CRM/MAP alignment; BI semantic layer; SLA monitoring; exec and ops views.",
    results: [
      "Reporting latency 4d → 2h",
      "Shared definitions reduced debate time",
      "Faster GTM iteration based on daily insight",
    ],
    outcomes: ["Latency ↓", "Confidence ↑", "Iteration speed ↑"],
    relatedExpertise: [
      { label: "Marketing Operations", href: "/expertise/marketing-operations" },
      { label: "AI in Marketing", href: "/expertise/ai-in-marketing" },
      { label: "Lifecycle Marketing", href: "/expertise/lifecycle-marketing" },
    ],
    relatedIndustries: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Healthcare", href: "/industries/healthcare" },
    ],
  },
  {
    slug: "redhat-abm",
    title: "Enterprise ABM Activation — Red Hat",
    subhead: "Tiered account plays and enablement for enterprise stakeholders.",
    intro: [
      "Enterprise deals require orchestration, not just outreach. We aligned content, SDR cadence, and exec engagement around target accounts.",
      "The motion emphasized repeatable personalization—handcrafted where it mattered, systematized where it didn't.",
    ],
    problem: "Enterprise motions lacked orchestration and consistent personalization.",
    approach: "Tier frameworks; exec engagement; content kits; SDR alignment; measurement of influence and velocity.",
    results: ["Account engagement ↑ 33%", "Meetings per targeted account ↑", "Influence on late-stage velocity"],
    outcomes: ["Engagement ↑", "Meetings ↑", "Velocity ↑"],
    relatedExpertise: [
      { label: "Account-Based Marketing (ABM)", href: "/expertise/account-based-marketing" },
      { label: "Content Marketing", href: "/expertise/content-marketing" },
    ],
    relatedIndustries: [{ label: "SaaS Software", href: "/industries/saas" }],
  },
  {
    slug: "redhat-seo",
    title: "SEO & Content Velocity — Red Hat",
    subhead: "From ad-hoc articles to a governed content engine that compounds.",
    intro: [
      "Organic growth needed structure: topic maps, refresh cadence, and editorial workflows.",
      "We built a system that tied ICP intent to content formats and prioritized the backlog by business impact.",
    ],
    problem: "Unstructured content and inconsistent SEO undermined durable organic demand.",
    approach: "ICP topic clusters; technical health; editorial governance; performance review loops.",
    results: ["Organic traffic ↑ 60%", "Share-of-voice ↑ on priority topics", "Time-to-publish ↓ with workflows"],
    outcomes: ["Traffic ↑", "SOV ↑", "Velocity ↑"],
    relatedExpertise: [
      { label: "Content Marketing", href: "/expertise/content-marketing" },
      { label: "Search Engine Optimization (SEO)", href: "/expertise/search-engine-optimization" },
    ],
    relatedIndustries: [
      { label: "SaaS Software", href: "/industries/saas" },
      { label: "Retail", href: "/industries/retail" },
    ],
  },
  {
    slug: "retail-lift",
    title: "Event-to-Store Lift — Retail",
    subhead: "Coordinated field + digital program that turned moments into measurable revenue.",
    intro: [
      "Events drove buzz, not bookings. With pre/during/post orchestration and onsite capture, we created a reliable conversion path.",
      "Routing SLAs and enablement made follow-up fast—and measurable.",
    ],
    problem: "Events weren't tied to clear conversion pathways or measurement.",
    approach: "Pre/during/post cadence; onsite capture; routing SLAs; offer alignment; BI-visible attribution.",
    results: ["Event→pipeline lift ↑ 30–35%", "Follow-up rate ↑ 40%", "CPL ↓ 20%"],
    outcomes: ["Lift ↑", "Follow-up ↑", "CPL ↓"],
    relatedExpertise: [
      { label: "Event Marketing", href: "/expertise/event-marketing" },
      { label: "Omnichannel Marketing", href: "/expertise/omnichannel-marketing" },
      { label: "Email Marketing", href: "/expertise/email-marketing" },
    ],
    relatedIndustries: [{ label: "Retail", href: "/industries/retail" }],
  },
  {
    slug: "regional-playbooks",
    title: "Regional Playbooks — Logistics",
    subhead: "Segmented GTM cadences tuned to local realities and partner ecosystems.",
    intro: [
      "Global brand, local decisions. We built region-specific cadences, partner roles, and offers—so programs felt relevant and moved faster.",
      "Attribution and routing clarity gave leaders confidence to scale the plays that worked.",
    ],
    problem: "Generic messaging and slow routing led to decaying opportunities.",
    approach: "Geo/segment segmentation; partner alignment; signal-led routing; shared attribution model.",
    results: ["Regional conversion ↑", "Lead leakage ↓", "Attribution clarity ↑ across co-sell motions"],
    outcomes: ["Conversion ↑", "Leakage ↓", "Clarity ↑"],
    relatedExpertise: [
      { label: "Demand Generation", href: "/expertise/demand-generation" },
      { label: "Marketing Operations", href: "/expertise/marketing-operations" },
    ],
    relatedIndustries: [{ label: "Logistics & Fleet", href: "/industries/logistics" }],
  },
]
