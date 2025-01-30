"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes"
import { SparklesText } from "./ui/sparkles-text";

export function About() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black ">
      <SparklesText text="About " className="text-center my-14 z-40"/>
      <div className="absolute inset-0 w-full h-full bg-black z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      
    </div>
  );
}