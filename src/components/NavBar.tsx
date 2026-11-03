"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Dashboard" },
  { href: "/tests", label: "Tests" },
  { href: "/history", label: "History" },
];

export default function NavBar() {
  const pathname = usePathname();
  // Hide the chrome during an actual test-taking session so it feels like
  // a real exam screen rather than a website with a nav bar.
  const isTestSession = /\/tests\/[^/]+\/(listening|reading|writing)/.test(pathname ?? "");
  if (isTestSession) return null;

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-sm text-accent-foreground">
            IE
          </span>
          IELTS CD Prep
        </Link>
        <nav className="flex gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-muted hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
