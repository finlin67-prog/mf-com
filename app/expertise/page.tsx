import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileText, TrendingUp, Settings, Lightbulb, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ExpertisePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <section className="relative bg-gradient-to-b from-[#F7FAFC] to-[#EAF4F7] py-20 md:py-32 overflow-hidden">
        {/* Subtle geometric network background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-32 h-32 border border-[#0B1E39] rounded-lg rotate-12" />
          <div className="absolute bottom-32 right-1/4 w-24 h-24 border border-[#22D3EE] rounded-lg -rotate-6" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-[#6366F1] rounded-lg rotate-45" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-[#0B1E39] sm:text-6xl text-balance">
              Expertise Across the <span className="text-[#6366F1]">Go-To-Market Stack</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[#64748B] leading-relaxed text-pretty">
              From strategy to systems, I connect every layer of modern marketing — designing growth engines that align
              creativity, data, and revenue operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#6366F1] hover:bg-[#6366F1]/90">
                <Link href="/industries">
                  View Industries
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <p className="text-lg text-[#64748B] leading-relaxed">
            Over two decades, I've built and led marketing systems for SaaS, manufacturing, and global enterprise
            brands. My work bridges creative storytelling, technical architecture, and analytical precision.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#22D3EE] to-[#6366F1] mx-auto" />
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Quadrant 1: Content & Engagement */}
          <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-all duration-300 group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#22D3EE] to-[#6366F1]" />
            <CardContent className="pt-8 pb-6">
              <div className="rounded-full bg-[#22D3EE]/10 w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-[#22D3EE]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#0B1E39]">Content & Engagement</h3>
              <p className="text-[#64748B] mb-4 leading-relaxed">
                Build narrative systems that educate, inspire, and convert across every touchpoint.
              </p>
              <ul className="space-y-2 text-sm text-[#64748B] mb-6">
                <li>
                  <Link
                    href="/expertise/content-marketing"
                    className="flex items-start gap-2 hover:text-[#22D3EE] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#22D3EE] mt-0.5 flex-shrink-0" />
                    <span>Content Marketing</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/email-marketing"
                    className="flex items-start gap-2 hover:text-[#22D3EE] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#22D3EE] mt-0.5 flex-shrink-0" />
                    <span>Email Marketing</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/omnichannel-marketing"
                    className="flex items-start gap-2 hover:text-[#22D3EE] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#22D3EE] mt-0.5 flex-shrink-0" />
                    <span>Omnichannel Marketing</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/search-engine-optimization"
                    className="flex items-start gap-2 hover:text-[#22D3EE] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#22D3EE] mt-0.5 flex-shrink-0" />
                    <span>SEO</span>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Quadrant 2: Demand & Growth */}
          <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-all duration-300 group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#22D3EE] to-[#6366F1]" />
            <CardContent className="pt-8 pb-6">
              <div className="rounded-full bg-[#6366F1]/10 w-14 h-14 flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-[#6366F1]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#0B1E39]">Demand & Growth</h3>
              <p className="text-[#64748B] mb-4 leading-relaxed">
                Design scalable engines that generate pipeline and accelerate revenue velocity.
              </p>
              <ul className="space-y-2 text-sm text-[#64748B] mb-6">
                <li>
                  <Link
                    href="/expertise/demand-generation"
                    className="flex items-start gap-2 hover:text-[#6366F1] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Demand Generation</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/account-based-marketing"
                    className="flex items-start gap-2 hover:text-[#6366F1] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Account-Based Marketing (ABM)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/growth-marketing"
                    className="flex items-start gap-2 hover:text-[#6366F1] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Growth Marketing</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/paid-advertising-sem"
                    className="flex items-start gap-2 hover:text-[#6366F1] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Paid Advertising (SEM)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/event-marketing"
                    className="flex items-start gap-2 hover:text-[#6366F1] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Event Marketing</span>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Quadrant 3: Strategy & Insights */}
          <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-all duration-300 group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#22D3EE] to-[#6366F1]" />
            <CardContent className="pt-8 pb-6">
              <div className="rounded-full bg-[#22D3EE]/10 w-14 h-14 flex items-center justify-center mb-4">
                <Lightbulb className="h-7 w-7 text-[#22D3EE]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#0B1E39]">Strategy & Insights</h3>
              <p className="text-[#64748B] mb-4 leading-relaxed">
                Align teams around market design, customer intelligence, and data-driven decisions.
              </p>
              <ul className="space-y-2 text-sm text-[#64748B] mb-6">
                <li>
                  <Link
                    href="/expertise/customer-experience"
                    className="flex items-start gap-2 hover:text-[#22D3EE] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#22D3EE] mt-0.5 flex-shrink-0" />
                    <span>Customer Experience (CX)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/customer-marketing"
                    className="flex items-start gap-2 hover:text-[#22D3EE] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#22D3EE] mt-0.5 flex-shrink-0" />
                    <span>Customer Marketing</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/lifecycle-marketing"
                    className="flex items-start gap-2 hover:text-[#22D3EE] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#22D3EE] mt-0.5 flex-shrink-0" />
                    <span>Lifecycle Marketing</span>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Quadrant 4: Systems & Operations */}
          <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-all duration-300 group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#22D3EE] to-[#6366F1]" />
            <CardContent className="pt-8 pb-6">
              <div className="rounded-full bg-[#6366F1]/10 w-14 h-14 flex items-center justify-center mb-4">
                <Settings className="h-7 w-7 text-[#6366F1]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#0B1E39]">Systems & Operations</h3>
              <p className="text-[#64748B] mb-4 leading-relaxed">
                Architect the technology, automation, and workflows that make growth repeatable.
              </p>
              <ul className="space-y-2 text-sm text-[#64748B] mb-6">
                <li>
                  <Link
                    href="/expertise/marketing-operations"
                    className="flex items-start gap-2 hover:text-[#6366F1] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Marketing Operations</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/martech-optimization"
                    className="flex items-start gap-2 hover:text-[#6366F1] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>MarTech Optimization</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/marketing-automation"
                    className="flex items-start gap-2 hover:text-[#6366F1] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Marketing Automation</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise/ai-in-marketing"
                    className="flex items-start gap-2 hover:text-[#6366F1] transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>AI in Marketing</span>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#0B1E39]">How I Build GTM Systems</h2>
          <p className="text-center text-[#64748B] mb-12 max-w-2xl mx-auto">
            A proven three-step framework for transforming marketing operations
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            {/* Left: Framework */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#22D3EE] text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0B1E39]">Diagnose</h3>
                  <p className="text-[#64748B]">
                    Audit current systems, identify gaps, and map opportunities for growth and optimization.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#6366F1] text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0B1E39]">Design</h3>
                  <p className="text-[#64748B]">
                    Architect the strategy, tech stack, and execution plan aligned to business objectives.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#22D3EE] text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0B1E39]">Deploy</h3>
                  <p className="text-[#64748B]">
                    Implement, optimize, and scale with measurable outcomes and continuous improvement.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Abstract stack illustration */}
            <div className="relative h-80 flex items-center justify-center">
              <div className="relative w-full max-w-xs">
                {/* Layered isometric stack representation */}
                <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
                  <div className="w-48 h-16 bg-gradient-to-r from-[#22D3EE] to-[#6366F1] rounded-lg shadow-lg transform -rotate-3 opacity-90 flex items-center justify-center text-white font-semibold">
                    Strategy
                  </div>
                  <div className="w-56 h-16 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-lg shadow-lg transform rotate-2 opacity-95 flex items-center justify-center text-white font-semibold">
                    Technology
                  </div>
                  <div className="w-52 h-16 bg-gradient-to-r from-[#22D3EE] to-[#6366F1] rounded-lg shadow-lg transform -rotate-1 flex items-center justify-center text-white font-semibold">
                    Execution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#0B1E39]">Platforms and Frameworks</h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Certified and experienced across leading martech and analytics ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {[
            "Salesforce",
            "Marketo",
            "HubSpot",
            "Demandbase",
            "Google Analytics",
            "Tableau",
            "Eloqua",
            "Pardot",
            "6sense",
            "Outreach",
            "Drift",
            "Looker",
          ].map((platform) => (
            <div
              key={platform}
              className="flex items-center justify-center h-20 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="text-sm font-medium text-[#64748B]">{platform}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0B1E39]/5 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0B1E39]">Real Outcomes, Real Impact</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              See how these frameworks translate into measurable business results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/projects">
              <Card className="border-2 hover:border-[#6366F1] transition-all h-full">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#6366F1] mb-2">+87%</div>
                  <h3 className="font-semibold text-lg mb-2 text-[#0B1E39]">ABM Engine for PRGX</h3>
                  <p className="text-sm text-[#64748B]">
                    Pipeline growth through integrated account-based marketing program
                  </p>
                  <div className="mt-4 flex items-center text-[#6366F1] text-sm font-medium">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects">
              <Card className="border-2 hover:border-[#22D3EE] transition-all h-full">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#22D3EE] mb-2">$1.1M</div>
                  <h3 className="font-semibold text-lg mb-2 text-[#0B1E39]">Partner GTM Program</h3>
                  <p className="text-sm text-[#64748B]">
                    New pipeline generated in 90 days through partner ecosystem activation
                  </p>
                  <div className="mt-4 flex items-center text-[#22D3EE] text-sm font-medium">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects">
              <Card className="border-2 hover:border-[#6366F1] transition-all h-full">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#6366F1] mb-2">180%</div>
                  <h3 className="font-semibold text-lg mb-2 text-[#0B1E39]">Field Marketing Revamp</h3>
                  <p className="text-sm text-[#64748B]">
                    Improvement in MQL to SQL conversion through optimized field programs
                  </p>
                  <div className="mt-4 flex items-center text-[#6366F1] text-sm font-medium">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#22D3EE] to-[#6366F1] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's architect your next GTM engine.</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Schedule a strategy session to discuss how we can transform your marketing operations
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-[#6366F1] hover:bg-white/90">
            <Link href="/contact">
              Book Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Marketing?</h2>
          <p className="text-lg mb-8 text-background/80 max-w-2xl mx-auto">
            Let's discuss which capabilities can drive the most impact for your business
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
