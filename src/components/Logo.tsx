import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-slate-900";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Veraloom home"
    >
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-veraloom-gradient text-white shadow-md shadow-veraloom-600/30"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            d="M4 5c4 0 4 14 8 14s4-14 8-14"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M4 12c4 0 4 7 8 7s4-7 8-7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </span>
      <span className={`text-lg font-semibold tracking-tight ${textColor}`}>
        Veraloom
      </span>
    </Link>
  );
}
