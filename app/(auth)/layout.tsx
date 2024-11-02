"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forget Password", href: "/forget-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <h2 key={link.name}>
            <Link
              className={isActive ? "font-bold mr-4" : "text-blue-500"}
              href={link.href}
            >
              {link.name}
            </Link>
          </h2>
        );
      })}
      {children}
    </div>
  );
}
