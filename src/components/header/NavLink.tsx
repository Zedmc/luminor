"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link href={href} className="relative group" onClick={onClick}>
      <span className="text-lg text-gray-600 group-hover:text-primary transition-colors">
        {children}
      </span>
    </Link>
  );
}
