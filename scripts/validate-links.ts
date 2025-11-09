import { validateCrossLinks, printValidationResults } from "../lib/validate-links"

const result = validateCrossLinks()
printValidationResults(result)
process.exit(result.valid ? 0 : 1)
