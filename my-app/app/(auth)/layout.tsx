"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";
const navLinks = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forget-Password",
    href: "/forget-password",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((item) => {
        const isActive = pathname.startsWith(item.name);

        return (
          <h2>
            <Link
              href={item.href}
              key={item.name}
              className={isActive ? "font-bold text-white" : "text-blue"}
            >
              {item.name}
            </Link>
          </h2>
        );
      })}
      {children}
    </div>
  );
}
