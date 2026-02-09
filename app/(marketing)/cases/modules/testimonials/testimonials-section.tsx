import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { testimonials, type Testimonial } from "./data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
              客户心声
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              他们的成功，就是我们的骄傲
            </h2>
            <p className="text-lg text-slate-400">
              来自真实客户的评价，见证彼励扶的专业价值
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {testimonials.map((testimonial: Testimonial) => (
            <StaggerItem key={testimonial.id}>
              <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* 评分 */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* 评价内容 */}
                  <p className="text-slate-300 leading-relaxed mb-6 flex-grow">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  {/* 作者信息 */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-white">{testimonial.author}</div>
                      <div className="text-sm text-slate-400">{testimonial.title}</div>
                    </div>
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
