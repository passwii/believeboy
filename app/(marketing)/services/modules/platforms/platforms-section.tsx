import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { CheckCircle2 } from "lucide-react";
import { platforms } from "./data";

export function PlatformsSection() {
  return (
    <section className="py-20 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-white/10 text-cyan-400 border-0">
              平台覆盖
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              多平台运营能力
            </h2>
            <p className="text-lg text-slate-400">
              覆盖全球主流跨境电商平台，助力品牌多渠道出海
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6" staggerDelay={0.08}>
          {platforms.map((platform, index) => (
            <StaggerItem key={index}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <div 
                  className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.nameEn.charAt(0)}
                </div>
                <h3 className="text-white font-semibold mb-1">{platform.name}</h3>
                <p className="text-slate-500 text-xs">{platform.nameEn}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>平台官方认证</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>深度API对接</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>多平台协同</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
