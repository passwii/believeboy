"use client";

import { FadeIn, FadeInContainer, FadeInItem } from "@/components/effects/fade-in";
import { Heart } from "lucide-react";
import { cooperationIdeas } from "./data";

export function CooperationIdeasSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              <span>合作理念</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              我们的合作理念
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600">
              拒绝短视交易，追求长期共赢
            </p>
          </FadeIn>
        </div>
        
        <FadeInContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {cooperationIdeas.map((idea, index) => (
            <FadeInItem key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                {/* 图标 */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
                  <idea.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* 标题 */}
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {idea.title}
                </h3>
                
                {/* 描述 */}
                <p className="text-slate-600 leading-relaxed text-sm">
                  {idea.description}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInContainer>
      </div>
    </section>
  );
}
