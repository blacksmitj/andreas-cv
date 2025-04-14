import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  label: string;
  href: string;
};

export const LinkNavigation = ({ label, href }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "hover:cursor-pointer hover:text-accent hover:underline-offset-4 hover:underline",
          isActive && "underline underline-offset-4 text-accent"
        )}
      >
        {label}
      </Link>
    </li>
  );
};
