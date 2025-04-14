"use client";

import { cn } from "@/lib/utils";
import SidebarItem from "./sidebar-item";
import { AppWindow, Briefcase, HomeIcon, Presentation } from "lucide-react";

type Props = { className?: string };

export const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn("w-[100px]", className)}>
      <nav className="flex flex-col w-full">
        <SidebarItem label="Home" href="/" icon={HomeIcon} />
        <SidebarItem label="Projects" href="/projects" icon={Presentation} />
        <SidebarItem label="Timeline" href="/timeline" icon={Briefcase} />
        <SidebarItem label="Skills" href="/skills" icon={AppWindow} />
      </nav>
    </div>
  );
};
