import {
  TrendingUp,
  TrendingDown,
  Target,
  Award,
  BarChart3,
  Flame,
  UtensilsCrossed,
  BedDouble,
  Package,
  ShoppingCart,
  Globe,
  type LucideIcon,
} from "lucide-react";

// 统计数据项类型
export interface StatItem {
  label: string;
  before: string;
  after: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
}

// 案例数据类型
export interface CaseData {
  id: number;
  title: string;
  icon: LucideIcon;
  category: string;
  platform: string;
  duration: string;
  image: string;
  color: string;
  gradient: string;
  bgGradient: string;
  clientBackground: string;
  challenges: string[];
  solution: string[];
  stats: StatItem[];
  testimonial: string;
}

// 案例数据
export const cases: CaseData[] = [
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
