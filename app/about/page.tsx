import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, GraduationCap, Target, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About</div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
            Two Decades of <span className="text-primary">GTM Excellence</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            From Wall Street trading floors to Silicon Valley boardrooms, I've spent 20+ years mastering the art and
            science of go-to-market strategy, demand generation, and revenue operations.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To help B2B SaaS companies build scalable, data-driven revenue engines that drive predictable growth
                  and market leadership.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Approach</h3>
                <p className="text-sm text-muted-foreground">
                  Combining strategic thinking with tactical execution, leveraging data and technology to create
                  measurable business impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="pt-6">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Results</h3>
                <p className="text-sm text-muted-foreground">
                  Delivered $100M+ in influenced revenue, built high-performing teams, and transformed marketing
                  operations for global enterprises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A career spanning financial services, enterprise software, and high-growth startups
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Current Role */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="text-sm text-primary font-medium mb-1">2023 - Present</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Independent Consultant</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Providing fractional CMO and strategic GTM consulting to B2B SaaS companies, focusing on demand
                      generation, ABM, and revenue operations transformation.
                    </p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Strategy</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Fractional CMO</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">RevOps</span>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>

              {/* PRGX Global */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="text-sm text-primary font-medium mb-1">2024 - 2025</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Director, Digital Marketing & ABM</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">PRGX Global</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Led digital transformation and ABM strategy delivering exceptional growth: +87% pipeline, +200%
                      engagement, +85% MQLs, +60% organic traffic, and 180% improvement in MQL→SQL conversion.
                    </p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">ABM</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">RevOps</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Analytics</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">SaaS</span>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>

              {/* AMCS Group */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="hidden md:block md:w-1/2" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                    <div className="text-sm text-secondary font-medium mb-1">2023 - 2024</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Director, Account-Based Marketing</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">AMCS Group</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Generated $1.1M pipeline in 90 days, improved CRM data hygiene to 80%, and established ABM
                      framework for Manufacturing and Logistics verticals.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">ABM</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Data</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Manufacturing</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Logistics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Red Hat */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="text-sm text-accent font-medium mb-1">2021 - 2023</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Sr. Principal Program Manager, ABM</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Red Hat</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Activated ABM programs across 200+ accounts, contributing ~33% of global pipeline. Standardized
                      lifecycle marketing frameworks and cross-functional enablement processes.
                    </p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">ABM</span>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Lifecycle</span>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Enablement</span>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>

              {/* Salesforce - Marketing Ops */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="hidden md:block md:w-1/2" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                    <div className="text-sm text-primary font-medium mb-1">2017 - 2021</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Global Marketing Ops Practice Lead</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Salesforce</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Drove lead generation +150%, ACV +63% YoY, and reduced reporting time from 4 days to 2 hours.
                      Built analytics infrastructure serving global marketing organization.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">RevOps</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Analytics</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Enablement</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Salesforce - Enterprise Campaigns */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="text-sm text-secondary font-medium mb-1">2014 - 2017</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Sr. Manager, Enterprise Campaigns</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Salesforce</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Established ABM Center of Excellence, delivered +30% pipeline YoY, and managed flagship events
                      (NRF, HIMSS) driving engagement across Retail and Healthcare verticals.
                    </p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">ABM</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Events</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Enterprise</span>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>

              {/* Get Satisfaction */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="hidden md:block md:w-1/2" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                    <div className="text-sm text-accent font-medium mb-1">2012 - 2014</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Director of Demand Generation</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Get Satisfaction</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Owned end-to-end demand generation, integrating Marketo + SFDC analytics and driving strategic
                      content optimization programs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Demand Gen</span>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Automation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Crowd Factory */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="text-sm text-primary font-medium mb-1">2011 - 2012</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Sr. Manager, Marketing & Comms</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Crowd Factory (acq. by Marketo)</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Achieved +164% YoY web visitors and +43% QoQ net-new leads through SEO, content strategy, and
                      marketing automation excellence.
                    </p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Content</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Automation</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">SEO</span>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>

              {/* Embarcadero Technologies */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="hidden md:block md:w-1/2" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                    <div className="text-sm text-secondary font-medium mb-1">2008 - 2011</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Global Online Marketing Manager</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Embarcadero Technologies</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Led SEO/SEM strategy and multi-system marketing operations (SFDC, Eloqua), establishing
                      foundational digital marketing expertise.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Demand Gen</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Ops</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SalemGlobal */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="text-sm text-accent font-medium mb-1">2006 - 2008</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Sr. Manager, Online Marketing</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">SalemGlobal</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Drove 500% new-client growth and 85% retention through strategic digital marketing initiatives.
                    </p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Demand Gen</span>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>

              {/* Bank of Tokyo-Mitsubishi */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="hidden md:block md:w-1/2" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                    <div className="text-sm text-primary font-medium mb-1">2005 - 2006</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Business Analyst</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Bank of Tokyo-Mitsubishi</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Managed Credit Portfolio Management System implementation with comprehensive test plans and
                      documentation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Systems</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Ops</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standard & Poor's */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="text-sm text-secondary font-medium mb-1">2003 - 2005</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">LMS Strategist</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Standard & Poor's</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Led LMS rollout and developed KPI reporting for executive leadership.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Systems</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Analytics</span>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>

              {/* Goldman Sachs */}
              <div className="relative">
                <div className="flex items-start md:items-center gap-8">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:transform md:-translate-x-1/2 z-10" />
                  <div className="hidden md:block md:w-1/2" />
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                    <div className="text-sm text-accent font-medium mb-1">2000 - 2002</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Learning & Development Analyst</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Goldman Sachs</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Implemented enterprise LMS and established global reporting frameworks.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Systems</span>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Ops</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Certifications & Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Professional Certifications</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Salesforce Certified Marketing Cloud</li>
                      <li>• HubSpot Revenue Operations</li>
                      <li>• Google Analytics Certified</li>
                      <li>• ITSMA Account-Based Marketing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Education</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• MBA, Marketing & Strategy</li>
                      <li>• BA, Business Administration</li>
                      <li>• Executive Education, Digital Marketing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Key Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quantifiable impact across diverse industries
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 hover:border-primary transition-colors text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">$100M+</div>
              <p className="text-sm text-muted-foreground">Influenced Revenue</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary transition-colors text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary mb-2">300%</div>
              <p className="text-sm text-muted-foreground">Pipeline Growth</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-colors text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Team Members Led</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Your Revenue Engine</h2>
          <p className="text-lg mb-8 text-background/80 max-w-2xl mx-auto">
            Ready to transform your go-to-market strategy? Let's discuss how my experience can help drive your growth.
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
