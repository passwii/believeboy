import { FadeIn } from "@/components/effects/fade-in";
import { MetricItem } from "@/components/sections/home-v2/metric-item";
import { SectionEyebrow, SectionShell } from "@/components/sections/home-v2/section-shell";
import { stats } from "./data";

export function StatsSection() {
  return (
    <SectionShell className="bg-zinc-50">
      <FadeIn className="mb-10 space-y-4 md:mb-12">
        <SectionEyebrow>Operational Metrics</SectionEyebrow>
        <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">关键指标持续增长，交付效率可被复盘</h2>
        <p className="max-w-[62ch] text-base leading-relaxed text-zinc-600 md:text-lg">
          每个数字都对应可追踪的执行动作，用统一指标视图保障策略和结果一致。
        </p>
      </FadeIn>

      <div className="overflow-hidden rounded-[var(--home-v2-radius)] border border-zinc-200 bg-white">
        <div className="grid grid-cols-1 divide-y divide-zinc-200 md:grid-cols-4 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.07}>
              <div className="p-6 md:p-7">
                <MetricItem value={`${stat.value}${stat.suffix}`} label={stat.label} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
