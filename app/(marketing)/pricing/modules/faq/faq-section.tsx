"use client";

import Link from "next/link";
import { Clock3, HelpCircle, MessageCircleMore, ShieldCheck, Sparkles } from "lucide-react";
import { faqItems } from "@/app/(marketing)/pricing/modules/faq/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/effects/fade-in";
import { Button } from "@/components/ui/button";

export function FAQSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-slate-100 py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/4 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 grid items-start gap-10 lg:mb-20 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700">
                  <HelpCircle className="h-4 w-4 text-cyan-600" />
                  常见问题
                </div>
                <h2 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                  FAQ
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                  把合作前最常见的问题，整理成可快速浏览的决策清单。
                </p>

                <div className="mt-8 space-y-3 border-l border-slate-300 pl-4">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <ShieldCheck className="h-4 w-4 text-cyan-700" />
                    数据与流程透明
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <Clock3 className="h-4 w-4 text-cyan-700" />
                    合作节奏可预期
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <Sparkles className="h-4 w-4 text-cyan-700" />
                    支持定制方案
                  </div>
                </div>

                <Button asChild className="mt-8 h-11 rounded-full bg-slate-900 px-6 text-white hover:bg-slate-800">
                  <Link href="/contact">
                    仍有疑问，联系顾问
                    <MessageCircleMore className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-slate-300/80 bg-white/85 p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm md:p-8 lg:p-10">
                <Accordion type="single" collapsible className="border-y border-slate-200">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
                      <AccordionTrigger className="group px-0 py-6 text-left text-lg font-semibold text-slate-900 hover:no-underline md:py-7 md:text-2xl">
                        <div className="grid w-full grid-cols-[3.25rem_1fr] items-start gap-3 pr-3 md:grid-cols-[3.75rem_1fr]">
                          <span className="pt-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 md:text-sm">
                            Q{String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="leading-tight">{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-8 pl-[3.25rem] pr-8 md:pl-[3.75rem]">
                        <div className="space-y-4 text-slate-600">
                          <p className="text-base leading-relaxed md:text-lg">
                            {item.answer.lead}
                          </p>

                          <ul className="space-y-2 text-sm leading-relaxed md:text-base">
                            {item.answer.points.map((point) => (
                              <li key={point} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600/80" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          {item.answer.closing && (
                            <p className="border-l border-slate-300 pl-3 text-sm leading-relaxed text-slate-500 md:text-base">
                              {item.answer.closing}
                            </p>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
