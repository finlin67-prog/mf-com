import { IndustryTemplate } from "@/components/industry-template"
import { Truck, Package, Globe } from "lucide-react"

export default function LogisticsPage() {
  return (
    <IndustryTemplate
      industry="Logistics"
      icon={Truck}
      tagline="Supply Chain Marketing for"
      description="Deep understanding of logistics, supply chain, and transportation technology marketing. From warehouse management to freight forwarding, I help logistics tech providers communicate value to operations-focused buyers."
      experienceTitle="Logistics & Supply Chain Expertise"
      experienceDescription="Marketing strategies that resonate with supply chain professionals, demonstrating operational efficiency, cost savings, and supply chain visibility."
      experienceCards={[
        {
          icon: Truck,
          title: "Transportation Tech",
          description: "TMS, freight, and fleet management solution marketing",
          color: "primary",
        },
        {
          icon: Package,
          title: "Warehouse & Fulfillment",
          description: "WMS, automation, and 3PL technology positioning",
          color: "secondary",
        },
        {
          icon: Globe,
          title: "Global Supply Chain",
          description: "International logistics and cross-border solution strategies",
          color: "accent",
        },
      ]}
      challenges={[
        {
          title: "Operational Focus",
          description: "Marketing to buyers prioritizing uptime, reliability, and operational efficiency",
        },
        {
          title: "Complex Integrations",
          description: "Demonstrating seamless connectivity with ERP, WMS, and supply chain systems",
        },
        {
          title: "ROI Justification",
          description: "Proving cost savings and efficiency gains in competitive procurement",
        },
        {
          title: "Industry Fragmentation",
          description: "Reaching diverse segments from 3PLs to carriers to warehouse operators",
          color: "secondary",
        },
        {
          title: "Risk Management",
          description: "Addressing concerns about supply chain disruption and system reliability",
          color: "secondary",
        },
        {
          title: "Legacy Systems",
          description: "Overcoming resistance to change in established logistics operations",
          color: "secondary",
        },
      ]}
      services={[
        {
          title: "Operations-Focused Content",
          description: "Case studies and ROI calculators that speak to supply chain leaders",
        },
        {
          title: "Industry Events",
          description: "MODEX, ProMat, and supply chain conference strategies",
        },
        {
          title: "Vertical Marketing",
          description: "Targeted campaigns by logistics segment (3PL, carrier, warehouse)",
        },
        {
          title: "Partner Ecosystem",
          description: "Co-marketing with technology and integration partners",
        },
        {
          title: "Demand Generation",
          description: "Pipeline programs targeting logistics decision-makers",
        },
        {
          title: "Thought Leadership",
          description: "Content addressing supply chain trends and disruption",
        },
      ]}
    />
  )
}
