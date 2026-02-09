"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";
import { Brain, Zap, TrendingUp, Layers } from "lucide-react";

export function VisionSection() {
  return (
    <section id="vision" className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">
                我们的AI愿景
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                效率就是利润<br />
                <span className="text-blue-600">洞察就是先机</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  在跨境电商这场全球竞争中，我们致力于打破技术应用门槛，将前沿人工智能无缝融入电商运营全链路。
                </p>
                <p>
                  <strong className="text-slate-900">AI不是替代人类，而是增强人类决策能力。</strong>我们相信人机协作才是未来，
                  AI处理重复性工作，人类专注策略与创意。
                </p>
                <p>
                  跨境电商的复杂场景，正是AI价值实现的最佳舞台。让我们用智能重新定义跨境电商运营。
                </p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="relative">
              {/* 科技感装饰卡片 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-6 text-white shadow-xl">
                  <Brain className="w-8 h-8 mb-4 opacity-80" />
                  <div className="text-3xl font-bold mb-1">AI+</div>
                  <div className="text-sm opacity-80">人机协作</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <Zap className="w-8 h-8 mb-4 text-amber-500" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">10x</div>
                  <div className="text-sm text-slate-500">效率提升</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <TrendingUp className="w-8 h-8 mb-4 text-emerald-500" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">85%</div>
                  <div className="text-sm text-slate-500">成本降低</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl p-6 text-white shadow-xl">
                  <Layers className="w-8 h-8 mb-4 opacity-80" />
                  <div className="text-3xl font-bold mb-1">4大</div>
                  <div className="text-sm opacity-80">智能支柱</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
