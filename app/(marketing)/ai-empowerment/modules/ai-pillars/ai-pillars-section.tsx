"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn } from "@/components/effects/fade-in";
import { CheckCircle2 } from "lucide-react";
import { aiPillars } from "./data";

export function AIPillarsSection() {
  return (
    <section id="ai-pillars" className="py-20 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
              核心能力
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              四大智能支柱
            </h2>
            <p className="text-lg text-slate-400">
              全方位AI能力矩阵，驱动业务智能升级
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {aiPillars.map((pillar, index) => (
            <FadeIn key={pillar.id} delay={index * 0.1}>
              <Card className={`bg-slate-800/50 border-slate-700 overflow-hidden hover:border-${pillar.color}-500/50 transition-all duration-500 group`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* 左侧：主要信息 */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg`}>
                        <pillar.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <CardTitle className="text-2xl font-bold text-white">
                            {pillar.title}
                          </CardTitle>
                          <Badge variant="outline" className={`border-${pillar.color}-500/50 text-${pillar.color}-400`}>
                            0{index + 1}
                          </Badge>
                        </div>
                        <p className={`text-${pillar.color}-400 font-medium`}>{pillar.subtitle}</p>
                      </div>
                    </div>
                    
                    <CardDescription className="text-slate-400 text-base leading-relaxed mb-6">
                      {pillar.description}
                    </CardDescription>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pillar.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className={`w-4 h-4 text-${pillar.color}-400`} />
                          <span className="text-sm">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 右侧：数据指标 */}
                  <div className={`bg-gradient-to-br ${pillar.gradient} p-8 flex flex-col justify-center`}>
                    <h4 className="text-white/80 text-sm font-medium mb-6 uppercase tracking-wider">实际效果</h4>
                    <div className="space-y-6">
                      {pillar.stats.map((stat, i) => (
                        <div key={i} className="text-white">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
                            <span className="text-lg opacity-80">{stat.label}</span>
                          </div>
                          <p className="text-white/60 text-sm mt-1">{stat.sublabel}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
