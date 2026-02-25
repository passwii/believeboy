import Link from "next/link";
import { ArrowRight, ChartLineUp, Pulse } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { SectionEyebrow, SectionShell } from "@/components/sections/home-v2/section-shell";
import { aiCapabilities } from "./data";

export function AIShowcaseSection() {
  return (
    <SectionShell id="ai-showcase" className="bg-stone-950 text-stone-100">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="space-y-6">
          <FadeIn>
            <SectionEyebrow className="border-amber-200/20 bg-amber-300/10 text-amber-200">AI赋能体系</SectionEyebrow>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">让 AI 成为跨境运营的实时决策层</h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="max-w-[58ch] text-base leading-relaxed text-stone-300 md:text-lg">
              从素材生成、广告实验到风险预警，AI 不再是锦上添花的工具，而是驱动日常经营节奏的操作系统。
            </p>
          </FadeIn>

          <div className="space-y-3">
            {aiCapabilities.map((item, index) => (
              <FadeIn key={item.title} delay={0.2 + index * 0.06}>
                <div className="home-v2-interactive grid grid-cols-[1fr_auto] items-center rounded-2xl border border-stone-700 bg-stone-900 p-4 hover:border-amber-300/40">
                  <div>
                    <p className="font-medium text-stone-100">{item.title}</p>
                    <p className="mt-1 text-sm text-stone-400">{item.desc}</p>
                  </div>
                  <span className="text-sm font-semibold text-amber-200">{item.metric}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.46}>
            <Button asChild className="home-v2-interactive h-12 rounded-full bg-amber-500 px-6 text-stone-950 hover:bg-amber-400">
              <Link href="/ai-empowerment" className="inline-flex items-center gap-2">
                查看 AI 能力细节
                <ArrowRight size={16} weight="bold" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <FadeIn delay={0.24} direction="left">
          <div className="relative">
            <div className="rounded-[2rem] border border-stone-700 bg-gradient-to-br from-stone-900 to-stone-950 p-6 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.7)] md:p-8">
              <div className="flex items-center justify-between border-b border-stone-700 pb-4">
                <p className="text-xs uppercase tracking-[0.14em] text-stone-300">AI运行监测</p>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-2 py-1 text-xs text-amber-200">
                  <span className="home-v2-kicker-dot" />
                  运行中
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-stone-700 bg-stone-950 p-4">
                  <p className="text-xs text-stone-400">流量脉冲</p>
                  <p className="mt-2 text-2xl font-semibold text-white">周环比 +47.2%</p>
                  <div className="mt-3 h-2 rounded-full bg-stone-800">
                    <div className="h-full w-2/3 rounded-full bg-amber-400" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-stone-700 bg-stone-950 p-4">
                    <p className="text-xs text-stone-400">素材产出</p>
                    <p className="mt-2 text-lg font-medium text-white">24小时产出 32 份素材</p>
                  </div>
                  <div className="rounded-2xl border border-stone-700 bg-stone-950 p-4">
                    <p className="text-xs text-stone-400">决策延迟</p>
                    <p className="mt-2 text-lg font-medium text-white">1.8小时完成执行</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-v2-float absolute -right-3 -top-3 rounded-2xl border border-stone-700 bg-stone-950 px-4 py-3 shadow-xl md:-right-5 md:-top-5">
              <div className="flex items-center gap-2 text-amber-200">
                <ChartLineUp size={18} weight="duotone" />
                <span className="font-mono text-sm">预测增长模型已同步</span>
              </div>
            </div>

            <div className="absolute -bottom-3 left-6 rounded-2xl border border-stone-700 bg-stone-950 px-4 py-2 md:-bottom-5">
              <div className="flex items-center gap-2 text-stone-300">
                <Pulse size={16} weight="duotone" className="text-amber-300" />
                <span className="text-xs">实时信号正常</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
