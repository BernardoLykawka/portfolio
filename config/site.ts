export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portfolio - Bernardo Lykawka",
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
    corre:"https://correcomocoracao.ong.br", 
    wbd: "https://tools.ages.pucrs.br/wimbelemdon-mais",
    luckyDraw: "https://tools.ages.pucrs.br/lucky-draw",
    learnPhysics: "https://physics-flax.vercel.app",
  },
  errors: {
    noProjects: "No projects found.",
    pageNotFound: "The page you are looking for does not exist.",
  },
  
  images: {
    correImage: "/corre.png",
    learnPhysicsImage: "/physics.png",
    wbdImage: "/wbd.png",
    luckyDrawImage: "/LuckyDraw.png",
  }
};
