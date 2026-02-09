"use client";

import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { Target } from "lucide-react";
import { coreValues } from "./data";

export function CoreValuesSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              <span>核心价值</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              为什么选择彼励扶
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600">
              我们的核心优势，助力中国品牌成功出海
            </p>
          </FadeIn>
        </div>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {coreValues.map((value, index) => (
            <StaggerItem key={index}>
              <div className="group h-full bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* 图标 */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* 标题 */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                
                {/* 描述 */}
                <p className="text-slate-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
