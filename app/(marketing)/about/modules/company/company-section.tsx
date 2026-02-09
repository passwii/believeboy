"use client";

import { SlideUp } from "@/components/effects/slide-up";
import { 
  Globe, 
  Zap, 
  TrendingUp, 
  Heart,
  Award,
  Sparkles
} from "lucide-react";

export function CompanySection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 左侧内容 */}
          <div>
            <SlideUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>公司简介</span>
              </div>
            </SlideUp>
            
            <SlideUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                彼励扶 <span className="text-blue-600">BelieveBoy</span>
              </h2>
            </SlideUp>
            
            <SlideUp delay={0.2}>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong className="text-slate-900">彼励扶电子商务（苏州）有限公司</strong>
                ，是一家
                <span className="text-blue-600 font-semibold">专注为中国品牌提供全链路跨境电商解决方案的战略合伙人</span>。
              </p>
            </SlideUp>
            
            <SlideUp delay={0.3}>
              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                我们是一支专注于跨境电商领域的专业团队，汇聚了一群怀揣梦想、充满活力的年轻精英。拥有全球视野与创新精神，致力于为中国品牌出海提供全链路解决方案。
              </p>
            </SlideUp>
            
            <SlideUp delay={0.4}>
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white">
                <Sparkles className="w-6 h-6" />
                <span className="text-xl font-bold">让中国品牌闪耀全球</span>
              </div>
            </SlideUp>
          </div>
          
          {/* 右侧装饰 */}
          <SlideUp delay={0.2} className="relative">
            <div className="relative">
              {/* 主卡片 */}
              <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">全球市场覆盖</h4>
                      <p className="text-sm text-slate-600">北美、欧洲、亚太等主要电商市场</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">AI智能驱动</h4>
                      <p className="text-sm text-slate-600">自研AI决策系统，效率提升5倍</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">结果导向</h4>
                      <p className="text-sm text-slate-600">以数据为基石，创造可量化商业价值</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">长期主义</h4>
                      <p className="text-sm text-slate-600">构建可持续的全球竞争力</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 装饰元素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-full blur-2xl" />
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
