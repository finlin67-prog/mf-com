import { IndustryTemplate } from "@/components/industry-template"
import { ShoppingCart, Store, Smartphone, TrendingUp } from "lucide-react"

export default function RetailPage() {
  return (
    <IndustryTemplate
      industry="Retail"
      icon={ShoppingCart}
      tagline="Omnichannel Marketing for"
      description="Expertise in retail technology, omnichannel commerce, and consumer engagement platforms. I help retail tech vendors and service providers market solutions that drive store operations, customer experience, and unified commerce."
      experienceTitle="Retail Technology Marketing"
      experienceDescription="Supporting retail technology vendors with demand generation strategies that resonate with retailers, brands, and omnichannel operators navigating digital transformation."
      experienceCards={[
        {
          icon: Store,
          title: "In-Store & Digital",
          description: "Marketing solutions that bridge physical and digital retail experiences",
          color: "primary",
        },
        {
          icon: Smartphone,
          title: "Mobile Commerce",
          description: "Positioning mobile-first and app-based shopping solutions",
          color: "secondary",
        },
        {
          icon: TrendingUp,
          title: "Retail Innovation",
          description: "Communicating value of AI, personalization, and automation in retail",
          color: "accent",
        },
      ]}
      challenges={[
        {
          title: "Omnichannel Complexity",
          description: "Marketing solutions that unify online, mobile, and in-store experiences",
        },
        {
          title: "Rapid Innovation",
          description: "Keeping pace with fast-changing consumer expectations and technology",
        },
        {
          title: "Margin Pressure",
          description: "Demonstrating ROI to cost-conscious retailers with thin margins",
        },
        {
          title: "Seasonal Peaks",
          description: "Aligning marketing with retail calendars and peak shopping periods",
          color: "secondary",
        },
        {
          title: "Integration Challenges",
          description: "Positioning solutions that work with complex legacy retail systems",
          color: "secondary",
        },
        {
          title: "Competitive Intensity",
          description: "Differentiating in crowded retail technology markets",
          color: "secondary",
        },
      ]}
      services={[
        {
          title: "Retail Tech Positioning",
          description: "Differentiate POS, commerce, and retail operations solutions",
        },
        {
          title: "Customer Success Stories",
          description: "Case studies showcasing retail transformation and results",
        },
        {
          title: "Event Marketing",
          description: "NRF, Shop.org, and retail industry event strategies",
        },
        {
          title: "Content for Retailers",
          description: "Thought leadership addressing retail challenges and trends",
        },
        {
          title: "Partner Programs",
          description: "Co-marketing with retail brands and solution partners",
        },
        {
          title: "Demand Generation",
          description: "Pipeline programs targeting retail decision-makers",
        },
      ]}
    />
  )
}
