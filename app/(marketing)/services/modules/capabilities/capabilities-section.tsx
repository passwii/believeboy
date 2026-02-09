"use client";

import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  serviceCapabilities, 
  categoryConfigs,
  type CapabilityCategory,
  type ServiceCapability
} from "./data";

// Main Capabilities Section
export function CapabilitiesSection() {
  const [activeCategory, setActiveCategory] = useState<CapabilityCategory | "all">("all");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredCapabilities = activeCategory === "all"
    ? serviceCapabilities
    : serviceCapabilities.filter(c => c.category === activeCategory);

  const row1 = filteredCapabilities.filter((_, i) => i % 2 === 0);
  const row2 = filteredCapabilities.filter((_, i) => i % 2 === 1);

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl opacity-60" />

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-12 md:mb-16",
            "transition-all duration-700 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
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

        <div
          className={cn(
            "mt-4 space-y-4",
            "transition-all duration-700 ease-out delay-300",
            isInView ? "opacity-100" : "opacity-0"
          )}
        >
          {row1.length > 0 && (
            <InfiniteMarquee
              items={row1}
              direction="left"
              speed={activeCategory === "all" ? 50 : 40}
              categoryGradient={getActiveGradient(activeCategory)}
            />
          )}
          {row2.length > 0 && (
            <InfiniteMarquee
              items={row2}
              direction="right"
              speed={activeCategory === "all" ? 55 : 45}
              categoryGradient={getActiveGradient(activeCategory)}
            />
          )}
        </div>

        <div
          className={cn(
            "mt-12 flex justify-center gap-8 md:gap-16",
            "transition-all duration-700 ease-out delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              18+
            </div>
            <div className="text-sm text-slate-500 mt-1">细分能力</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              5
            </div>
            <div className="text-sm text-slate-500 mt-1">能力类别</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-sm text-slate-500 mt-1">业务覆盖</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function
function getActiveGradient(category: CapabilityCategory | "all"): string {
  if (category === "all") return "from-blue-500 to-cyan-400";
  const config = categoryConfigs.find(c => c.id === category);
  return config?.gradient || "from-blue-500 to-cyan-400";
}

// Category Tabs
function CategoryTabs({ 
  activeCategory, 
  onCategoryChange 
}: { 
  activeCategory: CapabilityCategory | "all";
  onCategoryChange: (category: CapabilityCategory | "all") => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
      <TabButton 
        isActive={activeCategory === "all"}
        onClick={() => onCategoryChange("all")}
        label="全部能力"
        count={serviceCapabilities.length}
        gradient="from-slate-500 to-slate-400"
      />
      {categoryConfigs.map((config) => {
        const count = serviceCapabilities.filter(c => c.category === config.id).length;
        return (
          <TabButton
            key={config.id}
            isActive={activeCategory === config.id}
            onClick={() => onCategoryChange(config.id)}
            label={config.label}
            count={count}
            gradient={config.gradient}
          />
        );
      })}
    </div>
  );
}

function TabButton({
  isActive,
  onClick,
  label,
  count,
  gradient,
}: {
  isActive: boolean;
  onClick: () => void;
  label: string;
  count: number;
  gradient: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm font-medium",
        "transition-all duration-300 ease-out",
        "border-2",
        isActive 
          ? cn("text-white border-transparent bg-gradient-to-r", gradient)
          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
      )}
    >
      <span>{label}</span>
      <span className={cn(
        "ml-1.5 text-xs px-1.5 py-0.5 rounded-full transition-colors",
        isActive 
          ? "bg-white/20 text-white" 
          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
      )}>
        {count}
      </span>
    </button>
  );
}

// Infinite Scroll Marquee Component
function InfiniteMarquee({
  items,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
  categoryGradient = "from-blue-500 to-cyan-400",
}: {
  items: ServiceCapability[];
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  categoryGradient?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate items for seamless loop (3x for smooth infinite scroll)
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {/* Gradient masks for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div
        className={cn(
          "flex gap-4 w-max",
          isHovered && "[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <CapabilityCard
            key={`${item.name}-${index}`}
            capability={item}
            categoryGradient={categoryGradient}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

// Individual Capability Card
function CapabilityCard({
  capability,
  categoryGradient,
}: {
  capability: ServiceCapability;
  categoryGradient: string;
}) {
  const Icon = capability.icon;

  return (
    <div
      className={cn(
        "group relative flex items-center gap-3 px-6 py-5",
        "bg-white rounded-2xl",
        "border border-slate-200/60",
        "shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]",
        "hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)]",
        "hover:border-slate-300/80",
        "hover:-translate-y-0.5",
        "transition-all duration-300 ease-out",
        "cursor-default select-none",
        "min-w-fit"
      )}
    >
      {/* Animated gradient background on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100",
          "bg-gradient-to-r",
          categoryGradient,
          "transition-opacity duration-500",
          "blur-xl -z-10 scale-110"
        )}
        style={{ opacity: 0.08 }}
      />

      {/* Icon container */}
      <div
        className={cn(
          "relative flex items-center justify-center",
          "w-9 h-9 rounded-xl",
          "bg-slate-100/80",
          "group-hover:bg-gradient-to-br",
          categoryGradient,
          "transition-all duration-300"
        )}
      >
        <Icon
          className={cn(
            "w-[18px] h-[18px]",
            "text-slate-600",
            "group-hover:text-white",
            "transition-colors duration-300"
          )}
        />
      </div>

      {/* Text content */}
      <span
        className={cn(
          "text-[15px] font-medium",
          "text-slate-700",
          "group-hover:text-slate-900",
          "transition-colors duration-300",
          "whitespace-nowrap"
        )}
      >
        {capability.name}
      </span>
    </div>
  );
}
