"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { Database } from "lucide-react";
import { aiArchitecture } from "./data";

export function AIArchitectureSection() {
  return (
    <section className="py-20 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-indigo-500/20 text-indigo-400 border-indigo-500/30">
              技术底座
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI技术架构
            </h2>
            <p className="text-lg text-slate-400">
              自主可控的技术栈，确保数据安全、响应迅速、成本可控
            </p>
          </div>
        </FadeIn>

        {/* 模型层 */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" staggerDelay={0.1}>
          {aiArchitecture.models.map((model, index) => (
            <StaggerItem key={index}>
              <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-all duration-300 group h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-slate-700 transition-colors">
                    <model.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white">
                    {model.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {model.items.map((item, i) => (
                      <Badge key={i} variant="outline" className="border-slate-700 text-slate-300 bg-slate-800/50">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm">{model.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* 核心优势 */}
        <FadeIn delay={0.3}>
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-slate-800 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{'< 500ms'}</div>
                <p className="text-slate-400 text-sm">响应延迟</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">本地部署</div>
                <p className="text-slate-400 text-sm">数据安全处理</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-400 mb-2">零泄露</div>
                <p className="text-slate-400 text-sm">敏感数据风险</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 数据资产 */}
        <FadeIn delay={0.4}>
          <div>
            <h3 className="text-xl font-bold text-white mb-8 text-center">AI数据资产底座</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {aiArchitecture.dataAssets.map((asset, index) => (
                <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-slate-700 transition-all duration-300">
                  <Database className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {asset.value}<span className="text-lg text-slate-400">{asset.unit}</span>
                  </div>
                  <div className="text-slate-300 text-sm mb-1">{asset.label}</div>
                  <div className="text-slate-500 text-xs">{asset.description}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
