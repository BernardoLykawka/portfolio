import React from "react";
import { GithubIcon } from "@/components/utils/icons";

type LanguageImageProps = {
  language?: string | null;
  size?: number;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const FILE_MAP: Record<string, string> = {
  "C++": "CPP.svg",
  "C#": "Csharp.svg",
  "TypeScript": "TypeScript.svg",
  "JavaScript": "JavaScript.svg",
  "HTML": "HTML.svg",
  "CSS": "CSS.svg",
  "Python": "Python.svg",
  "Go": "Go.svg",
  "Java": "Java.svg",
  "PHP": "PHP.svg",
  "Swift": "Swift.svg",
};

export const LanguageImage: React.FC<LanguageImageProps> = ({
  language,
  size = 24,
  ...props
}) => {
  if (!language) return <GithubIcon size={size} {...(props as any)} />;

  const name = language.trim();
  const filename = FILE_MAP[name];

  if (!filename) return <GithubIcon size={size} {...(props as any)} />;

  return (
    <img
      src={`/${filename}`}
      width={size}
      height={size}
      alt={`${name} icon`}
      style={{ display: "inline-block" }}
      {...(props as any)}
    />
  );
};

export const getLanguageIcon = (language?: string | null, size = 24) => (
  <LanguageImage language={language} size={size} />
);
