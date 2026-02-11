"use client";

import { FadeIn } from "@/components/effects/fade-in";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_80%_at_50%_0%,#13315f_0%,#081325_45%,#030712_100%)] py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-[-10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-8%] top-1/3 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>联系我们</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              联系我们
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              期待与您的合作，共同开启出海之旅
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
