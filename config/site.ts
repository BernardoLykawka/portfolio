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
  projects: {
    description: " Here are some of the projects I've worked on. Feel free to explore and check out the code on GitHub!",
    correDescription: "As a volunteer, I developed the responsive landing page for \"Corre com o Coração\" an NGO dedicated to preventing undiagnosed heart conditions in young athletes.\n\nUsing Next.js and TailwindCSS, I built a high-performance, accessible web application deployed on Vercel. I also led the SEO strategy to maximize the organization's visibility, directly supporting their mission to save lives through awareness and early diagnosis.",
    learnPhysicsDescription: "Learn-Physics project description here.",
    wbdDescription: "During my fourth semester at the Experimental Software Engineering Agency (AGES), I developed the \"WBD+ Social Impact Monitoring\" platform for the non-profit WimBelemDon. This responsive web application streamlines workshop management and generates strategic impact reports to aid in transparency and fundraising.\n\n The project utilizes a robust technology stack featuring a React frontend for dynamic interaction and a modular NestJS (TypeScript) backend. This architecture was specifically chosen to ensure scalability, testability, and high performance via the Node.js ecosystem, effectively bridging academic development with real-world social impact.",
    luckyDrawDescription: "During my third semester, I developed \"Lucky Draw\" within the Experimental Software Engineering Agency (AGES), an immersive academic course designed to simulate a professional software environment. The app addresses creative block by gamifying the artistic process with random, tarot-inspired drawing themes.\n\n As a Fullstack developer, We built the mobile interface using React Native and a robust API with Java Spring Boot and PostgreSQL, utilizing Docker for environment orchestration. This project was pivotal in refining my technical skills and collaborative abilities in a team setting.",
  },

  images: {
    correImage: "https://heroui.com/images/hero-card-complete.jpeg",
    learnPhysicsImage: "https://heroui.com/images/hero-card-complete.jpeg",
    wbdImage: "/wbd.png",
    luckyDrawImage: "/LuckyDraw.png",
  }
};
