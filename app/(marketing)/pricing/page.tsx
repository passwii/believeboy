import { Metadata } from "next";
import { HeroSection } from "./modules/hero";
import { PricingPlansSection } from "./modules/pricing-plans";
import { XPackageSection } from "./modules/x-package";
import { SelectionGuideSection } from "./modules/selection-guide";
import { AISuiteSection } from "./modules/ai-suite";
import { FAQSection } from "./modules/faq";
import { CTASection } from "./modules/cta";

export const metadata: Metadata = {
  title: "定价方案 | 彼励扶",
  description: "彼励扶提供灵活的跨境电商服务定价方案，透明的价格，灵活的合作模式，满足不同规模企业的需求。",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PricingPlansSection />
      <XPackageSection />
      <SelectionGuideSection />
      <AISuiteSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
