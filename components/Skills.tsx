"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Particles } from "@/components/ui/particles";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { SparklesText } from "./ui/sparkles-text";
import { HoverEffect } from "./ui/hover-effect";
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma"
];
export function Skills() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#ffffff");
  }, [theme]);

  return (
    <div className="relative md:h-screen w-full overflow-hidden bg-black md:shadow-xl">
      <SparklesText text="Skills" className="text-center my-14" />
      <div className="flex flex-col items-center justify-center gap-2 md:gap-5 md:flex-row">
        <div className="relative flex size-full max-w-md items-center justify-center overflow-hidden px-8 md:pl-32 md:pr-0 pb-10 md:pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
        <div className="max-w-4xl mx-auto px-8">
          <HoverEffect items={skill} />
          
        </div>
      </div>
      <Particles
        className="absolute z-20 inset-0"
        quantity={150}
        ease={1}
        color={color}
        refresh
      />
    </div>
  );
}
export const skill = [
  {
    title: "Web Development",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com"
  },
  {
    title: "Web Development",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com"
  },
  {
    title: "Web Development",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com"
  },
  {
    title: "Web Development",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com"
  },
  {
    title: "Web Development",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com"
  },
  {
    title: "Web Development",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com"
  },
];
