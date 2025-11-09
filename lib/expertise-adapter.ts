import type { ExpertiseDetail } from "./expertise"
import type { ExpertiseRich } from "@/components/expertise-detail-rich-page"
import { PROJECT_DETAILS } from "./projects"

export function toExpertiseRich(ex: ExpertiseDetail): ExpertiseRich {
  const intro = ex.description.slice(0, 2)

  const highlights =
    ex.metrics && ex.metrics.length > 0
      ? ex.metrics
      : ex.focusAreas.slice(0, 4).map((area) => `Proven expertise in ${area}`)

  const services = clusterFocusAreas(ex.focusAreas)

  const process = [
    { step: "Discovery", tip: "Audit current systems, identify gaps, and map opportunities" },
    { step: "Design", tip: "Architect the strategy, tech stack, and execution roadmap" },
    { step: "Orchestrate", tip: "Implement workflows, campaigns, and integrations" },
    { step: "Measure", tip: "Track KPIs, optimize performance, and report outcomes" },
    { step: "Optimize", tip: "Refine and scale based on data and evolving business goals" },
  ]

  const features = ex.focusAreas.map((area) => ({
    title: area,
    benefit: generateBenefit(area),
  }))

  const caseStudies = ex.relatedProjects.map((proj) => {
    const projectDetail = PROJECT_DETAILS.find((p) => p.slug === extractSlug(proj.href))

    if (projectDetail) {
      return {
        label: proj.label,
        problem: projectDetail.problem,
        approach: projectDetail.approach[0] || "Strategic execution focused on measurable outcomes.",
        results: projectDetail.results.slice(0, 3),
        href: proj.href,
      }
    }

    // Placeholder if project not found
    return {
      label: proj.label,
      problem: `Challenge requiring ${ex.title.toLowerCase()} expertise.`,
      approach: `Applied ${ex.title.toLowerCase()} best practices and proven methodologies.`,
      results: [
        "Measurable improvement in key metrics",
        "Enhanced operational efficiency",
        "Scalable process implementation",
      ],
      href: proj.href,
    }
  })

  return {
    title: ex.title,
    subhead: ex.summary,
    intro,
    highlights,
    services,
    process,
    features,
    caseStudies,
  }
}

// Helper: Cluster focusAreas into 3-4 service items with blurbs
function clusterFocusAreas(focusAreas: string[]): { title: string; blurb: string }[] {
  const itemsPerService = Math.ceil(focusAreas.length / 4)
  const services: { title: string; blurb: string }[] = []

  for (let i = 0; i < focusAreas.length; i += itemsPerService) {
    const cluster = focusAreas.slice(i, i + itemsPerService)
    services.push({
      title: cluster[0],
      blurb: `Comprehensive approach covering ${cluster.join(", ").toLowerCase()} to drive measurable results.`,
    })
  }

  return services.slice(0, 4) // Max 4 services
}

// Helper: Generate benefit statement from focus area
function generateBenefit(area: string): string {
  const benefitMap: Record<string, string> = {
    "Account Selection & Tiering": "Identify and prioritize high-value accounts for maximum ROI",
    "Multi-Channel Orchestration": "Coordinate touchpoints across channels for consistent messaging",
    "Intent & Signal Integration": "Leverage buyer signals to engage at the right moment",
    "Sales & Marketing Alignment": "Unite teams around shared goals and account strategies",
    "Measurement & Attribution": "Track impact with clear ROI and pipeline visibility",
    "Campaign Strategy & Execution": "Design and deploy integrated campaigns that convert",
    "Lead Nurturing & Scoring": "Prioritize and progress prospects through the funnel",
    "Conversion Rate Optimization": "Improve conversion at every stage of the buyer journey",
    "Funnel Design & SLAs": "Create clear handoffs and accountability between teams",
    "Performance Analytics": "Measure what matters and optimize continuously",
    "Marketing Automation Architecture": "Build scalable systems that reduce manual work",
    "Lead Lifecycle Management": "Guide prospects from first touch to closed-won",
    "Data Hygiene & Governance": "Ensure data quality and compliance across systems",
    "CRM Integration & Sync": "Seamlessly connect marketing and sales platforms",
    "Reporting & Analytics": "Deliver actionable insights to stakeholders",
  }

  return benefitMap[area] || `Drive measurable outcomes through strategic ${area.toLowerCase()}`
}

// Helper: Extract slug from href path
function extractSlug(href: string): string {
  const parts = href.split("/")
  return parts[parts.length - 1]
}
