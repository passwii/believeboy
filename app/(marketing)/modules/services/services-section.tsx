import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { SectionEyebrow, SectionShell } from "@/components/sections/home-v2/section-shell";
import { services } from "./data";

export function ServicesSection() {
  return (
    <SectionShell id="services" className="bg-[var(--home-v2-bg)]">
      <FadeIn className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <SectionEyebrow>核心服务</SectionEyebrow>
          <h2 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">从“方向判断”到“增长落地”的四段式执行链路</h2>
          <p className="max-w-[62ch] text-base leading-relaxed text-stone-600 md:text-lg">
            不是零散服务清单，而是可串联的交付系统。每个模块都有明确输入、输出和复盘指标。
          </p>
        </div>
        <Button asChild variant="outline" className="home-v2-interactive h-12 rounded-full border-stone-300 bg-white px-6 text-stone-800 hover:border-stone-400">
          <Link href="/services" className="inline-flex items-center gap-2">
            查看完整服务
            <ArrowRight size={16} weight="bold" />
          </Link>
        </Button>
      </FadeIn>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:auto-rows-[minmax(260px,1fr)]">
        {services.map((service, index) => {
          const sizeClass = index === 0 ? "md:col-span-2" : "";

          return (
            <FadeIn key={service.title} delay={index * 0.08} className={sizeClass}>
              <article className="home-v2-interactive flex h-full flex-col rounded-[var(--home-v2-radius)] border border-stone-200 bg-white p-6 shadow-[var(--home-v2-shadow)] hover:-translate-y-1 hover:shadow-xl md:p-8">
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs tracking-[0.12em] text-amber-700">
                  <service.icon size={16} weight="duotone" className="text-amber-700" />
                  阶段 0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-stone-900">{service.title}</h3>
                <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-stone-600 md:text-base">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-stone-300 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-stone-900"
                      style={{ width: `${72 + index * 7}%` }}
                    />
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </SectionShell>
  );
}
