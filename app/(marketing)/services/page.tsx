import { Metadata } from "next";
import { 
  Globe, 
  ChartBar, 
  Package, 
  Sparkles, 
  Award, 
  Target, 
  Brain, 
  Cpu,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShoppingCart,
  BarChart3,
  Zap,
  MessageSquare,
  Shield,
  FileCheck,
  Users,
  DollarSign,
  Search,
  Rocket
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, FadeInContainer, FadeInItem } from "@/components/effects/fade-in";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { CTASection } from "@/components/sections/shared/cta-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务介绍 | 彼励扶",
  description: "彼励扶提供亚马逊代运营、独立站搭建、TikTok Shop、AI智能营销等全方位跨境电商服务。全链路跨境电商解决方案。",
};

// 四大核心服务数据
const coreServices = [
  {
    icon: Globe,
    secondaryIcon: ChartBar,
    title: "市场调研与策略制定",
    description: "深入洞察目标市场消费趋势、竞争格局与文化特性，基于数据与分析，为您量身定制高精准度的本地化营销与市场进入策略。",
    features: ["消费趋势洞察", "竞争格局分析", "本地化进入策略"],
    color: "blue",
  },
  {
    icon: Package,
    secondaryIcon: Sparkles,
    title: "产品呈现与转化提升",
    description: "系统优化产品定位、视觉展示与详情呈现，通过A/B测试与用户体验设计，有效提升页面吸引力与购买转化率。",
    features: ["Listing优化", "视觉升级", "A/B测试", "用户体验设计"],
    color: "indigo",
  },
  {
    icon: Award,
    secondaryIcon: Target,
    title: "品牌塑造与价值赋能",
    description: "协助梳理品牌核心价值，通过一致的视觉传达与故事化内容营销，在海外市场构建独特、可信的品牌形象，持续提升品牌资产。",
    features: ["品牌定位", "内容营销", "用户心智建设", "故事化内容营销"],
    color: "violet",
  },
  {
    icon: Brain,
    secondaryIcon: Cpu,
    title: "智能运营与效率革新",
    description: "应用人工智能与机器学习技术，自动化处理数据分析、广告投放与客户服务等环节，实现运营流程的智能化升级。",
    features: ["AI驱动广告投放", "智能库存管理", "客户服务自动化", "数据智能决策"],
    color: "cyan",
  },
];

// 运营服务细分能力
const serviceCapabilities = [
  { name: "COSMO算法", icon: Brain },
  { name: "Rufus探索", icon: Search },
  { name: "螺旋打法", icon: TrendingUp },
  { name: "定价促销", icon: DollarSign },
  { name: "成本核算", icon: BarChart3 },
  { name: "供应链管理", icon: Package },
  { name: "海外仓协作", icon: ShoppingCart },
  { name: "站外推广", icon: Rocket },
  { name: "产品认证", icon: FileCheck },
  { name: "Review管理", icon: MessageSquare },
  { name: "Facebook群组", icon: Users },
  { name: "店铺安全", icon: Shield },
  { name: "客诉处理", icon: MessageSquare },
  { name: "VAT税法", icon: FileCheck },
  { name: "Listing合规", icon: CheckCircle2 },
  { name: "爆款选品", icon: Zap },
  { name: "ACOS优化", icon: TrendingUp },
  { name: "全年销售规划", icon: ChartBar },
];

// 服务流程步骤
const serviceProcess = [
  {
    step: "01",
    title: "需求诊断",
    description: "深入了解您的业务现状、目标市场与核心诉求，全面分析现有运营数据与挑战。",
    icon: Search,
  },
  {
    step: "02",
    title: "策略制定",
    description: "基于诊断结果，制定个性化的市场进入策略与运营方案，明确目标与执行路径。",
    icon: Target,
  },
  {
    step: "03",
    title: "执行落地",
    description: "专业团队按计划执行各项运营工作，确保每个环节高质量完成，实时同步进度。",
    icon: Zap,
  },
  {
    step: "04",
    title: "数据优化",
    description: "持续监控关键数据指标，通过数据分析发现问题并进行针对性优化调整。",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "持续增长",
    description: "建立长期增长机制，不断优化运营策略，助力业务持续稳定增长。",
    icon: TrendingUp,
  },
];

// 平台覆盖
const platforms = [
  { name: "亚马逊", nameEn: "Amazon", color: "#FF9900" },
  { name: "独立站", nameEn: "DTC", color: "#6366f1" },
  { name: "eBay", nameEn: "eBay", color: "#E53238" },
  { name: "Walmart", nameEn: "Walmart", color: "#0071CE" },
  { name: "TikTok Shop", nameEn: "TikTok", color: "#000000" },
  { name: "Shopee", nameEn: "Shopee", color: "#EE4D2D" },
  { name: "Lazada", nameEn: "Lazada", color: "#0F156D" },
];

// 核心优势
const coreAdvantages = [
  {
    title: "定制化出海方案",
    description: "不止于提供方案，更在于实现精准适配。通过全面分析企业独特需求与市场差异点，为您构建个性化的跨境电商战略。",
  },
  {
    title: "跨境全生态整合能力",
    description: "整合产品、营销、物流等出海关键环节，提供端到端的全链路支持，依托稳定的国际物流网络确保履约效率。",
  },
  {
    title: "SOP流程化运营体系",
    description: "通过建立标准化的流程规范，并借助SharePoint平台，确保所有运营流程顺畅流转、公开透明且可追溯。",
  },
  {
    title: "AI深度赋能运营",
    description: "以AI驱动运营全流程革新，系统性地提升各环节处理效率、降低人为误差与成本，将传统运营升级为智能化管理体系。",
  },
  {
    title: "价值取向的长期合作",
    description: "秉持价值取向的合作哲学，致力于与客户建立长期、互信的深度伙伴关系，构建可持续发展的业务生态。",
  },
  {
    title: "数字化运营资产沉淀",
    description: "深度应用SharePoint与Notion等工具，赋能企业实现运营流程的全面数字化与显性化，为战略决策提供持续支持。",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - 页面头部 */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm text-white/80">专业团队 + AI赋能</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                服务介绍
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-6">
                全链路跨境电商解决方案
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                从市场进入到品牌建设，从亚马逊到独立站，我们提供一站式跨境电商服务，
                全方位助力您的全球业务拓展。
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
                    免费咨询
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-white/10 text-white hover:bg-white/20 border border-white/30 font-semibold px-8 py-6 text-base transition-all duration-300 backdrop-blur-sm"
                >
                  <Link href="#core-services">
                    了解服务
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 核心优势 Section */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                我们的优势
              </h2>
              <p className="text-lg text-slate-600">
                专业团队 + AI赋能 = 全方位助力您的全球业务拓展
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {coreAdvantages.map((advantage, index) => (
              <StaggerItem key={index}>
                <Card className="h-full bg-white border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 四大核心服务 Section */}
      <section id="core-services" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">
                核心服务
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                从市场进入到品牌建设
              </h2>
              <p className="text-lg text-slate-600">
                提供一站式跨境电商解决方案，覆盖出海全链路
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.15}>
            {coreServices.map((service, index) => (
              <StaggerItem key={index}>
                <Card className="h-full bg-white border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  {/* 顶部装饰条 */}
                  <div className={`h-1 bg-gradient-to-r from-${service.color}-500 to-${service.color}-400`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-${service.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className={`w-7 h-7 text-${service.color}-600`} />
                      </div>
                      <div className={`w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center opacity-50`}>
                        <service.secondaryIcon className="w-5 h-5 text-slate-500" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, fIndex) => (
                        <Badge 
                          key={fIndex} 
                          variant="outline" 
                          className="text-xs bg-slate-50 text-slate-600 border-slate-200"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 运营服务细分能力 Section */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
                细分能力
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                运营服务细分能力
              </h2>
              <p className="text-lg text-slate-600">
                30+项专业运营能力，全方位覆盖跨境电商各环节
              </p>
            </div>
          </FadeIn>

          <FadeInContainer className="flex flex-wrap justify-center gap-3 md:gap-4" staggerDelay={0.03}>
            {serviceCapabilities.map((capability, index) => (
              <FadeInItem key={index}>
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-default group">
                  <capability.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                    {capability.name}
                  </span>
                </div>
              </FadeInItem>
            ))}
          </FadeInContainer>
        </div>
      </section>

      {/* 服务流程 Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-cyan-100 text-cyan-700 hover:bg-cyan-100">
                服务流程
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                标准化服务流程
              </h2>
              <p className="text-lg text-slate-600">
                从需求诊断到持续增长，每一步都专业可控
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* 连接线 - 桌面端 */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200" />
              
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4" staggerDelay={0.15}>
                {serviceProcess.map((step, index) => (
                  <StaggerItem key={index}>
                    <div className="relative text-center group">
                      {/* 步骤图标 */}
                      <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-lg transition-all duration-300">
                        <step.icon className="w-7 h-7 text-blue-600" />
                      </div>
                      
                      {/* 步骤编号 */}
                      <div className="absolute -top-2 -right-2 lg:right-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold flex items-center justify-center shadow-md">
                        {step.step}
                      </div>
                      
                      {/* 内容 */}
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 平台覆盖 Section */}
      <section className="py-20 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-white/10 text-cyan-400 border-0">
                平台覆盖
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                多平台运营能力
              </h2>
              <p className="text-lg text-slate-400">
                覆盖全球主流跨境电商平台，助力品牌多渠道出海
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6" staggerDelay={0.08}>
            {platforms.map((platform, index) => (
              <StaggerItem key={index}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div 
                    className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: platform.color }}
                  >
                    {platform.nameEn.charAt(0)}
                  </div>
                  <h3 className="text-white font-semibold mb-1">{platform.name}</h3>
                  <p className="text-slate-500 text-xs">{platform.nameEn}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.5}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>平台官方认证</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>深度API对接</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>多平台协同</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 服务数据展示 */}
      <section className="py-16 md:py-20 bg-blue-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.1}>
            <StaggerItem>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">3</div>
              <div className="text-cyan-400 font-medium">核心成员</div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10</div>
              <div className="text-cyan-400 font-medium">Best Seller</div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">7</div>
              <div className="text-cyan-400 font-medium">跨境平台</div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100M</div>
              <div className="text-cyan-400 font-medium">人均操盘业绩</div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="准备好开启您的跨境之旅了吗？"
        subtitle="预约免费咨询，获取专属跨境增长方案。我们的专家团队将在24小时内与您联系，为您量身定制出海策略。"
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
