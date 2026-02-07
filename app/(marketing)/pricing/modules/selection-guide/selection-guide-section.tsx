"use client";

import { selectionGuide } from "@/app/(marketing)/pricing/modules/selection-guide/data";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

// 阶段配置 - 颜色标识
const stageConfig = [
  {
    // 起步 - 绿色
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    buttonVariant: "bg-emerald-600 hover:bg-emerald-700",
    badge: "起步",
    featureCheckColor: "text-emerald-500",
    highlightBg: "bg-gradient-to-r from-emerald-100 to-teal-100",
    highlightBorder: "border-emerald-300",
    highlightText: "text-emerald-700",
  },
  {
    // 增长 - 蓝色
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    buttonVariant: "bg-blue-600 hover:bg-blue-700",
    badge: "增长",
    featureCheckColor: "text-blue-500",
    highlightBg: "bg-gradient-to-r from-blue-100 to-indigo-100",
    highlightBorder: "border-blue-300",
    highlightText: "text-blue-700",
  },
  {
    // 成熟 - 紫色
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    textColor: "text-violet-700",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    buttonVariant: "bg-violet-600 hover:bg-violet-700",
    badge: "成熟",
    featureCheckColor: "text-violet-500",
    highlightBg: "bg-gradient-to-r from-violet-100 to-purple-100",
    highlightBorder: "border-violet-300",
    highlightText: "text-violet-700",
  },
];

export function SelectionGuideSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              不知道选哪个方案？
            </h2>
            <p className="text-slate-600">
              根据您当前的发展阶段，我们提供以下选择建议
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          staggerDelay={0.1}
        >
          {selectionGuide.map((guide, index) => {
            const config = stageConfig[index];
            return (
              <StaggerItem key={index}>
                <div
                  className={cn(
                    "h-full relative rounded-2xl p-6 md:p-8 transition-all duration-300 ease-out cursor-pointer group",
                    "border-2 hover:shadow-xl hover:-translate-y-1",
                    config.bgColor,
                    config.borderColor
                  )}
                >
                  {/* 阶段标签 */}
                  <div
                    className={cn(
                      "absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md",
                      `bg-gradient-to-r ${config.gradient}`
                    )}
                  >
                    {config.badge}
                  </div>

                  {/* 推荐标识 */}
                  <div className="absolute -top-3 right-6">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-md text-[10px] font-medium bg-white/80 backdrop-blur-sm shadow-sm",
                        config.textColor
                      )}
                    >
                      推荐方案
                    </span>
                  </div>

                  {/* 图标区域 */}
                  <div className="flex items-center gap-4 mb-4 mt-2">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110",
                        config.iconBg
                      )}
                    >
                      <guide.icon className={cn("w-7 h-7", config.iconColor)} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 mb-1">{guide.stage}</p>
                      <p className={cn("font-semibold text-base", config.textColor)}>
                        {guide.recommendation}
                      </p>
                    </div>
                  </div>

                  {/* 价格区域 */}
                  <div className="mb-4">
                    <div className={cn("text-2xl font-bold", config.textColor)}>
                      {guide.price}
                    </div>
                    <div className="text-sm text-slate-500">{guide.priceNote}</div>
                  </div>

                  {/* 目标人群区域 */}
                  <div className="mb-4 space-y-1">
                    <p className="text-sm text-slate-600">{guide.targetAudience}</p>
                    <p className="text-sm font-medium text-slate-700">
                      📊 {guide.monthlySales}
                    </p>
                  </div>

                  {/* 分割线 */}
                  <div
                    className={cn(
                      "h-px w-full mb-4 opacity-30",
                      config.borderColor.replace("border-", "bg-")
                    )}
                  />

                  {/* 核心功能列表 */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {guide.coreFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check
                            className={cn(
                              "w-4 h-4 mt-0.5 flex-shrink-0",
                              config.featureCheckColor
                            )}
                          />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 亮点功能徽章 */}
                  <div className="mb-4">
                    <div
                      className={cn(
                        "px-3 py-2 rounded-lg border text-sm font-medium text-center",
                        config.highlightBg,
                        config.highlightBorder,
                        config.highlightText
                      )}
                    >
                      ✨ {guide.highlightedFeature}
                    </div>
                  </div>

                  {/* 平台和期限信息 */}
                  <div className="mb-4 flex justify-between text-xs text-slate-500">
                    <span>🏢 {guide.platform}</span>
                    <span>⏱️ {guide.minCommitment}</span>
                  </div>

                  {/* 行动按钮 */}
                  <Button
                    className={cn(
                      "w-full text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg",
                      config.buttonVariant
                    )}
                  >
                    选择此方案
                  </Button>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
