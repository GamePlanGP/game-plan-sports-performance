"use client";

import { LAUNCH_MODE, cta } from "@/content/homepage";
import { track } from "@/lib/track";
import { Button } from "./Button";

type Props = {
  /** Where on the page this CTA lives (analytics). */
  location: string;
  size?: "md" | "sm";
  onDark?: boolean;
  full?: boolean;
  className?: string;
};

/** Every buy CTA: "Get Clarity+" → #buy when live, "Join the launch list" → #join in prelaunch. */
export function LaunchCta({ location, size, onDark, full, className }: Props) {
  const prelaunch = LAUNCH_MODE === "prelaunch";
  return (
    <Button
      href={prelaunch ? "#join" : "#buy"}
      size={size}
      onDark={onDark}
      full={full}
      className={className}
      onClick={() => track("cta_click", { location, mode: LAUNCH_MODE })}
    >
      {prelaunch ? cta.prelaunch : cta.get}
    </Button>
  );
}
