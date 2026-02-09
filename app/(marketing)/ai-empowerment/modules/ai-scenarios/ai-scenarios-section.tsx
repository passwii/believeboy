"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/effects/fade-in";
import { ChevronRight } from "lucide-react";
import { aiScenarios } from "./data";

export function AIScenariosSection() {
  return (
    <section id="scenarios" className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              实战应用
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AI在运营场景中的应用
            </h2>
            <p className="text-lg text-slate-600">
              真实场景，实际效果，让AI能力触手可及
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {aiScenarios.map((scenario, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="h-full bg-white border-slate-200 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <scenario.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700 border-0">
                      {scenario.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {scenario.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    {scenario.description}
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">应用流程</p>
                    <div className="flex flex-wrap gap-2">
                      {scenario.steps.map((step, i) => (
                        <div key={i} className="flex items-center">
                          <span className="text-sm text-slate-700">{step}</span>
                          {i < scenario.steps.length - 1 && (
                            <ChevronRight className="w-4 h-4 text-slate-400 mx-1" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
