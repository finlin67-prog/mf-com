import { ProjectDetailTemplate } from "@/components/project-detail-template"

export default function PRGXProjectPage() {
  return (
    <ProjectDetailTemplate
      breadcrumb={{
        category: "Financial Services",
        categoryLink: "/industries/financial-services",
      }}
      title="Global Pipeline Growth Initiative"
      subtitle="Scaled PRGX's marketing engine from 35% to 87% of total pipeline through integrated RevOps transformation."
      meta={{
        company: "PRGX Global",
        industry: "Financial Services",
        industryLink: "/industries/financial-services",
        timeframe: "2024-2025 (12 months)",
      }}
      metrics={[
        { value: "+87%", label: "Global Pipeline Contribution" },
        { value: "$1.1M", label: "Pipeline Generated (90 days)" },
        { value: "60%", label: "Lead Response Time Reduction" },
        { value: "3x", label: "Marketing Attribution Visibility" },
      ]}
      problem="PRGX's marketing function operated with disconnected systems across regions, resulting in data silos, inconsistent lead quality, and limited visibility into marketing's impact on revenue. Sales teams lacked confidence in marketing-generated leads, and leadership had no reliable way to measure marketing ROI or optimize spend."
      approach={[
        "Conducted comprehensive audit of marketing tech stack, data flows, and processes across all regions",
        "Consolidated MarTech stack from 15+ tools to 6 core platforms with proper integrations",
        "Implemented unified lead scoring model aligned with sales qualification criteria",
        "Designed automated lead routing and nurture programs based on account segmentation",
        "Built executive dashboards showing marketing's pipeline contribution and velocity impact",
        "Established weekly revenue marketing reviews with sales leadership to optimize performance",
      ]}
      results={[
        "Increased marketing's contribution to global pipeline from 35% to 87% in 12 months",
        "Generated $1.1M in qualified pipeline within first 90 days of program launch",
        "Reduced lead response time by 60% through automated routing and SLA enforcement",
        "Achieved 90% data quality score across CRM and marketing automation platforms",
        "Improved marketing attribution visibility by 3x with multi-touch reporting",
        "Increased sales acceptance rate of marketing leads from 42% to 78%",
      ]}
      platforms={[
        { name: "Salesforce" },
        { name: "Marketo" },
        { name: "Demandbase" },
        { name: "ZoomInfo" },
        { name: "Tableau" },
        { name: "Google Analytics 4" },
        { name: "Drift" },
        { name: "ON24" },
      ]}
      platformNote="Technology choices optimized for enterprise B2B requirements with complex multi-regional operations and strict data governance."
      gallery={[
        {
          src: "/marketing-pipeline-dashboard-with-metrics.jpg",
          caption: "Executive pipeline dashboard showing marketing contribution",
        },
        {
          src: "/lead-scoring-model-visualization.jpg",
          caption: "Unified lead scoring model across all regions",
        },
        {
          src: "/marketing-automation-workflow-diagram.jpg",
          caption: "Automated nurture programs by account segment",
        },
        {
          src: "/attribution-reporting-interface.jpg",
          caption: "Multi-touch attribution reporting system",
        },
      ]}
      testimonial={{
        quote:
          "Michael transformed our marketing operations from a cost center to a revenue engine. The systems and processes he built gave us unprecedented visibility into what's working and confidence in our marketing investments.",
        name: "John Anderson",
        role: "Chief Revenue Officer, PRGX Global",
      }}
      relatedLinks={{
        expertise: [
          { label: "Marketing Operations", href: "/expertise#marketing-operations" },
          { label: "Demand Generation", href: "/expertise#demand-generation" },
          { label: "MarTech Stack", href: "/expertise#martech" },
          { label: "Revenue Operations", href: "/expertise#revenue-operations" },
        ],
        industries: [
          { label: "Financial Services", href: "/industries/financial-services" },
          { label: "B2B SaaS", href: "/industries/saas" },
        ],
        timeline: { label: "View on Career Timeline", href: "/about#prgx-2024" },
      }}
    />
  )
}
