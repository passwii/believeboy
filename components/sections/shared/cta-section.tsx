import Link from "next/link";
import { ArrowRight, CalendarDots, Phone } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "default" | "gradient" | "dark";
  showSecondary?: boolean;
}

const variantClasses: Record<NonNullable<CTASectionProps["variant"]>, string> = {
  default: "bg-zinc-900",
  gradient: "bg-zinc-900",
  dark: "bg-zinc-950",
};

export function CTASection({
  title = "开启您的跨境之旅",
  subtitle = "预约免费咨询，获取专属跨境增长方案。我们的专家团队将在24小时内与您联系。",
  primaryButtonText = "立即预约咨询",
  primaryButtonHref = "/contact",
  secondaryButtonText = "致电咨询",
  secondaryButtonHref = "tel:18896968181",
  variant = "default",
  showSecondary = true,
}: CTASectionProps) {
  return (
    <section className={`${variantClasses[variant]} relative overflow-hidden py-20 md:py-24 lg:py-28`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-12 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-12 bottom-10 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-5">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-emerald-200">
                  <span className="home-v2-kicker-dot" />
                  Consultation
                </span>
              </FadeIn>

              <FadeIn delay={0.08}>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
              </FadeIn>

              <FadeIn delay={0.16}>
                <p className="max-w-[62ch] text-base leading-relaxed text-zinc-300 md:text-lg">{subtitle}</p>
              </FadeIn>
            </div>

            <FadeIn delay={0.24}>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
                <Button
                  size="lg"
                  asChild
                  className="home-v2-interactive h-12 rounded-full bg-emerald-600 px-6 text-white hover:bg-emerald-500"
                >
                  <Link href={primaryButtonHref} className="inline-flex items-center gap-2">
                    <CalendarDots size={18} weight="duotone" />
                    {primaryButtonText}
                    <ArrowRight size={16} weight="bold" />
                  </Link>
                </Button>

                {showSecondary && (
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="home-v2-interactive h-12 rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white/10"
                  >
                    <Link href={secondaryButtonHref} className="inline-flex items-center gap-2">
                      <Phone size={18} weight="duotone" />
                      {secondaryButtonText}
                    </Link>
                  </Button>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
