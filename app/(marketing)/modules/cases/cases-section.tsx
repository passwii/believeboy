import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { ArrowRight, Package } from "lucide-react";
import { cases } from "./data";

export function CasesSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            成功案例
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            客户的成功，就是我们的成功
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            深度行业理解 + 数据驱动决策 = 可量化的商业价值
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <StaggerItem key={index}>
              <Link href="/cases" className="group block">
                <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="aspect-video bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <Package className="w-16 h-16 text-slate-300" />
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                        {caseItem.platform}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {caseItem.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {caseItem.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200">
                      {caseItem.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="text-center">
                          <div className="text-lg font-bold text-cyan-600">
                            {metric.value}
                          </div>
                          <div className="text-xs text-slate-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="text-center mt-12">
          <Button size="lg" variant="outline" asChild className="group">
            <Link href="/cases">
              查看更多案例
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
