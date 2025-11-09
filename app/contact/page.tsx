"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Linkedin, Globe } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
    subscribe: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-50 overflow-hidden">
        {/* Blueprint grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#22D3EE 1px, transparent 1px),
              linear-gradient(90deg, #22D3EE 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-6 py-20 md:py-32 relative">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight text-slate-900 text-balance">
              Let's Design Your Next Growth Engine
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed text-pretty">
              Ready to align strategy, systems, and execution?
              <br />
              Whether you need a GTM audit, ABM program, or full marketing operations design, I'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white shadow-lg"
                asChild
              >
                <Link href="/book">Book Strategy Session</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Intro Text */}
          <div className="space-y-6">
            <h2 className="font-sans text-3xl font-bold text-slate-900">Start the Conversation</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every engagement starts with a short discovery call.
              <br />
              Share a few details so I can prepare relevant insights before we speak.
            </p>
            <div className="pt-8 space-y-4 text-sm text-slate-500">
              <p className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">✓</span>
                <span>Confidential consultation on your GTM challenges</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">✓</span>
                <span>Strategic recommendations tailored to your industry</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">✓</span>
                <span>Response within 24 hours</span>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm p-8" id="form">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-cyan-100 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Thanks — I'll be in touch soon.</h3>
                <p className="text-slate-600">I typically respond within 24 hours during business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Michael Findling"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="border-slate-300 focus-visible:ring-cyan-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-700">
                    Company / Organization
                  </Label>
                  <Input
                    id="company"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="border-slate-300 focus-visible:ring-cyan-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hello@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="border-slate-300 focus-visible:ring-cyan-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-slate-700">
                    Role / Title
                  </Label>
                  <Input
                    id="role"
                    placeholder="VP Marketing"
                    value={formData.role}
                    onChange={(e) => handleChange("role", e.target.value)}
                    className="border-slate-300 focus-visible:ring-cyan-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your GTM goals or challenges..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="border-slate-300 focus-visible:ring-cyan-500 resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="subscribe"
                    checked={formData.subscribe}
                    onCheckedChange={(checked) => handleChange("subscribe", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="subscribe" className="text-sm text-slate-600 cursor-pointer leading-relaxed">
                    I'd like to receive strategic GTM insights occasionally.
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Direct Contact Options */}
      <section className="bg-slate-900/5 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-sans text-3xl font-bold text-slate-900">Prefer direct contact?</h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a
                href="mailto:hello@gtmstack.pro"
                className="group flex items-center gap-3 text-slate-700 hover:text-cyan-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-100 group-hover:bg-cyan-200 flex items-center justify-center transition-colors">
                  <Mail className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-slate-500">Email</div>
                  <div className="font-semibold">hello@gtmstack.pro</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/mfindling"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-slate-700 hover:text-cyan-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center transition-colors">
                  <Linkedin className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-slate-500">LinkedIn</div>
                  <div className="font-semibold">linkedin.com/in/mfindling</div>
                </div>
              </a>

              <div className="group flex items-center gap-3 text-slate-700">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-slate-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-slate-500">Location</div>
                  <div className="font-semibold">Global / Remote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans text-3xl font-bold text-slate-900 text-center mb-12">Quick Info</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="agencies" className="border border-slate-200 rounded-xl px-6 bg-white">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                Do you work with agencies?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Yes—often as a systems architect or strategic advisor. I can partner with agencies to provide GTM
                strategy, marketing operations expertise, or support on complex client engagements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fulltime" className="border border-slate-200 rounded-xl px-6 bg-white">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                Available for full-time roles?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Yes—Senior Director / VP level marketing leadership roles in B2B SaaS or enterprise companies. I bring
                20+ years of experience building and scaling marketing teams that drive measurable revenue impact.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="engagement" className="border border-slate-200 rounded-xl px-6 bg-white">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                Preferred engagement length?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                From short audits (2-4 weeks) to multi-quarter system builds (6-12+ months). Each engagement is
                customized based on your specific goals, timeline, and budget.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="relative bg-slate-900 text-white py-20">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-indigo-600" />

        <div className="container mx-auto px-6 text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-8 text-balance">
            Growth starts with clarity. Let's talk about yours.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              asChild
            >
              <Link href="#form">Start the Conversation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 transition-colors bg-transparent"
              asChild
            >
              <Link href="/projects">See Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4 text-slate-900">
                GTMStack<span className="text-cyan-600">.pro</span>
              </div>
              <p className="text-sm text-slate-600">Strategic Go-To-Market systems for B2B growth leaders</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/expertise" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    Demand Generation
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    Marketing Operations
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    Account-Based Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    GTM Strategy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/mfindling"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-cyan-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@gtmstack.pro" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2025 GTMStack.pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
