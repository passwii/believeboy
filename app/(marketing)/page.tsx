import { Metadata } from "next";
import { HeroSection } from "./modules/hero";
import { LogoWallSection } from "./modules/logo-wall";
import { WhyUsSection } from "./modules/why-us";
import { ServicesSection } from "./modules/services";
import { AIShowcaseSection } from "./modules/ai-showcase";
import { StatsSection } from "./modules/stats";
import { CasesSection } from "./modules/cases";
import { CTASection } from "./modules/cta";

export const metadata: Metadata = {
  title: "彼励扶 - 让中国品牌闪耀全球 | 跨境电商运营服务",
  description: "彼励扶电子商务（苏州）有限公司，专注为中国品牌提供全链路跨境电商解决方案。专业运营×AI赋能，助力出海业绩增长。",
};

// Main Page Component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <LogoWallSection />
      <WhyUsSection />
      <ServicesSection />
      <AIShowcaseSection />
      <StatsSection />
      <CasesSection />
      <CTASection />
    </div>
  );
}
