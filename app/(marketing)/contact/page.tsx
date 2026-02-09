import { HeroSection } from "./modules/hero";
import { ContactFormSection } from "./modules/contact-form";
import { ProcessSection } from "./modules/process";
import { MapSection } from "./modules/map";
import { CTASection } from "./modules/cta";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* 页面头部 */}
      <HeroSection />

      {/* 联系表单和联系方式 */}
      <ContactFormSection />

      {/* 合作流程 */}
      <ProcessSection />

      {/* 地图占位 */}
      <MapSection />

      {/* CTA区块 */}
      <CTASection />
    </main>
  );
}
