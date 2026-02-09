import { CTASection } from "@/components/sections/shared/cta-section";

export function CasesCTASection() {
  return (
    <CTASection 
      title="成为下一个成功案例"
      subtitle="无论您是刚起步的跨境卖家，还是寻求突破的品牌企业，我们都可以为您提供定制化的增长方案。"
      primaryButtonText="预约免费咨询"
      primaryButtonHref="/contact"
      secondaryButtonText="了解我们的服务"
      secondaryButtonHref="/services"
      variant="default"
      showSecondary={true}
    />
  );
}
