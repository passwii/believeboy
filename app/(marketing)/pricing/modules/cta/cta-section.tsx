"use client";

import { CTASection as SharedCTASection } from "@/components/sections/shared/cta-section";

export function CTASection() {
  return (
    <SharedCTASection
      title="每个企业的情况都不同"
      subtitle="我们建议您预约一次免费咨询，让我们的顾问根据您的产品、目标市场和当前状况，为您推荐最适合的方案。"
      primaryButtonText="立即预约咨询"
      primaryButtonHref="/contact"
      secondaryButtonText="查看成功案例"
      secondaryButtonHref="/cases"
      variant="default"
      showSecondary={true}
    />
  );
}
