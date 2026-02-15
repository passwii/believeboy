import { Award } from "lucide-react";
import { FadeIn } from "@/components/effects/fade-in";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(120%_80%_at_50%_0%,#13315f_0%,#081325_45%,#030712_100%)] py-16 md:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-[-10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-8%] top-1/3 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 mb-8">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">成功案例</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              案例展示
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium mb-6">
              用数据说话，见证中国品牌出海的成功之路
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              深度解析真实案例，展示我们如何帮助客户实现销售额增长、降低运营成本、提升品牌影响力。
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
