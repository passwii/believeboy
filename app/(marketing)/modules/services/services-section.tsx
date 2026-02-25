import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { SectionEyebrow, SectionShell } from "@/components/sections/home-v2/section-shell";
import { services } from "./data";

export function ServicesSection() {
  return (
    <SectionShell id="services" className="bg-zinc-100/70">
      <FadeIn className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <SectionEyebrow>Core Services</SectionEyebrow>
          <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">从策略制定到运营落地的一体化执行链路</h2>
          <p className="max-w-[62ch] text-base leading-relaxed text-zinc-600 md:text-lg">
            模块化服务可独立协作，也可整合为端到端交付，确保每一步都能回到转化与利润目标。
          </p>
        </div>
        <Button asChild variant="outline" className="home-v2-interactive h-12 rounded-full border-zinc-300 px-6 text-zinc-800 hover:border-zinc-400 hover:bg-white">
          <Link href="/services" className="inline-flex items-center gap-2">
            查看完整服务
            <ArrowRight size={16} weight="bold" />
          </Link>
        </Button>
      </FadeIn>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:auto-rows-[minmax(240px,1fr)]">
        {services.map((service, index) => {
          const sizeClass = index === 0 ? "md:col-span-2" : "";

          return (
            <FadeIn key={service.title} delay={index * 0.08} className={sizeClass}>
              <article className="home-v2-interactive flex h-full flex-col rounded-[var(--home-v2-radius)] border border-zinc-200 bg-white p-6 shadow-[var(--home-v2-shadow)] md:p-8">
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs tracking-[0.12em] text-zinc-500">
                  <service.icon size={16} weight="duotone" className="text-[var(--home-v2-accent)]" />
                  Step 0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">{service.title}</h3>
                <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-zinc-600 md:text-base">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="home-v2-interactive rounded-full border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:border-[var(--home-v2-accent)] hover:text-[var(--home-v2-accent)]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </SectionShell>
  );
}
