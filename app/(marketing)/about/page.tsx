import { Metadata } from "next";
import { FadeIn, FadeInContainer, FadeInItem } from "@/components/effects/fade-in";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { StatCounter } from "@/components/effects/counter";
import { CTASection } from "@/components/sections/shared/cta-section";
import { 
  Globe, 
  Zap, 
  TrendingUp, 
  Heart,
  Users,
  Target,
  Award,
  Clock,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "关于我们 | 彼励扶 - 跨境电商战略合伙人",
  description: "了解彼励扶电子商务（苏州）有限公司的使命与愿景。专注为中国品牌提供全链路跨境电商解决方案。",
};

// 核心价值数据
const coreValues = [
  {
    icon: Globe,
    title: "全生态服务能力",
    description: "从市场调研到品牌建设，提供全链路覆盖的跨境电商解决方案，一站式满足您的出海需求。",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "AI深度赋能",
    description: "自研AI决策系统，将运营效率提升5倍，用数据智能驱动每一个商业决策。",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "结果导向合作",
    description: "关注销售额、利润率、品牌资产等可量化价值，以实际成果衡量合作成效。",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Heart,
    title: "长期主义理念",
    description: "帮助客户构建可持续的全球竞争力，追求深度互信的战略伙伴关系。",
    color: "from-indigo-500 to-violet-500",
  },
];

// 团队统计数据
const teamStats = [
  { value: 3, suffix: "年+", label: "核心成员平均操盘经验" },
  { value: 7, suffix: "个", label: "跨境平台运营能力" },
  { value: 10, suffix: "个", label: "Best Seller成功案例" },
  { value: 100, suffix: "M+", label: "人均操盘业绩" },
];

// 合作理念
const cooperationIdeas = [
  {
    icon: Clock,
    title: "长期主义合作",
    description: "我们拒绝短视的'一次性交易'，追求与客户建立深度互信的战略伙伴关系。通过SharePoint与Notion构建的数字化运营资产体系，将方法论、流程与知识沉淀为可复用的核心资产。",
  },
  {
    icon: Users,
    title: "共同成长",
    description: "我们相信，客户的成功就是我们的成功。每一次合作都是双向奔赴，我们投入的不只是专业能力和时间，更是对客户业务的深度思考与情感投入。",
  },
  {
    icon: Target,
    title: "可持续未来",
    description: "我们致力于帮助客户构建长期竞争力，而非追求短期爆单。从品牌建设到用户运营，从供应链优化到合规风控，为企业的全球化之路奠定坚实基础。",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* 页面头部 - PageHeader */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 md:py-32 lg:py-40">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>关于彼励扶</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                关于我们
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                了解彼励扶的使命与愿景
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 公司介绍Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* 左侧内容 */}
            <div>
              <SlideUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  <span>公司简介</span>
                </div>
              </SlideUp>
              
              <SlideUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  彼励扶 <span className="text-blue-600">BelieveBoy</span>
                </h2>
              </SlideUp>
              
              <SlideUp delay={0.2}>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  <strong className="text-slate-900">彼励扶电子商务（苏州）有限公司</strong>
                  ，是一家
                  <span className="text-blue-600 font-semibold">专注为中国品牌提供全链路跨境电商解决方案的战略合伙人</span>。
                </p>
              </SlideUp>
              
              <SlideUp delay={0.3}>
                <p className="text-base text-slate-600 mb-8 leading-relaxed">
                  我们是一支专注于跨境电商领域的专业团队，汇聚了一群怀揣梦想、充满活力的年轻精英。拥有全球视野与创新精神，致力于为中国品牌出海提供全链路解决方案。
                </p>
              </SlideUp>
              
              <SlideUp delay={0.4}>
                <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white">
                  <Sparkles className="w-6 h-6" />
                  <span className="text-xl font-bold">让中国品牌闪耀全球</span>
                </div>
              </SlideUp>
            </div>
            
            {/* 右侧装饰 */}
            <SlideUp delay={0.2} className="relative">
              <div className="relative">
                {/* 主卡片 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">全球市场覆盖</h4>
                        <p className="text-sm text-slate-600">北美、欧洲、亚太等主要电商市场</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">AI智能驱动</h4>
                        <p className="text-sm text-slate-600">自研AI决策系统，效率提升5倍</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">结果导向</h4>
                        <p className="text-sm text-slate-600">以数据为基石，创造可量化商业价值</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">长期主义</h4>
                        <p className="text-sm text-slate-600">构建可持续的全球竞争力</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 装饰元素 */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-full blur-2xl" />
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* 核心价值Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                <span>核心价值</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                为什么选择彼励扶
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-600">
                我们的核心优势，助力中国品牌成功出海
              </p>
            </FadeIn>
          </div>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <StaggerItem key={index}>
                <div className="group h-full bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* 图标 */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* 标题 */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  
                  {/* 描述 */}
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 团队优势Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-400 text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                <span>团队实力</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                专业团队，卓越成绩
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-white/70">
                数据见证实力，我们用结果说话
              </p>
            </FadeIn>
          </div>
          
          {/* 统计数据 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {teamStats.map((stat, index) => (
              <StatCounter
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          {/* 附加说明 */}
          <FadeIn delay={0.5}>
            <div className="mt-16 text-center">
              <p className="text-white/60 text-sm max-w-2xl mx-auto">
                *数据截至2025年，基于团队核心成员历史操盘项目统计
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 合作理念Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                <span>合作理念</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                我们的合作理念
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-600">
                拒绝短视交易，追求长期共赢
              </p>
            </FadeIn>
          </div>
          
          <FadeInContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {cooperationIdeas.map((idea, index) => (
              <FadeInItem key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                  {/* 图标 */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
                    <idea.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* 标题 */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {idea.title}
                  </h3>
                  
                  {/* 描述 */}
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {idea.description}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInContainer>
        </div>
      </section>

      {/* CTA区块 */}
      <CTASection 
        title="准备好开启您的跨境之旅了吗？"
        subtitle="预约免费咨询，获取专属跨境增长方案。我们的专家团队将在24小时内与您联系。"
        primaryButtonText="立即预约咨询"
        primaryButtonHref="/contact"
        secondaryButtonText="了解更多服务"
        secondaryButtonHref="/services"
        variant="gradient"
      />
    </main>
  );
}
