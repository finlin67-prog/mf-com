import { IndustryTemplate } from "@/components/industry-template"
import { Heart, Shield, Users, TrendingUp } from "lucide-react"

export default function HealthcarePage() {
  return (
    <IndustryTemplate
      industry="Healthcare"
      icon={Heart}
      tagline="Marketing Excellence for"
      description="Deep expertise in healthcare and life sciences marketing, navigating HIPAA compliance, long sales cycles, and complex stakeholder ecosystems. From medical devices to health IT, I understand the unique challenges of marketing in regulated healthcare environments."
      experienceTitle="Healthcare Marketing Experience"
      experienceDescription="Supporting healthcare technology companies and medical device manufacturers with compliant, effective marketing strategies that build trust with clinicians, administrators, and patients."
      experienceCards={[
        {
          icon: Shield,
          title: "HIPAA Compliance",
          description: "Marketing programs that meet strict healthcare privacy and security requirements",
          color: "primary",
        },
        {
          icon: Users,
          title: "Multi-Stakeholder",
          description: "Engaging clinicians, administrators, and procurement across complex buying committees",
          color: "secondary",
        },
        {
          icon: TrendingUp,
          title: "Health IT Growth",
          description: "Scaling SaaS and technology solutions for hospitals, clinics, and health systems",
          color: "accent",
        },
      ]}
      challenges={[
        {
          title: "Regulatory Compliance",
          description:
            "Navigating HIPAA, FDA, and other healthcare regulations while maintaining marketing effectiveness",
        },
        {
          title: "Clinical Validation",
          description: "Building credibility through clinical evidence, peer reviews, and outcome data",
        },
        {
          title: "Long Sales Cycles",
          description: "Managing 12-18 month buying processes with multiple stakeholder approvals",
        },
        {
          title: "Risk Aversion",
          description: "Overcoming conservative buying behavior in mission-critical healthcare environments",
          color: "secondary",
        },
        {
          title: "Budget Constraints",
          description: "Marketing to resource-constrained health systems and value-based care pressures",
          color: "secondary",
        },
        {
          title: "Integration Complexity",
          description: "Demonstrating interoperability with existing EMR/EHR and legacy systems",
          color: "secondary",
        },
      ]}
      services={[
        {
          title: "Healthcare ABM",
          description: "Account-based strategies targeting specific health systems and IDNs",
        },
        {
          title: "Clinical Content",
          description: "Evidence-based thought leadership that resonates with healthcare professionals",
        },
        {
          title: "Compliance Marketing",
          description: "HIPAA-compliant demand generation and lead nurturing programs",
        },
        {
          title: "Event Marketing",
          description: "Conference and trade show strategies for HIMSS, RSNA, and specialty events",
        },
        {
          title: "Provider Engagement",
          description: "Targeted campaigns reaching physicians, nurses, and clinical decision-makers",
        },
        {
          title: "Value Communication",
          description: "ROI frameworks demonstrating clinical outcomes and cost savings",
        },
      ]}
    />
  )
}
