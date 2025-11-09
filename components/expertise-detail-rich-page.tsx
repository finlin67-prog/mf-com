"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, ArrowRight, Sparkles } from "lucide-react"

export type ExpertiseRich = {
  title: string
  subhead: string
  lottieSrc?: string
  intro: string[]
  highlights: string[]
  services: { title: string; blurb: string; icon?: string }[]
  process: { step: string; tip: string }[]
  features: { title: string; benefit: string; icon?: string }[]
  caseStudies: {
    label: string
    problem: string
    approach: string
    results: string[]
    href: string
  }[]
}

type ExpertiseDetailRichPageProps = {
  expertise: ExpertiseRich
}

export default function ExpertiseDetailRichPage({ expertise }: ExpertiseDetailRichPageProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="min-h-screen bg-white font-['IBM_Plex_Sans']">
      {/* Hero Banner with Blueprint Grid */}
      <section className="relative bg-gradient-to-br from-[#0B1E39] to-[#0B1E39]/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-['Inter'] text-4xl lg:text-5xl font-bold tracking-tight mb-4">{expertise.title}</h1>
              <p className="text-lg text-slate-200 leading-relaxed">{expertise.subhead}</p>
            </div>

            {expertise.lottieSrc && (
              <div className="flex justify-center lg:justify-end">
                <div className="w-64 h-64 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Sparkles className="w-24 h-24 text-[#22D3EE]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Intro Split Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Narrative */}
          <div>
            <h2 className="font-['Inter'] text-2xl lg:text-3xl font-semibold text-[#0B1E39] mb-6">What I Build</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              {expertise.intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right: Highlights Card */}
          <div className="bg-gradient-to-br from-[#22D3EE]/10 to-[#6366F1]/10 rounded-2xl p-8 border border-[#22D3EE]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#22D3EE] to-[#6366F1] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-['Inter'] text-xl font-semibold text-[#0B1E39]">
                Career Highlights in {expertise.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {expertise.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-[#22D3EE] flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-[#F7FAFC] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-['Inter'] text-3xl font-semibold text-[#0B1E39] mb-12 text-center">Services Offered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#22D3EE] hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-[#22D3EE] focus-within:ring-offset-2"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#22D3EE] to-[#6366F1] flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-['Inter'] text-lg font-semibold text-[#0B1E39] mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Dark Navy Band */}
      <section className="bg-[#0B1E39] text-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-['Inter'] text-3xl font-semibold mb-12 text-center">How I Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.process.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#6366F1] flex items-center justify-center flex-shrink-0 font-['Inter'] font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-['Inter'] text-lg font-semibold mb-2">{step.step}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{step.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Features Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-['Inter'] text-3xl font-semibold text-[#0B1E39] mb-12 text-center">Core Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-xl border border-slate-200 hover:border-[#22D3EE] hover:bg-[#F7FAFC] transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22D3EE] to-[#6366F1] flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-['Inter'] font-semibold text-[#0B1E39] mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabbed Case Studies */}
      <section className="bg-[#F7FAFC] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-['Inter'] text-3xl font-semibold text-[#0B1E39] mb-12 text-center">Case Studies</h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {expertise.caseStudies.map((study, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-xl font-['Inter'] font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 ${
                  activeTab === i
                    ? "bg-gradient-to-r from-[#22D3EE] to-[#6366F1] text-white shadow-lg"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#22D3EE]"
                }`}
              >
                {study.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-sm">
            {expertise.caseStudies.map((study, i) => (
              <div key={i} className={activeTab === i ? "block" : "hidden"}>
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="font-['Inter'] text-lg font-semibold text-[#0B1E39] mb-3">Problem</h3>
                    <p className="text-slate-700 leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-['Inter'] text-lg font-semibold text-[#0B1E39] mb-3">Approach</h3>
                    <p className="text-slate-700 leading-relaxed">{study.approach}</p>
                  </div>
                  <div>
                    <h3 className="font-['Inter'] text-lg font-semibold text-[#0B1E39] mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, j) => (
                        <li key={j} className="flex items-start gap-2 text-slate-700">
                          <Check className="w-4 h-4 text-[#22D3EE] flex-shrink-0 mt-1" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href={study.href}
                  className="inline-flex items-center gap-2 text-[#22D3EE] hover:text-[#6366F1] font-['Inter'] font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 rounded"
                >
                  View Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative bg-gradient-to-r from-[#22D3EE] to-[#6366F1] text-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-['Inter'] text-2xl lg:text-3xl font-semibold mb-6">
            Let's architect your next GTM system.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0B1E39] px-8 py-4 rounded-xl font-['Inter'] font-semibold hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#22D3EE]"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
