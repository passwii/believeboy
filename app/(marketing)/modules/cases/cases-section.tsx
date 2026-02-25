import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { SectionEyebrow, SectionShell } from "@/components/sections/home-v2/section-shell";
import { cases } from "./data";

function CaseCard({
  caseItem,
  className,
}: {
  caseItem: (typeof cases)[number];
  className?: string;
}) {
  return (
    <Link
      href="/cases"
      className={`group home-v2-interactive cursor-pointer overflow-hidden rounded-[var(--home-v2-radius)] border border-stone-200 bg-white hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl ${className ?? ""}`}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-700 p-6 md:p-7">
        <div className="pointer-events-none absolute -right-10 top-5 h-28 w-28 rounded-full border border-white/20" />
        <div className="pointer-events-none absolute -bottom-8 left-5 h-20 w-20 rounded-full bg-white/10 blur-xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.14em] text-stone-200/80">案例速览</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{caseItem.title}</h3>
        </div>
        <div className="mt-5 inline-flex rounded-full border border-white/25 bg-black/20 px-3 py-1 text-xs text-white">
          {caseItem.platform}
        </div>
      </div>

      <div className="space-y-4 p-5 md:p-6">
        <p className="text-sm leading-relaxed text-stone-600">{caseItem.description}</p>
        <div className="border-t border-stone-200 pt-4">
          <dl className="grid grid-cols-3 gap-3">
            {caseItem.metrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <dt className="text-[11px] uppercase tracking-[0.08em] text-stone-500">{metric.label}</dt>
                <dd className="text-sm font-semibold text-amber-700">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Link>
  );
}

export function CasesSection() {
  return (
    <SectionShell id="cases" className="bg-stone-100/70">
      <FadeIn className="mb-10 space-y-4 md:mb-12">
        <SectionEyebrow>客户案例</SectionEyebrow>
        <h2 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">精选增长案例，验证方法可复制而非偶然</h2>
        <p className="max-w-[62ch] text-base leading-relaxed text-stone-600 md:text-lg">
          真实项目结果覆盖大件家居、厨具与品牌独立站，持续验证跨平台运营方法的可复制性。
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-[1fr_1fr]">
        <FadeIn>
          <CaseCard caseItem={cases[0]} className="md:row-span-2 h-full" />
        </FadeIn>
        <FadeIn delay={0.08}>
          <CaseCard caseItem={cases[1]} />
        </FadeIn>
        <FadeIn delay={0.16}>
          <CaseCard caseItem={cases[2]} />
        </FadeIn>
      </div>

      <FadeIn delay={0.24} className="mt-10">
        <Button asChild variant="outline" className="home-v2-interactive h-12 rounded-full border-stone-300 bg-white px-6 text-stone-800 hover:border-stone-400">
          <Link href="/cases" className="inline-flex items-center gap-2">
            查看全部案例
            <ArrowRight size={16} weight="bold" />
          </Link>
        </Button>
      </FadeIn>
    </SectionShell>
  );
}
