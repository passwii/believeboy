import { FadeIn } from "@/components/effects/fade-in";
import { SectionEyebrow, SectionShell } from "@/components/sections/home-v2/section-shell";
import { platforms } from "./data";

export function LogoWallSection() {
  return (
    <SectionShell className="border-y border-zinc-200 bg-stone-50 py-10 md:py-12">
      <div className="space-y-7">
        <FadeIn className="grid gap-5 rounded-3xl border border-stone-200 bg-white p-5 md:grid-cols-[1fr_auto] md:items-center md:p-7">
          <div>
            <SectionEyebrow>平台覆盖能力</SectionEyebrow>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">
              深入亚马逊、沃尔玛、TikTok Shop 与独立站生态，构建跨平台一致增长系统。
            </p>
          </div>
          <p className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-amber-700 md:text-sm">
            7年以上平台操盘方法论
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {platforms.map((platform, index) => (
            <FadeIn key={platform.name} delay={index * 0.05}>
              <div className="home-v2-interactive rounded-2xl border border-stone-200 bg-white p-4 hover:-translate-y-1 hover:border-stone-300 hover:shadow-md">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 text-amber-700">
                  <platform.icon size={18} weight="duotone" />
                </div>
                <p className="mt-3 text-sm font-medium text-stone-900">{platform.name}</p>
                <p className="mt-1 text-xs text-stone-500">渠道深度运营</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
