import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { platforms } from "./data";

export function LogoWallSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-slate-500 text-sm mb-8 uppercase tracking-wider">
            覆盖全球主流跨境电商平台
          </p>
        </FadeIn>

        <StaggerContainer className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {platforms.map((platform, index) => (
            <StaggerItem key={index}>
              <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                <platform.icon className="w-5 h-5" />
                <span className="font-medium">{platform.name}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
