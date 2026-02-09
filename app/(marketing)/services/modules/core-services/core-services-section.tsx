"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { coreServices, type CoreService } from "./data";

interface ServiceCardProps {
  service: CoreService;
}

const colorVariants: Record<string, { bg: string; border: string; icon: string; accent: string }> = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "text-blue-600",
    accent: "bg-blue-600",
  },
  indigo: {
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    icon: "text-indigo-600",
    accent: "bg-indigo-600",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-200",
    icon: "text-violet-600",
    accent: "bg-violet-600",
  },
  cyan: {
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    icon: "text-cyan-600",
    accent: "bg-cyan-600",
  },
};

function ServiceCard({ service }: ServiceCardProps) {
  const colors = colorVariants[service.color] || colorVariants.blue;
  const Icon = service.icon;
  const SecondaryIcon = service.secondaryIcon;

  return (
    <div
      className={cn(
        "group relative flex flex-col h-full",
        "bg-white rounded-2xl border border-slate-200",
        "transition-all duration-300 ease-out",
        "hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200/50",
        "overflow-hidden"
      )}
    >
      {/* 顶部装饰条 - 渐变色条 */}
      <div className={cn("h-1.5 w-full transition-all duration-300", colors.accent)} />

      {/* 悬停时显示的顶部光效 */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="flex flex-col flex-1 p-6 md:p-7">
        {/* 头部区域：图标和副图标 */}
        <div className="flex items-start justify-between mb-5">
          {/* 主图标容器 */}
          <div
            className={cn(
              "relative flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300",
              colors.bg,
              "group-hover:scale-105 group-hover:shadow-md"
            )}
          >
            <Icon className={cn("w-7 h-7 transition-all duration-300", colors.icon)} />
            
            {/* 图标悬停光晕 */}
            <div className={cn(
              "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md",
              colors.bg
            )} />
          </div>

          {/* 副图标 - 更精致的样式 */}
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 opacity-60 group-hover:opacity-100 group-hover:border-slate-300 transition-all duration-300">
            <SecondaryIcon className="w-5 h-5 text-slate-500" />
          </div>
        </div>

        {/* 标题 */}
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
          {service.title}
        </h3>

        {/* 描述文本 */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        {/* 特性标签 - 改进样式 */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md",
                "bg-slate-50 text-slate-600 text-xs",
                "border border-slate-200",
                "transition-all duration-200",
                "group/item hover:bg-slate-100 hover:border-slate-300"
              )}
            >
              <Check className="w-3 h-3 text-slate-400 group-hover/item:text-slate-500 transition-colors" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CoreServicesSection() {
  return (
    <section id="core-services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              核心服务
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-slate-900 mb-4 leading-tight">
              从市场进入到品牌建设
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              提供一站式跨境电商解决方案，覆盖出海全链路
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          staggerDelay={0.12}
        >
          {coreServices.map((service, index) => (
            <StaggerItem key={index}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
