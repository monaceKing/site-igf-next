import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-[10px] px-5 py-[11px] text-sm font-semibold transition-transform active:scale-[0.97]";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-ink hover:brightness-[1.06]"
      : "border border-line hover:border-accent";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
