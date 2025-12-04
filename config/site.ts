import AboutMe from "@/components/aboutMe/aboutMe";

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
    corre:"https://correcomocoracao.ong.br", 
    wbd: "https://tools.ages.pucrs.br/wimbelemdon-mais/wiki/-/wikis/home",
    luckyDraw: "https://tools.ages.pucrs.br/lucky-draw/wiki/-/wikis/home"
  },
  errors: {
    noProjects: "No projects found.",
    pageNotFound: "The page you are looking for does not exist.",
  },
  
  images: {
    correImage: "https://heroui.com/images/hero-card-complete.jpeg",
    learnPhysicsImage: "https://heroui.com/images/hero-card-complete.jpeg",
    wbdImage: "/wbd.png",
    luckyDrawImage: "/LuckyDraw.png",
  }
};
