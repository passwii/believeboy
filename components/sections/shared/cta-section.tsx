"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { ArrowRight, Calendar, Phone } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "default" | "gradient" | "dark";
  showSecondary?: boolean;
}

export function CTASection({
  title = "开启您的跨境之旅",
  subtitle = "预约免费咨询，获取专属跨境增长方案。我们的专家团队将在24小时内与您联系。",
  primaryButtonText = "立即预约咨询",
  primaryButtonHref = "/contact",
  secondaryButtonText = "致电咨询",
  secondaryButtonHref = "tel:18896968181",
  variant = "default",
  showSecondary = true,
}: CTASectionProps) {
  const bgClasses = {
    default: "bg-blue-900",
    gradient: "bg-gradient-primary",
    dark: "bg-slate-900",
  };

  return (
    <section className={`${bgClasses[variant]} py-20 md:py-24 lg:py-32 relative overflow-hidden`}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              {subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-blue-900 hover:bg-white/90 font-semibold px-8 py-6 text-base shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Link href={primaryButtonHref}>
                  <Calendar className="w-5 h-5 mr-2" />
                  {primaryButtonText}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {showSecondary && (
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-white/10 text-white hover:bg-white/20 border border-white/30 font-semibold px-8 py-6 text-base transition-all duration-300 backdrop-blur-sm"
                >
                  <Link href={secondaryButtonHref}>
                    <Phone className="w-5 h-5 mr-2" />
                    {secondaryButtonText}
                  </Link>
                </Button>
              )}
            </div>
          </FadeIn>

          {/* 信任标识 */}
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>免费咨询</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>专业诊断</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>定制方案</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
