import { Badge } from "@/components/ui/badge";
import { FadeIn, FadeInContainer, FadeInItem } from "@/components/effects/fade-in";
import { serviceCapabilities } from "./data";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
              细分能力
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              运营服务细分能力
            </h2>
            <p className="text-lg text-slate-600">
              30+项专业运营能力，全方位覆盖跨境电商各环节
            </p>
          </div>
        </FadeIn>

        <FadeInContainer className="flex flex-wrap justify-center gap-3 md:gap-4" staggerDelay={0.03}>
          {serviceCapabilities.map((capability, index) => (
            <FadeInItem key={index}>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-default group">
                <capability.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                  {capability.name}
                </span>
              </div>
            </FadeInItem>
          ))}
        </FadeInContainer>
      </div>
    </section>
  );
}
