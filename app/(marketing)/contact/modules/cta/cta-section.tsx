"use client";

import { CTASection as SharedCTASection } from "@/components/sections/shared/cta-section";

export function CTASection() {
  return (
    <SharedCTASection 
      title="还有其他问题？"
      subtitle="我们的专业团队随时准备为您解答任何关于跨境电商的疑问。"
      primaryButtonText="立即咨询"
      primaryButtonHref="#"
      secondaryButtonText="查看服务"
      secondaryButtonHref="/services"
      variant="gradient"
    />
  );
}
