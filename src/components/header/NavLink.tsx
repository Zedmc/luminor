"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  delayOffset?: number;
}

export function NavLink({
  href,
  children,
  onClick,
  className,
}: NavLinkProps) {

  return (
    <motion.div
      initial={{ filter: "blur(8px)", opacity: 0 }}
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className={`relative group ${className || ""}`}
    >
      <Link href={href} onClick={onClick}>
        <span className="text-lg text-gray-600 group-hover:text-[#B8860B] transition-colors duration-300">
          {children}
        </span>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B8860B] group-hover:w-full transition-all duration-300 ease-in-out"></span>
      </Link>
    </motion.div>
  );
}
