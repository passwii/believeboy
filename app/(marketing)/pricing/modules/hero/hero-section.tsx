"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm text-white/80">透明的费用结构 · 按效果付费</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              定价方案
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-cyan-400 font-medium-medium mb-6">
              透明的价格，灵活的合作模式
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              我们相信，最好的合作是结果导向的合作。无论选择哪种模式，我们都承诺：
              透明的费用结构、可量化的服务目标、按效果付费的诚意。
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/contact">
                  获取定制报价
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white/10 text-white hover:bg-white/20 border border-white/30 font-semibold px-8 py-6 text-base transition-all duration-300 backdrop-blur-sm"
              >
                <Link href="#pricing-plans">
                  查看方案详情
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
