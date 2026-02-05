import { Metadata } from "next";
import {
  Sparkles,
  Building2,
  Target,
  Zap,
  Bot,
  ArrowRight,
  Clock,
  Shield,
  TrendingUp,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  HelpCircle,
  Star
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, FadeInContainer, FadeInItem } from "@/components/effects/fade-in";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { CTASection } from "@/components/sections/shared/cta-section";
import { XPackageSection } from "./sections/x-package-section";
import { PricingCard } from "./components/pricing-card";
import type { PricingPlan } from "./data/pricing-plans";
import Link from "next/link";

export const metadata: Metadata = {
  title: "定价方案 | 彼励扶",
  description: "彼励扶提供灵活的跨境电商服务定价方案，透明的价格，灵活的合作模式，满足不同规模企业的需求。",
};

// 三种合作模式数据
const pricingPlans: PricingPlan[] = [
  {
    id: "pro",
    icon: "building",
    title: "Pro 方案",
    subtitle: "专业起步计划",
    priceRange: "¥4,000 - ¥6,000",
    priceUnit: "/月",
    description: "适合月销售额0-5W美金的中小卖家，刚起步或处于运营瓶颈期",
    features: [
      "亚马逊 + 沃尔玛双平台运营",
      "店铺诊断与6-12月运营路线图",
      "每月筛选2-4款潜力产品",
      "PPC广告全托管（SP、SB、SD）",
      "FBA/WFS库存实时预警与补货计划",
      "每周数据周报 + 每月复盘教学",
      "1对1专属运营经理，工作日9:00-21:00支持",
    ],
    extraInfo: "单平台¥4,000/月 · 双平台¥6,000/月 · 最低6个月",
    color: "blue",
    featured: false,
  },
  {
    id: "max",
    icon: "trending",
    title: "Max 方案",
    subtitle: "新手企业全托管起步计划",
    priceRange: "¥88,000 - ¥128,000",
    priceUnit: "/年",
    description: "适合首次涉足跨境电商的企业，无亚马逊、沃尔玛平台运营经验，无内部专业运营团队",
    features: [
      "亚马逊北美站 + 沃尔玛美国站双平台全包",
      "全流程入驻代办及品牌备案指导",
      "每月4-6个潜力产品筛选及Listing全优化",
      "双平台广告全托管（目标ACoS≤30%）",
      "FBA/WFS库存预警及补货计划",
      "每周数据周报 + 每月深度复盘会",
      "1对1专属运营经理，工作日9:00-21:00支持",
    ],
    extraInfo: "标准价¥128,000/年 · 经济价¥88,000/年 · 最低12个月 · 业绩提成阶梯7%-13%",
    color: "cyan",
    featured: true,
    badge: "推荐",
  },
  {
    id: "ultra",
    icon: "target",
    title: "Ultra 方案",
    subtitle: "老卖家增长托管计划",
    priceRange: "¥10,000 - ¥15,000",
    priceUnit: "/月",
    description: "适合已有稳定跨境运营基础的老卖家，月销3-15万+美金，面临业绩瓶颈或团队离职断层问题",
    features: [
      "亚马逊 + 沃尔玛双平台深度全托管",
      "深度诊断与12-24个月长期增长战略",
      "每月8-15个潜力爆款挖掘与系列化布局",
      "广告全域操盘（目标ACoS≤22%）+ 品牌内容营销",
      "FBA多仓布局优化，规避2026涨费及超龄罚款",
      "24小时专业客服外包 + 差评拦截（目标评分≥4.6）",
      "AI数据仪表盘 + 季度运营workshop知识转移",
      "离职应急专项：48小时内无缝接管运营",
    ],
    extraInfo: "主推价¥12,800/月 · 最低12个月 · 压2付1模式 · 业绩提成阶梯3.5%-5%",
    color: "violet",
    featured: false,
  },
];

// AI工具订阅方案
const aiPlans = [
  {
    name: "AI-Suite 基础版",
    price: "¥2,000",
    unit: "/月",
    description: "适合初创卖家，自动化基础运营工作",
    features: [
      "AI Listing文案生成",
      "智能客服自动回复",
      "数据报表自动生成",
    ],
    color: "blue",
  },
  {
    name: "AI-Suite 专业版",
    price: "¥5,000",
    unit: "/月",
    description: "适合成长型卖家，全方位AI赋能",
    features: [
      "包含基础版全部功能",
      "AI图像生成（200张/月）",
      "广告智能优化",
      "选品决策支持",
    ],
    color: "cyan",
    featured: true,
  },
  {
    name: "AI-Suite 企业版",
    price: "定制报价",
    unit: "",
    description: "适合大型卖家，无限制AI能力",
    features: [
      "全部功能无限制",
      "私有模型部署",
      "API对接",
      "专属技术支持",
    ],
    color: "violet",
  },
];

// FAQ常见问题
const faqItems = [
  {
    question: "合作流程是怎样的？",
    answer: "我们的合作流程分为五个步骤：1) 需求诊断 - 深入了解您的业务现状和目标；2) 策略制定 - 基于诊断结果制定个性化方案；3) 签约启动 - 确认合作细节并签署合同；4) 执行落地 - 专业团队按计划执行运营工作；5) 持续优化 - 定期复盘数据并调整策略。整个流程公开透明，确保双方目标一致。",
  },
  {
    question: "Max 方案业绩分成模式如何计算？",
    answer: "Max 方案采用\"基础服务费+销售额提成\"的结构。基础服务费用于覆盖团队基础成本。销售额提成按阶梯计算，我们仅对增量部分收取提成，保护您的存量业绩利益。具体提成比例请咨询我们的顾问。",
  },
  {
    question: "是否提供试用？",
    answer: "我们提供免费的初步诊断咨询（价值¥3,000），帮助您了解当前业务状况和优化空间。对于 Pro 方案，我们设置3个月的磨合期，期间可根据效果调整合作方式。虽然我们不提供完全免费的试用，但我们的最低合作门槛较低，可以让您以较小成本体验我们的服务质量。",
  },
  {
    question: "如何保障数据安全？",
    answer: "数据安全是我们的首要考量：1) 所有员工签署严格的保密协议；2) 使用企业级加密技术保护数据传输和存储；3) 权限分级管理，最小权限原则；4) 定期进行安全审计；5) 可签署独立的NDA保密协议；6) 合作结束后，按约定销毁或返还所有数据。我们采用SharePoint等企业级协作平台，确保数据安全可控。",
  },
  {
    question: "合同周期是多久？",
    answer: "不同模式的合同周期不同：Pro 方案最低合作期6个月，采用压2付1模式；Max 方案最低合作期6个月，前期需要投入建立基础；Ultra 方案采用年度框架协议，具体条款可商议。我们支持合作满3个月后根据实际情况调整方案。",
  },
];

// Icon map for selection guide
const selectionIconMap = {
  building: Building2,
  trending: TrendingUp,
  target: Target,
};
const selectionGuide = [
  {
    stage: "刚起步，预算有限",
    recommendation: "Pro 方案 - 单平台版",
    icon: "building",
  },
  {
    stage: "有一定基础，追求增长",
    recommendation: "Max 方案",
    icon: "trending",
  },
  {
    stage: "成熟品牌，寻求战略伙伴",
    recommendation: "Ultra 方案",
    icon: "target",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - 页面头部 */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm text-white/80">透明的费用结构 · 按效果付费</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                定价方案
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-6">
                透明的价格，灵活的合作模式
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                我们相信，最好的合作是结果导向的合作。无论选择哪种模式，我们都承诺：
                透明的费用结构、可量化的服务目标、按效果付费的诚意。
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href="/contact">
                    获取定制报价
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-white/10 text-white hover:bg-white/20 border border-white/30 font-semibold px-8 py-6 text-base transition-all duration-300 backdrop-blur-sm"
                >
                  <Link href="#pricing-plans">
                    查看方案详情
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 三种合作模式 Section */}
      <section id="pricing-plans" className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">
                服务方案
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                三种合作模式
              </h2>
              <p className="text-lg text-slate-600">
                灵活的定价模式，匹配不同阶段的出海需求
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.id}>
                <PricingCard {...plan} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      

      {/* X 套餐 Section */}
      <XPackageSection />
      
      {/* 选择建议 Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                不知道选哪个方案？
              </h2>
              <p className="text-slate-600">
                根据您当前的发展阶段，我们提供以下选择建议
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.1}>
            {selectionGuide.map((guide, index) => {
              const GuideIcon = selectionIconMap[guide.icon as keyof typeof selectionIconMap];
              return (
                <StaggerItem key={index}>
                  <div className="bg-slate-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300 group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                        <GuideIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-sm text-slate-500">{guide.stage}</span>
                    </div>
                    <p className="font-semibold text-slate-900">{guide.recommendation}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* AI工具订阅 Section */}
      <section className="py-20 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-white/10 text-cyan-400 border-0">
                <Bot className="w-4 h-4 mr-1" />
                AI工具订阅
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Suite 智能工具套件
              </h2>
              <p className="text-lg text-slate-400">
                附加服务，让AI为您的运营效率加速
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto" staggerDelay={0.1}>
            {aiPlans.map((plan, index) => (
              <StaggerItem key={index}>
                <Card 
                  className={`h-full bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${
                    plan.featured ? 'ring-2 ring-cyan-500/50' : ''
                  }`}
                >
                  {plan.featured && (
                    <div className="bg-cyan-500/20 text-cyan-400 text-center py-1.5 text-xs font-semibold">
                      最受欢迎
                    </div>
                  )}
                  
                  <CardHeader className={plan.featured ? 'pt-4' : ''}>
                    <CardTitle className="text-lg font-bold text-white">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400">{plan.unit}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-400">{plan.description}</p>
                    
                    <ul className="space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <Zap className={`w-4 h-4 text-${plan.color}-400 mt-0.5 shrink-0`} />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.featured ? 'default' : 'outline'}
                      className={`w-full mt-4 ${
                        plan.featured 
                          ? 'bg-cyan-500 hover:bg-cyan-400 text-white' 
                          : 'border-white/30 text-white hover:bg-white/10'
                      }`}
                      asChild
                    >
                      <Link href="/contact">
                        了解详情
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
                <HelpCircle className="w-4 h-4 mr-1" />
                常见问题
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                FAQ
              </h2>
              <p className="text-lg text-slate-600">
                关于合作模式，您可能想了解的问题
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 last:border-b-0">
                    <AccordionTrigger className="px-6 py-5 hover:bg-slate-50 text-left text-slate-900 font-semibold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">
                          {index + 1}
                        </span>
                        <span>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 text-slate-600 leading-relaxed">
                      <div className="pl-11">
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="每个企业的情况都不同"
        subtitle="我们建议您预约一次免费咨询，让我们的顾问根据您的产品、目标市场和当前状况，为您推荐最适合的方案。"
        primaryButtonText="立即预约咨询"
        primaryButtonHref="/contact"
        secondaryButtonText="查看成功案例"
        secondaryButtonHref="/cases"
        variant="default"
        showSecondary={true}
      />
    </main>
  );
}
