"use client";

import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { Users, Award, Globe, TrendingUp } from "lucide-react";

const stats = [
  {
    value: 3,
    suffix: "",
    label: "核心成员",
    description: "资深运营专家",
    icon: Users,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    value: 10,
    suffix: "",
    label: "Best Seller",
    description: "打造畅销产品",
    icon: Award,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    value: 7,
    suffix: "",
    label: "跨境平台",
    description: "全渠道覆盖",
    icon: Globe,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    value: 100,
    suffix: "M",
    label: "人均操盘业绩",
    description: "亿级操盘经验",
    icon: TrendingUp,
    iconColor: "text-violet-500",
    bgColor: "bg-violet-50",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* 标题区域 */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            团队实力
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            专业团队，卓越成绩
          </h2>
          <p className="text-lg text-slate-600">
            精英团队打造 Best Seller，数据见证我们的专业实力
          </p>
        </FadeIn>

        {/* 统计数据卡片 */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={index}>
                <div className="group relative h-full">
                  {/* 卡片主体 */}
                  <div className="relative h-full p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* 背景渐变装饰 */}
                    <div
                      className={`absolute -top-10 -right-10 w-32 h-32 ${stat.bgColor} opacity-50 rounded-full blur-2xl group-hover:opacity-80 transition-opacity duration-300`}
                    />

                    {/* 图标 */}
                    <div
                      className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bgColor} mb-4`}
                    >
                      <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                    </div>

                    {/* 数字 */}
                    <div className="relative mb-1 text-4xl md:text-5xl font-bold text-slate-900">
                      {stat.value}{stat.suffix}
                    </div>

                    {/* 标签 */}
                    <div className="relative text-lg font-semibold text-slate-800 mb-1">
                      {stat.label}
                    </div>

                    {/* 描述 */}
                    <div className="relative text-sm text-slate-500">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* 底部备注 */}
        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              * 数据截至2026年2月，基于团队核心成员历史操盘项目统计
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
