"use client";

import { subtitle } from "../utils/primitives";
import { Image } from "@heroui/image";
import {Tooltip} from "@heroui/tooltip";
import {Tabs, Tab} from "@heroui/tabs";
import NextImage from "next/image";
import { useTranslation } from "react-i18next";

const techs = [ "../react.svg", "../CSS.svg", "../tailwind.svg","../Python.svg", "../nestjs.svg", "../TypeScript.svg", "../Java.svg", "../Swift.svg"  ,"../docker.svg", "../postgres.svg", "../mongodb.svg" ];
const techCategories = [
  { key: "frontend", title: "Frontend", techs: techs.slice(0, 3) },
  { key: "backend", title: "Backend", techs: techs.slice(3, 8) },
  { key: "tools", title: "Tools & Databases", techs: techs.slice(8, 11) }
];

export default function AboutMe() {
  const { t } = useTranslation();

  return <div className="grid grid-cols-1 md:grid-cols-2 py-8 md:py-10 gap-0">
    <div>
      <span className={subtitle({className: "whitespace-pre-line text-foreground text-center max-w-[65ch] leading-relaxed"})}><strong className="text-cyan-500">{t("aboutMe.fullstack")}</strong> {t("aboutMe.pt2")}

      </span>
      <span className={subtitle({className: "whitespace-pre-line text-foreground text-justify max-w-[65ch] leading-relaxed"})}>
{t("aboutMe.pt3")}
      </span>
      <span className={subtitle({className: "whitespace-pre-line text-foreground text-justify max-w-[65ch] leading-relaxed"})}>
        {t("aboutMe.pt4")}
      </span>
      <span className={subtitle({className: "whitespace-pre-line text-foreground text-justify max-w-[65ch] leading-relaxed"})}>
        {t("aboutMe.pt5")}
      </span>

    </div>
    <div>
      <Tabs aria-label="Technology Stack" variant="underlined" className="flex items-baseline justify-center">
        {techCategories.map((category) => (
          <Tab key={category.key} title={category.title}>
            <ul className="flex justify-center gap-4 flex-wrap pt-4">
              {category.techs.map((tech) => (
                <li key={tech}>
                  <Tooltip content={tech.replace('../', '').replace('.svg', '').toLowerCase()}>
                    <span>
                      <Image
                        as={NextImage}
                        src={`/techs/${tech}`}
                        alt={tech.replace('.svg', '')}
                        width={48}
                        height={48}
                      />
                    </span>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </Tab>
        ))}
      </Tabs>
    </div>
  </div>;
}