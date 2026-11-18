// Site-wide constants and configuration
export const siteConfig = {
  name: "Logix",
  tagline: "Building Tomorrow's Software Today",
  description:
    "We craft world-class digital products that drive business growth. Custom software development, web applications, mobile apps, and enterprise solutions.",
  url: "https://logix.dev",
  email: "hello@logix.dev",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech Valley, CA 94025",
  social: {
    twitter: "https://twitter.com/logix",
    linkedin: "https://linkedin.com/company/logix",
    github: "https://github.com/logix",
    instagram: "https://instagram.com/logix",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;
