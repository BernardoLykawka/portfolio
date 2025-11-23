import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Project = {
  id: string | number;
  name: string;
  description?: string | null;
  language?: string | null;
  languages_url: string;
  html_url: string;
  homepage?: string | null;
};