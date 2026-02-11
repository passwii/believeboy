"use client";

import { SlideUp } from "@/components/effects/slide-up";
import { 
  ArrowRight,
  ChartSpline,
  Globe,
  Layers3,
  Workflow,
} from "lucide-react";
import Link from "next/link";

export function CompanySection() {
  const phases = [
    {
      title: "市场与品牌定位",
      desc: "识别目标市场、价格带和用户偏好，建立可执行的品类与品牌策略。",
    },
    {
      title: "渠道与内容增长",
      desc: "围绕平台规则搭建流量结构，打通广告投放、内容矩阵和达人协同。",
    },
    {
      title: "经营与复购优化",
      desc: "通过利润模型、库存策略和生命周期运营，持续提升经营效率。",
    },
  ];

  const cards = [
    {
      icon: Layers3,
      title: "全链路执行",
      desc: "策略、运营、创意、数据在一个团队内闭环。",
      color: "bg-sky-100 text-sky-700",
    },
    {
      icon: Workflow,
      title: "方法论资产化",
      desc: "把有效动作沉淀成SOP，不依赖单一人才经验。",
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      icon: ChartSpline,
      title: "经营导向增长",
      desc: "不只看GMV，更关注利润质量和长期品牌价值。",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: Globe,
      title: "多市场协同",
      desc: "覆盖北美、欧洲和东南亚主流平台与消费者场景。",
      color: "bg-indigo-100 text-indigo-700",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SlideUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                <span>我们的角色</span>
              </div>
            </SlideUp>
            
            <SlideUp delay={0.1}>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                彼励扶 <span className="text-blue-700">BelieveBoy</span>
                <span className="block text-slate-700">是品牌的出海增长团队</span>
              </h2>
            </SlideUp>
            
            <SlideUp delay={0.2}>
              <p className="mb-8 text-base leading-relaxed text-slate-600 md:text-lg">
                我们专注服务中国品牌全球化，从“单点运营”升级到“系统增长”。
                团队同时覆盖业务策略、平台运营、增长创意、数据分析与复盘机制，
                帮客户在复杂市场里保持清晰节奏和稳定产出。
              </p>
            </SlideUp>

            <SlideUp delay={0.3}>
              <div className="space-y-4">
                {phases.map((phase, index) => (
                  <div key={phase.title} className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <h3 className="font-semibold text-slate-900">{phase.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </SlideUp>

            <SlideUp delay={0.4}>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
              >
                查看完整服务模块
                <ArrowRight className="h-4 w-4" />
              </Link>
            </SlideUp>
          </div>
          
          <SlideUp delay={0.2} className="relative">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
              <div className="mb-6 border-b border-slate-100 pb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Growth Blueprint</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">增长执行蓝图</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  我们将复杂的跨境运营拆解为可追踪、可复盘、可放大的执行模块。
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {cards.map((card) => (
                  <div key={card.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${card.color}`}>
                      <card.icon className="h-5 w-5" />
                    </div>
                    <h4 className="mb-1 text-sm font-semibold text-slate-900">{card.title}</h4>
                    <p className="text-xs leading-relaxed text-slate-600">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
