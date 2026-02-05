"use client";

import { pricingPlans } from "../data/pricing-plans";
import { PricingCard } from "../components/pricing-card";
import { SectionHeader } from "../components/section-header";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";

export function PricingPlansSection() {
  return (
    <section id="pricing-plans" className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="三种合作模式"
            subtitle="灵活的定价模式，匹配不同阶段的出海需求"
            badge={{ text: "服务方案" }}
            className="mb-16"
          />
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.id}>
              <PricingCard {...plan} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
