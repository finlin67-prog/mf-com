import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react"
import Link from "next/link"

interface Challenge {
  title: string
  description: string
  color?: "primary" | "secondary"
}

interface Service {
  title: string
  description: string
}

interface IndustryTemplateProps {
  industry: string
  icon: LucideIcon
  tagline: string
  description: string
  experienceTitle: string
  experienceDescription: string
  experienceCards: Array<{
    icon: LucideIcon
    title: string
    description: string
    color: "primary" | "secondary" | "accent"
  }>
  challenges: Challenge[]
  services: Service[]
}

export function IndustryTemplate({
  industry,
  icon: Icon,
  tagline,
  description,
  experienceTitle,
  experienceDescription,
  experienceCards,
  challenges,
  services,
}: IndustryTemplateProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">{industry}</div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
            {tagline} <span className="text-primary">{industry}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">{description}</p>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{experienceTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">{experienceDescription}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {experienceCards.map((card, i) => (
              <Card key={i} className={`border-2 hover:border-${card.color} transition-colors`}>
                <CardContent className="pt-6">
                  <div className={`rounded-full bg-${card.color}/10 w-12 h-12 flex items-center justify-center mb-4`}>
                    <card.icon className={`h-6 w-6 text-${card.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Industry Challenges I Solve</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {industry} marketing requires specialized knowledge and careful navigation of unique constraints
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {challenges.map((challenge, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2
                className={`h-6 w-6 ${challenge.color === "secondary" ? "text-secondary" : "text-primary"} flex-shrink-0 mt-0.5`}
              />
              <div>
                <h3 className="font-semibold text-foreground mb-1">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How I Can Help</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Specialized services tailored to {industry.toLowerCase()} organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <Card key={i} className="border-2">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Discuss Your {industry} Marketing</h2>
          <p className="text-lg mb-8 text-background/80 max-w-2xl mx-auto">
            Schedule a consultation to explore how my experience can accelerate your growth
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
