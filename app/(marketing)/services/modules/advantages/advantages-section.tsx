import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { coreAdvantages } from "./data";

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              我们的优势
            </h2>
            <p className="text-lg text-slate-600">
              专业团队 + AI赋能 = 全方位助力您的全球业务拓展
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {coreAdvantages.map((advantage, index) => (
            <StaggerItem key={index}>
              <Card className="h-full bg-white border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">
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
