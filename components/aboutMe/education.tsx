"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Slider } from "@heroui/slider";
import { motion, AnimatePresence } from "framer-motion";


import { useState } from "react";
import { useTranslation } from "react-i18next";
import { title } from "../utils/primitives";

export default function Education() {
  const { t } = useTranslation();
  const educationList = [
    {
      degree: t("education1.degree"),
      institution: t("education1.institution"),
      period: t("education1.period")
    },
    {
      degree: t("education2.degree"),
      institution: t("education2.institution"),
      period: t("education2.period")
    },
    {
      degree: t("education3.degree"),
      institution: t("education3.institution"),
      period: t("education3.period")
    },
    {
      degree: t("education4.degree"),
      institution: t("education4.institution"),
      period: t("education4.period")
    },
    {
        degree: t("education5.degree"),
        institution: t("education5.institution"),
        period: t("education5.period")
      }
  ];

  const [selected, setSelected] = useState(1);

  const item = educationList[selected - 1];

  return (
    <div className="flex flex-col gap-8">
       <h2 className={`${title({ size: "xs", color: "cyan" })} text-center`}>{t("educationTitle")}</h2>
      <Slider
        className="w-80 md:w-120"
        color="foreground"
        value={selected}
        defaultValue={1}
        maxValue={5}
        minValue={1}
        showSteps={true}
        size="md"
        step={1}
        onChange={(value) => setSelected(value as number)}
      />
      <div className="relative min-h-[120px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute w-full"
          >
            <Card className="border-ring border-2 bg-inherit py-2">
              <CardHeader className="justify-center">
                <span className="font-semibold text-lg">{item.degree}</span>
              </CardHeader>
              <CardBody>
                <div className="flex flex-col items-center">
                  <span className="whitespace-pre-line text-md text-center justify-center">{item.institution}</span>
                  <span className="text-xs text-muted-foreground">{item.period}</span>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

