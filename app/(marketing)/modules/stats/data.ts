export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 3, suffix: "年", label: "核心成员平均操盘经验" },
  { value: 10, suffix: "个", label: "Best Seller成功案例" },
  { value: 7, suffix: "大", label: "跨境平台运营能力" },
  { value: 100, suffix: "M+", label: "人均操盘业绩" },
];
