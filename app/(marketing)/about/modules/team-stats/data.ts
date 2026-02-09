export interface TeamStat {
  value: number;
  suffix: string;
  label: string;
}

export const teamStats: TeamStat[] = [
  { value: 3, suffix: "年+", label: "核心成员平均操盘经验" },
  { value: 7, suffix: "个", label: "跨境平台运营能力" },
  { value: 10, suffix: "个", label: "Best Seller成功案例" },
  { value: 100, suffix: "M+", label: "人均操盘业绩" },
];
