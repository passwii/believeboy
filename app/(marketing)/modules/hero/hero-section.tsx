import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { ArrowRight, BarChart3, Bot, Sparkles, Target } from "lucide-react";

// Hero Section 统计数据
const heroStats = [
  { value: "3年", label: "跨境增长深耕" },
  { value: "10+", label: "BSR成功案例" },
  { value: "7大", label: "主力运营平台" },
  { value: "100M+", label: "人均操盘业绩" },
];

const proofCards = [
  {
    title: "策略先行",
    description: "先校准市场、品类与增长路径，再进入执行，避免低效试错。",
    icon: Target,
  },
  {
    title: "AI加速",
    description: "把内容、投放、复盘和协同纳入 AI 辅助流程，提升团队响应效率。",
    icon: Bot,
  },
  {
    title: "结果复盘",
    description: "用指标看板和节奏化复盘，让增长来自机制，而不只是阶段性爆单。",
    icon: BarChart3,
  },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(180deg,#050816_0%,#081225_42%,#0b1830_74%,#10213b_100%)] py-16 md:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[68%] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_46%)]" />
        <div className="absolute left-[-6%] top-20 h-72 w-72 rounded-full bg-cyan-300/12 blur-3xl md:h-96 md:w-96" />
        <div className="absolute right-[-10%] top-32 h-80 w-80 rounded-full bg-fuchsia-400/14 blur-3xl md:h-[28rem] md:w-[28rem]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="absolute inset-x-[8%] bottom-[7%] h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FadeIn delay={0.15}>
            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <span className="text-sm font-medium tracking-[0.18em] text-cyan-100 uppercase">
                AI 增长驱动的跨境品牌伙伴
              </span>
            </div>
          </FadeIn>

          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-12">
            <div className="text-center lg:text-left">
              <FadeIn delay={0.3}>
                <h1 className="text-[clamp(3.2rem,9vw,7.3rem)] font-black leading-[0.9] tracking-[-0.06em] text-white">
                  让中国品牌
                  <span className="mt-2 block bg-[linear-gradient(135deg,#f8fafc_0%,#67e8f9_30%,#f9a8d4_68%,#fef3c7_100%)] bg-clip-text text-transparent">
                    在全球市场被看见
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.45}>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/92 md:text-xl lg:max-w-3xl">
                  彼励扶把跨境运营、品牌表达和 AI 执行系统整合成一套增长引擎，
                  帮你在 Amazon、TikTok Shop 与独立站建立更稳、更快、更可复制的出海能力。
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Button
                    size="lg"
                    asChild
                    className="group h-14 rounded-2xl bg-white px-8 text-base font-semibold text-slate-950 shadow-[0_18px_50px_-22px_rgba(255,255,255,0.55)] transition hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    <Link href="/contact">
                      预约增长诊断
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
                    className="h-14 rounded-2xl border border-white/20 bg-white/8 px-8 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/14"
                  >
                    <Link href="/services">查看服务体系</Link>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.75}>
                <div className="mt-10 grid gap-3 text-left sm:grid-cols-3">
                  {proofCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-white/12 bg-white/7 p-4 backdrop-blur-md"
                    >
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/12 text-cyan-200">
                        <card.icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-base font-semibold text-white">{card.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{card.description}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.55} className="lg:justify-self-end">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-[linear-gradient(180deg,rgba(10,17,33,0.86),rgba(9,20,38,0.72))] p-5 shadow-[0_40px_100px_-46px_rgba(8,145,178,0.65)] backdrop-blur-xl sm:p-6">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent" />
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">Growth Console</p>
                    <p className="mt-2 text-2xl font-semibold text-white">品牌出海增长仪表板</p>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    Live
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    <p className="text-sm text-slate-400">近 90 天销售增长</p>
                    <p className="mt-3 text-4xl font-semibold text-white">+214%</p>
                    <p className="mt-2 text-sm text-emerald-200">核心品类广告与自然流量同步提升</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    <p className="text-sm text-slate-400">AI 协同产出效率</p>
                    <p className="mt-3 text-4xl font-semibold text-white">5x</p>
                    <p className="mt-2 text-sm text-cyan-200">内容产出、复盘与投放调整更快闭环</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-[#0c1729]/90 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white">阶段推进</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Week 06</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { label: "市场定位校准", value: "100%" },
                      { label: "内容素材系统化", value: "82%" },
                      { label: "广告结构优化", value: "76%" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                          <span>{item.label}</span>
                          <span>{item.value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/8">
                          <div
                            className="h-2 rounded-full bg-[linear-gradient(90deg,#67e8f9_0%,#f9a8d4_100%)]"
                            style={{ width: item.value }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.9}>
            <div className="mt-12 rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(9,18,34,0.72),rgba(11,23,42,0.58))] px-5 py-6 shadow-[0_28px_80px_-44px_rgba(6,182,212,0.32)] backdrop-blur-xl md:px-8">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <div className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm uppercase tracking-[0.16em] text-slate-200/82">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
