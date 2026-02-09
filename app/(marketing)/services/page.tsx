import { Metadata } from "next";
import { HeroSection } from "./modules/hero";
import { AdvantagesSection } from "./modules/advantages";
import { CoreServicesSection } from "./modules/core-services";
import { CapabilitiesSection } from "./modules/capabilities";
import { ProcessSection } from "./modules/process";
import { PlatformsSection } from "./modules/platforms";
import { StatsSection } from "./modules/stats";
import { ServicesCTASection } from "./modules/cta";

export const metadata: Metadata = {
  title: "服务介绍 | 彼励扶",
  description: "彼励扶提供亚马逊代运营、独立站搭建、TikTok Shop、AI智能营销等全方位跨境电商服务。全链路跨境电商解决方案。",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AdvantagesSection />
      <CoreServicesSection />
      <CapabilitiesSection />
      <ProcessSection />
      <PlatformsSection />
      <StatsSection />
      <ServicesCTASection />
    </main>
  );
}
