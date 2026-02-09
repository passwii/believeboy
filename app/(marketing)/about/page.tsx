import { Metadata } from "next";
import { HeroSection } from "./modules/hero";
import { CompanySection } from "./modules/company";
import { CoreValuesSection } from "./modules/core-values";
import { TeamStatsSection } from "./modules/team-stats";
import { CooperationIdeasSection } from "./modules/cooperation-ideas";
import { CTASection } from "./modules/cta";

export const metadata: Metadata = {
  title: "关于我们 | 彼励扶 - 跨境电商战略合伙人",
  description: "了解彼励扶电子商务（苏州）有限公司的使命与愿景。专注为中国品牌提供全链路跨境电商解决方案。",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CompanySection />
      <CoreValuesSection />
      <TeamStatsSection />
      <CooperationIdeasSection />
      <CTASection />
    </main>
  );
}
