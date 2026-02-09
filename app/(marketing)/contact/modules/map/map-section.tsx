"use client";

import { FadeIn } from "@/components/effects/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              <span>公司位置</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              欢迎来访
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600">
              我们期待与您面对面交流，共同探讨出海战略
            </p>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.3}>
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              {/* 地图占位区域 */}
              <div className="relative w-full h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                {/* 装饰网格 */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>
                
                {/* 中心内容 */}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">彼励扶电子商务（苏州）有限公司</h3>
                  <p className="text-slate-600 mb-4">江苏省苏州市工业园区</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm text-slate-600">地图加载中...</span>
                  </div>
                </div>
                
                {/* 装饰元素 */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
