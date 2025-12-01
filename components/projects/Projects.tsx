import {Image} from "@heroui/image";
import { Card, CardBody, CardHeader } from "@heroui/card";
import NextImage from "next/image";
import { title } from "../utils/primitives";
import Link from "next/link";
import { siteConfig as config } from "@/config/site";

const projects = [ "Corre com o Coração - ONG", "Learn-Physics" ];
const descriptions = [config.projects.correDescription, config.projects.learnPhysicsDescription];
const links = [config.links.corre, "https://learn-physics.example.com"]

export default function Projects() {
  return <div>
        <ul className="flex flex-col justify-center gap-4">
        {projects.map((project, index) => (
            <li key={index}>
                <Card>
                    <CardHeader className="pt-2 px-4 flex-col items-start">
                        <h4 className={title( { size: "xs", color: "yellow" } )}>{project}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible grid grid-cols-1 md:grid-cols-2 gap-8 py-2">
                      <Link href={links[index]}> 
                        <Image
                            as={NextImage}
                            alt="Card background"
                            className="object-cover rounded-xl hover:scale-[1.01] transition-all duration-200 "
                            src="https://heroui.com/images/hero-card-complete.jpeg"
                            width={500}
                            height={300}
                        />
                        </Link>
                        <span>{descriptions[index]}</span>
                    </CardBody>
                </Card>
            </li>
        ))}
        </ul>
    </div>;
}