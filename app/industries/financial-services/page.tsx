import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, Shield, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function FinancialServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Financial Services</div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
            Marketing Excellence for <span className="text-primary">Financial Services</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            From Wall Street to fintech startups, I bring deep expertise in navigating complex regulatory environments
            while driving growth in banking, insurance, and financial technology.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Financial Services Experience</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Starting my career at JPMorgan Chase, I developed a deep understanding of enterprise financial services
              marketing, compliance requirements, and the unique challenges of building trust in this highly regulated
              industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Enterprise Banking</h3>
                <p className="text-sm text-muted-foreground">
                  Marketing analytics and campaign strategies for multi-million dollar product launches at JPMorgan
                  Chase
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Compliance & Trust</h3>
                <p className="text-sm text-muted-foreground">
                  Navigating complex regulatory requirements while building customer confidence and brand trust
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="pt-6">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fintech Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Supporting financial technology companies in disrupting traditional banking and insurance models
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Industry Challenges I Solve</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Financial services marketing requires specialized knowledge and careful navigation of unique constraints
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Regulatory Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Ensuring all marketing materials meet strict compliance requirements while remaining compelling and
                  effective
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Building Trust</h3>
                <p className="text-sm text-muted-foreground">
                  Establishing credibility and confidence in an industry where trust is paramount
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Digital Transformation</h3>
                <p className="text-sm text-muted-foreground">
                  Modernizing marketing approaches while respecting traditional customer relationships
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Complex Buying Cycles</h3>
                <p className="text-sm text-muted-foreground">
                  Nurturing long sales cycles with multiple stakeholders and compliance reviews
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Data Privacy</h3>
                <p className="text-sm text-muted-foreground">
                  Managing sensitive financial data while executing personalized marketing programs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Market Competition</h3>
                <p className="text-sm text-muted-foreground">
                  Differentiating in crowded markets with innovative fintech disruptors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How I Can Help</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Specialized services tailored to financial services organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Compliance-First Marketing</h3>
                <p className="text-sm text-muted-foreground">
                  Build marketing programs that meet regulatory requirements without sacrificing creativity or
                  effectiveness
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Enterprise ABM</h3>
                <p className="text-sm text-muted-foreground">
                  Target high-value financial institutions with personalized, account-based strategies
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Thought Leadership</h3>
                <p className="text-sm text-muted-foreground">
                  Establish credibility through strategic content that demonstrates financial expertise
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Digital Transformation</h3>
                <p className="text-sm text-muted-foreground">
                  Modernize marketing technology and processes while maintaining security and compliance
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Customer Acquisition</h3>
                <p className="text-sm text-muted-foreground">
                  Drive qualified leads through integrated demand generation programs
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Marketing Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Measure and optimize marketing ROI with sophisticated analytics frameworks
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Discuss Your Financial Services Marketing</h2>
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
