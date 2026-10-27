import Image from "next/image";
import { isPlaceholder, placeholderId } from "@/lib/home";
import { ImagePlaceholder } from "./ImagePlaceholder";

type Props = {
  src: string;
  alt: string;
  label: string;
  ratio: string;
  size?: string;
  tone?: "light" | "navy";
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** A real next/image once `src` is a path; otherwise a labeled placeholder. */
export function Media({ src, alt, label, ratio, size, tone, priority, sizes, className = "" }: Props) {
  if (isPlaceholder(src)) {
    return (
      <ImagePlaceholder
        id={placeholderId(src) ?? src}
        label={label}
        ratio={ratio}
        size={size}
        tone={tone}
        className={className}
      />
    );
  }
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`relative w-full overflow-hidden rounded-hp border border-hp-line ${className}`}
    >
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"} className="object-cover" />
    </div>
  );
}
