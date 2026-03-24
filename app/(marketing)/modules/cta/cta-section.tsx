import Link from "next/link";
import { ArrowRight, CalendarDots, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/effects/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-stone-950 py-20 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-14 top-8 h-72 w-72 rounded-full bg-amber-400/12 blur-3xl" />
        <div className="absolute -right-14 bottom-0 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-stone-700 bg-stone-900 p-7 md:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-5">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-amber-200">
                  <span className="home-v2-kicker-dot" />
                  增长咨询
                </span>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  用一次咨询，明确未来 90 天跨境增长路径
                </h2>
              </FadeIn>
              <FadeIn delay={0.16}>
                <p className="max-w-[62ch] text-base leading-relaxed text-stone-300 md:text-lg">
                  团队将根据您的品类、预算和阶段，提供可落地的渠道策略、内容节奏与投放建议。
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.24}>
              <div className="flex w-full flex-col gap-3 sm:w-auto">
                <Button
                  size="lg"
                  asChild
                  className="home-v2-interactive h-12 rounded-full bg-amber-500 px-6 text-stone-950 hover:bg-amber-400"
                >
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    <CalendarDots size={18} weight="duotone" />
                    预约策略沟通
                    <ArrowRight size={16} weight="bold" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="home-v2-interactive h-12 rounded-full border-stone-500 bg-transparent px-6 text-white hover:bg-white/10"
                >
                  <Link href={siteConfig.phoneLink} className="inline-flex items-center gap-2">
                    <PhoneCall size={18} weight="duotone" />
                    致电 {siteConfig.phone}
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
