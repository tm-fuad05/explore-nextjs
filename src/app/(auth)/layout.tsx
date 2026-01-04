"use client";

import { Oxanium } from "next/font/google";
import "../../app/global.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oxanium",
});
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks: string[] = ["login", "register", "forgot-pass"];
  const pathname = usePathname();

  return (
    <div>
      <div className="flex gap-4 mb-6">
        {navLinks.map((link) => {
          const isActive = pathname === `/${link}`;
          console.log(pathname);
          return (
            <Link
              key={link}
              href={`/${link}`}
              className={`capitalize hover:text-blue-100 ${
                isActive ? "text-blue-500 font-semibold" : "text-gray-500"
              }`}
            >
              {link}
            </Link>
          );
        })}
      </div>

      {children}
    </div>
  );
}
