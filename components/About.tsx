"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes"
import { SparklesText } from "./ui/sparkles-text";

export function About() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black ">
      <SparklesText text="About Me" className="text-center my-10 z-30 relative"/>
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="flex">

      </div>
      
    </div>
  );
}