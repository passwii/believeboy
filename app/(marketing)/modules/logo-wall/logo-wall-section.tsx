import { FadeIn } from "@/components/effects/fade-in";
import { SectionEyebrow, SectionShell } from "@/components/sections/home-v2/section-shell";
import { platforms } from "./data";

export function LogoWallSection() {
  return (
    <SectionShell className="border-y border-[#d9d0c2] bg-[#f4f1ea] py-10 md:py-12">
      <div className="space-y-7">
        <FadeIn className="grid gap-5 rounded-[2rem] border border-[#ded5c7] bg-white/90 p-5 shadow-[0_24px_60px_-42px_rgba(17,24,39,0.28)] md:grid-cols-[1fr_auto] md:items-center md:p-7">
          <div>
            <SectionEyebrow>平台覆盖能力</SectionEyebrow>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">
              深入亚马逊、沃尔玛、TikTok Shop 与独立站生态，把渠道运营、内容表达和商业数据连接成同一套增长系统。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <p className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-amber-700 md:text-sm">
              7年以上平台操盘方法论
            </p>
            <p className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-cyan-700 md:text-sm">
              品牌站内外协同增长
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {platforms.map((platform, index) => (
            <FadeIn key={platform.name} delay={index * 0.05}>
              <div className="home-v2-interactive rounded-[1.5rem] border border-[#e4dbcf] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,245,239,0.95))] p-4 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_20px_40px_-28px_rgba(17,24,39,0.35)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-950 text-amber-200">
                  <platform.icon size={18} weight="duotone" />
                </div>
                <p className="mt-4 text-sm font-semibold text-stone-900">{platform.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-stone-500">渠道深度运营</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
