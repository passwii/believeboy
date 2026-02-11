"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { coreValues, serviceModules } from "@/app/(marketing)/pricing/modules/x-package/data";

// 动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const premiumHighlights = [
  "联合定义品牌DNA与增长模型",
  "配置专属跨境运营与增长团队",
  "全链路执行，聚焦利润与品牌资产沉淀",
  "季度复盘机制，持续优化投放与履约效率",
];

const particleConfig = Array.from({ length: 20 }, (_, i) => ({
  left: ((i * 37) % 100) + (i % 3) * 0.6,
  top: ((i * 29) % 100) + ((i + 1) % 2) * 0.4,
  delay: (i % 7) * 0.35,
  duration: 3 + (i % 5) * 0.4,
}));

const valueThemes = [
  {
    edge: "border-amber-300/35",
    aura: "from-amber-500/25 via-amber-300/10 to-transparent",
    iconBox: "from-amber-400/25 to-orange-500/20",
    iconColor: "text-amber-200",
    tag: "border-amber-300/30 bg-amber-500/15 text-amber-200",
  },
  {
    edge: "border-cyan-300/35",
    aura: "from-cyan-500/25 via-sky-300/10 to-transparent",
    iconBox: "from-cyan-400/25 to-blue-500/20",
    iconColor: "text-cyan-200",
    tag: "border-cyan-300/30 bg-cyan-500/15 text-cyan-200",
  },
  {
    edge: "border-emerald-300/35",
    aura: "from-emerald-500/25 via-lime-300/10 to-transparent",
    iconBox: "from-emerald-400/25 to-lime-500/20",
    iconColor: "text-emerald-200",
    tag: "border-emerald-300/30 bg-emerald-500/15 text-emerald-200",
  },
  {
    edge: "border-fuchsia-300/35",
    aura: "from-fuchsia-500/25 via-pink-300/10 to-transparent",
    iconBox: "from-fuchsia-400/25 to-pink-500/20",
    iconColor: "text-fuchsia-200",
    tag: "border-fuchsia-300/30 bg-fuchsia-500/15 text-fuchsia-200",
  },
];

export function XPackageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="x-package"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#020617" }}
    >
      {/* 背景效果 */}
      <div className="absolute inset-0">
        {/* 渐变叠加 */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/10 via-transparent to-transparent" />
        
        {/* 顶部光晕 */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245, 158, 11, 0.15), transparent)"
          }}
        />
        
        {/* 底部光晕 */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 120%, rgba(6, 182, 212, 0.1), transparent)"
          }}
        />

        {/* 粒子效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particleConfig.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                backgroundColor: i % 2 === 0 ? "rgba(245, 158, 11, 0.4)" : "rgba(6, 182, 212, 0.4)",
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 内容区域 */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* 头部区域 */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <div className="mx-auto max-w-4xl text-center">
            {/* VIP Badge */}
            <motion.div variants={itemVariants}>
              <Badge 
                className="mb-6 px-5 py-2 text-sm font-medium bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 border border-amber-500/30 backdrop-blur-sm hover:from-amber-500/30 hover:to-amber-600/30 transition-all duration-300"
              >
                <Star className="w-4 h-4 mr-2 fill-amber-400" />
                至尊合伙人方案 · 仅限2-5席/年
              </Badge>
            </motion.div>

            {/* 主标题 */}
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font: bold text-white mb-6 leading-tight"
            >
              联合运营品牌出海计划
            </motion.h2>

            {/* 分隔线 */}
            <motion.div 
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mb-6 rounded-full"
            />

            {/* 副标题 */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-300 font-light"
            >
              从代运营到品牌共创，从卖货人到品牌人
            </motion.p>
          </div>

          {/* 战略投资级服务定价卡片 */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 max-w-5xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-3xl border border-amber-400/25 bg-gradient-to-br from-amber-500/10 via-slate-950/90 to-cyan-900/10 backdrop-blur-xl shadow-[0_0_60px_-20px_rgba(245,158,11,0.35)]">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 left-0 h-60 w-60 rounded-full bg-amber-500/20 blur-3xl" />
                <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
              </div>

              <div className="relative grid gap-8 p-7 md:p-10 lg:grid-cols-5 lg:gap-10 lg:p-12">
                <div className="text-left lg:col-span-3">
                  <Badge className="mb-5 border border-amber-400/30 bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-300">
                    <Star className="mr-2 h-4 w-4 fill-amber-300" />
                    战略投资级服务
                  </Badge>

                  <h4 className="text-2xl font-semibold text-white md:text-3xl">
                    合伙人级联合运营，不是普通代运营
                  </h4>
                  <p className="mt-3 text-slate-300 md:text-lg">
                    我们深度参与品牌增长全链路，围绕品牌资产与净利润目标做长期共创。
                  </p>

                  <div className="mt-6 grid gap-3">
                    {premiumHighlights.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                        <span className="text-sm text-slate-200 md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-left lg:col-span-2 lg:h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-amber-400/30 bg-slate-950/70 p-6 md:p-7">
                    <p className="text-sm text-slate-400">年度战略合作投入</p>
                    <div className="mt-2 flex items-end gap-1">
                      <span className="pb-2 text-2xl font-semibold text-amber-300">¥</span>
                      <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-4xl font-bold leading-none text-transparent md:text-5xl lg:text-6xl">
                        258,000
                      </span>
                      <span className="pb-1 text-lg text-slate-400">/年</span>
                    </div>

                    <div className="my-5 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

                    <div className="space-y-2 text-sm text-slate-300 md:text-base">
                      <p>
                        最低合作期 <span className="font-semibold text-amber-300">18个月</span>
                      </p>
                      <p>
                        净利润分成 <span className="font-semibold text-amber-300">25-35%</span>
                      </p>
                      <p>
                        年度席位 <span className="font-semibold text-amber-300">仅限2-5席</span>
                      </p>
                    </div>

                    <Button
                      size="lg"
                      asChild
                      className="mt-auto w-full bg-gradient-to-r from-amber-500 to-amber-600 py-6 text-base font-semibold text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/35 group/btn"
                    >
                      <Link href="/contact">
                        立即预约战略咨询
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 四大核心价值展示 */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="mb-3 text-2xl font-semibold text-white md:text-3xl">
              四大核心独特价值
            </h3>
            <p className="text-slate-300">
              每一项价值都与“品牌资产沉淀 + 盈利增长”直接绑定
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.25 } }}
                className="group"
              >
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border bg-slate-950/55 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)] ${valueThemes[index % valueThemes.length].edge}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${valueThemes[index % valueThemes.length].aura}`}
                  />

                  <div className="relative mb-6 flex items-center justify-between">
                    <div className="text-3xl font-bold tracking-tight text-white/20">
                      0{index + 1}
                    </div>
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 ${valueThemes[index % valueThemes.length].iconBox}`}
                    >
                      <value.icon className={`h-7 w-7 ${valueThemes[index % valueThemes.length].iconColor}`} />
                    </div>
                  </div>

                  <h4 className="mb-2 text-xl font-semibold text-white">
                    {value.title}
                  </h4>
                  <span
                    className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${valueThemes[index % valueThemes.length].tag}`}
                  >
                    {value.description}
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    {value.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 八大服务模块 */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="mb-3 text-2xl font-semibold text-white md:text-3xl">
              八大服务模块
            </h3>
            <p className="text-slate-300">
              从战略到落地的 8 步执行链路，每一步都可量化、可复盘
            </p>
          </motion.div>

          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-900/10 via-slate-950/75 to-blue-900/10 p-6 md:p-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
              <div className="absolute -left-20 top-1/3 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative mb-8 flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">Execution Path</p>
              <p className="text-xs text-slate-400">8 Steps / End-to-End</p>
            </div>

            <div className="relative px-1 md:px-3 lg:px-8">
              <div className="pointer-events-none absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-300/20 via-cyan-300/70 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

              <div className="space-y-7 md:space-y-8">
                {serviceModules.map((module, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative grid min-h-24 grid-cols-[2.5rem_1fr] items-center gap-4 lg:min-h-28 lg:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] lg:gap-8"
                    >
                      <div className="hidden lg:block" />

                      <div className="relative z-10 col-start-1 row-start-1 flex items-center justify-center lg:col-start-2">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/45 bg-slate-900/95 shadow-[0_0_20px_-8px_rgba(34,211,238,0.85)]">
                          <module.icon className="h-5 w-5 text-cyan-200" />
                        </div>
                      </div>

                      <div
                        className={`col-start-2 row-start-1 ${
                          isLeft ? "lg:col-start-1 lg:text-right" : "lg:col-start-3 lg:text-left"
                        }`}
                      >
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-200/85">
                          Step {String(index + 1).padStart(2, "0")}
                        </p>
                        <h4 className="mt-1 text-2xl font-semibold leading-tight text-white md:text-[1.75rem]">
                          {module.name}
                        </h4>
                        <p className="mt-2 text-base leading-relaxed text-slate-200">
                          {module.desc}
                        </p>
                        <div
                          className={`mt-3 h-px w-28 bg-gradient-to-r from-cyan-300/75 to-transparent ${
                            isLeft ? "lg:ml-auto lg:bg-gradient-to-l" : ""
                          }`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
