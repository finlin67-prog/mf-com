"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Building2, Stethoscope, Factory, ShoppingCart, Package, TrendingUp } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const expertiseCategories = [
  {
    title: "Content & Engagement",
    items: [
      "Content Marketing",
      "Email Marketing",
      "Omnichannel Marketing",
      "Social Media Marketing",
      "Video Marketing",
    ],
  },
  {
    title: "Demand & Growth",
    items: [
      "Demand Generation",
      "Search Engine Optimization",
      "Growth Marketing",
      "Paid Advertising (SEM)",
      "Event Marketing",
    ],
  },
  {
    title: "Strategy & Insights",
    items: [
      "Account-Based Marketing (ABM)",
      "Customer Experience (CX)",
      "Customer Marketing",
      "Lifecycle Marketing",
      "Market Research",
    ],
  },
  {
    title: "Systems & Operations",
    items: [
      "AI in Marketing",
      "Marketing Automation",
      "Marketing Operations",
      "MarTech Optimization",
      "Sales Enablement",
    ],
  },
]

const industries = [
  {
    name: "Financial Services",
    icon: Building2,
    href: "/industries/financial-services",
    description: "Banking, insurance, and fintech solutions",
  },
  {
    name: "Healthcare",
    icon: Stethoscope,
    href: "/industries/healthcare",
    description: "Healthcare technology and medical devices",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    href: "/industries/manufacturing",
    description: "Industrial and manufacturing technology",
  },
  {
    name: "Retail",
    icon: ShoppingCart,
    href: "/industries/retail",
    description: "Retail technology and e-commerce",
  },
  {
    name: "SaaS",
    icon: Package,
    href: "/industries/saas",
    description: "Software as a Service platforms",
  },
  {
    name: "Logistics",
    icon: TrendingUp,
    href: "/industries/logistics",
    description: "Supply chain and logistics technology",
  },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-foreground">
              GTMStack<span className="text-primary">.pro</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/expertise" legacyBehavior passHref>
                  <NavigationMenuTrigger className="text-sm font-medium">Expertise</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <div className="grid w-[800px] grid-cols-4 gap-3 p-6">
                    {expertiseCategories.map((category) => (
                      <div key={category.title} className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">{category.title}</h4>
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item}>
                              <Link
                                href={`/expertise/${item.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "")}`}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/industries" legacyBehavior passHref>
                  <NavigationMenuTrigger className="text-sm font-medium">Industries</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <div className="w-[500px] p-6">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Industry Expertise</h4>
                      <p className="text-xs text-muted-foreground">
                        Deep vertical experience across diverse B2B sectors
                      </p>
                    </div>
                    <ul className="grid grid-cols-2 gap-3">
                      {industries.map((industry) => (
                        <li key={industry.name}>
                          <Link
                            href={industry.href}
                            className="flex items-start gap-3 rounded-lg p-3 hover:bg-muted transition-colors group"
                          >
                            <div className="rounded-md bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
                              <industry.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {industry.name}
                              </div>
                              <div className="text-xs text-muted-foreground line-clamp-2 mt-1">
                                {industry.description}
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contact">Book Strategy Session</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container mx-auto flex flex-col gap-4 px-6 py-4">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/expertise"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Expertise
            </Link>
            <Link
              href="/industries"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="mt-2">
              <Link href="/contact">Book Strategy Session</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
