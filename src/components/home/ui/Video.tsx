"use client";

import { useEffect, useRef, useState } from "react";
import { isPlaceholder, placeholderId } from "@/lib/home";
import { ImagePlaceholder } from "./ImagePlaceholder";

type Props = {
  src: string;
  poster: string;
  alt: string;
  label: string;
  size?: string;
  ratio: string;
};

/**
 * Muted, inline, lazy-loaded video. Autoplays on loop once in view unless the
 * viewer prefers reduced motion; then it shows the poster with a play button.
 */
export function Video({ src, poster, alt, label, size, ratio }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    if (mq.matches) return () => mq.removeEventListener("change", sync);

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void el.play().catch(() => {});
      else el.pause();
    });
    io.observe(el);
    return () => {
      io.disconnect();
      mq.removeEventListener("change", sync);
    };
  }, []);

  if (isPlaceholder(src)) {
    return <ImagePlaceholder id={placeholderId(src) ?? src} label={label} ratio={ratio} size={size} />;
  }
  return (
    <video
      ref={ref}
      src={src}
      poster={isPlaceholder(poster) ? undefined : poster}
      muted
      playsInline
      loop={!reduced}
      preload="none"
      controls={reduced}
      aria-label={alt}
      style={{ aspectRatio: ratio }}
      className="w-full rounded-hp border border-hp-line bg-hp-tint-2 object-cover"
    />
  );
}
