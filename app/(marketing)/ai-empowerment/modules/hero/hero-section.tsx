"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_80%_at_50%_0%,#13315f_0%,#081325_45%,#030712_100%)] py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-[-10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-8%] top-1/3 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">AI Powered</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI赋能
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-medium mb-6">
              智能驱动，效率革新
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              让AI成为您的跨境电商超级大脑。从创意生成到决策执行，从数据分析到客户服务，
              让每个环节都实现智能化跃迁。
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400 text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
              >
                <Link href="#ai-pillars">
                  探索AI能力
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white/10 text-white hover:bg-white/20 border border-cyan-500/50 font-semibold px-8 py-6 text-base transition-all duration-300 backdrop-blur-sm"
              >
                <Link href="#pricing">
                  查看定价
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
