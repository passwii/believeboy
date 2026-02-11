import { Metadata } from "next";
import { HeroSection } from "./modules/hero";
import { CompanySection } from "./modules/company";
import { CoreValuesSection } from "./modules/core-values";
import { TeamStatsSection } from "./modules/team-stats";
import { CooperationIdeasSection } from "./modules/cooperation-ideas";
import { CTASection } from "./modules/cta";

export const metadata: Metadata = {
  title: "关于彼励扶 | 中国品牌全球增长合作伙伴",
  description:
    "彼励扶（BelieveBoy）专注服务中国品牌出海，提供策略、运营、内容与数据一体化增长解决方案，帮助品牌构建可持续全球化能力。",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CompanySection />
      <TeamStatsSection />
      <CoreValuesSection />
      <CooperationIdeasSection />
      <CTASection />
    </main>
  );
}
