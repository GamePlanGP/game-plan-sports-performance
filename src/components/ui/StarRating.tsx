import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
} as const;

interface StarRatingProps {
  rating: number;
  size?: keyof typeof sizeClasses;
  className?: string;
}

function Star({
  fill,
  sizeClass,
}: {
  fill: "full" | "half" | "empty";
  sizeClass: string;
}) {
  const starPath =
    "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

  if (fill === "full") {
    return (
      <svg
        className={cn(sizeClass, "text-silver-500")}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={starPath} />
      </svg>
    );
  }

  if (fill === "half") {
    const clipId = `half-star-${Math.random().toString(36).slice(2, 9)}`;
    return (
      <svg
        className={cn(sizeClass)}
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width="10" height="20" />
          </clipPath>
        </defs>
        {/* Empty star background */}
        <path d={starPath} fill="currentColor" className="text-gray-300" />
        {/* Filled half */}
        <path
          d={starPath}
          fill="currentColor"
          className="text-silver-500"
          clipPath={`url(#${clipId})`}
        />
      </svg>
    );
  }

  return (
    <svg
      className={cn(sizeClass, "text-gray-300")}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={starPath} />
    </svg>
  );
}

export function StarRating({
  rating,
  size = "md",
  className,
}: StarRatingProps) {
  const clamped = Math.max(0, Math.min(5, rating));
  const fullStars = Math.floor(clamped);
  const hasHalf = clamped - fullStars >= 0.25 && clamped - fullStars < 0.75;
  const adjustedFull = clamped - fullStars >= 0.75 ? fullStars + 1 : fullStars;
  const emptyStars = 5 - adjustedFull - (hasHalf ? 1 : 0);

  const stars: Array<"full" | "half" | "empty"> = [
    ...Array<"full">(adjustedFull).fill("full"),
    ...(hasHalf ? (["half"] as const) : []),
    ...Array<"empty">(emptyStars).fill("empty"),
  ];

  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {stars.map((fill, i) => (
        <Star key={i} fill={fill} sizeClass={sizeClasses[size]} />
      ))}
    </div>
  );
}
