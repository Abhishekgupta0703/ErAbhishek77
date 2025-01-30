"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Particles } from "@/components/ui/particles";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { SparklesText } from "./ui/sparkles-text";
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
    <div className="relative h-screen w-full overflow-hidden bg-black md:shadow-xl">
        <SparklesText text="Skills" className="text-center my-14"/>
      <div className="flex items-center justify-center gap-10">
        <div className="relative flex size-full max-w-md items-center justify-center overflow-hidden px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
        <div className="grid grid-cols-4 gap-8">
          <div className="p-10 rounded-xl border">Please</div>
          <div className="p-10 rounded-xl border">Please</div>
          <div className="p-10 rounded-xl border">Please</div>
          <div className="p-10 rounded-xl border">Please</div>
          <div className="p-10 rounded-xl border">Please</div>
          <div className="p-10 rounded-xl border">Please</div>
          <div className="p-10 rounded-xl border">Please</div>
          <div className="p-10 rounded-xl border">Please</div>
          <div className="p-10 rounded-xl border">Please</div>
          <div className="p-10 rounded-xl border">Please</div>
          <div className="p-10 rounded-xl border">Please</div>
          <div className="p-10 rounded-xl border">Please</div>
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
