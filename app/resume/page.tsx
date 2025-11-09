"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Printer, ExternalLink, Award, GraduationCap, MapPin, Mail, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"

const sections = ["overview", "experience", "skills", "education", "certifications", "awards"]

const sectionTitles: Record<string, string> = {
  overview: "Overview",
  experience: "Experience",
  skills: "Skills",
  education: "Education",
  certifications: "Certifications",
  awards: "Awards & Recognition",
}

const experienceData = [
  {
    company: "PRGX Global",
    role: "Director, Digital Marketing & ABM",
    location: "Remote",
    dates: "2024 - 2025",
    highlights: [
      "Delivered +87% pipeline growth and +200% engagement through comprehensive ABM strategy",
      "Achieved +85% MQL growth and +60% organic traffic through SEO/content optimization",
      "Improved MQL→SQL conversion rate by 180% via advanced lead scoring implementation",
      "Restructured marketing operations and technology stack for scalable growth",
    ],
    systems: ["Salesforce", "HubSpot", "Demandbase", "Google Analytics", "Tableau"],
    projectLink: "/projects/prgx-pipeline-growth",
  },
  {
    company: "AMCS Group",
    role: "Director, Account-Based Marketing",
    location: "Remote",
    dates: "2023 - 2024",
    highlights: [
      "Generated $1.1M pipeline in 90 days through strategic ABM program launch",
      "Improved CRM data hygiene to 80% accuracy enabling better targeting and reporting",
      "Established ABM framework for Manufacturing and Logistics verticals",
      "Built cross-functional alignment between marketing, sales, and product teams",
    ],
    systems: ["Salesforce", "6sense", "LinkedIn Sales Navigator", "Google Analytics"],
    projectLink: "/projects/amcs-abm-launch",
  },
  {
    company: "Red Hat",
    role: "Sr. Principal Program Manager, ABM",
    location: "Remote",
    dates: "2021 - 2023",
    highlights: [
      "Activated ABM programs across 200+ accounts contributing ~33% of global pipeline",
      "Standardized lifecycle marketing frameworks for consistent customer engagement",
      "Led cross-functional enablement processes and playbook development",
      "Managed strategic account planning and executive engagement programs",
    ],
    systems: ["Salesforce", "Marketo", "Demandbase", "PathFactory", "Tableau"],
    projectLink: "/projects/red-hat-abm-scale",
  },
  {
    company: "Salesforce",
    role: "Global Marketing Ops Practice Lead",
    location: "San Francisco, CA",
    dates: "2017 - 2021",
    highlights: [
      "Drove lead generation +150% and ACV +63% YoY through analytics infrastructure",
      "Reduced reporting time from 4 days to 2 hours via automated dashboard development",
      "Built global marketing operations framework serving 1000+ person organization",
      "Established data governance and attribution modeling best practices",
    ],
    systems: ["Salesforce", "Marketo", "Tableau", "Google Analytics", "Bizible"],
    projectLink: "/projects/salesforce-mops",
  },
  {
    company: "Salesforce",
    role: "Sr. Manager, Enterprise Campaigns",
    location: "San Francisco, CA",
    dates: "2014 - 2017",
    highlights: [
      "Established ABM Center of Excellence and delivered +30% pipeline YoY",
      "Managed flagship industry events (NRF, HIMSS) driving engagement across Retail and Healthcare",
      "Built integrated campaign frameworks connecting digital, field, and partner channels",
      "Led vertical marketing strategy for Financial Services and Healthcare sectors",
    ],
    systems: ["Salesforce", "Marketo", "Demandbase", "Google Analytics"],
  },
  {
    company: "Get Satisfaction",
    role: "Director of Demand Generation",
    location: "San Francisco, CA",
    dates: "2012 - 2014",
    highlights: [
      "Owned end-to-end demand generation strategy and execution for high-growth SaaS startup",
      "Integrated Marketo + SFDC analytics for comprehensive pipeline visibility",
      "Drove strategic content optimization and SEO programs for inbound growth",
      "Built demand gen framework from ground up including processes, tech, and team",
    ],
    systems: ["Salesforce", "Marketo", "Google Analytics", "Optimizely"],
  },
  {
    company: "Crowd Factory",
    role: "Sr. Manager, Marketing & Communications",
    location: "San Francisco, CA",
    dates: "2011 - 2012",
    highlights: [
      "Achieved +164% YoY web visitors and +43% QoQ net-new leads through content strategy",
      "Led marketing automation excellence and SEO optimization initiatives",
      "Managed all marketing communications and brand positioning pre-acquisition",
    ],
    systems: ["Marketo", "Salesforce", "Google Analytics"],
  },
  {
    company: "Embarcadero Technologies",
    role: "Global Online Marketing Manager",
    location: "San Francisco, CA",
    dates: "2008 - 2011",
    highlights: [
      "Led SEO/SEM strategy driving significant organic and paid traffic growth",
      "Managed multi-system marketing operations (SFDC, Eloqua) and integrations",
      "Established foundational digital marketing expertise and demand generation programs",
    ],
    systems: ["Salesforce", "Eloqua", "Google Analytics"],
  },
  {
    company: "SalemGlobal",
    role: "Sr. Manager, Online Marketing",
    location: "San Francisco, CA",
    dates: "2006 - 2008",
    highlights: [
      "Drove 500% new-client growth and 85% retention through digital marketing initiatives",
      "Built comprehensive online marketing program from ground up",
      "Managed website development, email marketing, and digital advertising campaigns",
    ],
    systems: ["Salesforce", "Constant Contact", "Google AdWords"],
  },
]

const skillsData = {
  "Strategy & Planning": [
    "Go-to-Market Strategy",
    "Account-Based Marketing",
    "Market Research & Analysis",
    "Customer Journey Mapping",
    "Competitive Intelligence",
    "Revenue Planning",
  ],
  "Demand & Growth": [
    "Demand Generation",
    "Lead Generation & Nurture",
    "Growth Marketing",
    "Paid Advertising (SEM/Display)",
    "SEO & Content Marketing",
    "Event Marketing",
  ],
  "Operations & Automation": [
    "Marketing Operations",
    "Marketing Automation",
    "CRM Administration",
    "Lead Scoring & Routing",
    "Campaign Operations",
    "Process Optimization",
  ],
  "Analytics & Insights": [
    "Marketing Analytics",
    "Attribution Modeling",
    "Dashboard & Reporting",
    "Data Visualization",
    "Performance Optimization",
    "A/B Testing",
  ],
  "Creative & Content": [
    "Content Strategy",
    "Email Marketing",
    "Social Media Marketing",
    "Video Marketing",
    "Brand Messaging",
    "Copywriting",
  ],
}

const certifications = [
  {
    name: "Salesforce Certified Marketing Cloud",
    issuer: "Salesforce",
    year: "2023",
  },
  {
    name: "HubSpot Revenue Operations",
    issuer: "HubSpot Academy",
    year: "2024",
  },
  {
    name: "Google Analytics Certified",
    issuer: "Google",
    year: "2023",
  },
  {
    name: "ITSMA Account-Based Marketing",
    issuer: "ITSMA",
    year: "2022",
  },
  {
    name: "Marketo Certified Expert",
    issuer: "Adobe",
    year: "2021",
  },
  {
    name: "Demandbase Certified Practitioner",
    issuer: "Demandbase",
    year: "2023",
  },
]

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState("overview")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // In a real implementation, this would generate a PDF
    alert("PDF download functionality would be implemented here")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Top Bar */}
      <div className="border-b border-border bg-background print:hidden">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Résumé / CV</h1>
              <p className="text-sm text-muted-foreground mt-1">Michael Findling - GTM Marketing Leader</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Subnav - Sticky Pills */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur print:hidden">
        <div className="container mx-auto px-6 py-3">
          <div className="flex gap-2 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                  ${
                    activeSection === section
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }
                `}
              >
                {sectionTitles[section]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block sticky top-32 h-fit w-60 flex-shrink-0 print:hidden">
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`
                    w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${
                      activeSection === section
                        ? "bg-primary/10 text-primary border-l-2 border-primary"
                        : "text-muted-foreground hover:bg-muted"
                    }
                  `}
                >
                  {sectionTitles[section]}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 max-w-4xl space-y-16">
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-foreground mb-8">Overview</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Professional Summary</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strategic go-to-market leader with 20+ years driving revenue growth across B2B SaaS, enterprise
                    software, and financial services. Expert in demand generation, ABM, marketing operations, and
                    revenue transformation. Proven track record building scalable GTM systems that deliver measurable
                    business impact.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Quick Stats</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Years Experience:</span>
                      <span className="font-semibold text-foreground">20+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Industries:</span>
                      <span className="font-semibold text-foreground">6 Verticals</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Influenced Revenue:</span>
                      <span className="font-semibold text-foreground">$100M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Team Members Led:</span>
                      <span className="font-semibold text-foreground">50+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Key Highlights</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Built and scaled ABM programs generating $100M+ in pipeline across enterprise and mid-market
                      segments
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Established marketing operations frameworks and technology stacks for organizations from startups
                      to Fortune 500
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Led digital transformation initiatives delivering 150%+ improvements in lead generation, pipeline
                      velocity, and conversion rates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Deep expertise in Financial Services, Healthcare, Manufacturing, Retail, SaaS, and Logistics
                      verticals
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco Bay Area</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:michael@gtmstack.pro" className="hover:text-primary">
                    michael@gtmstack.pro
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <a href="https://linkedin.com" className="hover:text-primary">
                    LinkedIn
                  </a>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-foreground mb-8">Experience</h2>

              <div className="space-y-6">
                {experienceData.map((job, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                          <p className="text-sm font-medium text-primary">{job.company}</p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div>{job.dates}</div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {job.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.systems.map((system) => (
                          <span
                            key={system}
                            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded border border-border"
                          >
                            {system}
                          </span>
                        ))}
                      </div>

                      {job.projectLink && (
                        <a
                          href={job.projectLink}
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          View related project
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-foreground mb-8">Skills</h2>

              <div className="space-y-6">
                {Object.entries(skillsData).map(([category, skills]) => (
                  <div key={category}>
                    <div className="h-0.5 w-full bg-gradient-to-r from-primary/50 to-transparent mb-3" />
                    <h3 className="text-lg font-semibold text-foreground mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-foreground mb-8">Education</h2>

              <div className="space-y-4">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">MBA, Marketing & Strategy</h3>
                        <p className="text-sm text-muted-foreground">University of San Francisco</p>
                        <p className="text-xs text-muted-foreground mt-1">2010</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">BA, Business Administration</h3>
                        <p className="text-sm text-muted-foreground">San Francisco State University</p>
                        <p className="text-xs text-muted-foreground mt-1">1999</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-foreground mb-8">Certifications</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="rounded-md bg-primary/10 p-2 flex-shrink-0">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-foreground">{cert.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                          <p className="text-xs text-muted-foreground">{cert.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Awards Section */}
            <section id="awards" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-foreground mb-8">Awards & Recognition</h2>

              <div className="space-y-4">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">Marketing Operations Leader of the Year</h3>
                        <p className="text-sm text-muted-foreground">RevOps Summit</p>
                      </div>
                      <span className="text-sm text-muted-foreground">2022</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">Top 50 ABM Influencers</h3>
                        <p className="text-sm text-muted-foreground">ITSMA</p>
                      </div>
                      <span className="text-sm text-muted-foreground">2021</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">Marketo Champion Award</h3>
                        <p className="text-sm text-muted-foreground">Adobe/Marketo</p>
                      </div>
                      <span className="text-sm text-muted-foreground">2019</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 1cm;
          }

          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          .print\\:hidden {
            display: none !important;
          }

          h2 {
            page-break-after: avoid;
            margin-top: 1.5rem;
          }

          .space-y-6 > * {
            page-break-inside: avoid;
          }

          a::after {
            content: " (" attr(href) ")";
            font-size: 0.8em;
            color: #666;
          }
        }
      `}</style>

      {/* Footer */}
      <footer className="border-t border-border py-12 print:hidden">
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
                  <a href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="/expertise" className="text-muted-foreground hover:text-foreground">
                    Expertise
                  </a>
                </li>
                <li>
                  <a href="/industries" className="text-muted-foreground hover:text-foreground">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-muted-foreground hover:text-foreground">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/resume" className="text-muted-foreground hover:text-foreground">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
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
