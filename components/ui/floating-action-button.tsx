'use client';

import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SocialIcon {
  Icon: React.ElementType;  // Fixed Type
  href?: string;
  className?: string;
}

interface AnimatedSocialIconsProps {
  icons: SocialIcon[];
  className?: string;
  iconSize?: number;
}

export function AnimatedSocialIcons({
  icons,
  className,
  iconSize = 20,
}: AnimatedSocialIconsProps) {
  const [active, setActive] = useState(false);
  const buttonSize = "size-10 sm:size-16";

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Floating Button */}
      <motion.button
        className={cn(
          buttonSize,
          "rounded-full flex items-center justify-center",
          "bg-primary hover:bg-primary/90 transition-colors z-20"
        )}
        onClick={() => setActive(!active)}
        animate={{ rotate: active ? 45 : 0 }}
        transition={{
          type: "ease-in",
          duration: 0.5,
        }}
      >
        <FaPlus size={iconSize} strokeWidth={3} className="text-primary-foreground" />
      </motion.button>

      <motion.div
        className="absolute flex flex-col items-center gap-3 bottom-full mb-4"
        initial={false}
        animate={{
          opacity: active ? 1 : 0,
          scale: active ? 1 : 0.8,
          y: active ? 0 : 20,
          filter: active ? "blur(0px)" : "blur(2px)",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        {icons.map(({ Icon, href, className }, index) => (
          <motion.div
            key={index}
            className={cn(
              buttonSize,
              "rounded-full flex items-center justify-center",
              "bg-background shadow-lg hover:shadow-xl",
              "border border-border z-10",
              className
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Icon size={iconSize} className="text-muted-foreground transition-all hover:text-foreground" />
              </a>
            ) : (
              <Icon size={iconSize} className="text-muted-foreground transition-all hover:text-foreground" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
