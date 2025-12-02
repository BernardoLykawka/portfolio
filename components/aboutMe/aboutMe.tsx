import { siteConfig } from "@/config/site";
import { subtitle } from "../utils/primitives";
import { Image } from "@heroui/image";
import NextImage from "next/image";

const techs = [ "../react.svg", "../CSS.svg", "../tailwind.svg","../Python.svg", "../nestjs.svg", "../TypeScript.svg", "../Java.svg", "../Swift.svg"  ,"../docker.svg", "../postgres.svg", "../mongo.svg" ];
const frontend = techs.slice(0, 3);
const backend = techs.slice(3, 8);
const tools = techs.slice(8, 11);

export default function AboutMe() {
  return <div>
    <span 
    className={subtitle({className: "whitespace-pre-line text-center max-w-[65ch] leading-relaxed"})}>{siteConfig.AboutMe}
    </span>
    
    <div className="mt-6 space-y-6">
      <div>
        <h3 className="text-center font-semibold mb-3">Frontend</h3>
        <ul className="flex justify-center gap-4 flex-wrap">
          {frontend.map((tech) => (
            <li key={tech}>
              <Image
                as={NextImage}
                src={`/techs/${tech}`}
                alt={tech.replace('.svg', '')}
                width={48}
                height={48}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-center font-semibold mb-3">Backend</h3>
        <ul className="flex justify-center gap-4 flex-wrap">
          {backend.map((tech) => (
            <li key={tech}>
              <Image
                as={NextImage}
                src={`/techs/${tech}`}
                alt={tech.replace('.svg', '')}
                width={48}
                height={48}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-center font-semibold mb-3">Tools & Databases</h3>
        <ul className="flex justify-center gap-4 flex-wrap">
          {tools.map((tech) => (
            <li key={tech}>
              <Image
                as={NextImage}
                src={`/techs/${tech}`}
                alt={tech.replace('.svg', '')}
                width={48}
                height={48}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>;
}