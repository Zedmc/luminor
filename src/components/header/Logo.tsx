"use client";

import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center">
      <Image
        width={32}
        height={32}
        src="/logo-cropped.svg"
        alt="logo"
        className="w-14 h-14 md:w-10 md:h-10 text-[#B8860B]"
      />
      <span className="hidden md:block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
        Luminor
      </span>
    </Link>
  );
}
