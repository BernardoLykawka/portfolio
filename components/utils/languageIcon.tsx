import React from "react";
import { GithubIcon } from "@/components/utils/icons";

type LanguageImageProps = {
  language?: string | null;
  size?: number;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const LANGUAGE_MAP: Record<string, string> = {
  "C++": "cpp",
  "C#": "csharp",
  "C": "c",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "HTML": "html",
  "CSS": "css",
  "Python": "python",
  "Go": "go",
  "Java": "java",
  "PHP": "php",
  "Swift": "swift",
};

export const LanguageImage: React.FC<LanguageImageProps> = ({
  language,
  size = 24,
  ...props
}) => {
  const [index, setIndex] = React.useState(0);

  if (!language) return <GithubIcon size={size} {...(props as any)} />;

  const name = language.trim();

  const candidates = [
    `/${encodeURIComponent(name)}.svg`,
    `/${encodeURIComponent(name.toLowerCase())}.svg`,
    `/${encodeURIComponent(name.replace(/\s+/g, ""))}.svg`,
    `/${encodeURIComponent(name.replace(/\s+/g, "").toLowerCase())}.svg`,
  ];

  const mapped = LANGUAGE_MAP[name];
  if (mapped) {
    candidates.push(`/${encodeURIComponent(mapped)}.svg`);
    candidates.push(`/${encodeURIComponent(mapped.toLowerCase())}.svg`);
  }

  const uniq = Array.from(new Set(candidates)).filter(Boolean);

  if (index >= uniq.length) return <GithubIcon size={size} {...(props as any)} />;

  const src = uniq[index];

  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={`${name} icon`}
      onError={() => setIndex((i) => i + 1)}
      style={{ display: "inline-block" }}
      {...(props as any)}
    />
  );
};

export const getLanguageIcon = (language?: string | null, size = 24) => (
  <LanguageImage language={language} size={size} />
);
