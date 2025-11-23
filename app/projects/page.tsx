"use client";
import React from "react";
import { Link } from "@heroui/link";

import { title } from "@/components/utils/primitives";
import useProjects from "../../components/projects/hook";
import ProjectsList from "@/components/projects/ProjectsList";

export default function Home() {
  const projects = useProjects();

  return (
    <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ size: "md", color: "violet" })}>My Projects</span>
      </div>

      <div className="flex gap-3">
      </div>
      <ProjectsList />
    </section>
  );
}
