"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  label: string;
  exact?: boolean;
}

export default function SidebarLinks({ href, label, exact = true }: SidebarLinkProps) {
  const pathName = usePathname();
  const isActive = exact ? pathName === href : pathName.startsWith(href);

  return (
    <Link href={href}>
      <li
        className={`mr-2 py-2 pl-3 cursor-pointer hover:text-white hover:bg-blue-400 rounded-r-2xl ${
          isActive ? "text-white bg-blue-400 rounded-r-2xl" : ""
        }`}
      >
        {label}
      </li>
    </Link>
  );
}
