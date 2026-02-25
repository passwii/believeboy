import Link from "next/link";
import { ArrowRight, ChartLineUp, Pulse } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { SectionEyebrow, SectionShell } from "@/components/sections/home-v2/section-shell";
import { aiCapabilities } from "./data";

export function AIShowcaseSection() {
  return (
    <SectionShell id="ai-showcase" className="bg-zinc-900 text-zinc-100">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="space-y-6">
          <FadeIn>
            <SectionEyebrow className="border-emerald-200/20 bg-emerald-500/10 text-emerald-300">AI Enablement</SectionEyebrow>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">让 AI 成为跨境运营的实时决策层</h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="max-w-[58ch] text-base leading-relaxed text-zinc-300 md:text-lg">
              通过数据分析、素材生成与策略建议协同，团队可在更短周期内完成验证、修正与增长迭代。
            </p>
          </FadeIn>

          <div className="space-y-3">
            {aiCapabilities.map((item, index) => (
              <FadeIn key={item.title} delay={0.2 + index * 0.06}>
                <div className="home-v2-interactive grid grid-cols-[1fr_auto] items-center rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 hover:border-zinc-700">
                  <div>
                    <p className="font-medium text-zinc-100">{item.title}</p>
                    <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                  </div>
                  <span className="font-mono text-sm text-emerald-300">{item.metric}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.46}>
            <Button asChild className="home-v2-interactive h-12 rounded-full bg-emerald-600 px-6 text-white hover:bg-emerald-500">
              <Link href="/ai-empowerment" className="inline-flex items-center gap-2">
                查看 AI 能力细节
                <ArrowRight size={16} weight="bold" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <FadeIn delay={0.24} direction="left">
          <div className="relative">
            <div className="home-v2-glass rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.7)] md:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-300">ai runtime monitor</p>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300">
                  <span className="home-v2-kicker-dot" />
                  Active
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                  <p className="font-mono text-xs text-zinc-400">Traffic pulse</p>
                  <p className="mt-2 text-2xl font-semibold text-white">+47.2% week-over-week</p>
                  <div className="mt-3 h-2 rounded-full bg-zinc-800">
                    <div className="h-full w-2/3 rounded-full bg-emerald-400" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                    <p className="font-mono text-xs text-zinc-400">Creative output</p>
                    <p className="mt-2 text-lg font-medium text-white">32 assets / 24h</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                    <p className="font-mono text-xs text-zinc-400">Decision latency</p>
                    <p className="mt-2 text-lg font-medium text-white">1.8h to execution</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-v2-float absolute -right-3 -top-3 rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 shadow-xl md:-right-5 md:-top-5">
              <div className="flex items-center gap-2 text-emerald-300">
                <ChartLineUp size={18} weight="duotone" />
                <span className="font-mono text-sm">Predictive uplift model synced</span>
              </div>
            </div>

            <div className="absolute -bottom-3 left-6 rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-2 md:-bottom-5">
              <div className="flex items-center gap-2 text-zinc-300">
                <Pulse size={16} weight="duotone" className="text-emerald-300" />
                <span className="text-xs">实时信号正常</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
