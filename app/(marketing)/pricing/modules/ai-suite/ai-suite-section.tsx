"use client";

import { Bot, Zap } from "lucide-react";
import { aiPlans } from "@/app/(marketing)/pricing/modules/ai-suite/data";
import { SectionHeader } from "../../shared/components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import Link from "next/link";

export function AISuiteSection() {
  const getColorClasses = (color: string) => {
    const classes = {
      blue: "text-blue-400",
      cyan: "text-cyan-400",
      violet: "text-violet-400",
    };
    return classes[color as keyof typeof classes] || "text-cyan-400";
  };

  return (
    <section className="py-20 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="AI-Suite 智能工具套件"
            subtitle="附加服务，让AI为您的运营效率加速"
            badge={{ text: "AI工具订阅", icon: Bot }}
            variant="dark"
            className="mb-16"
          />
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          staggerDelay={0.1}
        >
          {aiPlans.map((plan, index) => (
            <StaggerItem key={index}>
              <Card
                className={`h-full bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${
                  plan.featured ? "ring-2 ring-cyan-500/50" : ""
                }`}
              >
                {plan.featured && (
                  <div className="bg-cyan-500/20 text-cyan-400 text-center py-1.5 text-xs font:semibold">
                    最受欢迎
                  </div>
                )}

                <CardHeader className={plan.featured ? "pt-4" : ""}>
                  <CardTitle className="text-lg font: bold text-white">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font: bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.unit}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-400">{plan.description}</p>

                  <ul className="space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Zap className={`w-4 h-4 ${getColorClasses(plan.color)} mt-0.5 shrink-0`} />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.featured ? "default" : "outline"}
                    className={`w-full mt-4 ${
                      plan.featured
                        ? "bg-cyan-500 hover:bg-cyan-400 text-white"
                        : "border-white/30 text-white hover:bg-white/10"
                    }`}
                    asChild
                  >
                    <Link href="/contact">了解详情</Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
