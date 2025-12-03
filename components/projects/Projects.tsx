import {Image} from "@heroui/image";
import { Card, CardBody, CardHeader } from "@heroui/card";
import NextImage from "next/image";
import { title } from "../utils/primitives";
import Link from "next/link";
import { siteConfig as config } from "@/config/site";

const projects = [ "Corre com o Coração", "Learn-Physics" , "WBD +", "Lucky Draw" ];
const descriptions = [config.projects.correDescription, config.projects.learnPhysicsDescription, config.projects.wbdDescription, config.projects.luckyDrawDescription];
const links = [config.links.corre, "https://learn-physics.example.com", config.links.wbd, config.links.luckyDraw];
const images = [config.images.correImage, config.images.learnPhysicsImage, config.images.wbdImage, config.images.luckyDrawImage];

export default function Projects() {
  return <div>
        <ul className="flex flex-col justify-center gap-4">
        {projects.map((project, index) => (
            <li key={index}>
                <Card className="border-ring border-2 bg-inherit py-2">
                    <CardHeader className="px-4 flex-col items-start">
                        <h4 className={title( { size: "xs", color: "yellow" } )}>{project}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 py-2">
                        <>
                      <Link href={links[index]}> 
                        <Image
                            as={NextImage}
                            alt="Card background"
                            className="md:object-fill object-cover rounded-xl hover:scale-[1.01] transition-all duration-200"
                            src={images[index]}
                            width={500}
                            height={300}
                        />
                        </Link>
                        </>
                        <span className="whitespace-pre-line flex">{descriptions[index]}</span>
                    </CardBody>
                </Card>
            </li>
        ))}
        </ul>
    </div>;
}