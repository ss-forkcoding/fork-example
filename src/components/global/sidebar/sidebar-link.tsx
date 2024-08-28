"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarLinkProps = {
  href: string;
  label: string;
};

const SidebarLink = ({ href, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === `${href}`;
  return (
    <Link
      href={`${href}`}
      className={`${
        isActive ? "text-orange-500" : "text-slate-500"
      } transition-colors duration-300 hover:text-orange-500 text-sm`}
    >
      {label}
    </Link>
  );
};

export default SidebarLink;
