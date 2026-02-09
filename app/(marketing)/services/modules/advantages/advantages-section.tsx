"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";
import { coreAdvantages } from "./data";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AdvantagesSection() {
  return (
    <>
      {/* 全局样式：处理 stats value 和 icon 的 hover 颜色变化 */}
      <style>{`
        [data-stats-value] {
          transition: color 0.3s ease;
        }
        .group:hover [data-stats-value] {
          color: white !important;
        }
        /* Icon container hover 时添加白色边框和阴影，增强对比度 */
        .group:hover [data-advantage-icon] {
          box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.4), 0 8px 24px rgba(0, 0, 0, 0.2) !important;
        }
      `}</style>
      <section id="advantages" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-100 to-violet-100 text-blue-700 hover:from-blue-200 hover:to-violet-200 border-0"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              核心优势
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
              为什么选择我们
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              专业团队 + AI赋能 = 全方位助力您的全球业务拓展
            </p>
          </div>
        </FadeIn>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {coreAdvantages.map((advantage, index) => {
            const Icon = advantage.icon;
            const isLarge = advantage.size === "large";
            const isSmall = advantage.size === "small";

            return (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group relative rounded-2xl overflow-hidden cursor-pointer bg-white",
                "border-2 border-slate-200 hover:border-transparent",
                "transition-all duration-500 ease-out",
                "hover:shadow-2xl hover:shadow-blue-500/10",
                "hover:-translate-y-1",
                isLarge && "md:col-span-2 md:row-span-2",
                isSmall && "md:col-span-1 md:row-span-1",
                !isLarge && !isSmall && "md:col-span-1 md:row-span-1"
              )}
            >
                {/* Background Gradient */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    `bg-gradient-to-br ${advantage.color.gradient}`
                  )}
                />

                {/* Subtle Background */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-5",
                    advantage.color.light
                  )}
                />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon */}
                    <div
                      data-advantage-icon
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                        "bg-gradient-to-br shadow-lg",
                        `from-${advantage.color.primary} to-${advantage.color.secondary}`,
                        "group-hover:scale-110 group-hover:rotate-3"
                      )}
                      style={{
                        background: `linear-gradient(135deg, ${advantage.color.primary}, ${advantage.color.secondary})`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Index */}
                    <span className="text-4xl font-bold text-slate-200/50 group-hover:text-white/70 transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={cn(
                      "font-bold text-slate-900 mb-2 transition-colors duration-300",
                      "group-hover:text-white",
                      isLarge ? "text-xl md:text-2xl" : "text-lg"
                    )}
                  >
                    {advantage.title}
                  </h3>

                  <p
                    className={cn(
                      "text-slate-600 leading-relaxed transition-colors duration-300",
                      "group-hover:text-white/90",
                      isLarge ? "text-base" : "text-sm line-clamp-3"
                    )}
                  >
                    {advantage.description}
                  </p>

                  {/* Stats (if available) */}
                  {advantage.stats && (
                    <div className="mt-auto pt-4 mt-4 border-t border-slate-200/50 group-hover:border-white/30 transition-colors duration-300">
                      <div className="flex items-baseline gap-2">
                        <span
                          className={cn(
                            "font-bold transition-colors duration-300",
                            isLarge ? "text-3xl md:text-4xl" : "text-2xl"
                          )}
                          style={{ color: advantage.color.primary }}
                          data-stats-value
                        >
                          {advantage.stats.value}
                        </span>
                        <span className="text-sm text-slate-500 group-hover:text-white/90 transition-colors duration-300">
                          {advantage.stats.label}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Features list (for large cards) */}
                  {isLarge && advantage.features && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {advantage.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Arrow indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}
