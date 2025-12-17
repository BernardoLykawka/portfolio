"use client";
import React from "react";

import { subtitle, title } from "@/components/utils/primitives";
import useProjects from "../../components/projects/ProjectsList.hook";
import ProjectsList from "@/components/projects/ProjectsList";

import Projects from "@/components/projects/Projects";
import { useTranslation } from "react-i18next";

export default function Home() {
  const projects = useProjects();
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center justify-center gap-10 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ size: "md", color: "yellow" })}>{t("projects.title")}</span>
        <span className={subtitle() + " text-center"}>{t("projects.description")}</span>
      </div>
        <Projects/>
      <ProjectsList />
    </section>
  );
}
