import { CTASection as SharedCTASection } from "@/components/sections/shared/cta-section";

export function CTASection() {
  return (
    <SharedCTASection 
      title="把下一阶段增长目标，变成可执行方案"
      subtitle="告诉我们你的品牌阶段与核心挑战，我们会在 24 小时内提供一份初步增长诊断和优先级建议。"
      primaryButtonText="预约增长诊断"
      primaryButtonHref="/contact"
      secondaryButtonText="查看服务能力"
      secondaryButtonHref="/services"
      variant="gradient"
    />
  );
}
