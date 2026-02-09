import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { serviceProcess } from "./data";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-cyan-100 text-cyan-700 hover:bg-cyan-100">
              服务流程
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              标准化服务流程
            </h2>
            <p className="text-lg text-slate-600">
              从需求诊断到持续增长，每一步都专业可控
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* 连接线 - 桌面端 */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200" />
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4" staggerDelay={0.15}>
              {serviceProcess.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="relative text-center group">
                    {/* 步骤图标 */}
                    <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-lg transition-all duration-300">
                      <step.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    
                    {/* 步骤编号 */}
                    <div className="absolute -top-2 -right-2 lg:right-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                    
                    {/* 内容 */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
