import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { ArrowRight } from "lucide-react";

// Hero Section 统计数据
const heroStats = [
  { value: "3年", label: "行业深耕" },
  { value: "10", label: "BSR成功案例" },
  { value: "7", label: "运营平台" },
  { value: "100M+", label: "人均操盘业绩" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_80%_at_50%_0%,#13315f_0%,#081325_45%,#030712_100%)] py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-[-10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-8%] top-1/3 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm text-cyan-400 font-medium">专业跨境电商运营服务</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              让中国品牌
              <br />
              <span className="text-gradient">闪耀全球</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
              专业跨境电商运营 × AI智能驱动
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              彼励扶电子商务（苏州）有限公司，专注为中国品牌提供全链路跨境电商解决方案。
              从亚马逊到独立站，用专业和AI赋能您的出海之路。
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-6 text-base btn-glow group"
              >
                <Link href="/contact">
                  立即咨询
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white/10 text-white hover:bg-white/20 border border-white/20 font-semibold px-8 py-6 text-base backdrop-blur-sm"
              >
                <Link href="/services">了解服务</Link>
              </Button>
            </div>
          </FadeIn>

          {/* Stats Preview */}
          <FadeIn delay={1.2}>
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
