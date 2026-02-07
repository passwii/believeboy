"use client";

import { Check, Star, ChevronRight, Building2, TrendingUp, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface PricingCardProps {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  priceRange: string;
  priceUnit: string;
  description: string;
  features: string[];
  extraInfo: string;
  color: "blue" | "cyan" | "violet";
  featured?: boolean;
  badge?: string;
}

// Icon mapping from string to component
const iconMap = {
  building: Building2,
  trending: TrendingUp,
  target: Target,
};

export function PricingCard({
  icon: iconName,
  title,
  subtitle,
  priceRange,
  priceUnit,
  features,
  extraInfo,
  color,
  featured = false,
  badge,
}: PricingCardProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Building2;
  
  const colorClasses = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", check: "text-blue-500" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600", check: "text-cyan-500" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", check: "text-violet-500" },
  };
  const colors = colorClasses[color];

  return (
    <Card className={`h-full relative overflow-hidden transition-all duration-300 group ${featured ? "border-2 border-cyan-500 shadow-xl hover:shadow-2xl scale-[1.02]" : "border-slate-200 hover:border-blue-300 hover:shadow-xl"}`}>
      {featured && badge && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 text-sm font-semibold">
          <div className="flex items-center justify-center gap-1">
            <Star className="w-4 h-4 fill-current" />
            {badge}
          </div>
        </div>
      )}
      <CardHeader className={`${featured ? "pt-12" : "pt-6"}`}>
        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        <CardTitle className="text-xl font-bold text-slate-900">{title}</CardTitle>
        <CardDescription className="text-sm text-slate-500">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-full space-y-4">
        <div className="pb-4 border-b border-slate-100">
          <div className="text-2xl md:text-3xl font-bold text-slate-900">
            {priceRange}
            {priceUnit && (
              <span className={`${priceUnit.includes("年") ? "text-orange-600 dark:text-orange-400" : "text-blue-600 dark:text-blue-400"}`}>
                {priceUnit}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 mt-">{extraInfo}</p>
        </div>
        <ul className="space-y-3 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className={`w-4 h-4 ${colors.check} mt-0.5 shrink-0`} />
              <span className="text-sm text-slate-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className={`w-full mt-auto ${featured ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`} asChild>
          <Link href="/contact">
            了解详情
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
