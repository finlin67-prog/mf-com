import { EXPERTISE_DETAILS } from "./expertise"
import { PROJECT_DETAILS } from "./projects"

interface ValidationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
}

/**
 * Validates cross-links between expertise and projects to catch broken references
 * Run this in development to ensure all hrefs point to existing pages
 */
export function validateCrossLinks(): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // Create lookup maps
  const projectSlugs = new Set(PROJECT_DETAILS.map((p) => p.slug))
  const expertiseSlugs = new Set(EXPERTISE_DETAILS.map((e) => e.slug))

  // Valid industry slugs (based on your industries structure)
  const industrySlugs = new Set([
    "financial-services",
    "finance",
    "healthcare",
    "manufacturing",
    "retail",
    "saas",
    "logistics",
  ])

  // Validate expertise cross-links
  EXPERTISE_DETAILS.forEach((expertise) => {
    // Check related projects
    expertise.relatedProjects.forEach((project) => {
      const slug = project.href.replace("/projects/", "")
      if (!projectSlugs.has(slug)) {
        errors.push(
          `[Expertise: ${expertise.slug}] Related project href "${project.href}" points to non-existent project "${slug}"`,
        )
      }
    })

    // Check related industries
    expertise.relatedIndustries.forEach((industry) => {
      const slug = industry.href.replace("/industries/", "")
      if (!industrySlugs.has(slug)) {
        warnings.push(
          `[Expertise: ${expertise.slug}] Related industry href "${industry.href}" may not exist (slug: "${slug}")`,
        )
      }
    })
  })

  // Validate project cross-links
  PROJECT_DETAILS.forEach((project) => {
    // Check related expertise
    if (project.relatedExpertise) {
      project.relatedExpertise.forEach((exp) => {
        const slug = exp.href.replace("/expertise/", "")
        if (!expertiseSlugs.has(slug)) {
          errors.push(
            `[Project: ${project.slug}] Related expertise href "${exp.href}" points to non-existent expertise "${slug}"`,
          )
        }
      })
    }

    // Check related industries
    if (project.relatedIndustries) {
      project.relatedIndustries.forEach((industry) => {
        const slug = industry.href.replace("/industries/", "")
        if (!industrySlugs.has(slug)) {
          warnings.push(
            `[Project: ${project.slug}] Related industry href "${industry.href}" may not exist (slug: "${slug}")`,
          )
        }
      })
    }
  })

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  }
}

/**
 * Pretty-print validation results to console
 */
export function logValidationResults(): void {
  const result = validateCrossLinks()

  console.log("\n🔍 GTMStack Cross-Link Validation\n")

  if (result.valid && result.warnings.length === 0) {
    console.log("✅ All cross-links are valid!\n")
    return
  }

  if (result.errors.length > 0) {
    console.log("❌ ERRORS (broken links):")
    result.errors.forEach((err) => console.log(`   ${err}`))
    console.log("")
  }

  if (result.warnings.length > 0) {
    console.log("⚠️  WARNINGS (potential issues):")
    result.warnings.forEach((warn) => console.log(`   ${warn}`))
    console.log("")
  }

  if (!result.valid) {
    console.log("💡 Fix these errors before deploying to avoid 404s\n")
  }
}
