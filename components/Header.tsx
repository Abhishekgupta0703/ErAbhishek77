"use client"

import * as React from "react" // Import React
import { Home,  CreditCard, Info } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const items = [
  {
    name: "Home",
    url: "#",
    href: "#",
    icon: Home,
  },
  {
    name: "About",
    url: "#",
    href: "#",
    icon: Info,
  },
  {
    name: "Skills",
    url: "#",
    href: "#",
    icon: CreditCard,
  },
  {
    name: "Projects",
    url: "#",
    href: "#",
    icon: Info,
  },
  {
    name: "Contacts",
    url: "#",
    href: "#",
    icon: Info,
  },
]

export function Header() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}
