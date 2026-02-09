import { CTASection } from "@/components/sections/shared/cta-section";

export function ServicesCTASection() {
  return (
    <CTASection 
      title="准备好开启您的跨境之旅了吗？"
      subtitle="预约免费咨询，获取专属跨境增长方案。我们的专家团队将在24小时内与您联系，为您量身定制出海策略。"
      primaryButtonText="立即预约咨询"
      primaryButtonHref="/contact"
      secondaryButtonText="查看成功案例"
      secondaryButtonHref="/cases"
      variant="default"
      showSecondary={true}
    />
  );
}
