"use client";

import Link from "next/link";
// import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="relative group">
      <span className="text-lg text-gray-600 group-hover:text-primary transition-colors">
        {children}
      </span>
      {/* <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
        whileHover={{ width: "100%" }}
      /> */}
    </Link>
  );
}
