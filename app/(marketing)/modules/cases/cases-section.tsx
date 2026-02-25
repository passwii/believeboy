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
      className={`group home-v2-interactive overflow-hidden rounded-[var(--home-v2-radius)] border border-zinc-200 bg-white ${className ?? ""}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        <img
          src={`https://picsum.photos/seed/${encodeURIComponent(caseItem.title)}/1200/760`}
          alt={caseItem.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-zinc-900/10 to-transparent" />
        <div className="absolute bottom-4 left-4 inline-flex rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs text-white backdrop-blur-sm">
          {caseItem.platform}
        </div>
      </div>

      <div className="space-y-4 p-5 md:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-900">{caseItem.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-600">{caseItem.description}</p>
        <div className="border-t border-zinc-200 pt-4">
          <dl className="grid grid-cols-3 gap-3">
            {caseItem.metrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <dt className="text-[11px] uppercase tracking-[0.08em] text-zinc-500">{metric.label}</dt>
                <dd className="font-mono text-sm font-semibold text-[var(--home-v2-accent)]">{metric.value}</dd>
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
    <SectionShell id="cases" className="bg-[var(--home-v2-bg)]">
      <FadeIn className="mb-10 space-y-4 md:mb-12">
        <SectionEyebrow>Case Studies</SectionEyebrow>
        <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">2+1 非对称案例墙，聚焦可量化增长结果</h2>
        <p className="max-w-[62ch] text-base leading-relaxed text-zinc-600 md:text-lg">
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
        <Button asChild variant="outline" className="home-v2-interactive h-12 rounded-full border-zinc-300 px-6 text-zinc-800 hover:bg-white">
          <Link href="/cases" className="inline-flex items-center gap-2">
            查看全部案例
            <ArrowRight size={16} weight="bold" />
          </Link>
        </Button>
      </FadeIn>
    </SectionShell>
  );
}
