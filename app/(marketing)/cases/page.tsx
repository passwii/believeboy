import { Metadata } from "next";
import { HeroSection } from "./modules/hero";
import { CasesDisplaySection, cases } from "./modules/cases-display";
import { TestimonialsSection } from "./modules/testimonials";
import { StatsSection } from "./modules/stats";
import { CasesCTASection } from "./modules/cta";

export const metadata: Metadata = {
  title: "案例展示 | 彼励扶",
  description: "用数据说话，见证中国品牌出海的成功之路。查看彼励扶成功帮助的跨境电商案例。",
};

export default function CasesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - 页面头部 */}
      <HeroSection />

      {/* 案例展示区 */}
      {cases.map((caseData, index) => (
        <section key={caseData.id} id={`case-0${index + 1}`}>
          <CasesDisplaySection caseData={caseData} index={index} />
        </section>
      ))}

      {/* 客户评价 Section */}
      <TestimonialsSection />

      {/* 数据统计 Section */}
      <StatsSection />

      {/* CTA Section */}
      <CasesCTASection />
    </main>
  );
}
