import { FadeIn } from "@/components/effects/fade-in";
import { StatCounter } from "@/components/effects/counter";
import { stats } from "./data";

export function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-light">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            数据证明
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            用实力说话
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            每一个数字背后，都是客户的信任与成功案例
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
