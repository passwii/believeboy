import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Gift,
  LineChart,
  Rocket,
  Search,
  Sparkles,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const platformTags = ["亚马逊", "沃尔玛", "独立站", "其他平台"];

const offerHighlights = [
  {
    title: "品牌出海合伙人",
    description: "围绕店铺诊断、增长策略、执行落地和复盘优化，提供一站式跨境增长方案。",
    icon: Rocket,
  },
  {
    title: "核心优势加持",
    description: "以亚马逊、沃尔玛、独立站等平台实战经验为基础，把运营效率和品牌表达一起做强。",
    icon: BadgeCheck,
  },
  {
    title: "AI 协同提效",
    description: "将调研、内容、投放与复盘纳入 AI 辅助流程，帮助新卖家更快搭起基础盘。",
    icon: Bot,
  },
];

const giftItems = [
  {
    title: "亚马逊平台免费开店",
    value: "¥600",
    description: "免服务费协助注册，快速开店。",
    icon: Store,
  },
  {
    title: "产品市场调研",
    value: "¥1,600",
    description: "目标市场诊断、竞品分析、定价建议。",
    icon: Search,
  },
  {
    title: "可行性报告",
    value: "¥1,800",
    description: "定制化方案，涵盖运营节奏、怎么做、投入产出预估。",
    icon: LineChart,
  },
];

export const metadata: Metadata = {
  title: "限时活动 | 彼励扶跨境品牌出海礼包",
  description:
    "彼励扶限时活动页，整理品牌出海合伙人方案与新卖家入门大礼包，帮助跨境新卖家更快完成开店、调研与可行性评估。",
};

export default function LimitedOfferPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#f7f7fb_0%,#eef4ff_35%,#ffffff_100%)] pt-16 text-slate-950 md:pt-[72px]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.18),transparent_62%)]" />
          <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-blue-300/25 blur-3xl" />
          <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-rose-300/20 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_420px]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4" />
                导航新增专题
                <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold tracking-[0.14em] text-white">
                  HOT
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,5.8rem)] font-black leading-[0.92] tracking-[-0.06em] text-slate-950">
                限时活动
                <span className="mt-2 block bg-[linear-gradient(90deg,#2b59ff_0%,#f43f5e_55%,#111827_100%)] bg-clip-text text-transparent">
                  新卖家入门大礼包
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                聚焦跨境新卖家冷启动阶段，把开店、市场调研和可行性评估先一步梳理清楚，
                让团队更快判断方向、降低试错成本。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {platformTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group h-14 rounded-2xl bg-slate-950 px-8 text-base font-semibold text-white shadow-[0_20px_50px_-22px_rgba(15,23,42,0.45)] hover:bg-slate-800"
                >
                  <Link href="/contact">
                    立即领取活动福利
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-2xl border-blue-200 bg-white/85 px-8 text-base font-semibold text-blue-700 hover:bg-blue-50"
                >
                  <Link href={`tel:${siteConfig.phone.replace(/-/g, "")}`}>电话咨询活动细则</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-red-200 bg-[linear-gradient(180deg,#fff1f2_0%,#ffffff_100%)] p-7 shadow-[0_24px_70px_-42px_rgba(244,63,94,0.35)]">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500 px-3 py-1 text-xs font-bold tracking-[0.18em] text-white">
                HOT
              </div>
              <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-slate-950">
                现在咨询
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                电话：{siteConfig.phone}
                <br />
                邮箱：{siteConfig.email}
              </p>
              <div className="mt-6 rounded-[1.5rem] border border-red-100 bg-white p-4 shadow-sm">
                <img
                  src="/qr-code.png"
                  alt="微信咨询二维码"
                  className="mx-auto aspect-square w-full max-w-[240px] rounded-xl object-contain"
                />
                <p className="mt-3 text-center text-sm font-medium text-slate-600">
                  扫码添加微信，立即咨询活动详情
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="gift-pack" className="container mx-auto px-4 py-4 md:px-6 lg:px-8">
        <div className="relative rounded-[2.25rem] bg-[linear-gradient(135deg,#101828_0%,#162456_55%,#1d4ed8_100%)] px-6 py-8 text-white shadow-[0_34px_90px_-40px_rgba(37,99,235,0.5)] md:px-8 md:py-10">
          <div className="absolute right-5 top-5 rotate-[7deg] rounded-[1.4rem] border-4 border-white bg-[linear-gradient(180deg,#fff7ed_0%,#ffe4e6_100%)] px-5 py-3 text-right shadow-[0_20px_40px_-18px_rgba(239,68,68,0.78)] md:right-8 md:top-[-18px] md:px-6 md:py-4">
            <div className="pointer-events-none absolute inset-2 rounded-[1rem] border-2 border-red-300/70" />
            <div className="pointer-events-none absolute left-4 right-4 top-4 h-[2px] bg-[repeating-linear-gradient(90deg,rgba(239,68,68,0.9)_0_10px,transparent_10px_16px)]" />
            <div className="pointer-events-none absolute left-4 right-4 bottom-4 h-[2px] bg-[repeating-linear-gradient(90deg,rgba(239,68,68,0.9)_0_10px,transparent_10px_16px)]" />
            <div className="pointer-events-none absolute left-3 top-3 h-3 w-3 rounded-full border border-red-300 bg-white shadow-inner" />
            <div className="pointer-events-none absolute right-3 top-3 h-3 w-3 rounded-full border border-red-300 bg-white shadow-inner" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-red-500 md:text-sm">
                总价值
              </p>
              <p className="mt-1 text-4xl font-black leading-none tracking-[-0.08em] text-red-600 drop-shadow-[0_12px_24px_rgba(239,68,68,0.38)] md:text-5xl">
                ¥4,000
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                福利项目
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
                新卖家入门大礼包
              </h2>
            </div>
          </div>

          <div className="mt-24 grid gap-4 lg:grid-cols-3 md:mt-12">
            {giftItems.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-500/18 blur-2xl" />
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-100">
                    福利价值
                  </div>
                </div>
                <div className="relative mt-6">
                  <p className="text-[clamp(3rem,6vw,4.75rem)] font-black leading-none tracking-[-0.08em] text-white drop-shadow-[0_16px_30px_rgba(239,68,68,0.38)]">
                    {item.value}
                  </p>
                  <div className="mt-3 h-1.5 w-24 rounded-full bg-[linear-gradient(90deg,#fb7185_0%,#f59e0b_100%)] shadow-[0_10px_24px_-10px_rgba(251,113,133,0.9)]" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-14 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {offerHighlights.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[2rem] border p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.26)] ${
                index === 1
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                  index === 1 ? "bg-white/10 text-white" : "bg-blue-50 text-blue-700"
                }`}
              >
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className={`mt-6 text-2xl font-bold ${index === 1 ? "text-white" : "text-slate-950"}`}>
                {item.title}
              </h3>
              <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-slate-300" : "text-slate-600"}`}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      
    </div>
  );
}
