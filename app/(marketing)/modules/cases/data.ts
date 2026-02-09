export interface CaseMetric {
  label: string;
  value: string;
}

export interface Case {
  title: string;
  platform: string;
  image: string;
  metrics: CaseMetric[];
  description: string;
}

export const cases: Case[] = [
  {
    title: "Gas Grill 高端户外烧烤炉",
    platform: "亚马逊美国站",
    image: "/images/cases/gas-grill.webp",
    metrics: [
      { label: "销售增长", value: "+180%" },
      { label: "ACOS降低", value: "-51%" },
      { label: "类目排名", value: "TOP 3" },
    ],
    description: "6个月销售额增长180%，跻身类目Best Seller TOP 3，品牌搜索量提升220%。",
  },
  {
    title: "Glass Food Pan 玻璃餐盘",
    platform: "亚马逊美国站",
    image: "/images/cases/glass.webp",
    metrics: [
      { label: "月销售额", value: "$108K" },
      { label: "毛利率", value: "26%" },
      { label: "破损率降低", value: "-90%" },
    ],
    description: "从代工到自主品牌转型，月销售额突破$108,000，进入BSR TOP 10。",
  },
  {
    title: "Memory Foam Mattress 记忆棉床垫",
    platform: "亚马逊 + 独立站",
    image: "/images/cases/mattress.webp",
    metrics: [
      { label: "双渠道月销", value: "$230K" },
      { label: "品牌搜索", value: "850/月" },
      { label: "客户复购", value: "8%" },
    ],
    description: "亚马逊+独立站双渠道月销$230,000，品牌搜索量从零到850次/月。",
  },
];
