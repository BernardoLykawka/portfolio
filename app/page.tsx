import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/utils/primitives";
import { GithubIcon, LinkedInIcon } from "@/components/utils/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "cyan"   })}>Bernardo Lykawka Medeiros Silva</span>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ className:"hover:text-cyan-500 hover:border-cyan-500" , variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
        <Link
          isExternal
          className={buttonStyles({ className: "hover:text-cyan-500 hover:border-cyan-500", variant: "bordered", radius: "full" })}
          href={siteConfig.links.linkedin}
        >
          <LinkedInIcon size={20} />
          LinkedIn
        </Link>

      </div>
    </section>
  );
}
