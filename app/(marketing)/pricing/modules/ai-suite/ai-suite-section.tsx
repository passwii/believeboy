"use client";

import { Bot, Zap, Star, ChevronRight, Sparkles, Building2 } from "lucide-react";
import { aiPlans } from "@/app/(marketing)/pricing/modules/ai-suite/data";
import { SectionHeader } from "../../shared/components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import Link from "next/link";

// Icon mapping from string to component
const iconMap = {
  zap: Zap,
  sparkles: Sparkles,
  building: Building2,
};

// Dark theme color classes for AI-Suite section
const getColorClasses = (color: string) => {
  const classes = {
    blue: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      icon: "text-blue-400",
      ring: "ring-blue-500/50",
    },
    cyan: {
      bg: "bg-cyan-500/20",
      text: "text-cyan-400",
      icon: "text-cyan-400",
      ring: "ring-cyan-500/50",
    },
    violet: {
      bg: "bg-violet-500/20",
      text: "text-violet-400",
      icon: "text-violet-400",
      ring: "ring-violet-500/50",
    },
  };
  return classes[color as keyof typeof classes] || classes.cyan;
};

export function AISuiteSection() {
  return (
    <section id="ai-suite" className="py-20 md:py-24 bg-slate-900">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {aiPlans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color);
            const Icon = iconMap[plan.icon as keyof typeof iconMap] || Zap;
            
            return (
              <StaggerItem key={index}>
                <Card
                  className={`h-full relative overflow-visible transition-all duration-300 group bg-white/5 backdrop-blur-sm border-white/10 ${
                    plan.featured
                      ? `ring-2 ${colorClasses.ring} shadow-xl hover:shadow-2xl scale-[1.02] hover:bg-white/10 hover:border-white/20`
                      : "hover:bg-white/10 hover:border-white/20 hover:shadow-xl"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-1 -right-1 w-[140px] h-[140px] overflow-hidden">
                      <div className="absolute top-[18px] right-[-35px] w-[120px] transform rotate-45 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-1.5 text-xs font-semibold shadow-lg">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          最受欢迎
                        </div>
                      </div>
                    </div>
                  )}

                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${colorClasses.icon}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-white">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400">{plan.unit}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-col h-full space-y-4">
                    <p className="text-sm text-slate-400">{plan.description}</p>

                    <ul className="space-y-2 flex-1">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <Zap className={`w-4 h-4 ${colorClasses.text} mt-0.5 shrink-0`} />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.featured ? "default" : "outline"}
                      className={`w-full mt-auto ${
                        plan.featured
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white"
                          : "bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
                      }`}
                      asChild
                    >
                      <Link href="/contact">
                        了解详情
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
