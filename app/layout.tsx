import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontQuantico  } from "@/config/fonts";
import { Navbar } from "@/components/widgets/navbar";
import { GravityStarsBackground } from "@/components/background/gravity-stars";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background antialiased",
          fontQuantico.variable,
          "font-quantico",
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <GravityStarsBackground starsCount={100} movementSpeed={0.5} className="fixed inset-0 z-0"/>
          <div className="relative flex flex-col h-full z-10">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-8 md:pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 ">
              <span
                className="flex items-center gap-1 text-current"
              >
                <span className="text-foreground">{siteConfig.email}</span>
              </span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
