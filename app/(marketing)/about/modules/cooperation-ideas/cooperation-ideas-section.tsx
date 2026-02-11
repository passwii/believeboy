"use client";

import { FadeIn, FadeInContainer, FadeInItem } from "@/components/effects/fade-in";
import { Handshake } from "lucide-react";
import { cooperationIdeas } from "./data";

export function CooperationIdeasSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              <Handshake className="h-4 w-4" />
              <span>合作方式</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              做“共建型”合作，不做“代运营黑盒”
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600">
              目标公开、过程透明、结果复盘，让合作每一步都有可验证产出。
            </p>
          </FadeIn>
        </div>
        
        <FadeInContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {cooperationIdeas.map((idea, index) => (
            <FadeInItem key={index}>
              <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute right-5 top-5 text-xs font-semibold text-slate-300">
                  0{index + 1}
                </div>

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600">
                  <idea.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {idea.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-slate-600">
                  {idea.description}
                </p>

                <div className="mt-6 h-1 w-14 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-24 group-hover:bg-blue-500" />
              </div>
            </FadeInItem>
          ))}
        </FadeInContainer>
      </div>
    </section>
  );
}
