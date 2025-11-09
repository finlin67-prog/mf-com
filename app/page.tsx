import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Building2,
  ShoppingCart,
  Stethoscope,
  Factory,
  Package,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Strategic Go-To-Market Architect
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl text-balance">
            Building Revenue Engines for <span className="text-primary">B2B SaaS Leaders</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            20+ years of proven expertise in Demand Generation, ABM, Marketing Operations, and Revenue Growth. From Wall
            Street to Silicon Valley, transforming GTM strategies for global enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">
                Book Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
              <Link href="/projects">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GTM Stack Diagram */}
      <section className="container mx-auto px-6 py-20 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">The GTM Stack Framework</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive approach to building and optimizing go-to-market operations
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Content & Engagement</h3>
              <p className="text-sm text-muted-foreground">
                Creating compelling narratives that resonate with your audience
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Demand & Growth</h3>
              <p className="text-sm text-muted-foreground">Driving qualified pipeline through integrated campaigns</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Strategy & Insights</h3>
              <p className="text-sm text-muted-foreground">
                Data-driven approaches to customer acquisition and retention
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="rounded-full bg-muted/30 w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Systems & Operations</h3>
              <p className="text-sm text-muted-foreground">Building scalable infrastructure for marketing excellence</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Industry Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep experience across multiple verticals and sectors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              { name: "Financial Services", icon: Building2, href: "/industries/financial-services" },
              { name: "Healthcare", icon: Stethoscope, href: "/industries/healthcare" },
              { name: "Manufacturing", icon: Factory, href: "/industries/manufacturing" },
              { name: "Retail", icon: ShoppingCart, href: "/industries/retail" },
              { name: "SaaS", icon: Package, href: "/industries/saas" },
              { name: "Logistics", icon: Package, href: "/industries/logistics" },
            ].map((industry) => (
              <Link key={industry.name} href={industry.href}>
                <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <industry.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="text-sm font-medium">{industry.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven results across Fortune 500 companies and high-growth startups
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {[
            {
              title: "Enterprise ABM Program",
              company: "Salesforce",
              result: "300% increase in qualified pipeline",
              industry: "B2B SaaS",
            },
            {
              title: "RevOps Transformation",
              company: "PRGX",
              result: "45% improvement in conversion rates",
              industry: "Financial Services",
            },
            {
              title: "Global Event Strategy",
              company: "Red Hat",
              result: "$12M in influenced revenue",
              industry: "Manufacturing",
            },
          ].map((project, i) => (
            <Card key={i} className="hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="text-xs text-primary font-medium">{project.company}</div>
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-2xl font-bold text-secondary">{project.result}</p>
                  <div className="text-xs text-muted-foreground">{project.industry}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your GTM Strategy?</h2>
          <p className="text-lg mb-8 text-background/80 max-w-2xl mx-auto">
            Let's discuss how to build a scalable revenue engine for your business
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Book a Strategy Session
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
