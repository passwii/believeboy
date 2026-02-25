import { FadeIn } from "@/components/effects/fade-in";
import { SectionEyebrow, SectionShell } from "@/components/sections/home-v2/section-shell";
import { stats } from "./data";

export function StatsSection() {
  return (
    <SectionShell className="bg-stone-50">
      <FadeIn className="mb-10 space-y-4 md:mb-12">
        <SectionEyebrow>运营指标</SectionEyebrow>
        <h2 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">每一项增长，都有可被复盘的经营动作</h2>
        <p className="max-w-[62ch] text-base leading-relaxed text-stone-600 md:text-lg">
          我们不只展示结果，更强调指标背后的执行机制，确保策略可以被复制、放大和迭代。
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <FadeIn key={stat.label} delay={index * 0.07}>
            <article className="home-v2-interactive rounded-3xl border border-stone-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg md:p-7">
              <p className="text-xs uppercase tracking-[0.14em] text-stone-500">指标 0{index + 1}</p>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">
                {stat.value}
                <span className="ml-1 text-2xl text-amber-700">{stat.suffix}</span>
              </p>
              <p className="mt-2 min-h-10 text-sm leading-relaxed text-stone-600">{stat.label}</p>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-stone-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-stone-900 to-amber-500"
                  style={{ width: `${68 + index * 10}%` }}
                />
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-center">
          <p className="text-sm uppercase tracking-[0.15em] text-stone-500">指标治理机制</p>
          <p className="text-stone-700 md:col-span-2">
            周会同步经营目标，双周回看关键指标，月度评估增长模型，确保“策略-执行-利润”一致。
          </p>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
