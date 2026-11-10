import { cn } from "@/lib/utils";

type IconType = "product" | "golf" | "science" | "lifestyle" | "ingredient";

interface PlaceholderImageProps {
  label?: string;
  icon?: IconType;
  aspectRatio?: string;
  className?: string;
  dark?: boolean;
}

function PlaceholderIcon({ icon, dark }: { icon: IconType; dark: boolean }) {
  const color = dark ? "text-white/30" : "text-silver-500/30";

  const icons: Record<IconType, React.ReactNode> = {
    product: (
      <svg
        className={cn("h-12 w-12", color)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
        />
      </svg>
    ),
    golf: (
      <svg
        className={cn("h-12 w-12", color)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h3.75M3 21v-3.75M3 21l7.5-7.5M21 3h-3.75M21 3v3.75M21 3l-7.5 7.5M3 3h3.75M3 3v3.75M3 3l7.5 7.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 10l-1 4 4-1 5-5-3-3-5 5z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v6M9 21h6" />
      </svg>
    ),
    science: (
      <svg
        className={cn("h-12 w-12", color)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M5 14.5l-.938 2.813c-.393 1.18.445 2.437 1.688 2.437h12.5c1.243 0 2.081-1.257 1.688-2.437L19 14.5M5 14.5h14"
        />
      </svg>
    ),
    lifestyle: (
      <svg
        className={cn("h-12 w-12", color)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
    ingredient: (
      <svg
        className={cn("h-12 w-12", color)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3"
        />
      </svg>
    ),
  };

  return <>{icons[icon]}</>;
}

export function PlaceholderImage({
  label,
  icon = "product",
  aspectRatio = "aspect-video",
  className,
  dark = true,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl bg-gradient-to-br",
        dark ? "from-navy-900 to-navy-800" : "from-navy-800 to-navy-900",
        aspectRatio,
        className,
      )}
    >
      <PlaceholderIcon icon={icon} dark={dark} />
      {label && (
        <span
          className={cn(
            "mt-3 text-sm font-medium",
            dark ? "text-white/40" : "text-silver-500/40",
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
