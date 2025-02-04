"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { SparklesText } from "./ui/sparkles-text";
import { LinkPreview } from "./ui/link-preview";
import { TiltCard } from "./TiltCard";

export function About() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black ">
      <SparklesText
        text="About Me"
        className="text-center my-10 z-30 relative"
      />
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="flex justify-center gap-6 items-center flex-col md:flex-row">
        <div className="z-30 relative">
          <TiltCard
            img="hero.jpg"
            title="Abhishek Gupta"
            imgclass="h-96 brightness-100 opacity-100 relative"
          />
        </div>
        <div className="flex justify-center items-start  flex-col px-4 ">
          <p className="text-neutral-50 text-md md:text-xl max-w-3xl text-left mb-4 relative ">
            Visit{" "}
            <LinkPreview
              url="https://example.com"
              imageSrc="/project1.png" // Ensure this is stored in public/
              isStatic
              className="font-bold"
            >
              Aceternity UI{" "}
            </LinkPreview>
            As an aspiring web developer, I am driven by a deep passion for
            creating dynamic and immersive online experiences.
          </p>

          <p className=" text-neutral-50 text-md md:text-xl max-w-3xl mb-4 text-left relative">
            With expertise in the{" "}
            <LinkPreview
              url=""
              imageSrc="/project1.png"
              isStatic
              className="font-bold"
            >
              MERN Stack ,
            </LinkPreview>{" "}
            I differentiate myself by blending modern technologies seamlessly to
            build robust web applications. My professional journey is marked by
            significant milestones, including successful projects and diverse
            achievements that reflect my continuous growth and skills.{" "}
          </p>
          <p className=" text-neutral-50 text-md md:text-xl max-w-3xl mb-4  text-left relative">
            Throughout my development endeavors, I have embraced unique
            experiences and overcome challenges that have shaped my approach to
            crafting innovative solutions.
          </p>
          <p className=" text-neutral-50 text-md md:text-xl max-w-3xl mb-4  text-left relative">
            Grounded in core values like dedication, user-centricity, and a
            commitment to lifelong learning, I prioritize delivering
            high-quality code that seamlessly integrates design and
            functionality.
          </p>
          <p className=" text-neutral-50 text-md md:text-xl max-w-3xl mb-4 text-left relative">
            {" "}
            Effective communication and collaboration with clients are integral
            to my process, as I strive for delivering projects on time, within
            budget, and with atmost client satisfaction.
          </p>
          <p className=" text-neutral-50 text-md md:text-xl max-w-3xl  text-left relative">
            My goal is to make a lasting impact in the web development space,
            and I am eager to create innovative solutions that revolutionize the
            digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
