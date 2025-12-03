import { Fira_Code as FontMono, Inter as FontSans, Audiowide, Quantico } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontAudio = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-audio",
});

export const fontQuantico = Quantico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-quantico",
});
