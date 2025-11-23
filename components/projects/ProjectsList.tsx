import useProjects from "@/components/projects/hook";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { subtitle } from "@/components/utils/primitives";
import { getLanguageIcon } from "@/components/utils/languageIcon";

export default function ProjectsList() {
    const projects = useProjects();
    return <>
    {projects.length === 0 ? (<p>No projects found.</p>) : (
    <Accordion variant="bordered">
        {projects
            .filter(project => project.name !== "BernardoLykawka")
            .map((project) => (
                <AccordionItem 
                className="hover:shadow-lg hover:scale-[1.005] transition-all duration-200"
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