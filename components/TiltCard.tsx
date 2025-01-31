import { Tilt } from "@/components/ui/tilt";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function TiltCard({
  img,
  title,
  desc,
  live,
  github
}: {
  img?: string;
  title?: string;
  desc?: string;
  live?: string;
  github?: string;
}) {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: "12px"
        }}
        className="flex relative flex-col overflow-hidden border-2 border-zinc-900 "
      >
        <img src={img} alt={title} className="h-48 w-full object-cover brightness-90" />
        <div className="text-center relative pt-1 pb-2">
          <h1 className="font-bold text-xl text-zinc-950 dark:text-zinc-50 mb-1">
            {title}
          </h1>
          <p className="text-zinc-700 dark:text-zinc-500 text-sm px-2">{desc}</p>
          <div className="absolute flex justify-between items-center w-full top-0">
            <a
              href={live}
              className="px-2 py-1.5 flex justify-center items-center gap-2 rounded-lg cursor-pointer"
            >
              <CiLocationArrow1 size={24} fill="yellow"/>
            </a>
            <a
              href={github}
              className="px-2 py-1.5 flex justify-center items-center gap-2 rounded-lg cursor-pointer"
            >
              <FaGithub size={24} fill="purple"/>
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export { TiltCard };
