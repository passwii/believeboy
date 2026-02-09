import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { coreAdvantages } from "./data";
import { TrendingUp, Sparkles } from "lucide-react";

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-24 md:py-32 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-1.5 text-sm font-medium bg-blue-100/80 text-blue-700 hover:bg-blue-100 border-0"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              核心优势
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
              我们的优势
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              专业团队 + AI赋能 = 全方位助力您的全球业务拓展
            </p>
          </div>
        </FadeIn>

        {/* Advantages Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" 
          staggerDelay={0.08}
        >
          {coreAdvantages.map((advantage, index) => (
            <StaggerItem key={index}>
              <Card className="h-full group relative bg-white border-slate-200/60 hover:border-blue-200/80 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] transition-all duration-500 ease-out overflow-hidden">
                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <CardHeader className="pb-3 pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Icon Container */}
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 flex items-center justify-center group-hover:from-blue-50 group-hover:to-blue-100 group-hover:border-blue-200 transition-all duration-300">
                      <TrendingUp className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                    {/* Index Number */}
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                      0{index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pb-6">
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
