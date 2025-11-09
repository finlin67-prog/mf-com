import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export type ProjectDetail = {
  slug: string
  title: string
  company: string
  industry: string
  timeframe?: string
  subhead: string
  metrics: { value: string; label: string }[]
  problem: string
  approach: string[]
  results: string[]
  tools: string[]
  gallery?: { src: string; alt: string; caption?: string }[]
  quote?: { text: string; author?: string; role?: string }
  related?: {
    expertise?: { label: string; href: string }[]
    industries?: { label: string; href: string }[]
    timeline?: { label: string; href: string }
  }
}

interface ProjectDetailPageProps {
  project: ProjectDetail
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Breadcrumb + Title Bar */}
      <section className="container mx-auto px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link
              href="/projects"
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
            >
              Projects
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href={`/industries/${project.industry.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-")}`}
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
            >
              {project.industry}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{project.title}</span>
          </nav>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{project.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty">{project.subhead}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="text-sm">
              {project.company}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Link href={`/industries/${project.industry.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-")}`}>
                {project.industry}
              </Link>
            </Badge>
            {project.timeframe && (
              <Badge variant="outline" className="text-sm">
                {project.timeframe}
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Metric Highlight Band */}
      <section className="bg-[#0B1E39]/[0.06] border-t-2 border-gradient-to-r from-cyan-400 to-indigo-500 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className={`grid grid-cols-2 md:grid-cols-${Math.min(project.metrics.length, 4)} gap-6`}>
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAR Story Blocks */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="border-2 shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </CardContent>
          </Card>

          <Card className="border-2 shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Approach</h2>
              <ul className="space-y-3">
                {project.approach.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Results</h2>
              <ul className="space-y-3">
                {project.results.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stack & Systems */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Platforms & Systems</h2>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, i) => (
                <Badge key={i} variant="outline" className="text-sm px-4 py-2">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((item, i) => (
                <Card key={i} className="border-2 overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                  </div>
                  {item.caption && (
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">{item.caption}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.quote && (
        <section className="bg-muted/20 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="border-b-4 border-cyan-500 inline-block pb-2 mb-6">
                <blockquote className="text-xl md:text-2xl font-medium text-foreground italic">
                  "{project.quote.text}"
                </blockquote>
              </div>
              <div className="text-sm text-muted-foreground">
                {project.quote.author && <div className="font-semibold">{project.quote.author}</div>}
                {project.quote.role && <div>{project.quote.role}</div>}
              </div>
            </div>
          </div>
        </section>
      )}

      {project.related && (
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="border-2 rounded-2xl p-8">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  This work connects to the <span className="font-semibold text-foreground">GTM Stack</span> →{" "}
                  <span className="text-cyan-500">Strategy</span> • <span className="text-indigo-500">Systems</span> •{" "}
                  <span className="text-cyan-500">Execution</span> •{" "}
                  <span className="text-indigo-500">Measurement</span>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Expertise Links */}
                {project.related.expertise && project.related.expertise.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.related.expertise.map((link, i) => (
                        <Link
                          key={i}
                          href={link.href}
                          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                        >
                          <Badge variant="secondary" className="hover:bg-primary/20 transition-colors cursor-pointer">
                            {link.label}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Industries Links */}
                {project.related.industries && project.related.industries.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Industries</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.related.industries.map((link, i) => (
                        <Link
                          key={i}
                          href={link.href}
                          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                        >
                          <Badge variant="secondary" className="hover:bg-primary/20 transition-colors cursor-pointer">
                            {link.label}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timeline Link */}
                {project.related.timeline && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Timeline</h3>
                    <Link
                      href={project.related.timeline.href}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                    >
                      <Badge variant="secondary" className="hover:bg-primary/20 transition-colors cursor-pointer">
                        {project.related.timeline.label}
                      </Badge>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <section className="bg-[#0B1E39] border-t-2 border-cyan-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's architect your next GTM engine.</h2>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Every successful project starts with a strategic conversation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl"
            >
              <Link href="/contact">
                Book Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl"
            >
              <Link href="/projects">
                All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
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
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                  >
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Expertise</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/expertise"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                  >
                    Demand Generation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                  >
                    Account-Based Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                  >
                    Marketing Operations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                  >
                    Revenue Operations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                  >
                    Book Consultation
                  </Link>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                  >
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
