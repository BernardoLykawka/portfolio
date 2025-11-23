export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Bernardo Portfolio",
  myName: "Bernardo Lykawka Medeiros Silva",
  email: "bernardolmsilvas@gmail.com",
  navItems: [
    {
      label: "About Me",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/BernardoLykawka",
    linkedin: "https://www.linkedin.com/in/bernardolykawka/",
  },
  errors: {
    noProjects: "No projects found.",
    pageNotFound: "The page you are looking for does not exist.",
  },
  projects: {
    description: "Here are some of the projects I've worked on. Feel free to explore and check out the code on GitHub!"
  }
};
