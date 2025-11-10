import { link } from "fs";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Bernardo Portfolio",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "About Me",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/BernardoLykawka",
    linkedin: "https://www.linkedin.com/in/bernardolykawka/",
  },
};
