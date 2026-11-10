"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function AnnouncementBar() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <div className="relative bg-silver-500 py-2 text-navy-950">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <p className="pr-8 text-center text-sm font-medium">
          <span aria-hidden="true">&#10022; </span>
          Coming Soon —{" "}
          <Link
            href="/#waitlist"
            className="underline underline-offset-2 transition-colors hover:text-navy-800"
          >
            Join the waitlist
          </Link>{" "}
          for early access &amp; exclusive pricing
        </p>

        <button
          onClick={() => setIsDismissed(true)}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded transition-colors",
            "text-navy-950/60 hover:bg-navy-950/10 hover:text-navy-950 sm:right-4"
          )}
          aria-label="Dismiss announcement"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="4" x2="4" y2="12" />
            <line x1="4" y1="4" x2="12" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
