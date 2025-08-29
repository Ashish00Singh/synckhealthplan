"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd
} from "lucide-react"
import log from '../../assites/iconlogo.png'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"

const teams = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
]
export function TeamSwitcher() {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu >
      <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-transparent">

              <div className=" bg-white rounded-full text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center">
                {/* <activeTeam.logo className="size-5" /> */}
                <Image src={log} alt="logo" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate text-2xl text-white">Synck</span>
                <span className="truncate text-xs text-white">Health</span>
              </div>
            </SidebarMenuButton>
          
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
