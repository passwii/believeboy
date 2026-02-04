import { Metadata } from "next";
import {
  TrendingUp,
  TrendingDown,
  Target,
  Award,
  BarChart3,
  Flame,
  UtensilsCrossed,
  BedDouble,
  Quote,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Lightbulb,
  Package,
  ShoppingCart,
  Globe,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, FadeInContainer, FadeInItem } from "@/components/effects/fade-in";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { CTASection } from "@/components/sections/shared/cta-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "案例展示 | 彼励扶",
  description: "用数据说话，见证中国品牌出海的成功之路。查看彼励扶成功帮助的跨境电商案例。",
};

// 案例数据
const cases = [
  {
    id: 1,
    title: "Gas Grill 高端户外烧烤炉",
    icon: Flame,
    category: "户外用品",
    platform: "亚马逊美国站",
    duration: "6个月",
    image: "/images/cases/gas-grill.webp",
    color: "orange",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    clientBackground: "某国内头部户外烧烤设备制造商，年产能超500万台，长期为欧美品牌代工。自有品牌在亚马逊运营2年，销量停滞在月均200单左右。",
    challenges: [
      "产品同质化严重，与竞品外观功能相似",
      "Listing转化率仅8.5%，远低于类目平均12%",
      "ACOS高达45%，广告投入产出比失衡",
      "品牌认知度低，90%订单来自广告流量",
    ],
    solution: [
      "重新策划视觉方案：拍摄户外家庭聚会场景图",
      "优化标题关键词，精准捕捉高意向流量",
      "制作A+品牌故事页，构建品牌调性",
      "广告结构重组，季节性campaign提前布局",
    ],
    stats: [
      {
        label: "月销售额",
        before: "$58,000",
        after: "$162,400",
        change: "+180%",
        trend: "up",
        icon: BarChart3,
      },
      {
        label: "广告ACOS",
        before: "45%",
        after: "22%",
        change: "-51%",
        trend: "down",
        icon: Target,
      },
      {
        label: "类目排名",
        before: "#48",
        after: "TOP 3",
        change: "BSR",
        trend: "up",
        icon: Award,
      },
      {
        label: "自然流量占比",
        before: "15%",
        after: "42%",
        change: "+180%",
        trend: "up",
        icon: TrendingUp,
      },
    ],
    testimonial: "彼励扶团队不仅帮我们提升了销量，更重要的是建立了品牌资产的长期价值。现在我们的产品有了清晰的定位和忠实的用户群体。",
  },
  {
    id: 2,
    title: "Glass Food Pan 玻璃餐盘",
    icon: UtensilsCrossed,
    category: "厨房用品",
    platform: "亚马逊美国站",
    duration: "8个月",
    image: "/images/cases/glass.webp",
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
    clientBackground: "华东地区知名玻璃制品工厂，年出口额超3000万美元，长期为Anchor Hocking、Pyrex等美国品牌代工。",
    challenges: [
      "工厂供货模式下利润被压缩至5%以下",
      "缺乏直接触达消费者的渠道和品牌认知",
      "产品定位模糊，与低价货和高端竞争均不占优",
      "物流破损率高达8%，客户差评集中在运输损坏",
    ],
    solution: [
      "差异化定位：主打专业级家庭烘焙概念",
      "套装组合：将单品改为3件套组合，客单价提升",
      "包装升级：定制蜂窝纸板+珍珠棉内衬",
      "整柜海运+第三方海外仓，头程成本降低40%",
    ],
    stats: [
      {
        label: "月销售额",
        before: "$12,000",
        after: "$108,000",
        change: "+800%",
        trend: "up",
        icon: BarChart3,
      },
      {
        label: "毛利率",
        before: "<5%",
        after: "26%",
        change: "工厂直销优势",
        trend: "up",
        icon: TrendingUp,
      },
      {
        label: "破损率",
        before: "8%",
        after: "0.8%",
        change: "-90%",
        trend: "down",
        icon: Package,
      },
      {
        label: "类目排名",
        before: "未上榜",
        after: "TOP 8",
        change: "BSR前十",
        trend: "up",
        icon: Award,
      },
    ],
    testimonial: "从代工到自主品牌这条路，彼励扶帮我们跑通了。现在我们有稳定的利润来源，不再单纯依赖品牌方订单。",
  },
  {
    id: 3,
    title: "Memory Foam Mattress 记忆棉床垫",
    icon: BedDouble,
    category: "家居用品",
    platform: "亚马逊+独立站",
    duration: "12个月",
    image: "/images/cases/mattress.webp",
    color: "violet",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
    clientBackground: "佛山某家具企业，主营床垫OEM出口，年产能20万张。计划拓展美国DTC市场，但品牌认知度为零。",
    challenges: [
      "品牌认知度为零，床垫类目品牌集中度高达65%",
      "产品定价$350，处于竞争激烈的中端市场",
      "独立站流量成本高昂，Facebook CPM $35+",
      "退货率高达12%，远超行业平均5%",
    ],
    solution: [
      "定位工程师思维做床垫，强调材料科学和工艺精度",
      "打造100-Night Risk-Free Trial试睡计划",
      "Vine计划快速积累50+评价，建立初期口碑",
      "TikTok内容营销与家居类KOC合作",
    ],
    stats: [
      {
        label: "亚马逊月销",
        before: "$45,000",
        after: "$168,000",
        change: "+273%",
        trend: "up",
        icon: ShoppingCart,
      },
      {
        label: "独立站月销",
        before: "$8,000",
        after: "$62,000",
        change: "+675%",
        trend: "up",
        icon: Globe,
      },
      {
        label: "品牌搜索量",
        before: "0",
        after: "850次/月",
        change: "自然流量",
        trend: "up",
        icon: TrendingUp,
      },
      {
        label: "退货率",
        before: "12%",
        after: "5.5%",
        change: "接近行业均值",
        trend: "down",
        icon: TrendingDown,
      },
    ],
    testimonial: "彼励扶不仅是一个运营服务商，更像是我们的出海合伙人。从品牌定位到渠道选择，每个决策都有数据支撑。",
  },
];

// 客户评价数据
const testimonials = [
  {
    id: 1,
    content: "合作6个月，我们的亚马逊店铺从濒临关停到类目TOP3。彼励扶团队的专业度和执行力令人印象深刻。",
    author: "张总",
    title: "户外用品品牌创始人",
    rating: 5,
  },
  {
    id: 2,
    content: "从0到月销10万美金，彼励扶帮我们完成了从工厂到品牌的转型。现在我们有底气对低价竞争说不。",
    author: "李经理",
    title: "玻璃制品工厂负责人",
    rating: 5,
  },
  {
    id: 3,
    content: "AI赋能的数据分析能力让我们在选品和广告投放上少走了许多弯路，ROI提升非常明显。",
    author: "王总监",
    title: "家居品牌运营总监",
    rating: 5,
  },
  {
    id: 4,
    content: "彼励扶团队对亚马逊算法的理解非常深入，帮助我们避开了很多政策风险，稳健增长。",
    author: "陈总",
    title: "3C电子产品卖家",
    rating: 5,
  },
];

// 对比数据卡片组件
function StatComparisonCard({
  stat,
  color,
}: {
  stat: (typeof cases)[0]["stats"][0];
  color: string;
}) {
  const colorClasses: Record<string, { bg: string; text: string; icon: string; gradient: string }> = {
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      icon: "text-orange-500",
      gradient: "from-orange-500 to-red-500",
    },
    cyan: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      icon: "text-cyan-500",
      gradient: "from-cyan-500 to-blue-500",
    },
    violet: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      icon: "text-violet-500",
      gradient: "from-violet-500 to-purple-500",
    },
  };

  const colors = colorClasses[color] || colorClasses.orange;
  const isPositive = stat.trend === "up";

  return (
    <div className={`${colors.bg} rounded-xl p-5 hover:shadow-lg transition-all duration-300`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm`}>
          <stat.icon className={`w-5 h-5 ${colors.icon}`} />
        </div>
        <span className="text-slate-600 font-medium">{stat.label}</span>
      </div>
      
      <div className="space-y-3">
        {/* 优化前 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">优化前</span>
          <span className="text-slate-500 line-through">{stat.before}</span>
        </div>
        
        {/* 优化后 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">优化后</span>
          <span className={`text-xl font-bold ${colors.text}`}>{stat.after}</span>
        </div>
        
        {/* 变化 */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-emerald-500" />
          )}
          <span className={`text-sm font-semibold ${isPositive ? "text-emerald-600" : "text-emerald-600"}`}>
            {stat.change}
          </span>
        </div>
      </div>
    </div>
  );
}

// 案例详情组件
function CaseSection({ caseData, index }: { caseData: typeof cases[0]; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <section className={`py-20 md:py-24 ${isEven ? "bg-white" : "bg-slate-50"}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${isEven ? "" : "lg:flex-row-reverse"}`}>
          {/* 左侧：案例信息 */}
          <FadeIn className={isEven ? "" : "lg:order-2"}>
            <div>
              {/* 标签 */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge className={`bg-gradient-to-r ${caseData.gradient} text-white border-0`}>
                  <caseData.icon className="w-3 h-3 mr-1" />
                  {caseData.category}
                </Badge>
                <Badge variant="outline" className="text-slate-600">
                  {caseData.platform}
                </Badge>
                <Badge variant="outline" className="text-slate-600">
                  合作周期：{caseData.duration}
                </Badge>
              </div>
              
              {/* 标题 */}
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                案例{String(index + 1).padStart(2, "0")}：{caseData.title}
              </h2>
              
              {/* 客户背景 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  客户背景
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {caseData.clientBackground}
                </p>
              </div>
              
              {/* 核心挑战 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  核心挑战
                </h3>
                <ul className="space-y-2">
                  {caseData.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 解决方案 */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  解决方案
                </h3>
                <ul className="space-y-2">
                  {caseData.solution.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
          
          {/* 右侧：数据成果 */}
          <FadeIn delay={0.2} className={isEven ? "" : "lg:order-1"}>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-500" />
                优化成果
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseData.stats.map((stat, i) => (
                  <StatComparisonCard key={i} stat={stat} color={caseData.color} />
                ))}
              </div>
              
              {/* 客户评价卡片 */}
              <div className="mt-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white">
                <Quote className="w-8 h-8 text-slate-600 mb-4" />
                <p className="text-slate-200 leading-relaxed mb-4 italic">
                  "{caseData.testimonial}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-sm font-semibold">
                    {caseData.testimonial.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{caseData.category}客户</div>
                    <div className="text-sm text-slate-400">{caseData.platform}</div>
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

export default function CasesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - 页面头部 */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* 背景光效装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-500/5 rounded-full blur-3xl" />
          
          {/* 网格背景 */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
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

      {/* 案例展示区 */}
      {cases.map((caseData, index) => (
        <CaseSection key={caseData.id} caseData={caseData} index={index} />
      ))}

      {/* 客户评价 Section */}
      <section className="py-20 md:py-24 bg-slate-900 relative overflow-hidden">
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
            {testimonials.map((testimonial, index) => (
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
                      "{testimonial.content}"
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

      {/* 成功案例数据汇总 */}
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

      {/* CTA Section */}
      <CTASection 
        title="成为下一个成功案例"
        subtitle="无论您是刚起步的跨境卖家，还是寻求突破的品牌企业，我们都可以为您提供定制化的增长方案。"
        primaryButtonText="预约免费咨询"
        primaryButtonHref="/contact"
        secondaryButtonText="了解我们的服务"
        secondaryButtonHref="/services"
        variant="default"
        showSecondary={true}
      />
    </main>
  );
}
