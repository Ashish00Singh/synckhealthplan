"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { LuPanelLeft } from "react-icons/lu"

export function CustomSidebarButton() {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      onClick={toggleSidebar}
      className="p-2 rounded-md  text-white hover:bg-blue-600"
    >
      <LuPanelLeft size={30} />
    </button>
  )
}
