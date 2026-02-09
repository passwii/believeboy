import { CTASection as SharedCTASection } from "@/components/sections/shared/cta-section";

export function CTASection() {
  return (
    <SharedCTASection 
      title="准备好开启您的跨境之旅了吗？"
      subtitle="预约免费咨询，获取专属跨境增长方案。我们的专家团队将在24小时内与您联系。"
      primaryButtonText="立即预约咨询"
      primaryButtonHref="/contact"
      secondaryButtonText="了解更多服务"
      secondaryButtonHref="/services"
      variant="gradient"
    />
  );
}
