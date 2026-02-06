import {
  Diamond,
  Target,
  TrendingUp,
  Handshake,
  Sparkles,
  ArrowRight,
  Download,
  Star,
  Award,
  Globe,
  Zap,
  Rocket,
  Building2,
  Users
} from "lucide-react";

export interface CoreValue {
  icon: any;
  title: string;
  description: string;
  detail: string;
}

export interface ServiceModule {
  name: string;
  desc: string;
  icon: any;
}

// 四大核心独特价值
export const coreValues: CoreValue[] = [
  {
    icon: Diamond,
    title: "资产导向",
    description: "可溢价品牌资产",
    detail: "输出可复制、可溢价、可退出的品牌资产，聚焦长期可持续增长",
  },
  {
    icon: Target,
    title: "场景适配",
    description: "有店无店皆可",
    detail: "无需现有海外店铺基础，从0搭建或升级转型，灵活适配各种场景",
  },
  {
    icon: TrendingUp,
    title: "回报可期",
    description: "短期+长期收益",
    detail: "短期溢价20-50%，长期资产增值可用于融资、授权或出售",
  },
  {
    icon: Handshake,
    title: "共创模式",
    description: "风险共担",
    detail: "25.8万/年战略投资，效果分成绑定，仅在盈利后赚取分成",
  },
];

// 八大服务模块
export const serviceModules: ServiceModule[] = [
  { name: "品牌DNA", desc: "联合定义", icon: Award },
  { name: "全球IP", desc: "视觉全案", icon: Globe },
  { name: "店铺矩阵", desc: "渠道布局", icon: Building2 },
  { name: "选品", desc: "产品全球化", icon: Target },
  { name: "广告营销", desc: "全域曝光", icon: Zap },
  { name: "库存履约", desc: "全球履约", icon: Rocket },
  { name: "内容增长", desc: "资产沉淀", icon: Sparkles },
  { name: "专属团队", desc: "合伙人级", icon: Users },
];
