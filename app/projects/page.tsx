"use client";
import React from "react";
import { Link } from "@heroui/link";

import { subtitle, title } from "@/components/utils/primitives";
import useProjects from "../../components/projects/ProjectsList.hook";
import ProjectsList from "@/components/projects/ProjectsList";
import { siteConfig } from "@/config/site";

export default function Home() {
  const projects = useProjects();

  return (
    <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ size: "md", color: "yellow" })}>My Projects</span>
      </div>
        <span className={subtitle() + " text-center"}>{siteConfig.projects.description}</span>
      <div className="flex gap-3">
      </div>
      <ProjectsList />
    </section>
  );
}
