import { Metadata } from "next";
import { HeroSection } from "./modules/hero";
import { VisionSection } from "./modules/vision";
import { AIPillarsSection } from "./modules/ai-pillars";
import { AIArchitectureSection } from "./modules/ai-architecture";
import { AIScenariosSection } from "./modules/ai-scenarios";
import { PricingSection } from "./modules/pricing";
import { CTASection } from "./modules/cta";

export const metadata: Metadata = {
  title: "AI赋能 | 彼励扶",
  description: "彼励扶AI赋能服务，基于大语言模型和智能算法，为跨境电商提供视觉内容智能、运营数据智能、商业决策智能和协同管理智能四大核心能力。",
};

export default function AIEmpowermentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - 页面头部 */}
      <HeroSection />

      {/* AI愿景 Section */}
      <VisionSection />

      {/* 四大智能支柱 Section */}
      <AIPillarsSection />

      {/* AI技术架构 Section */}
      <AIArchitectureSection />

      {/* 实战应用场景 Section */}
      <AIScenariosSection />

      {/* AI工具订阅 Section */}
      <PricingSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
