import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/shared/cta-section";
import { FadeIn, FadeInContainer, FadeInItem } from "@/components/effects/fade-in";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { StatCounter } from "@/components/effects/counter";
import { 
  ArrowRight, 
  TrendingUp, 
  Sparkles, 
  Target, 
  Heart,
  Search,
  Package,
  Palette,
  Cpu,
  BarChart3,
  ShoppingCart,
  Globe,
  Award,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "彼励扶 - 让中国品牌闪耀全球 | 跨境电商运营服务",
  description: "彼励扶电子商务（苏州）有限公司，专注为中国品牌提供全链路跨境电商解决方案。专业运营×AI赋能，助力出海业绩增长。",
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm text-cyan-400 font-medium">专业跨境电商运营服务</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              让中国品牌
              <br />
              <span className="text-gradient">闪耀全球</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
              专业跨境电商运营 × AI智能驱动
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              彼励扶电子商务（苏州）有限公司，专注为中国品牌提供全链路跨境电商解决方案。
              从亚马逊到独立站，用专业和AI赋能您的出海之路。
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-6 text-base btn-glow group"
              >
                <Link href="/contact">
                  立即咨询
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white/10 text-white hover:bg-white/20 border border-white/20 font-semibold px-8 py-6 text-base backdrop-blur-sm"
              >
                <Link href="/services">了解服务</Link>
              </Button>
            </div>
          </FadeIn>

          {/* Stats Preview */}
          <FadeIn delay={1.2}>
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "3年", label: "行业深耕" },
                  { value: "10", label: "BSR成功案例" },
                  { value: "7", label: "运营平台" },
                  { value: "100M+", label: "人均操盘业绩" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// Logo Wall Section
function LogoWallSection() {
  const platforms = [
    { name: "Amazon", icon: ShoppingCart },
    { name: "Shopify", icon: Globe },
    { name: "TikTok Shop", icon: Sparkles },
    { name: "eBay", icon: Package },
    { name: "Walmart", icon: Target },
    { name: "独立站", icon: Globe },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-slate-500 text-sm mb-8 uppercase tracking-wider">
            覆盖全球主流跨境电商平台
          </p>
        </FadeIn>

        <StaggerContainer className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {platforms.map((platform, index) => (
            <StaggerItem key={index}>
              <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                <platform.icon className="w-5 h-5" />
                <span className="font-medium">{platform.name}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// Why Us Section
function WhyUsSection() {
  const advantages = [
    {
      icon: Globe,
      title: "全生态服务能力",
      description: "从市场调研、产品定位、Listing优化到广告投放、物流管理、品牌建设，覆盖出海全链路。",
      color: "blue",
    },
    {
      icon: Sparkles,
      title: "AI深度赋能",
      description: "自研AI决策系统，将前沿人工智能融入运营各环节，让数据驱动每一个决策，效率提升5倍。",
      color: "cyan",
    },
    {
      icon: Target,
      title: "结果导向合作",
      description: "拒绝'按时间收费'的作坊模式，我们关注销售额增长、利润率提升、品牌资产积累。",
      color: "indigo",
    },
    {
      icon: Heart,
      title: "长期主义理念",
      description: "不止追求短期爆单，更致力于帮助客户构建可持续的全球竞争力。",
      color: "violet",
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            核心优势
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            为什么选择彼励扶
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            专业团队 + AI赋能 = 全方位助力您的全球业务拓展
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {advantages.map((item, index) => (
            <StaggerItem key={index}>
              <div className="group bg-slate-50 rounded-2xl p-6 lg:p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 h-full">
                <div className={`w-14 h-14 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "市场调研与策略",
      description: "深入洞察目标市场的消费趋势、竞争格局与文化特性，为您量身定制高精准度的本地化营销与市场进入策略。",
      features: ["竞品分析", "市场定位", "进入策略"],
    },
    {
      icon: Package,
      title: "产品呈现与转化",
      description: "系统优化产品定位、视觉展示与详情呈现，通过A/B测试与用户体验设计，有效提升页面吸引力与购买转化率。",
      features: ["Listing优化", "视觉设计", "A/B测试"],
    },
    {
      icon: Palette,
      title: "品牌塑造与赋能",
      description: "协助梳理品牌核心价值，通过一致的视觉传达与故事化内容营销，在海外市场构建独特、可信的品牌形象。",
      features: ["品牌定位", "内容营销", "品牌资产"],
    },
    {
      icon: Cpu,
      title: "智能运营与革新",
      description: "应用人工智能与机器学习技术，自动化处理数据分析、广告投放与客户服务等环节，实现运营流程的智能化升级。",
      features: ["AI广告投放", "智能客服", "数据驱动"],
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
            核心服务
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            从市场进入到品牌建设
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            提供一站式跨境电商解决方案，覆盖出海全链路
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, fIndex) => (
                        <span
                          key={fIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="text-center mt-12">
          <Button size="lg" variant="outline" asChild className="group">
            <Link href="/services">
              查看完整服务详情
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

// AI Showcase Section
function AIShowcaseSection() {
  const aiCapabilities = [
    { title: "视觉内容智能", desc: "30分钟生成专业产品场景图", metric: "成本降低85%" },
    { title: "运营数据智能", desc: "实时分析、趋势预测", metric: "效率提升10倍" },
    { title: "商业决策智能", desc: "选品评分、动态定价", metric: "选品成功率65%" },
    { title: "协同管理智能", desc: "任务智能分配、风险预警", metric: "交付准时率95%" },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                AI赋能
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                让AI成为您的
                <br />
                <span className="text-gradient">跨境电商超级大脑</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                我们将前沿人工智能无缝融入电商运营全链路。AI不仅是工具，更是驱动业务增长与创新的核心引擎。
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-4">
              {aiCapabilities.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                    <div className="text-cyan-400 font-semibold text-sm whitespace-nowrap ml-4">
                      {item.metric}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.5} className="mt-8">
              <Button asChild className="bg-gradient-primary hover:opacity-90 text-white group">
                <Link href="/ai-empowerment">
                  探索AI赋能能力
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          {/* Right Visual */}
          <FadeIn delay={0.3} direction="left">
            <div className="relative">
              {/* Code/Terminal Mockup */}
              <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-slate-400 text-sm">ai-analytics.js</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="text-slate-400 mb-2">// AI运营数据分析</div>
                  <div className="text-cyan-400">const <span className="text-white">aiAnalysis</span> = <span className="text-yellow-400">await</span> <span className="text-white">analyze</span>({'{'}</div>
                  <div className="pl-4 text-green-400">
                    platform: <span className="text-orange-400">'amazon'</span>,
                  </div>
                  <div className="pl-4 text-green-400">
                    metrics: [<span className="text-orange-400">'sales'</span>, <span className="text-orange-400">'acos'</span>, <span className="text-orange-400">'conversion'</span>],
                  </div>
                  <div className="pl-4 text-green-400">timeRange: <span className="text-orange-400">'30d'</span>,</div>
                  <div className="text-cyan-400">{'}'});</div>

                  <div className="mt-4 text-slate-400">// 智能洞察结果</div>
                  <div className="text-purple-400">console<span className="text-white">.log</span>(<span className="text-white">aiAnalysis.insights</span>);</div>

                  <div className="mt-4 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <div className="text-green-400 mb-1">✓ 发现高潜力关键词 23 个</div>
                    <div className="text-green-400 mb-1">✓ ACOS 优化建议已生成</div>
                    <div className="text-green-400 mb-1">✓ 库存补货提醒: 3个SKU</div>
                    <div className="text-cyan-400">→ 预计销售额提升 35%</div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">+180%</div>
                    <div className="text-xs text-slate-500">销售增长</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">-51%</div>
                    <div className="text-xs text-slate-500">ACOS降低</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { value: 3, suffix: "年", label: "核心成员平均操盘经验" },
    { value: 10, suffix: "个", label: "Best Seller成功案例" },
    { value: 7, suffix: "大", label: "跨境平台运营能力" },
    { value: 100, suffix: "M+", label: "人均操盘业绩" },
  ];

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

// Cases Section
function CasesSection() {
  const cases = [
    {
      title: "Gas Grill 高端户外烧烤炉",
      platform: "亚马逊美国站",
      image: "/images/cases/gas-grill.webp",
      metrics: [
        { label: "销售增长", value: "+180%" },
        { label: "ACOS降低", value: "-51%" },
        { label: "类目排名", value: "TOP 3" },
      ],
      description: "6个月销售额增长180%，跻身类目Best Seller TOP 3，品牌搜索量提升220%。",
    },
    {
      title: "Glass Food Pan 玻璃餐盘",
      platform: "亚马逊美国站",
      image: "/images/cases/glass.webp",
      metrics: [
        { label: "月销售额", value: "$108K" },
        { label: "毛利率", value: "26%" },
        { label: "破损率降低", value: "-90%" },
      ],
      description: "从代工到自主品牌转型，月销售额突破$108,000，进入BSR TOP 10。",
    },
    {
      title: "Memory Foam Mattress 记忆棉床垫",
      platform: "亚马逊 + 独立站",
      image: "/images/cases/mattress.webp",
      metrics: [
        { label: "双渠道月销", value: "$230K" },
        { label: "品牌搜索", value: "850/月" },
        { label: "客户复购", value: "8%" },
      ],
      description: "亚马逊+独立站双渠道月销$230,000，品牌搜索量从零到850次/月。",
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            成功案例
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            客户的成功，就是我们的成功
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            深度行业理解 + 数据驱动决策 = 可量化的商业价值
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <StaggerItem key={index}>
              <Link href="/cases" className="group block">
                <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="aspect-video bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <Package className="w-16 h-16 text-slate-300" />
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                        {caseItem.platform}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {caseItem.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {caseItem.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200">
                      {caseItem.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="text-center">
                          <div className="text-lg font-bold text-cyan-600">
                            {metric.value}
                          </div>
                          <div className="text-xs text-slate-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="text-center mt-12">
          <Button size="lg" variant="outline" asChild className="group">
            <Link href="/cases">
              查看更多案例
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

// Main Page Component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <LogoWallSection />
      <WhyUsSection />
      <ServicesSection />
      <AIShowcaseSection />
      <StatsSection />
      <CasesSection />
      <CTASection />
    </div>
  );
}
