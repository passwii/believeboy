"use client";

import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { ShieldCheck } from "lucide-react";
import { coreValues } from "./data";

export function CoreValuesSection() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              <ShieldCheck className="h-4 w-4" />
              <span>核心原则</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              我们如何保证项目结果
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600">
              不是靠临场发挥，而是靠一套稳定、可复用的增长方法。
            </p>
          </FadeIn>
        </div>
        
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {coreValues.map((value, index) => (
            <StaggerItem key={index}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl lg:p-8">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${value.color} transition-transform duration-300 group-hover:scale-110`}>
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {value.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-slate-600">
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
