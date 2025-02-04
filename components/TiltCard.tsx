import { Tilt } from "@/components/ui/tilt";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function TiltCard({
  img,
  title,
  desc,
  live,
  github,
  imgclass
}: {
  img?: string;
  title?: string;
  desc?: string;
  live?: string;
  github?: string;
  imgclass?: string;
}) {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: "12px"
        }}
        className="flex relative flex-col overflow-hidden border-2 border-zinc-900 "
      >
        <img
          src={img}
          alt={title}
          className= {` w-full object-cover brightness-90 ${imgclass}`}
        />
        <div className="text-center relative pt-1 pb-2">
          {title && (
            <h1 className="font-bold text-xl text-zinc-950 dark:text-zinc-50 mb-1">
              {title}
            </h1>
          )}
          {desc && (
            <p className="text-zinc-700 dark:text-zinc-500 text-sm px-2">
              {desc}
            </p>
          )}
          <div className="absolute flex justify-between items-center w-full top-0">
            {live && (
              <a
                href={live}
                className="px-2 py-1.5 flex justify-center items-center gap-2 rounded-lg cursor-pointer"
              >
                <CiLocationArrow1 size={24} fill="yellow" />
              </a>
            )}
            {github && (
              <a
                href={github}
                className="px-2 py-1.5 flex justify-center items-center gap-2 rounded-lg cursor-pointer text-[]"
              >
                <FaGithub size={24} fill="#9a27cb" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export { TiltCard };
