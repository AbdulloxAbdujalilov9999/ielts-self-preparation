function colorsFor(band: number): string {
  if (band >= 8) return "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300";
  if (band >= 7) return "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300";
  if (band >= 6) return "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300";
  if (band >= 5) return "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300";
  return "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300";
}

export default function BandBadge({ band, size = "md" }: { band: number; size?: "sm" | "md" | "lg" }) {
  const sizeClasses =
    size === "lg" ? "px-4 py-2 text-2xl" : size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";
  return (
    <span className={`inline-flex items-center justify-center rounded-full font-semibold tabular-nums ${sizeClasses} ${colorsFor(band)}`}>
      {band.toFixed(1)}
    </span>
  );
}
