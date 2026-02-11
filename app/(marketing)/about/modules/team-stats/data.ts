export interface TeamStat {
  value: number;
  suffix: string;
  label: string;
}

export const teamStats: TeamStat[] = [
  { value: 38, suffix: "+", label: "服务品牌与项目数" },
  { value: 6, suffix: "个", label: "核心跨境平台覆盖" },
  { value: 120, suffix: "M+", label: "累计GMV管理规模" },
  { value: 95, suffix: "%", label: "客户续约与增购率" },
];
