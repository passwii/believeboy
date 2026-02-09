import { Quote, CheckCircle2, Sparkles, Lightbulb, Zap, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";
import { CaseData } from "./data";
import { StatComparisonCard } from "./stat-comparison-card";

interface CaseSectionProps {
  caseData: CaseData;
  index: number;
}

export function CasesDisplaySection({ caseData, index }: CaseSectionProps) {
  const isEven = index % 2 === 0;
  
  return (
    <section className={`py-20 md:py-24 ${isEven ? "bg-white" : "bg-slate-50"}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${isEven ? "" : "lg:flex-row-reverse"}`}>
          {/* 左侧：案例信息 */}
          <FadeIn className={isEven ? "" : "lg:order-2"}>
            <div>
              {/* 标签 */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge className={`bg-gradient-to-r ${caseData.gradient} text-white border-0`}>
                  <caseData.icon className="w-3 h-3 mr-1" />
                  {caseData.category}
                </Badge>
                <Badge variant="outline" className="text-slate-600">
                  {caseData.platform}
                </Badge>
                <Badge variant="outline" className="text-slate-600">
                  合作周期：{caseData.duration}
                </Badge>
              </div>
              
              {/* 标题 */}
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                案例{String(index + 1).padStart(2, "0")}：{caseData.title}
              </h2>
              
              {/* 客户背景 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  客户背景
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {caseData.clientBackground}
                </p>
              </div>
              
              {/* 核心挑战 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  核心挑战
                </h3>
                <ul className="space-y-2">
                  {caseData.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 解决方案 */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  解决方案
                </h3>
                <ul className="space-y-2">
                  {caseData.solution.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
          
          {/* 右侧：数据成果 */}
          <FadeIn delay={0.2} className={isEven ? "" : "lg:order-1"}>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-500" />
                优化成果
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseData.stats.map((stat, i) => (
                  <StatComparisonCard key={i} stat={stat} color={caseData.color} />
                ))}
              </div>
              
              {/* 客户评价卡片 */}
              <div className="mt-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white">
                <Quote className="w-8 h-8 text-slate-600 mb-4" />
                <p className="text-slate-200 leading-relaxed mb-4 italic">
                  "{caseData.testimonial}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-sm font-semibold">
                    {caseData.testimonial.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{caseData.category}客户</div>
                    <div className="text-sm text-slate-400">{caseData.platform}</div>
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
