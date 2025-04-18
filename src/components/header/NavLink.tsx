"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, children, onClick, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`relative group ${className || ""}`}
      onClick={onClick}
    >
      <span className="text-lg text-gray-600 group-hover:text-[#B8860B] transition-colors duration-300">
        {children}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B8860B] group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </Link>
  );
}
