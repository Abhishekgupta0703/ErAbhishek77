"use client";
import React from "react";
import { SparklesText } from "./ui/sparkles-text";
import { TiltCard } from "./TiltCard";

export function Projects() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black md:shadow-xl">
      <SparklesText text="Projects" className="text-center my-14" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6 lg:px-32 px-4">
        {project.map((p) => (
          <TiltCard
            key={p.id}
            title={p.title}
            desc={p.desc}
            img={p.img}
            live={p.live}
            github={p.git}
            imgclass="h-48"
          />
        ))}
      </div>
    </div>
  );
}
const project = [
  {
    id: 1,
    title: "Project 1",
    desc: "This is a description of project 1",
    img: "./project1.png",
    live: "https:github.com/Abhishekgupta0703",
    git: "https:github.com/Abhishekgupta0703"
  },
  {
    id: 2,
    title: "Project 1",
    desc: "This is a description of project 1",
    img: "./project1.png",
    live: "https:github.com/Abhishekgupta0703",
    git: "https:github.com/Abhishekgupta0703"
  },
  {
    id: 3,
    title: "Project 1",
    desc: "This is a description of project 1",
    img: "./project1.png",
    live: "https:github.com/Abhishekgupta0703",
    git: "https:github.com/Abhishekgupta0703"
  },
  {
    id: 4,
    title: "Project 1",
    desc: "This is a description of project 1",
    img: "./project1.png",
    live: "https:github.com/Abhishekgupta0703",
    git: "https:github.com/Abhishekgupta0703"
  },
  {
    id: 5,
    title: "Project 1",
    desc: "This is a description of project 1",
    img: "./project1.png",
    live: "https:github.com/Abhishekgupta0703",
    git: "https:github.com/Abhishekgupta0703"
  },
  {
    id: 6,
    title: "Project 1",
    desc: "This is a description of project 1",
    img: "./project1.png",
    live: "https:github.com/Abhishekgupta0703",
    git: "https:github.com/Abhishekgupta0703"
  },
];
