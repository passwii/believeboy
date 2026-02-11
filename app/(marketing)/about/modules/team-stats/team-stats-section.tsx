"use client";

import { FadeIn } from "@/components/effects/fade-in";
import { StatCounter } from "@/components/effects/counter";
import { Activity, Landmark, Users } from "lucide-react";
import { teamStats } from "./data";

export function TeamStatsSection() {
  const capabilities = [
    "Amazon / Walmart 货架电商",
    "TikTok Shop 内容电商",
    "DTC 独立站增长",
    "海外社媒与达人合作",
    "跨境供应链与库存协同",
    "营销投放与利润复盘",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-cyan-300">
              <Users className="h-4 w-4" />
              <span>团队与结果</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              让增长回到可衡量、可复盘、可放大的轨道
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-white/70">
              每个项目都以业务结果为导向，用一致的指标体系追踪真实价值。
            </p>
          </FadeIn>
        </div>
        
        <div className="mb-14 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {teamStats.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-950/40 p-5">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <Activity className="h-4 w-4" />
                核心能力矩阵
              </div>
              <ul className="grid grid-cols-1 gap-2 text-sm text-slate-200 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <li key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950/40 p-5">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <Landmark className="h-4 w-4" />
                合作原则
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                我们将品牌目标拆分为阶段目标与周度动作，用实时看板追踪投入产出，
                在保障执行速度的同时保持经营纪律，确保增长不是偶然事件。
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
