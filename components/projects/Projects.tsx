"use client";

import { Image } from "@heroui/image";
import { Card, CardBody, CardHeader } from "@heroui/card";
import NextImage from "next/image";
import { title } from "../utils/primitives";
import Link from "next/link";
import { siteConfig as config } from "@/config/site";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";

const teamImages = [null, null, "/wbd_time.jpeg", "/luckyDraw_time.png"];

const projects = [ "Corre com o Coração", "Learn-Physics" , "WBD +", "Lucky Draw" ];
const links = [config.links.corre, config.links.learnPhysics, config.links.wbd, config.links.luckyDraw];
const images = [config.images.correImage, config.images.learnPhysicsImage, config.images.wbdImage, config.images.luckyDrawImage];

export default function Projects() {
  const { t } = useTranslation();
  const descriptions = [t("projects.correDescription"), t("projects.learnPhysicsDescription"), t("projects.wbdDescription"), t("projects.luckyDrawDescription")];
    return (
        <div>
            <ul className="flex flex-col justify-center gap-4">
                {projects.map((project, index) => {
                    const controls = useAnimation();
                    const ref = useRef(null);
                    useEffect(() => {
                        const observer = new window.IntersectionObserver(
                            ([entry]) => {
                                if (entry.isIntersecting) {
                                    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
                                    observer.disconnect();
                                }
                            },
                            { threshold: 0.2 }
                        );
                        if (ref.current) observer.observe(ref.current);
                        return () => observer.disconnect();
                    }, [controls]);

                    const hasTeam = teamImages[index] !== null;
                    const [showTeam, setShowTeam] = useState(false);

                    return (
                        <motion.li
                            key={index}
                            ref={ref}
                            initial={{ opacity: 0, y: 30 }}
                            animate={controls}
                        >
                            <Card className="border-ring border-2 bg-inherit py-2">
                                <CardHeader className="px-4 flex-col items-start">
                                    <div className="flex items-center gap-2">
                                        {hasTeam && (
                                            <button
                                                aria-label={showTeam ? "Mostrar projeto" : "Mostrar equipe"}
                                                className="p-1 hover:bg-zinc-800 rounded transition-colors"
                                                onClick={() => setShowTeam((v) => !v)}
                                                type="button"
                                            >
                                                <ChevronLeft size={18} className={`transition-transform duration-200 ${showTeam ? "-rotate-180" : "rotate-0"}`} />
                                            </button>
                                        )}
                                        <h4 className={title({ size: "xs", color: "yellow" })}>{project}</h4>
                                    </div>
                                </CardHeader>
                                <CardBody className="overflow-visible grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 py-2">
                                    <>
                                        <motion.div
                                            key={showTeam ? `team-${index}` : `project-${index}`}
                                            initial={{ opacity: 0, x: showTeam ? -40 : 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: showTeam ? 40 : -40 }}
                                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                                            className="w-full"
                                        >
                                            {hasTeam && showTeam ? (
                                                <Link href={links[index]}>
                                                    <Image
                                                        as={NextImage}
                                                        src={teamImages[index] as string}
                                                        alt={`Equipe do projeto ${project}`}
                                                        className="md:object-fill object-cover rounded-xl hover:scale-[1.01] transition-all duration-200 "
                                                        style={{ maxWidth: 500, minHeight: 180, height: 300 }}
                                                        width={800}
                                                        height={300}
                                                    />
                                                </Link>
                                            ) : (
                                                <Link href={links[index]}>
                                                    <Image
                                                        as={NextImage}
                                                        alt="Card background"
                                                        className="md:object-cover object-cover rounded-xl hover:scale-[1.01] transition-all duration-200 w-full aspect-[16/9]"
                                                        style={{ maxWidth: 500, minHeight: 180, height: 300, maxHeight: 300 }}
                                                        src={images[index]}
                                                        width={1920}
                                                        height={1080}
                                                    />
                                                </Link>
                                            )}
                                        </motion.div>
                                    </>
                                    <span className="whitespace-pre-line flex">{descriptions[index]}</span>
                                </CardBody>
                            </Card>
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
}