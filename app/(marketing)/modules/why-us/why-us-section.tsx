import { FadeIn } from "@/components/effects/fade-in";
import { SectionEyebrow, SectionShell } from "@/components/sections/home-v2/section-shell";
import { advantages } from "./data";

export function WhyUsSection() {
  return (
    <SectionShell id="why-us" className="bg-stone-100/70">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <FadeIn className="space-y-5">
          <SectionEyebrow>为什么选择彼励扶</SectionEyebrow>
          <h2 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
            从经验型代运营，
            <br className="hidden md:block" />
            升级为系统型增长伙伴。
          </h2>
          <p className="max-w-[60ch] text-base leading-relaxed text-stone-600 md:text-lg">
            我们用统一方法论把战略、执行、复盘串成闭环，避免“今天换打法、明天重来”的低效协作。
          </p>

          <div className="rounded-3xl border border-stone-300 bg-stone-950 p-6 text-stone-100">
            <p className="text-xs uppercase tracking-[0.16em] text-amber-300">运营原则</p>
            <p className="mt-3 text-xl font-semibold">战略主导 · 数据校准 · AI加速执行</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-300">
              每周节奏化校准目标、素材和投放动作，确保增长来自可复用机制，而不是一次性运气。
            </p>
          </div>
        </FadeIn>

        <div className="overflow-hidden rounded-[var(--home-v2-radius)] border border-stone-200 bg-white">
          {advantages.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="group home-v2-interactive grid grid-cols-[auto_auto_1fr] items-start gap-4 border-b border-stone-100 px-5 py-6 last:border-b-0 hover:bg-stone-50/60 md:px-7">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-xs font-semibold text-amber-300">
                  {`0${index + 1}`}
                </div>
                <div className="mt-0.5 rounded-xl border border-stone-200 bg-stone-50 p-2.5 text-amber-700">
                  <item.icon size={22} weight="duotone" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-stone-900 md:text-xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-600 md:text-base">{item.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
