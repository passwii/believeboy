"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn, FadeInContainer, FadeInItem } from "@/components/effects/fade-in";
import { serviceCapabilities } from "./data";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <Badge 
              variant="secondary" 
              className="mb-5 px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-50 shadow-sm"
            >
              细分能力
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-slate-900 mb-4 tracking-tight">
              运营服务细分能力
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              30+项专业运营能力，全方位覆盖跨境电商各环节，助力品牌实现持续增长
            </p>
          </div>
        </FadeIn>

        {/* Capabilities Grid */}
        <FadeInContainer 
          className="flex flex-wrap justify-center gap-2.5 md:gap-3.5" 
          staggerDelay={0.04}
        >
          {serviceCapabilities.map((capability, index) => (
            <FadeInItem key={index}>
              <CapabilityTag capability={capability} />
            </FadeInItem>
          ))}
        </FadeInContainer>
      </div>
    </section>
  );
}

// Individual Capability Tag Component
interface CapabilityTagProps {
  capability: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  };
}

function CapabilityTag({ capability }: CapabilityTagProps) {
  const Icon = capability.icon;
  
  return (
    <div 
      className="group relative flex items-center gap-2.5 px-4 py-2.5 md:px-5 md:py-3 
                 bg-white rounded-xl border border-slate-200/80
                 hover:border-blue-300/60 hover:bg-blue-50/40
                 hover:shadow-[0_4px_20px_-4px_rgba(59,130,246,0.15)]
                 active:scale-[0.98]
                 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                 cursor-default select-none"
    >
      {/* Icon with background */}
      <div className="relative flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-lg 
                      bg-slate-100/80 group-hover:bg-blue-100/80
                      transition-colors duration-300">
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-500 group-hover:text-blue-600 
                         transition-colors duration-300" />
      </div>
      
      {/* Label */}
      <span className="text-sm md:text-[0.9375rem] font-medium text-slate-700 
                       group-hover:text-slate-900
                       transition-colors duration-300 whitespace-nowrap">
        {capability.name}
      </span>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                      bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5
                      transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
