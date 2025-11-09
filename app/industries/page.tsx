import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, Stethoscope, Factory, ShoppingCart, Package, TrendingUp } from "lucide-react"
import Link from "next/link"

const industries = [
  {
    name: "Financial Services",
    icon: Building2,
    href: "/industries/financial-services",
    description: "Banking, insurance, and fintech solutions",
    challenges: ["Regulatory compliance", "Digital transformation", "Customer trust"],
    color: "primary",
  },
  {
    name: "Healthcare",
    icon: Stethoscope,
    href: "/industries/healthcare",
    description: "Healthcare technology and medical devices",
    challenges: ["HIPAA compliance", "Patient engagement", "Provider adoption"],
    color: "secondary",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    href: "/industries/manufacturing",
    description: "Industrial and manufacturing technology",
    challenges: ["Digital adoption", "Supply chain complexity", "Legacy systems"],
    color: "accent",
  },
  {
    name: "Retail",
    icon: ShoppingCart,
    href: "/industries/retail",
    description: "Retail technology and e-commerce",
    challenges: ["Omnichannel experience", "Customer retention", "Competition"],
    color: "primary",
  },
  {
    name: "SaaS",
    icon: Package,
    href: "/industries/saas",
    description: "Software as a Service platforms",
    challenges: ["Product-market fit", "Churn reduction", "Scaling growth"],
    color: "secondary",
  },
  {
    name: "Logistics",
    icon: TrendingUp,
    href: "/industries/logistics",
    description: "Supply chain and logistics technology",
    challenges: ["Operational efficiency", "Real-time tracking", "Cost optimization"],
    color: "accent",
  },
]

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Industry Expertise</div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
            Deep <span className="text-primary">Vertical Experience</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            Two decades of specialized marketing expertise across diverse industries, from Wall Street to healthcare,
            manufacturing to SaaS. Understanding your industry's unique challenges and opportunities.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry) => (
            <Link key={industry.name} href={industry.href}>
              <Card className="h-full border-2 hover:border-primary transition-colors cursor-pointer group">
                <CardContent className="pt-6">
                  <div
                    className={`rounded-full bg-${industry.color}/10 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <industry.icon className={`h-8 w-8 text-${industry.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-foreground">Key Challenges:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {industry.challenges.map((challenge, i) => (
                        <li key={i}>• {challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Cross-Industry Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven results across diverse sectors and market conditions
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <p className="text-sm text-muted-foreground">Industries Served</p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Companies Supported</p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">$100M+</div>
                <p className="text-sm text-muted-foreground">Revenue Influenced</p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Industry-Specific Strategies</h2>
          <p className="text-lg mb-8 text-background/80 max-w-2xl mx-auto">
            Let's discuss how my industry expertise can accelerate your growth
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4">
                GTMStack<span className="text-primary">.pro</span>
              </div>
              <p className="text-sm text-muted-foreground">Strategic Go-To-Market consulting for B2B SaaS leaders</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-muted-foreground hover:text-foreground">
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-muted-foreground hover:text-foreground">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Expertise</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/expertise" className="text-muted-foreground hover:text-foreground">
                    Demand Generation
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-muted-foreground hover:text-foreground">
                    Account-Based Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-muted-foreground hover:text-foreground">
                    Marketing Operations
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-muted-foreground hover:text-foreground">
                    Revenue Operations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Book Consultation
                  </Link>
                </li>
                <li>
                  <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 GTMStack.pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
