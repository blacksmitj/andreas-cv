"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

type Props = { label: string; href: string; icon?: LucideIcon };

export const SidebarItem = ({ label, href, icon: Icon }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      variant={isActive ? "sidebarActive" : "sidebar"}
      className="w-full h-full aspect-square"
      asChild
    >
      <Link href={href} className="flex-col flex items-center ">
        {Icon && (
          <Icon
            fill={isActive ? "currentColor" : "none"}
            className="size-6 mb-1"
          />
        )}
        {label}
      </Link>
    </Button>
  );
};
