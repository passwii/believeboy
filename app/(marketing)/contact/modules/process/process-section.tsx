"use client";

import { FadeIn } from "@/components/effects/fade-in";
import { ArrowRight } from "lucide-react";
import { processSteps } from "./data";

export function ProcessSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <ArrowRight className="w-4 h-4" />
              <span>合作流程</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              简单四步，开启合作
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600">
              清晰透明的合作流程，让您每一步都心中有数
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="relative group">
                {/* 连接线 */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0" />
                )}
                
                <div className="relative z-10 bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* 步骤编号 */}
                  <div className="text-5xl font-bold text-slate-100 mb-4">
                    {step.step}
                  </div>
                  
                  {/* 图标 */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* 标题 */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  
                  {/* 描述 */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
