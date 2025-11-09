import { IndustryTemplate } from "@/components/industry-template"
import { Package, Rocket, Users, TrendingUp } from "lucide-react"

export default function SaaSPage() {
  return (
    <IndustryTemplate
      industry="SaaS"
      icon={Package}
      tagline="Scaling Growth for"
      description="Deep expertise in B2B SaaS go-to-market strategies, from product-market fit through hypergrowth. I understand the unique challenges of selling software subscriptions and building predictable revenue engines."
      experienceTitle="SaaS Marketing Experience"
      experienceDescription="Having worked with industry leaders like Salesforce, Red Hat, and numerous high-growth startups, I bring battle-tested strategies for every stage of the SaaS growth journey."
      experienceCards={[
        {
          icon: Rocket,
          title: "Product-Market Fit",
          description: "Helping early-stage SaaS companies find their ideal customer profile and refine positioning",
          color: "primary",
        },
        {
          icon: TrendingUp,
          title: "Growth Stage",
          description: "Scaling demand generation and building repeatable revenue engines for hypergrowth",
          color: "secondary",
        },
        {
          icon: Users,
          title: "Enterprise SaaS",
          description: "Complex, multi-stakeholder sales processes with Fortune 500 customers",
          color: "accent",
        },
      ]}
      challenges={[
        {
          title: "Product-Market Fit",
          description: "Finding the right audience and messaging that resonates before scaling spend",
        },
        {
          title: "Reducing Churn",
          description: "Building customer success programs and engagement strategies to improve retention",
        },
        {
          title: "Competitive Differentiation",
          description: "Standing out in crowded markets with clear, compelling value propositions",
        },
        {
          title: "Scaling Efficiently",
          description: "Growing revenue while maintaining healthy unit economics and CAC/LTV ratios",
          color: "secondary",
        },
        {
          title: "Enterprise Expansion",
          description: "Moving upmarket with account-based strategies and longer sales cycles",
          color: "secondary",
        },
        {
          title: "Multi-Product Strategy",
          description: "Cross-sell and upsell strategies as product portfolios expand",
          color: "secondary",
        },
      ]}
      services={[
        {
          title: "PLG Strategy",
          description: "Product-led growth strategies that turn users into paying customers",
        },
        {
          title: "Demand Generation",
          description: "Integrated campaigns that drive qualified pipeline at scale",
        },
        {
          title: "Account-Based Marketing",
          description: "Targeted approaches for enterprise accounts with multiple stakeholders",
        },
        {
          title: "Marketing Operations",
          description: "Build the tech stack and processes needed to scale efficiently",
        },
        {
          title: "Customer Marketing",
          description: "Retention, expansion, and advocacy programs to maximize LTV",
        },
        {
          title: "RevOps Alignment",
          description: "Align marketing, sales, and customer success for revenue growth",
        },
      ]}
    />
  )
}
