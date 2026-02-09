import { TrendingUp, TrendingDown } from "lucide-react";
import { StatItem } from "./data";

interface StatComparisonCardProps {
  stat: StatItem;
  color: string;
}

export function StatComparisonCard({ stat, color }: StatComparisonCardProps) {
  const colorClasses: Record<string, { bg: string; text: string; icon: string; gradient: string }> = {
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      icon: "text-orange-500",
      gradient: "from-orange-500 to-red-500",
    },
    cyan: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      icon: "text-cyan-500",
      gradient: "from-cyan-500 to-blue-500",
    },
    violet: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      icon: "text-violet-500",
      gradient: "from-violet-500 to-purple-500",
    },
  };

  const colors = colorClasses[color] || colorClasses.orange;
  const isPositive = stat.trend === "up";

  return (
    <div className={`${colors.bg} rounded-xl p-5 hover:shadow-lg transition-all duration-300`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm`}>
          <stat.icon className={`w-5 h-5 ${colors.icon}`} />
        </div>
        <span className="text-slate-600 font-medium">{stat.label}</span>
      </div>
      
      <div className="space-y-3">
        {/* 优化前 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">优化前</span>
          <span className="text-slate-500 line-through">{stat.before}</span>
        </div>
        
        {/* 优化后 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">优化后</span>
          <span className={`text-xl font-bold ${colors.text}`}>{stat.after}</span>
        </div>
        
        {/* 变化 */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-emerald-500" />
          )}
          <span className={`text-sm font-semibold ${isPositive ? "text-emerald-600" : "text-emerald-600"}`}>
            {stat.change}
          </span>
        </div>
      </div>
    </div>
  );
}
