import useProjects from "@/components/projects/ProjectsList.hook";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { subtitle } from "@/components/utils/primitives";
import { getLanguageIcon } from "@/components/utils/useLanguageIcon";
import { siteConfig } from "@/config/site";

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
                    <p className={subtitle()}>{project.description}</p>
                    <a href={project.html_url}>{project.html_url}</a>
                </AccordionItem>
            ))}
    </Accordion>
      )}
    </>
}