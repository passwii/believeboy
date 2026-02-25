import { FadeIn } from "@/components/effects/fade-in";
import { SectionEyebrow, SectionShell } from "@/components/sections/home-v2/section-shell";
import { advantages } from "./data";

export function WhyUsSection() {
  return (
    <SectionShell id="why-us" className="bg-[var(--home-v2-bg)]">
      <div className="grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <FadeIn className="space-y-5">
          <SectionEyebrow>Why BelieveBoy</SectionEyebrow>
          <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            更一致的运营方法，
            <br />
            更可验证的增长结果。
          </h2>
          <p className="max-w-[60ch] text-base leading-relaxed text-zinc-600 md:text-lg">
            我们把跨境运营拆解为可追踪的业务系统，减少策略噪音，聚焦长期价值与利润效率。
          </p>
          <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6">
            <p className="font-mono text-sm text-zinc-500">Operating Principle</p>
            <p className="mt-3 text-lg font-medium text-zinc-900">Strategy + Execution + AI Assistance</p>
          </div>
        </FadeIn>

        <div className="overflow-hidden rounded-[var(--home-v2-radius)] border border-zinc-200 bg-white">
          {advantages.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="group home-v2-interactive flex items-start gap-4 border-b border-zinc-100 px-5 py-6 last:border-b-0 md:px-7">
                <div className="mt-0.5 rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 text-[var(--home-v2-accent)]">
                  <item.icon size={22} weight="duotone" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-zinc-900 md:text-xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600 md:text-base">{item.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
