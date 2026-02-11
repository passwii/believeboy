"use client";

import { FadeIn } from "@/components/effects/fade-in";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const highlights = [
    { value: "120M+", label: "累计GMV管理规模" },
    { value: "38+", label: "合作品牌与项目" },
    { value: "6", label: "核心平台覆盖" },
  ];

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_80%_at_50%_0%,#13315f_0%,#081325_45%,#030712_100%)] py-24 md:py-32 lg:py-36">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-[-10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-8%] top-1/3 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <FadeIn>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200/40 bg-cyan-100/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>跨境电商增长合作伙伴</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              帮中国品牌把
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-sky-100 bg-clip-text text-transparent">
                海外增长做成长期能力
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-200 md:text-xl">
              彼励扶不是外包团队，我们把策略、执行与数据系统并行落地，
              让品牌在 Amazon、TikTok Shop、独立站等渠道实现可复制增长。
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                预约增长诊断
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                查看项目案例
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="grid gap-4 rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm sm:grid-cols-3 sm:p-6">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-xl bg-slate-950/40 p-4 text-left sm:text-center">
                  <p className="text-2xl font-bold text-cyan-200 md:text-3xl">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-300 md:text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
