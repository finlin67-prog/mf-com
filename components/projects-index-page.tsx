import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { PROJECT_DETAILS } from "@/lib/projects"

export default function ProjectsIndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-block rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-600">
            Case Studies & Projects
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">
            Proven <span className="text-cyan-500">Results</span> Across Industries
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed text-pretty">
            From Fortune 500 enterprises to high-growth startups, explore how strategic go-to-market programs have
            driven measurable business impact.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {PROJECT_DETAILS.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl border-2 border-slate-200 bg-white p-6 hover:border-cyan-500 hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              {/* Company + Industry */}
              <div className="flex items-start justify-between gap-2 mb-4">
                <div className="text-sm font-medium text-slate-900">{project.company}</div>
                <Badge variant="outline" className="text-xs">
                  {project.industry}
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors text-balance">
                {project.title}
              </h3>

              {/* Subhead */}
              <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-2">{project.subhead}</p>

              {/* Metrics (show first 2) */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {project.metrics.slice(0, 2).map((metric, i) => (
                  <div key={i} className="bg-slate-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-cyan-600 mb-0.5">{metric.value}</div>
                    <div className="text-xs text-slate-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* View Link */}
              <div className="flex items-center text-sm font-medium text-cyan-600 group-hover:text-cyan-700">
                View Case Study
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="h-[2px] w-32 mx-auto mb-8 bg-gradient-to-r from-cyan-400 to-indigo-500" />
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
            Let's discuss your goals and create a strategic plan to achieve them
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700"
          >
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4">
                GTMStack<span className="text-cyan-600">.pro</span>
              </div>
              <p className="text-sm text-slate-600">Strategic Go-To-Market consulting for B2B SaaS leaders</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-slate-600 hover:text-slate-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-slate-600 hover:text-slate-900">
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-slate-600 hover:text-slate-900">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-slate-600 hover:text-slate-900">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Expertise</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/expertise" className="text-slate-600 hover:text-slate-900">
                    Demand Generation
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-slate-600 hover:text-slate-900">
                    Account-Based Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-slate-600 hover:text-slate-900">
                    Marketing Operations
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-slate-600 hover:text-slate-900">
                    Revenue Operations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-slate-600 hover:text-slate-900">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="https://linkedin.com" className="text-slate-600 hover:text-slate-900">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
            <p>&copy; 2025 GTMStack.pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
