import { notFound } from "next/navigation"
import ExpertiseDetailRichPage from "@/components/expertise-detail-rich-page"
import { EXPERTISE_DETAILS } from "@/lib/expertise"
import { toExpertiseRich } from "@/lib/expertise-adapter"

export async function generateStaticParams() {
  return EXPERTISE_DETAILS.map((e) => ({ slug: e.slug }))
}

export default function ExpertiseRoute({ params }: { params: { slug: string } }) {
  const expertise = EXPERTISE_DETAILS.find((e) => e.slug === params.slug)
  if (!expertise) return notFound()

  const richExpertise = toExpertiseRich(expertise)

  return <ExpertiseDetailRichPage expertise={richExpertise} />
}
