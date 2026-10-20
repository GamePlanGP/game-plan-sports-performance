export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/20 animate-pulse">
        <span className="font-display text-2xl font-bold text-gold-500">
          GP
        </span>
      </div>

      <p className="mt-6 text-sm tracking-wide text-silver">
        Loading...
      </p>
    </div>
  );
}
