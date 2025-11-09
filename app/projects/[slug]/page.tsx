// /app/projects/[slug]/page.tsx
import { notFound } from "next/navigation"
import Link from "next/link"
import { PROJECT_DETAILS } from "@/lib/projects"

export async function generateStaticParams() {
  return PROJECT_DETAILS.map((p) => ({ slug: p.slug }))
}

export default function ProjectRoute({ params }: { params: { slug: string } }) {
  const project = PROJECT_DETAILS.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <main className="mx-auto max-w-5xl px-6 py-20 text-slate-100">
      {/* Hero */}
      <section className="mb-10 rounded-2xl bg-[#0B1E39] p-8 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#22D3EE 1px, transparent 1px), radial-gradient(#6366F1 1px, transparent 1px)",
            backgroundSize: "32px 32px, 32px 32px",
            backgroundPosition: "0 0, 16px 16px",
          }}
        />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold">{project.title}</h1>
        <p className="relative z-10 mt-3 text-slate-300 max-w-3xl">{project.subhead}</p>
      </section>

      {/* Intro */}
      <section className="mb-10 grid gap-6 md:grid-cols-2">
        {project.intro.map((p, i) => (
          <p key={i} className="text-slate-200">
            {p}
          </p>
        ))}
      </section>

      {/* PAR */}
      <section className="mb-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="font-semibold mb-2">Problem</h2>
          <p className="text-slate-300">{project.problem}</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="font-semibold mb-2">Approach</h2>
          <p className="text-slate-300">{project.approach}</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="font-semibold mb-2">Results</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {project.results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mb-10">
        <h2
          className="text-xl md:text-2xl font-semibold border-b-2 pb-3"
          style={{ borderImage: "linear-gradient(90deg,#22D3EE,#6366F1) 1" }}
        >
          Selected Outcomes
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.outcomes.map((o, i) => (
            <span key={i} className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm">
              {o}
            </span>
          ))}
        </div>
      </section>

      {/* Cross-links */}
      <section className="mb-16 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-semibold mb-2">Related Expertise</h3>
          <ul className="space-y-2">
            {project.relatedExpertise.map((e, i) => (
              <li key={i}>
                <Link className="underline decoration-cyan-300/60 underline-offset-4 hover:text-cyan-300" href={e.href}>
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Related Industries</h3>
          <ul className="space-y-2">
            {project.relatedIndustries.map((ind, i) => (
              <li key={i}>
                <Link
                  className="underline decoration-indigo-300/60 underline-offset-4 hover:text-indigo-300"
                  href={ind.href}
                >
                  {ind.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(90deg,#22D3EE,#6366F1)" }}>
        <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Want a system like this?</h3>
        <Link href="/contact" className="mt-4 inline-block rounded-xl bg-slate-900 px-5 py-3 text-white">
          Start a Conversation
        </Link>
      </section>
    </main>
  )
}
