"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, children, onClick, className }: NavLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if this is an anchor link
    if (href.startsWith("#")) {
      e.preventDefault();

      // If we're on the home page, just scroll to the section
      if (window.location.pathname === "/" || window.location.pathname === "") {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // We're on another page, so navigate to home with the hash
        window.location.href = "/" + href;
      }

      // Call the original onClick if provided
      if (onClick) onClick();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`relative group ${className || ""}`}
    >
      <span className="text-lg text-gray-600 group-hover:text-[#B8860B] transition-colors duration-300">
        {children}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B8860B] group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </Link>
  );
}
