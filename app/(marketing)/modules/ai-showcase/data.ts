export interface AICapability {
  title: string;
  desc: string;
  metric: string;
}

export const aiCapabilities: AICapability[] = [
  { title: "视觉内容智能", desc: "30分钟生成专业产品场景图", metric: "成本降低85%" },
  { title: "运营数据智能", desc: "实时分析、趋势预测", metric: "效率提升10倍" },
  { title: "商业决策智能", desc: "选品评分、动态定价", metric: "选品成功率65%" },
  { title: "协同管理智能", desc: "任务智能分配、风险预警", metric: "交付准时率95%" },
];
