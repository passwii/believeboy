import { FadeIn } from "@/components/effects/fade-in";
import { SectionEyebrow, SectionShell } from "@/components/sections/home-v2/section-shell";
import { MarqueeStrip } from "@/components/sections/home-v2/marquee-strip";
import { platforms } from "./data";

export function LogoWallSection() {
  return (
    <SectionShell className="border-y border-zinc-200/80 bg-zinc-50 py-10 md:py-12">
      <div className="space-y-6">
        <FadeIn className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionEyebrow>Platform Coverage</SectionEyebrow>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
              覆盖 Amazon、Walmart、TikTok Shop 等主流跨境渠道，支持品牌多平台联动运营。
            </p>
          </div>
          <p className="font-mono text-sm tracking-wide text-zinc-500">7+ years marketplace operations stack</p>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
          <MarqueeStrip items={platforms.map((platform) => ({ label: platform.name }))} />
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">Trusted Platform Matrix</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {platforms.slice(0, 6).map((platform) => (
                <div key={platform.name} className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2">
                  <platform.icon size={16} weight="duotone" className="text-[var(--home-v2-accent)]" />
                  <span className="text-sm text-zinc-700">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
