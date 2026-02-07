import { Metadata } from "next";
import { 
  Brain,
  Eye,
  BarChart3,
  Lightbulb,
  Users,
  Cpu,
  Image,
  LineChart,
  Target,
  Zap,
  MessageSquare,
  FileText,
  ShoppingCart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  Database,
  Bot,
  LayoutDashboard,
  Globe,
  Wand2,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, FadeInContainer, FadeInItem } from "@/components/effects/fade-in";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { CTASection } from "@/components/sections/shared/cta-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI赋能 | 彼励扶",
  description: "彼励扶AI赋能服务，基于大语言模型和智能算法，为跨境电商提供视觉内容智能、运营数据智能、商业决策智能和协同管理智能四大核心能力。",
};

// 四大智能支柱数据
const aiPillars = [
  {
    id: "visual",
    icon: Eye,
    title: "视觉内容智能",
    subtitle: "让创意不再受限",
    description: "基于Stable Diffusion和MidJourney的AI图像生成能力，实现产品场景图快速生成、智能抠图、A/B测试素材批量产出，大幅降低视觉内容制作成本。",
    capabilities: [
      "Stable Diffusion/MidJourney场景图生成",
      "智能抠图与背景替换",
      "多平台尺寸自动适配",
      "A/B测试素材批量生成",
    ],
    stats: [
      { value: "3天", label: "→ 30分钟", sublabel: "制作时间缩短" },
      { value: "85%", label: "成本降低", sublabel: "视觉素材成本" },
      { value: "1200+", label: "月均生成", sublabel: "营销图片数量" },
    ],
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "data",
    icon: BarChart3,
    title: "运营数据智能",
    subtitle: "让数据产生价值",
    description: "多源数据自动采集与实时分析，提供销售趋势洞察、异常预警、竞品价格监控和库存需求预测，将数据转化为可执行的商业洞察。",
    capabilities: [
      "多源数据自动采集与清洗",
      "实时销售趋势分析",
      "竞品价格监控与预警",
      "库存需求智能预测",
    ],
    stats: [
      { value: "8小时", label: "→ 10分钟", sublabel: "报告生成时间" },
      { value: "10x", label: "响应提升", sublabel: "价格调整速度" },
      { value: "92%", label: "准确率", sublabel: "库存周转预测" },
    ],
    color: "indigo",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    id: "decision",
    icon: Lightbulb,
    title: "商业决策智能",
    subtitle: "让决策更加精准",
    description: "DSK智能决策系统基于多维度数据构建选品评分模型，实现广告自动优化、动态定价和ROI预测，用数据驱动每一个商业决策。",
    capabilities: [
      "DSK智能选品评分模型",
      "广告自动优化与预算分配",
      "动态定价引擎",
      "ROI预测与风险评估",
    ],
    stats: [
      { value: "30%", label: "→ 65%", sublabel: "选品成功率" },
      { value: "35%", label: "平均降低", sublabel: "ACOS优化" },
      { value: "5-8%", label: "毛利率提升", sublabel: "定价优化收益" },
    ],
    color: "violet",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "collaboration",
    icon: Users,
    title: "协同管理智能",
    subtitle: "让协作更加高效",
    description: "智能任务分配、项目风险预警、会议纪要自动生成和知识库智能检索，提升团队协作效率，沉淀企业知识资产。",
    capabilities: [
      "智能任务分配与调度",
      "项目风险自动预警",
      "会议纪要自动生成",
      "知识库智能检索",
    ],
    stats: [
      { value: "95%", label: "准时率", sublabel: "项目交付" },
      { value: "5x", label: "效率提升", sublabel: "知识检索" },
      { value: "50%", label: "周期缩短", sublabel: "新人上手" },
    ],
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
  },
];

// AI技术架构数据
const aiArchitecture = {
  models: [
    {
      category: "大语言模型",
      icon: Brain,
      items: ["Qwen3-Next", "DeepSeek-V3.2", "Gemini3", "Grok"],
      description: "智能文案、客服对话、决策分析",
    },
    {
      category: "图像生成模型",
      icon: Image,
      items: ["Stable Diffusion", "MidJourney API"],
      description: "产品图、营销素材、A+页面设计",
    },
    {
      category: "专项服务模型",
      icon: Bot,
      items: ["6+ 文本与邮件专用模型"],
      description: "Listing优化、客服回复、邮件营销",
    },
  ],
  dataAssets: [
    { label: "营销图片库", value: "1200+", unit: "张", description: "视觉素材生成与参考" },
    { label: "运营数据", value: "263", unit: "GB", description: "趋势分析、决策支持" },
    { label: "文案模板", value: "500+", unit: "套", description: "Listing、邮件、广告文案" },
    { label: "客服对话", value: "10万+", unit: "条", description: "智能客服训练优化" },
  ],
};

// 实战应用场景
const aiScenarios = [
  {
    icon: FileText,
    title: "智能Listing优化",
    description: "AI自动生成多版本标题、五点描述和A+页面文案，支持一键翻译多语言版本，关键词覆盖率提升40%，自然流量增长65%。",
    steps: ["输入产品参数", "生成3版标题方案", "自动输出五点描述", "HTML格式A+文案", "一键多语言翻译"],
    highlight: "关键词覆盖率 +40%",
  },
  {
    icon: Target,
    title: "AI广告投放",
    description: "自动识别高转化关键词、实时监测ACOS并自动暂停低效广告、竞品ASIN自动定位，ACOS从45%降至22%，节省广告费用30%。",
    steps: ["关键词智能识别", "ACOS实时监测", "自动预算分配", "竞品ASIN定位", "效果持续优化"],
    highlight: "ACOS降低 35%",
  },
  {
    icon: MessageSquare,
    title: "智能客服",
    description: "24/7自动回复常见问题，复杂问题智能分类并分配给对应客服，多语言实时翻译支持，客户满意度提升22%。",
    steps: ["7×24自动回复", "问题智能分类", "情感风险识别", "多语言翻译", "自动升级处理"],
    highlight: "响应时间 5分钟",
  },
  {
    icon: LayoutDashboard,
    title: "数据决策看板",
    description: "整合多平台数据，实时展示销售趋势、库存状态、广告表现等核心指标，异常自动预警，让决策有据可依。",
    steps: ["多平台数据整合", "实时指标展示", "异常自动预警", "趋势智能分析", "决策建议生成"],
    highlight: "报告生成 10分钟",
  },
];

// AI工具订阅方案
const aiPricingPlans = [
  {
    name: "AI-Suite 基础版",
    price: "2,000",
    period: "/月",
    description: "适合刚起步的跨境卖家",
    features: [
      "AI Listing优化（50个/月）",
      "基础数据报表",
      "智能客服响应",
      "标准文案模板库",
      "邮件支持",
    ],
    cta: "开始试用",
    popular: false,
  },
  {
    name: "AI-Suite 专业版",
    price: "5,000",
    period: "/月",
    description: "适合成长型跨境企业",
    features: [
      "AI Listing优化（无限量）",
      "AI广告自动优化",
      "高级数据分析看板",
      "智能选品评分系统",
      "多语言客服支持",
      "专属客户成功经理",
      "API接口访问",
    ],
    cta: "立即订阅",
    popular: true,
  },
  {
    name: "AI-Suite 企业版",
    price: "定制",
    period: "报价",
    description: "适合大型跨境企业",
    features: [
      "专业版全部功能",
      "私有化模型部署",
      "定制化AI能力开发",
      "专属技术团队支持",
      "SLA服务保障",
      "优先功能更新",
      "企业培训服务",
    ],
    cta: "联系咨询",
    popular: false,
  },
];

export default function AIEmpowermentPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 mb-8">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300">AI Powered</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI赋能
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-medium mb-6">
                智能驱动，效率革新
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                让AI成为您的跨境电商超级大脑。从创意生成到决策执行，从数据分析到客户服务，
                让每个环节都实现智能化跃迁。
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400 text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
                >
                  <Link href="#ai-pillars">
                    探索AI能力
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-white/10 text-white hover:bg-white/20 border border-cyan-500/50 font-semibold px-8 py-6 text-base transition-all duration-300 backdrop-blur-sm"
                >
                  <Link href="#pricing">
                    查看定价
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* AI愿景 Section */}
      <section id="vision" className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">
                  我们的AI愿景
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  效率就是利润<br />
                  <span className="text-blue-600">洞察就是先机</span>
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    在跨境电商这场全球竞争中，我们致力于打破技术应用门槛，将前沿人工智能无缝融入电商运营全链路。
                  </p>
                  <p>
                    <strong className="text-slate-900">AI不是替代人类，而是增强人类决策能力。</strong>我们相信人机协作才是未来，
                    AI处理重复性工作，人类专注策略与创意。
                  </p>
                  <p>
                    跨境电商的复杂场景，正是AI价值实现的最佳舞台。让我们用智能重新定义跨境电商运营。
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative">
                {/* 科技感装饰卡片 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-6 text-white shadow-xl">
                    <Brain className="w-8 h-8 mb-4 opacity-80" />
                    <div className="text-3xl font-bold mb-1">AI+</div>
                    <div className="text-sm opacity-80">人机协作</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                    <Zap className="w-8 h-8 mb-4 text-amber-500" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">10x</div>
                    <div className="text-sm text-slate-500">效率提升</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                    <TrendingUp className="w-8 h-8 mb-4 text-emerald-500" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">85%</div>
                    <div className="text-sm text-slate-500">成本降低</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl p-6 text-white shadow-xl">
                    <Layers className="w-8 h-8 mb-4 opacity-80" />
                    <div className="text-3xl font-bold mb-1">4大</div>
                    <div className="text-sm opacity-80">智能支柱</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 四大智能支柱 Section */}
      <section id="ai-pillars" className="py-20 md:py-24 bg-slate-900 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                核心能力
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                四大智能支柱
              </h2>
              <p className="text-lg text-slate-400">
                全方位AI能力矩阵，驱动业务智能升级
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {aiPillars.map((pillar, index) => (
              <FadeIn key={pillar.id} delay={index * 0.1}>
                <Card className={`bg-slate-800/50 border-slate-700 overflow-hidden hover:border-${pillar.color}-500/50 transition-all duration-500 group`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* 左侧：主要信息 */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg`}>
                          <pillar.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <CardTitle className="text-2xl font-bold text-white">
                              {pillar.title}
                            </CardTitle>
                            <Badge variant="outline" className={`border-${pillar.color}-500/50 text-${pillar.color}-400`}>
                              0{index + 1}
                            </Badge>
                          </div>
                          <p className={`text-${pillar.color}-400 font-medium`}>{pillar.subtitle}</p>
                        </div>
                      </div>
                      
                      <CardDescription className="text-slate-400 text-base leading-relaxed mb-6">
                        {pillar.description}
                      </CardDescription>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {pillar.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-300">
                            <CheckCircle2 className={`w-4 h-4 text-${pillar.color}-400`} />
                            <span className="text-sm">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* 右侧：数据指标 */}
                    <div className={`bg-gradient-to-br ${pillar.gradient} p-8 flex flex-col justify-center`}>
                      <h4 className="text-white/80 text-sm font-medium mb-6 uppercase tracking-wider">实际效果</h4>
                      <div className="space-y-6">
                        {pillar.stats.map((stat, i) => (
                          <div key={i} className="text-white">
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
                              <span className="text-lg opacity-80">{stat.label}</span>
                            </div>
                            <p className="text-white/60 text-sm mt-1">{stat.sublabel}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI技术架构 Section */}
      <section className="py-20 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-indigo-500/20 text-indigo-400 border-indigo-500/30">
                技术底座
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI技术架构
              </h2>
              <p className="text-lg text-slate-400">
                自主可控的技术栈，确保数据安全、响应迅速、成本可控
              </p>
            </div>
          </FadeIn>

          {/* 模型层 */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" staggerDelay={0.1}>
            {aiArchitecture.models.map((model, index) => (
              <StaggerItem key={index}>
                <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-all duration-300 group h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-slate-700 transition-colors">
                      <model.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <CardTitle className="text-lg font-bold text-white">
                      {model.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {model.items.map((item, i) => (
                        <Badge key={i} variant="outline" className="border-slate-700 text-slate-300 bg-slate-800/50">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-slate-400 text-sm">{model.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 核心优势 */}
          <FadeIn delay={0.3}>
            <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-slate-800 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{'< 500ms'}</div>
                  <p className="text-slate-400 text-sm">响应延迟</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">本地部署</div>
                  <p className="text-slate-400 text-sm">数据安全处理</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-400 mb-2">零泄露</div>
                  <p className="text-slate-400 text-sm">敏感数据风险</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 数据资产 */}
          <FadeIn delay={0.4}>
            <div>
              <h3 className="text-xl font-bold text-white mb-8 text-center">AI数据资产底座</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {aiArchitecture.dataAssets.map((asset, index) => (
                  <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-slate-700 transition-all duration-300">
                    <Database className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {asset.value}<span className="text-lg text-slate-400">{asset.unit}</span>
                    </div>
                    <div className="text-slate-300 text-sm mb-1">{asset.label}</div>
                    <div className="text-slate-500 text-xs">{asset.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 实战应用场景 Section */}
      <section id="scenarios" className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                实战应用
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                AI在运营场景中的应用
              </h2>
              <p className="text-lg text-slate-600">
                真实场景，实际效果，让AI能力触手可及
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {aiScenarios.map((scenario, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="h-full bg-white border-slate-200 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <scenario.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-700 border-0">
                        {scenario.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {scenario.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      {scenario.description}
                    </p>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">应用流程</p>
                      <div className="flex flex-wrap gap-2">
                        {scenario.steps.map((step, i) => (
                          <div key={i} className="flex items-center">
                            <span className="text-sm text-slate-700">{step}</span>
                            {i < scenario.steps.length - 1 && (
                              <ChevronRight className="w-4 h-4 text-slate-400 mx-1" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI工具订阅 Section */}
      <section id="pricing" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-violet-100 text-violet-700 hover:bg-violet-100">
                订阅方案
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                AI-Suite 订阅服务
              </h2>
              <p className="text-lg text-slate-600">
                灵活的订阅方案，满足不同阶段的AI能力需求
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerDelay={0.15}>
            {aiPricingPlans.map((plan, index) => (
              <StaggerItem key={index}>
                <Card className={`h-full relative ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-slate-200 hover:border-blue-300 hover:shadow-lg'} transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-1">
                        最受欢迎
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg font-bold text-slate-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-slate-500">¥</span>
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-slate-500">{plan.period}</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 ${plan.popular ? 'text-blue-500' : 'text-slate-400'} flex-shrink-0 mt-0.5`} />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} font-semibold`}
                      asChild
                    >
                      <Link href="/contact">
                        {plan.cta}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="开始您的AI赋能之旅"
        subtitle="无论您希望提升Listing质量、建立智能广告投放体系，还是实现数据驱动的运营决策，我们都可以提供从咨询、部署到培训的全流程支持。"
        primaryButtonText="预约AI能力演示"
        primaryButtonHref="/contact"
        secondaryButtonText="了解更多服务"
        secondaryButtonHref="/services"
        variant="default"
        showSecondary={true}
      />
    </main>
  );
}
