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
}

export const serviceCapabilities: ServiceCapability[] = [
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
