import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { ArrowRight, TrendingUp, BarChart3 } from "lucide-react";
import { aiCapabilities } from "./data";

export function AIShowcaseSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                AI赋能
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                让AI成为您的
                <br />
                <span className="text-gradient">跨境电商超级大脑</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                我们将前沿人工智能无缝融入电商运营全链路。AI不仅是工具，更是驱动业务增长与创新的核心引擎。
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-4">
              {aiCapabilities.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                    <div className="text-cyan-400 font-semibold text-sm whitespace-nowrap ml-4">
                      {item.metric}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.5} className="mt-8">
              <Button asChild className="bg-gradient-primary hover:opacity-90 text-white group">
                <Link href="/ai-empowerment">
                  探索AI赋能能力
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          {/* Right Visual */}
          <FadeIn delay={0.3} direction="left">
            <div className="relative">
              {/* Code/Terminal Mockup */}
              <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-slate-400 text-sm">ai-analytics.js</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="text-slate-400 mb-2">// AI运营数据分析</div>
                  <div className="text-cyan-400">const <span className="text-white">aiAnalysis</span> = <span className="text-yellow-400">await</span> <span className="text-white">analyze</span>({'{'}</div>
                  <div className="pl-4 text-green-400">
                    platform: <span className="text-orange-400">'amazon'</span>,
                  </div>
                  <div className="pl-4 text-green-400">
                    metrics: [<span className="text-orange-400">'sales'</span>, <span className="text-orange-400">'acos'</span>, <span className="text-orange-400">'conversion'</span>],
                  </div>
                  <div className="pl-4 text-green-400">timeRange: <span className="text-orange-400">'30d'</span>,</div>
                  <div className="text-cyan-400">{'}'});</div>

                  <div className="mt-4 text-slate-400">// 智能洞察结果</div>
                  <div className="text-purple-400">console<span className="text-white">.log</span>(<span className="text-white">aiAnalysis.insights</span>);</div>

                  <div className="mt-4 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <div className="text-green-400 mb-1">✓ 发现高潜力关键词 23 个</div>
                    <div className="text-green-400 mb-1">✓ ACOS 优化建议已生成</div>
                    <div className="text-green-400 mb-1">✓ 库存补货提醒: 3个SKU</div>
                    <div className="text-cyan-400">→ 预计销售额提升 35%</div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">+180%</div>
                    <div className="text-xs text-slate-500">销售增长</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">-51%</div>
                    <div className="text-xs text-slate-500">ACOS降低</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
