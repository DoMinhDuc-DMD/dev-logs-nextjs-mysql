"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  label: React.ReactNode;
  exact?: boolean;
}

export default function SidebarLinks({ href, label, exact = true }: SidebarLinkProps) {
  const pathName = usePathname();
  const isActive = exact ? pathName === href : pathName.startsWith(href);

  return (
    <Link href={href}>
      <li
        className={`mr-1 py-2 pl-3 cursor-pointer hover:text-white hover:bg-blue-400 rounded-r-3xl ${
          isActive ? "text-white bg-blue-400 rounded-r-3xl" : ""
        }`}
      >
        {label}
      </li>
    </Link>
  );
}
