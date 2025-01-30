"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { GooeyText } from "./ui/gooey-text-morphing";

export function Hero() {
  return (
    <Card className="w-full h-[670px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />

      <div className="flex h-full flex-col md:flex-row justify-center ">
        {/* Left content */}
        <div className="flex-1 h-full flex items-center justify-end">
          <div className="p-8 relative z-10 flex flex-col justify-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-100">
  I&apos;m

            <GooeyText
                    texts={["Engineer", "Developer", "Awesome","Designer","Human"]}
                    morphTime={1}
                    cooldownTime={0.25}
                    className="font-bold "
                  /></h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              Bring your UI to life with beautiful 3D scenes. Create immersive
              experiences that capture attention and enhance your design.
            </p>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
