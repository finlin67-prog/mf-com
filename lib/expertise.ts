// /lib/expertise.ts

export interface ExpertiseDetail {
  slug: string
  title: string
  summary: string
  description: string[]
  focusAreas: string[]
  metrics?: string[]
  relatedIndustries: { label: string; href: string }[]
  relatedProjects: { label: string; href: string }[]
}

export const EXPERTISE_DETAILS: ExpertiseDetail[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // YOUR SIX ENTRIES (normalized to current routes & tone)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "account-based-marketing",
    title: "Account-Based Marketing (ABM)",
    summary: "Build targeted programs that align sales and marketing around high-value accounts.",
    description: [
      "ABM is a shift from broad campaigns to precision targeting. I design programs that synchronize sales and marketing around named accounts, creating personalized experiences that accelerate deal velocity and increase win rates.",
      "My approach combines account selection frameworks, intent data integration, multi-channel orchestration, and sales enablement to deliver measurable pipeline impact.",
      "From tier-based segmentation to executive engagement playbooks, I architect systems that scale personalization while staying authentic.",
    ],
    focusAreas: [
      "Account Selection & Tiering",
      "Multi-Channel Orchestration",
      "Intent & Signal Integration",
      "Sales & Marketing Alignment",
      "Measurement & Attribution",
    ],
    metrics: [
      "+87% pipeline growth",
      "$1.1M new pipeline in 90 days",
      "33% account engagement lift",
      "2.3x faster deal velocity",
    ],
    relatedIndustries: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "SaaS Software", href: "/industries/saas" },
    ],
    relatedProjects: [
      { label: "ABM System Launch — PRGX", href: "/projects/abm-system-launch" },
      { label: "Partner Co-Sell Engine — AMCS", href: "/projects/partner-cosell" },
    ],
  },
  {
    slug: "demand-generation",
    title: "Demand Generation",
    summary: "Create scalable engines that generate qualified pipeline and accelerate revenue growth.",
    description: [
      "Demand gen is the heartbeat of B2B growth. I build integrated programs that attract, engage, and convert target audiences into sales-ready opportunities—combining content, channels, and data to drive predictable pipeline.",
      "My approach spans campaign strategy, nurture, conversion optimization, and performance analytics. I focus on business outcomes, not vanity metrics.",
      "Whether launching new campaigns or optimizing underperforming funnels, I design demand engines that scale with the business and adapt to market dynamics.",
    ],
    focusAreas: [
      "Campaign Strategy & Execution",
      "Lead Nurturing & Scoring",
      "Conversion Rate Optimization",
      "Funnel Design & SLAs",
      "Performance Analytics",
    ],
    metrics: ["+150% lead generation", "42% MQL→SQL improvement", "$2.8M pipeline attributed", "3.2x campaign ROI"],
    relatedIndustries: [
      { label: "SaaS Software", href: "/industries/saas" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
    ],
    relatedProjects: [
      { label: "ABM System Launch — PRGX", href: "/projects/abm-system-launch" },
      { label: "Partner Co-Sell Engine — AMCS", href: "/projects/partner-cosell" },
    ],
  },
  {
    slug: "marketing-operations",
    title: "Marketing Operations",
    summary: "Architect the technology, processes, and analytics that power modern marketing teams.",
    description: [
      "Marketing Ops is where strategy meets execution. I design systems, workflows, and governance frameworks that enable teams to scale efficiently while maintaining data integrity and performance visibility.",
      "From automation setup to lifecycle management and analytics infrastructure, I build foundations that support rapid growth without technical debt.",
      "The focus is clean data architecture, cross-functional alignment, and continuous optimization—so investments deliver measurable ROI.",
    ],
    focusAreas: [
      "Marketing Automation Architecture",
      "Lead Lifecycle Management",
      "Data Hygiene & Governance",
      "CRM Integration & Sync",
      "Reporting & Analytics",
    ],
    metrics: [
      "60% reduction in data errors",
      "4x faster campaign deployment",
      "85% automation coverage",
      "Reporting latency 4d → 2h",
    ],
    relatedIndustries: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Healthcare", href: "/industries/healthcare" },
    ],
    relatedProjects: [
      { label: "Revenue Analytics Dashboard — Salesforce", href: "/projects/rev-analytics" },
      { label: "Partner Co-Sell Engine — AMCS", href: "/projects/partner-cosell" },
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    summary: "Build narrative systems that educate, inspire, and drive measurable outcomes.",
    description: [
      "Content is where strategy meets storytelling. I design programs that position brands as trusted advisors, generate demand, and support the entire buyer journey—from awareness to advocacy.",
      "Editorial planning, SEO, production workflows, and performance measurement combine into a scalable content engine.",
      "From thought leadership to resource hubs, the focus is creating value that resonates and supports revenue goals.",
    ],
    focusAreas: [
      "Content Strategy & Planning",
      "Thought Leadership",
      "SEO & Organic Growth",
      "Multi-Format Production",
      "Content Performance Analytics",
    ],
    metrics: [
      "3x organic traffic growth",
      "45% increase in content-sourced MQLs",
      "120+ pieces published annually",
      "65% engagement rate",
    ],
    relatedIndustries: [
      { label: "SaaS Software", href: "/industries/saas" },
      { label: "Retail", href: "/industries/retail" },
    ],
    relatedProjects: [
      { label: "Enterprise ABM Activation — Red Hat", href: "/projects/redhat-abm" },
      { label: "SEO & Content Velocity — Red Hat", href: "/projects/redhat-seo" },
    ],
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    summary: "Design lifecycle messaging that respects the buyer and moves the funnel.",
    description: [
      "Email remains one of the highest-ROI channels when executed strategically. I build programs that balance automation, personalization, and testing to deliver relevant messages that drive action.",
      "From welcome series to nurture to event promotion, journeys align to goals and customer needs—optimized for opens, clicks, and conversions.",
      "Segmentation, testing, deliverability best practices, and continuous optimization are baked in.",
    ],
    focusAreas: [
      "Email Campaign Strategy",
      "Segmentation & Personalization",
      "Automation & Nurture Tracks",
      "Testing & Optimization",
      "Deliverability & Compliance",
    ],
    metrics: ["52% avg open rate", "12% CTR improvement", "35% email-sourced pipeline", "98% deliverability rate"],
    relatedIndustries: [
      { label: "Retail", href: "/industries/retail" },
      { label: "Healthcare", href: "/industries/healthcare" },
    ],
    relatedProjects: [
      { label: "Event-to-Store Lift — Retail", href: "/projects/retail-lift" },
      { label: "ABM System Launch — PRGX", href: "/projects/abm-system-launch" },
    ],
  },
  {
    slug: "growth-marketing",
    title: "Growth Marketing",
    summary: "Use experimentation and data-driven tactics to accelerate acquisition and revenue.",
    description: [
      "Growth blends creativity, analytics, and rapid experimentation to find scalable channels and tactics that drive measurable results.",
      "I lead structured test programs across acquisition, conversion, retention, and monetization—focused on repeatable growth levers.",
    ],
    focusAreas: [
      "Acquisition Channel Testing",
      "Conversion Rate Optimization",
      "Retention & Engagement",
      "Experimentation Framework",
      "Data Analytics & Insights",
    ],
    metrics: ["2.5x acquisition rate", "40% activation improvement", "28% CAC reduction", "18% LTV increase"],
    relatedIndustries: [
      { label: "SaaS Software", href: "/industries/saas" },
      { label: "Financial Services", href: "/industries/financial-services" },
    ],
    relatedProjects: [
      { label: "ABM System Launch — PRGX", href: "/projects/abm-system-launch" },
      { label: "Revenue Analytics Dashboard — Salesforce", href: "/projects/rev-analytics" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // THE REMAINING TEN SPECIALTIES (pre-filled)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "ai-in-marketing",
    title: "AI in Marketing",
    summary: "Apply AI to accelerate research, personalization, content ops, and analytics.",
    description: [
      "I integrate pragmatic AI into workflows—speeding insight, creation, and decision-making.",
      "Guardrails ensure compliance, brand voice, and measurable productivity gains.",
    ],
    focusAreas: [
      "Insight & Research Assist",
      "Content Drafting & QA",
      "Audience & Journey Personalization",
      "Attribution & Forecast Support",
      "Ops Automation & QA",
    ],
    metrics: ["Content throughput +30–50%", "Time-to-insight ↓"],
    relatedIndustries: [
      { label: "SaaS Software", href: "/industries/saas" },
      { label: "Healthcare", href: "/industries/healthcare" },
    ],
    relatedProjects: [
      { label: "Revenue Analytics Dashboard — Salesforce", href: "/projects/rev-analytics" },
      { label: "ABM System Launch — PRGX", href: "/projects/abm-system-launch" },
    ],
  },
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization (SEO)",
    summary: "Search as a system: audience intent, technical health, and content velocity.",
    description: [
      "I align SEO to ICP intent and pipeline—not just rankings—so organic becomes durable demand.",
      "Technical, on-page, and content ops run as a single prioritized backlog.",
    ],
    focusAreas: [
      "ICP Intent & Topic Map",
      "Technical SEO Health",
      "On-Page Systems",
      "Content Velocity & Refresh",
      "Search Analytics & ROI",
    ],
    metrics: ["+60% organic traffic", "Share-of-voice ↑"],
    relatedIndustries: [
      { label: "SaaS Software", href: "/industries/saas" },
      { label: "Retail", href: "/industries/retail" },
    ],
    relatedProjects: [
      { label: "SEO & Content Velocity — Red Hat", href: "/projects/redhat-seo" },
      { label: "ABM System Launch — PRGX", href: "/projects/abm-system-launch" },
    ],
  },
  {
    slug: "customer-experience",
    title: "Customer Experience (CX)",
    summary: "Design journeys that span acquisition, onboarding, adoption, and expansion.",
    description: [
      "I map journeys across teams and tools to reduce friction and increase value realization.",
      "VOC, telemetry, and enablement loops drive continuous improvement.",
    ],
    focusAreas: [
      "Journey Mapping & VOC",
      "Onboarding & Adoption",
      "Content & Enablement",
      "Health Scoring & Triggers",
      "Expansion Motions",
    ],
    metrics: ["Churn ↓; NRR ↑", "Onboarding time ↓"],
    relatedIndustries: [
      { label: "SaaS Software", href: "/industries/saas" },
      { label: "Healthcare", href: "/industries/healthcare" },
    ],
    relatedProjects: [
      { label: "Enterprise ABM Activation — Red Hat", href: "/projects/redhat-abm" },
      { label: "Revenue Analytics Dashboard — Salesforce", href: "/projects/rev-analytics" },
    ],
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    summary: "Scalable programs, clean data, and compliant orchestration across channels.",
    description: [
      "I implement automation that speeds handoffs, personalizes experiences, and improves data quality.",
      "Design emphasizes reliability, auditability, and measurable lift.",
    ],
    focusAreas: [
      "Journey & Program Design",
      "Lead Scoring & Qualification",
      "Data Hygiene & Enrichment",
      "Routing & SLA Enforcement",
      "Compliance & Audit Trails",
    ],
    metrics: ["Reporting latency 4d → 2h", "MQL→SQL +180%"],
    relatedIndustries: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "SaaS Software", href: "/industries/saas" },
    ],
    relatedProjects: [
      { label: "Revenue Analytics Dashboard — Salesforce", href: "/projects/rev-analytics" },
      { label: "ABM System Launch — PRGX", href: "/projects/abm-system-launch" },
    ],
  },
  {
    slug: "omnichannel-marketing",
    title: "Omnichannel Marketing",
    summary: "Coordinate experiences across paid, owned, field, and product touchpoints.",
    description: [
      "I plan channel mixes that reflect real buyer behavior and regional realities.",
      "Messaging, cadence, and measurement are consistent—so lift compounds.",
    ],
    focusAreas: [
      "Channel Strategy & Cadence",
      "Creative & Offer Alignment",
      "Field + Digital Integration",
      "Geo/Segment Targeting",
      "Attribution & Lift Analysis",
    ],
    metrics: ["Event→pipeline lift ↑", "CPL efficiency ↑"],
    relatedIndustries: [
      { label: "Retail", href: "/industries/retail" },
      { label: "Logistics", href: "/industries/logistics" },
    ],
    relatedProjects: [
      { label: "Event-to-Store Lift — Retail", href: "/projects/retail-lift" },
      { label: "Regional Playbooks — Logistics", href: "/projects/regional-playbooks" },
    ],
  },
  {
    slug: "customer-marketing",
    title: "Customer Marketing",
    summary: "Turn customers into advocates through value realization and outcomes.",
    description: [
      "I build programs that deepen adoption and expansion with segment-specific plays.",
      "Community, references, and content prove value and drive efficient growth.",
    ],
    focusAreas: [
      "Onboarding & Enablement",
      "Advocacy & References",
      "Community Programs",
      "Expansion & Cross-sell",
      "Outcome Storytelling",
    ],
    metrics: ["NRR ↑", "Reference pipeline ↑"],
    relatedIndustries: [
      { label: "SaaS Software", href: "/industries/saas" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
    ],
    relatedProjects: [
      { label: "Partner Co-Sell Engine — AMCS", href: "/projects/partner-cosell" },
      { label: "Revenue Analytics Dashboard — Salesforce", href: "/projects/rev-analytics" },
    ],
  },
  {
    slug: "paid-advertising-sem",
    title: "Paid Advertising (SEM)",
    summary: "Performance programs aligned to ICP intent and revenue, not vanity.",
    description: [
      "I structure budgets and keywords by intent tiers and pipeline impact.",
      "Creative and landing experiences match stage and segment for higher efficiency.",
    ],
    focusAreas: [
      "Intent & Keyword Architecture",
      "Audience & Geo Targeting",
      "Creative/Offer Testing",
      "Landing & CRO Systems",
      "Budget Pacing & ROAS",
    ],
    metrics: ["CPL ↓; SQO rate ↑", "Pipeline per $ ↑"],
    relatedIndustries: [
      { label: "SaaS Software", href: "/industries/saas" },
      { label: "Financial Services", href: "/industries/financial-services" },
    ],
    relatedProjects: [
      { label: "ABM System Launch — PRGX", href: "/projects/abm-system-launch" },
      { label: "Partner Co-Sell Engine — AMCS", href: "/projects/partner-cosell" },
    ],
  },
  {
    slug: "lifecycle-marketing",
    title: "Lifecycle Marketing",
    summary: "Journeys from first touch to renewal—with signals driving the next best action.",
    description: [
      "I map lifecycle states and build triggers that move accounts forward.",
      "Revenue impact is measured across conversion, expansion, and retention.",
    ],
    focusAreas: [
      "State Model & Triggers",
      "Nurture & Enablement",
      "Lead/Account Scoring",
      "Hand-off & SLA Design",
      "Renewal & Expansion Plays",
    ],
    metrics: ["MQL→SQL +180%", "NRR ↑"],
    relatedIndustries: [
      { label: "SaaS Software", href: "/industries/saas" },
      { label: "Financial Services", href: "/industries/financial-services" },
    ],
    relatedProjects: [
      { label: "ABM System Launch — PRGX", href: "/projects/abm-system-launch" },
      { label: "Revenue Analytics Dashboard — Salesforce", href: "/projects/rev-analytics" },
    ],
  },
  {
    slug: "martech-optimization",
    title: "MarTech Optimization",
    summary: "Right-size the stack, tighten the data, and make measurement trustworthy.",
    description: [
      "I assess stack usage, overlap, and data flows—then streamline for clarity and ROI.",
      "Governance and enablement ensure teams adopt the improvements.",
    ],
    focusAreas: [
      "Stack Audit & Rationalization",
      "Data Model & Integrations",
      "Attribution & BI Alignment",
      "Process & Enablement",
      "Compliance & Security",
    ],
    metrics: ["Reporting latency 4d → 2h", "Tool ROI ↑; bloat ↓"],
    relatedIndustries: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Financial Services", href: "/industries/financial-services" },
    ],
    relatedProjects: [
      { label: "Revenue Analytics Dashboard — Salesforce", href: "/projects/rev-analytics" },
      { label: "Partner Co-Sell Engine — AMCS", href: "/projects/partner-cosell" },
    ],
  },
  {
    slug: "event-marketing",
    title: "Event Marketing",
    summary: "Field programs and experiences that integrate with digital and sales.",
    description: [
      "I operationalize event engines—from targeting and invites to onsite capture and post-event conversion.",
      "Attribution connects events to pipeline, not just scans.",
    ],
    focusAreas: [
      "Audience & Account Targeting",
      "Pre / During / Post Cadence",
      "Onsite Capture & Routing",
      "Sales Plays & Enablement",
      "Attribution to Pipeline",
    ],
    metrics: ["Event→pipeline lift ↑", "Sales follow-up rate ↑"],
    relatedIndustries: [
      { label: "Retail", href: "/industries/retail" },
      { label: "SaaS Software", href: "/industries/saas" },
    ],
    relatedProjects: [
      { label: "Event-to-Store Lift — Retail", href: "/projects/retail-lift" },
      { label: "Partner Co-Sell Engine — AMCS", href: "/projects/partner-cosell" },
    ],
  },
]
