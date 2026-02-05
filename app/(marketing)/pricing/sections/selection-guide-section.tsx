"use client";

import { selectionGuide } from "../data/selection-guide";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";

export function SelectionGuideSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              不知道选哪个方案？
            </h2>
            <p className="text-slate-600">
              根据您当前的发展阶段，我们提供以下选择建议
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          staggerDelay={0.1}
        >
          {selectionGuide.map((guide, index) => (
            <StaggerItem key={index}>
              <div className="bg-slate-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <guide.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm text-slate-500">{guide.stage}</span>
                </div>
                <p className="font-semibold text-slate-900">{guide.recommendation}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
