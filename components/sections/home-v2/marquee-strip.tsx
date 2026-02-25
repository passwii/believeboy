interface MarqueeStripProps {
  items: Array<{ label: string }>;
}

export function MarqueeStrip({ items }: MarqueeStripProps) {
  const loopItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="home-v2-marquee flex min-w-max items-center gap-3 px-4 py-4 md:gap-5">
        {loopItems.map((item, index) => (
          <span
            key={`${item.label}-${index}`}
            className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700"
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
