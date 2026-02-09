import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { coreServices } from "./data";

export function CoreServicesSection() {
  return (
    <section id="core-services" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">
              核心服务
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              从市场进入到品牌建设
            </h2>
            <p className="text-lg text-slate-600">
              提供一站式跨境电商解决方案，覆盖出海全链路
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.15}>
          {coreServices.map((service, index) => (
            <StaggerItem key={index}>
              <Card className="h-full bg-white border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                {/* 顶部装饰条 */}
                <div className={`h-1 bg-gradient-to-r from-${service.color}-500 to-${service.color}-400`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-${service.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-7 h-7 text-${service.color}-600`} />
                    </div>
                    <div className={`w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center opacity-50`}>
                      <service.secondaryIcon className="w-5 h-5 text-slate-500" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, fIndex) => (
                      <Badge 
                        key={fIndex} 
                        variant="outline" 
                        className="text-xs bg-slate-50 text-slate-600 border-slate-200"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
