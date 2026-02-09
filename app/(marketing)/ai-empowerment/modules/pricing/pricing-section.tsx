"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { CheckCircle2 } from "lucide-react";
import { aiPricingPlans } from "./data";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-violet-100 text-violet-700 hover:bg-violet-100">
              订阅方案
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AI-Suite 订阅服务
            </h2>
            <p className="text-lg text-slate-600">
              灵活的订阅方案，满足不同阶段的AI能力需求
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerDelay={0.15}>
          {aiPricingPlans.map((plan, index) => (
            <StaggerItem key={index}>
              <Card className={`h-full relative ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-slate-200 hover:border-blue-300 hover:shadow-lg'} transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-1">
                      最受欢迎
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg font-bold text-slate-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-slate-500">¥</span>
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${plan.popular ? 'text-blue-500' : 'text-slate-400'} flex-shrink-0 mt-0.5`} />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} font-semibold`}
                    asChild
                  >
                    <Link href="/contact">
                      {plan.cta}
                    </Link>
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
