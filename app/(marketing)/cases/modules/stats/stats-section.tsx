import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";

export function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              数据见证实力
            </h2>
            <p className="text-lg text-slate-600">
              我们以结果为导向，用数据证明价值
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
          <StaggerItem>
            <div className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                3年
              </div>
              <div className="text-slate-600 font-medium">跨境服务经验</div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">
                10+
              </div>
              <div className="text-slate-600 font-medium">成功案例</div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                180%
              </div>
              <div className="text-slate-600 font-medium">平均销售增长</div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                35%
              </div>
              <div className="text-slate-600 font-medium">平均ACOS优化</div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
