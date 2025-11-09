import { IndustryTemplate } from "@/components/industry-template"
import { Factory, Cog, Globe, TrendingUp } from "lucide-react"

export default function ManufacturingPage() {
  return (
    <IndustryTemplate
      industry="Manufacturing"
      icon={Factory}
      tagline="Industrial Marketing for"
      description="Specialized expertise in industrial B2B marketing, from discrete manufacturing to process industries. I understand the unique challenges of long sales cycles, technical buying committees, and global supply chain dynamics that define manufacturing marketing."
      experienceTitle="Manufacturing Marketing Experience"
      experienceDescription="Supporting manufacturers with demand generation, channel partner strategies, and digital transformation initiatives that drive measurable pipeline growth."
      experienceCards={[
        {
          icon: Cog,
          title: "Technical Buying",
          description: "Engaging engineers, procurement, and operations in complex technical sales",
          color: "primary",
        },
        {
          icon: Globe,
          title: "Global Reach",
          description: "Multi-region campaigns supporting international manufacturing operations",
          color: "secondary",
        },
        {
          icon: TrendingUp,
          title: "Industry 4.0",
          description: "Marketing IoT, automation, and digital manufacturing solutions",
          color: "accent",
        },
      ]}
      challenges={[
        {
          title: "Technical Complexity",
          description: "Communicating sophisticated product specifications and engineering details effectively",
        },
        {
          title: "Long Sales Cycles",
          description: "Nurturing 18-24 month buying processes with extensive evaluation periods",
        },
        {
          title: "Channel Conflicts",
          description: "Balancing direct sales with distributor and partner channel strategies",
        },
        {
          title: "Legacy Mindsets",
          description: "Driving digital adoption in traditionally relationship-driven industries",
          color: "secondary",
        },
        {
          title: "Global Complexity",
          description: "Managing multi-region campaigns across diverse manufacturing markets",
          color: "secondary",
        },
        {
          title: "ROI Pressure",
          description: "Demonstrating clear cost savings and efficiency gains to justify investments",
          color: "secondary",
        },
      ]}
      services={[
        {
          title: "Technical Content",
          description: "White papers, case studies, and documentation that speak to engineers",
        },
        {
          title: "Channel Marketing",
          description: "Partner enablement and co-marketing programs with distributors",
        },
        {
          title: "Trade Show Strategy",
          description: "Maximize ROI from major industry events and exhibitions",
        },
        {
          title: "Digital Transformation",
          description: "Modernize marketing approaches while respecting industry relationships",
        },
        {
          title: "ABM for Manufacturing",
          description: "Target key accounts and OEMs with personalized campaigns",
        },
        {
          title: "Product Launch",
          description: "Go-to-market strategies for new industrial products and solutions",
        },
      ]}
    />
  )
}
