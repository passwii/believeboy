import { cn } from "@/lib/utils";

interface MetricItemProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricItem({ value, label, className }: MetricItemProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <p className="font-mono text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">{value}</p>
      <p className="text-sm leading-relaxed text-zinc-600">{label}</p>
    </div>
  );
}
