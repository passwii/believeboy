"use client";

import { CTASection as SharedCTASection } from "@/components/sections/shared/cta-section";

export function CTASection() {
  return (
    <SharedCTASection 
      title="开始您的AI赋能之旅"
      subtitle="无论您希望提升Listing质量、建立智能广告投放体系，还是实现数据驱动的运营决策，我们都可以提供从咨询、部署到培训的全流程支持。"
      primaryButtonText="预约AI能力演示"
      primaryButtonHref="/contact"
      secondaryButtonText="了解更多服务"
      secondaryButtonHref="/services"
      variant="default"
      showSecondary={true}
    />
  );
}
