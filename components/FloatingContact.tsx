"use client";

import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AnimatedSocialIcons } from "@/components/ui/floating-action-button";

export function FloatingContact() {
  const socialIcons = [
    {
      Icon: FaGithub,
      href: "https://github.com",
      className: "hover:bg-accent"
    },
    {
      Icon: FaTwitter,
      href: "https://twitter.com"
    },
    {
      Icon: FaLinkedin,
      href: "https://linkedin.com"
    },
    {
      Icon: FaInstagram,
      href: "https://instagram.com"
    }
  ];

  return (
    <div className="fixed z-50 bottom-10 right-10">
      <AnimatedSocialIcons icons={socialIcons} iconSize={20} />
    </div>
  );
}
