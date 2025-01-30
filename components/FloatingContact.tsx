"use client";

import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Facebook
} from "lucide-react";
import { AnimatedSocialIcons } from "@/components/ui/floating-action-button";

export function FloatingContact() {
  const socialIcons = [
    {
      Icon: Github,
      href: "https://github.com",
      className: "hover:bg-accent"
    },
    {
      Icon: Twitter,
      href: "https://twitter.com"
    },
    {
      Icon: Linkedin,
      href: "https://linkedin.com"
    },
    {
      Icon: Instagram,
      href: "https://instagram.com"
    }
  ];

  return (
    <div className="fixed z-50 bottom-10 right-10">
      <AnimatedSocialIcons icons={socialIcons} iconSize={20} />
    </div>
  );
}
