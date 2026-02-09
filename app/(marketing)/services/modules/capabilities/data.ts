import { 
  Brain, 
  Search, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Rocket, 
  FileCheck, 
  MessageSquare, 
  Users, 
  Shield, 
  CheckCircle2, 
  Zap,
  ChartBar,
  type LucideIcon 
} from "lucide-react";

export interface ServiceCapability {
  name: string;
  icon: LucideIcon;
  category: CapabilityCategory;
}

export type CapabilityCategory = 
  | "algorithm" 
  | "growth" 
  | "compliance" 
  | "supply" 
  | "marketing";

export interface CategoryConfig {
  id: CapabilityCategory;
  label: string;
  description: string;
  gradient: string;
  iconColor: string;
  bgColor: string;
}

export const categoryConfigs: CategoryConfig[] = [
  {
    id: "algorithm",
    label: "算法策略",
    description: "智能算法驱动，精准优化",
    gradient: "from-blue-500 to-cyan-400",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: "growth",
    label: "运营增长",
    description: "数据驱动增长，提升转化",
    gradient: "from-emerald-500 to-teal-400",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    id: "compliance",
    label: "合规安全",
    description: "合规保障，安全运营",
    gradient: "from-violet-500 to-purple-400",
    iconColor: "text-violet-500",
    bgColor: "bg-violet-50",
  },
  {
    id: "supply",
    label: "供应链",
    description: "供应链优化，高效协同",
    gradient: "from-amber-500 to-orange-400",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    id: "marketing",
    label: "营销推广",
    description: "多渠道营销，品牌曝光",
    gradient: "from-rose-500 to-pink-400",
    iconColor: "text-rose-500",
    bgColor: "bg-rose-50",
  },
];

export const serviceCapabilities: ServiceCapability[] = [
  // Algorithm Strategy
  { name: "COSMO算法", icon: Brain, category: "algorithm" },
  { name: "Rufus探索", icon: Search, category: "algorithm" },
  { name: "ACOS优化", icon: TrendingUp, category: "algorithm" },
  { name: "螺旋打法", icon: TrendingUp, category: "algorithm" },
  
  // Growth
  { name: "全年销售规划", icon: ChartBar, category: "growth" },
  { name: "定价促销", icon: DollarSign, category: "growth" },
  { name: "成本核算", icon: BarChart3, category: "growth" },
  { name: "爆款选品", icon: Zap, category: "growth" },
  
  // Compliance
  { name: "店铺安全", icon: Shield, category: "compliance" },
  { name: "产品认证", icon: FileCheck, category: "compliance" },
  { name: "VAT税法", icon: FileCheck, category: "compliance" },
  { name: "Listing合规", icon: CheckCircle2, category: "compliance" },
  { name: "客诉处理", icon: MessageSquare, category: "compliance" },
  
  // Supply Chain
  { name: "供应链管理", icon: Package, category: "supply" },
  { name: "海外仓协作", icon: ShoppingCart, category: "supply" },
  
  // Marketing
  { name: "站外推广", icon: Rocket, category: "marketing" },
  { name: "Review管理", icon: MessageSquare, category: "marketing" },
  { name: "Facebook群组", icon: Users, category: "marketing" },
];

export function getCapabilitiesByCategory(category: CapabilityCategory): ServiceCapability[] {
  return serviceCapabilities.filter(cap => cap.category === category);
}

export function getAllCategories(): CapabilityCategory[] {
  return ["algorithm", "growth", "compliance", "supply", "marketing"];
}
