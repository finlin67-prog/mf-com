// /app/projects/page.tsx
import Link from "next/link"
import { PROJECT_DETAILS } from "@/lib/projects"

export default function ProjectsIndex() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 text-slate-100">
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">Projects & Case Studies</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">
          A selection of systems I've architected, optimized, and scaled — with measurable outcomes.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECT_DETAILS.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:-translate-y-0.5 transition"
          >
            <h2 className="font-semibold group-hover:text-cyan-300">{p.title}</h2>
            <p className="mt-2 text-slate-300 line-clamp-3">{p.subhead}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.outcomes.slice(0, 3).map((o, i) => (
                <span key={i} className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-0.5 text-xs">
                  {o}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
