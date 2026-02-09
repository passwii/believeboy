"use client";

import { FadeIn } from "@/components/effects/fade-in";
import { StatCounter } from "@/components/effects/counter";
import { Users } from "lucide-react";
import { teamStats } from "./data";

export function TeamStatsSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-400 text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              <span>团队实力</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              专业团队，卓越成绩
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-white/70">
              数据见证实力，我们用结果说话
            </p>
          </FadeIn>
        </div>
        
        {/* 统计数据 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
        
        {/* 附加说明 */}
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-white/60 text-sm max-w-2xl mx-auto">
              *数据截至2025年，基于团队核心成员历史操盘项目统计
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
