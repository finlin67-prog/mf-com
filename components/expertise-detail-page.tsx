import type { ExpertiseDetail } from "@/lib/expertise"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface ExpertiseDetailPageProps {
  expertise: ExpertiseDetail
}

export default function ExpertiseDetailPage({ expertise }: ExpertiseDetailPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F7FAFC] via-white to-[#EAF4F7] py-20 md:py-32 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/20 text-[#0B1E39] text-sm font-medium mb-4">
              Expertise
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-[#0B1E39] sm:text-6xl text-balance font-[family-name:var(--font-geist-sans)]">
              {expertise.title}
            </h1>
            <p className="text-xl text-[#64748B] leading-relaxed text-pretty font-[family-name:var(--font-ibm-plex-sans)]">
              {expertise.summary}
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#22D3EE] to-[#6366F1] hover:opacity-90 rounded-xl"
              >
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl bg-transparent">
                <Link href="/projects">View Related Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="mx-auto max-w-4xl space-y-6">
          {expertise.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-[#64748B] leading-relaxed font-[family-name:var(--font-ibm-plex-sans)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="bg-[#F7FAFC] py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B1E39] mb-4 font-[family-name:var(--font-geist-sans)]">
              Core Focus Areas
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#22D3EE] to-[#6366F1]" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.focusAreas.map((area, index) => (
              <Card
                key={index}
                className="border-2 border-slate-200 hover:border-[#22D3EE]/50 transition-all duration-300 rounded-2xl"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-[#22D3EE]" />
                    </div>
                    <p className="text-lg font-semibold text-[#0B1E39] font-[family-name:var(--font-geist-sans)]">
                      {area}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Outcomes Section */}
      {expertise.metrics && expertise.metrics.length > 0 && (
        <section className="container mx-auto px-6 py-20 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B1E39] mb-4 font-[family-name:var(--font-geist-sans)]">
              Key Outcomes
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#22D3EE] to-[#6366F1]" />
          </div>

          <div className="flex flex-wrap gap-3">
            {expertise.metrics.map((metric, index) => (
              <div
                key={index}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#22D3EE]/10 to-[#6366F1]/10 border border-[#22D3EE]/20 text-[#0B1E39] font-semibold text-lg"
              >
                {metric}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cross References Section */}
      <section className="bg-[#0B1E39]/5 py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Related Industries */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1E39] mb-6 font-[family-name:var(--font-geist-sans)]">
                Related Industries
              </h3>
              <div className="space-y-3">
                {expertise.relatedIndustries.map((industry, index) => (
                  <Link
                    key={index}
                    href={industry.href}
                    className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-[#6366F1] hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#0B1E39] group-hover:text-[#6366F1] transition-colors">
                        {industry.label}
                      </span>
                      <ArrowRight className="h-5 w-5 text-[#64748B] group-hover:text-[#22D3EE] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Projects */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1E39] mb-6 font-[family-name:var(--font-geist-sans)]">
                Related Projects
              </h3>
              <div className="space-y-3">
                {expertise.relatedProjects.map((project, index) => (
                  <Link
                    key={index}
                    href={project.href}
                    className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-[#22D3EE] hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#0B1E39] group-hover:text-[#22D3EE] transition-colors">
                        {project.label}
                      </span>
                      <ArrowRight className="h-5 w-5 text-[#64748B] group-hover:text-[#22D3EE] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-[#22D3EE] to-[#6366F1] py-20">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-geist-sans)]">
            Let's architect your next GTM system.
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-ibm-plex-sans)]">
            Schedule a strategy session to discuss how {expertise.title.toLowerCase()} can accelerate your growth.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-[#6366F1] hover:bg-white/90 rounded-xl shadow-lg"
          >
            <Link href="/contact">
              Book Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
