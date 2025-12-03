import useProjects from "@/components/projects/ProjectsList.hook";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { subtitle } from "@/components/utils/primitives";
import { getLanguageIcon } from "@/components/utils/useLanguageIcon";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "../utils/icons";

export default function ProjectsList() {
    const projects = useProjects();

    return <>
    {projects.length === 0 ? (<p>{siteConfig.errors.noProjects}</p>) : (
    <Accordion variant="bordered">
        {projects
            .filter(project => project.name !== "BernardoLykawka")
            .map((project) => (
                <AccordionItem 
                    className="hover:scale-[1.005] transition-all duration-200"
                    key={project.id} 
                    title={project.name} 
                    aria-label={`Project: ${project.name}`}
                    startContent={<>{getLanguageIcon(project.language, 24)}</>}
                >
                    <div className={subtitle()}>{project.description}</div>
                    <a className="flex flex-row gap-2 items-center" href={project.html_url}><GithubIcon />See more</a>
                </AccordionItem>
            ))}
    </Accordion>
      )}
    </>
}